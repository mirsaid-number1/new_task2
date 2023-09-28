import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

import { OneTyped, FieldType, TypedField, IField } from "react-declarative";

import fetchApi from "../../helpers/fetchApi";
import history from "../../helpers/history";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
type Props = {};
type formFields = {
  officeName: string;
  officeDesc: string;
};
type addFormFields = {};
const fieldsCreate: TypedField[] = [
  {
    type: FieldType.Text,
    inputType: "text",
    name: "officeName",
    title: "Название офиса",
  },
  {
    type: FieldType.Text,
    inputType: "text",
    name: "officeDesc",
    title: "Описание офиса",
  },
];
const fieldsModify: TypedField[] = [
  {
    type: FieldType.Text,
    inputType: "text",
    name: "city",
    title: "Город",
  },
  {
    type: FieldType.Text,
    inputType: "text",
    name: "address",
    title: "Адрес",
  },
  {
    type: FieldType.Text,
    inputType: "text",
    name: "telephone",
    title: "Телефон",
  },
  {
    type: FieldType.Text,
    inputType: "text",
    name: "email",
    title: "Email",
  },
  {
    type: FieldType.Text,
    inputType: "text",
    name: "officeDesc",
    title: "Сайт",
  },
];
const NewOfficePage = (props: Props) => {
  let [data, setData] = useState<formFields>({
    officeDesc: "",
    officeName: "",
  });
  let [additionalData, setAdditionalData] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("Form data", form.get("officeName"), form.get("officeDesc"));
    console.log("One data", data.officeName, data.officeDesc);
    return false;
  };

  const handleChange = (newData: any) => setData(newData);
  return (
    <>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
            color: "white",
            width: "38px",
            height: "22px",
            borderRadius: "5px",
            border: "none",
            outline: "none",
          }}
          onClick={() => history.push("/employees")}
        >
          <KeyboardArrowLeftIcon />
        </button>{" "}
        <h4>Добавление нового офиса</h4>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        style={{
          height: "auto",
          margin: "5px",
          padding: "10px",
          backgroundColor: "#444",
          borderRadius: "5px",
          border: "1px solid lightgrey",
        }}
      >
        <OneTyped fields={fieldsCreate} />
        <Button type="submit" variant="contained" color="primary">
          создать/добавить ответственного
        </Button>
      </form>
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        style={{
          marginTop: "20px",
          height: "auto",
          margin: "5px",
          padding: "10px",
          backgroundColor: "#444",
          borderRadius: "5px",
          border: "1px solid lightgrey",
        }}
      >
        <OneTyped fields={fieldsModify} />
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <Button type="reset" variant="contained" color="error">
            отмена
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Сохранить
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewOfficePage;
