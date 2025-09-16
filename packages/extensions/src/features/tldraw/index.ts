import { blobToBase64 } from '@/utils.js';
import './element.js';
import { toBlob } from 'html-to-image';
import { imageDimensionsFromData } from 'image-dimensions';

export async function initTldraw() {
  try {
    const qa = document.getElementById('qa');
    if (!qa) {
      throw new Error('QA element not found');
    }

    const png = await toBlob(qa);
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

    const el = document.createElement('ext-full-screen');
    const tldraw = document.createElement('tldraw-container');
    tldraw.setAttribute('width', width.toString());
    tldraw.setAttribute('height', height.toString());
    tldraw.setAttribute('dataurl', await blobToBase64(png));
    el.appendChild(tldraw);
    document.body.appendChild(el);
  } catch (error: any) {
    alert(`Error initializing Tldraw: ${error.message}`);
  }
}
