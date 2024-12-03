import { SearchButton, TranslateButton } from './menu-buttons';
import { useTextSelection } from '@/hooks/use-text-selection';
import { FC, PropsWithChildren, RefObject, useEffect, useState } from 'react';
import { useThrottle } from 'react-use';

export const SelectionMenu: FC<
  PropsWithChildren & { target: RefObject<HTMLDivElement> }
> = ({ target }) => {
  const { clientRect, textContent, isCollapsed } = useTextSelection(target);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (textContent?.trim() === '') {
      setOpen(false);
      return;
    }
    setOpen(true);
  }, [textContent]);

  const throttledRect = useThrottle(clientRect, 60);

  if (!open || !throttledRect || isCollapsed || !textContent) {
    return null;
  }

  const { top, left, width, height } = throttledRect;

  return (
    <div
      className="pointer-events-none absolute flex items-center transition-all"
      style={{
        top: `${top + height + 10}px`,
        left: `${left}px`,
        width: `${width}px`,
        zIndex: 999,
      }}
    >
      <div className="pointer-events-auto mx-auto flex flex-row gap-2 rounded-md border bg-white p-2 shadow-xl">
        <TranslateButton sel={textContent} />
        <SearchButton sel={textContent} />
      </div>
    </div>
  );
};
