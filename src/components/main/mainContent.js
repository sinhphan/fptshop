import { memo, useContext } from "react";
import Products from "./products";
import "../../asset/css/main-content.css"
import BrandListSlider from "./brandListSlider";
import FilterByCustomerNeed from "./filterByCustomerNeed";
import { CheckedItemsContext } from "./main";
import MainContentFilteredList from "./mainContentFilteredList";

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