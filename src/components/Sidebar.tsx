import React from 'react'
import { Calendar, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from './ui/sidebar'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const items = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ]
   
const AppSidebar = () => {
    
  return (
    <Sidebar collapsible='icon' >
      <SidebarHeader className='py-4'>
        <SidebarMenuItem>
            <SidebarMenuButton asChild>
                <Link href={"/"} className='flex'>
                    {/* <Image src={""} alt='' /> */}
                   <h2 className='font-bold text-[20px]'>Chart's Dashboard</h2> 
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
        <SidebarSeparator />
      <SidebarContent>
        {/* this is like a group, for the name and menu content */}
        <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild size={"lg"}>
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                            {item.title === "Inbox" && (
                                <SidebarMenuBadge>22</SidebarMenuBadge>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>

            <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>

            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem >
                        <SidebarMenuButton asChild size={"lg"}>
                            <Link href={"/projects"}>
                                <Projector />
                                <span>See All Projects</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarGroupLabel>Charts</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem >
                        <SidebarMenuButton asChild size={"lg"}>
                            <Link href={"/projects"}>
                                <Projector />
                                <span>See All Charts</span>
                            </Link>
                        </SidebarMenuButton>

                        <SidebarMenuSub>
                            <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild >
                                    <Link href={"/"}>
                                        See charts
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>


      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild >
                        <SidebarMenuButton>
                            <User2 /> Username
                            <ChevronUp className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align='end'>
                        <DropdownMenuItem>
                        <span>Account</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span>Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <span>Sign out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
