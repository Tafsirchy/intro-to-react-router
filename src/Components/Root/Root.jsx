import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/SideBar";
import "./root.css";
const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="root-main">
        <SideBar></SideBar>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 * 1. use: usersPromise > Suspense > Promise > use(usersPromise)
 * 2. [ less used so far ] > useState + useEffect ( () => {},[])
 * 3. set loader in the rout: load data before router component to render
 */
