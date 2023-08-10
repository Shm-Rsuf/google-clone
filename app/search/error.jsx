"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <h2 className="text-3xl text-rose-400 mb-5">Something went wrong!</h2>
      <button className="text-blue-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;
