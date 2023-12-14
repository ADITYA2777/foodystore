import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Restaurantmenu from "./components/Restaurantmenu";
import { Suspense, lazy } from "react";
// ;


const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
