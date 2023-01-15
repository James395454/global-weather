import axios from "axios";

const getCities = async (namePrefix) => {
  const controller = new AbortController();

  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${namePrefix}`,
    headers: {
      "X-RapidAPI-Key": "114d04976bmsh8cea443c84bcf3cp1f9324jsn8d1474e728d3",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
    signal: controller.signal,
  };

  try {
    console.log("requesttt");
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }

  controller.abort();
};

export { getCities };
