import React, { useEffect, useState } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Cards from "../../component/cards";
import Cards2 from "../../component/cards2";
import { Link } from "react-router-dom";
// import axios from "../../axiosConfig";
// require("dotenv").config();

function Home() {
  const [movies, setMovies] = useState([]);
  const [showFullMovies, setShowFullMovies] = useState(false);

  const toggleMovies = () => {
    setShowFullMovies(!showFullMovies);
  };

  const getMovies = async () => {
    try {
      const { data } = await axios.get("/movie");
      setMovies(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <div>
        {/* Hero Start */}
        <div className="w-full flex flex-col-reverse items-center py-10 lg:flex-row lg:justify-between lg:px-20">
          <div className="flex-initial sm:text-left text-center">
            <h3 className="lg:text-1xl font-normal text-gray-400 md:mb-4 ">
              Nearest Cinema, Newest Movie
            </h3>
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-primary">
              Find out now!
            </h1>
          </div>
          <div className="flex-initial">
            <img
              className="lg:h-92 md:h-96 h-80 md:w-auto"
              src="https://res.cloudinary.com/dpn40glt3/image/upload/v1688114993/app_tickitz/img/img-1_xj2hkd.png"
              alt="hero"
            />
          </div>
        </div>
        {/* Hero End */}
        {/* Section Now Showing Start */}
        <section className="bg-slate-200 w-full">
          <div className="w-screen py-10">
            <div className="flex px-11 lg:px-20 justify-between pb-5">
              <h6 className="text-sm text-[20px] text-primary font-bold ">
                Now Showing
              </h6>
              <Link
                to="/"
                className="text-[10px] text-primary md:text-base font-semibold"
              >
                view all
              </Link>
            </div>
            <div className="flex px-11 py-5 gap-5 overflow-x-scroll">
              {movies ? (
                movies.map((v) => {
                  return (
                    <Cards2
                      id={v.movie_id}
                      image={v.movie_banner}
                      name={v.movie_title}
                      genre={v.genre}
                    />
                  );
                })
              ) : (
                <h1>Data not found</h1>
              )}
            </div>
          </div>
        </section>
        {/* Section Now Showing End */}
        {/* Section Upcoming Start */}
        <section className="w-full py-10">
          <div className="flex w-screen px-11 lg:px-20 pb-5 justify-between">
            <h6 className="text-sm text-[20px] font-bold ">Upcoming Movies</h6>
            <Link
              to="#"
              className="text-[10px] text-primary md:text-base font-semibold"
            >
              view all
            </Link>
          </div>
          <div className="flex py-3 px-11 gap-3 justify-center overflow-x-scroll">
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link className="text-[10px] md:font-sm font-semibold">
                September
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                oktober
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                November
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                Desember
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                January
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                February
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                March
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                April
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                May
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                June
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                July
              </Link>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <Link to="#" className="text-[10px] md:font-sm font-semibold">
                August
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 px-5 py-5 md:grid-cols-4 lg:flex lg:flex-wrap lg:pl-16">
            {showFullMovies
              ? movies.map((v) => (
                  <Cards
                    id={v.movie_id}
                    image={v.movie_banner}
                    name={v.movie_title}
                    genre={v.genre}
                  />
                ))
              : movies
                  .slice(0, 6)
                  .map((v) => (
                    <Cards
                      id={v.movie_id}
                      image={v.movie_banner}
                      name={v.movie_title}
                      genre={v.genre}
                    />
                  ))}
          </div>
          <button
            onClick={toggleMovies}
            className="text-[10px] text-primary md:text-base font-semibold mx-auto block mt-5"
          >
            {showFullMovies ? "View Less" : "View More"}
          </button>
        </section>
        {/* Section Upcoming End */}
        {/*  */}
        <section className="flex justify-center py-10">
          <div className="flex flex-col items-center bg-white shadow-lg px-20 w-3/4 py-10">
            <div className="flex justify-center flex-col mb-10">
              <h5 className="text-xs text-center md:text-sm">
                Be the vanguard of the
              </h5>
              <h2 className="text-3xl font-bold text-primary">Moviegoers</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                id="myInput"
                placeholder="Type your email"
                className="border-2 p-3"
              />
              <button className="bg-primary text-white p-3 rounded-lg">
                Join now
              </button>
            </div>
            <div className="flex text-center text-gray-400 text-xs mt-10">
              By joining you as a Tickitz member, we will always send you the
              latest updates via email .
            </div>
          </div>
        </section>
        {/*  */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
