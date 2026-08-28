import React from "react";

function PhoneMock() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-island" />
        <p className="phone-kicker">Boynton Beach</p>
        <h3 className="phone-title">Hem Over Heels</h3>
        <div className="phone-grid">
          <div className="phone-tile">Alterations</div>
          <div className="phone-tile">Shoe Repair</div>
          <div className="phone-tile">Sharpening</div>
          <div className="phone-tile">Embroidery</div>
        </div>
        <button className="phone-cta" type="button" tabIndex={-1}>
          Book a visit
        </button>
      </div>
    </div>
  );
}

export default PhoneMock;
