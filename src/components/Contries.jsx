import useFetch from "../hooks/useFetch"
import CountryCard from "./CountryCard"

export default function Countries() {
  const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all?fields=name,flag,population,cca3,cca2,continents,currencies,capital,languages")

  if (loading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>Something Wen't Wrong</div>)
  }

  return (
    <div
      className="grid grid-cols-1 gap-2"
    >
      {
        data.map((country) =>
          <CountryCard key={country.cca3} data={country} />
        )
      }
    </div>
  )
}
