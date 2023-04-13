import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem boxShadow={"lg"} area={"nav"}>
          <Header />
        </GridItem>
        <GridItem area={"main"}>Main</GridItem>
      </Grid>
    </>
  );
};

export default App;
