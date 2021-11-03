import classes from "./MeetupDetail.module.css";

export default function MeetupDetails({ img, title, address, description }) {
  return (
    <section className={classes.detail}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
