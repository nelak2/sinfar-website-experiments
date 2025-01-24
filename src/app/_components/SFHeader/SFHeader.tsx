import SFDropdownMenu from "../SFDropdownMenu/SFDropdownMenu";
import styles from "./SFHeader.module.css";
import Image from "next/image";

const SFHeader = () => {
  return (
    <header>
      <div className={styles.headerLeft}>
        <span>SINFAR</span>
      </div>
      
      <div className={styles.headerCenter}>
        <span>SERVERS</span>
        <SFDropdownMenu 
          label="PLAYER RESOURCES" 
          items={[
            { label: 'Guides', items: ['Character Customization', 'Approval Points', 'Chat Channels'] },
            { label: 'Portraits', items: ['How To', 'Gallery', 'Download', 'Upload'] }
          ]} 
        />
        <SFDropdownMenu 
          label="HELP" 
          items={['Technical Help', 'Housing Requests', 'DM Requests', 'Report abuse/harassment', 'Report bugs']} 
        />
        <span>DISCORD</span>
        <SFDropdownMenu 
          label="ACCOUNT PANEL" 
          items={['My Account', 'Password Reset', 'Characters']} 
        />
      </div>

      <div className={styles.headerRight}>
        <span>Login</span>
        <button className="button-a">
          <div className="button-a-content">
            <Image src="/img/button-a.svg" alt="Registration Button" height={30} width={113}/>
            <span className="button-a-text">Register</span>
          </div>
        </button>
      </div>

    </header>
  );
};

export default SFHeader;
