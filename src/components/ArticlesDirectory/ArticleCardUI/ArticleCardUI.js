import React from "react";
import DotList from "../../../components/UIWidgets/DotList/DotList";
import "./ArticleCardUI.css";

const articleCard = (props) => (
  <div className="Card">
    <div
      className="Card__Img"
      style={{ backgroundImage: `url(${props.picture})` }}
    ></div>
    <div className="Card__Content">
      <div className="Card__Content--Heading">
        <p>{props.title.substr(0, 30) + "..."}</p>
      </div>
      <div className="Card__Content--Info">
          <p>{props.author + " . " + props.postedOn}</p>
        {/*<DotList items={["Muzamil Hussain", props.postedOn]} theme="warm" />*/}
      </div>
      <div className="Card__Content--Overview">
        <p>{props.body.substr(0, 180) + "..."}</p>
      </div>
    </div>
    <button className="Card__Button">
      <strong>Read full Article</strong>
    </button>
  </div>
);

export default articleCard;
