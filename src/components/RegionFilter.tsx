import { Select } from "@chakra-ui/react";

interface FilterProps {
  onSelectRegion: (region: string) => void;
  regions: String[];
}

const RegionFilter = ({ onSelectRegion, regions }: FilterProps) => {
  return (
    <>
      <Select
        placeholder="Filter by Region"
        maxW={["100%", "100%", 250]}
        onChange={(event) => onSelectRegion(event.target.value)}
      >
        {regions.map((region) => (
          <option value={String(region)} key={String(region)}>
            {region}
          </option>
        ))}
      </Select>
    </>
  );
};

export default RegionFilter;
