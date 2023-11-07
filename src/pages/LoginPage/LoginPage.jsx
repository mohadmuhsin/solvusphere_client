import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

function LoginPage() {

  return (
    <div>
      <div className="bg-black opacity-90 flex flex-col justify-center align-middle items-center min-h-screen">
        
        <Card className="mx-auto w-full max-w-[24rem] bg-opacity-0 border border-white bg-blur py-5">
          
          <CardBody className="flex flex-col gap-10">
            <Typography className="-mb-5 mx-auto" variant="h4" color="white">
              LOGIN
            </Typography>
            <Input label="Email" size="lg" />

            <Input label="Password" size="lg" />
          </CardBody>

          <CardFooter className="">
            <Button variant="gradient" color="yellow" fullWidth>
              Log In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"  
              >
                Sign up
              </Typography>

            </Typography>
          </CardFooter>
          
        </Card>

      </div>
    </div>
  );
}

export default LoginPage;
