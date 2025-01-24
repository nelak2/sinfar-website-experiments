const SinfarHome = () => {
    return (
        <div className="content">
        <img className="main-logo" src="img/Main_Logo.svg" alt="Sinfar Logo" />

        <h1>WELCOME TO SINFAR</h1>
        <h2>NEVERWINTER NIGHTS ROLEPLAYING SERVER</h2>
        <p className="intro-text">Discover a world where community is key. Our NWN server is a place where you can connect with like-minded individuals, roleplay to your heart's <br /> content, and create lasting friendships</p>

        <div className="button-container">
            <div className="test-container" onmousemove="spotlightMove(event)" onmouseleave="spotlightLeave(event)" onmouseenter="spotlightEnter(event)">
                <div className="spotlight-container">
                  <div className="spotlight"></div>
                </div>
                <div className="button-b-content">
                    <img className="button-b-img" src="img/button-b.svg" alt="Create Account" />
                    <span className="button-b-text">Create Account</span>
                </div>
            </div>
            <div className="test-container" onmousemove="spotlightMove(event)" onmouseleave="spotlightLeave(event)" onmouseenter="spotlightEnter(event)">
                <div className="spotlight-container">
                  <div className="spotlight"></div>
                </div>
                <div className="button-b-content">
                    <img className="button-b-img" src="img/button-b.svg" alt="Download" />
                    <span className="button-b-text">Download</span>
                </div>
            </div>
            <div className="test-container" onmousemove="spotlightMove(event)" onmouseleave="spotlightLeave(event)" onmouseenter="spotlightEnter(event)">
                <div className="spotlight-container">
                  <div className="spotlight"></div>
                </div>
                <div className="button-b-content">
                    <img className="button-b-img" src="img/button-b.svg" alt="Join the Community" />
                    <span className="button-b-text">Join the Community</span>
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default SinfarHome;
  