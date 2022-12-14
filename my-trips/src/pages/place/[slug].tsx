import { GetStaticProps } from 'next';

import { client } from 'graphql/client';
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql';
import { GET_PLACES, GET_PLACES_BY_SLUG } from 'graphql/queries';

import { PlaceTemplate, PlaceTemplateProps } from 'templates/Place';

export default function Place({ place }: PlaceTemplateProps) {
  return <PlaceTemplate place={place} />;
}

export const getStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3,
  });

  const paths = places.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACES_BY_SLUG,
    {
      slug: `${params?.slug}`,
    }
  );

  if (!place) return { notFound: true };
  const MINUTES_IN_HOUR = 60;

  return {
    revalidate: MINUTES_IN_HOUR,
    props: {
      place,
    },
  };
};
