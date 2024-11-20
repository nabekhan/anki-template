import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { id } from 'at/options';

const storage = createJSONStorage<any>(() => localStorage);

export const atomWithLocalStorage = <T>(key: string, initialValue: T) =>
  atomWithStorage<T>(`at:${id}:${key}`, initialValue, storage, {
    getOnInit: true,
  });
