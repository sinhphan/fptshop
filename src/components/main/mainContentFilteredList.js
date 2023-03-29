import { memo, useContext } from "react";
import { CheckedItemsContext, FilterContext, SetCheckedItemsContext } from "./main";

function MainContentFilteredList() {
  let filteredProducts = useContext(FilterContext)
  let checkedItems = useContext(CheckedItemsContext)
  let setCheckedItems = useContext(SetCheckedItemsContext)

  let productQuantity = filteredProducts.listDefault.list.length

  let listBrand = checkedItems.filter(e => e.id != -1 && e.parentOrder === -1)
  let listPrice = checkedItems.filter(e => e.id != -1 && e.parentOrder === 0)
  let listScreenSize = checkedItems.filter(e => e.id != -1 && e.parentOrder === 1)

  let brandName = listBrand.length === 1 ? listBrand[0].name : ''
  let price = listPrice.length === 1 ? listPrice[0].name : ''
  let screenSize = listScreenSize.length === 1 ? listScreenSize[0].name : ''


  return (
    <div className="main-content-filter-list">
      <div className="main-content-filter-list-header flex ali-center">
        <h3>Laptop {brandName} {price} {screenSize}</h3>
        <span>
          ( {productQuantity} sản phẩm )
        </span>
      </div>
      <div className="main-content-filter-list-content flex">
        <p >Lọc theo: </p>
        {checkedItems.map((checkedItem, id) => {

          return checkedItem.id === -1 ?
            (<div key={id}></div>) :
            (<span
              className='list-filter'
              data-id={checkedItem.id}
              data-parent={checkedItem.parentOrder}
              key={id}
            >
              {checkedItem.name}
              <i className="icon-cancel"></i>
            </span>)
        })}
      </div>
    </div>
  )
}


export default MainContentFilteredList = memo(MainContentFilteredList)