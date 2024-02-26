import React from "react";

export const CardsBlog = (props) => {
  return (
    <div className="flex flex-col p-2 bg-gray-50 border-4 border-green-600 m-4 rounded-xl shadow-xl">
      <div className="h-52 flex justify-center">
        <img
          src={`http://127.0.0.1:8000/Storage/Images/product/${props.image}`}
          className="h-full "
          alt={props.alt}
        />
      </div>
      <div className="mx-4 m-4">
        <p className="font-bold text-2xl mb-2">{props.title}</p>
        <p className=" text-xl">{props.text}</p>
      </div>
    </div>
  );
};
