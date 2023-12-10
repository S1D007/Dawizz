'use client';
import * as React from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Icons} from '@/components/icons';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import {setFlagsFromString} from 'v8';
import {sign} from 'crypto';

const Signup = ({setsigninpage, signinpage}) => {
  const Router = useRouter();
  return (
    <>
      <Card className="w-[85%] sm:w-[70%] md:w-[85%] max-w-xl ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full mb-2" onClick={() => Router.push('/stepform')}>
            Create account
          </Button>
          <Button className="w-full" variant={'secondary'} onClick={() => setsigninpage(!signinpage)}>
            Already a Registered User ? SignIn.
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
const Signin = ({setsigninpage, signinpage}) => {
  const Router = useRouter();
  return (
    <>
      <Card className="w-[85%] sm:w-[70%] md:w-[85%] max-w-xl ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome Back.</CardTitle>
          <CardDescription>Nice to have you here again</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex-col">
          <Button className="w-full mb-2" onClick={() => Router.push('/stepform')}>
            Login
          </Button>
          <Button className="w-full" variant={'secondary'} onClick={() => setsigninpage(!signinpage)}>
            Not a Registered User ? SignUp.
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

const auth = () => {
  const [signinpage, setsigninpage] = useState(false);

  return (
    <>
      <div id="main" className="w-100vw h-screen relative flex flex-col items-center justify-center md:flex-row ">
        <div
          id="left"
          className="w-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen absolute -z-10   bg-slate-700 md:static md:w-1/2 "></div>
        <div id="right" className="w-full h-auto flex flex-col items-center justify-center md:w-1/2 ">
          {!signinpage && <Signup setsigninpage={setsigninpage} signinpage={signinpage} />}
          {signinpage && <Signin setsigninpage={setsigninpage} signinpage={signinpage}></Signin>}
        </div>
        
      </div>
    </>
  );
};

export default auth;
