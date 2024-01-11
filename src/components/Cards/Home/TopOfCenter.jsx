import {
  faHeadset,
  faMoneyCheckDollar,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CardsShipping } from "./Cards/CardsShipping";

export default function TopOfCenter() {
  return (
    <>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex">
            <CardsShipping
              icon={faTruckFast}
              title1="Free shipping"
              title2="Free shipping on order"
            />
            <CardsShipping
              icon={faHeadset}
              title1="Support 24/7"
              title2="Contact us 24hours"
            />
            <CardsShipping
              icon={faMoneyCheckDollar}
              title1="Payment secure"
              title2="Free shopping on order"
            />
            {/* <div className="flex w-full justify-center items-center">
              <div className="h-10">
                <FontAwesomeIcon
                  className="h-full mr-4 text-amber-400"
                  icon={faTruckFast}
                />
              </div>
              <div className="">
                <p className="text-amber-400 font-semibold text-xl">
                  Free shipping
                </p>
                <p>Free shipping on order</p>
              </div>
            </div>
            <div className="flex w-full justify-center items-center">
              <div className=" h-10">
                <FontAwesomeIcon
                  className=" h-full mr-4 text-amber-400"
                  icon={faHeadset}
                />
              </div>
              <div className="">
                <p className="text-amber-400 text-xl font-semibold ">
                  Support 24/7
                </p>
                <p>Contact us 24hours</p>
              </div>
            </div>
            <div className="flex w-full justify-center items-center">
              <div className="h-10">
                <FontAwesomeIcon
                  className="h-full mr-4 text-amber-400"
                  icon={faMoneyCheckDollar}
                />
              </div>
              <div className="">
                <p className="text-amber-400 text-xl font-semibold ">
                  Payment secure
                </p>
                <p>Free shopping on order</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
