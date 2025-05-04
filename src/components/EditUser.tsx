"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'


const formSchema = z.object({
  username: z.string().min(2, {message:"Username must be at least 2 characters"}).max(50),
  email: z.string().email({message:"Invalid Email"}),
  phone: z.string().min(10, {message:"Phone No must be at least 10 characters"}).max(15),
  location: z.string().min(2),
  role: z.enum(["admin", "user"]),
})
const EditUser = () => {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "Jessica Banks",
          email: "Jessicabanks@gmail.com",
          phone: "+1 23 422223",
          location: "New York, Ny",
          role: "admin",
        },
      })
  return (
    <SheetContent>
    <SheetHeader>
    <SheetTitle>Edit User</SheetTitle>
    <SheetDescription className='mt-10'>
       <Form {...form}>
            <form className="space-y-8">
                <FormField
                control={form.control}
                name="username"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>email</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            Only admin can see your email.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Phone No</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display No.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="location"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display location.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="role"
                render={({})=>(
                    <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                            
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="admin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="user">User</SelectItem>
                            </SelectContent>
                        </Select>

                        </FormControl>
                        <FormDescription>
                            Only verified users can be admin
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />

            <Button>Submit</Button>
            </form>
       </Form>
    </SheetDescription>
    </SheetHeader>
</SheetContent>
  )
}

export default EditUser
