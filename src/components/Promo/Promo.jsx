import PromoImg from "../../images/promo-img.png";
// import PromoImgMob from "../../images/promo-img-mob.png ";
import OdatabizClientImg from "../../images/databiz.svg";
import AudioPhileClientImg from "../../images/audioPhile.svg";
import MeetClientImg from "../../images/meet.svg";
import MakerClientImg from "../../images/maker.svg";
import "./promo.css";

function Promo() {
	return (
		<div className="promo">
			<div className="promo-info">
				<div className="promo-info-content">
					<div className="promo-title">Make remote work</div>
					<p className="promo-text">
						Get your team in sync, no matter your location. Streamline
						processes, create team rituals, and watch productivity soar.
					</p>
					<button className="promo-btn">Learn more</button>
				</div>
				<ul className="client-list">
					<li className="client">
						<img src={OdatabizClientImg} alt="OdatabizClientImg" />
					</li>
					<li className="client">
						<img src={AudioPhileClientImg} alt="AudioPhileClientImg" />
					</li>
					<li className="client">
						<img src={MeetClientImg} alt="MeetClientImg" />
					</li>
					<li className="client">
						<img src={MakerClientImg} alt="MakerClientImg" />
					</li>
				</ul>
			</div>
			<div className="promo-img">
				<img src={PromoImg} alt="PromoImage" />
			</div>
		</div>
	);
}

export default Promo;
