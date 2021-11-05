import MeetupDetails from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

export default function MeetupDetail({ image, title, address, description }) {
  console.log(image);
  return (
    <MeetupDetails
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const client = await MongoClient.connect(
    "mongodb+srv://ajanthan:1nkWHS1ymVKXun6Y@cluster0.2px1e.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({
    _id: ObjectId(context.params.meetupId),
  });
  client.close();
  return {
    props: {
      id: context.params.meetupId,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address,
      description: meetup.description,
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ajanthan:1nkWHS1ymVKXun6Y@cluster0.2px1e.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
