import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const URL = "http://localhost:8000";
const authReducer = (prevState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    case "UPDATE":
      return {
        user: {
          ...prevState.user,
          donor_application_status: action.payload,
        },
      };
    case "LOCATION":
      return {
        user: {
          ...prevState.user,
          coordinates: action.payload,
        },
      };
    default:
      return prevState;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const userData = async (access) => {
    try {
      let data = await axios.get(`${URL}/accounts/profile/`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      return data.data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const access = localStorage.getItem("access");
      if (access) {
        const User = await userData(access);
        dispatch({ type: "LOGIN", payload: { ...User } });
      }
    };

    fetchUser();
  }, []);

  console.log("Auth State: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes;
