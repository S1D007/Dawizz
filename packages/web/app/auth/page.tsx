"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Link from 'next/link'
import { useState,useEffect } from "react"
import { setFlagsFromString } from "v8"
import { sign } from "crypto"

const Signup = ({setsigninpage,signinpage}) => {
  return (
    <>
    <div id="main" className="w-100vw h-screen relative flex flex-col items-center justify-center " >
      <div id="left" className="w-full h-screen absolute -z-10   bg-slate-700"></div>
      <div id="right" className="w-full h-auto flex items-center justify-center "><Card className="w-[80%]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
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
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={setsigninpage(!signinpage)}>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
</div>
    </div>
    
    
    
    
    </>
   
  )
}

const auth = () => {

  const [signinpage, setsigninpage] = useState(false)

  
  return (
    <Signup setsigninpage={setsigninpage} signinpage={signinpage}/>
  )
}

export default auth
