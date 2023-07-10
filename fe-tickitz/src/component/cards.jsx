import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ name, image, genre, id }) {
  const navigates = useNavigate();

  return (
    <>
      {/* Desktop Card Start */}
      <div className="hidden lg:flex lg:bg-slate-100 lg:rounded-lg lg:items-center lg:flex-col lg:w-72">
        <figure className=" flex p-5 w-72">
          <img className="h-80 w-72 rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-lg ">{name}</h2>
          <p className="text-gray-400 text-sm line-clamp-1">{genre}</p>
          <button
            className="border border-primary rounded my-6 px-6 cursor-pointer font-normal text-md text-primary"
            onClick={() => navigates(`/detail/${id}`)}
          >
            Detail
          </button>
        </div>
      </div>

      {/* Desktop Card End */}
      {/* Mobile Card Start */}
      <div className="flex bg-slate-100 rounded-lg items-center flex-col lg:hidden">
        <figure className=" flex p-3 w-36">
          <img className="h-40 w-36 rounded-md" src={image} alt="Shoes" />
        </figure>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-md ">{name}</h2>
          <p className="text-gray-400 text-xs line-clamp-1">{genre}</p>
          <button
            className="border border-primary rounded my-6 px-6 cursor-pointer font-normal text-sm text-primary"
            onClick={() => navigates(`/detail/${id}`)}
          >
            Detail
          </button>
        </div>
      </div>
      {/* Mobile Card End */}
    </>
  );
}

export default Cards;
