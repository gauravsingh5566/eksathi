import { api, apiAuth, apiAuthFormData, apiFormData } from "api/api";
import axios from "axios";
import { Popup } from "layout/Popup";
import React, { useEffect, useState } from "react";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Checkbox,
  DialogContent,
  DialogContentText,
  Divider,
  TextareaAutosize,
  TextField,
} from "@mui/material";
// End Card

// Multile Select
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useFormik } from "formik";
import moment from "moment";
import { useGlobalContext } from "global/context";
import TextEditor from "./TextEditor";
import List from "components/user/List/UserList";
import UserListCard from "components/user/Card/UserListCard";
import ReactQuill from "react-quill";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, tags, theme) {
  return {
    fontWeight:
      tags.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// End MultiPle Select

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const { userData } = useGlobalContext();
  const [textEditorValue, setTextEditorValue] = useState("");
  const [recentUsers, setRecentUsers] = useState();
  const [tagsArray, setTagsArray] = useState([]);
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = useState("");
  const handleChangeNotification = (event) => {
    setChecked(event.target.checked);
  };

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [details, setDetails] = useState("");
  const [img, setImg] = useState("");
  const [activCategory, setActivCategory] = useState(null);
  const fetchCategories = async () => {
    try {
      const response = await api.get("app/categories");
      if (response?.status === 200) {
        Popup();
        console.log({ response });
        setCategories(response?.data?.results);
      }
    } catch (error) {
      Popup("error", error.response.data.message);
    }
  };

  const getTags = async (id) => {
    try {
      const res = await api.get(`app/tags?id=${id}`);
      if (res?.status === 200) {
        console.log(`${activCategory} Tags: ${res?.data?.tags}`);
        setTagsArray(res?.data?.tags);
      }
    } catch (error) {
      console.log(`${activCategory} Tags Error ${error}`);
    }
  }

  useEffect(() => {
    getTags(categories[activCategory]?.id);
  }, [activCategory]);

  const getRecentUsers = async () => {
    try {
      const res = await api.get("user/recent");
      console.log("Recent Users API Response: ", res);
      if (res.status == 200) {
        Popup();
        console.log("Recent Users Parent: ", res?.data);
        setRecentUsers(res.data.result);
      }
    } catch (error) {
      Popup("error", error.response.data.message);
    }
  }
  // Multi Select
  const theme = useTheme();
  const [tags, setTags] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (tags.length < 5 || value.length < 5) {
      setTags(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
  };
  useEffect(() => {
    fetchCategories();
    getRecentUsers();
  }, []);
  const questionFormik = useFormik({
    initialValues: {
      title: "",
      body: "",
      userId: userData?.id
    },
    onSubmit: async (values, actions) => {
      values = {...values, body: textEditorValue, categoryId: categories[activCategory]?.id, tags: JSON.stringify(tags)};
      console.log(`Active Category: ${activCategory}`);
      // const formData = new FormData();
      // formData.append("title", values.title);
      // formData.append("body", textEditorValue);
      // formData.append("tags", JSON.stringify(tags));
      // formData.append("categoryId", categories[activCategory]?.id);
      // formData.append("notification", checked);
      // formData.append("userId", userData.id);
      // if (values.image) {
      //   formData.append("image", values.image);
      // }
      try { 
        const response = await api.post("app/question", values);
        if (response.status === 200) {
          Popup("success", response.data.message);
        }
      } catch (error) {
        Popup("error", error.response.data.message);
      }
    },
  });
  // console.log(checked);

  const formik = useFormik({
    initialValues: {
        email: userData?.email,
        title: "",
        categoryId: null
    },
    onSubmit: async (values, action) => {
        values = { ...values, body: value };
        console.log("Submiting Question: ", { values });
        console.log("UserData: ", userData);
        try {
            const res = await api.post(`/app/questions`, values);
            if (res.status === 200) {
                console.log("Success: ", res);
                // handleClose();
                // pop2.success(res?.data?.message);
                // getQuestions()
                // navigate(`/dashboard/forum/${res?.data?.slug}`);
            }
        } catch (error) {
            // handleClose();
            console.log(error.response.data.message);
            // pop2.error(error.response.data.message);
        }
    }
});

  return (
    <div>
      <div>
        {/*======================================
    START HERO AREA
  ======================================*/}
        <section className="hero-area bg-white shadow-sm overflow-hidden">
          <span className="stroke-shape stroke-shape-1" />
          <span className="stroke-shape stroke-shape-2" />
          <span className="stroke-shape stroke-shape-3" />
          <span className="stroke-shape stroke-shape-4" />
          <span className="stroke-shape stroke-shape-5" />
          <span className="stroke-shape stroke-shape-6" />
          <div className="container">
            <div className="hero-content pt-80px pb-80px">
              <h2 className="section-title">Ask a public question</h2>
              <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 550 125"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".cls-3,.cls-6,.cls-7{fill:none;stroke-miterlimit:10}.cls-3{stroke:#3cb1c6}.cls-4{fill:#fff}.cls-5{fill:#f9b851}.cls-6{stroke:#f48024}.cls-7{stroke:#bbc0c4;stroke-dasharray:5}",
                    }}
                  />
                </defs>
                <g opacity=".5">
                  <path
                    fill="#cceaff"
                    d="M232.73 73L217.5 92.89V73h-16V26h64v47H232.73z"
                  />
                  <path
                    className="cls-3"
                    d="M205 47V20.5h14.5M255.5 66.5h-18.51L221 86.06V66.5h-16V58M231.5 20.5H270v46h-6.5"
                  />
                  <path
                    className="cls-4"
                    d="M222.5 40.79v7.3l8.16 7.29 15.84-14.21V33.3l-15.84 14.31-8.16-6.82z"
                  />
                  <path
                    className="cls-5"
                    d="M374.36 76l-9.29 11.42-.26-11.42h-5.31V49h45v27h-30.14z"
                  />
                  <path
                    className="cls-6"
                    d="M379.5 46.5H402V55M402 62v11.5H372.02L363 84.92V73.5h-6v-27h11.5"
                  />
                  <path
                    className="cls-4"
                    d="M377.5 59h5v5h-5zM367.5 59h5v5h-5zM387.5 59h5v5h-5z"
                  />
                  <path
                    className="cls-5"
                    d="M180.25 67l5.16 6.77.14-6.77h2.95V51h-25v16h16.75z"
                  />
                  <path
                    className="cls-6"
                    d="M170.5 65.5h10.73l5.77 6.72V65.5h4V59M170.5 49.5H165V65M191 53v-3.5h-15.5"
                  />
                  <path
                    className="cls-4"
                    transform="rotate(-180 177 58.5)"
                    d="M175.5 57h3v3h-3z"
                  />
                  <path
                    className="cls-4"
                    transform="rotate(-180 183 58.5)"
                    d="M181.5 57h3v3h-3z"
                  />
                  <path
                    className="cls-4"
                    transform="rotate(-180 171 58.5)"
                    d="M169.5 57h3v3h-3z"
                  />
                  <path
                    className="cls-5"
                    d="M486.95 77l15.55 19.89V77h16V30h-65v47H486.95z"
                  />
                  <path
                    className="cls-6"
                    d="M515 51V24.5h-14.5M464.5 70.5h18.51L499 90.06V70.5h16V62M488.5 24.5H450v46h6.5"
                  />
                  <path
                    className="cls-4"
                    d="M470.5 44.71V52l8.16 7.3 15.84-14.21v-7.87l-15.84 14.3-8.16-6.81z"
                  />
                  <path
                    className="cls-3"
                    d="M533.5 34.5h-2.14L527 40.34V34.5h-3v-12h4.5M545 30v5.5h-7.5M533.5 22.5H545V26M534 28.5h2v2h-2z"
                  />
                  <path
                    className="cls-3"
                    d="M529 28.5h2v2h-2zM539 28.5h2v2h-2zM280 30V16.5h7.5M305.5 39.5H296l-8 10v-10h-8V35M293.5 15.5H313v24h-3.5"
                  />
                  <path
                    className="cls-3"
                    d="M289 26.52v3.65l4.08 3.65 7.92-7.11v-3.93l-7.92 7.15-4.08-3.41z"
                  />
                  <path
                    className="cls-6"
                    d="M124.5 27.5h1.41l3.09 4.23V27.5h2v-10h-2.5M115 23v4.5h6.5M124.5 17.5H115V21"
                  />
                  <path
                    className="cls-6"
                    transform="rotate(-180 123 22.5)"
                    d="M122 21.5h2v2h-2z"
                  />
                  <path
                    className="cls-6"
                    transform="rotate(-180 127 22.5)"
                    d="M126 21.5h2v2h-2z"
                  />
                  <path
                    className="cls-6"
                    transform="rotate(-180 119 22.5)"
                    d="M118 21.5h2v2h-2z"
                  />
                  <path
                    className="cls-7"
                    d="M188.5 78.19s4.69 18.91 27.5 16.28M131 32.67s21.64-2 33 15M271.12 69.19c23.92 31.24 55.21 35.18 90.64 19.3M402 43.5c.68-6.28 19.53-30.13 45.26-21M503.45 98.26c5.25.1 37.8-10.84 23.09-54.76M272.34 66.5s10.51 0 15.16-13.88"
                  />
                  <path
                    className="cls-7"
                    d="M97.22 79.67c14.33-2.39 42.51-3.18 55.87 12.65s58.91 20.93 64.49 3"
                  />
                </g>
                <path
                  className="cls-3"
                  d="M59.15 84.6v-1.04M71.6 84.81v3.73M53.39 82.51l-3.96-.54 2.96-21.6 27.37 3.75-2.96 21.6-20.05-2.75"
                />
                <path
                  className="cls-3"
                  d="M50.22 76.21l-2.31-.32a2 2 0 01-1.73-2.28l.63-4.61a2 2 0 012.3-1.74l2.3.31zM79.88 80.27L77.59 80l1.18-8.64 2.32.32a2 2 0 011.73 2.27l-.64 4.62a2 2 0 01-2.3 1.7zM66.6 79.11l-.2 1.44M69.48 79.5l-.2 1.44M63.72 78.71l-.2 1.44M60.84 78.32l-.2 1.44M57.96 77.93l-.2 1.44"
                />
                <ellipse
                  className="cls-3"
                  cx="66.45"
                  cy="70.5"
                  rx="2.87"
                  ry="2.94"
                  transform="rotate(-82.2 66.45 70.504)"
                />
                <ellipse
                  className="cls-3"
                  cx="56.76"
                  cy="69.18"
                  rx="2.87"
                  ry="2.94"
                  transform="rotate(-82.2 56.758 69.175)"
                />
                <path
                  className="cls-3"
                  d="M55.42 105.96v7.46M72.84 105.96v7.46M76.57 96.01v1.24M66.62 96.01v1.24M54.18 95.38h7.47v4.98h-7.47z"
                />
                <path
                  className="cls-3"
                  d="M81.55 100.98v4.36H46.71V87.92h5.28M57.43 79.39l-1.98 3"
                />
                <path
                  className="cls-3"
                  d="M54.31 90.61c-2.34-1.55-3.17-4.43-1.85-6.43l1.8-2.73 8.49 5.61L61 89.78c-1.37 2.01-4.34 2.38-6.69.83zM62.27 87.92h19.28v9.33"
                />
                <path
                  className="cls-3"
                  d="M88.32 96.44l1.28-4.17a4.4 4.4 0 00-4.45-4.35h-5.47M79.29 104.84l2.68-3.44M82.72 107.53l2.69-3.44M88.32 96.83c2.22 1.73 2.81 4.67 1.33 6.56l-2 2.57-8-6.27 2-2.57c1.47-1.89 4.46-2.02 6.67-.29zM55.3 91.15a6.72 6.72 0 01-1.74.35H46.5"
                />
                <path
                  className="cls-5"
                  d="M40.82 46.24l7.96 10 .23-10h4.55V22.6H14.98v23.64h25.84z"
                />
                <path
                  className="cls-6"
                  d="M28.67 43.13h14.69l8.33 10.53V43.13h6.22V33.8M26.18 19.49H18.1v24.26M56.67 25.09v-5.6H33.65"
                />
                <path
                  className="cls-4"
                  d="M34.17 33.8a5.9 5.9 0 01.34-2.23 4.5 4.5 0 011.24-1.64A6.41 6.41 0 0037 28.62a2.06 2.06 0 00.3-1.07c0-1.12-.52-1.69-1.56-1.69a1.56 1.56 0 00-1.18.46 1.74 1.74 0 00-.46 1.25h-2.9a3.84 3.84 0 011.23-3 4.82 4.82 0 013.31-1.08 4.84 4.84 0 013.29 1 3.64 3.64 0 011.17 2.89 3.57 3.57 0 01-.43 1.62 6.57 6.57 0 01-1.33 1.68l-.81.77a2.78 2.78 0 00-.87 1.71v.61zM34 36.85a1.34 1.34 0 01.43-1 1.64 1.64 0 012.17 0 1.34 1.34 0 01.43 1 1.32 1.32 0 01-.42 1 1.7 1.7 0 01-2.19 0 1.32 1.32 0 01-.42-1z"
                />
                <path
                  className="cls-3"
                  d="M79.06 124H66.62v-4.21a6.45 6.45 0 015-6.42 6.29 6.29 0 017.47 6.33zM75.33 122.13v1.25M70.35 122.13v1.25M61.64 124H49.2v-4.21a6.47 6.47 0 015-6.42 6.29 6.29 0 017.47 6.33zM57.91 122.13v1.25M52.93 122.13v1.25"
                />
              </svg>
            </div>
            {/* end hero-content */}
          </div>
          {/* end container */}
        </section>
        {/*======================================
    END HERO AREA
  ======================================*/}
        {/* ================================
     START QUESTION AREA
  ================================= */}
        <section className="question-area pt-80px pb-40px">
          {!activCategory && (
            <div className="container">
              <h4>Select a Category</h4>
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mt-4 g-1 g-sm-2 g-md-3 g-lg-4">
                {categories?.map((category, categoryIndex) => {
                  return (
                    <div className="col p-1 p-md-2" key={categoryIndex}>
                      <Card
                        sx={{ maxWidth: 345, borderRadius: 3 }}
                        className="h-100"
                        onClick={() => setActivCategory(`${categoryIndex}`)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={category?.icon}
                            style={{
                              objectFit: "contain",
                              padding: "20px 5px",
                              width: "100%",
                            }}
                            alt="green iguana"
                          />
                          <CardContent>
                            <h6 className="text-center"> {category?.title}</h6>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {activCategory && (
            <div className="container">
              <p>
                Category : {categories[activCategory]?.title}{" "}
                <Button
                  className="text-lowercase ml-3"
                  variant="outlined"
                  onClick={() => setActivCategory(null)}
                >
                  Change Category
                </Button>
              </p>
              <div className="row mt-4">
                <div className="col-lg-8">
                  <div className="card card-item">
                    <form
                      className="card-body"
                      onSubmit={questionFormik.handleSubmit}
                    >
                      <div className="input-box">
                        <label className="fs-14 text-black fw-medium mb-0">
                          Question Title
                        </label>
                        <p className="fs-13 pb-3 lh-20">
                          Be specific and imagine you’re asking a question to
                          another person
                        </p>
                        <div className="form-group">
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="title"
                            name="title"
                            value={questionFormik.values.title}
                            onChange={questionFormik.handleChange}
                            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                          />
                        </div>
                      </div>
                      {/* end input-box */}
                      <div className="input-box">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <label className="fs-14 text-black fw-medium mb-0">
                              Tags
                            </label>
                            <p className="fs-13 pb-3 lh-20">
                              Add up to 5 tags to describe what your question is
                              about:
                            </p>
                          </div>
                          {/* end generic-popover */}
                        </div>
                        <FormControl fullWidth>
                          <InputLabel id="demo-multiple-chip-label">
                            Select Tags
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={tags}
                            onChange={handleChange}
                            fullWidth
                            // disabled={tags.length >= 5}
                            input={
                              <OutlinedInput
                                id="select-multiple-chip"
                                label="Select Tags"
                              />
                            }
                            renderValue={(selected) => {
                              const handleDelete = (value) => {
                                console.info('You clicked the delete icon.', selected);
                                const index = selected.indexOf(value);
                                if (index > -1) { // only splice array when item is found
                                  selected.splice(index, 1); // 2nd parameter means remove one item only
                                }

                                console.info('New selected items.', selected);
                                return <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 0.5,
                                }}
                              >
                                {selected?.map((value) => (
                                  <Chip key={value.id} label={value.name} onDelete={()=>handleDelete(value)}/>
                                ))}
                              </Box>
                              };
                             return <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 0.5,
                                }}
                              >
                                {selected?.map((value) => (
                                  <Chip key={value.id} label={value.name} onDelete={()=>handleDelete(value)}/>
                                ))}
                              </Box>
                            }}
                            MenuProps={MenuProps}
                          >
                            {tagsArray?.map(
                              (tag, tagIndex) => (
                                <MenuItem
                                  key={tagIndex}
                                  value={{id: tag?.id, name: tag?.tag}}
                                  style={getStyles(tag?.tag, tags, theme)}
                                >
                                  {tag?.tag}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </div>
                      {/* end input-box */}
                      <div className="input-box">
                        <label className="fs-14 text-black fw-medium mb-0">
                          Details
                        </label>
                        <p className="fs-13 pb-3 lh-20">
                          Include all the information someone would need to
                          answer your question
                        </p>
                        {/* <TextareaAutosize
                          aria-label="minimum height"
                          minRows={6}
                          placeholder="Write Description"
                          fullWidth
                          id="description"
                          name="description"
                          value={questionFormik.values.description}
                          onChange={questionFormik.handleChange}
                          className="form-control"
                          style={{ width: "100%" }}
                        /> */}
                        <TextEditor
                          textEditorValue={textEditorValue}
                          setTextEditorValue={setTextEditorValue}
                        />
                      </div>
                      {/* end input-box */}
                      {/* <div className="input-box">
                        <label className="fs-14 text-black fw-medium">
                          Image
                        </label>
                        <div className="form-group">
                          <div className="file-upload-wrap file-upload-layout-2">
                            <input
                              type="file"
                              name="files[]"
                              className="file-upload-input"
                              multiple
                            />
                            <span className="file-upload-text d-flex align-items-center justify-content-center">
                              <i className="la la-cloud-upload mr-2 fs-24" />
                              Drop files here or click to upload.
                            </span>
                          </div>
                        </div>
                      </div> */}
                      {/* end input-box */}
                      <div className="pt-2">
                        <div className="d-flex align-items-center">
                          <Checkbox
                            id="notification"
                            checked={checked}
                            onChange={handleChangeNotification}
                          // inputProps={{ "aria-label": "controlled" }}
                          />
                          <label className="form-label" htmlFor="notification">
                            Get notified by email when someone answers this
                            question.
                          </label>
                        </div>
                        <Button
                          variant="contained"
                          sx={{ p: 2, px: 3, borderRadius: 3 }}
                          color="primary"
                          className="text-initial text-capitalize"
                          type="submit"
                        >
                          Publish your question
                        </Button>
                        <div className="fs-13">
                          By asking your question, you agree to the{" "}
                          <a
                            href="privacy-policy.html"
                            className="text-color hover-underline"
                          >
                            Privacy Policy.
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* end card */}
                </div>
                {/* end col-lg-8 */}
                <div className="col-lg-4">
                  <div className="sidebar">
                    {recentUsers ? <UserListCard title={'Recent Users'} data={recentUsers} /> : null}
                    {/* end card */}
                    <div className="card card-item p-4">
                      <h3 className="fs-17 pb-3">
                        Step 1: Draft your question
                      </h3>
                      <div className="divider">
                        <span />
                      </div>
                      <p className="fs-14 lh-22 pb-2 pt-3">
                        The community is here to help you with specific coding,
                        algorithm, or language problems.
                      </p>
                      <p className="fs-14 lh-22">
                        Avoid asking opinion-based questions.
                      </p>
                      <div id="accordion" className="generic-accordion pt-4">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <button
                              className="btn btn-link fs-15"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span>
                                <span className="text-color pr-2 fs-16">
                                  1.
                                </span>{" "}
                                Summarize the problem
                              </span>
                              <i className="la la-angle-down collapse-icon" />
                            </button>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet-2 fs-14">
                                <li className="lh-18 text-black-50">
                                  Include details about your goal
                                </li>
                                <li className="lh-18 text-black-50">
                                  Describe expected and actual results
                                </li>
                                <li className="lh-18 text-black-50 mb-0">
                                  Include any error messages
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* end card */}
                        <div className="card">
                          <div className="card-header" id="headingTwo">
                            <button
                              className="btn btn-link collapsed fs-15"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <span>
                                <span className="text-color pr-2 fs-16">
                                  2.
                                </span>{" "}
                                Describe what you’ve tried
                              </span>
                              <i className="la la-angle-down collapse-icon" />
                            </button>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p className="fs-14 lh-22 text-black-50">
                                Show what you’ve tried and tell us what you
                                found (on this site or elsewhere) and why it
                                didn’t meet your needs. You can get better
                                answers when you provide research.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* end card */}
                        <div className="card">
                          <div className="card-header" id="headingThree">
                            <button
                              className="btn btn-link collapsed fs-15"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <span>
                                <span className="text-color pr-2 fs-16">
                                  3.
                                </span>{" "}
                                Show some code
                              </span>
                              <i className="la la-angle-down collapse-icon" />
                            </button>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p className="fs-14 lh-22 text-black-50">
                                When appropriate, share the minimum amount of
                                code others need to reproduce your problem (also
                                called a
                                <a
                                  href="#"
                                  className="text-color hover-underline"
                                >
                                  minimum
                                </a>
                                ,{" "}
                                <a
                                  href="#"
                                  className="text-color hover-underline"
                                >
                                  reproducible example
                                </a>
                                )
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* end card */}
                      </div>
                      {/* end accordion */}
                    </div>
                    {/* end card */}
                    <div id="accordion-two" className="generic-accordion">
                      <div className="card mb-3">
                        <div className="card-header" id="headingFour">
                          <button
                            className="btn btn-link collapsed fs-15"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <span>Have a non-programming question?</span>
                            <i className="la la-angle-down collapse-icon" />
                          </button>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordion-two"
                        >
                          <div className="card-body">
                            <p className="fs-14 lh-22 text-black-50 pb-2">
                              <a
                                className="text-color hover-underline d-block"
                                href="#"
                                target="_blank"
                              >
                                Super user
                              </a>
                              Troubleshooting hardware and software issues
                            </p>
                            <p className="fs-14 lh-22 text-black-50 pb-2">
                              <a
                                className="text-color hover-underline d-block"
                                href="#"
                                target="_blank"
                              >
                                Software engineering
                              </a>
                              For software development methods and process
                              questions
                            </p>
                            <p className="fs-14 lh-22 text-black-50 pb-2">
                              <a
                                className="text-color hover-underline d-block"
                                href="#"
                                target="_blank"
                              >
                                Hardware recommendations
                              </a>
                            </p>
                            <p className="fs-14 lh-22 text-black-50 pb-2">
                              <a
                                className="text-color hover-underline d-block"
                                href="#"
                                target="_blank"
                              >
                                Software recommendations
                              </a>
                            </p>
                            <p className="fs-14 lh-22 text-black-50">
                              Ask questions about the site on{" "}
                              <a
                                className="text-color hover-underline"
                                href="#"
                                target="_blank"
                              >
                                meta
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end card */}
                      <div className="card">
                        <div className="card-header" id="headingFive">
                          <button
                            className="btn btn-link collapsed fs-15"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <span>More helpful links</span>
                            <i className="la la-angle-down collapse-icon" />
                          </button>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordion-two"
                        >
                          <div className="card-body">
                            <p className="fs-14 lh-22 text-black-50 pb-2">
                              Find more information about{" "}
                              <a
                                className="text-color hover-underline"
                                href="#"
                                target="_blank"
                              >
                                how to ask a good question here
                              </a>
                            </p>
                            <p className="fs-14 lh-22 text-black-50">
                              Visit the{" "}
                              <a
                                className="text-color hover-underline"
                                href="#"
                                target="_blank"
                              >
                                help center
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end card */}
                    </div>
                    {/* end accordion */}
                  </div>
                  {/* end sidebar */}
                </div>
                {/* end col-lg-4 */}
              </div>
              {/* end row */}
            </div>
            // <>
            //   <DialogContent className='border rounded-4 p-4 mx-3 mb-3 bg-light'>
            //     <DialogContentText>
            //       To ask your question, please enter your question details here. Our team will update the answers as soon as possible.
            //     </DialogContentText>
            //     <FormControl fullWidth className='mt-3' variant="standard">
            //       <InputLabel id="category-select-label" className='fw-bold'>Choose Category</InputLabel>
            //       <Select
            //         labelId="category-select-label"
            //         id="category-select"
            //         value={formik.values.categoryId}
            //         label="Choose Category"
            //         name='categoryId'
            //         className='fw-bold text-secondary'
            //         onChange={formik.handleChange}
            //       >
            //         <MenuItem value="">
            //           <em>None</em>
            //         </MenuItem>
            //         {categories?.map((category) => {
            //           return <MenuItem value={category?.id}>{category?.name}</MenuItem>
            //         })}
            //       </Select>
            //     </FormControl>
            //     <Divider className='py-2' />
            //     <TextField
            //       autoFocus
            //       margin="dense"
            //       id="title"
            //       label={<h6 className='text-secondary'>Question Title</h6>}
            //       type="text"
            //       placeholder='Ex- What is yuvamanthan? Can I participate?'
            //       fullWidth
            //       variant="standard"
            //       onChange={formik.handleChange}
            //     />
            //     <ReactQuill theme="snow" name='body' value={value} onChange={setValue} placeholder='Describe your question....' />
            //     <br />
            //     <Divider />
            //     <div className='mt-3 d-flex align-items-center'>
            //       <div className="col controls">
            //         <Button onClick={formik.handleSubmit} variant='outlined' className='text-capitalize fw-bold' disabled={formik.isSubmitting ? true : false}>Post Now</Button>
            //         {/* <Button onClick={handleClose} variant='outlined' className='mx-3 text-capitalize fw-bold'>Cancel</Button> */}
            //       </div>
            //       <div className="col brand text-end">
            //         <p className='fs-6'>Powered by <a href="https://www.eksathi.com" target="_blank" className='text-info fw-bolder'>EkSathi</a></p>
            //       </div>

            //     </div>
            //   </DialogContent>
            // </>
          )}
          {/* end container */}
        </section>
        {/* end question-area */}
        {/* ================================
     END QUESTION AREA
  ================================= */}
        {/* ================================
     START CTA AREA
  ================================= */}
        <section className="get-started-area pt-80px pb-50px pattern-bg bg-gray">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">
                EkSathi Q&amp;A communities are different. <br /> Here's how
              </h2>
            </div>
            <div className="row pt-50px">
              <div className="col-lg-4 responsive-column-half">
                <div className="card card-item hover-y text-center">
                  <div className="card-body">
                    <img src="images/bubble.png" alt="bubble" />
                    <h5 className="card-title pt-4 pb-2">
                      Expert communities.
                    </h5>
                    <p className="card-text">
                      This is just a simple text made for this unique and
                      awesome template, you can easily edit it as you want.
                    </p>
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
              </div>
              {/* end col-lg-4 */}
              <div className="col-lg-4 responsive-column-half">
                <div className="card card-item hover-y text-center">
                  <div className="card-body">
                    <img src="images/vote.png" alt="vote" />
                    <h5 className="card-title pt-4 pb-2">
                      The right answer. Right on top.
                    </h5>
                    <p className="card-text">
                      This is just a simple text made for this unique and
                      awesome template, you can easily edit it as you want.
                    </p>
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
              </div>
              {/* end col-lg-4 */}
              <div className="col-lg-4 responsive-column-half">
                <div className="card card-item hover-y text-center">
                  <div className="card-body">
                    <img src="images/check.png" alt="check" />
                    <h5 className="card-title pt-4 pb-2">
                      Share knowledge. Earn trust.
                    </h5>
                    <p className="card-text">
                      This is just a simple text made for this unique and
                      awesome template, you can easily edit it as you want.
                    </p>
                  </div>
                  {/* end card-body */}
                </div>
                {/* end card */}
              </div>
              {/* end col-lg-4 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* ================================
     END CTA AREA
  ================================= */}
      </div>
    </div>
  );
};

export default AskQuestion;
