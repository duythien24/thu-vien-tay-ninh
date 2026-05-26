(function () {
  const config = window.SUPABASE_CONFIG;

  function isConfigured() {
    return Boolean(config?.url && config?.restUrl && config?.anonKey);
  }

  async function request(path, options = {}) {
    if (!isConfigured()) {
      throw new Error("Supabase is not configured.");
    }

    const headers = {
      apikey: config.anonKey,
      Authorization: `Bearer ${options.token || config.anonKey}`,
      "Content-Type": "application/json",
      Prefer: options.prefer || "return=representation",
      ...options.headers
    };

    const response = await fetch(`${config.restUrl}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Supabase request failed: ${response.status}`);
    }

    if (response.status === 204) {
      return null;
    }

    return response.json();
  }

  function normalizeBook(row) {
    return {
      id: row.id,
      title: row.title,
      category: row.category,
      label: row.label,
      author: row.author,
      cover: row.cover_url,
      desc: row.description,
      onlineUrl: row.online_url,
      sortOrder: row.sort_order
    };
  }

  async function fetchBooks() {
    const rows = await request("/books?select=*&order=sort_order.asc,title.asc", {
      headers: { Prefer: "" }
    });
    return rows.map(normalizeBook);
  }

  function normalizeSettings(rows = []) {
    return rows.reduce((settings, row) => {
      if (row.setting_key) {
        settings[row.setting_key] = row.setting_value || "";
      }
      return settings;
    }, {});
  }

  async function fetchSiteSettings() {
    const rows = await request("/site_settings?select=setting_key,setting_value", {
      headers: { Prefer: "" }
    });
    return normalizeSettings(rows);
  }

  async function signIn(email, password) {
    const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        apikey: config.anonKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || "Dang nhap khong thanh cong.");
    }

    return response.json();
  }

  function toBookRow(book) {
    return {
      title: book.title,
      category: book.category,
      label: book.label,
      author: book.author,
      cover_url: book.cover,
      description: book.desc,
      online_url: book.onlineUrl,
      sort_order: Number(book.sortOrder || 0)
    };
  }

  async function createBook(book, token) {
    const rows = await request("/books", {
      method: "POST",
      body: toBookRow(book),
      token
    });
    return rows?.[0] ? normalizeBook(rows[0]) : null;
  }

  async function updateBook(id, book, token) {
    const rows = await request(`/books?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: toBookRow(book),
      token
    });
    return rows?.[0] ? normalizeBook(rows[0]) : null;
  }

  async function deleteBook(id, token) {
    return request(`/books?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
      token
    });
  }

  async function updateSiteSetting(key, value, token) {
    const rows = await request("/site_settings?on_conflict=setting_key", {
      method: "POST",
      body: {
        setting_key: key,
        setting_value: value
      },
      prefer: "resolution=merge-duplicates,return=representation",
      token
    });
    return rows?.[0] || null;
  }

  window.LibraryDB = {
    createBook,
    deleteBook,
    fetchBooks,
    fetchSiteSettings,
    isConfigured,
    signIn,
    updateBook,
    updateSiteSetting
  };
})();
