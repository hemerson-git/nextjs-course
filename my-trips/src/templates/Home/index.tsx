import { LinkWrapper } from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { X, Info } from 'phosphor-react';

const Map = dynamic(() => import('components/Map').then((map) => map.Map), {
  ssr: false,
});

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more
        information and photos when clicked!"
        canonical="https://my-trips-hemerson.vercel.com"
        openGraph={{
          url: 'https://my-trips-hemerson.vercel.com',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more' +
            'information and photos when clicked!',
          images: [
            {
              url: 'https://my-trips-hemerson.vercel.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
          site_name: 'My Trips',
        }}
      />

      <LinkWrapper href="/about" aria-label="About">
        <Info size={24} />
      </LinkWrapper>

      <Map places={places} />
    </>
  );
}

export function getStaticProps() {}
