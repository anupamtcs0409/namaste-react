import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ResturantCard = ({ resData }) => {
  const { name, cuisine, rating, deliveryTime, img, costForTwo } = resData.data; // Destructure directly
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={img} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4> {/* Join the array for display */}
      <h4>{rating} stars</h4>
      <h5>{deliveryTime} minutes</h5>
      <h5>Rs.{costForTwo} for two</h5>
    </div>
  );
};

export default ResturantCard;
