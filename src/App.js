import React, { Fragment } from "react";
import Contact from "./static/img/contacts.png";
import Notes from "./static/img/notes.png";
import "./static/style/common/shared.css";

function App() {
  return (
    <Fragment>
      <div className="header-background">
        <p className="header-title">KEEPER</p>
        <div className="card-container">
          <div className="card card-contacts">
            <img src={Contact} alt="contact-img"></img>
            <a href="https://keepcontacts-v1.herokuapp.com/">
              <p>Keep Contacts</p>
            </a>
          </div>
          <div className="card card-notes">
            <img src={Notes} alt="contact-img"></img>
            <a href="https://keepnotes-v1.herokuapp.com/">
              <p>Keep Notes</p>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
