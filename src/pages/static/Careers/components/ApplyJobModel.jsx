import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Typography from "@mui/joy/Typography";
import { Textarea } from "@mui/joy";
import { useGlobalContext } from "global/context";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import ApplicationDetail from "./CoverLaterDetail";
import CoverLaterDetail from "./CoverLaterDetail";

export default function ApplyJobModel({
  open,
  setOpen,
  jobId,
  coverlaterparentdata,
}) {
  const { userData, api, jobdetailss } = useGlobalContext();
  const location = useLocation();
  const [openApplication, setopenApplication] = useState(false);

  const [cover, setCover] = React.useState("");
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const getJobs = async () => {
    var endpoint;
    if (slug) {
      endpoint = `/app/jobs/details/${slug}?userId=${userData?.id}`;
    } else {
      endpoint = `/app/jobs/post/${location?.state?.id}?userId=${userData?.id}`;
    }
    try {
      const res = await api.get(endpoint);
      if (res?.status === 200) {
        console.log("Job was successfully Fetched: ", res?.data?.result);
        setData(res?.data?.result);

      }
    } catch (err) {
      console.log("Error getting jobs", err);
    }
  };
  // let Coverlater = `Dear ${jobdetailss?.name},I am excited to apply for the ${jobdetailss?.job_title} position at Your ${data?.institute?.name}. I am eager to contribute my expertise to your team's success.`;
  let Coverlater = `Dear ${jobdetailss?.name},

I am excited to apply for the ${jobdetailss?.job_title} at ${
    data?.institute?.name
  }. I am confident in my ability to contribute to your team. My dedication, and passion for ${
    data?.institute?.name
  } drive me to excel. Thank you for considering my application.
 
Sincerely,
[ ${userData?.first_name + " " + userData?.last_name || userData?.name} ]`;



  const applyJob = async () => {
    await api
      .post(`/app/jobs/apply`, {
        user_id: userData?.id,
        job_id: jobId,
        cover_letter: cover,
      })
      .then((res) => {
        console.log("Job Application success: ", res);
        toast.success("Application submitted!");
        if (res.status === "201") {
        }
      })
      .catch((err) => {
        console.log("Job Application Error: ", err);
        toast.error("Error submitting job");
      });
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
          sx={{
            minWidth: 500,
          }}
        >
          <Typography
            id="alert-dialog-modal-title"
            level="h2"
            startDecorator={<WarningRoundedIcon />}
          >
            Quick Apply
          </Typography>
          <Divider />
          <Typography
            id="alert-dialog-modal-description"
            textColor="text.tertiary"
          >
            Write your cover letter
          </Typography>

          <Textarea
            placeholder="Introduce yourself!"
            required
            variant="soft"
            minRows={4}
            sx={{ mb: 1 }}
            value={cover || Coverlater}
            onChange={(e) => setCover(e.target.value)}
          />
          <Box
            sx={{ display: "flex", gap: 1, justifyContent: "flex-end", pt: 2 }}
          >
            <Button
              variant="plain"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="soft"
              color="primary"
              onClick={() => {
                // applyJob();
                // setOpen(false);
                setopenApplication(true);
              }}
            >
              Proceed
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
      <Modal open={openApplication} onClose={() => setopenApplication(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
          sx={{
            minWidth: 500,
          }}
        >
          <CoverLaterDetail Coverlater={Coverlater} applyJob={applyJob} setopenApplication={setopenApplication} setOpen={setOpen} />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
