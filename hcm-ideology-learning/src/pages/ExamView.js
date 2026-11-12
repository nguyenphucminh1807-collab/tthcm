// src/pages/ExamView.js
import { allQuestions, chaptersMeta } from '../data/allData.js';

export function renderExam(state, examSession = null) {
  // Nếu chưa có session thi thử -> Hiển thị màn hình thiết lập thi
  if (!examSession) {
    return renderExamSetup();
  }

  // Đang trong thời gian làm bài thi
  if (!examSession.isSubmitted) {
    return renderExamInProgress(examSession);
  }

  // Đã nộp bài -> Hiển thị kết quả thi
  return renderExamResult(examSession);
}

// 1. Màn hình chuẩn bị vào phòng thi
function renderExamSetup() {
  return `
    <div style="max-width:750px;margin:0 auto;display:flex;flex-direction:column;gap:1.75rem;">
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;border-top:5px solid var(--primary-700);">
        <div style="width:60px;height:60px;border-radius:16px;background:var(--primary-100);color:var(--primary-800);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;">
          <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h2 style="font-family:var(--font-serif);font-size:2rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">
          Phòng Thi Thử Trắc Nghiệm Đại Học
        </h2>
        <p style="font-size:0.95rem;color:var(--text-muted);max-width:520px;margin:0 auto 1.5rem;line-height:1.6;">
          Hệ thống sẽ tạo đề thi ngẫu nhiên từ 600 câu hỏi trong ngân hàng, bảo đảm phân bổ đều 6 chương và 4 mức độ tư duy. Không hiển thị đáp án trong lúc làm.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;margin-bottom:2rem;text-align:left;">
          <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Cấu trúc đề</div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--text-main);margin-top:0.25rem;">Trộn ngẫu nhiên 6 chương</div>
          </div>
          <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Thang điểm</div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--text-main);margin-top:0.25rem;">Thang điểm 10 chuẩn đại học</div>
          </div>
          <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
            <div style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Quy chế thi</div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--text-main);margin-top:0.25rem;">Hết giờ tự động nộp bài</div>
          </div>
        </div>

        <!-- Cấu hình số lượng câu và thời gian -->
        <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:14px;padding:1.5rem;margin-bottom:2rem;text-align:left;">
          <label style="display:block;font-size:0.85rem;font-weight:800;color:var(--text-main);margin-bottom:0.75rem;">
            CHỌN QUY MÔ ĐỀ THI:
          </label>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <label style="display:flex;align-items:center;gap:0.75rem;padding:0.85rem;background:var(--bg-card);border:2px solid var(--primary-700);border-radius:10px;cursor:pointer;">
              <input type="radio" name="examSize" value="30" checked />
              <div>
                <div style="font-weight:800;color:var(--text-main);">Đề Tiêu Chuẩn: 30 Câu</div>
                <div style="font-size:0.8rem;color:var(--text-muted);">Thời gian: 30 phút (1 phút/câu)</div>
              </div>
            </label>

            <label style="display:flex;align-items:center;gap:0.75rem;padding:0.85rem;background:var(--bg-card);border:1px solid var(--border-color);border-radius:10px;cursor:pointer;">
              <input type="radio" name="examSize" value="50" />
              <div>
                <div style="font-weight:800;color:var(--text-main);">Đề Đầy Đủ: 50 Câu</div>
                <div style="font-size:0.8rem;color:var(--text-muted);">Thời gian: 50 phút (Tổng hợp cao)</div>
              </div>
            </label>
          </div>
        </div>

        <button class="btn btn-primary" id="btnStartExamNow" style="padding:0.9rem 2.5rem;font-size:1.05rem;box-shadow:var(--shadow-md);">
          <span>Bắt Đầu Làm Bài Thi</span>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    </div>
  `;
}

