import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/gau0292-Designer")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers : {data.followers}
      </div>
      <div className="flex d-inline-block">
        <img src={data.avatar_url} alt="Git Picture" />
      </div>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/gau0292-Designer");
  return responce.json();
};
