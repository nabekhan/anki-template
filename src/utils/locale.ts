import { map } from 'at/locale';

export const t = (key: keyof typeof map) => map[key] || 'key';
