"use client"
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Calendar } from './ui/calendar'

const TodoList = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div>
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
      <ScrollArea className="max-h-[200px] rounded-md overflow-y-auto">
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
        <Card className='p-4 mt-8'>
            <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Update all user profile
                </label>
            </div>
        </Card>
s
      </ScrollArea>
    </div>
  )
}

export default TodoList
