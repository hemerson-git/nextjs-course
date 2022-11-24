import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`;

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`;

export const Title = styled.h2`
  font-size: var(--medium);
  margin-bottom: var(--medium);
`;

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }
`;

export const Gallery = styled.div`
  display: grid;
  gap: var(--medium);
  /* grid-template-columns: repeat(3, 1fr); */

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );

    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      from {
        background-position: -40rem 0;
      }

      to {
        background-position: 40rem 0;
      }
    }

    max-width: 100%;
    border-radius: 6px;
  }
`;
