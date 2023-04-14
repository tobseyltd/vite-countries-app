import { Flex, Box, Text, Stack, Switch, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex justify={"space-between"} align={"center"} px={10} py={7}>
        <Box>
          <Text as="b" fontSize={["sm", "md", "2xl"]}>
            Where in the World?
          </Text>
        </Box>
        <Stack align={"center"} direction={"row"}>
          <Switch
            colorScheme="green"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
            size={"md"}
          />
          <Text as="b" fontSize={["xs", "sm"]}>
            Dark Mode
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default Header;
