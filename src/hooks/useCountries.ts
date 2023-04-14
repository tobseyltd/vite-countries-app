import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import CountriesApiService, { fetchApiProps } from "../services/CountriesApiService";

const useCountries = () => {
  const [countries, setCountries] = useState<fetchApiProps[]>([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = CountriesApiService.getCountries();
    request
      .then((RESPONSE) => setCountries(RESPONSE.data))
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setFetchError(ERROR.message);
      })
      .finally(() => setLoading(false));

    return cancel();
  }, []);

  return { countries, fetchError, isLoading }
}

export default useCountries