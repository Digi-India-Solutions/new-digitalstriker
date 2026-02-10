/**
 * Seed script: adds the 6 Active Product category items via the API.
 * Run with backend running: node seed-active-products.js
 * Uses placeholder images (replace in admin dashboard if needed).
 */

const API = "http://localhost:23000";

const products = [
  {
    name: "PON SFP (Passive Optical Network Small Form-factor Pluggable)",
    img: "https://picsum.photos/id/1/400/300",
    category: "Active Product",
  },
  {
    name: "SFP (Small Form-factor Pluggable)",
    img: "https://picsum.photos/id/2/400/300",
    category: "Active Product",
  },
  {
    name: "Single Mode Router",
    img: "https://picsum.photos/id/3/400/300",
    category: "Active Product",
  },
  {
    name: "Dual Mode Router",
    img: "https://picsum.photos/id/4/400/300",
    category: "Active Product",
  },
  {
    name: "Optical Line Terminal (OLT)",
    img: "https://picsum.photos/id/5/400/300",
    category: "Active Product",
  },
  {
    name: "Server Rocks",
    img: "https://picsum.photos/id/6/400/300",
    category: "Active Product",
  },
];

async function seed() {
  console.log("Adding products to Active Product category...\n");
  for (const p of products) {
    try {
      const res = await fetch(`${API}/api/createProducts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: p.name,
          des: "",
          img: p.img,
          category: p.category,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        console.log("Added:", p.name);
      } else {
        console.error("Failed:", p.name, data.message || res.status);
      }
    } catch (err) {
      console.error("Error adding", p.name, err.message);
    }
  }
  console.log("\nDone.");
}

seed();
