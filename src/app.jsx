import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Counter from "./components/counter";

function App() {
  return (
    <>
      <header
        className="d-flex justify-content-around align-items-center border border-3 border-primary rounded-pill border-top-0 border-end-0 border-start-0"
        style={{ height: "100px",marginBottom:'50px'}}
      >
        <div className="d-flex align-items-center">
          <Link
            to={"/"}
            className="link-offset-2 link-underline link-underline-opacity-0 fs-2 text-start"
          >
            <img
              src="https://filearchive.cnews.ru/img/book/2022/05/24/artificial_general_intelligence.png"
              alt="Логотип искусственного общего интеллекта"
              style={{ maxWidth: "100px" }}
            />
            It React Lab
          </Link>
        </div>
        <Link to={"/counter"} className="btn btn-primary">
          Корзина
        </Link>
      </header>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
