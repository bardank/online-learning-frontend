"use client";
import Input from "@/components/Input";
import React from "react";
import { useField, Form, FormikProps, Formik } from "formik";
import * as Yup from "yup";
import axios from "@/utils/axios";
import { setCookie } from "@/customHooks/cookies";

interface LoginDetails {
  email: string;
  password: string;
}

const BasicComponent: React.FC = ({}) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
  });

  const login = async (values: LoginDetails) => {
    try {
      const res = await axios.post("/auth/login", values);
      setCookie("auth-token", res.data.user?.token);
    } catch (error) {}
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="py-6">
            {/* Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. */}
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              login(values);
            }}
          >
            {(props: FormikProps<LoginDetails>) => (
              <Form className="card-body">
                <h1 className="text-3xl font-bold">Login</h1>
                <div className="form-control">
                  <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div className="form-control">
                  <Input
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="password"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BasicComponent;
