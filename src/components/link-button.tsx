import { FC } from 'react';

export const LinkButton: FC<{ image: string; href: string }> = ({
  image,
  href,
}) => {
  return (
    <a
      className="block h-7 w-7 cursor-pointer bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
      href={href}
      target="_blank"
      rel="noreferrer"
    />
  );
};
