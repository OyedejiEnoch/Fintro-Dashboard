"use client"
 
import { cn } from "@/lib/utils"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export type Payment = {
    id: string
    amount: number
    username:string
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-center">Amount</div>,
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount)
     
          return <div className="text-center font-medium">{formatted}</div>
        },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell:({row})=>{
        const status =row.getValue("status")

        return (
            <div className={cn("p-2 rounded-md w-max text-xs capitalize", status === 'pending' && "bg-yellow-500/40", status === "success" && "bg-green-500/40",
                status === "failed" && "bg-red-500/40", status === "processing" && "bg-purple-500/40"
            )}>{status as string}</div>
        )
      }
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]