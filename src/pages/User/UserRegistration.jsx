import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import React, { useEffect } from "react";
import BlurredCircle from "../../components/UiElements/BlurredCircle";
import {} from "postcss";

function UserRegistration() {
  return (
    <div className="bg-black relative overflow-hidden opacity-90 flex flex-col justify-center align-middle items-center min-h-screen md:px-0 px-5">
      <div className="mx-auto w-90pt md:w-65pt md:max-w-[120rem]">
        <BlurredCircle />
        <h1 className="text-gray-200 text-4xl px-10 py-5 font-semibold">
          Registrations
        </h1>
        <Card
          style={{ height: "10vh" }}
          className="mx-auto  sm:w-90pt border border-gray-700 bg-black"
        >
          <CardBody className="flex gap-5 items-center">
            <Input label="Email" size="lg"
               containerProps={{ className: "w-40pt md:w-65pt" }}
            />

            <Input
              label="Password"
              type="password"
              color="dark-gray"
              size="lg"
              containerProps={{ className: "w-40pt md:w-65pt" }}
              />
            <Typography className="mx-auto bg-yellow-700 px-4 py-1 rounded-md" variant="h6" color="blue-gray">
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
