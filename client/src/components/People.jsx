import React, { useContext } from "react";
// assets
import UserImg from "../assets/user.jpg";
import { UserContext } from "../userContext";
// userContext

// import { UserContext } from "../userContext";

const People = () => {

  const {people} = useContext(UserContext)
  return (
    <div className="w-full">
      <div className="w-100 mx-auto my-10">
        <h1 className="my-2">Recommendations</h1>
        {people.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <img
              src={item.img || "/placeholder.svg"}
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-neutral-400 text-sm">{item.userName}</p>
            </div>
            <button className="cursor-pointer ml-auto text-sm bg-blue-600 py-2 px-4 rounded-sm hover:bg-blue-500">
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
