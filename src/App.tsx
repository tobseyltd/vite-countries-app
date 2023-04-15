import { useState } from "react";
import { Flex, Grid, GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import CountryFilter from "./components/CountryFilter";
import SearchFilter from "./components/SearchFilter";
import DetailPage from "./components/DetailPage";
import useCountries from "./hooks/useCountries";

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [detailCountry, setDetailCountry] = useState("");
  const [displayState, setDisplayState] = useState({
    displayFilter: true,
    displayDetail: false,
    displayHome: true,
  });

  const { countries, fetchError, isLoading } = useCountries();

  const sortedFilterRegions = countries
    .map((country) => country.region)
    .sort()
    .filter((region, index, array) => {
      return array.indexOf(region) === index;
    });

  const filteredRegion = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries.sort();

  const filteredCountry = selectedCountry
    ? countries.filter((country) =>
        country.name.official.toLowerCase().match(selectedCountry.toLowerCase())
      )
    : countries;

  const filteredDetailPageCountry = detailCountry
    ? countries.filter((country) =>
        country.name.common.toLowerCase().match(detailCountry.toLowerCase())
      )
    : countries;

  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem boxShadow={"lg"} area={"nav"}>
          <Header />
        </GridItem>

        <GridItem area={"main"} p={[5, 5, 10]}>
          {displayState.displayFilter && (
            <Flex
              direction={["column", "column", "row"]}
              justify={"space-between"}
              mb={10}
            >
              <SearchFilter
                onSearchInput={(country) => setSelectedCountry(country)}
              />
              <CountryFilter
                onSelectRegion={(region) => setSelectedRegion(region)}
                regions={sortedFilterRegions}
              />
            </Flex>
          )}
          {displayState.displayDetail &&
            filteredDetailPageCountry.map((country) => (
              <DetailPage
                key={country.name.common}
                alt={country.flags.alt}
                borders={country.borders}
                country={country.name.common}
                capital={country.capital}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                subRegion={country.subregion}
                tld={country.tld}
                currencies={country.currencies}
                languages={Object.values(country.languages)}
                nativeName={country.name.official}
                onBackButtonClick={() => {
                  setDetailCountry("");
                  setSelectedCountry("");
                  setDisplayState({
                    ...displayState,
                    displayDetail: false,
                    displayFilter: true,
                    displayHome: true,
                  });
                }}
              />
            ))}

          {displayState.displayHome && (
            <SimpleGrid minChildWidth={250} spacing={[5, 10, 20]}>
              {fetchError && <p>{fetchError}</p>}
              {isLoading && <Spinner />}

              {(selectedCountry ? filteredCountry : filteredRegion).map(
                (country) => (
                  <CountryCard
                    key={country.name.official}
                    alt={country.flags.alt}
                    country={country.name.official}
                    capital={country.capital}
                    flag={country.flags.svg}
                    population={country.population}
                    region={country.region}
                    onCardClick={() => {
                      setDetailCountry(country.name.common);
                      setDisplayState({
                        ...displayState,
                        displayDetail: true,
                        displayFilter: false,
                        displayHome: false,
                      });
                    }}
                  />
                )
              )}
            </SimpleGrid>
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
