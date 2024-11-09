import "./devInfo.css";
import avatar from "../assets/github.svg";
import linkIcon from "../assets/link.svg";
import mapIcon from "../assets/map-pin.svg";
import twiterIon from "../assets/twitter.svg";
import building from "../assets/building.svg";

export default function DevInfo(props) {
  return (
    <article className="section-wrapper">
      <section className="info-wrapper">
        <div className="profile-avatar">
          <img src={avatar} alt=" profile avatar" />
        </div>
        <div className="allInfo">
          <div className="biolInfo">
            <h2>{props.name}</h2>
            <p>{props.userName}</p>
            {props.bio ? <p> {props.bio}</p> : <p>this profile has no Bio</p>}
          </div>
          <div className="joinDate">
            <time>{new Date(props.joinDate).toDateString()}</time>
          </div>
        </div>
      </section>
      <section className="statistics">
        <div className="repos">
          <h3>Repos</h3>
          {props.repos ? <p> {props.repos}</p> : <p> not available </p>}
        </div>
        <div className="Followers">
          <h3>Followers</h3>
          {props.followers ? <p> {props.followers}</p> : <p>not available</p>}
        </div>
        <div className="following">
          <h3>Following</h3>
          {props.following ? <p> {props.following}</p> : <p>not available</p>}
        </div>
      </section>
      <section>
        <p>
          <span>
            <img src={mapIcon} alt="map Icon" />
          </span>
          {props.location ? <p> {props.location}</p> : <p>not available</p>}
        </p>
        <p>
          <span>
            <img src={linkIcon} alt="link icon" />
          </span>
          {props.links ? <p> {props.links}</p> : <p>not available</p>}
        </p>
        <p>
          <span>
            <img src={twiterIon} alt="twiter icon" />
          </span>
          {props.twiter ? <p> {props.twiter}</p> : <p>not available</p>}
        </p>
        <p>
          <span>
            <img src={building} alt="github icon" />
          </span>
          {props.company ? <p> {props.company}</p> : <p>not available</p>}
        </p>
      </section>
    </article>
  );
}
