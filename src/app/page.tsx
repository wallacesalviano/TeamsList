"use client"

import { ListInput } from "./data/ListInput";
import { useState } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  
  const inputToLowerCase: any = inputValue.toLocaleLowerCase();
  const teams = ListInput.filter(team => team.name.toLowerCase().includes(inputToLowerCase));
 

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Lista de Times</h1>
      
      <input
        type="search"
        placeholder="Search"
        value={inputValue}
        className="p-4 text-black rounded w-[300px]"
        onChange={e => setInputValue(e.target.value)}
      />

      
      {teams.map(team => (
        <ul className="m-2 bg-gray-600 p-3 w-[300px] rounded-md mt-5 flex justify-center items-center">
          <li key={team.id} className="">
            <p>{team.name}</p>
            <p>{team.city}</p>
            <p>{team.div}</p>
          </li>
        </ul>
      ))}

    </div>
  );
}

export default Page