import React, { useState, useEffect } from 'react';

interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

const LocationFile: React.FC = () => {
  const [location, setLocation] = useState<Location>({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          const geocoder = new window.google.maps.Geocoder();
          const latlng = new window.google.maps.LatLng(latitude, longitude);
          geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === 'OK') {
              if (results && results.length > 0) {
                const address = results[0].formatted_address;
                setLocation((prevState) => ({ ...prevState, address }));
              } else {
                console.log('No results found');
              }
            } else {
              console.log('Geocode failed due to: ' + status);
            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      { <p>Address: {location.address}</p>}
    </div>
  );
};

export default LocationFile;
