import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getRestaurant } from "../../Redux/DetailPage/detailPageActionsTypes";
import { Booking } from "./Booking";
import { MenuRestaurant } from "./MenuRestaurant";
import { OffersPage } from "./OffersPage";
import { RestaurantAbout } from "./RestaurantAbout";
import { RestaurantAboutSubpart } from "./RestaurantAboutSubpart";
import { RestaurantDetail } from "./RestaurantDetail";
import styles from "./DetailPage.module.css";

export const DetailPage = () => {
  const { name } = useParams();
  const restaurantData = useSelector((store) =>
    store.restaurantDetail.restaurantData.filter(
      (item) => item.resturant_name === name && item
    )
  );
  let [id] = restaurantData.map((item, i) => item._id);

  console.log(id, restaurantData);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getRestaurant());
  }, []);
  let cuisinestr = [];
  let cuisine = [];
  return (
    <div className={styles.container}>
      <div style={{ width: "100%" }} className={styles.restaurant_Detail}>
        {restaurantData.map((restaurant, i) => {
          let cuisinestr = [];
          let cuisine = restaurantData[i].cuisines.map((item, i) =>
            cuisinestr.push(item.cuisine)
          );
          let typestr = [];
          let type = restaurantData[i].tags.map((item, i) =>
            typestr.push(item.tag)
          );
          return (
            <div key={restaurant.id}>
              <RestaurantDetail
                key={restaurant.id}
                restaurantName={restaurant.resturant_name}
                image={restaurant.image}
                location={restaurant.location}
                timings={restaurant.timings}
                cuisine={restaurant.cuisines}
                averageCost={restaurant.average_cost}
              />
              <OffersPage
                key={restaurant.id}
                freeOffers={restaurant.free_offer}
              />
              <MenuRestaurant
                key={restaurant.id}
                menuImage={restaurant.menu_images}
                menuLength={1}
              />
              <RestaurantAbout key={restaurant.id}>
                {restaurant.about && <p>{restaurant.about}</p>}
                <RestaurantAboutSubpart type={"cuisine"} cuisine={cuisinestr} />
                <RestaurantAboutSubpart type={"tag"} cuisine={typestr} />
              </RestaurantAbout>
            </div>
          );
        })}
      </div>
      <div className={styles.booking_container}>
        <Booking id={id} name={name} />
      </div>
    </div>
  );
};
