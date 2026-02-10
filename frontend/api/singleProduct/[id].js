import { ObjectId } from "mongodb";
import { getDb } from "../../lib/db.js";
import { getSupabase, USE_SUPABASE } from "../../lib/supabase.js";

const TARGET = process.env.TARGET_API_URL;
const USE_MONGO = !!process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();
  const { id } = req.query;
  if (!id) return res.status(400).json({ success: false, message: "Missing id" });
  if (TARGET && !USE_MONGO && !USE_SUPABASE) return proxy(req, res, "GET", `/api/singleProduct/${id}`);
  if (!USE_MONGO && !USE_SUPABASE) return res.status(503).json({ success: false, message: "Add SUPABASE_URL and SUPABASE_ANON_KEY in Vercel." });

  if (USE_SUPABASE) {
    try {
      const supabase = getSupabase();
      const { data, error } = await supabase.from("products").select("id, name, des, img, category").eq("id", id).single();
      if (error || !data) return res.status(404).json({ success: false, message: "Product not found." });
      return res.status(200).json({ success: true, data: { _id: data.id, name: data.name, des: data.des, img: data.img, category: data.category } });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  try {
    if (!ObjectId.isValid(id) || String(id).length !== 24) return res.status(400).json({ success: false, message: "Invalid product ID." });
    const db = await getDb();
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });
    if (!product) return res.status(404).json({ success: false, message: "Product not found." });
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function proxy(req, res, method, path) {
  try {
    const r = await fetch(`${TARGET}${path}`, { method });
    const data = await r.text();
    try { res.status(r.status).json(JSON.parse(data)); } catch { res.status(r.status).send(data); }
  } catch (err) {
    res.status(502).json({ success: false, message: "Cannot reach backend." });
  }
}
