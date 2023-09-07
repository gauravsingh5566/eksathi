import { Box, Button, Chip, FormLabel, Radio, RadioGroup } from "@mui/joy";
import React from "react";
function Education (){
    const [payselected, setpaySelected] = React.useState("");
    return (
        <>
        <div>
        <div className="mb-3">
          <FormLabel className="font-weight-bold mb-2">
          Minimum Education
            <strong className="text-danger fs-18"> *</strong>
          </FormLabel>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Box>
              <RadioGroup
                name="best-movie"
                aria-labelledby="best-movie"
                orientation="horizontal"
                sx={{ flexWrap: "wrap", gap: 1 }}
              >
                {["10th or Below 10th", "Fixed + Incetive", "Incetive Only"].map(
                  (name) => {
                    const checked = payselected === name;
                    return (
                      <Chip
                        key={name}
                        variant="plain"
                        color={checked ? "info" : "neutral"}
                      >
                        <Radio
                          variant="outlined"
                          color={checked ? "primary" : "neutral"}
                          disableIcon
                          overlay
                          label={name}
                          value={name}
                          checked={checked}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setpaySelected(name);
                            }
                          }}
                        />
                      </Chip>
                    );
                  }
                )}
              </RadioGroup>
            </Box>
          </Box>
        </div>

        </div>
        
        </>
    )
}

function CandidateRequirements() {
  return (
    <div>
      <div className="p-1 ml-3">
        <div>
          <div className="shadow-sm p-3 bg-light mb-3">
            <div className="text-start mb-2 " style={{ lineHeight: "17px" }}>
              <h4 className="font-weight-bold ">Candidate Requirements</h4>
              <p className="fs-13 text-black font-weight-bold">
                We’ll use these requirement details to make your job visible to
                the right candidates.
              </p>
              <div>
              <Education />
              </div>
            </div>
          </div>
          <div className="mb-3 shadow-sm p-3 bg-light">
            <div></div>
          </div>
          <div className="mb-3 shadow-sm p-3 bg-light">
            <div>{/* <Compensation /> */}</div>
          </div>

          <div className="p-3 d-flex align-content-center justify-content-center">
            <Button
              variant="outlined"
              color="neutral"
              sx={{
                width: "200px",
                backgroundColor: "#f8f9fa",
                color: "black",
              }}
            >
              Back
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;
            <Button
              variant="outlined"
              sx={{
                width: "200px",
                backgroundColor: "#0faab7",
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateRequirements;
