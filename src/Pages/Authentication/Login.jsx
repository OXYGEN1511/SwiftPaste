import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUserAction } from "../../redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form Submitted with Values:", values);

    dispatch(loginUserAction({data:values}))
    console.log("Login Action Dispatched");
  };
  // const handleSubmit = (values) => {
  //   console.log("Submitting:", values);
  //   dispatch(loginUserAction(values));
  // };
  

  return (
    <>
   
        <h1 className="text-center text-2xl font-bold mb-3">Login</h1>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          
            <Form className="space-y-5">
              <div className="space-y-5">
                <Field
                  as={TextField}
                  name="email"
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage name="email" component={"div"} className="text-red-500" />
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
                <ErrorMessage name="password" component={"div"} className="text-red-500" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </Form>
          
        </Formik>

      <div className="flex gap-0 items-center justify-center pt-2">
        <p>If you don't have account ?</p>
        <Button onClick={()=>navigate("/register") }className="">Register</Button>
      </div>
    
    </>
  );
};

export default Login;
