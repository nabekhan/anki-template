import { Block } from './block';
import { Input } from './input';
import { hideTimerAtom } from './settings';

import useCountDown from 'ahooks/es/useCountDown';
import useCreation from 'ahooks/es/useCreation';
import { useAtom, useAtomValue } from 'jotai';
import { FC, useState } from 'react';

import { t } from '@/utils/locale';
import { atomWithLocalStorage } from '@/utils/storage';

export const Timer: FC = () => {
  const timer = useAtomValue(timerAtom);
  const [, formattedRes] = useCountDown({
    targetDate: timer.targetDate,
  });

  const displayBlocks: [string, number][] = useCreation(() => {
    const { days, hours, minutes, seconds } = formattedRes;

    return [
      [t('day'), days],
      [t('hour'), hours],
      [t('minute'), minutes],
      [t('second'), seconds],
    ];
  }, [formattedRes]);

  return (
    <>
      <div className="mb-4 text-center font-bold text-indigo-500">
        {timer?.title}
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        {displayBlocks.map(([name, num]) => (
          <div key={name} className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-indigo-500 text-2xl font-bold text-white">
              {num}
            </div>
            <div className="mt-2 text-sm text-indigo-500">{name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

interface TimerProps {
  // `2023-12-31 23:59:59`
  targetDate: string;
  title: string;
}

const defaultTimerProps = {
  targetDate: '2023-12-31',
  title: t('defaultTimerTitle'),
};

export const timerAtom = atomWithLocalStorage<TimerProps>(
  'timer',
  defaultTimerProps,
);

export const TimerBlock = () => {
  const prefHideTimer = useAtomValue(hideTimerAtom);
  const [showSetting, setShowSetting] = useState(false);

  const [timer, setTimer] = useAtom(timerAtom);

  if (prefHideTimer) {
    return null;
  }

  return (
    <Block
      name={
        <div className="flex flex-row justify-between">
          <span>{showSetting ? t('timerSetting') : t('timer')}</span>
          <div
            className="cursor-pointer font-bold text-indigo-500"
            onClick={() => setShowSetting((p) => !p)}
          >
            {showSetting ? t('close') : t('setting')}
          </div>
        </div>
      }
    >
      {showSetting ? (
        <>
          <Input
            title={t('timerTitle')}
            value={timer.title}
            onChange={(title) =>
              setTimer((prevTimer) => ({
                ...prevTimer,
                title,
              }))
            }
            className="mt-2"
          />
          <Input
            type="date"
            title={t('targetDate')}
            value={timer.targetDate || defaultTimerProps.targetDate}
            onChange={(targetDate) =>
              setTimer((prevTimer) => ({
                ...prevTimer,
                targetDate: targetDate || defaultTimerProps.targetDate,
              }))
            }
            className="my-4"
          />
        </>
      ) : (
        <Timer />
      )}
    </Block>
  );
};