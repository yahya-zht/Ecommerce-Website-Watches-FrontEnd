import React from "react";
import { Link } from "react-router-dom";

export default function FooterFront() {
  const Products = "/Products";
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" class="hover:underline">
              Wateches
            </Link>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="/" class="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to={Products} class="hover:underline me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link to="/About" class="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
