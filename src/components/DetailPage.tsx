import { ArrowBackIcon } from "@chakra-ui/icons";
import { CardProps } from "./CountryCard";

import {
  Box,
  Button,
  SimpleGrid,
  Image,
  Heading,
  Stack,
  Text,
  HStack,
  Flex,
} from "@chakra-ui/react";

interface DetailProps extends CardProps {
  subRegion: string | undefined;
  tld: string[] | undefined;
  currencies: string[];
  languages: string[];
  nativeName: string;
  onBackButtonClick: () => void;
  borders?: string[];
}

const DetailPage = ({
  alt,
  borders,
  country,
  capital,
  flag,
  population,
  region,
  subRegion,
  tld,
  currencies,
  languages,
  nativeName,
  onBackButtonClick,
}: CardProps & DetailProps) => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={[5, 5, 20]}>
        <Box>
          <Button
            leftIcon={<ArrowBackIcon />}
            bg={"transparent"}
            boxShadow={"lg"}
            px={10}
            py={5}
            onClick={onBackButtonClick}
          >
            Back
          </Button>
        </Box>
        <Box></Box>

        <Flex>
          <Image src={flag} alt={alt} />
        </Flex>

        <Flex
          direction={"column"}
          justifyContent={"space-between"}
          py={[2, 2, 10]}
        >
          <Heading as={"h2"} fontSize={"2xl"} mb={5}>
            {country}
          </Heading>

          <SimpleGrid columns={[1, 2, 2]}>
            <Stack spacing={[3, 1, 1]} mb={[3, 0, 0]}>
              <Text>
                <b>Native Name:</b> {nativeName}
              </Text>

              <Text>
                <b>Population:</b> {population.toLocaleString("en-US")}
              </Text>

              <Text>
                <b>Region:</b> {region}
              </Text>

              <Text>
                <b>Sub Region:</b> {subRegion}
              </Text>

              <Text>
                <b>Capital:</b> {capital}
              </Text>
            </Stack>

            <Stack spacing={[3, 1, 1]}>
              <Text>
                <b>Top Level Domain:</b> {tld?.map((t) => t)}
              </Text>

              <Text>
                <b>Currencies:</b>{" "}
                {Object.values(currencies)
                  .map((currency) => Object.values(currency))
                  .join(", ")
                  .slice(0, -2)}
              </Text>

              <Text>
                <b>Languages:</b>{" "}
                {languages.map((language) => language).join(", ")}
              </Text>
            </Stack>
          </SimpleGrid>

          <HStack mt={5} wrap={"wrap"}>
            <Text my={5} mr={2}>
              <b>Border-Countries:</b>
            </Text>

            {!borders ? (
              <Text>None</Text>
            ) : (
              borders?.map((border) => (
                <Text
                  fontSize={"sm"}
                  borderRadius={"md"}
                  key={border}
                  bg={"transparent"}
                  boxShadow={"lg"}
                  px={7}
                  py={2}
                  mx={6}
                >
                  {border}
                </Text>
              ))
            )}
          </HStack>
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default DetailPage;
