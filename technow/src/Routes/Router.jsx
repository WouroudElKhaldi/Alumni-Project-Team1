import Newsletter from '../Pages/Newsletter/Newsletter';
// import BlogDetails from "./Components/BlogDetails/BlogDetailsComponent"
import Header from "../Layouts/Header/Header"
import Footer from "../Layouts/Footer/Footer"
import HomePage from "../Pages/Home/Home"
import Blogs from "../Pages/Blogs/BlogsPage"
import BlogDetails from '../Pages/BlogsDetails/BlogsDetails';
import BlogForm from "../Pages/BlogsForm/BlogsForm"
import BlogUpdate from '../Pages/BlogsUpdate/BlogsUpdateForm'
import Contact from "../Pages/Contact/Contact"
import Dashboard from "../Pages/Dashboard/Dashboard"
import NewsForm from "../Pages/NewsForm/NewsForm"
import NewsLetterDetails from "../Pages/NewsletterDetails/NewsletterDetais"
import NewsUpdate from "../Pages/NewsUpdate/NewsUpdateForm"
import SubscribePage from "../Pages/Subscribe/Subscribe"
import { createBrowserRouter, Outlet, } from "react-router-dom";
import { Logo } from '../Components/Logo/Logo';
import NotFound from '../Pages/NotFound/NotFound';
import NewsCategory from '../Pages/NewsCategory/NewsCategory';
import HeaderMobile from '../Layouts/HeaderMobile/HeaderMobile';
import { useState , useEffect } from 'react';

const Layout =()=>{
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [nav, setNav] = useState(screenWidth < 800 ? true : false)

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
      setNav(newWidth < 800 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return(
  <>
  {nav ? (
    <HeaderMobile/>
  ): (  <Header/>) }
  <Outlet />
  <Footer />
  </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path: "/",
        element: <Logo/>
      },
      {
          path:"/newsletter",
          element:<Newsletter />
      },
      {
          path:"/newsletterDetails/:id",
          element:<NewsLetterDetails />
      },
      {
        path:"/newsCategory/:categoryName",
        element:<NewsCategory />
      },
      {
        path:"/contact",
        element:<Contact />
     },
    {
      path:"/blogsForm",
      element:<BlogForm />
  },
  {
    path:"/updateBlog/:id",
    element:<BlogUpdate />
},
{
  path:"/subscribe",
  element:<SubscribePage />
},
{
  path:"/blog",
  element:<Blogs />
},
{
  path:"/blogDetails/:id",
  element:<BlogDetails />
},
    ]
  },
  {
      path: "/dashboard",
      element: <Dashboard />,
    },{
      path: "/*",
      element : <NotFound/>
    }
]);
export default router