import {
  Button,
  Card,
  CardBody,
  Input,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function CreatePassword() {
  return (
    <div>
      <div className="bg-black opacity-90 flex flex-col justify-center align-middle items-center min-h-screen w-full md:px-0 px-5">
        <Card className="mx-auto w-full max-w-[24rem] border bg-gray-900 bg-opacity-20 py-5">
          <CardBody className="flex flex-col gap-10">
            <Typography className="-mb-5 mx-auto" variant="h4" color="white">
              Create new password
            </Typography>
            <div>
              <Input
                label="New Password"
                name="password"
                size="lg"
                color="blue-gray"
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                //   value={values.email}
                //   error={touched.email && errors.email}
              />
              {/* {touched.email && errors.email && (
              <div className="text-red-500 text-sm py-1 ">{errors.email}</div>
            )} */}
            </div>

            <div>
              <Input
                label="Confirm Password"
                type="password"
                name="password"
                color="blue-gray"
                size="lg"
                className="text-white"
                // onChange={handleChange}
                // onBlur={handleBlur}
                // value={values.password}
                // error={touched.password && errors.password}
              />
              {/* {touched.password && errors.password && (
            <div className="text-red-500 text-sm py-1 ">{errors.password}</div>
          )} */}
            </div>
          </CardBody>

          <CardFooter className="">
            <Button type="button" variant="gradient" color="yellow" fullWidth>
              Create
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default CreatePassword;
