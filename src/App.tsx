import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";

const App = () => {
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem boxShadow={"lg"} area={"nav"}>
          <Header />
        </GridItem>
        <GridItem area={"main"}>
          <CountryCard
            country={"Germany"}
            capital={"Berlin"}
            flag={"https://flagcdn.com/de.svg"}
            population={200_000}
            region={"Europe"}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
