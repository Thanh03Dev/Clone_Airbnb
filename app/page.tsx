import { GetServerSideProps, NextPage } from 'next';
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  listings: any[]; // Thay any[] bằng kiểu dữ liệu thích hợp cho listings
  currentUser: any; // Thay any bằng kiểu dữ liệu thích hợp cho currentUser
}

const Home: NextPage<HomeProps> = ({ listings, currentUser }) => {
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const searchParams: IListingsParams = {
    // Các thông số tìm kiếm
  };

  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  return {
    props: {
      listings,
      currentUser,
    },
  };
};

export default Home;
