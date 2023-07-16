import { resolve } from 'path';
import { fromFile } from '@capsizecss/unpack';

async function main() {
  const metrics = await fromFile(
    resolve(process.cwd(), './public/static/fonts/TASAOrbiterVF.woff2')
  );

  console.log(metrics);
}

main().catch(err => {
  console.error(err);
});
