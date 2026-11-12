// src/components/Header.js
export function renderHeader(state) {
  const isDark = state.theme === 'dark';

  return `
    <header class="app-header">
      <div class="header-left">
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Navigation">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <div class="header-search">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" id="globalSearchInput" placeholder="Tìm kiếm khái niệm, mốc lịch sử, câu hỏi..." />
        </div>
      </div>
      <div class="header-right">
        <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);font-weight:600;" class="desktop-only">
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:var(--success);"></span>
          <span>Ngân hàng: 600 câu</span>
        </div>
        <button class="theme-toggle-btn" id="themeToggleBtn" title="Chuyển chế độ sáng/tối">
          ${isDark 
            ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
            : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
          }
        </button>
      </div>
    </header>
  `;
}
