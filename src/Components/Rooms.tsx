import { RoomsInfo } from '../Data/HotelData'
import './ComponentStyles/Rooms.css'
import RoomCards from './RoomCards'

interface IPropsRooms {
    rooms: RoomsInfo[]
}

const Rooms = (props: IPropsRooms) => {

    return (
        <div className="roomContainer">

            <div className='insideContainer'>
                <br />
                <div className='roomTitle'>Rooms</div>
                <RoomCards rooms={props.rooms} />
            </div>

        </div>
    )
}
export default Rooms;