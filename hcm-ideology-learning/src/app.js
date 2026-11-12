// src/app.js
import { 
  getStoredState, 
  saveStoredState, 
  recordQuestionAnswer, 
  toggleQuestionBookmark, 
  toggleTheoryComplete, 
  saveExamResult, 
  resetAllData 
} from './utils/storage.js';

import { allQuestions, allFlashcards, questionsByChapter, flashcardsByChapter } from './data/allData.js';

import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderDashboard } from './pages/DashboardView.js';
import { renderTheory } from './pages/TheoryView.js';
import { renderFlashcards } from './pages/FlashcardView.js';
import { renderQuestionBank } from './pages/QuestionBankView.js';
import { renderPractice } from './pages/PracticeView.js';
import { renderExam } from './pages/ExamView.js';
import { renderFastTrack } from './pages/FastTrackView.js';
import { renderStats } from './pages/StatsView.js';
import { renderSettings } from './pages/SettingsView.js';

// App State
let state = getStoredState();

// UI Navigation State
let currentRoute = 'dashboard';
let currentTheoryChapter = 1;
let theorySearchQuery = '';
let currentFlashcardChapter = 'all';
let currentFlashcardIndex = 0;
let isFlashcardFlipped = false;

let qbFilterChapter = 'all';
let qbFilterLevel = 'all';
let qbSearchQuery = '';
let qbPage = 1;

// Session States
let practiceSession = null;
let examSession = null;
let examTimerInterval = null;

// Khởi chạy ứng dụng
export function initApp() {
  applyTheme(state.theme);
  applyFontSize(state.fontSize);
  renderApp();
  setupGlobalListeners();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  saveStoredState(state);
}

function applyFontSize(size) {
  const root = document.documentElement;
  if (size === 'small') root.style.fontSize = '14px';
  else if (size === 'large') root.style.fontSize = '18px';
  else root.style.fontSize = '16px';
  state.fontSize = size;
  saveStoredState(state);
}

// Render toàn bộ layout
export function renderApp() {
  const sidebarContainer = document.getElementById('sidebarSlot');
  const headerContainer = document.getElementById('headerSlot');
  const mainContent = document.getElementById('mainContentSlot');

  sidebarContainer.innerHTML = renderSidebar(currentRoute);
  headerContainer.innerHTML = renderHeader(state);

  // Render view tương ứng với route
  let viewHtml = '';
  switch (currentRoute) {
    case 'dashboard':
      viewHtml = renderDashboard(state);
      break;
    case 'theory':
      viewHtml = renderTheory(state, currentTheoryChapter, theorySearchQuery);
      break;
    case 'flashcards':
      viewHtml = renderFlashcards(state, currentFlashcardChapter, currentFlashcardIndex, isFlashcardFlipped);
      break;
    case 'questions':
      viewHtml = renderQuestionBank(state, qbFilterChapter, qbFilterLevel, qbSearchQuery, qbPage);
      break;
    case 'practice':
      viewHtml = renderPractice(state, practiceSession);
      break;
    case 'exam':
      viewHtml = renderExam(state, examSession);
      break;
    case 'fasttrack':
      viewHtml = renderFastTrack(state);
      break;
    case 'stats':
      viewHtml = renderStats(state);
      break;
    case 'settings':
      viewHtml = renderSettings(state);
      break;
    default:
      viewHtml = renderDashboard(state);
  }

  mainContent.innerHTML = viewHtml;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  bindRouteSpecificEvents();
}

