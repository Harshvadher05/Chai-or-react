import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/8b544d65cb7cfff762e11912/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates));
    // console.log(data);
  }, [currency]);

  return data
}

export default useCurrencyInfo
