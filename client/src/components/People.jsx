import React from "react";
// assets
import UserImg from "../assets/user.jpg";
const People = () => {
  const people = [
    {
      id: 1,
      img: UserImg,
      name: "Nabijonov_00928",
      userName: "Nabijonov_5355",
      btn: "Subscribe",
    },
    {
      id: 2,
      img: UserImg,
      name: "Nabijonov_00928",
      userName: "Nabijonov_5355",
      btn: "Subscribe",
    },
  ];
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
        <div className="cursor-pointer flex items-center gap-4 p-3 hover:bg-neutral-800 rounded-lg transition-colors">
          <img
            src={UserImg || "/placeholder.svg"}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Nabijonov_00928</h3>
            <p className="text-neutral-400 text-sm">Nabijonov_5355</p>
          </div>
          <button className="cursor-pointer ml-auto text-sm  bg-blue-600 py-2 px-4 rounded-sm hover:bg-blue-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default People;