// Bắt sự kiện dùng chung
function setupGlobalListeners() {
  // Navigation tabs in Sidebar
  document.addEventListener('click', (e) => {
    const navItem = e.target.closest('.nav-item');
    if (navItem) {
      const route = navItem.dataset.route;
      if (route) {
        currentRoute = route;
        // Đóng mobile sidebar nếu đang mở
        const sidebar = document.getElementById('appSidebar');
        if (sidebar) sidebar.classList.remove('open');
        renderApp();
      }
    }
  });

  // Mobile menu toggle
  document.addEventListener('click', (e) => {
    if (e.target.closest('#mobileMenuBtn')) {
      const sidebar = document.getElementById('appSidebar');
      if (sidebar) sidebar.classList.toggle('open');
    }
  });

  // Theme Toggle Button
  document.addEventListener('click', (e) => {
    if (e.target.closest('#themeToggleBtn')) {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      renderApp();
    }
  });

  // Global search input
  document.addEventListener('keyup', (e) => {
    if (e.target.id === 'globalSearchInput' && e.key === 'Enter') {
      const val = e.target.value.trim();
      if (val) {
        currentRoute = 'questions';
        qbSearchQuery = val;
        qbPage = 1;
        renderApp();
      }
    }
  });
}

// Gán sự kiện cho từng view riêng biệt
function bindRouteSpecificEvents() {
  // --- DASHBOARD EVENTS ---
  const btnContinue = document.getElementById('btnContinueStudy');
  if (btnContinue) {
    btnContinue.onclick = () => { currentRoute = 'theory'; renderApp(); };
  }
  const btnQuick = document.getElementById('btnQuickPractice');
  if (btnQuick) {
    btnQuick.onclick = () => { startPracticeWithCount(20, 'all', 'Luyện Nhanh 20 Câu Ngẫu Nhiên'); };
  }
  const btnFast = document.getElementById('btnGoFastTrack');
  if (btnFast) {
    btnFast.onclick = () => { currentRoute = 'fasttrack'; renderApp(); };
  }
  const btnStartExam = document.getElementById('btnStartNewExam') || document.getElementById('btnEmptyExamStart');
  if (btnStartExam) {
    btnStartExam.onclick = () => { currentRoute = 'exam'; examSession = null; renderApp(); };
  }

  // Dashboard chapter card buttons
  document.querySelectorAll('.btn-read-theory').forEach(btn => {
    btn.onclick = () => {
      currentTheoryChapter = parseInt(btn.dataset.chapter, 10);
      currentRoute = 'theory';
      renderApp();
    };
  });

  document.querySelectorAll('.btn-practice-chapter').forEach(btn => {
    btn.onclick = () => {
      const chId = parseInt(btn.dataset.chapter, 10);
      startPracticeWithCount(100, chId, `Luyện Toàn Bộ 100 Câu Chương ${chId}`);
    };
  });

  // --- THEORY EVENTS ---
  document.querySelectorAll('.btn-chapter-tab').forEach(btn => {
    btn.onclick = () => {
      currentTheoryChapter = parseInt(btn.dataset.chapter, 10);
      theorySearchQuery = '';
      renderApp();
    };
  });

  document.querySelectorAll('.btn-switch-chap').forEach(btn => {
    btn.onclick = () => {
      currentTheoryChapter = parseInt(btn.dataset.chapter, 10);
      renderApp();
    };
  });

  document.querySelectorAll('.btn-practice-this-chap').forEach(btn => {
    btn.onclick = () => {
      const chId = parseInt(btn.dataset.chapter, 10);
      startPracticeWithCount(100, chId, `Luyện 100 Câu Trắc Nghiệm Chương ${chId}`);
    };
  });

  const btnCompleteChapter = document.querySelector('.btn-toggle-complete-chapter');
  if (btnCompleteChapter) {
    btnCompleteChapter.onclick = () => {
      const chId = parseInt(btnCompleteChapter.dataset.chapter, 10);
      toggleTheoryComplete(chId);
      state = getStoredState();
      renderApp();
    };
  }

  // Collapse / Expand Section in Theory
  document.querySelectorAll('.section-header').forEach(header => {
    header.onclick = () => {
      const body = header.nextElementSibling;
      if (body) {
        body.style.display = body.style.display === 'none' ? 'block' : 'none';
        const icon = header.querySelector('.chevron-icon');
        if (icon) {
          icon.style.transform = body.style.display === 'none' ? 'rotate(-90deg)' : 'rotate(0deg)';
        }
      }
    };
  });

  const btnToggleAll = document.getElementById('btnToggleAllSections');
  if (btnToggleAll) {
    btnToggleAll.onclick = () => {
      const bodies = document.querySelectorAll('.section-body');
      const isAnyOpen = Array.from(bodies).some(b => b.style.display !== 'none');
      bodies.forEach(b => { b.style.display = isAnyOpen ? 'none' : 'block'; });
      document.getElementById('toggleAllText').innerText = isAnyOpen ? 'Mở rộng tất cả' : 'Thu gọn tất cả';
    };
  }

  // --- FLASHCARD EVENTS ---
  const fcInner = document.getElementById('flashcardInner');
  const btnFlip = document.getElementById('btnFlipCard');
  if (fcInner) {
    fcInner.onclick = () => { isFlashcardFlipped = !isFlashcardFlipped; renderApp(); };
  }
  if (btnFlip) {
    btnFlip.onclick = () => { isFlashcardFlipped = !isFlashcardFlipped; renderApp(); };
  }

  const btnPrevCard = document.getElementById('btnPrevCard');
  if (btnPrevCard) {
    btnPrevCard.onclick = () => {
      isFlashcardFlipped = false;
      currentFlashcardIndex = Math.max(0, currentFlashcardIndex - 1);
      renderApp();
    };
  }

  const btnNextCard = document.getElementById('btnNextCard');
  if (btnNextCard) {
    btnNextCard.onclick = () => {
      isFlashcardFlipped = false;
      currentFlashcardIndex += 1;
      renderApp();
    };
  }

  const fcSelect = document.getElementById('flashcardChapterSelect');
  if (fcSelect) {
    fcSelect.onchange = (e) => {
      currentFlashcardChapter = e.target.value;
      currentFlashcardIndex = 0;
      isFlashcardFlipped = false;
      renderApp();
    };
  }

  const btnShuffle = document.getElementById('btnShuffleFlashcards');
  if (btnShuffle) {
    btnShuffle.onclick = () => {
      currentFlashcardIndex = 0;
      isFlashcardFlipped = false;
      renderApp();
    };
  }

  const btnMarkMastered = document.getElementById('btnMarkMastered');
  if (btnMarkMastered) {
    btnMarkMastered.onclick = () => {
      const currentList = allFlashcards;
      const card = currentList[currentFlashcardIndex];
      if (card) {
        if (!state.flashcardProgress.mastered.includes(card.id)) {
          state.flashcardProgress.mastered.push(card.id);
        }
        state.flashcardProgress.reviewing = state.flashcardProgress.reviewing.filter(id => id !== card.id);
        saveStoredState(state);
        isFlashcardFlipped = false;
        currentFlashcardIndex = Math.min(currentFlashcardIndex + 1, currentList.length - 1);
        renderApp();
      }
    };
  }

  const btnMarkReview = document.getElementById('btnMarkReview');
  if (btnMarkReview) {
    btnMarkReview.onclick = () => {
      const currentList = allFlashcards;
      const card = currentList[currentFlashcardIndex];
      if (card) {
        if (!state.flashcardProgress.reviewing.includes(card.id)) {
          state.flashcardProgress.reviewing.push(card.id);
        }
        state.flashcardProgress.mastered = state.flashcardProgress.mastered.filter(id => id !== card.id);
        saveStoredState(state);
        isFlashcardFlipped = false;
        currentFlashcardIndex = Math.min(currentFlashcardIndex + 1, currentList.length - 1);
        renderApp();
      }
    };
  }

  // --- QUESTION BANK EVENTS ---
  const qbChap = document.getElementById('qbChapterFilter');
  if (qbChap) {
    qbChap.onchange = (e) => { qbFilterChapter = e.target.value; qbPage = 1; renderApp(); };
  }
  const qbLvl = document.getElementById('qbLevelFilter');
  if (qbLvl) {
    qbLvl.onchange = (e) => { qbFilterLevel = e.target.value; qbPage = 1; renderApp(); };
  }
  const qbSearch = document.getElementById('qbSearchInput');
  if (qbSearch) {
    qbSearch.oninput = (e) => { qbSearchQuery = e.target.value; qbPage = 1; renderApp(); };
  }

  document.querySelectorAll('.btn-toggle-explain').forEach(btn => {
    btn.onclick = () => {
      const box = document.getElementById(`explain_${btn.dataset.qid}`);
      if (box) {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
      }
    };
  });

  document.querySelectorAll('.btn-bookmark-question').forEach(btn => {
    btn.onclick = () => {
      toggleQuestionBookmark(btn.dataset.qid);
      state = getStoredState();
      renderApp();
    };
  });

  document.querySelectorAll('.btn-qb-page').forEach(btn => {
    btn.onclick = () => {
      qbPage = parseInt(btn.dataset.page, 10);
      renderApp();
    };
  });

  const btnPracticeFiltered = document.getElementById('btnPracticeFiltered');
  if (btnPracticeFiltered) {
    btnPracticeFiltered.onclick = () => {
      startPracticeFiltered();
    };
  }

  // --- PRACTICE SESSION EVENTS ---
  document.querySelectorAll('.practice-mode-card').forEach(card => {
    card.onclick = () => {
      const mode = card.dataset.mode;
      handlePracticeModeSelect(mode);
    };
  });

  const btnStartPractice = document.getElementById('btnStartPracticeSession');
  if (btnStartPractice) {
    btnStartPractice.onclick = () => {
      const chapVal = document.getElementById('practiceChapterSelect').value;
      const countVal = parseInt(document.getElementById('practiceCountSelect').value, 10);
      startPracticeWithCount(countVal, chapVal, `Luyện Tập ${countVal} Câu ${chapVal === 'all' ? 'Tổng Hợp' : `Chương ${chapVal}`}`);
    };
  }

  if (practiceSession) {
    const btnExit = document.getElementById('btnExitPractice');
    if (btnExit) {
      btnExit.onclick = () => { practiceSession = null; renderApp(); };
    }

    const btnBookmark = document.getElementById('btnPracticeBookmark');
    if (btnBookmark) {
      btnBookmark.onclick = () => {
        toggleQuestionBookmark(btnBookmark.dataset.qid);
        state = getStoredState();
        renderApp();
      };
    }

    // Click chọn phương án trong Practice
    document.querySelectorAll('#practiceOptionsGroup .quiz-option').forEach(optEl => {
      optEl.onclick = () => {
        const selectedIdx = parseInt(optEl.dataset.optIdx, 10);
        const currentQ = practiceSession.questions[practiceSession.currentIndex];
        if (practiceSession.userAnswers[currentQ.id] === undefined) {
          practiceSession.userAnswers[currentQ.id] = selectedIdx;
          const isCorrect = selectedIdx === currentQ.correctAnswer;
          recordQuestionAnswer(currentQ.id, isCorrect, selectedIdx);
          state = getStoredState();
          renderApp();
        }
      };
    });

    const btnPrevQ = document.getElementById('btnPrevPracticeQ');
    if (btnPrevQ) {
      btnPrevQ.onclick = () => {
        practiceSession.currentIndex = Math.max(0, practiceSession.currentIndex - 1);
        renderApp();
      };
    }

    const btnNextQ = document.getElementById('btnNextPracticeQ');
    if (btnNextQ) {
      btnNextQ.onclick = () => {
        practiceSession.currentIndex = Math.min(practiceSession.questions.length - 1, practiceSession.currentIndex + 1);
        renderApp();
      };
    }

    const btnFinish = document.getElementById('btnFinishPractice');
    if (btnFinish) {
      btnFinish.onclick = () => {
        alert('Chúc mừng bạn đã hoàn thành phiên luyện tập!');
        practiceSession = null;
        currentRoute = 'stats';
        renderApp();
      };
    }
  }

  // --- EXAM EVENTS ---
  const btnStartExamNow = document.getElementById('btnStartExamNow');
  if (btnStartExamNow) {
    btnStartExamNow.onclick = () => {
      const selectedRadio = document.querySelector('input[name="examSize"]:checked');
      const count = selectedRadio ? parseInt(selectedRadio.value, 10) : 30;
      startExamSession(count);
    };
  }

  if (examSession && !examSession.isSubmitted) {
    // Click chọn phương án thi
    document.querySelectorAll('#examOptionsGroup .quiz-option').forEach(optEl => {
      optEl.onclick = () => {
        const selectedIdx = parseInt(optEl.dataset.optIdx, 10);
        const currentQ = examSession.questions[examSession.currentIndex];
        examSession.userAnswers[currentQ.id] = selectedIdx;
        renderApp();
      };
    });

    const btnFlag = document.getElementById('btnFlagQuestion');
    if (btnFlag) {
      btnFlag.onclick = () => {
        const qid = btnFlag.dataset.qid;
        if (!examSession.flaggedQuestions) examSession.flaggedQuestions = [];
        const idx = examSession.flaggedQuestions.indexOf(qid);
        if (idx > -1) examSession.flaggedQuestions.splice(idx, 1);
        else examSession.flaggedQuestions.push(qid);
        renderApp();
      };
    }

    const btnPrevExam = document.getElementById('btnPrevExamQ');
    if (btnPrevExam) {
      btnPrevExam.onclick = () => {
        examSession.currentIndex = Math.max(0, examSession.currentIndex - 1);
        renderApp();
      };
    }

    const btnNextExam = document.getElementById('btnNextExamQ');
    if (btnNextExam) {
      btnNextExam.onclick = () => {
        examSession.currentIndex = Math.min(examSession.questions.length - 1, examSession.currentIndex + 1);
        renderApp();
      };
    }

    // Jump question from matrix
    document.querySelectorAll('.btn-jump-q').forEach(btn => {
      btn.onclick = () => {
        examSession.currentIndex = parseInt(btn.dataset.idx, 10);
        renderApp();
      };
    });

    const btnSubmit = document.getElementById('btnSubmitExam') || document.getElementById('btnSubmitExamEarly');
    if (btnSubmit) {
      btnSubmit.onclick = () => {
        const answeredCount = Object.keys(examSession.userAnswers).length;
        const total = examSession.questions.length;
        const unans = total - answeredCount;
        const confirmMsg = unans > 0 
          ? `Bạn còn ${unans} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay bây giờ không?`
          : 'Bạn đã hoàn thành tất cả câu hỏi. Bạn có chắc chắn muốn nộp bài chấm điểm?';
        
        if (confirm(confirmMsg)) {
          finishExamSession();
        }
      };
    }
  }

  // Exam Result Buttons
  const btnRetake = document.getElementById('btnRetakeNewExam');
  if (btnRetake) {
    btnRetake.onclick = () => {
      examSession = null;
      renderApp();
    };
  }

  const btnReviewWrong = document.getElementById('btnReviewWrongExamQuestions');
  if (btnReviewWrong && examSession) {
    btnReviewWrong.onclick = () => {
      const wrongList = examSession.questions.filter(q => examSession.userAnswers[q.id] !== q.correctAnswer);
      if (wrongList.length === 0) {
        alert('Tuyệt vời! Bạn không làm sai câu nào trong bài thi vừa rồi!');
      } else {
        currentRoute = 'practice';
        practiceSession = {
          title: `Luyện Lại ${wrongList.length} Câu Làm Sai Trong Bài Thi`,
          questions: shuffleArray([...wrongList]),
          currentIndex: 0,
          userAnswers: {}
        };
        renderApp();
      }
    };
  }

  // --- FAST-TRACK EVENTS ---
  document.querySelectorAll('.fasttrack-checkbox').forEach(chk => {
    chk.onchange = (e) => {
      const chkId = e.target.dataset.chkid;
      if (!state.fastTrackChecklist) state.fastTrackChecklist = [];
      const idx = state.fastTrackChecklist.indexOf(chkId);
      if (e.target.checked && idx === -1) state.fastTrackChecklist.push(chkId);
      else if (!e.target.checked && idx > -1) state.fastTrackChecklist.splice(idx, 1);
      saveStoredState(state);
      const badge = document.getElementById('checklistProgressBadge');
      if (badge) badge.innerText = `${state.fastTrackChecklist.length} đã thuộc`;
    };
  });

  // --- STATS EVENTS ---
  const btnReset = document.getElementById('btnResetAllStats');
  if (btnReset) {
    btnReset.onclick = () => {
      if (confirm('CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ tiến độ học tập và lịch sử thi thử. Bạn có chắc chắn không?')) {
        state = resetAllData();
        alert('Đã đặt lại dữ liệu thành công.');
        renderApp();
      }
    };
  }

  // --- SETTINGS EVENTS ---
  const themeSel = document.getElementById('settingThemeSelect');
  if (themeSel) {
    themeSel.onchange = (e) => { applyTheme(e.target.value); renderApp(); };
  }
  const fontSel = document.getElementById('settingFontSizeSelect');
  if (fontSel) {
    fontSel.onchange = (e) => { applyFontSize(e.target.value); renderApp(); };
  }
  const btnExport = document.getElementById('btnExportData');
  if (btnExport) {
    btnExport.onclick = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `hcm_learning_backup_${Date.now()}.json`);
      document.body.appendChild(dlAnchor);
      dlAnchor.click();
      dlAnchor.remove();
    };
  }
  const importFile = document.getElementById('importFileInput');
  if (importFile) {
    importFile.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const imported = JSON.parse(evt.target.result);
            state = { ...state, ...imported };
            saveStoredState(state);
            alert('Đã khôi phục dữ liệu học tập thành công!');
            renderApp();
          } catch (err) {
            alert('File JSON không hợp lệ.');
          }
        };
        reader.readAsText(file);
      }
    };
  }
}

