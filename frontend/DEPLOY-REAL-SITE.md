# Point digitalstriker.in (real site) to this deployment

The fixed app is deployed on Vercel. To serve it on **https://digitalstriker.in**:

## DNS (one-time)

In your domain registrar (where you bought digitalstriker.in), set:

**Option A – A record (recommended)**  
- Type: **A**  
- Name: **@** (or `digitalstriker.in`)  
- Value: **76.76.21.21**

**Option B – Use Vercel nameservers**  
- Set domain nameservers to:  
  - `ns1.vercel-dns.com`  
  - `ns2.vercel-dns.com`  

(If you use **www** as well, add a CNAME: `www` → `cname.vercel-dns.com` in the Vercel project.)

After DNS propagates (up to 24–48 hours, often a few minutes), **https://digitalstriker.in** will show this deployment.

## Current production URL (works now)

- **https://frontend-bqyp1n60i-tarun-soods-projects.vercel.app**  
  Same app; use this until DNS is updated.

## API

The app uses **https://api.digitalstriker.in** for products and contact. Ensure that backend is deployed and reachable so upload/delete and forms work.
