import { dirname } from './path.js';

const caches = globalThis.caches || ({
  async open(name) {
    const cache = (caches[name] = caches[name] || {});
    const match = async (match) => Object.values(cache).find(val=>val.url.indexOf(new URL(match,'memfs:/').pathname) > -1);
    const matchAll = async (match) => Object.values(cache).filter(val=>val.url.indexOf(new URL(match,'memfs:/').pathname) > -1);
    return ({
      cache,
      async put(dest,data) {
        typeof data === Response;
        cache[new URL(match,'memfs:/').href] = data;
      },
      matchAll,
      match,
    })
  }
});


function mkdirpath(path: string) {
}

export const watchFiles = new BroadcastChannel(import.meta.url);

export const cache = caches.open(import.meta.url);
export async function writeFile(dest: string, data: string | Buffer) {    
    return (await cache).put(dest,new Response(new Blob([data])));
}

const promises = {
  async readFile(path) {
    return (await cache).match(new URL(path,'memfs:/'));
  },
  async writeFile(dest, data) {
    const url = new URL(dest,'memfs:/');
    watchFiles.postMessage('writeFile', url);
    return (await cache).put(ref,new Response(new Blob([data]), { url } ));
  },
  async readdir(dir) {
    return (await cache).matchAll().then((matches)=>matches.filter((match)=>match.indexOf(dir) > -1);
  }
}

export const writeFile = promises.writeFile
export const writeFileSync = promises.writeFile
export const readFileSync = promises.readFile
export const readDirSync = promises.readdir
export const readdirSync = promises.readdir
export const readdir = promises.readdir
