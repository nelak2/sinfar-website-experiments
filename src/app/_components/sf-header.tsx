const SinfarHeader = () => {
  return (
    <header>
      <div className="header-left">
        <span>SINFAR</span>
      </div>
      <div className="header-center">
        <span>SERVERS</span>
        <span>PLAYER RESOURCES</span>
        <span>HELP</span>
        <span>DISCORD</span>
        <span>ACCOUNT PANEL</span>
      </div>
      <div className="header-right">
        <span>Login</span>
        <button className="button-a">
          <div className="button-a-content">
            <img
              className="button-a-img"
              src="img/button-a.svg"
              alt="Registration Button"
            />
            <span className="button-a-text">Register</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default SinfarHeader;
