// import React from "react";
// import Navbar from "./components/navbar/Navbar";
// import { Provider } from "react-redux";
// import { Router } from "react-router-dom";
// import MainRoutes from "./components/routes/MainRoutes";
// import store from "./store/store";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <MainRoutes />
//       </Router>
//     </Provider>
//   );
// };
// export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/MainRoutes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