// Helper: Bắt đầu luyện tập với số lượng câu
function startPracticeWithCount(count, chapterVal, title) {
  let pool = [];
  if (chapterVal === 'all') {
    pool = [...allQuestions];
  } else {
    pool = questionsByChapter[chapterVal] || allQuestions;
  }

  const selected = shuffleArray(pool).slice(0, count);
  currentRoute = 'practice';
  practiceSession = {
    title: title,
    questions: selected,
    currentIndex: 0,
    userAnswers: {}
  };
  renderApp();
}

function handlePracticeModeSelect(mode) {
  const history = state.questionHistory || {};
  let pool = [];
  let title = '';

  if (mode === 'random') {
    pool = [...allQuestions];
    title = 'Luyện Toàn Bộ 600 Câu Ngẫu Nhiên';
  } else if (mode === 'wrong') {
    pool = allQuestions.filter(q => history[q.id] && history[q.id].correctCount === 0);
    title = `Luyện ${pool.length} Câu Đã Làm Sai`;
    if (pool.length === 0) {
      alert('Tuyệt vời! Hiện tại bạn chưa có câu hỏi nào bị sai.');
      return;
    }
  } else if (mode === 'bookmarked') {
    pool = allQuestions.filter(q => (state.bookmarkedQuestions || []).includes(q.id));
    title = `Luyện ${pool.length} Câu Đã Đánh Dấu`;
    if (pool.length === 0) {
      alert('Bạn chưa đánh dấu câu hỏi nào. Hãy đánh dấu câu hỏi khó khi đọc ngân hàng câu hỏi.');
      return;
    }
  } else if (mode === 'unattempted') {
    pool = allQuestions.filter(q => !history[q.id]);
    title = `Luyện ${pool.length} Câu Chưa Từng Làm`;
    if (pool.length === 0) {
      alert('Bạn đã hoàn thành tất cả 600 câu hỏi trong ngân hàng!');
      return;
    }
  }

  const count = Math.min(pool.length, 30);
  currentRoute = 'practice';
  practiceSession = {
    title: title,
    questions: shuffleArray(pool).slice(0, count),
    currentIndex: 0,
    userAnswers: {}
  };
  renderApp();
}

