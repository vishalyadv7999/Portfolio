import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { projects, personalInfo } from '../src/data/portfolio.js';

const root = resolve('dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const assets = new Set([
  personalInfo.resumePath,
  personalInfo.photoPath,
  '/og-preview.png',
  '/robots.txt',
  ...projects.map(project => project.preview).filter(Boolean),
  ...[...html.matchAll(/(?:src|href)="(\/[^"#?]+)(?:[?#][^"]*)?"/g)].map(match => match[1]),
]);
for (const asset of assets) {
  await access(resolve(root, `.${asset}`));
}
if (!(await readFile(resolve(root, `.${personalInfo.resumePath}`))).subarray(0, 5).equals(Buffer.from('%PDF-'))) {
  throw new Error('The resume download is not a PDF.');
}
for (const project of projects) {
  if (project.hasLiveDemo && !project.liveDemo) throw new Error(`${project.title}: missing demo URL`);
  for (const url of [project.github, project.hasLiveDemo && project.liveDemo].filter(Boolean)) {
    if (new URL(url).protocol !== 'https:') throw new Error(`${project.title}: use HTTPS links`);
  }
}
console.log(`Build verified: ${assets.size} public assets present, valid resume PDF, valid project URL configuration.`);
