const axios = require("axios");

export const fetchUpcomingMovies = async (
  page: number
): Promise<string> => {

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
    headers: { 
      'Authorization': `Bearer ${apiKey}`, 
      'accept': 'application/json'
    }
  };
  const result = await axios.request(config);
  const response = JSON.stringify(result?.data?.results)
  return response
};