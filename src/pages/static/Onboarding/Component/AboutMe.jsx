import { Button, Textarea } from "@mui/joy";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "global/context";

function AboutMe({ setTitle }) {
  const { setUserStep, setOnboardingData, OnboardingData } = useGlobalContext();

  const validationSchema = Yup.object().shape({
    aboutYou: Yup.string().required("Tell Me About You is required"),
  });

  const initialvalueabout = `Hello! I am ${OnboardingData?.profileData?.ownername},
                                          I extend a warm welcome to the world of education and training at Our Institute. I represent ${OnboardingData?.profileData?.name}, an institution that is committed to steering towards a radiant and knowledgeable future. As the founder of ${OnboardingData?.profileData?.ownername}, my primary objective is to ignite excellence and talent in education. Our training nurtures progress, empathy, and intellectual curiosity, all working together to shape well-rounded students. Our education is a blend of rich tradition and cutting-edge ideas. Our goal is to empower students not only in their studies but also in their social perspective. We create an environment where students can excel in their areas of interest.`;

  const formik = useFormik({
    initialValues: {
      aboutYou: OnboardingData?.profileData?.aboutYou || initialvalueabout,
    },
    validationSchema,
    onSubmit: (values) => {
      setUserStep(3);

      // Set initialvalueabout into OnboardingData
      setOnboardingData({
        ...OnboardingData,
        profileData: {
          ...OnboardingData?.profileData,
          ...values,
          aboutYou: initialvalueabout,
        },
      });
    },
  });

  useEffect(() => {
    setTitle("About");
  }, []);

  

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Textarea
          placeholder="Share something about your institute…"
          variant="soft"
          minRows={12}
          style={{ width: "100%" }}
          id="aboutYou"
          name="aboutYou"
          onChange={formik.handleChange}
          value={formik.values.aboutYou}
        />

        <div className="text-danger font-weight-bold">
          {formik.touched.aboutYou && formik.errors.aboutYou}
        </div>

        <div className="d-flex align-items-center justify-content-between mt-3">
          <Button
            variant="outlined"
            color="danger"
            onClick={() => {
              setUserStep(3);
            }}
          >
            Back
          </Button>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            disabled={!formik.isValid}
            onClick={() => {
              setUserStep(5);
            }}
          >
            Next
          </Button>
        </div>
      </form>
      
    </>
  );
}

export default AboutMe;
