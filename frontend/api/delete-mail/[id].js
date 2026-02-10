import { ObjectId } from "mongodb";
import { getDb } from "../../lib/db.js";
import { getSupabase, USE_SUPABASE } from "../../lib/supabase.js";

const TARGET = process.env.TARGET_API_URL;
const USE_MONGO = !!process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();
  const { id } = req.query;
  if (!id) return res.status(400).json({ success: false, message: "Missing id" });
  if (TARGET && !USE_MONGO && !USE_SUPABASE) return proxy(req, res, "DELETE", `/api/delete-mail/${id}`);
  if (!USE_MONGO && !USE_SUPABASE) return res.status(503).json({ success: false, message: "Add SUPABASE_URL and SUPABASE_ANON_KEY in Vercel." });

  if (USE_SUPABASE) {
    try {
      const supabase = getSupabase();
      const { error } = await supabase.from("contacts").delete().eq("id", id);
      if (error) return res.status(error.code === "PGRST116" ? 404 : 500).json({ success: false, message: error.message });
      return res.status(200).json({ success: true, message: "Contact deleted." });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  try {
    if (!ObjectId.isValid(id) || String(id).length !== 24) return res.status(400).json({ success: false, message: "Invalid ID." });
    const db = await getDb();
    const result = await db.collection("contacts").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) return res.status(404).json({ success: false, message: "Contact not found." });
    res.status(200).json({ success: true, message: "Contact deleted." });
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
