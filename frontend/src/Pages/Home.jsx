import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import Header from "../Components/Header";
import { companyInfo } from "../assets/assets";
import DisplayJob from "../Components/DisplayJob";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [filter, setFilter] = useState("all");
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className=" overflow-y-scroll w-full">
      <Header />
      <div className="flex gap-5 justify-center py-5 overflow-x-auto whitespace-nowrap max-md:gap-3 max-sm:gap-2 max-sm:justify-start">
        <p
          onClick={() => {
            setFilter((prev) => (prev === "it" ? "all" : "it"));
            navigate("/explore/it");
          }}
          className="bg-white px-5 py-2 shadow-xl border-0 rounded-lg cursor-pointer hover:bg-amber-600 hover:text-white"
        >
          IT
        </p>

        <p
          onClick={() => {
            setFilter((prev) => (prev === "finance" ? "all" : "finance"));
            navigate("/explore/finance");
          }}
          className="bg-white px-5 py-2 shadow-xl border-0 rounded-lg cursor-pointer hover:bg-amber-600 hover:text-white"
        >
          FINANCE
        </p>

        <p
          onClick={() => {
            setFilter((prev) => (prev === "law" ? "all" : "law"));
            navigate("/explore/law");
          }}
          className="bg-white px-5 py-2 shadow-xl border-0 rounded-lg cursor-pointer hover:bg-amber-600 hover:text-white"
        >
          LAW
        </p>

        <p
          onClick={() => {
            setFilter((prev) => (prev === "civil" ? "all" : "civil"));
            navigate("/explore/civil");
          }}
          className="bg-white px-5 py-2 shadow-xl border-0 rounded-lg cursor-pointer hover:bg-amber-600 hover:text-white"
        >
          CIVIL
        </p>

        <p
          onClick={() => {
            setFilter((prev) => (prev === "mechanical" ? "all" : "mechanical"));
            navigate("/explore/mechanical");
          }}
          className="bg-white px-5 py-2 shadow-xl border-0 rounded-lg cursor-pointer hover:bg-amber-600 hover:text-white"
        >
          MECHANICAL
        </p>

        <p
          onClick={() => {
            setFilter((prev) => (prev === "electrical" ? "all" : "electrical"));
            navigate("/explore/electrical");
          }}
          className="bg-white px-5 py-2 shadow-xl border-0 rounded-lg cursor-pointer hover:bg-amber-600 hover:text-white"
        >
          ELECTRICAL
        </p>
      </div>
      Nothing extra. Just exactly what you asked.
      <div>
        {token ? (
          <DisplayJob />
        ) : (
          <h1 className="text-3xl font-bold text-center py-10">
            Please Login First😥
          </h1>
        )}
      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default Home;
