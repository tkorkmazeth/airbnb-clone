'use client'

import useCountries from "@/app/hooks/useCountries"
import { SafeUser } from "@/app/types"
import { IconType } from "react-icons"
import Avatar from "../Avatar"

interface ListingInfoProps{
    user: SafeUser
    description: string
    guestCount: number
    roomCount: number
    bathroomCount: number
    category: {
        label: string
        icon: IconType
        description: string
    } | undefined
    locationValue: string
}

const ListingInfo:React.FC<ListingInfoProps> = ({user,description,guestCount,roomCount,bathroomCount,category,locationValue}) => {

    const {getByValue} = useCountries()
    const coordinates = getByValue(locationValue)?.latLng
    
  return (
    <div className="col-span-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <div className="
            text-xl
            font-semibold
            flex
            flex-row
            items-center
            gap-2
            ">
                <div>Hosted by {user?.name}</div>
                <Avatar src={user?.image}/>
            </div>
        </div>
    </div>
  )
}

export default ListingInfo