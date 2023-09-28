import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import EmployeeList from "../../model/EmployeeTypes";
import { Avatar, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
type Props = {
  accordionName: string;
  AccordionIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  info: EmployeeList;
  booleanVal: boolean;
};

function AccordionCustom({
  accordionName,
  AccordionIcon,
  info,
  booleanVal,
}: Props) {
  return (
    <Accordion
      style={{
        height: "auto",
        margin: "5px",
        marginTop: "30px",
        backgroundColor: "#444",
        borderRadius: "5px",
        border: "1px solid lightgrey",
      }}
      defaultExpanded
    >
      <AccordionSummary
        expandIcon={<AccordionIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography style={{ position: "relative" }}>
          <h3 style={{ margin: 0 }}>{accordionName}</h3>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "-20px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
              color: "white",
              fontSize: "14px",
              backgroundColor: "#333",
            }}
          >
            {
              info.filter((employee, _) => employee.isActive === booleanVal)
                .length
            }
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {info
            .filter((employee, _) => employee.isActive === booleanVal)
            .map((employee, _) => {
              return (
                <div
                  key={employee.id}
                  style={{
                    display: "flex",
                    width: "300px",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#555",
                    border: "1px solid lightgrey",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt={employee.firstName + " " + employee.lastName}
                      src={employee.profileImg}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span>
                        {employee.firstName} {employee.lastName}
                      </span>
                      <span style={{ fontSize: "14px", color: "lightgray" }}>
                        {employee.jobTitle}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionCustom;
