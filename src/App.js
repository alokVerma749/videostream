import { Provider } from "react-redux";
import "./App.css";

import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { useState } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
    ]
  }
])

function App() {
  const [dark, setDark] = useState(true)
  return (
    <Provider store={store}>
      <div div className={`App ${dark ? "text-white bg-gray-900" : "text-black bg-white"}`} >
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div >
    </Provider >
  );
}

export default App;
