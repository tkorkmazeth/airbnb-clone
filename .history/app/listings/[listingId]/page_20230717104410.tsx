import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById"
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import { SafeListings } from "@/app/types"

interface IParams {
  listingId?: string
}

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser()

  if(!listing) {
    return (
      <ClientOnly>
        <EmptyState/>
      </ClientOnly>
    )
  }
  return (
    <div></div>
  )
}

export default ListingPage