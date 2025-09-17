import { blobToBase64, track } from '@/utils.js';
import '@/components/full-screen.js';
import './element.js';
import { toBlob } from 'html-to-image';
import { imageDimensionsFromData } from 'image-dimensions';

export async function initTldraw(selector: string) {
  track('tldraw', 'showTldraw');
  try {
    const target = document.querySelector(selector);
    if (!target || !(target instanceof HTMLElement)) {
      throw new Error('QA element not found');
    }

    const png = await toBlob(target, {
      filter: (node) => !node.tagName?.startsWith('AE-'),
    });
    if (!png) {
      throw new Error('Failed to convert QA element to PNG');
    }

    const dim = imageDimensionsFromData(
      new Uint8Array(await png.arrayBuffer())
    );
    if (!dim) {
      throw new Error('Failed to get dimensions of PNG');
    }

    const { width, height } = dim;

    const el = document.createElement('ae-full-screen');
    const tldraw = document.createElement('tldraw-container');
    tldraw.setAttribute('width', width.toString());
    tldraw.setAttribute('height', height.toString());
    tldraw.setAttribute('dataurl', await blobToBase64(png));
    el.appendChild(tldraw);
    document.body.appendChild(el);

    return () => el.remove();
  } catch (error: any) {
    alert(`Error initializing Tldraw: ${error.message}`);
    return undefined;
  }
}
