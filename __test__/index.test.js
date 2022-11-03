import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import parser from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const stylishResult = readFile('output.txt', 'utf8').trim();
const plainResult = readFile('outputplain.txt', 'utf8').trim();
const jsonResult = readFile('outputjson.txt', 'utf8').trim();

test.each(['json', 'yml'])('file type %p', (ext) => {
  const fileBefore = getFixturePath(`file1.${ext}`);
  const fileAfter = getFixturePath(`file2.${ext}`);
  expect(parser(fileBefore, fileAfter)).toBe(stylishResult);
  expect(parser(fileBefore, fileAfter, 'plain')).toBe(plainResult);
  expect(parser(fileBefore, fileAfter, 'json')).toBe(jsonResult);
});
