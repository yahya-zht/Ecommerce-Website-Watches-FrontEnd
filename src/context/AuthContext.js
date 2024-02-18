import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  // const loginAction = async (data) => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const res = await response.json();
  //     if (res.token) {
  //       console.log("res.user =>  ", res.user);
  //       setToken(res.token);
  //       localStorage.setItem("user", res.user.name);
  //       localStorage.setItem("site", res.token);
  //       navigate("Admin");
  //       return;
  //     }
  //     throw new Error(res.message);
  //   } catch (error) {
  //     console.error("Error =>" + error.message);
  //   }
  // };
  const loginAction = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid email/username or password");
        } else {
          throw new Error(`Server error: ${response.statusText}`);
        }
      }

      const res = await response.json();
      if (res.token) {
        console.log("res.user =>  ", res.user);
        setToken(res.token);
        localStorage.setItem("user", res.user.name);
        localStorage.setItem("site", res.token);
        navigate("Admin");
        return;
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      // console.error("Error:", error.message);
      return error.message;
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
