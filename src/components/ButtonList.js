import { BUTTONLIST_MOCK_DATA } from "../utils/constants";

const ButtonList = () => {

    return (
        <div className='flex overflow-x-scroll space-x-4 '>
            {
                BUTTONLIST_MOCK_DATA.map((item, index) => {
                    return <p key={index} className='bg-neutral-500 rounded-lg min-w-fit p-1 m-1'>{item}</p>
                })
            }
        </div>
    )
}

export default ButtonList;