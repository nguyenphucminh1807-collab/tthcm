// src/pages/TheoryView.js
import { allTheory, chaptersMeta } from '../data/allData.js';

export function renderTheory(state, currentChapterId = 1, searchQuery = '') {
  const chapterData = allTheory[currentChapterId] || allTheory[1];
  const meta = chaptersMeta.find(c => c.id === currentChapterId) || chaptersMeta[0];
  const isCompleted = (state.completedTheoryChapters || []).includes(currentChapterId);

  // Lọc nội dung nếu có tìm kiếm
  const query = (searchQuery || '').trim().toLowerCase();

  return `
    <div style="display:flex;flex-direction:column;gap:1.75rem;">
      <!-- Chapter Selection Tabs -->
      <div style="display:flex;gap:0.75rem;overflow-x:auto;padding-bottom:0.5rem;" class="no-scrollbar">
        ${chaptersMeta.map(c => `
          <button class="btn ${c.id === currentChapterId ? 'btn-primary' : 'btn-secondary'} btn-chapter-tab" 
                  data-chapter="${c.id}" 
                  style="white-space:nowrap;font-size:0.85rem;padding:0.6rem 1rem;flex-shrink:0;">
            <span>${c.number}: ${c.shortTitle}</span>
            ${(state.completedTheoryChapters || []).includes(c.id) ? ' <span style="color:#10B981;font-weight:bold;">✓</span>' : ''}
          </button>
        `).join('')}
      </div>

      <!-- Theory Main Container -->
      <div style="display:grid;grid-template-columns:1fr 280px;gap:2rem;align-items:start;" id="theoryGrid">
        <!-- Main Theory Text -->
        <div style="display:flex;flex-direction:column;gap:1.75rem;">
          <!-- Header Card of Chapter -->
          <div class="card" style="border-left:5px solid ${meta.color};">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
              <span class="badge" style="background-color:${meta.color}18;color:${meta.color};">${meta.number} • ${meta.badge}</span>
              <div style="display:flex;gap:0.5rem;">
                <button class="btn btn-secondary" id="btnToggleAllSections" style="font-size:0.8rem;padding:0.4rem 0.8rem;">
                  <span id="toggleAllText">Thu gọn tất cả</span>
                </button>
                <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'} btn-toggle-complete-chapter" data-chapter="${currentChapterId}" style="font-size:0.8rem;padding:0.4rem 0.8rem;">
                  ${isCompleted ? '✓ Đã hoàn thành' : 'Đánh dấu đã học'}
                </button>
              </div>
            </div>
            <h2 style="font-family:var(--font-serif);font-size:1.8rem;font-weight:800;color:var(--text-main);line-height:1.3;margin-bottom:0.75rem;">
              ${chapterData.title}
            </h2>
            <p style="font-size:0.95rem;color:var(--text-muted);line-height:1.6;margin-bottom:1rem;">
              ${chapterData.overview}
            </p>
            <div style="background-color:var(--bg-app);border-radius:12px;padding:1rem;border:1px solid var(--border-color);">
              <h4 style="font-size:0.85rem;font-weight:700;color:var(--text-main);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">
                🎯 Mục tiêu cần đạt sau khi học chương này:
              </h4>
              <ul style="padding-left:1.25rem;font-size:0.85rem;color:var(--text-muted);display:flex;flex-direction:column;gap:0.35rem;">
                ${chapterData.objectives.map(obj => `<li>${obj}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Section Content Accordions -->
          ${chapterData.sections.map((sec, idx) => {
            // Kiểm tra tìm kiếm
            const isMatch = !query || sec.title.toLowerCase().includes(query) || sec.content.toLowerCase().includes(query);
            if (!isMatch) return '';

            return `
              <div class="card section-card" id="${sec.id}" style="padding:0;overflow:hidden;">
                <div class="section-header" style="padding:1.25rem 1.5rem;background-color:var(--bg-card);border-bottom:1px solid var(--border-color);display:flex;align-items:center;justify-content:space-between;cursor:pointer;">
                  <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-main);margin:0;border:none;padding:0;">
                    ${sec.title}
                  </h3>
                  <button class="btn btn-secondary btn-collapse-sec" style="padding:0.25rem 0.5rem;border:none;background:transparent;">
                    <svg class="chevron-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                </div>
                <div class="section-body theory-content" style="padding:1.75rem;">
                  ${formatMarkdownContent(sec.content, query)}
                </div>
              </div>
            `;
          }).join('')}

          <!-- Confusing Concepts Comparison Table -->
          ${chapterData.confusingConceptsTable ? `
            <div class="card" id="sec_confusing">
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
                <div style="width:32px;height:32px;border-radius:8px;background:var(--warning-light);color:var(--warning);display:flex;align-items:center;justify-content:center;font-weight:bold;">⚠️</div>
                <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);margin:0;border:none;padding:0;">
                  Bảng Tổng Hợp So Sánh Những Nội Dung Dễ Nhầm Lẫn
                </h3>
              </div>
              <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">
                Sinh viên thường mất điểm ở những cặp khái niệm, mốc lịch sử có nét tương đồng dưới đây:
              </p>
              <div style="overflow-x:auto;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th style="width:25%;">Nội dung A</th>
                      <th style="width:25%;">Nội dung B</th>
                      <th>Bản chất phân biệt chính xác</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${chapterData.confusingConceptsTable.map(item => `
                      <tr>
                        <td style="font-weight:700;color:var(--primary-800);">${item.conceptA}</td>
                        <td style="font-weight:700;color:var(--accent-gold-dark);">${item.conceptB}</td>
                        <td style="line-height:1.6;font-size:0.9rem;">${item.distinction}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- Key Milestones & Works -->
          ${chapterData.keyMilestones ? `
            <div class="card" id="sec_milestones">
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
                <div style="width:32px;height:32px;border-radius:8px;background:var(--info-light);color:var(--info);display:flex;align-items:center;justify-content:center;font-weight:bold;">📅</div>
                <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);margin:0;border:none;padding:0;">
                  Mốc Thời Gian, Sự Kiện & Tác Phẩm Cần Ghi Nhớ
                </h3>
              </div>
              <div style="display:flex;flex-direction:column;gap:0.75rem;">
                ${chapterData.keyMilestones.map(m => `
                  <div style="display:flex;align-items:flex-start;gap:1rem;padding:0.75rem;background:var(--bg-app);border-radius:10px;border:1px solid var(--border-color);">
                    <span class="badge badge-primary" style="white-space:nowrap;margin-top:0.15rem;">${m.year}</span>
                    <span style="font-size:0.9rem;color:var(--text-main);font-weight:500;">${m.event}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Keywords & Summary -->
          <div class="card" id="sec_summary" style="background:linear-gradient(145deg, var(--bg-card), var(--primary-50));">
            <h3 style="font-size:1.2rem;font-weight:800;color:var(--primary-900);margin:0 0 0.75rem;border:none;padding:0;">
              🔑 Từ Khóa Cốt Lõi (Keywords)
            </h3>
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.5rem;">
              ${chapterData.keywords.map(kw => `
                <span class="badge" style="background:var(--bg-card);color:var(--primary-800);border:1px solid var(--primary-200);font-size:0.8rem;text-transform:none;">
                  # ${kw}
                </span>
              `).join('')}
            </div>

            <h3 style="font-size:1.2rem;font-weight:800;color:var(--primary-900);margin:0 0 0.5rem;border:none;padding:0;">
              📝 Tóm Tắt Cuối Chương
            </h3>
            <p style="font-size:0.95rem;line-height:1.7;color:var(--text-main);font-weight:500;">
              ${chapterData.summary}
            </p>
          </div>

          <!-- Bottom Navigation Bar between chapters -->
          <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem 0;">
            ${currentChapterId > 1 ? `
              <button class="btn btn-secondary btn-switch-chap" data-chapter="${currentChapterId - 1}">
                ← Chương ${currentChapterId - 1}
              </button>
            ` : '<div></div>'}

            <button class="btn btn-gold btn-practice-this-chap" data-chapter="${currentChapterId}">
              Luyện 100 Câu Trắc Nghiệm Chương ${currentChapterId} →
            </button>

            ${currentChapterId < 6 ? `
              <button class="btn btn-secondary btn-switch-chap" data-chapter="${currentChapterId + 1}">
                Chương ${currentChapterId + 1} →
              </button>
            ` : '<div></div>'}
          </div>
        </div>

        <!-- Sticky Table of Contents (On this page) -->
        <div style="position:sticky;top:90px;" class="desktop-only">
          <div class="card" style="padding:1.25rem;">
            <h4 style="font-size:0.85rem;font-weight:800;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.05em;margin-bottom:1rem;">
              📑 Mục Lục Chương ${currentChapterId}
            </h4>
            <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.85rem;">
              ${chapterData.sections.map(s => `
                <a href="#${s.id}" class="toc-link" style="color:var(--text-main);text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;transition:all 0.2s;line-height:1.4;">
                  ${s.title}
                </a>
              `).join('')}
              <a href="#sec_confusing" class="toc-link" style="color:var(--warning);font-weight:700;text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;">
                ⚠️ Bảng so sánh dễ nhầm
              </a>
              <a href="#sec_milestones" class="toc-link" style="color:var(--info);font-weight:700;text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;">
                📅 Mốc thời gian & tác phẩm
              </a>
              <a href="#sec_summary" class="toc-link" style="color:var(--primary-700);font-weight:700;text-decoration:none;padding:0.4rem 0.5rem;border-radius:6px;">
                🔑 Từ khóa & Tóm tắt
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Hàm format markdown đơn giản sang HTML hiển thị an toàn
function formatMarkdownContent(content, query) {
  let html = content
    // Replace headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    // Replace blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Replace bold and italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Replace list items
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Replace paragraphs
    .replace(/\n\n/g, '</p><p>');

  html = '<p>' + html + '</p>';

  // Highlight từ khóa tìm kiếm nếu có
  if (query) {
    const reg = new RegExp(`(${query})`, 'gi');
    html = html.replace(reg, '<mark style="background-color:#FEF08A;color:#854D0E;padding:0 2px;border-radius:3px;">$1</mark>');
  }

  return html;
}
