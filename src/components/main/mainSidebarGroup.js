import { useContext, useState } from "react"
import { DATA } from "../../asset/data/data"
import { FilterContext } from "./main"




function MainSidebarGroup({ attributeItem, onClick, checkedItems }) {
  const data = useContext(FilterContext)

  const specItems = data.navFilterAttributeItem.specItems

  const specItemsOfThisAttr = specItems.filter(e => e.attributeID === attributeItem.id)
  const allCheckedCssClass = checkedItems.find(e => e.id === -1 && e.parentName === attributeItem.nameAscii) ?
    "c-12 checkbox active" : "c-12 checkbox"

  console.log('MainSidebarGroup : allCheckedCssClass', allCheckedCssClass);

  const handleCheckItem = onClick

  return (
    <div className="main-sidebar-group">
      <h3>{attributeItem.name}</h3>
      <div
        className="main-sidebar-group-options flex"
        data-query={attributeItem.nameAscii}
      >
        <div
          className={allCheckedCssClass}
          style={{ order: -100 }}
          data-id={-1}
          data-search-key=''
          data-search-category=''
          onClick={handleCheckItem}
        >

          <i className="iconcate-checkbox"></i>
          Tất Cả

        </div>

        {specItemsOfThisAttr.map((e, i) => {

          let checked = checkedItems.find(checkedItem => checkedItem.id === i && checkedItem.parentName === attributeItem.nameAscii)
          let itemCheckedCssClass = checked ? "c-12 checkbox active" : "c-12 checkbox"

          return (
            <div
              key={i}
              className={itemCheckedCssClass}
              data-id={i}
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

export default MainSidebarGroup