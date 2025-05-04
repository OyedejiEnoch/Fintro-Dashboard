import React from 'react'
import { columns, Payment } from './columns'
import { DataTable } from './data-table'

const getData =async(): Promise<Payment[]> =>{

    return[
        {
            id: "728ed52f",
            amount: 100,
            username: "Anabell",
            status: "pending",
            email: "m@example.com",
          },
        {
            id: "489e1d40",
            amount: 4299,
            username: "John",
            status: "processing",
            email: "example@gmail.com",
        },
        {
            id: "489e1d49",
            amount: 523,
            username: "David",
            status: "processing",
            email: "example@gmail.com",
        },
        {
            id: "489e1d48",
            amount: 30000,
            username: "Judah",
            status: "processing",
            email: "example@gmail.com",
        },
        {
            id: "489e1d46",
            username: "Mike",
            email: "example@gmail.com",
            status: "success",
            amount: 23455,
        },
        {
            id: "489e1d43",
            username: "Moreno",
            email: "example@gmail.com",
            status: "failed",
            amount: 200,
        },
        {
            id: "489e1d98",
            amount: 9000,
            username: "Faith",
            status: "success",
            email: "example@gmail.com",
        },
        {
            id: "489e1d48",
            amount: 892,
            username: "Gabriella",
            status: "processing",
            email: "example@gmail.com",
        },
    ]
}
const PaymentPage = async() => {

    const data =await getData()
  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
        <h1 className='font-semibold'>Payments</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PaymentPage
