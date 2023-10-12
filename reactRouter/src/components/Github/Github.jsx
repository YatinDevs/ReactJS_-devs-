import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/YatinDevs")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <p className=" text-right">Name : {data.name}</p>
        <p className="text-right">Github Followers: {data.followers}</p>
        <img
          className="rounded-xl m-4"
          src={data.avatar_url}
          alt="Git picture"
          width={300}
        />
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/YatinDevs");
  return response.json();
};

export default Github;
