import { memo, useContext } from "react"
import { ADMIN_SETTINGS } from "../../../config/adminSettings"
import { CheckedItemsContext, FilterContext } from "../Main"

function MainSidebarGroupFirst({ onClick, parentCategory, order }) {
  const data = useContext(FilterContext)
  const checkedItems = useContext(CheckedItemsContext)
  const items = data.navFilter.listCategory.filter(e => e.parentID == ADMIN_SETTINGS.firstGroupOfSidebar)

  let isAllChecked = checkedItem => checkedItem.id === -1 && checkedItem.parentName === parentCategory[0].nameAscii
  const allCheckedCssClass = checkedItems.find(isAllChecked) ? "c-6 checkbox active" : "c-6 checkbox"

  const handleCheckItem = onClick

  return (
    <div className="main-sidebar-group">
      <h3>{parentCategory[0].name}</h3>
      <div
        className="main-sidebar-group-options flex"
        data-query={parentCategory[0].nameAscii}
        data-order={order}
      >
        <div
          className={allCheckedCssClass}
          style={{ order: -100 }}
          data-id='-1'
          data-name=''
          data-search-key=''
          data-search-category=''
          onClick={handleCheckItem}
        >

          <i className="iconcate-checkbox"></i>
          Tất Cả
        </div>

        {items.map((item, i) => {
          let isChecked = checkedItem => checkedItem.id === i &&
            checkedItem.parentName === parentCategory[0].nameAscii
          let checked = checkedItems.find(isChecked)
          let itemCheckedCssClass = checked ? "c-6 checkbox active flex" : "c-6 checkbox flex"

          return (
            <div
              key={i}
              className={itemCheckedCssClass}
              style={{ order: item.order }}
              data-id={i}
              data-name={item.name}
              data-search-key={item.name}
              data-search-category={parentCategory[0].nameAscii}
              onClick={handleCheckItem}
            >
              <i className="iconcate-checkbox"></i>
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainSidebarGroupFirst = memo(MainSidebarGroupFirst)