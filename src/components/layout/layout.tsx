import { Fragment } from "react";

import NavBar from "./navbar";

const Layout = (props: any) => {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
