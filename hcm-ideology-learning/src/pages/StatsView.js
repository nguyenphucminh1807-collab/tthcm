// src/pages/StatsView.js
import { allQuestions, chaptersMeta } from '../data/allData.js';

export function renderStats(state) {
  const history = state.questionHistory || {};
  const answeredIds = Object.keys(history);
  const totalAnswered = answeredIds.length;

  let totalCorrect = 0;
  let totalWrong = 0;
  const chapterStats = {};

  // Khởi tạo stats 6 chương
  chaptersMeta.forEach(c => {
    chapterStats[c.id] = { answered: 0, correct: 0, total: 100 };
  });

  answeredIds.forEach(id => {
    const q = allQuestions.find(item => item.id === id);
    const entry = history[id];
    if (q) {
      if (entry.correctCount > 0) totalCorrect++;
      else totalWrong++;

      if (chapterStats[q.chapterId]) {
        chapterStats[q.chapterId].answered++;
        if (entry.correctCount > 0) chapterStats[q.chapterId].correct++;
      }
    }
  });

  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const examHistory = state.examHistory || [];

  return `
    <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <div class="card">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
          Thống Kê Hoạt Động & Tiến Độ Ôn Tập
        </h2>
        <p style="font-size:0.85rem;color:var(--text-muted);">
          Dữ liệu được lưu trữ tự động trong trình duyệt của bạn (LocalStorage)
        </p>
      </div>

      <!-- Overview KPI Grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;">
        <div class="card" style="text-align:center;padding:1.5rem;">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Số câu đã làm</div>
          <div style="font-size:2rem;font-weight:900;color:var(--text-main);margin-top:0.25rem;">
            ${totalAnswered} <span style="font-size:1rem;color:var(--text-muted);font-weight:500;">/ ${allQuestions.length}</span>
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Bao quát ${Math.round((totalAnswered / allQuestions.length) * 100)}% ngân hàng</div>
        </div>

        <div class="card" style="text-align:center;padding:1.5rem;border-bottom:4px solid var(--success);">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Số câu đúng</div>
          <div style="font-size:2rem;font-weight:900;color:var(--success);margin-top:0.25rem;">
            ${totalCorrect}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Tỷ lệ: ${accuracy}%</div>
        </div>

        <div class="card" style="text-align:center;padding:1.5rem;border-bottom:4px solid var(--danger);">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Số câu làm sai</div>
          <div style="font-size:2rem;font-weight:900;color:var(--danger);margin-top:0.25rem;">
            ${totalWrong}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Cần rèn luyện lại</div>
        </div>

        <div class="card" style="text-align:center;padding:1.5rem;border-bottom:4px solid var(--accent-gold);">
          <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Lượt thi thử</div>
          <div style="font-size:2rem;font-weight:900;color:var(--accent-gold);margin-top:0.25rem;">
            ${examHistory.length}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Bài kiểm tra hoàn thành</div>
        </div>
      </div>

      <!-- Chapter Accuracy Progress Bars -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Tỷ Lệ Chính Xác Theo Từng Chương (Phát hiện điểm yếu)
        </h3>
        <div style="display:flex;flex-direction:column;gap:1.25rem;">
          ${chaptersMeta.map(c => {
            const st = chapterStats[c.id];
            const chAcc = st.answered > 0 ? Math.round((st.correct / st.answered) * 100) : 0;
            const progress = Math.round((st.answered / st.total) * 100);

            return `
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;font-size:0.9rem;">
                  <span style="font-weight:700;color:var(--text-main);">${c.number}: ${c.shortTitle}</span>
                  <span style="font-weight:800;color:${chAcc >= 75 ? 'var(--success)' : chAcc >= 50 ? 'var(--accent-gold)' : 'var(--text-muted)'};">
                    ${st.answered > 0 ? `${chAcc}% đúng (${st.correct}/${st.answered} câu)` : 'Chưa luyện câu nào'}
                  </span>
                </div>
                <div style="width:100%;height:10px;background:var(--border-color);border-radius:9999px;overflow:hidden;display:flex;">
                  <div style="width:${progress}%;height:100%;background:${c.color};border-radius:9999px;transition:width 0.4s ease;"></div>
                </div>
                <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.2rem;">
                  Đã luyện ${st.answered}/100 câu (${progress}%)
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Exam History Table -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Nhật Ký Thi Thử Chi Tiết
        </h3>

        ${examHistory.length > 0 ? `
          <div style="overflow-x:auto;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Thời Gian</th>
                  <th>Số Câu</th>
                  <th>Câu Đúng</th>
                  <th>Điểm Thang 10</th>
                  <th>Đánh Giá</th>
                </tr>
              </thead>
              <tbody>
                ${examHistory.map(e => `
                  <tr>
                    <td>${e.date}</td>
                    <td>${e.totalQuestions} câu</td>
                    <td style="font-weight:700;color:var(--success);">${e.correctCount} / ${e.totalQuestions}</td>
                    <td><span class="badge ${e.score >= 8 ? 'badge-success' : e.score >= 5 ? 'badge-gold' : 'badge-danger'}">${e.score.toFixed(1)}</span></td>
                    <td>${e.score >= 8.5 ? 'Xuất sắc' : e.score >= 7.0 ? 'Khá giỏi' : e.score >= 5.0 ? 'Đạt' : 'Cần ôn thêm'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <p style="text-align:center;padding:1.5rem;color:var(--text-muted);font-size:0.9rem;">
            Chưa có bài thi nào được ghi nhận. Hãy vào phòng Thi Thử để kiểm tra năng lực.
          </p>
        `}
      </div>

      <!-- Reset Data Action -->
      <div class="card" style="border:1px solid var(--danger-light);background:var(--danger-light);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:1rem;font-weight:800;color:var(--danger);margin-bottom:0.25rem;">
            Xóa Lịch Sử & Đặt Lại Tiến Độ
          </h4>
          <p style="font-size:0.85rem;color:var(--text-main);">
            Thao tác này sẽ xóa toàn bộ số câu đã làm, câu đánh dấu và lịch sử thi thử trên trình duyệt này.
          </p>
        </div>
        <button class="btn btn-secondary" id="btnResetAllStats" style="border-color:var(--danger);color:var(--danger);background:var(--bg-card);font-size:0.85rem;">
          Đặt Lại Dữ Liệu
        </button>
      </div>
    </div>
  `;
}
