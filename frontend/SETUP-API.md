# Enable upload/delete on the live site

The app now uses **same-origin `/api`** (no CORS). The API runs as Vercel serverless functions.

## One-time setup

1. Create a free MongoDB database at **https://www.mongodb.com/cloud/atlas** (sign up → create free cluster → get connection string).
2. In **Vercel**: open your project → **Settings** → **Environment Variables**.
3. Add:
   - **Name:** `MONGODB_URI`
   - **Value:** your MongoDB Atlas connection string (e.g. `mongodb+srv://user:pass@cluster.mongodb.net/digitalstricker?retryWrites=true&w=majority`)
   - **Environment:** Production (and Preview if you want)
4. **Redeploy** the project (Deployments → ⋮ on latest → Redeploy).

After that, **upload** and **delete** products will work on the live site.
