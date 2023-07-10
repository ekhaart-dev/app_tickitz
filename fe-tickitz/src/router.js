import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/home";
import Login from "./page/login";
import List_movie from "./page/list_movie";
import Manage_Movie from "./page/admin/manage_movie";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list_movie" element={<List_movie />} />
        <Route path="/manage_movie" element={<Manage_Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
