import { Box } from "@mui/material";
import CitySearch from "./CitySearch/CitySearch";
import Map from "./Map";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <CitySearch />
      </Box>
      <Map />
    </>
  );
};

export default Home;
