import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  authorId?: string;
  userId?: string;
}

export async function getReservations(params: IParams) {
  const { listingId, authorId, userId } = params;

  let query: any = {};

  if (listingId) {
    query.listingId = listingId;
  }

  if (userId) {
    query.userId = userId;
  }

  if (authorId) {
    query.listing = { userId: authorId };
  }

  const reservations = await prisma.reservation.findMany({
    where: query,
    include: {
      Listing: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const safeReservations = reservations.map((reservation) => ({
    ...reservation,
    createdAt: reservation.createdAt.toISOString(),
    startDate: reservation.startDate.toISOString(),
  }));
}
