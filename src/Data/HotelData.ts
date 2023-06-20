
export interface HotelData {
    hotel: string,
    imgs: string[],
    stars: number,
    location: string,
    rating: number,
    overview: OverviewInfo[],
    rooms: RoomsInfo[],
    reviews: object,
    userReviews: UserReview[]
}

export interface OverviewInfo {
    perk: string,
    img: string
}

export interface RoomsInfo {
    roomType: string,
    size: number,
    people: number,
    beds: string,
    refund: boolean,
    breakfast: boolean,
    price: number,
    img: string,
}

export interface UserReview {
    name: string,
    title: string,
    rating: number,
    feedback: string,
    date: string,
    points: string[],
}

const hoteldata: HotelData[] = [
    {
        hotel: "Hotel Norrebro",
        imgs: ["hotelbed.jpg", "hotelfront.jpg", "hotelpool.jpg", "hotelbed2.jpg", "hotelbathroom.jpg"],
        stars: 3,
        location: "Copenhagen",
        rating: 9.6,
        overview: [
            {
                perk: "Free Wifi",
                img: "wifi.png"
            },
            {
                perk: "Air conditioning",
                img: "wind-sign.png"
            },
            {
                perk: "Private bathroom",
                img: "shower.png"
            },
            {
                perk: "Key card access",
                img: "id-card.png"
            },
            {
                perk: "Free Parking",
                img: "parking.png"
            },
            {
                perk: "24-hour front desk",
                img: "time.png"
            }
        ],
        rooms: [
            {
                roomType: "Double standard room",
                size: 16,
                people: 2,
                beds: "1 queen bed or 2 separate beds",
                refund: false,
                breakfast: true,
                price: 180,
                img: "doublestandard2.jpg"
            },
            {
                roomType: "Comfort single room",
                size: 21,
                people: 2,
                beds: "1 king size bed",
                refund: false,
                breakfast: true,
                price: 220,
                img: "comfortsingle.jpg"
            },
            {
                roomType: "Double standard room",
                size: 25,
                people: 2,
                beds: "1 king size bed",
                refund: false,
                breakfast: true,
                price: 250,
                img: "doublestandard.jpg"
            },
            {
                roomType: "Double fancy room",
                size: 35,
                people: 2,
                beds: "1 king size bed and couch",
                refund: false,
                breakfast: true,
                price: 280,
                img: "doublefancy.jpg"
            }
        ],
        reviews: {
            total: 9.6,
            cleanliness: 10,
            amenities: 7,
            location: 9
        },
        userReviews: [
            {
                name: "Mark M.",
                title: "Excellent value for the price!",
                rating: 10,
                feedback: "We enjoyed our stay at this hotel. We will definitely come back!",
                date: "20 September, 2022",
                points: ["Great Location!", "Service", "Bottle of champagne in the room!"]
            }
            ,
            {
                name: "Ashley W.",
                title: "Good hotel but noisy location",
                rating: 5.6,
                feedback: "We enjoyed our stay at this hotel. We will definitely come back!",
                date: "12 September, 2022",
                points: ["Noisy", "Nice hotel", "Good service"]
            }
        ]
    }
]

export default hoteldata; 