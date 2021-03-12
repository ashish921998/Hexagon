import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getRestaurant } from '../../Redux/DetailPage/detailPageActionsTypes'
import { MenuRestaurant } from './MenuRestaurant'
import { OffersPage } from './OffersPage'
import { RestaurantAbout } from './RestaurantAbout'
import { RestaurantAboutSubpart } from './RestaurantAboutSubpart'
import { RestaurantDetail } from './RestaurantDetail'

export const DetailPage = () => {
    const restaurantData = useSelector((store) => store.restaurantDetail.restaurantData)
    console.log(restaurantData)

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getRestaurant())
    }, [])

    return (
        <div>
            {restaurantData.map((restaurant) => {
                let cuisine = restaurant.cuisines
                // cuisine.shift()
                // console.log(cuisine)
                // let offers = restaurant.free_offer.length
                let freeOffers = restaurant.free_offer
                let menuImage = restaurant.menu_images
                let menuLength = restaurant.menu_images.length
                return (
                    <div style={{ width: "1200px", }} key={restaurant.id}>
                        <RestaurantDetail key={restaurant.id} restaurantName={restaurant.resturant_name} image={restaurant.image} location={restaurant.location} timings={restaurant.timings} cuisine={cuisine} averageCost={restaurant.average_cost} />
                        <OffersPage key={restaurant.id} freeOffers={freeOffers} />
                        <MenuRestaurant key={restaurant.id} menuImage={menuImage} menuLength={menuLength} />
                        <RestaurantAbout key={restaurant.id}>
                            {restaurant.about && <p>{restaurant.about}</p>}
                            <RestaurantAboutSubpart type={"cuisine"} />
                        </RestaurantAbout>
                    </div>
                )
            })}
        </div>
    )
}
