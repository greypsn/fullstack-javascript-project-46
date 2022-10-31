import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import parser from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('file json default', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  const result = readFile('output.txt', 'utf8').trim();
  expect(parser(filename1, filename2)).toBe(result);
});

test('file plain', () => {
  const filename1 = getFixturePath('file3.json');
  const filename2 = getFixturePath('file4.json');
  const result = readFile('outputplain.txt', 'utf8').trim();
  expect(parser(filename1, filename2, 'plain')).toBe(result);
});

test('file json', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  const result = readFile('outputjson.txt', 'utf8').trim();
  expect(parser(filename1, filename2, 'json')).toBe(result);
});
