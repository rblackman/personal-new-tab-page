import fs from 'node:fs/promises';
import path from 'node:path';

const dirname = path.dirname('.');
const file = await fs.readFile(path.join(dirname, 'manifest.json'), 'utf-8');
const manifest = JSON.parse(file);
const packageFile = await fs.readFile(path.join(dirname, 'package.json'), 'utf-8');
const packageJson = JSON.parse(packageFile);
const version = packageJson.version;
manifest.version = version;

await fs.writeFile(path.join(dirname, 'manifest.json'), JSON.stringify(manifest, null, '\t'));
