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

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_API_USER_ID = process.env.NEXT_PUBLIC_MAPBOX_API_USER_ID;
const MAPBOX_API_STYLE_ID = process.env.NEXT_PUBLIC_MAPBOX_API_STYLE_ID;

function CustomTileLayer() {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='&copy; <a href="https://apps.mapbox.com/feedback">Mapbox </a> ©
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_API_USER_ID}/${MAPBOX_API_STYLE_ID}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}

export function Map({ places }: MapProps) {
  const router = useRouter();

  return (
    <MapContainer
      center={[-14.8931516, -40.8447112]}
      zoom={3.4}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />
      {places?.map((place) => (
        <Marker
          key={place.id}
          position={[place.location.latitude, place.location.longitude]}
          eventHandlers={{
            click: () => {
              router.push(`/place/${place.slug}`);
            },
          }}
        >
          {/* <Popup>{place.name}</Popup> */}
        </Marker>
      ))}
    </MapContainer>
  );
}
