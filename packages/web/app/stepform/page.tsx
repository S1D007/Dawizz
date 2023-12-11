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
    <Card className="w-[350px]  ">
      
      <CardHeader>
        <CardTitle>Let's Get Familiar</CardTitle>
        <CardDescription>Tell us about yourself</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="your full name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Type Of Organisation</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">StartUps</SelectItem>
                  <SelectItem value="sveltekit">NonProfit</SelectItem>
                  <SelectItem value="astro">Educational</SelectItem>
                  <SelectItem value="nuxt">Goverment</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button variant={'secondary'}> T&C </Button>
        <Button onClick={()=>{setstep(step+1)}}>Next</Button>
      </CardFooter>
    </Card>
  )
}

function Form2({step,setstep}) {
  return (
    <Card className="w-[350px]">
    
      <CardHeader>
        <CardTitle>Organisation Description</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your organisation" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Organisation Strength</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">0-20 people</SelectItem>
                  <SelectItem value="sveltekit">20-80 people</SelectItem>
                  <SelectItem value="astro">100-500 people</SelectItem>
                  <SelectItem value="nuxt">{'>'}1000 people</SelectItem>
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
        <CardTitle>What's your Intent</CardTitle>
        <CardDescription>Please take a moment to describe why you're here</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Description</Label>
              <Input id="name" placeholder="" />
            </div>
            {/* <div className="flex flex-col space-y-1.5">
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
            </div> */}
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
        <CardTitle>Let's Start</CardTitle>
        <CardDescription>We are happy to have you here</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={()=>{setstep(step-1)}}>back</Button>
        <Button onClick={()=>{alert("Bhai Jitna hai hackathon!!")}}>Proceed</Button>
      </CardFooter>
    </Card>
  )
}





const stepform = () => {

  const [step, setstep] = useState(1)
  return (
    <div className="main h-screen bg-slate-500 w-full flex items-center flex-col justify-center">

<img className="w-full h-full object-cover absolute top-0 left-0 z-5 " src="https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif" >
          {/* <source
            src="https://cdn.dribbble.com/users/507150/screenshots/5380757/media/de2a1b1bafe3c7693b7f98362c933e66.gif"
            type=""
          /> */}
        </img>
    <div className='first h-[40px] w-[80%] mb-4 flex items-center justify-center z-10'>
    <Badge className={`m-2 p-2 mx-4 px-6 font-extrabold border-4  bg-transparent ${step==1? 'border-stone-100 bg-black ':''}`} onClick={()=>{setstep(1)}}>1</Badge>
    <Badge className={`m-2 p-2 mx-4 px-6  font-extrabold  border-4  bg-transparent ${step==2? 'border-stone-100 bg-black':''}`} onClick={()=>{setstep(2)}} >2</Badge>
    <Badge className={`m-2 p-2 mx-4 px-6  font-extrabold  border-4 bg-transparent ${step==3? 'border-stone-100 bg-black':''}`} onClick={()=>{setstep(3)}}>3</Badge>
    <Badge className={`m-2 p-2 mx-4 px-6  font-extrabold border-4  bg-transparent ${step==4? 'border-stone-100 bg-black':''}`} onClick={()=>{setstep(4)}}>4</Badge>
    </div>
    <div className="second h-[50vh] w-[80%] flex items-center justify-center z-10">
     {step===1 && <Form1 step={step} setstep={setstep}/>} 
     {step===2 && <Form2 step={step} setstep={setstep}/>}
     {step===3 && <Form3 step={step} setstep={setstep}/>}
     {step===4 && <Form4 step={step} setstep={setstep}/>}
      
      </div>
    </div>
  )
}

export default stepform