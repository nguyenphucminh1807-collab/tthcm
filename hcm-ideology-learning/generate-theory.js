// generate-theory.js
const fs = require('fs');
const path = require('path');

const theoryDir = path.join(__dirname, 'src', 'data', 'theory');

// Load or create theory data for Chapter 1 to Chapter 6
const chapters = [
  require('./generators/chapter1_theory.js'),
  require('./generators/chapter2_theory.js'),
  require('./generators/chapter3_theory.js'),
  require('./generators/chapter4_theory.js'),
  require('./generators/chapter5_theory.js'),
  require('./generators/chapter6_theory.js')
];

chapters.forEach((chap, idx) => {
  const filePath = path.join(theoryDir, `chapter${idx + 1}.js`);
  fs.writeFileSync(filePath, `export const chapter${idx + 1}Theory = ${JSON.stringify(chap, null, 2)};\n`, 'utf8');
  console.log(`Generated theory for Chapter ${idx + 1}`);
});

console.log('All 6 chapters theory generated successfully!');
