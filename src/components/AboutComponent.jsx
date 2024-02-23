import React from "react";
// import { Link } from "react-router-dom";

export default function AboutComponent() {
  function about() {
    document.getElementById("about").style.display = "block";
    document.getElementById("about-tab").style.color = "goldenrod";
    document.getElementById("services-tab").style.color = "black";
    document.getElementById("statistics-tab").style.color = "black";
    document.getElementById("statistics").style.display = "none";
    document.getElementById("services").style.display = "none";
  }
  function Services() {
    document.getElementById("services").style.display = "block";
    document.getElementById("services-tab").style.color = "goldenrod";
    document.getElementById("statistics-tab").style.color = "black";
    document.getElementById("about-tab").style.color = "black";
    document.getElementById("about").style.display = "none";
    document.getElementById("statistics").style.display = "none";
  }
  function Facts() {
    document.getElementById("statistics").style.display = "block";
    document.getElementById("statistics-tab").style.color = "goldenrod";
    document.getElementById("services-tab").style.color = "black";
    document.getElementById("about-tab").style.color = "black";
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="w-full  m-2">
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
            <li class="me-2">
              <button
                onClick={() => about()}
                id="about-tab"
                type="button"
                class="inline-block p-4 rounded-ss-lg text-yellow-400 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
              >
                About
              </button>
            </li>
            <li class="me-2">
              <button
                onClick={() => Services()}
                id="services-tab"
                type="button"
                class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Services
              </button>
            </li>
            <li class="me-2">
              <button
                onClick={() => Facts()}
                id="statistics-tab"
                type="button"
                class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              >
                Facts
              </button>
            </li>
          </ul>
          <div id="defaultTabContent">
            <div
              class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="about"
            >
              <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Powering innovation & trust at 200,000+ companies worldwide
              </h2>
              <p class="mb-3 text-gray-500 dark:text-gray-400">
                Empower Developers, IT Ops, and business teams to collaborate at
                high velocity. Respond to changes and deliver great customer and
                employee service experiences fast.
              </p>
            </div>
            <div
              class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="services"
            >
              <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>

              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">Templates for everyone</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">Development workflow</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">
                    Limitless business automation
                  </span>
                </li>
              </ul>
            </div>
            <div
              class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="statistics"
            >
              <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col">
                  <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                  <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col">
                  <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                  <dd class="text-gray-500 dark:text-gray-400">
                    Public repositories
                  </dd>
                </div>
                <div class="flex flex-col">
                  <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                  <dd class="text-gray-500 dark:text-gray-400">
                    Open source projects
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
