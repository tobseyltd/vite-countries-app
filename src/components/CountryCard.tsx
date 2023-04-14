import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface CardProps {
  alt: string;
  country: string;
  capital: string;
  flag: string;
  population: number;
  region: string;
}

const CountryCard = ({
  alt,
  country,
  capital,
  flag,
  population,
  region,
}: CardProps) => {
  return (
    <>
      <Card maxW={"s"} borderRadius={"lg"} overflow={"hidden"} boxShadow={"md"}>
        <CardHeader p={0}>
          <Image src={flag} alt={alt} />
        </CardHeader>

        <CardBody>
          <Box justifyContent={"space-between"}>
            <Stack spacing={1} p={5}>
              <Heading as={"h2"} fontSize={"2xl"} mb={5}>
                {country}
              </Heading>

              <Text>
                <b>Population:</b> {population.toLocaleString("en-US")}
              </Text>

              <Text>
                <b>Region:</b> {region}
              </Text>

              <Text>
                <b>Capital:</b> {capital}
              </Text>
            </Stack>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default CountryCard;
