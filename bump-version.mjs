import fs from 'node:fs/promises';
import path from 'node:path';

const dirname = path.dirname('.');
const file = await fs.readFile(path.join(dirname, 'manifest.json'), 'utf-8');
const manifest = JSON.parse(file);
const version = manifest.version;
const versions = version.split('.');
const patch = parseInt(versions[2], 10) + 1;
const newVersion = `${versions[0]}.${versions[1]}.${patch}`;
manifest.version = newVersion;

await fs.writeFile(path.join(dirname, 'manifest.json'), JSON.stringify(manifest, null, '\t'));
