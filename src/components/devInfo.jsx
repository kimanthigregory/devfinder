import "./devInfo.css";
import linkIcon from "../assets/link.svg";
import mapIcon from "../assets/map-pin.svg";
import twiterIon from "../assets/twitter.svg";
import building from "../assets/building.svg";

export default function DevInfo(props) {
  return (
    <article className="section-wrapper">
      <section className="avatar-wrapper">
        <div className="profile-avatar">
          <img src={props.profile} alt=" profile avatar" />
        </div>
      </section>
      <aside>
        <section className="info-wrapper">
          <div className="allInfo">
            <div className="bioInfo">
              <h2>{props.name}</h2>
              <p className="userName">{props.userName}</p>
              {props.bio ? <p> {props.bio}</p> : <p>this profile has no Bio</p>}
            </div>
            <div className="joinDate">
              {props.joinDate && (
                <time>{new Date(props.joinDate).toDateString()}</time>
              )}
            </div>
          </div>
        </section>
        <section className="statistics">
          <div className="repos">
            <h3>Repos</h3>
            {props.repos ? <p> {props.repos}</p> : <p> 0</p>}
          </div>
          <div className="Followers">
            <h3>Followers</h3>
            {props.followers ? <p> {props.followers}</p> : <p>0</p>}
          </div>
          <div className="following">
            <h3>Following</h3>
            {props.following ? <p> {props.following}</p> : <p>0</p>}
          </div>
        </section>
        <section className="links">
          <div className="links-col-one">
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
          </div>
          <div className="links-col-two">
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
          </div>
        </section>
      </aside>
    </article>
  );
}
