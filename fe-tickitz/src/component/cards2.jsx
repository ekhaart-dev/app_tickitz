import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cards2({ name, image, genre, id }) {
  const navigates = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {/* Desktop Card Start */}
      <div
        className="hidden lg:flex lg:bg-white lg:rounded-lg lg:items-center lg:flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <figure className=" flex p-5 w-72">
          <img className="h-80 w-72 rounded-lg" src={image} alt="Shoes" />
        </figure>
        {isHovered ? (
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
        ) : null}
      </div>

      {/* Desktop Card End */}
      {/* Mobile Card Start */}
      <div
        className="flex bg-white rounded-lg items-center flex-col lg:hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <figure className=" flex p-3 w-36">
          <img className="h-40 w-36 rounded-md" src={image} alt="Shoes" />
        </figure>
        {isHovered ? (
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
        ) : null}
      </div>
      {/* Mobile Card End */}
    </>
  );
}

export default Cards2;
