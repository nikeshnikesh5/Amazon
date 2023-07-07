import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

export default function Root() {
    return (
      <>
       <Header/>
       <Home/>
      </>
    );
  }