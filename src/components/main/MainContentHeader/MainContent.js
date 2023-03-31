import { memo, useContext } from "react";
import Products from "../Products/Products";
import "../../../asset/css/main-content.css"
import BrandListSlider from "./BrandListSlider";
import FilterByCustomerNeed from "./FilterByCustomerNeed";
import { CheckedItemsContext } from "../Main";
import MainContentFilteredList from "./MainContentFilteredList";

function MainContent() {
  let checkedItems = useContext(CheckedItemsContext)

  const hasCustomerFilters = checkedItems.some(e => e.id !== -1)

  let mainHeaderCss = hasCustomerFilters ? 'hide' : ''
  let filteredListCss = hasCustomerFilters ? '' : 'hide'


  return (
    <div className="l-9">
      <div className={mainHeaderCss}>
        <BrandListSlider />
        <FilterByCustomerNeed />
      </div>
      <div className={filteredListCss}>
        <MainContentFilteredList />
      </div>
      <Products />
    </div>
  )
}

export default MainContent = memo(MainContent)