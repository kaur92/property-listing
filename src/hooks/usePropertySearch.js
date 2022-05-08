import { useEffect, useState } from "react";

const BASE_URI = "http://localhost:3001";

export const usePropertySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`${BASE_URI}/properties`);
      const data = await response.json();
      setProperties(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setProperties([]);
    fetchProperties();
  }, []);

  return { isLoading, properties, error };
};
