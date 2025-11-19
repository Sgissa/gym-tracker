export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ddb42cce9dmsh8e4eb0eb143cf36p1eedb4jsnfee8ffdd6978",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

console.log("API Key:", process.env.NEXT_PUBLIC_RAPID_API_KEY);
