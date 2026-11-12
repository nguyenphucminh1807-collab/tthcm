// src/pages/PracticeView.js
import { allQuestions, questionsByChapter, chaptersMeta } from '../data/allData.js';

export function renderPractice(state, session = null) {
  // Nếu chưa có session luyện tập, hiển thị màn hình thiết lập (Setup)
  if (!session || !session.questions || session.questions.length === 0) {
    return renderPracticeSetup(state);
  }

  // Đang trong phiên luyện tập
  const qIndex = session.currentIndex || 0;
  const currentQ = session.questions[qIndex];
  const total = session.questions.length;
  const isAnswered = session.userAnswers[currentQ.id] !== undefined;
  const selectedOption = session.userAnswers[currentQ.id];
  const isCorrect = isAnswered && selectedOption === currentQ.correctAnswer;
  const letters = ['A', 'B', 'C', 'D'];
  const isBookmarked = (state.bookmarkedQuestions || []).includes(currentQ.id);

  // Đếm đúng / sai trong session hiện tại
  let correctCount = 0;
  let wrongCount = 0;
  Object.keys(session.userAnswers).forEach(qid => {
    const qObj = session.questions.find(q => q.id === qid);
    if (qObj) {
      if (session.userAnswers[qid] === qObj.correctAnswer) correctCount++;
      else wrongCount++;
    }
  });

  return `
    <div style="max-width:850px;margin:0 auto;display:flex;flex-direction:column;gap:1.5rem;">
      <!-- Top Action Bar -->
      <div class="card" style="display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;flex-wrap:wrap;gap:0.75rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <button class="btn btn-secondary" id="btnExitPractice" style="padding:0.4rem 0.8rem;font-size:0.8rem;">
            ← Thoát chế độ luyện
          </button>
          <span style="font-size:0.85rem;font-weight:700;color:var(--text-main);">${session.title}</span>
        </div>

        <div style="display:flex;align-items:center;gap:1rem;">
          <div style="display:flex;gap:0.75rem;font-size:0.85rem;font-weight:700;">
            <span style="color:var(--success);">✓ Đúng: ${correctCount}</span>
            <span style="color:var(--danger);">✗ Sai: ${wrongCount}</span>
          </div>
          <button class="btn btn-secondary" id="btnPracticeBookmark" data-qid="${currentQ.id}" style="padding:0.4rem 0.75rem;font-size:0.8rem;">
            <svg width="16" height="16" fill="${isBookmarked ? 'var(--accent-gold)' : 'none'}" stroke="${isBookmarked ? 'var(--accent-gold)' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            <span>${isBookmarked ? 'Đã lưu' : 'Lưu câu này'}</span>
          </button>
        </div>
      </div>

      <!-- Progress Bar -->
      <div style="width:100%;height:8px;background:var(--border-color);border-radius:9999px;overflow:hidden;">
        <div style="width:${Math.round(((qIndex + 1) / total) * 100)}%;height:100%;background:linear-gradient(90deg, var(--primary-700), var(--accent-gold));transition:width 0.3s ease;"></div>
      </div>

      <!-- Question Card -->
      <div class="card" style="display:flex;flex-direction:column;gap:1.5rem;padding:2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span class="badge badge-primary">Chương ${currentQ.chapterId}</span>
          <span style="font-size:0.85rem;font-weight:700;color:var(--text-muted);">
            Câu hỏi ${qIndex + 1} / ${total}
          </span>
        </div>

        <div style="font-size:1.2rem;font-weight:800;color:var(--text-main);line-height:1.5;">
          ${currentQ.question}
        </div>

        <!-- 4 Interactive Options -->
        <div style="display:flex;flex-direction:column;gap:0.85rem;" id="practiceOptionsGroup">
          ${currentQ.options.map((opt, idx) => {
            let optionCls = '';
            if (isAnswered) {
              if (idx === currentQ.correctAnswer) optionCls = 'correct';
              else if (idx === selectedOption) optionCls = 'wrong';
            } else if (idx === selectedOption) {
              optionCls = 'selected';
            }

            return `
              <div class="quiz-option ${optionCls}" data-opt-idx="${idx}" ${isAnswered ? 'style="pointer-events:none;"' : ''}>
                <div class="option-letter">${letters[idx]}</div>
                <div style="font-size:1rem;color:var(--text-main);line-height:1.5;padding-top:0.2rem;">${opt}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Instant Feedback Box (Hiển thị ngay sau khi chọn đáp án) -->
        ${isAnswered ? `
          <div style="background:${isCorrect ? 'var(--success-light)' : 'var(--danger-light)'};border:1.5px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};border-radius:14px;padding:1.5rem;animation:fadeIn 0.3s ease;">
            <div style="display:flex;align-items:center;gap:0.6rem;font-size:1.05rem;font-weight:800;color:${isCorrect ? 'var(--success)' : 'var(--danger)'};margin-bottom:0.75rem;">
              ${isCorrect 
                ? `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Chính xác!` 
                : `<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> Chưa chính xác! Đáp án đúng là: ${letters[currentQ.correctAnswer]}. ${currentQ.options[currentQ.correctAnswer]}`
              }
            </div>

            <div style="font-size:0.95rem;color:var(--text-main);line-height:1.6;margin-bottom:0.75rem;">
              <strong>💡 Phân tích giải thích:</strong> ${currentQ.explanation}
            </div>

            ${currentQ.distractorExplanations ? `
              <div style="font-size:0.85rem;color:var(--text-muted);border-top:1px dashed var(--border-color);padding-top:0.75rem;">
                <strong>🔍 Vì sao các phương án khác sai:</strong>
                <ul style="padding-left:1.25rem;margin-top:0.35rem;display:flex;flex-direction:column;gap:0.35rem;">
                  ${currentQ.distractorExplanations.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Bottom Navigation Buttons -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.5rem;">
          <button class="btn btn-secondary" id="btnPrevPracticeQ" ${qIndex === 0 ? 'disabled' : ''}>
            ← Câu trước
          </button>

          ${qIndex < total - 1 ? `
            <button class="btn btn-primary" id="btnNextPracticeQ">
              Câu tiếp theo →
            </button>
          ` : `
            <button class="btn btn-gold" id="btnFinishPractice">
              Xem Kết Quả Luyện Tập 🎉
            </button>
          `}
        </div>
      </div>
    </div>
  `;
}

// Giao diện thiết lập phiên luyện tập
function renderPracticeSetup(state) {
  const history = state.questionHistory || {};
  const wrongQuestions = allQuestions.filter(q => history[q.id] && history[q.id].correctCount === 0);
  const unattempted = allQuestions.filter(q => !history[q.id]);
  const bookmarked = allQuestions.filter(q => (state.bookmarkedQuestions || []).includes(q.id));

  return `
    <div style="max-width:850px;margin:0 auto;display:flex;flex-direction:column;gap:2rem;">
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;">
        <span class="badge badge-gold" style="margin-bottom:0.75rem;">CHẾ ĐỘ TẬP TRUNG</span>
        <h2 style="font-size:1.8rem;font-weight:800;color:var(--text-main);margin-bottom:0.5rem;">
          Luyện Tập Trắc Nghiệm Thông Minh
        </h2>
        <p style="font-size:0.95rem;color:var(--text-muted);max-width:550px;margin:0 auto;">
          Tùy chọn chế độ luyện tập đa dạng, chấm điểm tức thì và phân tích chuyên sâu cho từng câu hỏi
        </p>
      </div>

      <!-- Practice Modes Grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1.25rem;">
        <!-- Luyện toàn bộ ngẫu nhiên -->
        <div class="card practice-mode-card" data-mode="random" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--primary-100);color:var(--primary-800);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Toàn Bộ Ngân Hàng</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Ngẫu nhiên từ cả 6 chương, bao quát toàn diện đề thi.</p>
          <span class="badge badge-primary">600 câu sẵn sàng</span>
        </div>

        <!-- Luyện các câu làm sai -->
        <div class="card practice-mode-card" data-mode="wrong" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--danger-light);color:var(--danger);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Ôn Lại Câu Đã Làm Sai</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Tự động lọc những câu bạn đã trả lời sai để rèn luyện lại.</p>
          <span class="badge badge-danger">${wrongQuestions.length} câu cần khắc phục</span>
        </div>

        <!-- Luyện các câu đã bookmark -->
        <div class="card practice-mode-card" data-mode="bookmarked" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--accent-gold-light);color:var(--accent-gold-dark);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Câu Hỏi Đã Đánh Dấu</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Những câu hỏi khó, trọng điểm do chính bạn lưu lại.</p>
          <span class="badge badge-gold">${bookmarked.length} câu đã lưu</span>
        </div>

        <!-- Luyện các câu chưa làm -->
        <div class="card practice-mode-card" data-mode="unattempted" style="cursor:pointer;border:2px solid transparent;transition:all 0.2s;">
          <div style="width:44px;height:44px;border-radius:12px;background:var(--success-light);color:var(--success);display:flex;align-items:center;justify-content:center;margin-bottom:1rem;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:800;margin-bottom:0.35rem;">Câu Chưa Từng Làm</h4>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem;">Khám phá các câu hỏi mới trong ngân hàng 600 câu.</p>
          <span class="badge badge-success">${unattempted.length} câu mới</span>
        </div>
      </div>

      <!-- Config Form -->
      <div class="card" style="padding:2rem;">
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--text-main);margin-bottom:1.25rem;">
          Tùy Chỉnh Lượt Luyện Tập
        </h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.5rem;">
          <div>
            <label style="display:block;font-size:0.8rem;font-weight:700;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;">Chọn Chương Cần Luyện</label>
            <select id="practiceChapterSelect" style="width:100%;padding:0.65rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.9rem;font-weight:600;">
              <option value="all">Tất Cả 6 Chương (Trộn ngẫu nhiên)</option>
              ${chaptersMeta.map(c => `<option value="${c.id}">${c.number}: ${c.shortTitle} (100 câu)</option>`).join('')}
            </select>
          </div>

          <div>
            <label style="display:block;font-size:0.8rem;font-weight:700;color:var(--text-muted);margin-bottom:0.5rem;text-transform:uppercase;">Số Lượng Câu Hỏi</label>
            <select id="practiceCountSelect" style="width:100%;padding:0.65rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.9rem;font-weight:600;">
              <option value="10">10 câu (Luyện nhanh 5 phút)</option>
              <option value="20" selected>20 câu (Phổ biến 10 phút)</option>
              <option value="30">30 câu (Tiêu chuẩn 15 phút)</option>
              <option value="50">50 câu (Chuyên sâu 25 phút)</option>
              <option value="100">100 câu (Toàn bộ 1 chương)</option>
            </select>
          </div>
        </div>

        <button class="btn btn-primary" id="btnStartPracticeSession" style="width:100%;padding:0.85rem;font-size:1rem;">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Bắt Đầu Luyện Tập Ngay</span>
        </button>
      </div>
    </div>
  `;
}
