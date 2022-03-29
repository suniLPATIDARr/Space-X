import React from "react";
import {
    Label,
} from "reactstrap";
const Article = (props) => {
    return(
        props.data.data.map((item, index) => 
          <li
            style={{
              listStyleType: "none",
              display: "inline-block",
              border: "1px solid #CBCED0",
              padding: 5,
              margin: 5,
            }}
          >
            <article>
              <img height={200} alt='loading' width={200} src={item.links.mission_patch}></img>
              <Label>
                <b>Mission Id`s :</b>
              </Label>
              <br />
              <ul>
                {item.mission_id.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
              <Label>
                <b>Launch Year :</b>
                <span>{item.launch_year}</span>
              </Label>
              <br />
              <Label>
                <b>Successful Launch :</b>{" "}
                <span>{item.launch_success ? item.launch_success.toString() : ''}</span>
              </Label>
              <br />
              <Label>
                <b>Successful Landing :</b>{" "}
                <span>
                  {item.rocket.first_stage.cores[0].land_success
                    ? item.rocket.first_stage.cores[0].land_success.toString()
                    : ""}
                </span>
              </Label>
            </article>
          </li>)
    )
}
export default Article;