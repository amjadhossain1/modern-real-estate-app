import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "930c6a78c9msh065ee0494306e72p171001jsnc193e6f02675",
    },
  });
  return data;
};
