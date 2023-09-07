import { useState, createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";
import useDidMountEffect from "./useDidMountEffect";

const UserContext = createContext();

const initialState = {
  userData: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  loginStatus: false,
  showAuth: false,
  questions: [],
  socket: null,
  showMessage: false,
  messageTo: {},
  onlineUsers: [],
  users: [],
  categories: [],
  UserStep :1,
  OnboardingData:[],
  finalData:[],
  jobdetailss:[],
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUser = (userdata) => {
    console.log("Reducer got the User Data: ", userdata);
    localStorage.setItem("user", JSON.stringify(userdata));
    return dispatch({
      type: "SET_USER",
      payload: {
        userData: userdata,
        loginStatus: true,
      },
    });
  };
  const removeUser = () => {
    localStorage.removeItem("user");
    return dispatch({
      type: "SET_USER",
      payload: {
        userData: {},
        loginStatus: false,
      },
    });
  };
  const setToken = (token) => {
    console.log("Reducer got the Token: ", token);
    localStorage.setItem("token", token);
    return dispatch({
      type: "SET_TOKEN",
      payload: {
        token: token,
      },
    });
  };
  const removeToken = () => {
    localStorage.removeItem("token");
    return dispatch({
      type: "SET_TOKEN",
      payload: {
        token: "",
      },
    });
  };
  const isLoggedIn = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    if (token && user) {
      setUser(user);
      setToken(token);
    }
    return state.loginStatus;
  };

  const setSocket = (socket) => {
    console.log("Reducer got the socket: ", socket);
    // localStorage.setItem("token", token);
    return dispatch({
      type: "SET_SOCKET",
      payload: {
        socket: socket,
      },
    });
  };
  
  const setCategories = (categories) => {
    console.log("Reducer got the Categories Data: ", categories);
    return dispatch({
      type: "SET_CATEGORIES",
      payload: {
        categories: categories,
      },
    });
  };

  const setQuestions = (questions) => {
    console.log("Reducer got the Question Data: ", questions);
    return dispatch({
      type: "SET_QUESTIONS",
      payload: {
        questions: questions,
      },
    });
  };
  const setOnboardingData = (OnboardingData) => {
    console.log("Reducer got the Question Data: ", OnboardingData);
    return dispatch({
      type: "SET_ONBOARDING",
      payload: {
        OnboardingData: OnboardingData,
      },
    });
  };
  const setfinalData = (finalData) => {
    console.log("Reducer got the Question Data: ", finalData);
    return dispatch({
      type: "SET_FINALDATA",
      payload: {
        finalData: finalData,
      },
    });
  };
  const setUserStep = (UserStep) => {
    console.log("Reducer got the Question Data: ", UserStep);
    return dispatch({
      type: "SET_USERSTEP",
      payload: {
        UserStep: UserStep,
      },
    });
  };
  const setjobdetailss = (jobdetailss) => {
    console.log("Reducer got the Question Data: ", jobdetailss);
    return dispatch({
      type: "SET_JOBDETAILS",
      payload: {
        jobdetailss: jobdetailss,
      },
    });
  };

  const setAuth = (showAuth) => {
    return dispatch({
      type: "SET_AUTH",
      payload: {
        showAuth: showAuth,
      },
    });
  }

  const setShowMessage = (showMessage) => {
    return dispatch({
      type: "SET_SHOW_MESSAGE",
      payload: {
        showMessage: showMessage,
      },
    });
  }

  const setMessageTo = (messageTo) => {
    return dispatch({
      type: "SET_MESSAGE_TO",
      payload: {
        messageTo: messageTo,
      },
    });
  }

  const setOnlineUsers = (onlineUsers) => {
    return dispatch({
      type: "SET_ONLINE_USERS",
      payload: {
        onlineUsers: onlineUsers,
      },
    });
  }

  const setUsers = (users) => {
    return dispatch({
      type: "SET_USERS",
      payload: {
        users: users,
      },
    });
  }

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000",
    timeout: 25000,
    headers: {
      Authorization: state.token,
    },
  });

  const apiAuth = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000",
    timeout: 25000,
    headers: {
      Authorization: state.token,
    },
  });
  
  const apiFormData = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  
  const apiAuthFormData = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: state.token,
    },
  });

  const getCategories = async () => {
    console.log("Getting categories data through context");
    try {
      const res = await api.get(`/app/categories`);
      if (res?.status === 200) {
        setCategories(res?.data?.results);
        console.log("Categories in Context: ", res?.data?.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeObjectById = (array, id) => {
    return array.filter(obj => obj.id !== id);
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
        setToken,
        removeToken,
        removeUser,
        isLoggedIn,
        setSocket,
        setAuth,
        setShowMessage,
        setMessageTo,
        api,
        apiAuth,
        apiFormData,
        apiAuthFormData,
        removeObjectById,
        setQuestions,
        setOnlineUsers,
        setUsers,
        setCategories,
        getCategories,
        setUserStep,
        setOnboardingData,
        setfinalData,
        setjobdetailss
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

//Global custom hook
const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, useGlobalContext };
