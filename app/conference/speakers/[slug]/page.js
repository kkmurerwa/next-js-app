import { speakerJson } from "../page";
import styles from "../../conference.module.css";

async function fetchSpeakerInfo(params) {
  console.log("Speaker JSON", speakerJson);

  const speakerInfo = speakerJson.speakers?.find(
    (speaker) => speaker.name == params.slug
  );

  console.log("Speaker Info", speakerInfo);

  return speakerInfo;
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params);

  const { name, bio, sessions } = speakerInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
