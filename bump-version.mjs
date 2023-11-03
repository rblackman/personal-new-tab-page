import fs from 'node:fs/promises';
import path from 'node:path';

const dirname = path.dirname('.');
const file = await fs.readFile(path.join(dirname, 'manifest.json'), 'utf-8');
const manifest = JSON.parse(file);

console.debug('read manifest.json');

const packageFile = await fs.readFile(path.join(dirname, 'package.json'), 'utf-8');
const packageJson = JSON.parse(packageFile);

console.debug('read package.json');

manifest.version = packageJson.version;
console.info('updated manifest.json to version', packageJson.version);

await fs.writeFile(path.join(dirname, 'manifest.json'), JSON.stringify(manifest, null, '\t'));

console.debug('wrote manifest.json');
