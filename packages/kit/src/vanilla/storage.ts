import { createJSONStorage } from 'jotai/utils';

const storageKey = (key: string) => `ae-ses-${key}`;

export const prefixStorage = createJSONStorage(() => ({
  getItem(key) {
    return sessionStorage.getItem(storageKey(key));
  },
  setItem(key, newValue) {
    sessionStorage.setItem(storageKey(key), newValue);
  },
  removeItem(key) {
    sessionStorage.removeItem(storageKey(key));
  },
}));
