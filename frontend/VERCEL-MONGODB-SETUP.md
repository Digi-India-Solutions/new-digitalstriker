# Fix: "Add MONGODB_URI in Vercel" (503)

Do these **two things** so upload and delete work.

---

## Step 1: Get a free MongoDB connection string (~2 min)

1. Go to **https://www.mongodb.com/cloud/atlas** and sign up (or log in).
2. Click **"Build a Database"** → choose **FREE** (M0) → **Create**.
3. Create a user: choose a **username** and **password** (remember them).
4. Under "Where would you like to connect from?" click **"Add My Current IP Address"** (or use `0.0.0.0/0` for "allow from anywhere").
5. Click **"Finish and Close"**, then **"Go to Databases"**.
6. On your cluster, click **"Connect"** → **"Drivers"** (or "Connect your application").
7. Copy the connection string. It looks like:
   ```text
   mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
8. Replace `USERNAME` and `PASSWORD` with the user you created. Add a database name before the `?`:
   ```text
   mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/digitalstricker?retryWrites=true&w=majority
   ```
   (Use your real cluster host instead of `cluster0.xxxxx.mongodb.net`.)

You now have your **MONGODB_URI**.

---

## Step 2: Add MONGODB_URI in Vercel

1. Go to **https://vercel.com** and open your project (the one for this frontend).
2. Click **Settings** (top tab).
3. In the left sidebar, click **Environment Variables**.
4. Under "Key", type: **`MONGODB_URI`**
5. Under "Value", paste your full connection string from Step 1.
6. Select **Production** (and **Preview** if you want it on preview URLs too).
7. Click **Save**.
8. **Redeploy** so the new variable is used:
   - Go to the **Deployments** tab.
   - Click the **⋮** (three dots) on the **latest** deployment.
   - Click **Redeploy** → confirm.

Wait for the redeploy to finish (1–2 minutes), then open your site again and try **upload** and **delete**. The 503 and "Add MONGODB_URI" message should be gone.
