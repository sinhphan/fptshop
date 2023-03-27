import { memo, useState } from "react"

import { ADMIN_SETTINGS, SUB_NAVIGATIONS } from "../../config"
import { Icon } from "../global"
import MobileMenuDropDownContent from "./mobileMenuDropDownContent"

const mainNav = ADMIN_SETTINGS.mainNav

function MobileMenuContent() {
  // console.log('MobileMenuContent re-render');
  const [openSubMenu, setOpenSubMenu] = useState({id:0,open:false})

  const handleOpenSubMemu = (e)=>{
    let id = +e.currentTarget.dataset.id
    let open = openSubMenu.id === id ? !openSubMenu.open : true;
    const newOpenSubMenu = {
        id: id,
        open: open
      }
    
    setOpenSubMenu(newOpenSubMenu)
  }

  // console.log(openSubMenu);

  return (<>
    {/* main sidebar  */}
    <div className="sidebar-content">
      <div className="sidebar-content-group">
        <div className="sidebar-content-item">
          <a className="sidebar-link" href="#">
            <div className="base-ic flex ali-center">
              <i className="demo-icon ic-user"></i>
              Tài khoản của tôi
            </div>
          </a>
        </div>
      </div>
      <div className="sidebar-content-group">
        {mainNav.map((navItem) => {
          let childrens = SUB_NAVIGATIONS.filter(e => e.parentId === navItem.id)
          let hasChildren = false
          let mobileChild
          let cssClass
          let activeclass
          let isOpen

          if (childrens.length > 0) {
            mobileChild = childrens[0].childrens.filter(e => e.mobileDisplay)
            hasChildren = mobileChild.length > 0
            isOpen = openSubMenu.id === navItem.id ? openSubMenu.open : false
            activeclass = (openSubMenu.id === navItem.id && openSubMenu.open) ? 'sidebar-link c-10 active': 'sidebar-link c-10'
          }

          cssClass = hasChildren ? "click-dropdown flex js-between" : "flex js-between"
          return (
            <div 
              className={cssClass} 
              key={navItem.id}
            >
              <div className="sidebar-content-item c-12 flex js-between">
                <a 
                  className={activeclass}
                  href={navItem.link}
                >
                  <Icon iconid={navItem.iconId} text={navItem.text} />
                </a>
                {hasChildren && <div 
                                  className="base-ic flex ali-center"
                                  data-id = {navItem.id}
                                  onClick={handleOpenSubMemu}  
                                >
                                  <i className="demo-icon ic-angle-down"></i>
                                </div>
                }

              </div>
              {hasChildren && <MobileMenuDropDownContent mobileChild={mobileChild} open={isOpen} />}
            </div>
          )


        })}

      </div>
      <div className="sidebar-content-group">
        <div className="sidebar-content-item">
          <a className="sidebar-link" href="#">
            <i className="fa-solid fa-file-lines" /> Thông tin hay
          </a>
        </div>
        <div className="sidebar-content-item">
          <a className="sidebar-link" href="#">
            <i className="fa-solid fa-file-invoice-dollar" />
            Thanh toán &amp; tiện ích
          </a>
        </div>
        <div className="sidebar-content-item">
          <a className="sidebar-link" href="#">
            <i className="fa-solid fa-gift" />
            Thông tin trao thưởng
          </a>
        </div>
        <div className="sidebar-content-item">
          <a className="sidebar-link" href="#">
            <i className="fa-solid fa-location-dot" />
            Hệ thống cửa hàng
          </a>
        </div>
      </div>
    </div>
    {/* end main sidebar  */}
  </>)
}


export default MobileMenuContent = memo(MobileMenuContent)


