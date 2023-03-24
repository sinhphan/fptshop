import { Children, memo } from "react"

import { ADMIN_SETTINGS, SUB_NAVIGATIONS } from "../../config"
import { Icon } from "../global"

const mainNav = ADMIN_SETTINGS.mainNav

function MobileMenuContent() {
  // console.log('MobileMenuContent re-render');

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
        {mainNav.map((navItem, navItemId) => {
          let childrens = SUB_NAVIGATIONS.filter(e => e.parentId === navItem.id)
          let hasChildren = false
          let mobileChild
          let cssClass

          if (childrens.length > 0) {
            mobileChild = childrens[0].childrens.filter(e => e.mobileDisplay)
            hasChildren = mobileChild.length > 0

            mobileChild = hasChildren ? mobileChild[0].listLink : []
          }

          cssClass = hasChildren ? "click-dropdown flex js-between" : "flex js-between"

          return (
            <div className={cssClass} key={navItem.id}>
              <div className="sidebar-content-item c-12 flex js-between">
                <a className="sidebar-link c-10" href={navItem.link}>
                  <Icon iconid={navItem.iconId} text={navItem.text} />
                </a>
                {hasChildren && <div className="base-ic flex ali-center">
                                  <i className="demo-icon ic-angle-down"></i>
                                </div>
                }

              </div>
              {hasChildren && <DropDownContent links={mobileChild} />}
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


const DropDownContent = ({links}) => {
  return (
    <div className="dropdown-content flex">
      {links.map((e,i)=>{
        return <a href={e.link} className="c-6" key={i}>
                {e.text}
              </a>
      })}
    </div>
  )
}