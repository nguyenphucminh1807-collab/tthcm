import { chaptersMeta } from './chaptersMeta.js';
import { chapter1Theory } from './theory/chapter1.js';
import { chapter2Theory } from './theory/chapter2.js';
import { chapter3Theory } from './theory/chapter3.js';
import { chapter4Theory } from './theory/chapter4.js';
import { chapter5Theory } from './theory/chapter5.js';
import { chapter6Theory } from './theory/chapter6.js';

import { chapter1Questions } from './questions/chapter1.js';
import { chapter2Questions } from './questions/chapter2.js';
import { chapter3Questions } from './questions/chapter3.js';
import { chapter4Questions } from './questions/chapter4.js';
import { chapter5Questions } from './questions/chapter5.js';
import { chapter6Questions } from './questions/chapter6.js';

import { chapter1Flashcards } from './flashcards/chapter1.js';
import { chapter2Flashcards } from './flashcards/chapter2.js';
import { chapter3Flashcards } from './flashcards/chapter3.js';
import { chapter4Flashcards } from './flashcards/chapter4.js';
import { chapter5Flashcards } from './flashcards/chapter5.js';
import { chapter6Flashcards } from './flashcards/chapter6.js';

import { fastTrackData } from './fastTrack.js';

export const allTheory = {
  1: chapter1Theory,
  2: chapter2Theory,
  3: chapter3Theory,
  4: chapter4Theory,
  5: chapter5Theory,
  6: chapter6Theory
};

export const allQuestions = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions
];

export const questionsByChapter = {
  1: chapter1Questions,
  2: chapter2Questions,
  3: chapter3Questions,
  4: chapter4Questions,
  5: chapter5Questions,
  6: chapter6Questions
};

export const allFlashcards = [
  ...chapter1Flashcards,
  ...chapter2Flashcards,
  ...chapter3Flashcards,
  ...chapter4Flashcards,
  ...chapter5Flashcards,
  ...chapter6Flashcards
];

export const flashcardsByChapter = {
  1: chapter1Flashcards,
  2: chapter2Flashcards,
  3: chapter3Flashcards,
  4: chapter4Flashcards,
  5: chapter5Flashcards,
  6: chapter6Flashcards
};

export { chaptersMeta, fastTrackData };
