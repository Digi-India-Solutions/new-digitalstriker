import { getDb } from "./lib/db.js";
import { getSupabase, USE_SUPABASE } from "./lib/supabase.js";

const TARGET = process.env.TARGET_API_URL;
const USE_MONGO = !!process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();
  if (TARGET && !USE_MONGO && !USE_SUPABASE) return proxy(req, res, "GET", "/api/allProduct");
  if (!USE_MONGO && !USE_SUPABASE) return res.status(200).json({ success: true, data: [] });

  if (USE_SUPABASE) {
    try {
      const supabase = getSupabase();
      const { data, error } = await supabase.from("products").select("id, name, des, img, category, created_at").order("created_at", { ascending: false });
      if (error) return res.status(500).json({ success: false, message: error.message });
      const list = (data || []).map((r) => ({ _id: r.id, name: r.name, des: r.des, img: r.img, category: r.category }));
      return res.status(200).json({ success: true, data: list });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  try {
    const db = await getDb();
    const data = await db.collection("products").find({}).sort({ createdAt: -1 }).toArray();
    res.status(200).json({ success: true, data });
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
