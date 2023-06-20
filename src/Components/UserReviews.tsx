import { useEffect, useState } from 'react'
import './ComponentStyles/UserReviews.css'

interface IPropsUserReviews {
    name: string,
    title: string,
    rating: number,
    feedback: string,
    date: string,
    points: string[]
}

const UserReviews = (props: IPropsUserReviews) => {

    const [color, setColor] = useState("#ccffcc")
    const [fontColor, setFontColor] = useState("#008000")
    const [wordRating, setWordRating] = useState("Excellent")

    useEffect(() => {
        if (props.rating > 7) {
            setWordRating("Excellent")
            setColor("#ccffcc")
            setFontColor("#008000")
        }
        else if (props.rating >= 4 && props.rating <= 7) {
            setWordRating("Average")
            setColor("#ffe699")
            setFontColor("#ffa64d")
        }
        else {
            setWordRating("Bad")
            setColor("#ebadad")
            setFontColor("#7b1e1e")
        }
    }, [props.rating])

    return (
        <div className='userContainer'>

            <div className='userReviewContainer'>

                <div>
                    <div className='topOfUserReview'>
                        <div className='userInfo'>
                            <div className='userTitle'>{props.title}</div>
                            <div className='userName'>{props.name}</div>
                        </div>

                        <div className='userGivenScore'>
                            <div className="wordRating" style={{ color: fontColor }}>{wordRating} &nbsp;</div>
                            <div className='userScore' style={{ backgroundColor: color, color: fontColor }}> {props.rating}</div>
                        </div>
                    </div>
                </div>

                <div className='feedback'>{props.feedback}</div>

                <div className='bottomOfUserReview'>

                    <div className='pointContainer'>
                        <ul style={{ color: fontColor }} className='ulStyle'>
                            {props.points.map((point: string) => {
                                return (
                                    <li className='points'><span style={{ color: 'black' }}>{point}</span></li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='dateContainer'>
                        <div className='reviewed'>Reviewed on</div>
                        <div className='date'>{props.date}</div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default UserReviews;