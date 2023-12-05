import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect, useState } from "react";
import departments from "../assets/departments.json";

const DepartmentsCheckbox: React.ElementType = () => {
  const [departmentsChecked, setDepartmentsChecked] = useState<boolean[]>(
    new Array(departments.length).fill(false)
  );

  return (
    <>
      <Box marginTop={"50px"}>
        <Typography fontSize={"x-large"} fontWeight={"bold"}>
          Select Departments
        </Typography>
        {departments.map((department, index) => {
          const [checked, setChecked] = useState<boolean[]>(
            new Array(department.sub_departments.length).fill(false)
          );

          useEffect(() => {
            if (checked.filter((e) => e === false).length === 0) {
              setDepartmentsChecked([
                ...departmentsChecked.slice(0, index),
                true,
                ...departmentsChecked.slice(index + 1),
              ]);
            }
            if (checked.filter((e) => e === true).length === 0) {
              setDepartmentsChecked([
                ...departmentsChecked.slice(0, index),
                false,
                ...departmentsChecked.slice(index + 1),
              ]);
            }
          }, [checked]);

          return (
            <Accordion
              key={index}
              disableGutters={true}
              sx={{
                "&:before": {
                  display: "none",
                },
              }}
              style={{
                width: "fit-content",
                border: "none",
                boxShadow: "none",
                marginTop: "20px",
                borderRadius: "none",
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`group${index}bh-content`}
                  id={`group${index}bh-header`}
                  style={{
                    flexDirection: "row-reverse",
                  }}
                ></AccordionSummary>
                <Typography sx={{ flexShrink: 0, marginLeft: "10px" }}>
                  <FormControlLabel
                    label={`${department.department} (${department.sub_departments.length})`}
                    control={
                      <Checkbox
                        inputProps={{
                          "aria-label": `group${index}`,
                        }}
                        checked={departmentsChecked[index]}
                        indeterminate={
                          checked.filter((e) => e === true).length !==
                            department.sub_departments.length &&
                          checked.filter((e) => e === true).length !== 0
                        }
                        onChange={(e) => {
                          setChecked(
                            new Array(department.sub_departments.length).fill(
                              e.target.checked
                            )
                          );
                        }}
                      />
                    }
                  />
                </Typography>
              </Box>
              <AccordionDetails
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "50px",
                }}
              >
                {department.sub_departments.map((sub_department, sub_index) => (
                  <FormControlLabel
                    key={sub_department}
                    label={sub_department}
                    control={
                      <Checkbox
                        checked={checked[sub_index]}
                        onChange={() => {
                          setChecked([
                            ...checked.slice(0, sub_index),
                            !checked[sub_index],
                            ...checked.slice(sub_index + 1),
                          ]);
                        }}
                      />
                    }
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </>
  );
};

export default DepartmentsCheckbox;
