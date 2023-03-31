import { memo, useContext, useState } from "react"
import { CheckedItemsContext, FilterContext } from "../Main"




function MainSidebarGroup({ attributeItem, onClick, categoryOrder }) {
  const data = useContext(FilterContext)
  const checkedItems = useContext(CheckedItemsContext)

  const specItems = data.navFilterAttributeItem.specItems

  let isAllChecked = checkedItem => checkedItem.id === -1 && checkedItem.parentName === attributeItem.nameAscii
  const specItemsOfThisAttr = specItems.filter(e => e.attributeID === attributeItem.id)
  const allCheckedCssClass = checkedItems.find(isAllChecked) ?
    "c-12 checkbox active" : "c-12 checkbox"


  const handleCheckItem = onClick

  return (
    <div className="main-sidebar-group">
      <h3>{attributeItem.name}</h3>
      <div
        className="main-sidebar-group-options flex"
        data-query={attributeItem.nameAscii}
        data-order={categoryOrder}
      >
        <div
          className={allCheckedCssClass}
          style={{ order: -100 }}
          data-id={-1}
          data-search-key=''
          data-name=''
          data-search-category=''
          onClick={handleCheckItem}
        >
          <i className="iconcate-checkbox"></i>
          Tất Cả
        </div>

        {specItemsOfThisAttr.map((e, i) => {
          let isChecked = checkedItem => checkedItem.id === i && checkedItem.parentName === attributeItem.nameAscii
          let checked = checkedItems.find(isChecked)
          let itemCheckedCssClass = checked ? "c-12 checkbox active" : "c-12 checkbox"

          return (
            <div
              key={i}
              className={itemCheckedCssClass}
              data-id={i}
              data-name={e.name}
              data-search-key={e.nameAscii}
              data-search-category={attributeItem.nameAscii}
              onClick={handleCheckItem}
            >
              <i className="iconcate-checkbox"></i>
              {e.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainSidebarGroup = memo(MainSidebarGroup)