import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import {
  Chip,
  ChipDelete,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from "@mui/joy";
import { DeleteForever, FavoriteBorder } from "@mui/icons-material";
import SkillsChip from "pages/user/setting/components/SkillsChip";
import { useGlobalContext } from "global/context";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

var removeByAttr = function (arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (
      arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      arguments.length > 2 &&
      arr[i][attr] === value
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

export default function AddSkill({
  open = false,
  setOpen,
  action,
  skills,
  userId,
  refresh,
  refreshCount,
}) {
  const [layout, setLayout] = React.useState(undefined);
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const { userData, api } = useGlobalContext();
  const [skillName, setSkillName] = useState("");
  const [proficiency, setProficiency] = useState("");

  const handleSkillNameChange = (event) => {
    setSkillName(event.target.value);
  };

  const addSkill = async () => {
    if (!skillName) {
      toast.error("Skill name is required!");
      return;
    }
    if (filteredSkills.some((skill) => skill.skill_name === skillName)) {
      toast.error(`${skillName} is already in the skill list!`);
      return;
    }

    try {
      const res = await api.post(`/app/candidates/skills/${userData.id}`, {
        user_id: userId,
        skill_name: skillName,
        proficiency_level: "Beginner",
      });
      if (res?.status === 201) {
        toast.success(`${skillName} successfully added!`);
        setSkillName("");
        setOpen(false);
        refresh(++refreshCount);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const deleteSkill = async (id, name) => {
    try {
      const res = await api.delete(`/app/candidates/skills/${id}`);
      if (res?.status === 200) {
        setFilteredSkills((prev) => prev.filter((item) => item.id !== id));
        toast.success(`${name} successfully deleted!`);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    setFilteredSkills(skills);
  }, [skills]);
  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={layout}
          sx={{ maxWidth: 500 }}
        >
          <ModalClose />
          <Typography id="layout-modal-title" component="h2">
            Add new skill
          </Typography>

          <FormControl className="">
            <FormLabel>Name*</FormLabel>
            <Input
              autoFocus
              required
              placeholder="Eg - Javascript"
              value={skillName}
              onChange={handleSkillNameChange}
            />

            {/* <FormLabel>Proficiency Level*</FormLabel>
            <Select
              placeholder="Select Proficiency Level"
              value={proficiency}
              onChange={handleProficiencyChange} // Update proficiency state
              sx={{ width: "100%" }}
            >
              <Option value="beginner">Beginner</Option>
              <Option value="intermediate">Intermediate</Option>
              <Option value="advanced">Advanced</Option>
            </Select> */}
          </FormControl>

          <Stack
            direction="row"
            spacing={1}
            className="my-3 bg-light p-3 rounded flex-wrap"
            wrap
          >
            <p className="fw-bold">Delete  <i class="bi bi-arrow-right"></i></p>
            {filteredSkills.map((skill) => (
              <SkillsChip
                key={skill?.id}
                id={skill?.id}
                name={skill?.skill_name}
                userId={skill?.user_id}
                currentUser={userData?.id}
                deleteSkill={deleteSkill}
              />
            ))}
          </Stack>

          {/* <FormControl>
                    <FormLabel>Suggested Skills</FormLabel>
                    <Stack direction="row" spacing={1} className="my-3 bg-light p-3 rounded flex-wrap" wrap >
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                        <SkillsChip name={'Random'}/>
                    </Stack>
                    </FormControl> */}
          <Button type="submit" className=" col" onClick={addSkill}>
            Add & Delete Skill
          </Button>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
