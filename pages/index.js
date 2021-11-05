//our-domain.com/

import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export default function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  // fetch data from API/DB
  const client = await MongoClient.connect(
    "mongodb+srv://ajanthan:1nkWHS1ymVKXun6Y@cluster0.2px1e.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req; //only have access to these in getserversideprops
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
