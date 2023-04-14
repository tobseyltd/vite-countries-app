import { Select } from "@chakra-ui/react";

interface FilterProps {
  onSelectRegion: (region: string) => void;
  regions: String[];
}

const CountryFilter = ({ onSelectRegion, regions }: FilterProps) => {
  return (
    <>
      <Select
        placeholder="Filter by Region"
        maxW={250}
        onChange={(event) => onSelectRegion(event.target.value)}
      >
        {regions.map((region) => (
          <option key={String(region)}>{region}</option>
        ))}
      </Select>
    </>
  );
};

export default CountryFilter;
