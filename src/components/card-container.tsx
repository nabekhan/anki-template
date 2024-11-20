import { locale } from 'at/locale';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

export const CardContainer: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'py-7 font-sans text-base',
        `locale-${locale}`,
        className,
      )}
    >
      <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
    </div>
  );
};

function fallbackRender({ error }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}
