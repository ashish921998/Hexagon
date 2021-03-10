import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getRestaurant } from '../../Redux/DetailPage/detailPageActionsTypes'
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
                let cuisine = restaurant.cuisine.split(",")
                cuisine.shift()
                console.log(cuisine)
                return (
                    < RestaurantDetail restaurantName={restaurant.resturant_name} image={restaurant.image} location={restaurant.location} timings={restaurant.timings} cuisine={cuisine} averageCost={restaurant.average_cost} />
                )
            })}
        </div>
    )
}
