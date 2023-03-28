import { memo, useContext, useEffect, useState } from "react"
import { DATA } from "../../asset/data/data"
import { ADMIN_SETTINGS } from "../../config/adminSettings"
import { FilterContext } from "./main"



function MainSidebarGroupFirst({ checkedItems, onClick, parentCategory }) {
  // console.log("MainSidebarGroupFirst : checkedItems ", checkedItems);
  const data = useContext(FilterContext)
  const listCategory = data.navFilter.listCategory.filter(e => e.parentID == ADMIN_SETTINGS.firstGroupOfSidebar)

  const allCheckedCssClass = checkedItems.find(e => e.id === -1 && e.parentName === parentCategory[0].nameAscii) ? "c-6 checkbox active" : "c-6 checkbox"

  const handleCheckItem = onClick



  return (
    <div className="main-sidebar-group">
      <h3>{parentCategory[0].name}</h3>
      <div
        className="main-sidebar-group-options flex"
        data-query={parentCategory[0].nameAscii}
      >
        <div
          className={allCheckedCssClass}
          style={{ order: -100 }}
          data-id='-1'
          data-search-key=''
          data-search-category=''
          onClick={handleCheckItem}
        >

          <i className="iconcate-checkbox"></i>
          Tất Cả
        </div>

        {listCategory.map((e, i) => {
          let checked = checkedItems.find(checkedItem => checkedItem.id === i && checkedItem.parentName === parentCategory[0].nameAscii)
          let itemCheckedCssClass = checked ? "c-6 checkbox active" : "c-6 checkbox"

          return (
            <div
              key={i}
              className={itemCheckedCssClass}
              style={{ order: e.order }}
              data-id={i}
              data-search-key={e.name}
              data-search-category={parentCategory[0].nameAscii}
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

export default MainSidebarGroupFirst = memo(MainSidebarGroupFirst)