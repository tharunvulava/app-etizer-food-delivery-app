import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  console.log(resData);
  return (
    <div className="m-4 p-4 w-[219px] bg-red-200 hover:bg-red-300 ">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime + " mins"}</h4>
    </div>
  );
};

export const withfreeDelivery = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-[#fcc200] p-1 m-2 rounded-md">
          Free Delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
