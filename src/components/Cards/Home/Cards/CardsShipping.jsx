// import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const CardsShipping = (props) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="h-10">
        <FontAwesomeIcon
          className="h-full mr-4 text-amber-400"
          icon={props.icon}
        />
      </div>
      <div className="">
        <p className="text-amber-400 font-semibold text-xl">{props.title1}</p>
        <p>{props.title2}</p>
      </div>
    </div>
  );
};
