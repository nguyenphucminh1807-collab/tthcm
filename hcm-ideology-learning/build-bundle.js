// build-bundle.js
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

// Hàm làm sạch import / export triệt để (hỗ trợ cả multi-line import)
const cleanCode = (content) => {
  return content
    // Xóa import ... from '...' cả đơn dòng lẫn đa dòng
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]*?['"];?/g, '')
    // Xóa import '...'
    .replace(/import\s+['"][^'"]*?['"];?/g, '')
    // Xóa export { ... };
    .replace(/export\s*\{[\s\S]*?\};?/g, '')
    // Xóa export default ...
    .replace(/export\s+default\s+/g, '')
    // Chuyển export const/function thành const/function
    .replace(/export\s+(const|function|let|var|class)\s+/g, '$1 ');
};

// Đọc toàn bộ các file dữ liệu và code
const chaptersMeta = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'chaptersMeta.js'), 'utf8'));

const c1Theory = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'theory', 'chapter1.js'), 'utf8'));
const c2Theory = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'theory', 'chapter2.js'), 'utf8'));
const c3Theory = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'theory', 'chapter3.js'), 'utf8'));
const c4Theory = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'theory', 'chapter4.js'), 'utf8'));
const c5Theory = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'theory', 'chapter5.js'), 'utf8'));
const c6Theory = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'theory', 'chapter6.js'), 'utf8'));

const c1Questions = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'questions', 'chapter1.js'), 'utf8'));
const c2Questions = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'questions', 'chapter2.js'), 'utf8'));
const c3Questions = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'questions', 'chapter3.js'), 'utf8'));
const c4Questions = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'questions', 'chapter4.js'), 'utf8'));
const c5Questions = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'questions', 'chapter5.js'), 'utf8'));
const c6Questions = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'questions', 'chapter6.js'), 'utf8'));

const c1Cards = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'flashcards', 'chapter1.js'), 'utf8'));
const c2Cards = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'flashcards', 'chapter2.js'), 'utf8'));
const c3Cards = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'flashcards', 'chapter3.js'), 'utf8'));
const c4Cards = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'flashcards', 'chapter4.js'), 'utf8'));
const c5Cards = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'flashcards', 'chapter5.js'), 'utf8'));
const c6Cards = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'flashcards', 'chapter6.js'), 'utf8'));

const fastTrack = cleanCode(fs.readFileSync(path.join(srcDir, 'data', 'fastTrack.js'), 'utf8'));

const storageCode = cleanCode(fs.readFileSync(path.join(srcDir, 'utils', 'storage.js'), 'utf8'));
const sidebarCode = cleanCode(fs.readFileSync(path.join(srcDir, 'components', 'Sidebar.js'), 'utf8'));
const headerCode = cleanCode(fs.readFileSync(path.join(srcDir, 'components', 'Header.js'), 'utf8'));
const dashboardCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'DashboardView.js'), 'utf8'));
const theoryCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'TheoryView.js'), 'utf8'));
const flashcardCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'FlashcardView.js'), 'utf8'));
const questionBankCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'QuestionBankView.js'), 'utf8'));
const practiceCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'PracticeView.js'), 'utf8'));
const examCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'ExamView.js'), 'utf8'));
const fastTrackCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'FastTrackView.js'), 'utf8'));
const statsCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'StatsView.js'), 'utf8'));
const settingsCode = cleanCode(fs.readFileSync(path.join(srcDir, 'pages', 'SettingsView.js'), 'utf8'));
const appCode = cleanCode(fs.readFileSync(path.join(srcDir, 'app.js'), 'utf8'));

const bundleDataCode = `
${chaptersMeta}

${c1Theory}
${c2Theory}
${c3Theory}
${c4Theory}
${c5Theory}
${c6Theory}

${c1Questions}
${c2Questions}
${c3Questions}
${c4Questions}
${c5Questions}
${c6Questions}

${c1Cards}
${c2Cards}
${c3Cards}
${c4Cards}
${c5Cards}
${c6Cards}

${fastTrack}

const allTheory = {
  1: chapter1Theory,
  2: chapter2Theory,
  3: chapter3Theory,
  4: chapter4Theory,
  5: chapter5Theory,
  6: chapter6Theory
};

const allQuestions = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions
];

const questionsByChapter = {
  1: chapter1Questions,
  2: chapter2Questions,
  3: chapter3Questions,
  4: chapter4Questions,
  5: chapter5Questions,
  6: chapter6Questions
};

const allFlashcards = [
  ...chapter1Flashcards,
  ...chapter2Flashcards,
  ...chapter3Flashcards,
  ...chapter4Flashcards,
  ...chapter5Flashcards,
  ...chapter6Flashcards
];

const flashcardsByChapter = {
  1: chapter1Flashcards,
  2: chapter2Flashcards,
  3: chapter3Flashcards,
  4: chapter4Flashcards,
  5: chapter5Flashcards,
  6: chapter6Flashcards
};
`;

const fullBundle = `
// HCM Ideology Learning Platform - Standalone Production Bundle (Offline Ready)
(function() {
  'use strict';

  ${bundleDataCode}
  ${storageCode}
  ${sidebarCode}
  ${headerCode}
  ${dashboardCode}
  ${theoryCode}
  ${flashcardCode}
  ${questionBankCode}
  ${practiceCode}
  ${examCode}
  ${fastTrackCode}
  ${statsCode}
  ${settingsCode}
  ${appCode}

  // Tự động khởi động khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
`;

fs.writeFileSync(path.join(distDir, 'app.bundle.js'), fullBundle, 'utf8');
console.log('Rebuilt dist/app.bundle.js cleanly! File size:', Math.round(fullBundle.length / 1024), 'KB');
