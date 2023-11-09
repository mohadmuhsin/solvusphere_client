import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="bg-black opacity-90 flex flex-col justify-center align-middle items-center min-h-screen w-full md:px-0 px-5">
        <Card className="mx-auto w-full max-w-[24rem] border bg-gray-900 bg-opacity-20 py-5">
          <CardBody className="flex flex-col gap-10">
            <Typography className="-mb-5 mx-auto" variant="h4" color="white">
              LOGIN
            </Typography>
            <Input
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              color="blue-gray"
              className="text-white"
            />
            
            <Input
              label="Password"
              type="password"
              color="blue-gray"
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              className="text-white"
            />
          </CardBody>

          <CardFooter className="">
            <Button variant="gradient" color="yellow" fullWidth>
              Log In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center " color="gray">
              Don&apos;t have an account?
              <Link to='/register'>
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
