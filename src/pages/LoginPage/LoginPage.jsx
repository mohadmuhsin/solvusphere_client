import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginSchema } from "../../validation/Yup";
import {Button,Card,CardBody,CardFooter,Typography,Input,} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        // Backend call
        console.log("everything is over");
      },
    });

  return (
    <div>
      <div className="bg-black opacity-90 flex flex-col justify-center align-middle items-center min-h-screen w-full md:px-0 px-5">
        <Card className="mx-auto w-full max-w-[24rem] border bg-gray-900 bg-opacity-20 py-5">
          <CardBody className="flex flex-col gap-10">
            <Typography className="-mb-5 mx-auto" variant="h4" color="white">
              LOGIN
            </Typography>
            <div>
              <Input
                label="Email"
                name="email"
                size="lg"
                color="blue-gray"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm py-1 ">{errors.email}</div>
              )}
            </div>

            <div>
            
            <Input
              label="Password"
              type="password"
              name="password"
              color="blue-gray"
              size="lg"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
              className="text-white"
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm py-1 ">{errors.password}</div>
            )}
            </div>
          </CardBody>

          <CardFooter className="">
            <Button
              type="button"
              variant="gradient"
              color="yellow"
              fullWidth
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Typography
              variant="small"
              className="mt-4 flex justify-center "
              color="gray"
            >
              Don&apos;t have an account?
              <Link to="/register">
                <Typography
                  as="a"
                  variant="small"
                  color="white"
                  className="ml-1 font-bold opacity-100"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
