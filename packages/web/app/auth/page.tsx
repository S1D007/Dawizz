'use client';
import * as React from 'react';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

import Link from 'next/link';
import {useState, useEffect} from 'react';
import {setFlagsFromString} from 'v8';
import {sign} from 'crypto';

const Signup = ({setsigninpage, signinpage}) => {
  return (
    <>
          <Card className="w-[80%]">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" placeholder="your working email address" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="name" placeholder="setup a password" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={()=>setsigninpage(!signinpage)}>
                Already a User -{`>`} Signin.
              </Button>
              <Button>Proceed</Button>
            </CardFooter>
          </Card>
    </>
  );
};
const Signin = ({setsigninpage, signinpage}) => {
  return (
    <>
      
          <Card className="w-[80%] ">
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              {/* <CardDescription></CardDescription> */}
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" placeholder="your working email address" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="name" placeholder="same as before" />
                    {/* <Label htmlFor="framework">Password</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select> */}
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={()=>setsigninpage(!signinpage)}>
                Not a Registered User? -{`>`} Signup.
              </Button>
              <Button>Login</Button>
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
        <div id="left" className="w-full  h-screen absolute -z-10   bg-slate-700 md:static md:w-1/2 "></div>
        <div id="right" className="w-full h-auto flex items-center justify-center md:w-1/2 ">
        {!signinpage && <Signup setsigninpage={setsigninpage} signinpage={signinpage} />
      }
       {signinpage && <Signin setsigninpage={setsigninpage} signinpage={signinpage}></Signin>}
        </div>
      </div>

     
     
     
     </>
 
  )
};

export default auth;
