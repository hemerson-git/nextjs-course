import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { X } from 'phosphor-react';
import { Fade } from 'react-awesome-reveal';

import { Body, Container, Gallery, Title, Wrapper } from './styles';

import { LinkWrapper } from 'components/LinkWrapper';
import { useRouter } from 'next/router';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export interface PlaceTemplateProps {
  place: {
    slug: string;
    name: string;
    description: {
      html?: string;
      text?: string;
    };

    gallery: ImageProps[];
  };
}

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <Container>
      <NextSeo
        title={`${place.name} | My Trips`}
        description={place.description?.text || ''}
        canonical="https://my-trips-hemerson.vercel.com"
        openGraph={{
          url: 'https://my-trips-hemerson.vercel.com',
          title: `My Trips | ${place.name}`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places' +
              'that I went and show more information and photos when clicked!',
          images: [
            {
              url: place.gallery[0]?.url,
              width: place.gallery[0]?.width,
              height: place.gallery[0]?.height,
              alt: place.name,
            },
          ],
        }}
      />

      <Wrapper>
        <LinkWrapper href="/">
          <X size={24} aria-label="Go back to Home" />
        </LinkWrapper>

        <Title>{place.name}</Title>

        <Body
          dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
        />

        <Gallery>
          {place.gallery.map((image, index) => (
            <Fade cascade>
              <Image
                src={image.url}
                key={`photo-${index}`}
                alt={place.name}
                width={image.width}
                height={image.height}
                objectFit="cover"
                quality={85}
              />
            </Fade>
          ))}
        </Gallery>
      </Wrapper>
    </Container>
  );
}
