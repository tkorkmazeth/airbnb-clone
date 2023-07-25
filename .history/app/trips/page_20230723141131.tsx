import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"

const TripsPage = async () => {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return(
            <ClientOnly>
                <EmptyState
                title='Unauthorized'
                subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({userId: currentUser.id})
}