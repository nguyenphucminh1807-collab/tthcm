// src/utils/storage.js
const STORAGE_KEY = 'hcm_learning_app_state_v1';

export const defaultState = {
  theme: 'light', // 'light' | 'dark'
  fontSize: 'medium', // 'small' | 'medium' | 'large'
  soundEnabled: true,
  completedTheoryChapters: [], // [1, 2, ...]
  bookmarkedTheorySections: [], // ['sec1_1', ...]
  bookmarkedQuestions: [], // ['c1_q001', ...]
  questionHistory: {}, // { 'c1_q001': { answeredCount: 2, correctCount: 2, lastSelected: 1, lastAnsweredAt: '...' } }
  examHistory: [], // [{ id, date, score, totalQuestions, correctCount, timeSpent, chapterStats }]
  flashcardProgress: {
    mastered: [], // ['fc1_1', ...]
    reviewing: [] // ['fc1_2', ...]
  },
  fastTrackChecklist: [] // ['chk_c1_1', ...]
};

export function getStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return { ...defaultState, ...parsed };
  } catch (err) {
    console.error('Failed to read from localStorage:', err);
    return { ...defaultState };
  }
}

export function saveStoredState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
}

export function recordQuestionAnswer(questionId, isCorrect, selectedOption) {
  const state = getStoredState();
  const current = state.questionHistory[questionId] || {
    answeredCount: 0,
    correctCount: 0,
    lastSelected: null,
    lastAnsweredAt: null
  };

  current.answeredCount += 1;
  if (isCorrect) current.correctCount += 1;
  current.lastSelected = selectedOption;
  current.lastAnsweredAt = new Date().toISOString();

  state.questionHistory[questionId] = current;
  saveStoredState(state);
  return state;
}

export function toggleQuestionBookmark(questionId) {
  const state = getStoredState();
  const idx = state.bookmarkedQuestions.indexOf(questionId);
  if (idx > -1) {
    state.bookmarkedQuestions.splice(idx, 1);
  } else {
    state.bookmarkedQuestions.push(questionId);
  }
  saveStoredState(state);
  return state.bookmarkedQuestions.includes(questionId);
}

export function toggleTheoryComplete(chapterId) {
  const state = getStoredState();
  const idx = state.completedTheoryChapters.indexOf(chapterId);
  if (idx > -1) {
    state.completedTheoryChapters.splice(idx, 1);
  } else {
    state.completedTheoryChapters.push(chapterId);
  }
  saveStoredState(state);
  return state.completedTheoryChapters.includes(chapterId);
}

export function saveExamResult(examData) {
  const state = getStoredState();
  state.examHistory.unshift({
    id: 'exam_' + Date.now(),
    date: new Date().toLocaleString('vi-VN'),
    ...examData
  });
  // Giữ lại 30 bài thi gần nhất
  if (state.examHistory.length > 30) {
    state.examHistory = state.examHistory.slice(0, 30);
  }
  saveStoredState(state);
  return state;
}

export function resetAllData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return { ...defaultState };
  } catch (err) {
    console.error('Error resetting data:', err);
    return { ...defaultState };
  }
}
