import { getDb } from "./lib/db.js";
import { getSupabase, USE_SUPABASE } from "./lib/supabase.js";

const TARGET = process.env.TARGET_API_URL;
const USE_MONGO = !!process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  if (TARGET && !USE_MONGO && !USE_SUPABASE) return proxy(req, res, "POST", "/api/createcontact", req.body);
  if (!USE_MONGO && !USE_SUPABASE) return res.status(503).json({ success: false, message: "Add SUPABASE_URL and SUPABASE_ANON_KEY in Vercel." });

  if (USE_SUPABASE) {
    try {
      const supabase = getSupabase();
      const { Name, Email, PhoneNumber, Message } = req.body || {};
      if (!Name || !Email) return res.status(400).json({ success: false, message: "Name and Email are required." });
      const { error } = await supabase.from("contacts").insert({ Name, Email, PhoneNumber: PhoneNumber || "", Message: Message || "" });
      if (error) return res.status(500).json({ success: false, message: error.message });
      return res.status(201).json({ success: true });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  try {
    const db = await getDb();
    const { Name, Email, PhoneNumber, Message } = req.body || {};
    if (!Name || !Email) return res.status(400).json({ success: false, message: "Name and Email are required." });
    await db.collection("contacts").insertOne({ Name, Email, PhoneNumber: PhoneNumber || "", Message: Message || "", createdAt: new Date() });
    res.status(201).json({ success: true });
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
