import React, { useEffect, useState } from 'react';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/locations`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setLocations(data);
        } else {
          console.error('Depo verileri alınamadı');
        }
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="location-list-page">
      <h2>Depolar</h2>
      <ul>
        {locations.map((loc) => (
          <li key={loc.id}>
            {loc.name} ({loc.code})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
