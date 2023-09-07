import React, { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { Avatar, Button } from "@mui/joy";
import GrowthGraph from "./GrowthGraph";

const Growth = () => {

  const [showBox , setShowBox] =  useState("")

  return (
    <>
      <div className="container">
        <div className="mb-5"></div>
        <div className="p-2 mb-5 mt-2 ">
          <div className="d-flex justify-content-center w-100  flex-wrap ">
          <div className="p-2 ">
              <Card 
              className="border-0 shadow "
              
              onClick={ ()=> setShowBox("user")}
                variant="outlined"
                orientation="horizontal"
                sx={{
                  width: 320,
                  "&:hover": {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                    cursor: "pointer",
                    backgroundColor:"#d7d7d7",
                  },
                }}
              >
                <div className="icon-element icon-element-lg  shadow-sm mx-auto a">
                  <Avatar
                    alt="Remy Sharp"
                    className="m-auto"
                    src="https://img.freepik.com/free-vector/facebook-concept-with-avatars_23-2147845075.jpg?w=826&t=st=1688379757~exp=1688380357~hmac=5f03c2e459ef4701ff9ee6486e22cbc5ed22bc53ab00d531e18346aa22e40009"
                    size="lg"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <CardContent>
                  <Typography
                    level="h2"
                    fontSize="lg"
                    id="card-description"
                    className=" d-flex align-items-center justify-content-center  mx-auto m-auto"
                  >
                    User
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="p-2 ">
              <Card
               className="border-0 shadow "
               onClick={ ()=> setShowBox("student")}
                variant="outlined"
                orientation="horizontal"
                sx={{
                  width: 320,
                  "&:hover": {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                    cursor: "pointer",
                    backgroundColor:"#d7d7d7",
                  },
                }}
              >
                <div className="icon-element icon-element-lg  shadow-sm mx-auto a">
                  <Avatar
                    alt="Remy Sharp"
                    className="m-auto"
                    src="https://img.freepik.com/free-vector/boy-with-empty-board_1308-82417.jpg?w=740&t=st=1688379621~exp=1688380221~hmac=6734b9c49e1ebc227e0566f5704cc5f6b6919757275aee483cb6211eccf04130"
                    size="lg"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <CardContent>
                  <Typography
                    level="h2"
                    fontSize="lg"
                    id="card-description"
                    className=" d-flex align-items-center justify-content-center  mx-auto m-auto"
                  >
                    Student
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="d-flex justify-content-center w-100  flex-wrap">
            <div className="p-2 ">
              <Card
               className="border-0 shadow "

               onClick={ ()=> setShowBox("teacher")}
                variant="outlined"
                orientation="horizontal"
                sx={{
                  width: 320,
                  "&:hover": {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                    cursor: "pointer",
                    backgroundColor:"#d7d7d7",
                  },
                }}
              >
                <div className="icon-element icon-element-lg  shadow-sm mx-auto a">
                  <Avatar
                    alt="Remy Sharp"
                    className="m-auto"
                    src="https://img.freepik.com/free-vector/man-teacher-classroom_24877-50508.jpg?w=826&t=st=1688379510~exp=1688380110~hmac=608705819ba9ab3de214a08689ad3cb283de394d61e31ff4aa159808d3308815"
                    size="lg"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <CardContent>
                  <Typography
                    level="h2"
                    fontSize="lg"
                    id="card-description"
                    className=" d-flex align-items-center justify-content-center  mx-auto m-auto"
                  >
                    Teacher
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="p-2 ">
              <Card
               className="border-0 shadow "

               onClick={ ()=> setShowBox("proffesional")}
                variant="outlined"
                orientation="horizontal"
                sx={{
                  width: 320,
                  "&:hover": {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                    backgroundColor:"#d7d7d7",
                    cursor: "pointer"
                  },
                }}
              >
                <div className="icon-element icon-element-lg  shadow-sm mx-auto a">
                  <Avatar
                    alt="Remy Sharp"
                    className="m-auto"
                    src="https://img.freepik.com/free-vector/businessman-avatar-character_24877-57866.jpg?w=826&t=st=1688379572~exp=1688380172~hmac=ae7cde96129bb4a3ab3766bb03637e365dc319511cff026f125c28d5bf9d55bf"
                    size="lg"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <CardContent>
                  <Typography
                    level="h2"
                    fontSize="lg"
                    id="card-description"
                    className=" d-flex align-items-center justify-content-center  mx-auto m-auto"
                  >
                    Professional
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      <div className="mb-3 p-2">
        <div hidden={showBox !== "user"} className="p-2 ">
          <Card
            variant="outlined"
            className="border-0 shadow "

            orientation="horizontal"
            sx={{
              width: "100%",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <CardContent>
              <h4 className="mb-2 font-weight-bold"> Users:</h4>
              <li>
                Registered users have completed the registration process on your
                website.
              </li>
              <li>After registration, they have the option to log in.</li>
              <li>Registered users have more functionality than visitors.</li>
              <li>They can browse the categories and view their content.</li>
              <li className="">
                Registered users can like, share, and comment on posts.
              </li>
    
              <li>
                Visitors come to your website without registration or login.
              </li>
              <li>They have access to the public content on your website.</li>
              <li>
                Visitors can browse the categories and view their content.
              </li>
              <li>
                Visitors have limited functionality, such as being unable to
                like or share posts or leave comments.
              </li>
            </CardContent>
          </Card>
        </div>
        <div hidden={showBox !== "student"} className="p-2">
          <Card
               className="border-0 shadow "
          
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <CardContent>
              <h4 className="mb-2 font-weight-bold">Students</h4>
              <li>
                Students are a specific user type on your website, typically
                representing individuals who are enrolled in educational
                institutions or taking courses.
              </li>
              <li>
                Students have the option to register on your website using their
                student credentials or by creating a separate student account.
              </li>
              <li>
                Once registered and logged in, students gain access to
                additional features and content tailored to their educational
                needs.
              </li>
              <li>
                Students can browse specific categories related to their courses
                or subjects of interest.
              </li>
              <li className=" ">
                They can view course materials, lecture notes, assignments, and
                other educational resources within the designated categories.
              </li>

              <li>
                Students may have the ability to participate in online
                discussions or forums related to their courses or academic
                topics.
              </li>
              <li>
                They can track their progress, view grades, and receive
                notifications or updates related to their enrolled courses.
              </li>
              <li>
                Students might be able to interact with instructors, ask
                questions, or submit assignments through the website.
              </li>
              <li>
                Some websites may also provide features like personalized study
                plans, educational resources, or practice quizzes to assist
                students in their learning journey.
              </li>
            </CardContent>
          </Card>
        </div>
        <div hidden={showBox !== "teacher"} className="p-2">
          <Card
               className="border-0 shadow "

            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <CardContent>
              <h4 className="mb-2 font-weight-bold">Teachers</h4>
              <li>
                Teachers are a specific user type on your website, representing
                individuals who are educators or instructors.
              </li>
              <li>
                Teachers can register on your website using their teaching
                credentials or by creating a separate teacher account.
              </li>
              <li>
                Once registered and logged in, teachers gain access to features
                and tools tailored to their role as educators.
              </li>
              <li>
                Teachers can create and manage their own categories or courses
                on the website.
              </li>
              <li className=" ">
                They have the ability to upload and organize course materials,
                lecture notes, assignments, and other educational resources
                within their designated.
              </li>

              <li>
                Teachers can interact with students, provide guidance, and
                answer questions through online discussions, forums, or
                messaging systems.
              </li>
              <li>
                They can track student progress, review and grade assignments or
                assessments submitted by students.
              </li>
              <li>
                Teachers may have the ability to create and manage assessments,
                quizzes, or exams for their courses.
              </li>
              <li>
                They can provide feedback and communicate with students
                regarding their academic performance.
              </li>
            </CardContent>
          </Card>
        </div>
        <div hidden={showBox !== "proffesional"} className="p-2">
          <Card
               className="border-0 shadow "

            variant="outlined"
            orientation="horizontal"
            sx={{
              width: "100%",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <CardContent>
              <h4 className="mb-2 font-weight-bold">Professionals</h4>
              <li>
                Professionals are a versatile user type on your website,
                representing individuals who can be teachers, students, or users
                engaging in various roles.
              </li>
              <li>
                Professionals have the flexibility to choose their role based on
                their needs and interests.
              </li>
              <li>
                They can register on your website and select their desired user
                type, such as teacher, student, or any other relevant
                designation.
              </li>
              <li>
                Once registered and logged in, professionals gain access to
                features and functionalities based on their selected role.
              </li>
              <li className="">
                As a teacher, professionals can create and manage courses,
                upload educational materials, interact with students, and track
                their progress.
              </li>
             
              <li>
                As a student, professionals can enroll in courses, access
                educational resources, participate in discussions, submit
                assignments, and track their own progress.
              </li>
              <li>
                Professionals can also explore other user roles or categories on
                the website and engage with their respective functionalities.
              </li>
              <li>
                They may have access to additional features that cater to
                professional development, career resources, or networking
                opportunities.
              </li>
              <li>
                Professionals can customize their profile, update their
                credentials, and showcase their expertise or achievements.
              </li>
            </CardContent>
          </Card>
        </div>
      </div>
      <GrowthGraph/>

     
      </div>
    </>
  );
};

export default Growth;
