import clsx from 'clsx';
import { doNothing } from 'remeda';
import { FC, useId } from 'react';

export const Checkbox: FC<{
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
  title: string;
  subtitle?: string;
  disabled?: boolean;
}> = ({ onChange, className, checked, title, subtitle, disabled }) => {
  const id = useId();
  return (
    <div className={clsx('relative flex gap-x-3', className)}>
      <div className="flex h-6 items-center">
        <input
          id={id}
          type="checkbox"
          className={clsx(
            'h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-0 disabled:bg-gray-200',
          )}
          checked={checked}
          onChange={
            disabled ? doNothing : (e) => onChange?.(Boolean(e.target.checked))
          }
          disabled={disabled}
        />
      </div>
      <div className="text-sm leading-6">
        <label
          htmlFor={id}
          className={clsx('font-medium text-gray-900', 'dark:text-white')}
        >
          {title}
        </label>
        <p className={clsx('text-gray-500', 'dark:text-gray-400')}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};
