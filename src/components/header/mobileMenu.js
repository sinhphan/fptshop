import { Logo } from "../global"
import MobileMenuContent from "./mobileMenuContent"

function MobileMenu({open,closeMenu}) {

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
              <i 
                className="fa-solid fa-xmark" 
                onClick={closeMenu}
              />
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

export default MobileMenu