'use client'

import Container from "@/app/components/Container"
import { categories } from "@/app/components/Navbar/Categories"
import ListingHead from "@/app/components/listings/ListingHead"
import ListingInfo from "@/app/components/listings/ListingInfo"
import { SafeListings, SafeUser } from "@/app/types"
import { Reservation } from "@prisma/client"
import { eachDayOfInterval } from "date-fns"
import { useMemo, useState } from "react"

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

interface ListingClientProps{
    reservations?: Reservation[]
    listing: SafeListings & {
        user: SafeUser
    }
    currentUser?: SafeUser | null
}

const ListingClient:React.FC<ListingClientProps> = ({
    listing, currentUser, reservations = []
}) => {

    const disabledDates = useMemo(() => {
        let dates: Date[] = []

        reservations.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate)
            })
        dates = [...dates, ...range]
        })
        return dates
    }, [reservations])

    const [isLoading, setIsLoading] = useState(false)

    const category = useMemo(() => {
        return categories.find((item) =>
        
        item.label === listing.category)
    }, [listing.category])

  return (
    <Container>
        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col gap-6">
                <ListingHead
                title={listing.title}
                locationValue={listing.locationValue}
                imageSrc={listing.imageSrc}
                id={listing.id}
                currentUser={currentUser}
                />
                <div className="grid
                grid-cols-1
                md:grid-cols-7
                md:gap-10
                mt-6">
                    <ListingInfo
                    user={listing.user}
                    description={listing.description}
                    guestCount={listing.guestCount}
                    roomCount={listing.roomCount}
                    bathroomCount={listing.bathroomCount}
                    category={category}
                    locationValue={listing.locationValue}
                    />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ListingClient