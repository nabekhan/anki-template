import clsx from 'clsx';
import { PropsWithChildren, ReactNode, forwardRef } from 'react';

export const Block = forwardRef<
  HTMLDivElement,
  PropsWithChildren & { name: ReactNode; className?: string; id?: string }
>(({ children, className, name, id }, ref) => (
  <div className={clsx('mb-6', className)} ref={ref} id={id}>
    <div className="mb-1 px-4 text-sm text-gray-500">{name}</div>
    <div
      className={clsx(
        'rounded-xl border bg-white px-4 py-5',
        'dark:border-gray-500 dark:bg-opacity-5',
      )}
    >
      {children}
    </div>
  </div>
));
