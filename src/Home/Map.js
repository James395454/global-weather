import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  text,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const onLocationClicked = (geography) => {
  console.log("geography", geography);
};

export default function MapChart() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <>
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  onLocationClicked(geo);
                }}
              />
              <Marker coordinates={[30.044444444, 31.235833333]} fill="#777">
                <text textAnchor="middle" fill="#F53">
                  country
                </text>
              </Marker>
            </>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
