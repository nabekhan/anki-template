import { useState } from 'react';
import { isBack } from '../vanilla/is-back.js';
import { prefixStorage } from '../vanilla/storage.js';

export function useReviewState<T>(key: string, init: T | (() => T)) {
  const [initialValue] = useState(init);

  const [state, setState] = useState(() => {
    if (isBack()) {
      return prefixStorage.getItem(key, initialValue) as T;
    } else {
      prefixStorage.setItem(key, initialValue);
      return initialValue;
    }
  });

  return [
    state,
    (value: T) => {
      setState(value);
      prefixStorage.setItem(key, value);
    },
  ] as const;
}
