import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

interface SearchProps {
  onSearchInput: (country: string) => void;
}

const SearchFilter = ({ onSearchInput }: SearchProps) => {
  return (
    <InputGroup maxW={["100%", "100%", 450]} borderRadius={"lg"} mb={[5, 5, 0]}>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search for a country..."
        onChange={(event) => onSearchInput(event.target.value)}
      ></Input>
    </InputGroup>
  );
};

export default SearchFilter;
