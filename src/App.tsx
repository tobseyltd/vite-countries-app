import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import CountryFilter from "./components/CountryFilter";
import SearchFilter from "./components/SearchFilter";

interface fetchApiProps {
  name: {
    common: string;
  };
  capital: string;
  flags: {
    alt: string;
    svg: string;
  };
  population: number;
  region: string;
}

const App = () => {
  const [countries, setCountries] = useState<fetchApiProps[]>([]);
  const [fetchError, setFetchError] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const regions = countries
    .map((country) => country.region)
    .sort()
    .filter((region, index, array) => {
      return array.indexOf(region) === index;
    });

  const filteredRegion = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries.sort();

  const filteredCountry = selectedCountry
    ? countries.filter((country) => country.name.common === selectedCountry)
    : countries;

  useEffect(() => {
    const abortController = new AbortController();

    axios
      .get<fetchApiProps[]>("https://restcountries.com/v3.1/all")
      .then((RESPONSE) => setCountries(RESPONSE.data))
      .catch((ERROR) => {
        if (ERROR instanceof CanceledError) return;
        setFetchError(ERROR.message);
      });

    return abortController.abort();
  }, []);
  // console.log(
  //   countries.filter((country) => country.name.official === "Barbados")
  // );

  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem boxShadow={"lg"} area={"nav"}>
          <Header />
        </GridItem>
        <GridItem area={"main"} p={10}>
          <Flex justify={"space-between"} mb={10}>
            <SearchFilter
              onSearchInput={(country) => setSelectedCountry(country)}
            />
            <CountryFilter
              onSelectRegion={(region) => setSelectedRegion(region)}
              regions={regions}
            />
          </Flex>
          <SimpleGrid justifyItems={"center"} minChildWidth={250} spacing={20}>
            {fetchError && <p>{fetchError}</p>}
            {(selectedCountry ? filteredCountry : filteredRegion).map(
              (country) => (
                <CountryCard
                  key={country.name.common}
                  alt={country.flags.alt}
                  country={country.name.common}
                  capital={country.capital}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                />
              )
            )}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
