import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getCities } from "../../services/cities";

const CitySearch = () => {
  const [cities, setCities] = useState({});

  const onSearchChange = async (e) => {
    const namePrefix = e.target.value;
    if (namePrefix.length < 3) return;
    const cities = await getCities(namePrefix);
    console.log("gottt", cities, namePrefix);
    setCities(cities);
  };

  console.log("citiesss", cities);

  const options = cities.data
    ? cities.data.map(({ city, country }) => `${city}, ${country}`)
    : [];

  return (
    <Autocomplete
      id="City-Search"
      options={options}
      sx={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for city"
          onChange={onSearchChange}
        />
      )}
    />
  );
};

export default CitySearch;
