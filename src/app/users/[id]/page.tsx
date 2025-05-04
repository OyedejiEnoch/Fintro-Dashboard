import CardList from '@/components/CardList'
import { Badge } from '@/components/ui/badge'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import {
    Sheet,
    SheetTrigger,
  } from "@/components/ui/sheet"
import React from 'react'
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import AppLineChart from '@/components/AppLineChart'

const SingleUserPage = () => {
  return (
    <div className='mt-4 flex flex-col xl:flex-row gap-8'>
      {/* left */}
        <div className='w-full xl:w-1/3 space-y-6'>
            {/* User Badges */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <h1 className='text-xl font-semibold'>User Badges</h1>
                <div className='flex gap-4 mt-4'>
                    <HoverCard>
                        <HoverCardTrigger>
                            <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-800/50 p-2'/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h1 className='font-bold mb-2'>Verified</h1>
                            <p className='text-sm text-muted-foreground'>This user has been verified by the admin</p>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <Shield size={36} className='rounded-full bg-green-500/30 border-1 border-green-800/50 p-2'/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h1 className='font-bold mb-2'>Admin</h1>
                            <p className='text-sm text-muted-foreground'>Admin users have access to all features and can manage users</p>
                        </HoverCardContent>
                    </HoverCard>

                    <HoverCard>
                        <HoverCardTrigger>
                            <Candy size={36} className='rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2'/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h1 className='font-bold mb-2'>Awarded</h1>
                            <p className='text-sm text-muted-foreground'>This user has been awarded for their contribution</p>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger>
                            <Citrus size={36} className='rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2'/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <h1 className='font-bold mb-2'>Popular</h1>
                            <p className='text-sm text-muted-foreground'>This user has been popular in the community</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>

            {/* information */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>User Information</h1>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button >Edit User</Button>
                    </SheetTrigger>
                    <EditUser />
                    </Sheet>
                </div>

                <div className='space-y-4 mt-4'>
                    <div className='flex flex-col gap-2 mb-8'>
                        <p className='text-sm text-muted-foreground'>Profile Completion</p>
                        <Progress value={64} />
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Username</span>
                        <span>Jessica Banks</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Email</span>
                        <span>Jessicabanks@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Phone</span>
                        <span>+1 23 422223</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Location</span>
                        <span>New Your, Ny</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-bold'>Role</span>
                        <Badge>Admin</Badge>
                    </div>
                </div>

                <p className='text-muted text-xm'>Joined on 2025.01.01</p>
            </div>
            {/* Card List */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <CardList title='Recent Transactions' />
            </div>
        </div>

    {/* right */}
        <div className='w-full xl:w-2/3 space-y-6'>
            {/* User Card */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <div className='flex items-center gap-4'>
                    <Avatar>
                        <AvatarImage src={"https://images.pexels.com/photos/30036971/pexels-photo-30036971/free-photo-of-charming-alleyway-in-savona-liguria-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} />
                        <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <h1 className='text-xl font-semibold'>Jessica Banks</h1>
                </div>
                <p className='text-sm text-muted-foreground mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, aspernatur illo distinctio voluptatum 
                    nihil dolore recusandae pariatur numquam assumenda quisquam. </p>
            </div>
            {/* Chart container */}
            <div className='bg-primary-foreground p-4 rounded-lg'>
                <h1 className='text-xl font-semibold'>User Activity</h1>
                <AppLineChart />
            </div>
        </div>
    </div>
  )
}

export default SingleUserPage
