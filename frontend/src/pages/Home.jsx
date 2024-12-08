import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center  bg-[url(https://images.unsplash.com/photo-1618066433976-58f19b08b01d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  w-full flex justify-between flex-col bg-red-400">
        <h1 className="w-14 text-4xl font-bold ml-8">Cabify</h1>
        <img src="" alt="" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-2xl font-bold">Get started with Cabify</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 "
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
