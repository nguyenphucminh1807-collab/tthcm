// src/pages/QuestionBankView.js
import { allQuestions, chaptersMeta } from '../data/allData.js';

export function renderQuestionBank(state, filterChapter = 'all', filterLevel = 'all', searchQuery = '', page = 1) {
  const query = (searchQuery || '').trim().toLowerCase();
  const PAGE_SIZE = 15;

  let filtered = allQuestions.filter(q => {
    if (filterChapter !== 'all' && q.chapterId != filterChapter) return false;
    if (filterLevel !== 'all' && q.level !== filterLevel) return false;
    if (query) {
      const matchQ = q.question.toLowerCase().includes(query);
      const matchOpts = q.options.some(opt => opt.toLowerCase().includes(query));
      const matchExp = q.explanation.toLowerCase().includes(query);
      if (!matchQ && !matchOpts && !matchExp) return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const safePage = Math.max(1, Math.min(page, totalPages));
  const currentQuestions = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const levelBadges = {
    'nhan_biet': { label: 'Nhận biết', cls: 'badge-info' },
    'thong_hieu': { label: 'Thông hiểu', cls: 'badge-primary' },
    'van_dung': { label: 'Vận dụng', cls: 'badge-gold' },
    'van_dung_cao': { label: 'Vận dụng cao', cls: 'badge-danger' }
  };

  const bookmarks = state.bookmarkedQuestions || [];

  return `
    <div style="display:flex;flex-direction:column;gap:1.5rem;">
      <!-- Bank Header & Controls -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem;">
          <div>
            <h2 style="font-size:1.6rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
              Ngân Hàng 600 Câu Hỏi Trắc Nghiệm Chuẩn Hóa
            </h2>
            <p style="font-size:0.85rem;color:var(--text-muted);">
              Phân loại 4 mức độ tư duy (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao) và giải thích chi tiết từng phương án
            </p>
          </div>
          <div style="display:flex;gap:0.75rem;">
            <button class="btn btn-primary" id="btnPracticeFiltered" style="font-size:0.85rem;">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Luyện Tập Bộ Lọc Này (${filtered.length} câu)</span>
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:0.75rem;">
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:0.35rem;text-transform:uppercase;">Theo Chương</label>
            <select id="qbChapterFilter" style="width:100%;padding:0.55rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;font-weight:600;">
              <option value="all" ${filterChapter === 'all' ? 'selected' : ''}>Tất Cả 6 Chương (600 câu)</option>
              ${chaptersMeta.map(c => `<option value="${c.id}" ${filterChapter == c.id ? 'selected' : ''}>${c.number}: ${c.shortTitle} (100 câu)</option>`).join('')}
            </select>
          </div>

          <div>
            <label style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:0.35rem;text-transform:uppercase;">Mức Độ Khó</label>
            <select id="qbLevelFilter" style="width:100%;padding:0.55rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;font-weight:600;">
              <option value="all" ${filterLevel === 'all' ? 'selected' : ''}>Tất cả mức độ</option>
              <option value="nhan_biet" ${filterLevel === 'nhan_biet' ? 'selected' : ''}>Nhận biết (Cơ bản)</option>
              <option value="thong_hieu" ${filterLevel === 'thong_hieu' ? 'selected' : ''}>Thông hiểu (Bản chất)</option>
              <option value="van_dung" ${filterLevel === 'van_dung' ? 'selected' : ''}>Vận dụng (Thực tiễn)</option>
              <option value="van_dung_cao" ${filterLevel === 'van_dung_cao' ? 'selected' : ''}>Vận dụng cao (Tổng hợp)</option>
            </select>
          </div>

          <div>
            <label style="display:block;font-size:0.75rem;font-weight:700;color:var(--text-muted);margin-bottom:0.35rem;text-transform:uppercase;">Tìm Kiếm Câu Hỏi</label>
            <input type="text" id="qbSearchInput" value="${searchQuery}" placeholder="Gõ từ khóa cần tìm..." style="width:100%;padding:0.55rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;" />
          </div>
        </div>
      </div>

      <!-- Result Count Info -->
      <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.85rem;color:var(--text-muted);">
        <span>Hiển thị <strong>${filtered.length}</strong> câu hỏi phù hợp (Trang ${safePage}/${totalPages})</span>
        <span style="font-weight:600;">Đã lưu: ${bookmarks.length} câu đánh dấu</span>
      </div>

      <!-- Question List -->
      <div style="display:flex;flex-direction:column;gap:1.25rem;">
        ${currentQuestions.map((q, idx) => {
          const isBookmarked = bookmarks.includes(q.id);
          const letters = ['A', 'B', 'C', 'D'];
          const lvl = levelBadges[q.level] || { label: q.level, cls: 'badge-primary' };

          return `
            <div class="card" style="display:flex;flex-direction:column;gap:1rem;">
              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                  <span class="badge badge-primary">Chương ${q.chapterId}</span>
                  <span class="badge ${lvl.cls}">${lvl.label}</span>
                  <span style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">#${q.id} • ${q.type || 'Trắc nghiệm'}</span>
                </div>
                <button class="btn btn-secondary btn-bookmark-question" data-qid="${q.id}" style="padding:0.35rem 0.65rem;font-size:0.8rem;border:none;">
                  <svg width="18" height="18" fill="${isBookmarked ? 'var(--accent-gold)' : 'none'}" stroke="${isBookmarked ? 'var(--accent-gold)' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                  <span>${isBookmarked ? 'Đã lưu' : 'Đánh dấu'}</span>
                </button>
              </div>

              <div style="font-size:1.05rem;font-weight:700;color:var(--text-main);line-height:1.5;">
                <span style="color:var(--primary-700);margin-right:0.35rem;">Câu ${(safePage - 1) * PAGE_SIZE + idx + 1}:</span>
                ${q.question}
              </div>

              <!-- Options Grid -->
              <div style="display:grid;grid-template-columns:1fr;gap:0.6rem;">
                ${q.options.map((opt, oIdx) => `
                  <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem 1rem;border-radius:10px;background:var(--bg-app);border:1px solid var(--border-color);font-size:0.9rem;">
                    <span style="font-weight:800;color:var(--text-main);width:24px;flex-shrink:0;">${letters[oIdx]}.</span>
                    <span style="color:var(--text-main);">${opt}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Toggle Explanation Button -->
              <div>
                <button class="btn btn-secondary btn-toggle-explain" data-qid="${q.id}" style="font-size:0.8rem;padding:0.4rem 0.85rem;">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <span>Xem Đáp Án & Giải Thích Chi Tiết</span>
                </button>
              </div>

              <!-- Detailed Explanation Container (Hidden by default) -->
              <div class="explanation-box" id="explain_${q.id}" style="display:none;background:var(--success-light);border:1px solid var(--success);border-radius:12px;padding:1.25rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.6rem;color:var(--success);font-weight:800;font-size:0.95rem;">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>ĐÁP ÁN ĐÚNG: ${letters[q.correctAnswer]}. ${q.options[q.correctAnswer]}</span>
                </div>
                <div style="font-size:0.9rem;color:var(--text-main);line-height:1.6;margin-bottom:0.75rem;">
                  <strong>💡 Giải thích vì sao đúng:</strong> ${q.explanation}
                </div>
                ${q.distractorExplanations ? `
                  <div style="font-size:0.85rem;color:var(--text-muted);border-top:1px dashed var(--border-color);padding-top:0.75rem;">
                    <strong>🔍 Phân tích vì sao các phương án còn lại sai:</strong>
                    <ul style="padding-left:1.25rem;margin-top:0.35rem;display:flex;flex-direction:column;gap:0.35rem;">
                      ${q.distractorExplanations.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Pagination Controls -->
      ${totalPages > 1 ? `
        <div style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-top:1rem;">
          <button class="btn btn-secondary btn-qb-page" data-page="${safePage - 1}" ${safePage === 1 ? 'disabled' : ''}>← Trước</button>
          <span style="font-size:0.85rem;font-weight:700;padding:0 0.75rem;">Trang ${safePage} / ${totalPages}</span>
          <button class="btn btn-secondary btn-qb-page" data-page="${safePage + 1}" ${safePage === totalPages ? 'disabled' : ''}>Sau →</button>
        </div>
      ` : ''}
    </div>
  `;
}
