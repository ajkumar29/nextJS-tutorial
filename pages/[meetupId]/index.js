import MeetupDetails from "../../components/meetups/MeetupDetail";

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

  const meetupId = context.params.meetupId;

  return {
    props: {
      id: meetupId,
      image:
        "https://www.costaexcursions.es/wp-content/uploads/2019/03/cadiz.jpg",
      title: "hello",
      address: "sdvs",
      description: "hi",
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
      {
        params: {
          meetupId: "3",
        },
      },
    ],
  };
}
