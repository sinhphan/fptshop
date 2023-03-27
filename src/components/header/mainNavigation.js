import { memo } from "react"
import { ADMIN_SETTINGS, SUB_NAVIGATIONS } from "../../config"
import MainNavigationItem from "./mainNavigationItem"

const mainNav = ADMIN_SETTINGS.mainNav

function MainNavigation() {
  // console.log('MainNavigation re-render');

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


const CustomMenu1 = ({ menus }) => {
  return (<>
    {menus.map((menu, menuId) => {
      return (
        <div
          style={{ order: menu.order }}
          key={menuId}
        >
          <h3>{menu.category}</h3>

          <div className="flex">
            {menu.listLink.map((link, linkId) => {
              return <a
                href={link.link}
                className="lx-4 l-6"
                key={linkId}
              >
                {link.text}
              </a>
            }
            )}

          </div>
        </div>
      )
    })}
  </>)
}

const CustomMenu2 = ({ menus }) => {
  return (<>
    {menus.map((menu, menuId) => {
      return (
        <div key={menuId}>
          <h3>{menu.category}</h3>
          {menu.listLink.map((link, linkId) => {
            return <a
              href={link.link}
              key={linkId}
            >
              {link.text}
            </a>
          })}
        </div>
      )
    })}
  </>)
}

const CustomMenu3 = ({ menus }) => {
  const [bestSell, adsBox] = menus
  return (<>
    <div className="flex js-between h-100">
      <div className="product-best-sell c-6" >
        <h3>{bestSell.category}</h3>

        {bestSell.listLink.map((link, linkId) => {
          return (
          <div 
            className="product flex" 
            key={linkId}
          >
            <div className="product-img">

            <a href={link.link}>
              <img
                src={link.image}
                alt=""
              />
            </a>
              
            </div>
            <div className="product-desc">
              <a href={link.link}>{link.text}</a>
              <a href={link.link}><span>{link.price}</span></a>
              
            </div>

          </div>)
        })}
      </div>
      <div className="product-sale flex ali-center c-6">
        <a href={adsBox.listLink.link} >
          <img
            src={adsBox.listLink[0].image}
            alt=""
          />
        </a>
      </div>
    </div>
  </>)
}
