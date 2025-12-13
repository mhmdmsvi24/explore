import useFetch from "../hooks/useFetch"
import CountryCard from "./CountryCard"
import Loading from "./Loading"

export default function Countries() {
  const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all?fields=name,flags,population,cca3,cca2,continents,currencies,capital,languages,coatOfArms", "countries")

  if (loading || !data.length) {
    return (<Loading style={"h-svh"}/>)
  }

  if (error) {
    return (<div>Something Wen't Wrong</div>)
  }

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 gap-2 my-1"
    >
      {
        data.map((country) =>
          <CountryCard key={country.cca3} data={country} />
        )
      }
    </div>
  )
}