function startPracticeFiltered() {
  const query = (qbSearchQuery || '').trim().toLowerCase();
  let pool = allQuestions.filter(q => {
    if (qbFilterChapter !== 'all' && q.chapterId != qbFilterChapter) return false;
    if (qbFilterLevel !== 'all' && q.level !== qbFilterLevel) return false;
    if (query) {
      const matchQ = q.question.toLowerCase().includes(query);
      const matchOpts = q.options.some(opt => opt.toLowerCase().includes(query));
      if (!matchQ && !matchOpts) return false;
    }
    return true;
  });

  if (pool.length === 0) {
    alert('Không có câu hỏi nào khớp với bộ lọc hiện tại.');
    return;
  }

  currentRoute = 'practice';
  practiceSession = {
    title: `Luyện Bộ Lọc (${pool.length} câu)`,
    questions: shuffleArray(pool),
    currentIndex: 0,
    userAnswers: {}
  };
  renderApp();
}

// Helper: Bắt đầu bài thi thử
function startExamSession(count) {
  // Lấy câu hỏi cân đối đều từ 6 chương
  const perChapter = Math.ceil(count / 6);
  let selectedPool = [];

  for (let ch = 1; ch <= 6; ch++) {
    const chQuestions = questionsByChapter[ch] || [];
    const picked = shuffleArray(chQuestions).slice(0, perChapter);
    selectedPool.push(...picked);
  }

  selectedPool = shuffleArray(selectedPool).slice(0, count);

  currentRoute = 'exam';
  examSession = {
    questions: selectedPool,
    currentIndex: 0,
    userAnswers: {},
    flaggedQuestions: [],
    isSubmitted: false,
    durationSeconds: count * 60, // 1 phút/câu
    remainingSeconds: count * 60,
    startTime: Date.now()
  };

  // Khởi động đồng hồ đếm ngược
  if (examTimerInterval) clearInterval(examTimerInterval);
  examTimerInterval = setInterval(() => {
    if (examSession && !examSession.isSubmitted) {
      examSession.remainingSeconds -= 1;
      const timerDisplay = document.getElementById('examTimerDisplay');
      if (timerDisplay) {
        const m = Math.floor(examSession.remainingSeconds / 60);
        const s = examSession.remainingSeconds % 60;
        timerDisplay.innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        if (examSession.remainingSeconds < 300) {
          timerDisplay.style.color = 'var(--danger)';
        }
      }

      if (examSession.remainingSeconds <= 0) {
        clearInterval(examTimerInterval);
        alert('Hết giờ làm bài! Hệ thống đang tự động nộp bài thi của bạn.');
        finishExamSession();
      }
    }
  }, 1000);

  renderApp();
}

