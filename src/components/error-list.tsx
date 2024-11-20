import useCreation from 'ahooks/es/useCreation';
import { FC } from 'react';

interface Predicate {
  condition?: boolean;
  message?: string;
}

export const ErrorList: FC<{ predicates: Predicate[] /** const */ }> = ({
  predicates,
}) => {
  const errors = useCreation(
    () =>
      predicates
        .filter(({ condition }) => condition)

        .map(({ message }, index) => <li key={index}>{message}</li>),
    [],
  );
  if (!errors.length) {
    return null;
  }
  return (
    <ul className="my-8 rounded border-red-500 bg-red-100 px-6 py-8 text-3xl">
      {errors}
    </ul>
  );
};
