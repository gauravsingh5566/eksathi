import React from "react";
import { Outlet } from "react-router-dom";
import InstituteSidebar from "./Component/InstituteSidebar";
import { Divider } from "@mui/joy";

function InstituteParent() {

  return (
    <>
      <div className="d-flex ">
        <div className="col col-md-3 col-lg-2 h-100">
          <div className=" d-none d-lg-block">
            <InstituteSidebar />
          </div>
        </div>
        <Divider orientation="vertical" variant="middle" color="primary" />
        <div className="col col-md-9  col-12 col-lg-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default InstituteParent;
