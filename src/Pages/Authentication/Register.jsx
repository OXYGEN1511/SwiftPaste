import {
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
} from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerUserAction } from "../../redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  gender: "",
};

const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form Submitted with Values:", values);
    dispatch(registerUserAction(values));
    navigate("/")
    
    console.log("Register Action Dispatched");
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-3">Register</h1>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-5">
            <div className="space-y-5">
              <Field
                as={TextField}
                name="firstname"
                placeholder="First Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="firstname" component="div" className="text-red-500" />
            </div>
            <div className="space-y-5">
              <Field
                as={TextField}
                name="lastname"
                placeholder="Last Name"
                type="text"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="lastname" component="div" className="text-red-500" />
            </div>

            <div className="space-y-5">
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <div>
              <RadioGroup
                row
                aria-labelledby="gender"
                name="gender"
                value={values.gender}
                onChange={(event) => setFieldValue("gender", event.target.value)}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              <ErrorMessage name="gender" component="div" className="text-red-500" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-0 items-center justify-center pt-2">
        <p>If you already have an account?</p>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </>
  );
};

export default Register;
