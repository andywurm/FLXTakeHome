import { HotelData } from "../Data/HotelData";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DisplayImages from "../Components/DisplayImages";
import './MainPage.css'
import { useEffect, useState } from "react";
import SwitchOptions from "../Components/SwitchOptions";
import { IconButton } from "@mui/material";
import Rooms from "../Components/Rooms";
import UserReviews from "../Components/UserReviews";
import Reviews from "../Components/Reviews";

interface IPropsMainPage {
    hotel: HotelData
}

const MainPage = (props: IPropsMainPage) => {

    const [color, setColor] = useState("#ccffcc")
    const [fontColor, setFontColor] = useState("#008000")
    const [wordRating, setWordRating] = useState("Excellent")

    useEffect(() => {
        if (props.hotel.rating > 7) {
            setWordRating("Excellent")
            setColor("#ccffcc")
            setFontColor("#008000")
        }
        else if (props.hotel.rating >= 4 && props.hotel.rating <= 7) {
            setWordRating("Average")
            setColor("#ffe699")
            setFontColor("#ffa64d")
        }
        else {
            setWordRating("Bad")
            setColor("#ebadad")
            setFontColor("#7b1e1e")
        }
    }, [props.hotel.rating])

    return (
        <div>
            <div className="mainContainer">

                <div className="backBtn">
                    <IconButton>
                        <ArrowBackIcon style={{ fontSize: 25, color: "black", padding: '5px 0' }} />
                    </IconButton>
                </div>

                <div>
                    <DisplayImages imgs={props.hotel.imgs} />
                </div>

                <div className="hotelInfo">

                    <div className="hotelAbout">
                        <div className="hotelName">{props.hotel.hotel}</div>
                        <div className="hotelDescription">{props.hotel.stars}-star hotel located in the heart of {props.hotel.location}</div>
                    </div>

                    <div className="hotelRating">
                        <div className="rateInfo">
                            <div className="hotelWordRating" style={{ color: fontColor }}>{wordRating}</div>
                            <div className="numberOfReviews">1,920 Reviews</div>
                        </div>
                        <div className="hotelScore" style={{ backgroundColor: color, color: fontColor }}>{props.hotel.rating}</div>
                    </div>

                </div>

                <div style={{ marginTop: '2%' }}>
                    <SwitchOptions overview={props.hotel.overview} />
                </div>

            </div>

            <div>
                <Rooms rooms={props.hotel.rooms} />
            </div>

            <div className="mainContainer">

                <div className="reviewSection">
                    <div className="overallReview"><Reviews reviews={props.hotel?.reviews} /></div>
                    <div className="userReviews">
                        {props.hotel.userReviews.map(user => {
                            return (
                                <UserReviews name={user.name} title={user.title} rating={user.rating} feedback={user.feedback} date={user.date} points={user.points} />
                            )
                        })}
                    </div>
                </div>

            </div>


        </div>
    )

}

export default MainPage;