import { useAtomValue } from 'jotai';
import { isBackAtom } from '../vanilla/index.js';

export * from './field.jsx';

export const useIsBack = () => useAtomValue(isBackAtom);
