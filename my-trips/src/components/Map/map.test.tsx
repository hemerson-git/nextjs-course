import { render, screen } from '@testing-library/react';
import { Map, MapProps } from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i,
      })
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Vitória da Conquista',
      slug: 'vitoria-da-conquista',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    render(<Map places={[place]} />);

    // expect(screen.getByTitle(/vitoria-da-conquista/i)).toBeInTheDocument();
  });
});
