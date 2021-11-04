//our-domain.com/

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "1",
    title: "Paris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    address: " dummy address1",
    description: "first meetup desc",
  },
  {
    id: "2",
    title: "Berlin",
    image:
      "https://strongcitiesnetwork.org/en/wp-content/uploads/sites/5/2017/11/Berlin-Nikolaiviertel-scaled.jpg",
    address: " dummy address2",
    description: "second meetup desc",
  },
  {
    id: "3",
    title: "Spain",
    image:
      "https://www.costaexcursions.es/wp-content/uploads/2019/03/cadiz.jpg",
    address: " dummy address3",
    description: "third meetup desc",
  },
];

export default function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  // fetch data from API/DB
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
