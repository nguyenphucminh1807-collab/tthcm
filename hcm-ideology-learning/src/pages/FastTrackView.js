// src/pages/FastTrackView.js
import { fastTrackData } from '../data/allData.js';

export function renderFastTrack(state) {
  const checkedItems = state.fastTrackChecklist || [];

  return `
    <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <!-- Hero Header -->
      <div class="card" style="background:linear-gradient(135deg, #991B1B, #B91C1C);color:#FFFFFF;padding:2.5rem 1.75rem;border-radius:18px;">
        <span class="badge" style="background:rgba(255,255,255,0.2);color:#FFFFFF;margin-bottom:0.75rem;">FAST-TRACK 2026</span>
        <h2 style="font-family:var(--font-serif);font-size:2rem;font-weight:800;margin-bottom:0.5rem;line-height:1.3;">
          Khu Vực Ôn Thi Cấp Tốc (Fast-Track)
        </h2>
        <p style="font-size:0.95rem;opacity:0.92;line-height:1.6;max-width:650px;">
          Tập hợp cô đọng toàn bộ kiến thức bắt buộc phải thuộc lòng trước ngày thi: các cặp khái niệm dễ nhầm lẫn, niên biểu thời gian, danh ngôn kinh điển và checklist ghi nhớ.
        </p>
      </div>

      <!-- Checklist Kiến Thức Cốt Lõi 6 Chương -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              ✓ Checklist Kiến Thức Bắt Buộc Phải Nhớ (6 Chương)
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Tích chọn vào từng mục sau khi bạn đã học thuộc</p>
          </div>
          <span class="badge badge-gold" id="checklistProgressBadge">
            ${checkedItems.length} / ${fastTrackData.mustRememberPoints.length} đã thuộc
          </span>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${fastTrackData.mustRememberPoints.map((item, idx) => {
            const chkId = `chk_must_${idx}`;
            const isChecked = checkedItems.includes(chkId);

            return `
              <div style="display:flex;align-items:flex-start;gap:1rem;padding:1rem;background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;transition:all 0.2s;">
                <input type="checkbox" class="fasttrack-checkbox" id="${chkId}" data-chkid="${chkId}" ${isChecked ? 'checked' : ''} style="width:20px;height:20px;margin-top:0.25rem;cursor:pointer;accent-color:var(--primary-700);" />
                <label for="${chkId}" style="cursor:pointer;flex:1;">
                  <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem;">
                    <span class="badge badge-primary">${item.chapter}</span>
                    <strong style="color:var(--text-main);font-size:0.95rem;">${item.title}</strong>
                  </div>
                  <div style="font-size:0.9rem;color:var(--text-muted);line-height:1.6;">
                    ${item.key}
                  </div>
                </label>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Cặp Khái Niệm Dễ Nhầm Lẫn -->
      <div class="card">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--warning-light);color:var(--warning);display:flex;align-items:center;justify-content:center;font-weight:900;">⚠️</div>
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              Những Cặp Khái Niệm Kinh Điển Dễ Nhầm Lẫn Nhất
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Phân tích bản chất cốt lõi để tránh mất điểm oan uổng</p>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${fastTrackData.confusingPairs.map(pair => `
            <div style="border:1px solid var(--border-color);border-radius:12px;padding:1.25rem;background:var(--bg-card);">
              <h4 style="font-size:1rem;font-weight:800;color:var(--primary-800);margin-bottom:0.5rem;">
                📌 ${pair.pair}
              </h4>
              <p style="font-size:0.9rem;color:var(--text-main);line-height:1.6;margin:0;">
                ${pair.explanation}
              </p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Niên Biểu Lịch Sử Không Thể Quên -->
      <div class="card">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--info-light);color:var(--info);display:flex;align-items:center;justify-content:center;font-weight:900;">📅</div>
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              Niên Biểu Lịch Sử: Các Mốc Thời Gian Trọng Điểm
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Sắp xếp theo thứ tự thời gian giúp ghi nhớ mạch lạc</p>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:0.75rem;">
          ${fastTrackData.chronologyTimeline.map(item => `
            <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;background:var(--bg-app);border-radius:10px;border:1px solid var(--border-color);">
              <span class="badge badge-primary" style="font-size:0.75rem;white-space:nowrap;margin-top:0.15rem;">${item.year}</span>
              <span style="font-size:0.85rem;color:var(--text-main);font-weight:600;line-height:1.4;">${item.event}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Danh Ngôn Bất Hủ Của Hồ Chí Minh -->
      <div class="card">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-gold-light);color:var(--accent-gold-dark);display:flex;align-items:center;justify-content:center;font-weight:900;">💬</div>
          <div>
            <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);">
              Những Câu Danh Ngôn Bất Hủ & Hoàn Cảnh Xuất Xứ
            </h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Thường xuyên xuất hiện trong các câu hỏi nhận biết và thông hiểu</p>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          ${fastTrackData.famousQuotes.map(q => `
            <div style="padding:1rem 1.25rem;background:var(--bg-app);border-left:4px solid var(--accent-gold);border-radius:0 10px 10px 0;">
              <div style="font-size:1rem;font-weight:700;color:var(--text-main);line-height:1.5;margin-bottom:0.35rem;font-style:italic;">
                "${q.quote}"
              </div>
              <div style="font-size:0.8rem;color:var(--accent-gold-dark);font-weight:700;">
                📖 Xuất xứ: ${q.context}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
