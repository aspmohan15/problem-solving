// create the albhabet letters

for (let j = 97; j < 123; j++) {
  let str = String.fromCharCode(j);
  console.log(str);
}


document.body.style.background = `#${Math.floor(
  Math.random() * 0xffffff
).toString(16)}`;


document.designMode = "on"

//

const button = document.querySelector("button");


button.addEventListener("click", () => {
  copy("My name is mohan");
  alert("coopied cliboard");
});
const copy = (text) => navigator.clipboard.(text);

import { Form, Formik } from "formik";
import React from "react";
import InputField from "../../../elements/inputField/inputField";
import Select from "react-select";

function CreateZone() {
  const inputs = [
    {
      name: "zone_name",
      label: "Name",
      type: "text",
      placeholder: "Enter Zone Name",
    },
    {
      name: "ZoneType",
      label: "Email",
      type: "email",
      placeholder: "Enter Zone Name",
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Enter User Phone no",
    },
    {
      name: "desgination",
      label: "Desgination",
      type: "text",
      placeholder: "Enter User Desgination",
    },
  ];
  const customStyles = {
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: "#264653",
      opacity: "0.3",
    }),
    control: (base) => ({
      ...base,
      height: 40,
      minHeight: 10,
      top: 1,
      // width: "180px",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "40px",
      padding: "0 5px",
      margin: "0 5px",
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0 -8px",
      padding: "0 6px",
      width: "200px",
    }),
  };
  return (
    <div>
      <Formik
        initialValues={{ agencyName: "" }}
        // enableReinitialize={true}
        // onSubmit={async (data, { resetForm }) => {
        //   const res = await updateTransaction(
        //     "Corrected",
        //     data.reason,
        //     data.amount,
        //     "#staticBackdrop"
        //   );
        //   resetForm();
        // }}
        // validationSchema={Schema}
      >
        {({
          handleSubmit,
          setFieldValue,
          handleChange,
          values,
          touched,
          errors,
          handleBlur,
          resetForm,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div class="common-wcard add-employee-form">
              <div class="common-form-fields">
                <div class="form-wrappers">
                  <div class="form-title">{"Create Zone"}</div>
                  <div class="row row-cols-2">
                    {inputs.map((input, index) => {
                      return (
                        <div
                          className="m-2"
                          style={{ position: "relative" }}
                          key={index + "AddNewAgents"}
                        >
                          <label>{input.label}</label>
                          {["text", "email"].includes(input.type) && (
                            <InputField
                              name={input.name}
                              placeholder={input.placeholder}
                              type={input.type}
                              value={values?.input?.name}
                              onChange={handleChange}
                            />
                          )}
                          {["textarea"].includes(input.type) && (
                            <div className="custom-txtarea">
                              <TextAreaField
                                rows={input.row}
                                style={{ minHeight: "40px" }}
                                name={input.name}
                                placeholder={input.placeholder}
                                type={input.type}
                                onBlur={handleBlur}
                                value={values?.input?.name}
                                onChange={handleChange}
                              />
                            </div>
                          )}
                          {["select"].includes(input.type) && (
                            <>
                              <Select
                                styles={customStyles}
                                placeholder={input.placeholder}
                                options={input.options}
                                onBlur={handleBlur}
                                value={
                                  values?.[input.name]
                                    ? input.options?.filter((data) => {
                                        return (
                                          data.value === values?.[input?.name]
                                        );
                                      })
                                    : ""
                                }
                                name={input.name}
                                onChange={(e) => {
                                  setFieldValue(input.name, e.value);
                                }}
                              />
                              {errors[input.name] && touched[input.name] && (
                                <ErrorText error={errors[input.name]} />
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-2">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="common-btn px-4"
                  >
                    Save
                  </button>
                </div>
                <div className="col-1">
                  <button
                    type="reset"
                    className="outlined common-btn"
                    onClick={() => {
                      resetForm;
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateZone;
