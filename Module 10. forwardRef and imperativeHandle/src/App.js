import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
// BEFORE SETTING CONTEXT PROVIDER COMPONENT
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//   };

//   useEffect(() => {
//     const storedUserInfo = localStorage.getItem("isLoggedIn");

//     if (storedUserInfo === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <React.Fragment>
//       <AuthContext.Provider
//         value={{
//           isLoggedIn: isLoggedIn,
//           onLogout: logoutHandler,
//         }}
//       >
//         <MainHeader />
//         <main>
//           {!isLoggedIn && <Login onLogin={loginHandler} />}
//           {isLoggedIn && <Home onLogout={logoutHandler} />}
//         </main>
//       </AuthContext.Provider>
//     </React.Fragment>
//   );
// }

function App() {
  const contextData = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!contextData.isLoggedIn && <Login />}
        {contextData.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
