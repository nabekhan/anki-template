import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Button: FC<
  PropsWithChildren & { onClick?: () => void; className?: string }
> = ({ onClick, children, className }) => (
  <button
    type="button"
    className={clsx(
      'inline-flex justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none',
      className,
      'dark:bg-white dark:bg-opacity-10 dark:text-white dark:hover:bg-opacity-20',
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
