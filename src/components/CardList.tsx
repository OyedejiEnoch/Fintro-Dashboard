import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'
import { title } from 'process'
import { Badge } from './ui/badge'

const popularContent =[
    {
        id:1,
        title:"Image Generation with Ai",
        badge:"AI",
        image:"https://images.pexels.com/photos/30890360/pexels-photo-30890360/free-photo-of-vintage-orange-car-on-paris-street-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        count:1200
    },
    {
        id:2,
        title:"Image Generation with Ai",
        badge:"AI",
        image:"https://images.pexels.com/photos/30890360/pexels-photo-30890360/free-photo-of-vintage-orange-car-on-paris-street-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        count:2400
    },
    {
        id:3,
        title:"Image Generation with Ai",
        badge:"AI",
        image:"https://images.pexels.com/photos/31632320/pexels-photo-31632320/free-photo-of-bridal-portrait-on-rooftop-overlooking-historic-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        count:2200
    },
    {
        id:4,
        title:"Image Generation with Ai",
        badge:"AI",
        image:"https://images.pexels.com/photos/30890360/pexels-photo-30890360/free-photo-of-vintage-orange-car-on-paris-street-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        count:4200
    }

]

const latestTransactions =[
    {
        id:1,
        title:"Subscription Renewal",
        badge:"John Doe",
        image:"https://images.pexels.com/photos/30036971/pexels-photo-30036971/free-photo-of-charming-alleyway-in-savona-liguria-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        count:1400
    },
    {
        id:2,
        title:"Payment for Services",
        badge:"John Doe",
        image:"https://images.pexels.com/photos/30939285/pexels-photo-30939285/free-photo-of-woman-posing-by-modern-urban-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        count:1400
    },
    


]


const CardList = ({title}:{title:string}) => {

    const list = title === "Popular Content" ? popularContent : latestTransactions

  return (
    <div className=''>
      <h1 className='text-lg font-medium mb-6'>{title}</h1>
      <div className='flex flex-col gap-2'>
        {list.map((item)=>(
            <Card key={item.id} className='flex-row items-center justify-between gap-2 p-4'>
            <div className='w-12 h-12 rounded-sm relative overflow-hidden'>
                <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>

            <CardContent className='p-0 flex-1'>
                <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
                <Badge variant={"outline"}>{item.badge}</Badge>
            </CardContent>
            <CardFooter className='p-0'>{item.count}</CardFooter>
        </Card>
        ))}
      </div>
    </div>
  )
}

export default CardList


// PEAC741