import { Avatar, IconButton, Stack } from "@mui/joy";
import axios from "axios";
import { useFormik } from "formik";
import { useGlobalContext } from "global/context";
import { Popup } from "layout/Popup";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import * as yup from "yup";

const EditProfile = () => {
  const { userData, setUser, token, apiAuthFormData, api } = useGlobalContext();
  const [user, setCurrentUser] = useState({});
  const [setProfession, profession] = useOutletContext();
  const [avatarList, setAvatarList] = useState([]);
//   const [selectedAvatar, setSelectedAvatar] = useState();
  const [dob , setdob] = useState("")
   useEffect(()=>{
if(user != null){
    setdob(user?.profile?.dob)
}
   },[user])

   function calculateAge(dob) {
    const dobDate = new Date(dob);
    const currentDate = new Date();
  
    let yearsDiff = currentDate.getFullYear() - dobDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - dobDate.getMonth();
    const daysDiff = currentDate.getDate() - dobDate.getDate();
  
    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      yearsDiff--;
    }
  
    return yearsDiff;
  }


  const endpoint =
    process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/";

  const getUser = async () => {
    Popup("loading", "Getting your information");
    try {
      const res = await axios.get(endpoint + `app/user/${userData?.id}`, {
        headers: {
          Authorization: token,
        },
      });
      if (res?.status == 200) {
        Popup();
        setCurrentUser(res?.data);
        setUser({ ...userData, profile: res?.data?.avatar_url });
        console.log("User: ", res?.data);
      }
    } catch (error) {
      Popup("error", "Check your network!");
    }
  };

  const getAvatarList = async () => {
    console.log("Loading avatar list...");
    try {
      const res = await api.get(`/app/utilities/avatars`);
      if (res?.status === 200) {
        console.log("Avatar List: ", res?.data);
        setAvatarList(res?.data?.avatarList);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
    getAvatarList();
  }, []);

  
  let coverlater = `Hello there! I am ${user?.name}, currently a student at ${user?.educations}. I am ${calculateAge(dob)} years old and have a keen interest in [Your Interests or Hobbies].I am an enthusiastic participant on this Q&A platform, diving into the world of [Your Interest Area, like Science, Art, Music, Literature, etc.]. I have a deep passion for [Your Interests] and I am excited to use this platform to expand my knowledge, learn from others, and broaden my horizons.I believe that each person holds a fascinating story, and I am in the process of crafting my own. Sharing a bit about [Your Special Qualities or Achievements] here to give a glimpse of my personal identity.Whether you have questions to ask me, topics to discuss, or just want to connect, feel free to get in touch. I am looking forward to embarking on a new journey here on EkSathi`;

  //Formik
  const publicValidationSchema = yup.object({
    dname: yup.string(),
    location: yup.string().required("Location is required"),
    bio: yup.string().required("About Me is required"),
  });
  const publicFormik = useFormik({
    initialValues: {
      userid: userData?.id,
      profile_pic: "",
      avatar_url: "",
      dname: user?.profile?.display_name,
      location: user?.profile?.location,
      contact: user?.profile?.phone,
      bio: user?.profile?.bio || '',
    },
    enableReinitialize: true,
    // validationSchema: publicValidationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      Popup("loading", "Submitting...");
      try {
        const res = await apiAuthFormData.put(
          `app/user/${user?.email}`,
          values
        );
        console.log(res);
        if (res.status == 200) {
          Popup("Updated.", res.data.message);
          // setRegisteredId(res.data.userId);
          getUser();
        }
      } catch (error) {
        if (error.response.status === 409) {
          console.log(
            "data",
            error.response.data.message,
            error.response.data.desc
          );
        } else {
          Popup("error", error.response.data.message);
        }
      }
    },
  });

  const personalFormik = useFormik({
    initialValues: {
      fname: user?.profile?.first_name,
      mname: user?.profile?.middle_name,
      lname: user?.profile?.last_name,
      dob: moment(user?.profile?.dob).format("YYYY-MM-DD"),
      gender: user?.profile?.gender,
      profession: user?.profile?.profession,
      designation: user?.profile?.designation,
      institute: user?.profile?.institute,
      education: user?.profile?.education,
    },
    enableReinitialize: true,
    // validationSchema: publicValidationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      getUser();
      Popup("loading", "Updating your changes");
      try {
        const res = await api.put(`app/user/personal/${user?.id}`, {
          ...values,
          userid: userData.id,
        });
        console.log("Response: ", res);
        if (res.status == 200) {
          Popup("Updated.", res.data.message);
          // setRegisteredId(res.data.userId);
          setUser({ ...userData, role: personalFormik.values.profession });
          getUser();
        }
      } catch (error) {
        if (error.response.status === 409) {
          console.log(
            "data",
            error.response.data.message,
            error.response.data.desc
          );
        } else {
          Popup("error", error.response.data.message);
        }
      }
    },
  });

  const socialFormik = useFormik({
    initialValues: {
      website: user?.profile?.social_links?.website,
      twitter: user?.profile?.social_links?.twitter,
      facebook: user?.profile?.social_links?.facebook,
      instagram: user?.profile?.social_links?.instagram,
      youtube: user?.profile?.social_links?.youtube,
      vimeo: user?.profile?.social_links?.vimeo,
      github: user?.profile?.social_links?.github,
      linkedin: user?.profile?.social_links?.linkedin,
    },
    enableReinitialize: true,
    // validationSchema: publicValidationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      Popup("loading", "Submitting...");
      try {
        const res = await api.put(`app/user/social/${user?.id}`, {
          ...values,
          userid: userData.id,
        });
        console.log(res);
        if (res.status == 200) {
          Popup("Updated.", res.data.message);
          // setRegisteredId(res.data.userId);
          getUser();
        }
      } catch (error) {
        if (error.response.status === 409) {
          console.log(
            "data",
            error.response.data.message,
            error.response.data.desc
          );
        } else {
          Popup("error", error.response.data.message);
        }
      }
    },
  });

  useEffect(() => {
    setProfession(personalFormik?.values?.profession);
  }, [personalFormik?.values?.profession]);

  return (
    <>
      <div className="user-panel-main-bar px-4">
        <div className="user-panel">
          <div className="bg-gray p-3 rounded-rounded">
            <h3 className="fs-17">Edit your profile</h3>
          </div>
          <form className="pt-35px" onSubmit={publicFormik.handleSubmit}>
            <div className="settings-item">
              <h4 className="fs-14 pb-2 text-gray text-uppercase">
                Public information
              </h4>
              <div className="divider">
                <span />
              </div>
              <div className="row pt-4 align-items-center">
                <div className="col-lg-6">
                  <div className="edit-profile-photo d-flex flex-wrap align-items-center">
                    <img
                      src={
                        publicFormik.values.avatar_url
                          ? publicFormik.values.avatar_url
                          : publicFormik.values.profile_pic
                          ? URL.createObjectURL(publicFormik.values.profile_pic)
                          : user?.avatar_url
                          ? user?.avatar_url
                          : "/images/user.webp"
                      }
                      alt="user avatar"
                      className="profile-img mr-4"
                    />
                    <div>
                      <div className="file-upload-wrap file--upload-wrap">
                        <input
                          type="file"
                          name="files[]"
                          className="multi file-upload-input"
                          onChange={(e) => {
                            if (e.target.files.length) {
                              // generatePreview(e.target.files[0]);
                              publicFormik.setFieldValue(
                                "profile_pic",
                                e.target.files[0]
                              );
                              publicFormik.setFieldValue(
                                "avatar_url",
                                undefined
                              );
                            }
                          }}
                        />
                        <span className="file-upload-text">
                          <i className="la la-photo mr-2" />
                          Upload Photo
                        </span>
                      </div>
                      <p className="fs-14">Maximum file size: 10 MB.</p>
                    </div>
                  </div>
                  {/* end edit-profile-photo */}
                  {avatarList?.length ? (
                    <>
                      <div className="d-flex justify-content-center">
                        <p className="fw-bold rounded border p-2">OR</p>
                      </div>
                      <div className="mb-3">
                        <label className="fs-13 text-black lh-20 fw-medium">
                          Choose a avatar
                        </label>
                        <Stack direction={"row"} flexWrap="wrap">
                          {avatarList?.map((avatar, index) => (
                            <Avatar
                              key={index}
                              className="m-2 hover-bg"
                              src={avatar}
                              style={{
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                publicFormik.setFieldValue(
                                  "avatar_url",
                                  avatar
                                );
                                publicFormik.setFieldValue(
                                  "profile_pic",
                                  undefined
                                );
                              }}
                            />
                          ))}
                        </Stack>
                      </div>
                    </>
                  ) : null}
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Display name <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="text"
                        name="dname"
                        // defaultValue={userData.dname}
                        value={publicFormik.values.dname}
                        onChange={publicFormik.handleChange}
                        error={
                          publicFormik.touched.dname &&
                          Boolean(publicFormik.errors.dname)
                        }
                        helpertext={
                          publicFormik.touched.dname &&
                          publicFormik.errors.dname
                        }
                      />
                      <i className="la la-user input-icon" />
                    </div>
                  </div>
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Location <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="text"
                        name="location"
                        // defaultValue={userData.location}
                        value={publicFormik.values.location}
                        onChange={publicFormik.handleChange}
                        error={
                          publicFormik.touched.location &&
                          Boolean(publicFormik.errors.location)
                        }
                        helpertext={
                          publicFormik.touched.location &&
                          publicFormik.errors.location
                        }
                      />
                      <i className="la la-globe input-icon" />
                    </div>
                  </div>
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="number"
                        name="contact"
                        onChange={publicFormik.handleChange}
                        value={publicFormik.values.contact}
                        error={
                          publicFormik.touched.contact &&
                          Boolean(publicFormik.errors.contact)
                        }
                        helpertext={
                          publicFormik.touched.contact &&
                          publicFormik.errors.contact
                        }
                      />
                      <i className="la la-phone input-icon" />
                    </div>
                  </div>
                  {/* ------ */}
                </div>

                {/* end col-lg-6 */}

                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="fs-15 text-black lh-20 fw-medium">
                      About me <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <textarea
                        className="form-control form--control user-text-editor"
                        rows={10}
                        cols={40}
                        name="bio"
                        placeholder="Write about yourself . . "
                        value={publicFormik?.values?.bio || coverlater}

                        onChange={publicFormik.handleChange}
                        onBlur={publicFormik.handleBlur}
                        error={
                          publicFormik.touched.bio &&
                          Boolean(publicFormik.errors.bio)
                        }
                        helpertext={
                          publicFormik.touched.bio && publicFormik.errors.bio
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* end col-lg-12 */}
                <div className="col-lg-12">
                  <div className="submit-btn-box pt-3">
                    <button className="btn theme-btn rounded" type="submit">
                      Save changes
                    </button>
                  </div>
                </div>
                {/* end col-lg-12 */}
              </div>
              {/* end row */}
            </div>
            {/* end settings-item */}
          </form>
          <form className="pt-35px" onSubmit={personalFormik.handleSubmit}>
            <div className="settings-item">
              <h4 className="fs-14 pb-2 text-gray text-uppercase">
                Personal Information
              </h4>
              <div className="divider">
                <span />
              </div>
              <div className="row pt-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="text"
                        name="fname"
                        // defaultValue={userData?.first_name}
                        onChange={personalFormik.handleChange}
                        value={personalFormik.values.fname}
                        error={
                          personalFormik.touched.fname &&
                          Boolean(personalFormik.errors.fname)
                        }
                        helpertext={
                          personalFormik.touched.fname &&
                          personalFormik.errors.fname
                        }
                      />
                      <i className="la la-user input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-4 col-md-6 col-sm-12 */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Middle Name <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="text"
                        name="mname"
                        onChange={personalFormik.handleChange}
                        // defaultValue={userData?.middle_name}
                        value={personalFormik.values.mname}
                        error={
                          personalFormik.touched.mname &&
                          Boolean(personalFormik.errors.mname)
                        }
                        helpertext={
                          personalFormik.touched.mname &&
                          personalFormik.errors.mname
                        }
                      />
                      <i className="la la-user input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-4 col-md-6 col-sm-12 */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="text"
                        name="lname"
                        onChange={personalFormik.handleChange}
                        // defaultValue={userData?.last_name}
                        value={personalFormik.values.lname}
                        error={
                          personalFormik.touched.lname &&
                          Boolean(personalFormik.errors.lname)
                        }
                        helpertext={
                          personalFormik.touched.lname &&
                          personalFormik.errors.lname
                        }
                      />
                      <i className="la la-user input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-4 col-md-6 col-sm-12 */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Date of birth <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="date"
                        name="dob"
                        onChange={personalFormik.handleChange}
                        value={personalFormik.values.dob}
                        // defaultValue={userData?.dob}
                        error={
                          personalFormik.touched.dob &&
                          Boolean(personalFormik.errors.dob)
                        }
                        helpertext={
                          personalFormik.touched.dob &&
                          personalFormik.errors.dob
                        }
                      />
                      {/* <i className="la la-calendar-day input-icon" /> */}
                    </div>
                  </div>
                </div>
                {/* end col-lg-4 col-md-6 col-sm-12 */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      {/* <input
                                                className="form-control form--control pl-40px"
                                                type="text"
                                                name="gender"
                                                onChange={personalFormik.handleChange}
                                                // defaultValue={userData?.gender}
                                                value={personalFormik.values.gender}
                                                error={
                                                    personalFormik.touched.gender && Boolean(personalFormik.errors.gender)
                                                }
                                                helpertext={
                                                    personalFormik.touched.gender && personalFormik.errors.gender
                                                }
                                            /> */}
                      <select
                        class="form-select form-select-lg mb-3 form-control form--control pl-40px"
                        aria-label=".form-select-lg example"
                        name="gender"
                        onChange={personalFormik.handleChange}
                        // defaultValue={userData?.gender}
                        value={personalFormik.values.gender}
                        error={
                          personalFormik.touched.gender &&
                          Boolean(personalFormik.errors.gender)
                        }
                        helpertext={
                          personalFormik.touched.gender &&
                          personalFormik.errors.gender
                        }
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <i className="la la-genderless input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-4 col-md-6 col-sm-12 */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Profession <span className="text-danger">*</span>
                    </label>
                    <div className="form-group">
                      {/* <input
                                                className="form-control form--control pl-40px"
                                                type="text"
                                                name="profession"
                                                onChange={personalFormik.handleChange}
                                                // defaultValue={userData?.profession}
                                                value={personalFormik.values.profession}
                                                error={
                                                    personalFormik.touched.profession && Boolean(personalFormik.errors.profession)
                                                }
                                                helpertext={
                                                    personalFormik.touched.profession && personalFormik.errors.profession
                                                }
                                            /> */}
                      <select
                        // disabled
                        class="form-select form-select-lg mb-3 form-control form--control pl-40px"
                        aria-label=".form-select-lg example"
                        name="profession"
                        onChange={personalFormik.handleChange}
                        // defaultValue={userData?.profession}
                        value={personalFormik.values.profession}
                        error={
                          personalFormik.touched.profession &&
                          Boolean(personalFormik.errors.profession)
                        }
                        helpertext={
                          personalFormik.touched.profession &&
                          personalFormik.errors.profession
                        }
                      >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="professional">Professional</option>
                      </select>
                      <i className="la la-user-tie input-icon" />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="input-box">
                                        <label className="fs-13 text-black lh-20 fw-medium">
                                            Designation
                                        </label>
                                        <div className="form-group">
                                            <input
                                                className="form-control form--control pl-40px"
                                                type="text"
                                                name="designation"
                                                onChange={personalFormik.handleChange}
                                                // defaultValue={userData?.designation}
                                                value={personalFormik.values.designation}
                                                error={
                                                    personalFormik.touched.designation && Boolean(personalFormik.errors.designation)
                                                }
                                                helpertext={
                                                    personalFormik.touched.designation && personalFormik.errors.designation
                                                }
                                            />
                                            <span className="la la-user-tie input-icon" />
                                        </div>
                                    </div>
                                </div> */}
                {/* --------- */}

                {profession === "student" && (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="input-box">
                      <label className="fs-13 text-black lh-20 fw-medium">
                        Institute/School Name{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input
                          className="form-control form--control pl-40px"
                          type="text"
                          name="institute"
                          onChange={personalFormik.handleChange}
                          // defaultValue={userData?.institute}
                          value={personalFormik.values.institute}
                          error={
                            personalFormik.touched.institute &&
                            Boolean(personalFormik.errors.institute)
                          }
                          helpertext={
                            personalFormik.touched.institute &&
                            personalFormik.errors.institute
                          }
                        />
                        <i className="la la-user-tie input-icon" />
                      </div>
                    </div>
                  </div>
                )}
                {/* -------- */}
                {profession === "student" && (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="input-box">
                      <label className="fs-13 text-black lh-20 fw-medium">
                        Highest Education <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        {/* <input
                                                    className="form-control form--control pl-40px"
                                                    type="text"
                                                    name="education"
                                                    onChange={personalFormik.handleChange}
                                                    // defaultValue={userData?.education}
                                                    value={personalFormik.values.education}
                                                    error={
                                                        personalFormik.touched.education && Boolean(personalFormik.errors.education)
                                                    }
                                                    helpertext={
                                                        personalFormik.touched.education && personalFormik.errors.education
                                                    }
                                                /> */}
                        <select
                          class="form-select form-select-lg mb-3 form-control form--control pl-40px"
                          aria-label=".form-select-lg example"
                          id="education"
                          name="education"
                          value={personalFormik.values.education}
                          // label="Age"
                          onChange={personalFormik.handleChange}
                          error={
                            personalFormik.touched.education &&
                            Boolean(personalFormik.errors.education)
                          }
                          helpertext={
                            personalFormik.touched.education &&
                            personalFormik.errors.education
                          }
                        >
                          <option value={"Below 8th Standard"}>
                            Below 8th Standard
                          </option>
                          <option value={"8th Standard"}>8th Standard</option>
                          <option value={"9th Standard"}>9th Standard</option>
                          <option value={"High School"}>High School</option>
                          <option value={"Intermediate"}>Intermediate</option>
                          <option value={"Diploma"}>Diploma</option>
                          <option value={"Polytechnic"}>Polytechnic</option>
                          <option value={"Graduation"}>Graduation</option>
                          <option value={"Post Graduation"}>
                            Post Graduation
                          </option>
                          <option value={"Doctorate"}>Doctorate</option>
                        </select>
                        <i className="la la-user-tie input-icon" />
                      </div>
                    </div>
                  </div>
                )}
                {/* ------ */}
                {/* end col-lg-4 col-md-6 col-sm-12 */}
                <div className="col-lg-12">
                  <div className="submit-btn-box pt-3">
                    <button className="btn theme-btn" type="submit">
                      Save changes
                    </button>
                  </div>
                </div>
                {/* end col-lg-12 */}
              </div>
              {/* end row */}
            </div>
            {/* end settings-item */}
          </form>
          <form className="pt-35px" onSubmit={socialFormik.handleSubmit}>
            <div className="settings-item">
              <h4 className="fs-14 pb-2 text-gray text-uppercase">
                Social Information
              </h4>
              <div className="divider">
                <span />
              </div>
              <div className="row pt-4">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Website link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="website"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.website}
                        value={socialFormik.values.website}
                        error={
                          socialFormik.touched.website &&
                          Boolean(socialFormik.errors.website)
                        }
                        helpertext={
                          socialFormik.touched.website &&
                          socialFormik.errors.website
                        }
                      />
                      <i className="la la-link input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Twitter link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="twitter"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.twitter}
                        value={socialFormik.values.twitter}
                        error={
                          socialFormik.touched.twitter &&
                          Boolean(socialFormik.errors.twitter)
                        }
                        helpertext={
                          socialFormik.touched.twitter &&
                          socialFormik.errors.twitter
                        }
                      />
                      <i className="la la-twitter input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Facebook link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="facebook"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.facebook}
                        value={socialFormik.values.facebook}
                        error={
                          socialFormik.touched.facebook &&
                          Boolean(socialFormik.errors.facebook)
                        }
                        helpertext={
                          socialFormik.touched.facebook &&
                          socialFormik.errors.facebook
                        }
                      />
                      <i className="la la-facebook input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      instagram link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="instagram"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.instagram}
                        value={socialFormik.values.instagram}
                        error={
                          socialFormik.touched.instagram &&
                          Boolean(socialFormik.errors.instagram)
                        }
                        helpertext={
                          socialFormik.touched.instagram &&
                          socialFormik.errors.instagram
                        }
                      />
                      <i className="la la-instagram input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Youtube link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="youtube"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.youtube}
                        value={socialFormik.values.youtube}
                        error={
                          socialFormik.touched.youtube &&
                          Boolean(socialFormik.errors.youtube)
                        }
                        helpertext={
                          socialFormik.touched.youtube &&
                          socialFormik.errors.youtube
                        }
                      />
                      <i className="la la-youtube input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      Vimeo link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="vimeo"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.vimeo}
                        value={socialFormik.values.vimeo}
                        error={
                          socialFormik.touched.vimeo &&
                          Boolean(socialFormik.errors.vimeo)
                        }
                        helpertext={
                          socialFormik.touched.vimeo &&
                          socialFormik.errors.vimeo
                        }
                      />
                      <i className="la la-vimeo input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      GitHub link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="github"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.github}
                        value={socialFormik.values.github}
                        error={
                          socialFormik.touched.github &&
                          Boolean(socialFormik.errors.github)
                        }
                        helpertext={
                          socialFormik.touched.github &&
                          socialFormik.errors.github
                        }
                      />
                      <i className="la la-github input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="fs-13 text-black lh-20 fw-medium">
                      LinkedIn link
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control form--control pl-40px"
                        type="url"
                        name="linkedin"
                        onChange={socialFormik.handleChange}
                        // defaultValue={userData?.linkedin}
                        value={socialFormik.values.linkedin}
                        error={
                          socialFormik.touched.linkedin &&
                          Boolean(socialFormik.errors.linkedin)
                        }
                        helpertext={
                          socialFormik.touched.linkedin &&
                          socialFormik.errors.linkedin
                        }
                      />
                      <i className="la la-linkedin input-icon" />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-12">
                  <div className="submit-btn-box pt-3">
                    <button className="btn theme-btn" type="submit">
                      Save changes
                    </button>
                  </div>
                </div>
                {/* end col-lg-12 */}
              </div>
              {/* end row */}
            </div>
            {/* end settings-item */}
          </form>
        </div>
        {/* end user-panel */}
      </div>
    </>
  );
};

export default EditProfile;
