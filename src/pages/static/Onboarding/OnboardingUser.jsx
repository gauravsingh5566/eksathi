import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import MainOnboarding from "./MainOnboarding";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OnboardingUser() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [Onbord, setOnbord] = useState(false);
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center p-5 " hidden={Onbord}>
        <React.Fragment>
          <div
            style={{
              height: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className=" rounded-3 d-flex flex-column align-items-center justify-content-end p-3"
              style={{ height: "70%", width: "100%" }}
            >
              <img
                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1690290577~exp=1690291177~hmac=cd09b2ece1bf55efa748b0e7acffca10d9bef0aeca9643ba9efd672bcb6b0695"
                alt="Profile"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />
              <div>
                <h3 className="font-weight-bold text-center mb-3">
                  Hey 😊 <br />
                  Welcome To EkSathi
                </h3>
                <p className="mb-4 text-center text-secondary">
                  Please complete your profile to get started
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    variant="soft"
                    color="primary"
                    onClick={() => navigate('/institute/onboarding-user')}
                    fullWidth
                  >
                    Complete Your Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              width: isSmallScreen ? "100%" : "55%",
              height: isSmallScreen ? "100%" : "60%",
              borderRadius: isSmallScreen ? "0" : "20px", // Set border radius to 0 on small screens, otherwise 20px
              p: 1,
              boxShadow: "lg",
            }}
          >
            {isSmallScreen ? null : ( // Hide the ModalClose button on small screens
              <ModalClose
                variant="outlined"
                sx={{
                  top: "calc(-1/4 * var(--IconButton-size))",
                  // right: "calc(-1/4 * var(--IconButton-size))",
                  boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                  borderRadius: "50%",
                  bgcolor: "background.body",
                }}
              />
            )}
            <div style={{ height: "" }}>
            </div>
          </Sheet>
        </Modal> */}
        </React.Fragment>
      </div>
     
    </>
  );
}

export default OnboardingUser;
