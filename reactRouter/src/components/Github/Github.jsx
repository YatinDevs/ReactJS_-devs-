import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import GitCss from "./GitCss.css";
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
    <div className="container  mx-auto w-full max-w-4xl">
      <div className="image ">
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
      <div className="data">
        <h1 id="fullname">Name : {data.name}</h1>
        <h4 id="bio">Bio : {data.bio}</h4>
        <p className="">Github Followers: {data.followers}</p>
        <div id="loc">
          <span id="location"> Location : {data.location} </span>
        </div>
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/YatinDevs");
  return response.json();
};

export default Github;
