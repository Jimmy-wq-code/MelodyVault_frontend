import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/main.css"; // or use Welcome.css if same style

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const newUser = await signup(
        values.username.trim(),
        values.email.trim(),
        values.password.trim()
      );
      if (newUser) {
        navigate("/home"); // ✅ redirect to home after signup
      }
    } catch (err) {
      console.error(err);
      setFieldError("email", "Failed to sign up. Email may already be in use.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Join MelodyVault</h1>
        <p>Already have an account?</p>
        <button onClick={() => navigate("/")}>Login</button>
      </div>

      <div className="right-panel">
        <h2>Create an Account</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="username">Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="p" className="error" />

              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" className="error" />

              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" className="error" />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
