import { useGlobalContext } from "global/context";
import Bio from "pages/user/setting/components/Bio";
import Certification from "pages/user/setting/components/Certification";
import Education from "pages/user/setting/components/Education";
import Experience from "pages/user/setting/components/Experience";
import Skills from "pages/user/setting/components/Skills";
import React from "react";

const ProfileDetails = ({ profile }) => {
  const { userData } = useGlobalContext();
  return (
    <>
      {profile?.profile?.bio?.length ? (
        <div className="rounded-4 shadow p-5 mb-4">
          <Bio bio={profile?.profile?.bio} author={profile?.id} />
        </div>
      ) : null}

      {profile?.id ? (
        <>
          {profile?.skills?.length ? (
            <div className="rounded-4 shadow p-5 mb-4">
              <Skills userId={profile?.id} />
            </div>
          ) : null}
          {profile?.work_experience?.length ? (
            <div className="rounded-4 shadow p-5 mb-4">
              <Experience userId={profile?.id} />
            </div>
          ) : null}
          {profile?.educations?.length ? (
            <div className="rounded-4 shadow p-5 mb-4"> 
              <Education userId={profile?.id} />
            </div>
          ) : null}
          {profile?.certifications?.length ? (
            <div className="rounded-4 shadow p-5 mb-4">
              <Certification userId={profile?.id} /> 
            </div>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default ProfileDetails;
