import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

import IconButton from "@mui/joy/IconButton";

import React from "react";
import { useState } from "react";
import { FormControl, Grid, Input, Stack } from "@mui/joy";
import { ButtonGroup, InputAdornment } from "@mui/material";
import { SearchTwoTone } from "@mui/icons-material";
import InstituteCard from "../Home/components/InstituteCard";
import { useGlobalContext } from "global/context";
import { useEffect } from "react";
const InstituteData = [
  {
    institutename: "Benten Institute",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Arts and sciences courses with a focus on creativity and innovation.",
    location: "Cityville, State",
    website: "https://www.benteninstitute.com",
    contact: "info@benteninstitute.com",
  },
  {
    institutename: "Stellar Academy",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Providing holistic education for academic excellence and character development.",
    location: "Townsville, State",
    website: "https://www.stellaracademy.edu",
    contact: "contact@stellaracademy.edu",
  },
  {
    institutename: "Zenith College",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Fostering a dynamic learning environment that prepares students for global challenges.",
    location: "Metropolis, State",
    website: "https://www.zenithcollege.org",
    contact: "info@zenithcollege.org",
  },
  {
    institutename: "NexTech Institute",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Leading the way in technology education for a digitally empowered future.",
    location: "Techville, State",
    website: "https://www.nextechinstitute.com",
    contact: "hello@nextechinstitute.com",
  },
  {
    institutename: "EcoGlobe University",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Promoting sustainability and environmental awareness through comprehensive education.",
    location: "Greenfield, State",
    website: "https://www.ecoglobeuniversity.edu",
    contact: "info@ecoglobeuniversity.edu",
  },
  {
    institutename: "Harmony Music School",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Nurturing musical talents and fostering a deep appreciation for the art of sound.",
    location: "Melodytown, State",
    website: "https://www.harmonymusicschool.com",
    contact: "music@harmonymusicschool.com",
  },
  {
    institutename: "SportsEdge Academy",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Combining sports and education to shape well-rounded athletes and leaders.",
    location: "Athletica, State",
    website: "https://www.sportsedgeacademy.com",
    contact: "info@sportsedgeacademy.com",
  },
  {
    institutename: "Spark Coding Institute",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Igniting young minds with the power of coding and technological innovation.",
    location: "Codeville, State",
    website: "https://www.sparkcodinginstitute.com",
    contact: "hello@sparkcodinginstitute.com",
  },
  {
    institutename: "Global Language Hub",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Unlocking the world through language education and cultural exploration.",
    location: "Lingua City, State",
    website: "https://www.globallanguagehub.com",
    contact: "info@globallanguagehub.com",
  },
  {
    institutename: "Artistry Institute",
    img: "https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?t=st=1693052111~exp=1693052711~hmac=28c81b9c656647f442650eca908c80d5c6ec8421fa6a81efc3395c2eaaf2a4cf",
    about:
      "Empowering artistic expression and creativity across various disciplines.",
    location: "Paletteville, State",
    website: "https://www.artistryinstitute.org",
    contact: "info@artistryinstitute.org",
  },
  // Add more entries here
];
function Institutes() {
  
  return (
    <div className="container">
      <FormControl fullWidth className="mb-3 mt-3 rounded shadow">
        <Input
          size="lg"
          variant="plain"
          color="info"
          id="search"
          type="text"
          className="rounded-4 px-3"
          name="search"
          endDecorator={
            <InputAdornment position="end">
              <IconButton
                style={{ borderRadius: "50%" }}
                variant="plain"
                color="info"
                aria-label="toggle password visibility"
                edge="end"
              >
                <SearchTwoTone />
              </IconButton>
            </InputAdornment>
          }
          // label="Password"
          placeholder="Search Institute by name "
        />
      </FormControl>
      <div className="d-flex justify-content-between my-3">
        <div>
          <h4 className="fw-bold">Suggested Institute</h4>
        </div>
        <div className="d-flex align-items-center">
          <h6 className="mr-3 ">Sort By </h6>
          <ButtonGroup
            size="small"
            aria-label="small button group"
            className="shadow rounded"
          >
            <Button
              variant="plain"
              size="sm"
              className="text-capitalize"
              key="one"
            >
              Location
            </Button>
            <Button
              variant="plain"
              size="sm"
              className="text-capitalize"
              key="two"
            >
              Rating
            </Button>
            <Button
              variant="plain"
              size="sm"
              className="text-capitalize"
              key="three"
            >
              Name (a-z)
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <InstituteCard   />
      </div>
    </div>
  );
}

export default Institutes;
