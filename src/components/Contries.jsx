import useFetch from "../hooks/useFetch"
import CountryCard from "./CountryCard(CC)/CountryCard"
import Loading from "./Loading"

export default function Countries() {
  const { data, loading, error } = useFetch("https://restcountries.com/v3.1/all?fields=name,flags,population,cca2,continents,currencies,capital,languages,coatOfArms,latlng", "countries")

  if (loading || !data.length) {
    return (<Loading style={"h-svh"} />)
  }

  if (error) {
    return (<div>Something Wen't Wrong</div>)
  }

  // ! Number of Countries reduced to 10 for development speed
  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 gap-2 my-2"
    >
      {
        data.map((country, ind) => {
          return ind < 10 ?
            <CountryCard key={country.cca2} data={country} /> :
            null
        })
      }
    </div>
  )
}
