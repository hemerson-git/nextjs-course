import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;

  top: var(--medium);
  right: var(--medium);
  cursor: pointer;

  a {
    color: var(--white);
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--highlight) !important;
    }
  }
`;
