import { memo } from "react"

import { DATA } from "../../asset/data/data"
import MainSidebarGroup from "./mainSidebarGroup"
import '../../asset/css/main-sidebar.css'


const attributeItems = DATA.filterModel.navFilterAttributeItem.attributeItems.filter(e => {
  return e.isShowNavFilter === true
})

function MainSidebar() {

  return (
    <div className="l-3">
      <div className="main-sidebar">
        {attributeItems.map((e, id) => {
          return <MainSidebarGroup attributeItem={e} key={id} />
        })}
      </div>
    </div>
  )
}


export default MainSidebar = memo(MainSidebar)