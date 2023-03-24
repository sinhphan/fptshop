import { memo } from "react"
import { Logo } from "../global"
import MobileMenuContent from "./mobileMenuContent"

function MobileMenu({open,closeMenu}) {
  // console.log('MobileMenu re-render');


  const handleStopCloseMenu = e=>{e.stopPropagation()}

  return (
    <>
      <div 
        className={`sidebar-mobile ${open ? '':'hide'}`}
        onClick = {closeMenu}
      >
        <div 
          className="sidebar-wrap"
          onClick={handleStopCloseMenu}
        >
          <div className="sidebar-header">
            <div className="flex js-between">
              <Logo />
              <div className="base-ic flex ali-center">
                <i 
                  className="demo-icon ic-close"
                  onClick={closeMenu}
                ></i>
              </div>
            </div>
          </div>

          <MobileMenuContent />
          
          <div className="sidebar-footer"></div>
        </div>
        {/* end sidebar ads  */}
      </div>
    </>
  )
}

export default MobileMenu = memo(MobileMenu)