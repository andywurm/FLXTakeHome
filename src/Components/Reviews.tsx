import LinearProgress from "@mui/joy/LinearProgress";
import './ComponentStyles/Reviews.css'

interface IPropsReview {
    reviews: any
}

const Reviews = (props: IPropsReview) => {

    //Linear Progess could be its own component

    return (
        <div className="reviewsContainer">
            <div className="overallTitle">Reviews</div>
            <div className="score">{props.reviews.total}/10</div>

            <div className="Cat">
                <div className="progressHeader">
                    <div className="categories">Cleanliness</div>
                    <div className="outOfTen">{props.reviews.cleanliness}/10 </div>
                </div>

                <LinearProgress
                    sx={{
                        color: 'rgb(83, 83, 248)',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'lightgray'
                        }
                    }}
                    determinate value={props.reviews.cleanliness * 10} />
            </div>

            <div className="Cat">
                <div className="progressHeader">
                    <div className="categories">Amenities</div>
                    <div className="outOfTen">{props.reviews.amenities}/10 </div>
                </div>

                <LinearProgress
                    sx={{
                        color: 'rgb(83, 83, 248)',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'lightgray'
                        }
                    }}
                    determinate value={props.reviews.amenities * 10} />
            </div>

            <div className="Cat">
                <div className="progressHeader">
                    <div className="categories">Location</div>
                    <div className="outOfTen">{props.reviews.location}/10 </div>
                </div>

                <LinearProgress
                    sx={{
                        color: 'rgb(83, 83, 248)',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: 'lightgray'
                        }
                    }}
                    determinate value={props.reviews.location * 10} />
            </div>

        </div>
    )

}

export default Reviews;