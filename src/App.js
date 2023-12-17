import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Restaurantmenu from "./components/Restaurantmenu";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