// 2. Màn hình làm bài thi có đếm ngược thời gian
function renderExamInProgress(session) {
  const qIndex = session.currentIndex || 0;
  const currentQ = session.questions[qIndex];
  const total = session.questions.length;
  const selectedOpt = session.userAnswers[currentQ.id];
  const letters = ['A', 'B', 'C', 'D'];
  const isFlagged = (session.flaggedQuestions || []).includes(currentQ.id);

  // Format thời gian đếm ngược
  const minutes = Math.floor(session.remainingSeconds / 60);
  const seconds = session.remainingSeconds % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isUrgent = session.remainingSeconds < 300; // Còn dưới 5 phút

  return `
    <div style="display:grid;grid-template-columns:1fr 300px;gap:1.5rem;align-items:start;" id="examLayout">
      <!-- Main Exam Question Area -->
      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        <!-- Exam Top Header -->
        <div class="card" style="display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;">
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <span class="badge badge-primary">Chương ${currentQ.chapterId}</span>
            <span style="font-size:0.9rem;font-weight:800;color:var(--text-main);">Câu ${qIndex + 1} / ${total}</span>
          </div>

          <div style="display:flex;align-items:center;gap:1rem;">
            <button class="btn btn-secondary" id="btnFlagQuestion" data-qid="${currentQ.id}" style="padding:0.4rem 0.75rem;font-size:0.8rem;border-color:${isFlagged ? 'var(--warning)' : 'var(--border-color)'};">
              <svg width="16" height="16" fill="${isFlagged ? 'var(--warning)' : 'none'}" stroke="${isFlagged ? 'var(--warning)' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
              <span>${isFlagged ? 'Đã cắm cờ' : 'Cắm cờ xem lại'}</span>
            </button>
          </div>
        </div>

        <!-- Question Body Card -->
        <div class="card" style="padding:2rem;">
          <h3 style="font-size:1.25rem;font-weight:800;color:var(--text-main);line-height:1.5;margin-bottom:1.5rem;">
            ${currentQ.question}
          </h3>

          <!-- Options List -->
          <div style="display:flex;flex-direction:column;gap:0.85rem;" id="examOptionsGroup">
            ${currentQ.options.map((opt, idx) => `
              <div class="quiz-option ${selectedOpt === idx ? 'selected' : ''}" data-opt-idx="${idx}">
                <div class="option-letter">${letters[idx]}</div>
                <div style="font-size:1rem;color:var(--text-main);line-height:1.5;padding-top:0.2rem;">${opt}</div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom Navigation -->
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2rem;">
            <button class="btn btn-secondary" id="btnPrevExamQ" ${qIndex === 0 ? 'disabled' : ''}>
              ← Câu trước
            </button>

            ${qIndex < total - 1 ? `
              <button class="btn btn-primary" id="btnNextExamQ">
                Câu tiếp theo →
              </button>
            ` : `
              <button class="btn btn-gold" id="btnSubmitExamEarly">
                Nộp Bài Thi
              </button>
            `}
          </div>
        </div>
      </div>

      <!-- Right Panel: Timer & Question Matrix -->
      <div style="display:flex;flex-direction:column;gap:1.25rem;position:sticky;top:90px;">
        <!-- Timer Card -->
        <div class="card" style="text-align:center;padding:1.25rem;border-top:4px solid ${isUrgent ? 'var(--danger)' : 'var(--primary-700)'};">
          <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Thời Gian Còn Lại</span>
          <div style="font-size:2.2rem;font-weight:900;color:${isUrgent ? 'var(--danger)' : 'var(--text-main)'};font-family:monospace;letter-spacing:0.05em;margin:0.25rem 0;" id="examTimerDisplay">
            ${timeFormatted}
          </div>
          <div style="font-size:0.75rem;color:var(--text-muted);">
            Đã làm: ${Object.keys(session.userAnswers).length} / ${total} câu
          </div>
        </div>

        <!-- Question Matrix Grid -->
        <div class="card" style="padding:1.25rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
            <span style="font-size:0.8rem;font-weight:800;text-transform:uppercase;color:var(--text-muted);">Danh Sách Câu</span>
            <span style="font-size:0.75rem;color:var(--warning);font-weight:700;">⚑ ${(session.flaggedQuestions || []).length}</span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:0.4rem;max-height:300px;overflow-y:auto;" class="no-scrollbar">
            ${session.questions.map((q, idx) => {
              const answered = session.userAnswers[q.id] !== undefined;
              const flagged = (session.flaggedQuestions || []).includes(q.id);
              const isCurrent = idx === qIndex;

              let bg = 'var(--bg-app)';
              let color = 'var(--text-main)';
              let border = '1px solid var(--border-color)';

              if (answered) {
                bg = 'var(--primary-700)';
                color = '#FFFFFF';
                border = '1px solid var(--primary-700)';
              }
              if (flagged) {
                border = '2px solid var(--warning)';
              }
              if (isCurrent) {
                border = '2px solid #F59E0B';
                if (!answered) bg = 'var(--accent-gold-light)';
              }

              return `
                <button class="btn-jump-q" data-idx="${idx}" style="background:${bg};color:${color};border:${border};border-radius:8px;padding:0.4rem 0;font-size:0.8rem;font-weight:700;cursor:pointer;position:relative;">
                  ${idx + 1}
                  ${flagged ? `<span style="position:absolute;top:1px;right:2px;font-size:0.6rem;color:#F59E0B;">●</span>` : ''}
                </button>
              `;
            }).join('')}
          </div>

          <button class="btn btn-primary" id="btnSubmitExam" style="width:100%;margin-top:1.25rem;padding:0.75rem;font-size:0.95rem;">
            Nộp Bài Chấm Điểm
          </button>
        </div>
      </div>
    </div>
  `;
}

// 3. Màn hình kết quả sau khi nộp bài
function renderExamResult(session) {
  const total = session.questions.length;
  let correctCount = 0;
  const chapterBreakdown = {};

  // Phân tích kết quả
  session.questions.forEach(q => {
    const isCorrect = session.userAnswers[q.id] === q.correctAnswer;
    if (isCorrect) correctCount++;

    if (!chapterBreakdown[q.chapterId]) {
      chapterBreakdown[q.chapterId] = { total: 0, correct: 0 };
    }
    chapterBreakdown[q.chapterId].total++;
    if (isCorrect) chapterBreakdown[q.chapterId].correct++;
  });

  const score = Math.round((correctCount / total) * 10 * 10) / 10;
  const percent = Math.round((correctCount / total) * 100);

  let evaluation = "Cần tiếp tục ôn luyện thêm";
  let evalColor = "var(--danger)";
  if (score >= 8.5) { evaluation = "Xuất Sắc! Nắm rất vững giáo trình"; evalColor = "var(--success)"; }
  else if (score >= 7.0) { evaluation = "Khá Giỏi! Tự tin bước vào phòng thi"; evalColor = "#3B82F6"; }
  else if (score >= 5.0) { evaluation = "Đạt Yêu Cầu Cơ Bản"; evalColor = "var(--warning)"; }

  const letters = ['A', 'B', 'C', 'D'];

  return `
    <div style="max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <!-- Score Overview Card -->
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;background:linear-gradient(145deg, var(--bg-card), var(--primary-50));">
        <span class="badge badge-gold" style="font-size:0.8rem;margin-bottom:0.75rem;">KẾT QUẢ BÀI THI</span>
        <h2 style="font-family:var(--font-serif);font-size:2rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
          Đánh Giá Năng Lực Trắc Nghiệm
        </h2>
        <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:1.75rem;">
          Hoàn thành vào lúc ${session.submittedAt || new Date().toLocaleString('vi-VN')}
        </p>

        <!-- Big Score Circle -->
        <div style="display:flex;align-items:center;justify-content:center;gap:3rem;flex-wrap:wrap;margin-bottom:2rem;">
          <div style="width:140px;height:140px;border-radius:50%;border:8px solid ${evalColor};display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:var(--shadow-md);">
            <span style="font-size:2.8rem;font-weight:900;color:${evalColor};line-height:1;">${score.toFixed(1)}</span>
            <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);">THANG 10</span>
          </div>

          <div style="text-align:left;display:flex;flex-direction:column;gap:0.5rem;">
            <div style="font-size:1.3rem;font-weight:800;color:${evalColor};">${evaluation}</div>
            <div style="font-size:0.95rem;color:var(--text-main);">
              Số câu trả lời đúng: <strong>${correctCount} / ${total} câu</strong> (${percent}%)
            </div>
            <div style="font-size:0.95rem;color:var(--text-muted);">
              Thời gian hoàn thành: <strong>${session.timeSpent || 'Đúng giờ'}</strong>
            </div>
          </div>
        </div>

        <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
          <button class="btn btn-primary" id="btnReviewWrongExamQuestions">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span>Luyện Lại Các Câu Làm Sai (${total - correctCount} câu)</span>
          </button>
          <button class="btn btn-secondary" id="btnRetakeNewExam">
            Làm Đề Thi Mới Khác
          </button>
        </div>
      </div>

      <!-- Chapter Breakdown Stats -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Phân Tích Chi Tiết Từng Chương Trong Đề Thi
        </h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
          ${Object.keys(chapterBreakdown).map(chId => {
            const data = chapterBreakdown[chId];
            const chMeta = chaptersMeta.find(c => c.id == chId) || { shortTitle: `Chương ${chId}`, number: `Chương ${chId}` };
            const chPercent = Math.round((data.correct / data.total) * 100);

            return `
              <div style="background:var(--bg-app);border:1px solid var(--border-color);border-radius:12px;padding:1rem;">
                <div style="font-size:0.8rem;font-weight:700;color:var(--text-muted);">${chMeta.number}</div>
                <div style="font-size:0.95rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">${chMeta.shortTitle}</div>
                <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.35rem;">
                  <span>Đúng ${data.correct}/${data.total} câu</span>
                  <span style="font-weight:800;color:${chPercent >= 70 ? 'var(--success)' : 'var(--danger)'};">${chPercent}%</span>
                </div>
                <div style="width:100%;height:6px;background:var(--border-color);border-radius:9999px;overflow:hidden;">
                  <div style="width:${chPercent}%;height:100%;background:${chPercent >= 70 ? 'var(--success)' : 'var(--danger)'};border-radius:9999px;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Detailed Review of All Exam Questions -->
      <div class="card">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.5rem;">
          Xem Lại Toàn Bộ Câu Hỏi & Lời Giải Chi Tiết
        </h3>

        <div style="display:flex;flex-direction:column;gap:1.5rem;">
          ${session.questions.map((q, idx) => {
            const userAns = session.userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;

            return `
              <div style="border-bottom:1px solid var(--border-color);padding-bottom:1.5rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                  <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
                    ${isCorrect ? '✓ Đúng' : (userAns === undefined ? 'Chưa trả lời' : '✗ Sai')}
                  </span>
                  <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Câu ${idx + 1} • Chương ${q.chapterId}</span>
                </div>

                <div style="font-size:1rem;font-weight:700;color:var(--text-main);margin-bottom:1rem;line-height:1.5;">
                  ${q.question}
                </div>

                <div style="display:grid;grid-template-columns:1fr;gap:0.5rem;margin-bottom:1rem;">
                  ${q.options.map((opt, oIdx) => {
                    let borderCol = 'var(--border-color)';
                    let bgCol = 'var(--bg-app)';
                    if (oIdx === q.correctAnswer) {
                      borderCol = 'var(--success)';
                      bgCol = 'var(--success-light)';
                    } else if (oIdx === userAns) {
                      borderCol = 'var(--danger)';
                      bgCol = 'var(--danger-light)';
                    }

                    return `
                      <div style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem 0.85rem;border:1px solid ${borderCol};background:${bgCol};border-radius:8px;font-size:0.9rem;">
                        <span style="font-weight:800;width:20px;">${letters[oIdx]}.</span>
                        <span>${opt}</span>
                      </div>
                    `;
                  }).join('')}
                </div>

                <div style="background:var(--bg-app);border-radius:8px;padding:0.85rem;font-size:0.85rem;line-height:1.6;color:var(--text-main);">
                  <strong>💡 Lời giải chi tiết:</strong> ${q.explanation}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}
