import { memo } from "react"
import { ADMIN_SETTINGS, SUB_NAVIGATIONS } from "../../../config"
import MainNavigationItem from "./MainNavigationItem"
const mainNav = ADMIN_SETTINGS.mainNav

function MainNavigation() {
  return (<>
    <div className="main-nav-pc only-pc">
      <div className="flex js-center">
        <div className="width">
          <div className="main-nav-pc-content relative flex js-between">
            {mainNav.map((navItem, navItemId) => {
              const subNav = SUB_NAVIGATIONS.filter(subNavItem => {
                return subNavItem.parentId === navItem.id
              })
              return <MainNavigationItem key={navItemId} childrens={subNav} navItem={navItem} />
            })}

          </div>
        </div>
      </div>
    </div>
  </>)

}

export default MainNavigation = memo(MainNavigation)