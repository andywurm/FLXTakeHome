import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import './ComponentStyles/SwitchOptions.css'
import fakemap from '../IMG/map.jpg'
import { OverviewInfo } from "../Data/HotelData";

interface IPropsSwitchOptions {
    overview: OverviewInfo[]
}

const SwitchOptions = (props: IPropsSwitchOptions) => {

    const [value, setValue] = useState("one");
    const [clicked, setClicked] = useState("Overview");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const DisplayTab = () => {
        if (clicked === "Overview") {
            return <Overview />
        }
        else if (clicked === "Rooms") {
            return <Rooms />
        }
        else if (clicked === "Amenities") {
            return <Amenities />
        }
        else {
            return <Policies />
        }
    }

    //These Components could also be put in their own separate files
    const Overview = () => {

        return (
            <div className="propertyOpts">

                <div className="property">Property Overview</div>

                <div className="overviewInfo">

                    <div className="propertyOvr">
                        {props.overview.map(i => {
                            return (
                                <div className="perks">
                                    <div className="perkImgContainer">
                                        <img className="perkImg" src={`../Images/${i.img}`} alt="" />
                                    </div>
                                    <div className="perkName">{i.perk}</div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mapContainer"> <img className="mapImg" src={fakemap} alt="" /></div>

                </div>
            </div>
        )
    }

    //These Components could also be put in their own separate files
    const Rooms = () => {
        return (
            <div className="unavailableOpt">
                <div>Room Information Unavailable</div>
            </div>
        )
    }

    //These Components could also be put in their own separate files
    const Amenities = () => {
        return (
            <div className="unavailableOpt">
                <div>Amenity Information Unavailable</div>
            </div>
        )
    }

    //These Components could also be put in their own separate files
    const Policies = () => {
        return (
            <div className="unavailableOpt">
                <div>Policy Information Unavailable</div>
            </div>
        )
    }

    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab value="one" label="Overview" onClick={() => setClicked("Overview")} />
                    <Tab value="two" label="Rooms" onClick={() => setClicked("Rooms")} />
                    <Tab value="three" label="Amenities" onClick={() => setClicked("Amenities")} />
                    <Tab value="four" label="Policies" onClick={() => setClicked("Policies")} />
                </Tabs>
            </Box>

            <DisplayTab />
        </div>
    )
}
export default SwitchOptions;