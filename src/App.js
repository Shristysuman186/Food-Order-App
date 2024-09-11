import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import UserContext from "./utils/UserContext";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


/*
Header - 
    -logo
    - Navitems
Body-
    -Search
    -Resurant conatiner
        -rest cards
Footer-
    -copyright and links
*/
//lazy loading
const About = lazy(() => import('./components/About'));

const App = () => {
  const [userName, setUserName] = useState();
  //just for example lets say some authentication logic is written here, not required here but in case on login logout functionality
  useEffect(() => {
    //auth logic
    setUserName('Shristy suman')
  }, []);
    return(
      <Provider store={appStore}>
        {/* <UserContext.Provider value={{userName, setUserName}}> can directly use this also in this case need to use {userName, setUserName} in Footer file*/}
        <div className="food_order_app">
            <Header/>
            <Outlet/>
            <UserContext.Provider value={{loggedinUser : userName, setUserName}}>
            <Footer/>
            </UserContext.Provider>
        </div>
        </Provider>
    );
}

const appRouter = createBrowserRouter ([
  {
    path : "/",
    element: <App/>,
    children: [
      {
        path : "/",
        element: <Body/>
      },
      {
        path : "/about",
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
          <About/>
          </Suspense>
        ) 
      },
      {
        path : "/restaurant/:resId",  //resID will be passed dynamically,to pass dynamic value to url in routing use :resId
        element: <RestaurantInfo/>
      },
      {
        path : "/cart",  
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
