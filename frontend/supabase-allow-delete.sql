-- Run this in Supabase: SQL Editor → New query → Paste → Run
-- This allows the app to SELECT, INSERT, UPDATE, and DELETE products and contacts.

-- Products: allow all operations
DROP POLICY IF EXISTS "Allow all for anon" ON products;
CREATE POLICY "products_select" ON products FOR SELECT USING (true);
CREATE POLICY "products_insert" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "products_update" ON products FOR UPDATE USING (true);
CREATE POLICY "products_delete" ON products FOR DELETE USING (true);

-- Contacts: allow all operations
DROP POLICY IF EXISTS "Allow all for anon" ON contacts;
CREATE POLICY "contacts_select" ON contacts FOR SELECT USING (true);
CREATE POLICY "contacts_insert" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "contacts_update" ON contacts FOR UPDATE USING (true);
CREATE POLICY "contacts_delete" ON contacts FOR DELETE USING (true);
