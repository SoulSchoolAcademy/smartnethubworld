import "./globals.css";


export default function Home(){
  return (
    <div className="container">
      <header className="header">
        <div>
          <div style={{fontWeight:700}}>SmartNet Command Station</div>
          <div style={{fontSize:12,opacity:.8}}>SoulSync — Powered by SmartUnityCore · <span className="badge">SmartBeat Live</span></div>
        </div>
        <button className="create">Create</button>
      </header>
      <section className="pulse">
        <div className="pulseViz" />
        <div>
          <div className="tile"><b>Self-Check:</b> All systems green · Performance 97 · A11y Pass · Security Hardened</div>
          <div className="nav" style={{marginTop:10}}>
            <a>SmartMedia Hub</a><a>SmartFeeds</a><a>SmartRooms</a><a>SmartEvents</a><a>Marketplace</a><a>SmartCoin & Wallet</a>
          </div>
        </div>
      </section>
      <section>
        <div className="tile">Activity Stream: [Demo] Initial skeleton commit</div>
      </section>
      <section style={{marginTop:20}}>
        <div className="tile"><b>Deploy Center:</b> Last Deployment Demo v0.1 · Rollback</div>
      </section>
      <footer className="footer">One Human Family, All Connected · © SmartNet</footer>
    </div>
  )
}
