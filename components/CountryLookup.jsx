"use client";

import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("India");

  /* fetching data */
  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      );
      const data = await res.json();
      const country = await data.country;
      setCountry(country);
    };
    fetchCountryData();
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
