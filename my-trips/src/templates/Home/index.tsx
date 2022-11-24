import { LinkWrapper } from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import dynamic from 'next/dynamic';
import { X, Info } from 'phosphor-react';

const Map = dynamic(() => import('components/Map').then((map) => map.Map), {
  ssr: false,
});

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about" aria-label="About">
        <Info size={24} />
      </LinkWrapper>

      <Map places={places} />
    </>
  );
}

export function getStaticProps() {}
