import { LinkButton } from './link-button';
import imgBaiduFanyi from '@/assets/baidu-fanyi.png';
import imgBaidu from '@/assets/baidu.png';
import imgGoogleTranslate from '@/assets/google-translate.svg';
import imgGoogle from '@/assets/google.svg';
import { locale } from 'at/locale';
import { FC } from 'react';

const BaiduTranslate: FC<{ sel: string }> = ({ sel }) => (
  <LinkButton
    href={`https://fanyi.baidu.com/#en/zh/${encodeURIComponent(sel)}`}
    image={imgBaiduFanyi}
  />
);

const BaiduSearch: FC<{ sel: string }> = ({ sel }) => (
  <LinkButton
    href={`https://www.baidu.com/#wd=${encodeURIComponent(sel)}`}
    image={imgBaidu}
  />
);

const GoogleTranslate: FC<{ sel: string }> = ({ sel }) => (
  <LinkButton
    href={`https://translate.google.com/?sl=auto&text=${encodeURIComponent(sel)}&op=translate`}
    image={imgGoogleTranslate}
  />
);

const GoogleSearch: FC<{ sel: string }> = ({ sel }) => (
  <LinkButton
    href={`https://www.google.com/search?q=${encodeURIComponent(sel)}`}
    image={imgGoogle}
  />
);

export const TranslateButton =
  locale === 'zh' ? BaiduTranslate : GoogleTranslate;
export const SearchButton = locale === 'zh' ? BaiduSearch : GoogleSearch;
