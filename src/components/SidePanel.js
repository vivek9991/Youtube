import HomeIcon from "../assets/home.png";
import ShortsIcon from "../assets/shorts.jpeg";
import SubscriptionsIcon from "../assets/subscriptions.png";
import ProfileIcon from "../assets/profile.png";
const SidePanel = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <img
        src={HomeIcon}
        alt="Home icon"
        style={{ width: "80px", marginLeft: "-13px" }}
      />
      <img
        src={ShortsIcon}
        alt="Shorts icon"
        style={{ width: "40px", marginLeft: "6px" }}
      />
      <img
        src={SubscriptionsIcon}
        alt="Subscriptions icon"
        style={{ width: "30px", marginLeft: "11px", marginTop: "8px" }}
      />
      <img
        src={ProfileIcon}
        alt="Profile icon"
        style={{ width: "30px", marginLeft: "11px", marginTop: "18px" }}
      />
    </div>
  );
};
export default SidePanel;
