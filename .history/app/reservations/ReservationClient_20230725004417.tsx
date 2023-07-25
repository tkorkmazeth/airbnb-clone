'use client'

import { useRouter } from "next/navigation"
import Container from "../components/Container"
import Heading from "../components/Heading"
import ListingCard from "../components/listings/ListingCard"
import { SafeReservation, SafeUser } from "../types"
import { useCallback, useState } from "react"

interface ReservationClientProps {
  reservation?: SafeReservation[]
  currentUser?: SafeUser | null
}

const ReservationClient:React.FC<ReservationClientProps> = ({
  reservation, currentUser
}) => {

  const router = useRouter()
  const [deletingId, setDeletingId] = useState('')

  const onDelete = useCallback((id:string) => {

  }, [router])


  return (
    <Container>
      <Heading
      title="Reservations"
      subtitle="Bookings on your properties"
      />
      <div className='
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        '>
          {reservation?.map((reservation) => (
            <ListingCard
            key={reservation.id}
            onAction={onDelete}
            />
          ))}
      </div>
    </Container>
  )
}

export default ReservationClient