import React, { useEffect, useState } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Cards from "../../component/cards";
import Cards2 from "../../component/cards2";
import { Link } from "react-router-dom";
// import axios from "../../axiosConfig";

function list_movie() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const fetchMovies = async (page) => {
    try {
      const response = await axios.get(
        `/movie?page=${page}&limit=10&genre=${filter}&search=${searchText}`
      );
      const { data, meta } = response.data;
      setMovies(data);
      setTotalPages(meta.total);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        `/movie?limit=10&page=1&genre=${filter}`
      );
      setMovies(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenres = async () => {
    try {
      const { data } = await axios.get("/genre");
      setGenres(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getMovies();
  }, [filter, searchText]);

  const changeFilter = (v) => {
    if (v.target.value !== "All") {
      setFilter(v.target.value);
    } else {
      setFilter("");
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="w-full py-3 px-11 flex items-center justify-between">
          <div>
            <h2 className="font-semibold">List Movie</h2>
          </div>
          <div className="flex gap-2">
            <div>
              <select
                onChange={changeFilter}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 placeholder:text-xs"
              >
                <option selected>All</option>
                {genres.map((v) => {
                  return <option>{v.genre_title}</option>;
                })}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 placeholder:text-xs"
                placeholder="Search Movie Name..."
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex py-3 px-11 gap-3 justify-center overflow-x-hidden">
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">September</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">oktober</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">November</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">Desember</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">January</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">February</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">March</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">April</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">May</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">June</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">July</a>
            </div>
            <div
              id="month-btn"
              className="border text-primary w-[110px] rounded-sm border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
            >
              <a className="text-[10px] md:font-sm font-semibold">August</a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid">
            <div className="grid grid-cols-2 px-11 py-5 gap-5 justify-center md:grid-cols-3 lg:grid-cols-5">
              {movies ? (
                movies.map((v) => {
                  return (
                    <Cards
                      id={v.movie_id}
                      image={v.movie_banner}
                      name={v.movie_title}
                      genre={v.genre}
                    />
                  );
                })
              ) : (
                <h1 className="text-center">Data not found</h1>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex py-3 px-11 gap-3 justify-center">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className="border rounded-md text-primary px-5 py-3 text-center rounded-lg border-primary text-center cursor-pointer hover:bg-primary hover:text-white active:bg-primary active:text-white"
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default list_movie;
