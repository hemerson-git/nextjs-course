import { LinkWrapper } from 'components/LinkWrapper';
import dynamic from 'next/dynamic';
import { X, Info } from 'phosphor-react';

const Map = dynamic(() => import('components/Map').then((map) => map.Map), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about" aria-label="About">
        <Info size={24} />
      </LinkWrapper>

      <Map />
    </>
  );
}
