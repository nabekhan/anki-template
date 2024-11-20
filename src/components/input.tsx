import clsx from 'clsx';
import { FC } from 'react';

export const Input: FC<{
  type?: 'text' | 'date';
  title: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}> = ({ title, onChange, value, className, type = 'text' }) => {
  return (
    <div className={className}>
      <div
        className={clsx(
          'block text-sm font-medium leading-6 text-gray-900',
          'dark:text-white',
        )}
      >
        {title}
      </div>
      <input
        type={type}
        className={clsx(
          'block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-gray-900 shadow-sm outline-none placeholder:text-gray-400',
          'dark:border-gray-500 dark:bg-gray-800 dark:text-white',
        )}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
