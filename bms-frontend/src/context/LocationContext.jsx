import React, { createContext, useContext, useEffect, useState } from "react";

// Corrected: Initialize with createContext, not useContext
export const LocationContext = createContext();
export const LocationProvider = ({ children }) => {
  // Corrected "Provide" to "Provider"
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Added: Logic to actually fetch the data from an API
  const fetchLocationData = async (lat, lon) => {
    try {
      // Example using a reverse geocoding API
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
      );
      const data = await response.json();
      const userLocation =
        data.city ||
        data.principalSubdivision ||
        data.locality ||
        "Location Found";
      setLocation(userLocation);
    } catch (err) {
      setError("Failed to fetch location details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocationData(latitude, longitude);
      },
      () => {
        setError("Unable to retrieve your location");
        setLoading(false);
      }
    );
  }, []);

  return (
    <LocationContext.Provider value={{ location, loading, error }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
