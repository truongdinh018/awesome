-- Awesome AI search index (SQLite)
-- status: new | current | updated | removed
-- Re-run: npm run index:search
-- Note: sql.js WASM build has no FTS5 — keyword retrieval uses LIKE.

PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY,
  path TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  domain TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT '',
  tags_json TEXT NOT NULL DEFAULT '[]',
  repo TEXT NOT NULL DEFAULT '',
  repo_url TEXT NOT NULL DEFAULT '',
  stars TEXT NOT NULL DEFAULT '',
  excerpt TEXT NOT NULL DEFAULT '',
  body_text TEXT NOT NULL DEFAULT '',
  content_hash TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'current', 'updated', 'removed')),
  first_seen_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  content_updated_at TEXT,
  indexed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_domain ON articles(domain);

CREATE TABLE IF NOT EXISTS embeddings (
  article_id INTEGER PRIMARY KEY REFERENCES articles(id) ON DELETE CASCADE,
  model TEXT NOT NULL,
  dims INTEGER NOT NULL,
  vector BLOB NOT NULL
);
