'use client'

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";

interface ListingHeadProps {
    title: string;
    locationValue: string;
    currentUser?: SafeUser | null
    id: string
    imageSrc: string
}

const ListingHead:React.FC<ListingHeadProps> = ({
    title, locationValue, currentUser, id, imageSrc
}) => {
    const {getByValue} = useCountries()
    const location = getByValue(locationValue)

    return (
    <>
    <Heading
    title={title}
    subtitle={`${location?.region}, ${location?.label}`}
    />
    <div className="
    w-full
    h-[60vh]
    overflow-hidden
    rounded-xl
    relative
    ">

    </div>
    </>
  )
}

export default ListingHead