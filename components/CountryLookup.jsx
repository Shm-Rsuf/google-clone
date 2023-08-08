"use client";

import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("Bangladesh");

  /* fetching data */
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
