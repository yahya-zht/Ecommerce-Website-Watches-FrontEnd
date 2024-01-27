import React from "react";
import { Link } from "react-router-dom";

export default function NavSectionAdmin(props) {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="w-1/5 flex justify-center">
        <Link
          to={props.href}
          className=" py-2 bg-amber-600 w-full text-center  text-white rounded-xl font-semibold hover:bg-green-600"
        >
          {props.Link}
        </Link>
      </div>
    </div>
  );
}
