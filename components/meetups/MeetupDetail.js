import classes from "./MeetupDetail.module.css";
import Image from "next/image";

export default function MeetupDetails({ image, title, address, description }) {
  return (
    <section className={classes.detail}>
      <Image src={image} alt="" width="150" height="150" layout="responsive" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
