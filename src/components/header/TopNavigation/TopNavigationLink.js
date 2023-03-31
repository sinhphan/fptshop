import { ADMIN_SETTINGS } from "../../../config"
import { Icon } from "../../global"
import DropdownContentTypeList from "../MainNavigation/DropdownContentTypeList"

const TOP_NAVS = ADMIN_SETTINGS.topNav


function TopNavigationLink() {

  return (<>
    {TOP_NAVS.map(
      (nav, navId) => {
        let isSubNav = nav.subNav.length > 0
        let dropdownClass = isSubNav ? "hover-dropdown top-nav-link-wrap" : "top-nav-link-wrap"

        return (
          <div className={dropdownClass} key={navId} >
            <a className="top-nav-link" href="#">
              <Icon iconid={nav.iconId} />
              <p>
                {nav.text}
              </p>
            </a>

            {isSubNav && <DropdownContentTypeList subNav={nav.subNav} />}

          </div>
        )
      }
    )}
  </>)
}

export default TopNavigationLink
