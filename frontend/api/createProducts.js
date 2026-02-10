import { getDb } from "./lib/db.js";
import { getSupabase, USE_SUPABASE } from "./lib/supabase.js";

const TARGET = process.env.TARGET_API_URL;
const USE_MONGO = !!process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  if (TARGET && !USE_MONGO && !USE_SUPABASE) return proxy(req, res, "POST", "/api/createProducts", req.body);
  if (!USE_MONGO && !USE_SUPABASE) return res.status(503).json({ success: false, message: "Add SUPABASE_URL and SUPABASE_ANON_KEY (or MONGODB_URI) in Vercel Environment Variables." });

  if (USE_SUPABASE) {
    try {
      const supabase = getSupabase();
      const { name, des, img, category } = req.body || {};
      if (!name || !img || !category) return res.status(400).json({ success: false, message: "Name, image URL and category are required." });
      const { data, error } = await supabase.from("products").insert({ name, des: des || "", img, category }).select("id, name, des, img, category, created_at").single();
      if (error) return res.status(500).json({ success: false, message: error.message });
      const product = { _id: data.id, name: data.name, des: data.des, img: data.img, category: data.category };
      return res.status(201).json({ success: true, data: product });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  try {
    const db = await getDb();
    const { name, des, img, category } = req.body || {};
    if (!name || !img || !category) return res.status(400).json({ success: false, message: "Name, image URL and category are required." });
    const doc = { name, des: des || "", img, category, createdAt: new Date() };
    const result = await db.collection("products").insertOne(doc);
    const product = { _id: result.insertedId, ...doc };
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function proxy(req, res, method, path, body) {
  try {
    const r = await fetch(`${TARGET}${path}`, { method, headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    const data = await r.text();
    try { res.status(r.status).json(JSON.parse(data)); } catch { res.status(r.status).send(data); }
  } catch (err) {
    res.status(502).json({ success: false, message: "Cannot reach backend." });
  }
}
