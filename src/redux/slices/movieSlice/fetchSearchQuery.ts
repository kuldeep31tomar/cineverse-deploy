const axios = require("axios");

export const fetchSearchQuery = async (
  query: string
): Promise<any> => {

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US`,
    headers: { 
      'Authorization': `Bearer ${apiKey}`, 
      'accept': 'application/json'
    }
  };
  const result = await axios.request(config);
  const response = JSON.stringify(result?.data?.results)
  return response
};