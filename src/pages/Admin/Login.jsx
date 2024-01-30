import React, { useState } from "react";
import Logo from "../../assets/image/logo_watche.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("pleae provide a valid input");
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   const navigate = useNavigate();
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const handleLogin = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/api/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           // You may need to include additional headers, such as authorization headers
  //         },
  //         body: JSON.stringify({ email, password }),
  //       });
  //       if (!response.ok) {
  //         console.log("nonono");
  //         navigate("/Admin");
  //         throw new Error("Login failed");
  //       } else {
  //         console.log("success");
  //       }

  //       // Handle successful login, e.g., update state or redirect to another page
  //     } catch (error) {
  //       console.error("Error during login:", error.message);
  //       // Handle error, e.g., display an error message to the user
  //     }
  //   };
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl border-4 border-amber-500 w-5/12 m-auto">
        <div className="text-center text-3xl font-semibold flex justify-center mb-4 pr-10">
          {/* <div className="w-1/3"> */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl text-yellow-400 font-semibold whitespace-nowrap dark:text-white">
              WatchesCom
            </span>
          </Link>
          {/* </div> */}
        </div>
        <div>
          {/* onClick={handleLogin} */}
          <form class="max-w-sm mx-auto" onSubmit={handleSubmitEvent}>
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={input.email}
                onChange={handleChange}
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@Email.com"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={input.password}
                onChange={handleChange}
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-amber-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                class="text-white bg-amber-600 w-1/2 font-semibold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-amber-300 rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
