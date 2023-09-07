import React from "react";
import Auth from "../pages/auth/Auth";
import Static from "../pages/static/Static";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/static/Home";
import Contact from "../pages/static/Contact/Contact";
import About from "../pages/static/About/About";
import Blogs from "../pages/static/Blogs";
import BlogDetail from "../pages/static/Blogs/BlogDetail";
import AllQuestion from "../pages/post/question/AllQuestion";
import AskQuestion from "../pages/post/question/AskQuestion";
import QuestionDetail from "pages/post/question/QuestionDetail";
import { Category, Message } from "@mui/icons-material";
import RecoverPassword from "pages/auth/RecoverPassword";
import Profile from "pages/user/profile/Profile";
import Setting from "pages/user/setting/Setting";
import PublicProfile from "pages/user/profile/PublicProfile";
import Activity from "pages/user/profile/tabs/Activity";
import ProfileTab from "pages/user/profile/tabs/ProfileTab";
import EditProfile from "pages/user/setting/EditProfile";
import DeleteAccount from "pages/user/setting/DeleteAccount";
import ChangePassword from "pages/user/setting/ChangePassword";
import EmailSetting from "pages/user/setting/EmailSetting";
import PrivacySetting from "pages/user/setting/PrivacySetting";
import Jobprofile from "pages/user/setting/Jobprofile";
import UserPage from "pages/user/users/user/UserPage";
import UserProfileTab from "pages/user/users/user/tabs/UserProfileTab";
import UserActivityTab from "pages/user/users/user/tabs/UserActivityTab";
import { Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import Users from "pages/user/users/Users";
import AllTags from "pages/post/tags/AllTags";
import SearchedQuestions from "pages/post/question/SearchedQuestions";
import Forum from "pages/Forum/Forum";
import ResetPassword from "pages/auth/ResetPassword";
import QuestionsTab from "pages/user/profile/tabs/QuestionsTab";
import AnswersTab from "pages/user/profile/tabs/AnswersTab";
import ConnectionRequest from "pages/user/profile/tabs/ConnectionTab";
import ConnectionTab from "pages/user/profile/tabs/ConnectionTab";
import UsersContainer from "pages/user/profile/UsersContainer";
import SingleQuestion from "pages/Forum/components/Questions/SingleQuestion";
import AllQuestions from "pages/Forum/components/Questions/AllQuestions";
import SingleForumPage from "pages/Forum/SingleForumPage";
import Team from "pages/static/Team/Team";
import Careers from "pages/static/Careers/Careers";
import PostJob from "pages/static/Careers/PostJob";
import ApplyJob from "pages/static/Careers/ApplyJob";
import ExpertsContainer from "pages/user/profile/ExpertsContainer";
import ViewJobApplication from "pages/static/Careers/ViewJobApplication";
import TermsOfService from "pages/static/TermsAndConditions/Termsofservice";
import CareersDashboard from "pages/static/Careers/CareersDashboard";
import ProfilePage from "pages/static/Profile/ProfilePage";
import Messages from "pages/static/Careers/components/Messages";
import InstituteDashboard from "pages/static/Institute/InstituteDashboard";
import Notifications from "pages/static/Careers/Notifications";

import Onboarding from "pages/static/Institute/Onboarding";
// import InstituteDashboard from "pages/static/Institute/InstituteProfile";
import LoginInstitute from "pages/static/Institute/LoginInstitute";
import SignInstitute from "pages/static/Institute/SignInstitute";
import PopUpMessage from "pages/static/Careers/components/MessageComponents/PopUpMessage";
import GrowthGraph from "pages/static/Growth/GrowthGraph";
import PrivacyPolicy from "pages/static/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "pages/static/CookiePolicy/CookiePolicy";
import Growth from "pages/static/Growth/Growth";
import Dummy from "pages/static/Growth/Dummy";
import NotFound from "pages/static/Error/NotFound";
import UserProfile from "pages/static/Profile/UserProfile";
import AcademicProfile from "pages/user/setting/AcademicProfile";
import ProfileSettings from "pages/user/setting/ProfileSettings";
import ProfessionalProfile from "pages/user/setting/ProfessionalProfile";
import ProfileContainer from "pages/static/Profile/ProfileContainer";
import PublicProfileContainer from "pages/static/Profile/PublicProfileContainer";
import ResumeMaker from "pages/static/Profile/components/Resume/ResumeMaker";
import OnboardingUser from "pages/static/Onboarding/OnboardingUser";
import ApiKeyGenerator from "pages/static/Institute/Component/ApiKeyGenerator";
import InstituteProfile from "pages/static/Institute/InstituteProfile";
import Departments from "pages/static/Institute/Component/Departments";
import Jobs from "pages/static/Institute/ManageJob/Jobs";
import JobsPost from "pages/static/Institute/ManageJob/JobsPost";
import Applicants from "pages/static/Institute/ManageJob/Applicants";
import Application from "pages/static/Institute/ManageJob/Application";
import Acquisition from "pages/static/Institute/ManageJob/Acquisition";
import InstituteParent from "pages/static/Institute/InstituteParent";
import AuthSuccess from "pages/auth/components/AuthSuccess";
import EmployerCoC from "pages/static/Legal/EmployerCoC";
import Teachers from "pages/static/Institute/Component/Teachers";
import PostJobs from "pages/static/Institute/PostJobs/PostJobs";
import Applications from "pages/static/Institute/ManageJob/Components/Applications";
import JobDetails from "pages/static/Careers/components/JobDetails";
import AppliCationDetail from "pages/static/Institute/ManageJob/Components/AppliCationDetail";
import AccountSuspended from "pages/static/Institute/Component/AccountSuspended";
import ApplicationData from "pages/static/Institute/ManageJob/Components/ApplicationData";
import EksathiPdfViewer from "pages/utilities/EksathiPdfViewer";
import MainOnboarding from "pages/static/Onboarding/MainOnboarding";
import Institutes from "pages/static/Institute/Institutes";
import InstitutePasswordRecover from "pages/static/Institute/InstitutePasswordRecover";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/404" element={<NotFound />} />

      {/* Home Routes  */}
      <Route path="/" element={<Static />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path='/users' element={<Users/>} /> */}
        <Route path="/search" element={<SearchedQuestions />} />
      </Route>

      {/* Posts  */}
      <Route path="/requests" element={<AllQuestion />} />
      <Route path="/requests/:request" element={<QuestionDetail />} />
      <Route path="/requests/category" element={<Category />} />
      <Route path="/requests/post" element={<AskQuestion />} />
      {/* Authentication Routes  */}

      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/recover" element={<RecoverPassword />} />
        <Route path="/auth/password-reset/:token" element={<ResetPassword />} />
        <Route path="/auth/institute/signup" element={<SignInstitute />} />
        <Route path="/auth/institute/login" element={<LoginInstitute />} />
        <Route path="/auth/institute/recover" element={<InstitutePasswordRecover />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/auth/failure" element={<LoginInstitute />} />
      </Route>

      {/* Dashboard Routes  */}
      <Route
        path="/setting/account"
        element={<Protected Component={Setting} />}
      >
        <Route index element={<Protected Component={ChangePassword} />} />
        <Route
          path="/setting/account/delete"
          element={<Protected Component={DeleteAccount} />}
        />
        <Route
          path="/setting/account/password"
          element={<Protected Component={ChangePassword} />}
        />
        <Route
          path="/setting/account/email"
          element={<Protected Component={EmailSetting} />}
        />
        <Route
          path="/setting/account/privacy"
          element={<Protected Component={PrivacySetting} />}
        />
      </Route>
      <Route
        path="/setting/profile"
        element={<Protected Component={ProfileSettings} />}
      >
        <Route index element={<Protected Component={EditProfile} />} />
        <Route
          path="/setting/profile/job-profile"
          element={<Protected Component={ProfessionalProfile} />}
        />
        <Route
          path="/setting/profile/academic-profile"
          element={<Protected Component={AcademicProfile} />}
        />
      </Route>
      <Route path="/users" element={<UsersContainer />} />
      <Route path="/experts" element={<ExpertsContainer />} />
      <Route path="/user/:publicId" element={<Profile />}>
        <Route index element={<ProfileTab />} />
        <Route path="/user/:publicId/connection" element={<ConnectionTab />} />
        <Route path="/user/:publicId/questions" element={<QuestionsTab />} />
        <Route path="/user/:publicId/answers" element={<AnswersTab />} />
      </Route>
      <Route
        path="/profile"
        element={<Protected Component={ProfileContainer} />}
      >
        <Route index element={<Protected Component={UserProfile} />} />
        <Route
          path="/profile/connection"
          element={<Protected Component={ConnectionTab} />}
        />
        <Route
          path="/profile/questions"
          element={<Protected Component={QuestionsTab} />}
        />
        <Route
          path="/profile/answers"
          element={<Protected Component={AnswersTab} />}
        />
      </Route>

      <Route path="/ourteam" element={<Team />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/postsjobs" element={<PostJobs />} />
      <Route path="/careers/post" element={<PostJob />} />
      <Route path="/careers/apply" element={<ApplyJob />} />
      <Route path="/careers/job/:slug" element={<ApplyJob />} />

      <Route path="/careers/dashboard" element={<CareersDashboard />} />
      <Route path="/resume-maker" element={<ResumeMaker />} />

      <Route
        path="/careers/view-application"
        element={<ViewJobApplication />}
      />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/profilepage" element={<ProfilePage />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/notifications" element={<Notifications />} />

      {/* <Route
        path="/onboarding"
        element={<Protected Component={Onboarding} />}
      /> */}
      <Route path="/popup-message" element={<PopUpMessage />} />
      <Route path="/growth" element={<Dummy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/employer-code-of-conduct" element={<EmployerCoC />} />

      <Route path="/employer/:username" element={<ProfilePage />} />

      <Route path="/institute/" element={<InstituteParent />}>
        <Route path="/institute/dashboard" element={<InstituteDashboard />} />

        <Route
          path="/institute/profile"
          element={<Protected Component={InstituteProfile} />}
        />
        <Route
          path="/institute/profile/departments"
          element={<Protected Component={Departments} />}
        />
        <Route
          path="/institute/teachers"
          element={<Protected Component={Teachers} />}
        />

        <Route path="/institute/jobs" element={<Jobs />} />
        <Route path="/institute/jobs/Applications" element={<Applications />} />
        <Route
          path="/institute/jobs/Applications/ApplicationDetail"
          element={<AppliCationDetail />}
        />
        <Route
          path="/institute/jobs/Applications/applicant/:username"
          element={<ProfilePage />}
        />
        <Route
          path="/institute/api"
          element={<Protected Component={ApiKeyGenerator} />}
        />
        <Route path="/institute/chat" element={<Messages />} />
        <Route path="/institute/notification" element={<Notifications />} />
        <Route path="/institute/users" element={<Users />} />
        <Route path="/institute/questions" element={<Forum />} />
        <Route path="/institute/jobspost" element={<JobsPost />} />
        <Route path="/institute/applicants" element={<Applicants />} />
        <Route path="/institute/application" element={<Application />} />
        <Route path="/institute/acquisition" element={<Acquisition />} />
       
      </Route>
      <Route path="/institutes" element={<Institutes />} />
      <Route
        path="/institute/onboarding"
        element={<Protected Component={MainOnboarding} />}
      />
      {/* <Route
        path="/institute/onboarding-user"
        element={<Protected Component={MainOnboarding} />}
      /> */}
      <Route path="/institute/suspended" element={<AccountSuspended />} />
      {/* Public Routes  with Functionality*/}
      {/* Questions  */}
      {/* <Route path="/questions" element={"Questions"} /> */}
      {/* <Route path="/questions/:slug" element={"Single Question"} /> */}
      {/* Post Questions  */}
      <Route path="/postquestion" element={"Questions"} />
      {/* Users  */}
      <Route path="/users" element={<Users />} />
      {/* <Route path="/user" element={<UserPage />}>
                <Route index element={<UserProfileTab />} />
                <Route path="/user/:userId" element={<UserProfileTab />} />
                <Route path="/user/:userId/activity" element={<UserActivityTab />} />
            </Route> */}
      <Route path="/tags" element={<AllTags />} />
      <Route path="/viewer/pdf" element={<EksathiPdfViewer />} />

      <Route path="/questions" element={<Forum />}>
        <Route index element={<AllQuestions />} />
        <Route path="/questions/:slug" element={<SingleForumPage />} />
      </Route>
      <Route path="/:username" element={<PublicProfileContainer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
