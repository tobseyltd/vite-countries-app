import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface fetchApiProps {
  name: {
    official: string;
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

  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem boxShadow={"lg"} area={"nav"}>
          <Header />
        </GridItem>
        <GridItem area={"main"} p={10}>
          <SimpleGrid justifyItems={"center"} columns={4} spacing={10}>
            {fetchError && <p>{fetchError}</p>}
            {countries.map((country, index) => (
              <CountryCard
                key={country.name.official}
                alt={country.flags.alt}
                country={country.name.official}
                capital={country.capital}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
              />
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
