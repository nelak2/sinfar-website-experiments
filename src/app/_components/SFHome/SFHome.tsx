import SFButtonB from "../SFButtonB/SFButtonB";
import Image from "next/image";
import styles from "./SFHome.module.css";

const SFHome = () => {
  return (
    <div className={styles.content}>
      <Image
        src="/img/Main_Logo.svg"
        alt="Sinfar Logo"
        width={100}
        height={172}
        className={styles.mainLogo}
      />
      
      <h1>WELCOME TO SINFAR</h1>
      <h2>NEVERWINTER NIGHTS ROLEPLAYING SERVER</h2>
      <p className={styles.introText}>
        Discover a world where community is key. Our NWN server is a place where
        you can connect with like-minded individuals, roleplay to your heart&apos;s{" "}
        <br /> content, and create lasting friendships
      </p>

      <div className={styles.buttonContainer}>
        <SFButtonB label="Create Account" />
        <SFButtonB label="Download" />
        <SFButtonB label="Join the Community" />
      </div>
    </div>
  );
};

export default SFHome;
