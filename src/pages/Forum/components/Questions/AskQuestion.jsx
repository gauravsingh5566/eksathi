import * as React from "react";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReactQuill from "react-quill";
import Button from '@mui/joy/Button';
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import { useGlobalContext } from "global/context";
import { Popup, pop2 } from "layout/Popup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Autocomplete,
  FormLabel,
  Link,
  Modal,
  ModalDialog,
  Stack,
  Typography,
  createFilterOptions,
} from "@mui/joy";
import Input from "@mui/joy/Input";
// Multile Select
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import LoginPopup from "components/Modals/LoginPopup";
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

export default function AskQuestion({ open, handleClose }) {
  const [value, setValue] = React.useState("");
  const [addCategoryModel, setAddCategoryModel] = React.useState(false);
  const [newCategory, setNewCategory] = React.useState();
  const [newCategoryId, setNewCategoryId] = React.useState();
  const { userData, setAuth, api, categories, getCategories } =
    useGlobalContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      categoryId: null,
    },
    onSubmit: async (values, action) => {
      values = {
        ...values,
        body: value,
        userId: userData?.id,
        email: userData?.email,
      };
      console.log("Submiting Question: ", { values });
      console.log("UserData: ", userData);
      try {
        const res = await api.post(`/app/question`, values);
        if (res.status === 200) {
          console.log("Success: ", res);
          handleClose();
          navigate(`/questions/${res?.data?.slug}`);
        }
      } catch (error) {
        // handleClose();
        console.log(error.response.data.message);
        if (error?.response?.status === 401) {
          setAuth(true);
        }
      }
    },
  });

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("app/categories", { name: newCategory });
      if (res?.status === 201) {
        setNewCategoryId(res?.data?.id);
        formik.values.categoryId = res?.data?.id;
        getCategories();
        Popup(res?.data?.message);
        setAddCategoryModel(false);
      }
    } catch (error) {
      console.log(error.response.data.message);
      Popup(error.response.data.message);
    }
  };

  const getTags = async (id) => {
    try {
      const res = await api.get(`app/tags?id=${id}`);
      if (res?.status === 200) {
        console.log(`Tags: ${res}`);
        setTagsArray(res?.data?.tags);
      }
    } catch (error) {
      console.log(` Tags Error ${error}`);
    }
  };

  // Multi Select
  const theme = useTheme();
  const [tags, setTags] = React.useState([]);
  const [tagsArray, setTagsArray] = useState([]);
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

  const AddCategory = () => {
    <Modal open={addCategoryModel} onClose={() => setAddCategoryModel(false)}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        sx={{ maxWidth: 500 }}
      >
        <Typography id="basic-modal-dialog-title" component="h2">
          Create a category
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setAddCategoryModel(false);
          }}
        >
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Category Name</FormLabel>
              <Input autoFocus required />
            </FormControl>
            {/* <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input required />
                        </FormControl> */}
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>;
  };

  const [selectedTags, setSelectedTags] = useState([]);

  const filter = createFilterOptions();

  const handleTagInputChange = (event, newValue) => {
    if (newValue && newValue.inputValue) {
      const newTag = {
        id: selectedTags.length + 1, // Generate a unique ID for the new tag
        name: newValue.inputValue,
      };

      setSelectedTags((prevTags) => [...prevTags, newTag]);
    } else {
      setSelectedTags(newValue || []);
    }
  };

  const handleDelete = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t.id !== tag.id));
  };

  return (
    <div className=" rounded-4" >
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="border ">
          <DialogContentText>
            <h5 className="mb-1">
              <b>Ask Question</b>
            </h5>
            <p className="fs-14 mb-2">
              To ask your question, please enter your question details here.
              Experts on eksathi platform will update the answers as soon as
              possible.
            </p>
          </DialogContentText>
          {addCategoryModel ? (
            <form className="d-flex align-items-center">
              <TextField
                autoFocus
                margin="dense"
                id="addCategory"
                // label={<h6 className='text-secondary'>Add Category</h6>}
                type="text"
                placeholder="Add a new category..."
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                fullWidth
                size="small"
              />
              <Button
                type="submit"
                variant="outlined"
                className="mx-1"
                onClick={handleCreateCategory}
              >
                Add
              </Button>
              <Button
                variant="outlined"
                className="mx-1"
                onClick={() => setAddCategoryModel(false)}
              >
                Cancel
              </Button>
            </form>
          ) : (
            <FormControl fullWidth className="mt-3 mb-3">
              <InputLabel id="category-select-label">
                Choose Category
              </InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                style={{ borderRadius: "10px",border: "none"  }}
                value={formik.values.categoryId}
                label="Choose Category"
                name="categoryId"
                onChange={(e) => {
                  formik.handleChange(e);
                  console.log("category ID: ", formik.values.categoryId);
                  let categoryId = formik.values.categoryId;
                  getTags(categoryId);
                }}
              >
                <MenuItem value="">Select a Category</MenuItem>
                {categories?.map((category) => {
                  return (
                    <MenuItem value={category?.id}>{category?.name}</MenuItem>
                  );
                })}
                <MenuItem
                  value=""
                  onClick={() => {
                    setAddCategoryModel(true);
                  }}
                >
                  Add a New Category
                </MenuItem>
              </Select>
            </FormControl>
          )}

          <Input
            autoFocus
            margin="dense"
            id="title"
            className="shadow border-0 "
            label={<h6 className="text-secondary">Question Title</h6>}
            type="text"
            placeholder="Question Title"
            fullWidth
            onChange={formik.handleChange}
            sx={{ height: "55px" , marginBottom:"-10px",    '--Input-focusedInset': 'var(--any, )',
            '--Input-focusedThickness': '0.25rem',
            '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
            '&::before': {
              transition: 'box-shadow .15s ease-in-out',
            },
            '&:focus-within': {
              borderColor: '#86b7fe',
            }, }} // Increase the height by adding a custom sx prop
          />
          <br />
          {/* <FormControl fullWidth className='mt-3'>
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
                                            <Chip key={value.id} label={value.name} onDelete={() => handleDelete(value)} />
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
                                        <Chip key={value.id} label={value.name} onDelete={() => handleDelete(value)} />
                                    ))}
                                </Box>
                            }}
                            MenuProps={MenuProps}
                        >
                            {tagsArray?.map(
                                (tag, tagIndex) => (
                                    <MenuItem
                                        key={tagIndex}
                                        value={{ id: tag?.id, name: tag?.tag }}
                                        style={getStyles(tag?.tag, tags, theme)}
                                    >
                                        {tag?.tag}
                                    </MenuItem>
                                )
                            )}
                        </Select>
                    </FormControl> */}

          {/* <Box>
                        <Autocomplete
                            multiple
                            id="tags-input"
                            options={tags}
                            getOptionLabel={(tag) => tag.name}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);

                                if (params.inputValue !== '') {
                                    filtered.push({
                                        inputValue: params.inputValue,
                                        name: `Add "${params.inputValue}"`,
                                    });
                                }

                                return filtered;
                            }}
                            onChange={handleTagInputChange}
                            renderTags={(value, getTagProps) =>
                                value.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag.name}
                                        {...getTagProps({ index })}
                                        onDelete={() => handleDelete(tag)}
                                    />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField {...params} label="Select Tags" variant="outlined" />
                            )}
                        />
                    </Box>
                    <br /> */}
          <ReactQuill
            theme="snow"
            name="body"
            style={{ height: 200  }}
            value={value}
            onChange={setValue}
            placeholder="Describe your question...."
            className="mb-3 d-block"
          />
          <div className="mt-4 d-flex align-items-center">
            <Button
              onClick={formik.handleSubmit}
              color="success"
              variant="soft"
              className="text-capitalize fw-bold rouned"
              disabled={
                formik.isSubmitting ||
                !formik.values.title ||
                !value ||
                value === "<p><br></p>" ||
                !formik.values.categoryId
                  ? true
                  : false
              }
            >
              Post Now
            </Button>
            <Button
              onClick={handleClose}
              variant="soft"
            //   color="error"
              color="warning"
              className="ml-2 text-capitalize fw-bold rouned"
            >
              Cancel
            </Button>
            {/* <div className="col brand text-end">
                            <p className='fs-6'>Powered by <a href="https://www.eksathi.com" target="_blank" className='text-info fw-bolder'>EkSathi</a></p>
                        </div> */}
          </div>
        </DialogContent>
        <LoginPopup />
        {/* <AddCategory/> */}
      </Dialog>
    </div>
  );
}
