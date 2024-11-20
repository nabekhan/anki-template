import useCreation from 'ahooks/es/useCreation';

import { FIELD_ID } from '@/utils/const';

export const useField = (field: string): string | null =>
  useCreation(
    () => document.getElementById(FIELD_ID(field))?.innerText || null,
    [field],
  );
