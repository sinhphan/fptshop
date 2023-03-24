import { memo } from "react";

import { ADMIN_SETTINGS } from "../../config"
import { Icon } from "../global"

const TOP_NAVS = ADMIN_SETTINGS.topNav
const TOP_NAVMOBILE = ADMIN_SETTINGS.topNavMobile

function TopNavigation() {
  // console.log('TopNavigation re-render');

  return (<>
    {/* Top navigatiion */}
    <div className="col lx-5 l-5 only-pc">
      <div className="top-nav-link-pc">
        <div className="flex js-between">
          <TopNavigationLink />
        </div>
      </div>
    </div>
    {/* end Top navigatiion */}

    {/* user mobile  */}
    <div className="top-nav-link-mobile c-4 flex ali-center js-end only-mobile">
      <a href={`tel:${TOP_NAVMOBILE.phone}`}>
        <div className="phone">
          <p>Gọi miễn phí</p>
          <strong>1800 6601</strong>
        </div>
      </a>
      <a href="#">
        <div className="shop-cart">
          <div className="base-ic flex ali-center">
            <i className="demo-icon ic-cart"></i>
          </div>
        </div>
      </a>
    </div>
    {/* end user mobile  */}
  </>)
}

export default TopNavigation = memo(TopNavigation)



const TopNavigationLink = () => {

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

            {isSubNav && <DropDownContent subNav={nav.subNav} />}

          </div>
        )
      }
    )}
  </>)
}

const DropDownContent = ({ subNav }) => {
  return (<>
    <div className="dropdown-content ddtype-list">
      {subNav.map(
        (subNav, subNavId) =>
          <a
            href={subNav.link}
            key={subNavId}
          >
            {subNav.text}
          </a>
      )}
    </div>
  </>)
}