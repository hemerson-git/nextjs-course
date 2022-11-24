import { useRouter } from 'next/router';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Place {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface MapProps {
  places?: Place[];
}

export function Map({ places }: MapProps) {
  const router = useRouter();

  return (
    <MapContainer
      center={[-14.8931516, -40.8447112]}
      zoom={4.2}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map((place) => (
        <Marker
          position={[place.location.latitude, place.location.longitude]}
          eventHandlers={{
            click: () => {
              router.push(`/place/${place.slug}`);
            },
          }}
        >
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
