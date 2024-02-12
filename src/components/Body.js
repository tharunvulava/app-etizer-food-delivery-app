import RestaurantCard, { withfreeDelivery } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filteredRes, setfilteredRes] = useState([]);

  RestaurantCardFreeDelivery = withfreeDelivery(RestaurantCard);

  //console.log("Body Rendered", listofRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>Looks like you are offine.Please check your internet connection</h1>
    );

  return listofRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-col justify-center items-center m-4 p-4">
        <div>
          <input
            type="text"
            className="border border-solid border-black px-4 py-2  rounded-lg w-80"
            placeholder="Search for any restaurant or cuisine"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-2 bg-green-500 text-white rounded-lg"
            onClick={() => {
              const filteredRes = listofRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchtext.toLowerCase()) ||
                  res.info.cuisines.some((cuisine) =>
                    cuisine.toLowerCase().includes(searchtext.toLowerCase())
                  )
              );
              setfilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.sla.deliveryTime < 27 ? (
              <RestaurantCardFreeDelivery resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
