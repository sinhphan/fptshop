import { memo, useCallback, useState } from "react"

import HeaderLogo from "./HeaderLogo"
import HeaderSearchFormPC from "./HeaderSearchFormPC"
import MobileMenu from "../MobileMenu/MobileMenu"
import TopNavigation from "./TopNavigation"

function TopNavigationWrap() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const handleOpenMobileMenu = useCallback(() => {
    setOpenMobileMenu(!openMobileMenu)
  },
    [openMobileMenu])

  return (<>
    <div className="top-nav">
      <div className="flex js-center">
        <div className="width">
          <div className="flex ali-center">
            <HeaderLogo onlcikMenuButton={handleOpenMobileMenu} />

            <div className="col lx-5 l-5 only-pc">
              <HeaderSearchFormPC />
            </div>

            <TopNavigation />

            <div className="col c-12 only-mobile">
              <HeaderSearchFormPC />
            </div>

            <MobileMenu open={openMobileMenu} closeMenu={handleOpenMobileMenu} />
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default TopNavigationWrap = memo(TopNavigationWrap)