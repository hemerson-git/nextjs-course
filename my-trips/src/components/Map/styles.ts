import styled from 'styled-components';

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;

  .leaflet-container {
    background-color: var(--background);
  }

  .leaflet-control-zoom {
    a {
      background-color: rgba(100, 100, 100, 0.3);
      transition: background-color 0.3s;
      backdrop-filter: blur(6px);
      color: var(--highlight);

      &.leaflet-disabled {
        color: var(--gray);
        opacity: 0.5;
      }

      &:hover {
        background-color: rgba(100, 100, 100, 0.5);
      }
    }
  }

  .leaflet-control-attribution {
    background-color: rgba(100, 100, 100, 0.5);
    padding: 0.25rem 1rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(6px);

    color: var(--highlight);
    a {
      color: var(--highlight);
    }
  }

  .leaflet-touch .leaflet-bar a:first-child {
    border-bottom-color: var(--highlight);
  }
`;