// Kết thúc bài thi và tính điểm
function finishExamSession() {
  if (examTimerInterval) clearInterval(examTimerInterval);
  examSession.isSubmitted = true;
  examSession.submittedAt = new Date().toLocaleString('vi-VN');

  const timeUsedSeconds = examSession.durationSeconds - examSession.remainingSeconds;
  const usedMin = Math.floor(timeUsedSeconds / 60);
  const usedSec = timeUsedSeconds % 60;
  examSession.timeSpent = `${usedMin} phút ${usedSec} giây`;

  // Tính điểm
  let correct = 0;
  examSession.questions.forEach(q => {
    const isCorrect = examSession.userAnswers[q.id] === q.correctAnswer;
    if (isCorrect) correct++;
    // Ghi nhận câu đã làm vào history
    if (examSession.userAnswers[q.id] !== undefined) {
      recordQuestionAnswer(q.id, isCorrect, examSession.userAnswers[q.id]);
    }
  });

  const total = examSession.questions.length;
  const score = Math.round((correct / total) * 10 * 10) / 10;

  // Lưu kết quả bài thi vào state
  saveExamResult({
    score: score,
    totalQuestions: total,
    correctCount: correct,
    timeSpent: examSession.timeSpent
  });

  state = getStoredState();
  renderApp();
}

// Helper xáo trộn mảng Fisher-Yates
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
