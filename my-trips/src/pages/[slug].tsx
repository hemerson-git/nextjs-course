import { client } from 'graphql/client';
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PageTemplate, { PageTemplateProps } from 'templates/Pages';

// getStaticPaths => used to generate the urls in build time /about. /trips/vitoria-da-conquista
// getStaticProps => used to search page data (static)
// getServerSideProps => used search page data, but in runtime (request) - bundle on server side
// getInitialProps => same as getServerSideProps but request happens on client side (hydrate)

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PageTemplate heading={heading} body={body} />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, {
    first: 3,
  });

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGES_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!page) return { notFound: true };

  console.log(page);

  return {
    props: {
      heading: page.heading,
      body: page.body.html,
    },
  };
};
