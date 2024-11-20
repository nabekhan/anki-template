import { AnkiField } from '@/components/field';
import { CardShell } from '../components/card-shell';
import { t } from '@/utils/locale';
import { useField } from '@/hooks/use-field';
import clsx from 'clsx';

export default () => {
  const note = useField('note');
  return (
    <CardShell
      title={t('question')}
      answer={
        <>
          <AnkiField name="answer" className="prose dark:prose-invert" />
          {note ? (
            <>
              <hr className="my-4" />
              <AnkiField
                name="note"
                className={clsx('prose prose-sm mt-3', 'dark:prose-invert')}
              />
            </>
          ) : null}
        </>
      }
    />
  );
};
