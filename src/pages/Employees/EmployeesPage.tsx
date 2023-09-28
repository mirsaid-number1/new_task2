import React from "react";
import {
  FetchView,
  Breadcrumbs,
  FieldType,
  IField,
  useActionModal,
  usePreventLeave,
} from "react-declarative";

import fetchApi from "../../helpers/fetchApi";
import history from "../../helpers/history";

import EmployeeList from "../../model/EmployeeTypes";
import OfficeList from "../../model/OfficeTypes";

import useLoader from "../../hooks/useLoader";
// import { Card as CardMui } from "@mui/material";
import { Box as BoxMui } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Call, Home } from "@mui/icons-material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordionCustom from "../../components/common/AccordionCustom";

interface ITodoRecordPageProps {
  id: string;
}

const updateFields: IField[] = [
  {
    type: FieldType.Text,
    name: "title",
    title: "Title",
    defaultValue: "New title",
  },
];

function EmployeesPage({}: ITodoRecordPageProps) {
  const { setLoader } = useLoader();

  const { render } = useActionModal({
    title: "Update todo",
    fields: updateFields,
    onSubmit: (data) => {
      alert(JSON.stringify(data, null, 2));
      return true;
    },
  });

  const { data, beginSave } = usePreventLeave({
    history,
    onSave: () => {
      alert(JSON.stringify(data, null, 2));
      return true;
    },
  });

  return (
    <>
      <Breadcrumbs
        withSave
        title="Home"
        subtitle="Сотрудники"
        onSave={beginSave}
        onBack={() => history.push("/")}
        saveDisabled={!data}
      />
      <FetchView
        state={async () => await fetchApi<OfficeList>(`/offices`)}
        onLoadStart={() => setLoader(true)}
        onLoadEnd={() => setLoader(false)}
      >
        {(offices) => (
          <>
            <BoxMui
              sx={{
                height: "auto",
                margin: "5px",
                padding: "10px",
                backgroundColor: "#444",
                borderRadius: "5px",
                border: "1px solid lightgrey",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  paddingBottom: "10px",
                }}
              >
                <h3 style={{ margin: 0 }}>Офисы</h3>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                    outline: "none",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    boxShadow: "0 5px 5px 1px #333",
                    backgroundColor: "#555",
                  }}
                  onClick={() => history.push("/employees/office/new")}
                >
                  <AddIcon style={{ color: "lightgrey" }} />
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {offices.map((office, _) => {
                  return (
                    <div
                      key={office.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        backgroundColor: "#555",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <Home style={{ fontSize: "16px" }} />
                        <span style={{ fontSize: "16px" }}>
                          {office.address}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <Call style={{ fontSize: "16px" }} />
                        <span style={{ fontSize: "14px", color: "lightgray" }}>
                          {office.phoneNumber}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </BoxMui>
          </>
        )}
      </FetchView>
      <FetchView
        state={async () => await fetchApi<EmployeeList>(`/employees`)}
        onLoadStart={() => setLoader(true)}
        onLoadEnd={() => setLoader(false)}
      >
        {(employees) => (
          <>
            <AccordionCustom
              accordionName="Активные"
              AccordionIcon={ExpandMoreIcon}
              info={employees}
              booleanVal={true}
            />
            <AccordionCustom
              accordionName="Удаленные"
              AccordionIcon={ArrowDropDownIcon}
              info={employees}
              booleanVal={false}
            />
          </>
        )}
      </FetchView>
      {render()}
    </>
  );
}

export default EmployeesPage;
