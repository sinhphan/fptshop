import {useState} from 'react'

import "../../asset/css/header.css"
import HeaderLogo from "./headerLogo"
import HeaderSearchFormPC from "./headerSearchFormPC"
import MobileMenu from "./mobileMenu"
import TopNavigation from "./topNavigation"

function Header(){
  const [openMobileMenu,setOpenMobileMenu] = useState(false)


  const handleOpenMobileMenu = ()=>{setOpenMobileMenu(!openMobileMenu)}


  return (
    <>
      {/* header  */}
      <div className="header">
        {/* top navigation  */}
        <div className="top-nav">
          <div className="flex js-center">
            <div className="width">
              <div className="flex ali-center">
                <HeaderLogo onlcikMenuButton={handleOpenMobileMenu}/>

                <div className="col lx-5 l-5 only-pc">
                <HeaderSearchFormPC />
                </div>
                
                <TopNavigation  />

                {/* search form in mobile  */}
                <div className="col c-12 only-mobile">
                <HeaderSearchFormPC />
                </div>
                <MobileMenu open={openMobileMenu} closeMenu={handleOpenMobileMenu} />
              </div>
            </div>
          </div>
        </div>
        {/* end top navigation  */}
      </div>
      {/* end header  */}
    </>
  )
}


export default Header