// src/pages/DashboardView.js
import { chaptersMeta, allQuestions } from '../data/allData.js';

export function renderDashboard(state) {
  const history = state.questionHistory || {};
  const answeredKeys = Object.keys(history);
  const totalAnswered = answeredKeys.length;

  let totalCorrect = 0;
  answeredKeys.forEach(k => {
    if (history[k].correctCount > 0) totalCorrect++;
  });

  const accuracyRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const completedChaptersCount = (state.completedTheoryChapters || []).length;
  const overallProgress = Math.round(((totalAnswered / allQuestions.length) * 0.7 + (completedChaptersCount / 6) * 0.3) * 100);

  return `
    <div style="display:flex;flex-direction:column;gap:2rem;">
      <!-- Hero Banner -->
      <div style="background: linear-gradient(135deg, #7F1D1D, #991B1B 50%, #B91C1C); border-radius: 20px; padding: 2.5rem; color: #FFFFFF; position: relative; overflow: hidden; box-shadow: var(--shadow-lg);">
        <div style="position: absolute; right: -20px; bottom: -30px; opacity: 0.12; pointer-events: none;">
          <svg width="280" height="280" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        </div>
        <div style="max-width: 720px; position: relative; z-index: 2;">
          <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(255,255,255,0.18);padding:0.35rem 0.85rem;border-radius:9999px;font-size:0.8rem;font-weight:700;margin-bottom:1rem;backdrop-filter:blur(8px);">
            <span>🇻🇳 GIÁO TRÌNH CHÍNH THỨC 2026</span>
            <span style="opacity:0.6;">•</span>
            <span>VĂN KIỆN ĐẠI HỘI XIV</span>
          </div>
          <h2 style="font-family:var(--font-serif);font-size:2.2rem;font-weight:800;line-height:1.2;margin-bottom:0.85rem;letter-spacing:-0.01em;">
            Ôn Tập & Luyện Thi Trắc Nghiệm Tư Tưởng Hồ Chí Minh
          </h2>
          <p style="font-size:1.05rem;opacity:0.92;line-height:1.6;margin-bottom:1.75rem;">
            Nền tảng e-learning toàn diện dành cho sinh viên đại học. Hệ thống 6 chương lý thuyết chuyên sâu, ngân hàng chuẩn xác 600 câu hỏi có giải thích chi tiết, flashcard ghi nhớ và thi thử mô phỏng thời gian thực.
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:1rem;">
            <button class="btn btn-gold" id="btnContinueStudy" style="font-size:0.95rem;padding:0.75rem 1.5rem;">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              <span>Tiếp Tục Học Lý Thuyết</span>
            </button>
            <button class="btn" id="btnQuickPractice" style="background:rgba(255,255,255,0.2);color:#FFFFFF;border:1px solid rgba(255,255,255,0.3);font-size:0.95rem;padding:0.75rem 1.5rem;backdrop-filter:blur(8px);">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              <span>Luyện Nhanh 20 Câu Ngẫu Nhiên</span>
            </button>
          </div>
        </div>
      </div>

      <!-- KPI Statistics Cards -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1.25rem;">
        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--primary-100);color:var(--primary-800);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Chương Đã Hoàn Thành</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${completedChaptersCount} / 6</div>
          </div>
        </div>

        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--accent-gold-light);color:var(--accent-gold-dark);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Câu Hỏi Đã Luyện</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${totalAnswered} <span style="font-size:0.9rem;color:var(--text-muted);font-weight:500;">/ ${allQuestions.length}</span></div>
          </div>
        </div>

        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--success-light);color:var(--success);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Tỷ Lệ Trả Lời Đúng</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${accuracyRate}%</div>
          </div>
        </div>

        <div class="card" style="display:flex;align-items:center;gap:1.25rem;">
          <div style="width:52px;height:52px;border-radius:14px;background-color:var(--info-light);color:var(--info);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/></svg>
          </div>
          <div>
            <div style="font-size:0.85rem;color:var(--text-muted);font-weight:600;">Tiến Độ Tổng Thể</div>
            <div style="font-size:1.6rem;font-weight:800;color:var(--text-main);">${overallProgress}%</div>
          </div>
        </div>
      </div>

      <!-- Chapter Navigation Grid -->
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.35rem;font-weight:800;color:var(--text-main);">Lộ Trình Ôn Tập 6 Chương</h3>
            <p style="font-size:0.85rem;color:var(--text-muted);">Toàn bộ kiến thức theo giáo trình mới nhất của Bộ Giáo dục và Đào tạo</p>
          </div>
          <button class="btn btn-secondary" id="btnGoFastTrack" style="font-size:0.85rem;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            <span>Ôn Thi Cấp Tốc</span>
          </button>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));gap:1.5rem;">
          ${chaptersMeta.map(chap => {
            const isCompleted = (state.completedTheoryChapters || []).includes(chap.id);
            // Tính số câu của chương này đã làm
            const chapQuestions = allQuestions.filter(q => q.chapterId === chap.id);
            const answeredInChap = chapQuestions.filter(q => !!history[q.id]).length;
            const chapProgress = Math.round((answeredInChap / chapQuestions.length) * 100);

            return `
              <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;border-top:4px solid ${chap.color};">
                <div>
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
                    <span class="badge" style="background-color:${chap.color}18;color:${chap.color};">${chap.number} • ${chap.badge}</span>
                    ${isCompleted ? `<span class="badge badge-success">✓ Đã học xong</span>` : `<span style="font-size:0.75rem;color:var(--text-muted);">${chap.pages}</span>`}
                  </div>
                  <h4 style="font-size:1.1rem;font-weight:800;color:var(--text-main);line-height:1.4;margin-bottom:0.5rem;">
                    ${chap.title}
                  </h4>
                  <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.5;margin-bottom:1.25rem;">
                    ${chap.description}
                  </p>
                </div>

                <div>
                  <div style="margin-bottom:1rem;">
                    <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:var(--text-muted);margin-bottom:0.35rem;">
                      <span>Tiến độ trắc nghiệm</span>
                      <span style="font-weight:700;color:var(--text-main);">${answeredInChap} / ${chapQuestions.length} câu (${chapProgress}%)</span>
                    </div>
                    <div style="width:100%;height:8px;background-color:var(--border-color);border-radius:9999px;overflow:hidden;">
                      <div style="width:${chapProgress}%;height:100%;background-color:${chap.color};border-radius:9999px;transition:width 0.4s ease;"></div>
                    </div>
                  </div>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
                    <button class="btn btn-secondary btn-read-theory" data-chapter="${chap.id}" style="font-size:0.85rem;padding:0.55rem;">
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                      <span>Đọc Lý Thuyết</span>
                    </button>
                    <button class="btn btn-primary btn-practice-chapter" data-chapter="${chap.id}" style="font-size:0.85rem;padding:0.55rem;background:${chap.color};">
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                      <span>Luyện Trắc Nghiệm</span>
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Exam History Card -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
          <div>
            <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);">Lịch Sử Thi Thử Gần Nhất</h3>
            <p style="font-size:0.8rem;color:var(--text-muted);">Theo dõi kết quả các bài kiểm tra trắc nghiệm đại học có bấm giờ</p>
          </div>
          <button class="btn btn-primary" id="btnStartNewExam" style="font-size:0.85rem;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>Bắt Đầu Thi Thử Mới</span>
          </button>
        </div>

        ${(state.examHistory && state.examHistory.length > 0) ? `
          <div style="overflow-x:auto;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>Số câu</th>
                  <th>Số câu đúng</th>
                  <th>Điểm (thang 10)</th>
                  <th>Thời gian làm bài</th>
                  <th>Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                ${state.examHistory.slice(0, 5).map(e => `
                  <tr>
                    <td>${e.date}</td>
                    <td>${e.totalQuestions} câu</td>
                    <td style="font-weight:700;color:var(--success);">${e.correctCount} / ${e.totalQuestions}</td>
                    <td><span class="badge ${e.score >= 8 ? 'badge-success' : e.score >= 5 ? 'badge-gold' : 'badge-danger'}" style="font-size:0.85rem;">${e.score.toFixed(1)} điểm</span></td>
                    <td>${e.timeSpent || 'Đã nộp bài'}</td>
                    <td><strong>${e.score >= 8.5 ? 'Xuất sắc' : e.score >= 7.0 ? 'Khá giỏi' : e.score >= 5.0 ? 'Đạt yêu cầu' : 'Cần ôn thêm'}</strong></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <div style="text-align:center;padding:2.5rem 1rem;color:var(--text-muted);">
            <svg style="width:48px;height:48px;margin:0 auto 1rem;color:var(--text-light);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            <p style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem;">Bạn chưa thực hiện bài thi thử nào</p>
            <p style="font-size:0.85rem;max-width:400px;margin:0 auto 1.25rem;">Hãy bấm nút bên dưới để thử sức với bộ đề thi ngẫu nhiên 30 - 50 câu có bấm giờ mô phỏng đề thi trắc nghiệm đại học.</p>
            <button class="btn btn-secondary" id="btnEmptyExamStart">Vào Phòng Thi Thử</button>
          </div>
        `}
      </div>
    </div>
  `;
}
