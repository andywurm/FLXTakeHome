import './ComponentStyles/Rooms.css'
import size from '../IMG/full-size.png'
import people from '../IMG/user.png'
import bed from '../IMG/bed.png'
import { RoomsInfo } from '../Data/HotelData'

interface IPropsRoomCards {
    rooms: RoomsInfo[]
}
const RoomCards = (props: IPropsRoomCards) => {

    return (
        <div className='roomCardsContainer'>

            {props.rooms.map(room => {
                return (
                    <div className='roomCard'>

                        <div className='roomCardImgContainer'><img className='roomImg' src={`../Images/${room.img}`} alt='' /></div>

                        <div className='keepRoomInfo'>

                            <div className='roomType'>{room.roomType}</div>

                            <div className='roomCardInfo'>
                                <img src={size} alt='' className='textIcons' />
                                <div> &nbsp; {room.size} sqm</div>
                            </div>
                            <div className='roomCardInfo'>
                                <img src={people} alt='' className='textIcons' />
                                <div> &nbsp; {room.people} people</div>
                            </div>
                            <div className='roomCardInfo'>
                                <img src={bed} alt='' className='textIcons' />
                                <div> &nbsp; {room.beds}</div>
                            </div>

                            <div className='bools'>
                                {room.refund ? "Refundable" : "Non-refundable"}
                                {room.breakfast ? ", Breakfast included" : ""}
                            </div>
                        </div>

                        <div className='rBtn'><button className='roomBtn'>Book now for &#36;{room.price}</button></div>

                    </div>
                )
            })}

        </div>
    )

}

export default RoomCards;