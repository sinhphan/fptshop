import { memo } from "react"

import MainSidebarGroup from "./mainSidebarGroup"
import '../../asset/css/main-sidebar.css'
import MainSidebarGroupFirst from "./mainSidebarGroupFirst"



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
            order={id}
          />
        })}
      </div>
    </div>
  )
}


export default MainSidebar = memo(MainSidebar)