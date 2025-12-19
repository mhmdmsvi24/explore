import { useState } from "react";
import useFetch from "./useFetch";
import { useEffect } from "react";

export function useCountry(storageName, search) {
  const { data, loading, error } = useFetch(`https://restcountries.com/v3.1/name/${search}?fields=name,flags,population,cca2,continents,currencies,capital,languages,coatOfArms,latlng`, storageName);
  const [result, setResult] = useState(null);

  useEffect(() => {
    function getCountry() {
      if (!loading && !error) {
        // If it's new then it will contain a single country obj in an array
        if (data[0].name.common == search || data[0].name.official == search) setResult(data[0])
        // else it will be cached countries data from local storage
        else {
          const searchRes = data.find(country => country.name.common == search || country.name.official == search) || null
          setResult(searchRes)
        }
      }
    }

    getCountry()
  }, [data, loading, error, search])

  return { result }
}
