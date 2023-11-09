import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import React, { useEffect } from "react";
import BlurredCircle from "../../components/UiElements/BlurredCircle";
import {} from "postcss";

function UserRegistration() {
  return (
    <div className="bg-black relative overflow-hidden opacity-90 flex flex-col justify-center align-middle items-center min-h-screen md:px-0 px-5">
      <div className="mx-auto w-90pt md:w-65pt md:max-w-[70rem]">
        <BlurredCircle />
        <h1 className="mx-auto sm:w-90pt text-gray-200 text-2xl text-center md:text-left md:text-3xl py-2  sm:py-5 font-semibold">
          Registration
        </h1>
        <Card className="mx-auto sm:w-90pt rounded-lg px-3 border border-gray-700 bg-gray-900 bg-opacity-40">
          <CardBody className="flex flex-col  md-1:flex-row gap-5 overflow-x-clip items-center">
            <Input label="Name" type="name" color="white" />
            <Input label="Email" type="email" color="white" />
            <Typography
              className="mx-auto bg-yellow-700 px-4 py-1 rounded-md"
              variant="h6"
              color="black"
            >
              Next
            </Typography>
          </CardBody>
        </Card>
        <BlurredCircle bottomRight />
      </div>
    </div>
  );
}

export default UserRegistration;
