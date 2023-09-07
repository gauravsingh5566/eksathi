import React from "react";

import { styled } from "styled-components";

import { useState } from "react";
import EnglishDepartments from "./DepartmentComponent.jsx/EnglishDepartments";
import MathDepartments from "./DepartmentComponent.jsx/MathDepartments";
import ScienceDepartments from "./DepartmentComponent.jsx/ScienceDepartments";
import HistoryDepartments from "./DepartmentComponent.jsx/HistoryDepartments";

function Departments() {
  const ScrollerStyle = {
    maxHeight: "840px",
    width: "100%",
    overflowY: "scroll",
    justifyContent: "flex-end",
    // marginTop: "140px",
  };

  const ScrollHiddenDiv = styled.div`
    .scroll-bar-hidden::-webkit-scrollbar {
      display: none;
    }
  `;

  const ScrollMinibarDiv = styled.div`
    .scroll-minibar::-webkit-scrollbar {
      width: 3px;
      background-color: black;
    }

    .scroll-minibar::-webkit-scrollbar-thumb {
      background-color: rgb(185, 182, 182) !important;
    }
  `;
  return (
    <>
      <div className="scroll-bar-hidden"style={ScrollerStyle}>
        <div>
          <div className="rounded-3 mb-3 p-0 ">
            <div className="">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="mb-3">
                  <h3 className="font-weight-bold mt-3">Departments</h3>
                </div>
                <div></div>
              </div>
              <div>
                <EnglishDepartments />
              </div>
              <div>
                <MathDepartments />
              </div>
              <div>
                <ScienceDepartments />
              </div>
              <div>
                <HistoryDepartments />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Departments;
