import React from "react";
import { Link } from "react-router-dom";

export default function ShoppingCartCompoents() {
  return (
    <section class=" dark:bg-gray-900 p-3 sm:p-5">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-amber-400 uppercase bg-green-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Brand
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" class="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-4 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td class="px-4 py-3">PC</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">300</td>
                  <td class="px-4 py-3">$2999</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="apple-imac-27-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-27-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-27-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iMac 20&#34;
                  </th>
                  <td class="px-4 py-3">PC</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">200</td>
                  <td class="px-4 py-3">$1499</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="apple-imac-20-dropdown-button"
                      data-dropdown-toggle="apple-imac-20-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-20-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-20-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iPhone 14
                  </th>
                  <td class="px-4 py-3">Phone</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">1237</td>
                  <td class="px-4 py-3">$999</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="apple-iphone-14-dropdown-button"
                      data-dropdown-toggle="apple-iphone-14-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-iphone-14-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-iphone-14-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple iPad Air
                  </th>
                  <td class="px-4 py-3">Tablet</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">4578</td>
                  <td class="px-4 py-3">$1199</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="apple-ipad-air-dropdown-button"
                      data-dropdown-toggle="apple-ipad-air-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-ipad-air-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-ipad-air-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Xbox Series S
                  </th>
                  <td class="px-4 py-3">Gaming/Console</td>
                  <td class="px-4 py-3">Microsoft</td>
                  <td class="px-4 py-3">56</td>
                  <td class="px-4 py-3">$299</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="xbox-series-s-dropdown-button"
                      data-dropdown-toggle="xbox-series-s-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-s-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="xbox-series-s-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    PlayStation 5
                  </th>
                  <td class="px-4 py-3">Gaming/Console</td>
                  <td class="px-4 py-3">Sony</td>
                  <td class="px-4 py-3">78</td>
                  <td class="px-4 py-3">$799</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="playstation-5-dropdown-button"
                      data-dropdown-toggle="playstation-5-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="playstation-5-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="playstation-5-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Xbox Series X
                  </th>
                  <td class="px-4 py-3">Gaming/Console</td>
                  <td class="px-4 py-3">Microsoft</td>
                  <td class="px-4 py-3">200</td>
                  <td class="px-4 py-3">$699</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="xbox-series-x-dropdown-button"
                      data-dropdown-toggle="xbox-series-x-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-x-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="xbox-series-x-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple Watch SE
                  </th>
                  <td class="px-4 py-3">Watch</td>
                  <td class="px-4 py-3">Apple</td>
                  <td class="px-4 py-3">657</td>
                  <td class="px-4 py-3">$399</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="apple-watch-se-dropdown-button"
                      data-dropdown-toggle="apple-watch-se-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-watch-se-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-watch-se-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    NIKON D850
                  </th>
                  <td class="px-4 py-3">Photo</td>
                  <td class="px-4 py-3">Nikon</td>
                  <td class="px-4 py-3">465</td>
                  <td class="px-4 py-3">$599</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="nikon-d850-dropdown-button"
                      data-dropdown-toggle="nikon-d850-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="nikon-d850-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="nikon-d850-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Monitor BenQ EX2710Q
                  </th>
                  <td class="px-4 py-3">TV/Monitor</td>
                  <td class="px-4 py-3">BenQ</td>
                  <td class="px-4 py-3">354</td>
                  <td class="px-4 py-3">$499</td>
                  <td class="px-4 py-3 flex items-center justify-end">
                    <button
                      id="benq-ex2710q-dropdown-button"
                      data-dropdown-toggle="benq-ex2710q-dropdown"
                      class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="benq-ex2710q-dropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="benq-ex2710q-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                      <div class="py-1">
                        <Link
                          to="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span class="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              of
              <span class="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
              <li>
                <Link
                  to="#"
                  class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  aria-current="page"
                  class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-end">
            <Link
              to="#"
              className="px-10 py-3 bg-green-600 hover:bg-amber-600 text-white font-bold m-2 rounded-xl "
            >
              Add to Card
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
