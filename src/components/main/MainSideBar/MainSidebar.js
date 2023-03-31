import { memo } from "react"

import MainSidebarGroup from "./MainSidebarGroup"
import '../../../asset/css/main-sidebar.css'
import MainSidebarGroupFirst from "./MainSidebarGroupFirst"



function MainSidebar({ parentCategory, attributeItems, onClick }) {
  const handleCheckItem = onClick

  return (
    <div className="l-3">
      <div className="main-sidebar">
        <MainSidebarGroupFirst
          onClick={handleCheckItem}
          parentCategory={parentCategory}
          order={-1}
        />

        {attributeItems.map((e, id) => {
          return <MainSidebarGroup
            attributeItem={e}
            onClick={handleCheckItem}
            key={id}
            categoryOrder={id}
          />
        })}
      </div>
    </div>
  )
}


export default MainSidebar = memo(MainSidebar)