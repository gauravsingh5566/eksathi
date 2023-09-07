import React from "react";
import Button from "@mui/material/Button";

function ViewJobApplication() {
  return (
    <>
      <div className="card col-11 container rounded-2 mb-3 mt-3">
        <div className="p-3">
          <img
            src="https://img.freepik.com/free-vector/gradient-consultancy-linkedin-banner_23-2150105639.jpg?w=1380&t=st=1685184927~exp=1685185527~hmac=d90deb3c4ccece01781c28b8129cb54c88d208a2618fb2d7ae340760feb81ca7"
            alt="logo"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "50%",
              objectPosition: "center top",
            }}
          />

          <div>
            <p className="fs-30 mt-5 ">Aitable</p>
            <div className="row mt-3 mb-3">
              <h1 className="col">
                Senior Manager &nbsp;&nbsp;{" "}
                <Button
                  className=" text-center  text-body font-weight-bold rounded-2 text-capitalize "
                  variant="outlined"
                  color="warning"
                >
                  Interview
                </Button>
              </h1>
            </div>
          </div>

          <div className="row  text-center">
            <Button className="col m-2  bg-gray" variant="outlined">
              Job Type:{" "}
              <Button className=" text-center  text-body    ">
                <h6 className="font-weight-bold">Fulltime</h6>
              </Button>
            </Button>

            <Button className="col m-2  bg-gray" variant="outlined">
              Location:{" "}
              <Button
                className=" text-center  text-body    "
                // variant="outlined"
              >
                <h6 className="font-weight-bold">Delhi</h6>
              </Button>
            </Button>
          </div>
          <div className="row text-center">
            <Button className="col m-2 bg-gray" variant="outlined">
              Work Type:{" "}
              <Button className=" text-center  text-body    ">
                <h6 className="font-weight-bold">Work from home</h6>
              </Button>
            </Button>
            <Button className="col m-2  bg-gray" variant="outlined">
              Salary:{" "}
              <Button
                className=" text-center  text-body    "
                // variant="outlined"
              >
                <h6 className="font-weight-bold">40k - 50k</h6>
              </Button>
            </Button>
          </div>
          <hr></hr>

          <h3 className="mb-3">Descriptions</h3>
          <p className=" mb-10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dolor mollitia cum accusamus voluptatum sint earum corporis maxime
            aperiam adipisci. Non libero iusto quibusdam modi maxime ipsa,
            dignissimos quas ullam. Impedit harum facere dicta ipsum tenetur
            cumque? Ab fuga ipsum voluptas commodi incidunt quod ullam vel saepe
            quis odit rerum earum magnam consequatur laborum temporibus,
            molestiae nesciunt, natus eos illo. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Laudantium porro saepe asperiores
            excepturi dolorum officiis totam voluptatem et temporibus adipisci.
          </p>
          <hr></hr>

          <h3 className="mt-2">Responsibilities</h3>
          {/* <ul className="mt-3 m-3"> */}
          <div className="mt-3 m-3">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam?
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewJobApplication;
