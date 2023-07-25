import getCurrentUser from "../actions/getCurrentUser"
import getListings from "../actions/getListings"

import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"
import TripsClient from "./PropertiesClient"

const PropertiesPage = async () => {
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

    const listings = await getListings({userId: currentUser.id})

    if(listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                title="No trips found"
                subtitle="Looks like you havent reserved any trips"
                />
            </ClientOnly>
        )
    }

    return (
        <TripsClient
        listings={listings}
        currentUser={currentUser}
        />
    )
}

export default PropertiesPage