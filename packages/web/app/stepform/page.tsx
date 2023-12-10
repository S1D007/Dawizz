'use client'

import { useState } from "react"
import React from 'react'

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
import { Badge } from "@/components/ui/badge"


function Form1({step,setstep}) {
  return (
    <Card className="w-[350px] opacity-90">
      
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
      <CardFooter className="flex justify-center">
        
        <Button onClick={()=>{setstep(step+1)}}>Next</Button>
      </CardFooter>
    </Card>
  )
}

function Form2({step,setstep}) {
  return (
    <Card className="w-[350px]">
    
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
        <Button variant="outline" onClick={()=>{setstep(step-1)}}>back</Button>
        <Button onClick={()=>{setstep(step+1)}}>Next</Button>
      </CardFooter>
    </Card>
  )
}


function Form3({step,setstep}) {
  return (
    <Card className="w-[350px]">
     
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
        <Button variant="outline" onClick={()=>{setstep(step-1)}}>back</Button>
        <Button onClick={()=>{setstep(step+1)}}>Next</Button>
      </CardFooter>
    </Card>
  )
}

function Form4({step,setstep}) {
  return (
    <Card className="w-[350px] ">
      
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
        <Button variant="outline" onClick={()=>{setstep(step-1)}}>back</Button>
        <Button onClick={()=>{setstep(step+1)}}>Finish</Button>
      </CardFooter>
    </Card>
  )
}





const stepform = () => {

  const [step, setstep] = useState(1)
  return (
    <div className="main h-screen bg-slate-500 w-full flex items-center flex-col justify-center bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">

    <div className='first h-[40px] w-[80%] mb-4 flex items-center justify-center '>
    <Badge className={`m-2 p-2 mx-4 px-6 font-extrabold bg-transparent ${step==1? 'border-slate-400 bg-black ':''}`}>1</Badge>
    <Badge className={`m-2 p-2 mx-4 px-6  font-extrabold bg-transparent ${step==2? 'border-slate-400 bg-black':''}`}>2</Badge>
    <Badge className={`m-2 p-2 mx-4 px-6  font-extrabold bg-transparent ${step==3? 'border-slate-400 bg-black':''}`}>3</Badge>
    <Badge className={`m-2 p-2 mx-4 px-6  font-extrabold bg-transparent ${step==4? 'border-slate-400 bg-black':''}`}>4</Badge>
    </div>
    <div className="second h-[50vh] w-[80%] flex items-center justify-center ">
     {step===1 && <Form1 step={step} setstep={setstep}/>} 
     {step===2 && <Form2 step={step} setstep={setstep}/>}
     {step===3 && <Form3 step={step} setstep={setstep}/>}
     {step===4 && <Form4 step={step} setstep={setstep}/>}
      
      </div>
    </div>
  )
}

export default stepform