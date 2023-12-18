
import { ToastContainer } from 'react-toastify';
import MenuItemLists from './MenuItemLists';
import { SlArrowDown } from "react-icons/sl";
const RestaurantsCategory = ({data,showItem,setShowIndex}) => {
    // console.log(data);
   
    const handlerClick = () => {
       setShowIndex()
    }
    return (
      <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-md p-4 rounded-md items-center">
          <div
            className="flex justify-between cursor-pointer "
            onClick={handlerClick}
          >
            <span className="font-bold text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <span>
              <SlArrowDown />
            </span>
          </div>
          {showItem && <MenuItemLists items={data.itemCards} />}
          <ToastContainer/>
        </div>
      </div>
    );
}

export default RestaurantsCategory