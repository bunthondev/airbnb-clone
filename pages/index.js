import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>PAPA Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <Banner />
    <main className="px-8 mx-auto max-w-7xl sm:px-16">
      <section>
        <h2 className="pt-6 text-4xl font-semibold">Explore nearby</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {
            exploreData?.map(item => (
            <SmallCard 
              key={item?.img}
              img={item?.img}
              location={item?.location}
              distance={item?.distance}
            />
            ))
          }
        </div>
      </section>
      <section>
        <h2 className="py-8 text-4xl font-semibold">Live anywhere</h2>
        <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
          {
            cardData?.map(item => (
              <MediumCard key={item?.img} img={item?.img} title={item?.title} />
            ))
          }
        </div>
      </section>
      <LargeCard 
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb."
        buttonText="Get Inspired"
      />
    </main>
    <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  const cardData = await fetch('https://links.papareact.com/zp1').then(res => res.json());
  console.log('cardData', cardData)
  return {
    props: {
      exploreData,
      cardData
    }
  }
}
