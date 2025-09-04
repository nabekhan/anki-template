import { AnkiField, useIsBack } from '@anki-eco/kit/react';

const App = () => {
  const back = useIsBack();
  return (
    <div className="example">
      <AnkiField name="Q" />
      {back ? <AnkiField name="A" /> : null}
    </div>
  );
};

export default App;
