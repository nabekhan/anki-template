import { FC, memo, useLayoutEffect, useRef } from 'react';
import { noop } from '../utils.js';
import { cloneFieldNode } from '../vanilla/field.js';

export interface AnkiFieldProps {
  name: string;
  className?: string;
}
export const AnkiField: FC<AnkiFieldProps> = memo(({ name, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cloned = cloneFieldNode(name);
    if (!ref.current || !cloned) {
      return noop;
    }

    ref.current.appendChild(cloned);
    return () => ref.current?.removeChild(cloned);
  }, [name]);

  return <div ref={ref} className={`ae-field-container ${className || ''}`} />;
});
