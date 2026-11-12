// src/pages/SettingsView.js
export function renderSettings(state) {
  return `
    <div style="max-width:750px;margin:0 auto;display:flex;flex-direction:column;gap:1.75rem;">
      <div class="card">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
          Cài Đặt Ứng Dụng & Dữ Liệu
        </h2>
        <p style="font-size:0.85rem;color:var(--text-muted);">
          Tùy chỉnh trải nghiệm học tập và sao lưu tiến độ cá nhân
        </p>
      </div>

      <!-- Appearance Settings -->
      <div class="card">
        <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          🎨 Giao Diện & Hiển Thị
        </h3>
        <div style="display:flex;flex-direction:column;gap:1.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-weight:700;color:var(--text-main);">Chế độ Sáng / Tối (Dark Mode)</div>
              <div style="font-size:0.8rem;color:var(--text-muted);">Bảo vệ mắt khi ôn thi vào ban đêm</div>
            </div>
            <select id="settingThemeSelect" style="padding:0.5rem 0.85rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-weight:600;font-size:0.85rem;">
              <option value="light" ${state.theme === 'light' ? 'selected' : ''}>Giao diện Sáng (Mặc định)</option>
              <option value="dark" ${state.theme === 'dark' ? 'selected' : ''}>Giao diện Tối (Dark Mode)</option>
            </select>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border-color);padding-top:1.25rem;">
            <div>
              <div style="font-weight:700;color:var(--text-main);">Cỡ chữ đọc lý thuyết</div>
              <div style="font-size:0.8rem;color:var(--text-muted);">Điều chỉnh kích thước văn bản khi đọc bài</div>
            </div>
            <select id="settingFontSizeSelect" style="padding:0.5rem 0.85rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-weight:600;font-size:0.85rem;">
              <option value="medium" ${state.fontSize === 'medium' ? 'selected' : ''}>Vừa vặn (Tiêu chuẩn)</option>
              <option value="large" ${state.fontSize === 'large' ? 'selected' : ''}>Lớn (Dễ đọc)</option>
              <option value="small" ${state.fontSize === 'small' ? 'selected' : ''}>Nhỏ (Nhiều nội dung)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Backup & Restore -->
      <div class="card">
        <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          💾 Sao Lưu & Phục Hồi Dữ Liệu Học Tập
        </h3>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1.25rem;line-height:1.5;">
          Bạn có thể xuất toàn bộ tiến độ (câu đã làm, điểm thi, câu đánh dấu) thành file JSON để lưu về máy tính hoặc chuyển sang điện thoại.
        </p>

        <div style="display:flex;gap:1rem;flex-wrap:wrap;">
          <button class="btn btn-secondary" id="btnExportData">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>Xuất Dữ Liệu (Backup JSON)</span>
          </button>

          <label class="btn btn-secondary" style="cursor:pointer;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
            <span>Nhập Dữ Liệu (Restore)</span>
            <input type="file" id="importFileInput" accept=".json" style="display:none;" />
          </label>
        </div>
      </div>

      <!-- About & Academic Source -->
      <div class="card" style="background:var(--bg-app);border-left:4px solid var(--primary-700);">
        <h4 style="font-size:0.95rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">
          Tài Liệu Nguồn & Bản Quyền Học Thuật
        </h4>
        <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;margin-bottom:0.75rem;">
          Ứng dụng được biên soạn dựa trên <strong>Giáo trình Tư tưởng Hồ Chí Minh</strong> (Dành cho bậc đại học hệ không chuyên lý luận chính trị) - Tái bản có sửa chữa, bổ sung theo Văn kiện Đại hội lần thứ XIV của Đảng, Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội, 2026.
        </p>
        <p style="font-size:0.8rem;color:var(--text-muted);">
          Phiên bản hệ thống: <strong>v2.0.26 (E-Learning University Edition)</strong>.
        </p>
      </div>
    </div>
  `;
}
