import { useState } from 'react'
import './ComponentStyles/DisplayImages.css'

interface IPropsDisplayImages {
    imgs: string[]
}

const DisplayImages = (props: IPropsDisplayImages) => {

    const [arr, setArr] = useState<string[]>(props.imgs)

    function changeImg(index: number) {

        let tempArr = arr.filter(i => i !== arr[index])
        tempArr.unshift(arr[index])

        setArr(tempArr)

    }

    return (
        <div>
            <div className='hotelimgs'>
                {arr.map((pic, idx) => {
                    return (
                        <div onClick={() => changeImg(idx)} className={`item-${idx + 1}`} >
                            <img className='hImg' src={`../Images/${pic}`} alt="" />
                        </div>)
                })}
            </div>
        </div>
    )

}

export default DisplayImages;