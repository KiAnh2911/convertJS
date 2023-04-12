import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center h-[100vh] gap-5">
      <h2 className="text-[70px] font-bold">Not Found</h2>
      <Link
        to={"/"}
        className="px-8 py-2 text-lg font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-800"
      >
        Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
