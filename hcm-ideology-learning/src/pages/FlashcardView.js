// src/pages/FlashcardView.js
import { allFlashcards, flashcardsByChapter, chaptersMeta } from '../data/allData.js';

export function renderFlashcards(state, selectedChapterId = 'all', currentIndex = 0, isFlipped = false) {
  const cards = selectedChapterId === 'all' 
    ? allFlashcards 
    : (flashcardsByChapter[selectedChapterId] || allFlashcards);

  const safeIndex = Math.max(0, Math.min(currentIndex, cards.length - 1));
  const currentCard = cards[safeIndex] || { front: 'Chưa có thẻ', back: 'Dữ liệu trống', tag: 'Chung' };

  const masteredList = state.flashcardProgress?.mastered || [];
  const reviewingList = state.flashcardProgress?.reviewing || [];

  const isMastered = masteredList.includes(currentCard.id);
  const isReviewing = reviewingList.includes(currentCard.id);

  return `
    <div style="max-width:850px;margin:0 auto;display:flex;flex-direction:column;gap:1.75rem;">
      <!-- Flashcard Header & Filter -->
      <div class="card" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <div>
          <h2 style="font-size:1.5rem;font-weight:800;color:var(--text-main);margin-bottom:0.25rem;">
            Thẻ Ghi Nhớ Flashcard Thông Minh
          </h2>
          <p style="font-size:0.85rem;color:var(--text-muted);">
            Luyện trí nhớ phản xạ nhanh cho 6 chương lý thuyết bằng phương pháp lặp lại ngắt quãng
          </p>
        </div>

        <div style="display:flex;align-items:center;gap:0.75rem;">
          <select id="flashcardChapterSelect" style="padding:0.5rem 1rem;border-radius:10px;border:1px solid var(--border-color);background:var(--bg-app);color:var(--text-main);font-size:0.85rem;outline:none;font-weight:600;">
            <option value="all" ${selectedChapterId === 'all' ? 'selected' : ''}>Tất Cả 6 Chương (${allFlashcards.length} thẻ)</option>
            ${chaptersMeta.map(c => `
              <option value="${c.id}" ${selectedChapterId == c.id ? 'selected' : ''}>${c.number}: ${c.shortTitle}</option>
            `).join('')}
          </select>
          <button class="btn btn-secondary" id="btnShuffleFlashcards" title="Trộn ngẫu nhiên thứ tự thẻ">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span class="desktop-only">Trộn thẻ</span>
          </button>
        </div>
      </div>

      <!-- Progress Stats Bar -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
        <div class="card" style="padding:1rem;text-align:center;">
          <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Tiến độ hiện tại</span>
          <div style="font-size:1.3rem;font-weight:800;color:var(--text-main);">${safeIndex + 1} / ${cards.length}</div>
        </div>
        <div class="card" style="padding:1rem;text-align:center;border-bottom:3px solid var(--success);">
          <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Đã ghi nhớ</span>
          <div style="font-size:1.3rem;font-weight:800;color:var(--success);">${masteredList.length} thẻ</div>
        </div>
        <div class="card" style="padding:1rem;text-align:center;border-bottom:3px solid var(--danger);">
          <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Cần ôn lại</span>
          <div style="font-size:1.3rem;font-weight:800;color:var(--danger);">${reviewingList.length} thẻ</div>
        </div>
      </div>

      <!-- 3D Flashcard Scene -->
      <div class="flashcard-scene" id="flashcardScene">
        <div class="flashcard-inner ${isFlipped ? 'is-flipped' : ''}" id="flashcardInner">
          <!-- Mặt trước -->
          <div class="flashcard-face flashcard-front">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="badge badge-primary">${currentCard.tag || 'Kiến thức cốt lõi'}</span>
              <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Chương ${currentCard.chapterId}</span>
            </div>

            <div style="margin:auto 0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;">
              <div style="font-size:0.85rem;color:var(--primary-700);font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem;">
                CÂU HỎI / KHÁI NIỆM CẦN NHỚ
              </div>
              <h3 style="font-family:var(--font-serif);font-size:1.6rem;font-weight:700;color:var(--text-main);line-height:1.4;">
                ${currentCard.front}
              </h3>
            </div>

            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              <span>Nhấp vào thẻ hoặc bấm nút Lật thẻ để xem lời giải</span>
            </div>
          </div>

          <!-- Mặt sau -->
          <div class="flashcard-face flashcard-back">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="badge badge-gold">Định nghĩa & Lời giải</span>
              <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">Chương ${currentCard.chapterId}</span>
            </div>

            <div style="margin:auto 0;padding:1rem;overflow-y:auto;max-height:220px;">
              <p style="font-size:1.15rem;font-weight:600;color:var(--text-main);line-height:1.6;white-space:pre-line;">
                ${currentCard.back}
              </p>
            </div>

            <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);">
              <span>Nhấp lần nữa để quay lại mặt trước</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Controls -->
      <div style="display:flex;flex-direction:column;gap:1rem;align-items:center;">
        <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;">
          <button class="btn btn-secondary" id="btnPrevCard" ${safeIndex === 0 ? 'disabled' : ''}>
            ← Thẻ trước
          </button>
          
          <button class="btn btn-primary" id="btnFlipCard" style="min-width:140px;">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            <span>${isFlipped ? 'Xem Mặt Trước' : 'Lật Thẻ'}</span>
          </button>

          <button class="btn btn-secondary" id="btnNextCard" ${safeIndex === cards.length - 1 ? 'disabled' : ''}>
            Thẻ tiếp theo →
          </button>
        </div>

        <!-- Rating Buttons (Mastered / Reviewing) -->
        <div style="display:flex;gap:1rem;margin-top:0.5rem;">
          <button class="btn ${isReviewing ? 'btn-primary' : 'btn-secondary'}" id="btnMarkReview" style="border-color:var(--danger);color:var(--danger);background:${isReviewing ? 'var(--danger-light)' : 'transparent'};">
            ❌ Cần ôn lại
          </button>
          <button class="btn ${isMastered ? 'btn-primary' : 'btn-secondary'}" id="btnMarkMastered" style="border-color:var(--success);color:var(--success);background:${isMastered ? 'var(--success-light)' : 'transparent'};">
            ✓ Đã nhớ kỹ
          </button>
        </div>
      </div>
    </div>
  `;
}
