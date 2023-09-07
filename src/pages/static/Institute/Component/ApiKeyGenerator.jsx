import { Add } from "@mui/icons-material";
import { Button, Input, Table } from "@mui/joy";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

import { useGlobalContext } from "global/context";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import InstituteSidebar from "./InstituteSidebar";
function ApiKeyGenerator() {
  const [open, setOpen] = useState(false);
  const { token, userData, api } = useGlobalContext();
  const [secretKey, setSecretKey] = useState("");
  const [appName, setAppName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [createdApps, setCreatedApps] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!appName) {
      alert("Please enter the app name.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(`/v1/generate-api-key`, {
        id: userData?.id,
        alias: appName,
      });

      setApiKey(response?.data?.apikey);
      setSecretKey(response?.data?.secret);
      const currentDateTime = new Date().toLocaleString();
      const newApp = {
        appName,
        apiKey: response?.data?.apikey,
        createdDateTime: currentDateTime, // Add the current date
      };
      setCreatedApps([...createdApps, newApp]);

      // Save the updated createdApps to Local Storage
      localStorage.setItem(
        "createdApps",
        JSON.stringify([...createdApps, newApp])
      );
    } catch (error) {
      console.error("Error generating API key:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const storedData = localStorage.getItem("createdApps");
    if (storedData) {
      setCreatedApps(JSON.parse(storedData));
    }
  }, []);
  function handleCopyClick(event) {
    const section = event.target.closest(".d-flex");
    const inputElement = section.querySelector("Input");

    inputElement.select();

    try {
      document.execCommand("copy");
      // alert('Value copied to clipboard');
    } catch (err) {
      alert("Unable to copy. Please copy the value manually.");
    }
  }

  const handleClose = () => {
    setOpen(false);
    setAppName("");
    setApiKey("");
    setSecretKey("");
    // setToken("");
  };
  useEffect(() => {
    console.log("token:", token);
  }, []);

  const handleDelete = (index) => {
    const newApps = [...createdApps];
    newApps.splice(index, 1);
    setCreatedApps(newApps);
  };

  const ScrollerStyle = {
    maxHeight: "900px",
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

  const mainContentStyles = {
    flex: 1,
    // Add any other styling for the main content here
  };
  const ScrollNoSidebar = {
    maxHeight: "820px",
    width: "100%",
    overflowY: "scroll",
    justifyContent: "flex-end",
    // marginTop: "140px",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          
          <div
            className="col col-12 col-lg-12 scroll-minibar"
            style={ScrollNoSidebar}
          >
            <div className="p-0 mt-3 mb-2">
              <div className="shadow-lg rounded-3" style={{ height: "800px" }}>
                <div className="p-3 d-flex align-items-center justify-content-between  ">
                  <h4 className="font-weight-bold">Api Token Key</h4>

                  <React.Fragment>
                    <Button
                      variant="soft"
                      color="neutral"
                      //   className="text-black"
                      onClick={() => setOpen(true)}
                      startDecorator={<Add />}
                    >
                      Create Api Key
                    </Button>
                    <Modal
                      aria-labelledby="modal-title"
                      aria-describedby="modal-desc"
                      open={open}
                      onClose={handleClose}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Sheet
                        variant="outlined"
                        sx={{
                          maxWidth: "100%",
                          minWidth: "60%",
                          borderRadius: "md",
                          p: 3,
                          boxShadow: "lg",
                        }}
                      >
                        <ModalClose
                          variant="outlined"
                          sx={{
                            top: "calc(-1/4 * var(--IconButton-size))",
                            right: "calc(-1/4 * var(--IconButton-size))",
                            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                            borderRadius: "50%",
                            bgcolor: "background.body",
                          }}
                        />
                        <div>
                          <div>
                            <form onSubmit={handleSubmit}>
                              <div className="d-flex align-items-center justify-content-center p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <h4
                                    className="font-weight-bold"
                                    style={{ userSelect: "none" }}
                                  >
                                    {" "}
                                    App Name{" "}
                                  </h4>{" "}
                                  &nbsp;
                                  <i className="bi bi-arrow-right fs-24"></i>
                                  &nbsp;
                                </div>

                                <Input
                                  sx={{ width: "65%" }}
                                  placeholder="Enter App Name"
                                  value={appName}
                                  onChange={(e) => setAppName(e.target.value)}
                                  required
                                />
                              </div>

                              <div className="d-flex align-items-center justify-content-center mb-5">
                                <Button
                                  type="submit"
                                  variant="soft"
                                  color="neutral"
                                  className="text-dark"
                                  disabled={loading}
                                  style={{ userSelect: "none" }}
                                >
                                  Generate API Credential
                                </Button>
                                {/* {apiKey && (
                              <div>Your generated API key: {apiKey}</div>
                            )} */}
                              </div>
                            </form>
                          </div>
                          {apiKey && (
                            <div className="hello-div">
                              <h4
                                className="mb-3 text-center font-weight-bold"
                                style={{ userSelect: "none" }}
                              >
                                API credentials generated successfully !!
                              </h4>
                              <div className="border p-3 rounded-1">
                                <div className="d-flex align-items-center justify-content-around mb-3">
                                  <h5
                                    className="font-weight-bold"
                                    style={{ userSelect: "none" }}
                                  >
                                    Alias&nbsp;&nbsp;{" "}
                                  </h5>
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                  <Input
                                    size="sm"
                                    className="shadow-sm"
                                    readOnly
                                    value={appName}
                                    style={{ width: "100%" }}
                                  />
                                  &nbsp;&nbsp;
                                  <Button
                                    aria-label="Like"
                                    className="shadow-sm"
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
                                    onClick={handleCopyClick}
                                  >
                                    Copy
                                  </Button>
                                </div>
                                <div className="d-flex align-items-center justify-content-around mb-3">
                                  <h5
                                    className="font-weight-bold"
                                    style={{ userSelect: "none" }}
                                  >
                                    ApiKey
                                  </h5>
                                  &nbsp;&nbsp;
                                  <Input
                                    size="sm"
                                    className="shadow-sm"
                                    readOnly
                                    value={apiKey}
                                    style={{ width: "100%" }}
                                  />
                                  &nbsp;&nbsp;
                                  <Button
                                    aria-label="Like"
                                    className="shadow-sm"
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
                                    onClick={handleCopyClick}
                                  >
                                    Copy
                                  </Button>
                                </div>
                                <div className="d-flex align-items-center justify-content-around mb-3">
                                  <h5
                                    className="font-weight-bold"
                                    style={{ userSelect: "none" }}
                                  >
                                    Secret
                                  </h5>
                                  &nbsp;&nbsp;&nbsp;
                                  <Input
                                    size="sm"
                                    value={secretKey}
                                    readOnly
                                    className="shadow-sm"
                                    style={{ width: "100%" }}
                                  />
                                  &nbsp;&nbsp;
                                  <Button
                                    aria-label="Like"
                                    className="shadow-sm"
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
                                    onClick={handleCopyClick}
                                  >
                                    Copy
                                  </Button>
                                </div>

                                <div className="d-flex align-items-center justify-content-around mb-3">
                                  <h5
                                    className="font-weight-bold"
                                    style={{ userSelect: "none" }}
                                  >
                                    Token
                                  </h5>
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                  <Input
                                    id="tokenInput"
                                    type="text"
                                    size="sm"
                                    value={token}
                                    readOnly // Set the readOnly attribute to make the input non-editable
                                    className="shadow-sm"
                                    style={{ width: "100%" }}
                                  />
                                  &nbsp;&nbsp;
                                  <Button
                                    aria-label="Copy"
                                    className="shadow-sm"
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
                                    onClick={handleCopyClick}
                                  >
                                    Copy
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </Sheet>
                    </Modal>
                  </React.Fragment>
                </div>
                <div className="p-2 ">
                  <div
                    className="container border rounded-3 p-0  scroll-minibar"
                    style={ScrollerStyle}
                  >
                    <Table aria-label="basic table" className="">
                      <thead>
                        <tr>
                          <th
                            className="font-weight-bold text-black"
                            style={{ width: "20%", userSelect: "none" }}
                          >
                            App Name
                          </th>
                          <th
                            className="font-weight-bold text-black"
                            style={{ width: "35%", userSelect: "none" }}
                          >
                            API Key
                          </th>
                          <th className="font-weight-bold text-black">
                            Action
                          </th>
                          <th className="font-weight-bold text-black">
                            Creation Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {createdApps.map((app, index) => (
                          <tr key={index}>
                            <td>{app.appName}</td>
                            <td>{app.apiKey}</td>
                            <td>
                              <Tooltip>
                                <IconButton>
                                  <DeleteIcon
                                    onClick={() => handleDelete(index)}
                                  />
                                </IconButton>
                              </Tooltip>
                            </td>
                            <td>{app.createdDateTime}</td>{" "}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiKeyGenerator;
