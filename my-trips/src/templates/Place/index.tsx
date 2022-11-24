import Image from 'next/image';
import { X } from 'phosphor-react';

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
    };

    gallery: ImageProps[];
  };
}

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <Container>
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
            <Image
              src={image.url}
              key={`photo-${index}`}
              alt={place.name}
              width={image.width}
              height={image.height}
              objectFit="cover"
              quality={80}
            />
          ))}
        </Gallery>
      </Wrapper>
    </Container>
  );
}
