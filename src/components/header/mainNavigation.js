import { memo } from "react"
import { ADMIN_SETTINGS, SUB_NAVIGATIONS } from "../../config"
import { Icon } from "../global"

const mainNav = ADMIN_SETTINGS.mainNav

function MainNavigation() {
  console.log('MainNavigation re-render');

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

const MainNavigationItem = ({ childrens, navItem }) => {
  let hasChildrens = childrens.length > 0
  let cssClass = hasChildrens ? 'hover-dropdown ddtype-box main-nav-pc-item' : 'main-nav-pc-item'
  return (<>
    <div className={cssClass}>
      <a href="#" className="main-nav-link ">
        <Icon iconid={navItem.iconId} /> {navItem.text}
      </a>
      {hasChildrens && <MainNavDropdownContent navContent={childrens} />}
    </div>
  </>)
}


const MainNavDropdownContent = ({ navContent }) => {
  navContent = navContent[0].childrens
  console.log(navContent);
  const navInLayout1 = navContent.filter(e => e.menuLayoutId === 1)
  const navInLayout2 = navContent.filter(e => e.menuLayoutId === 2)
  const navInLayout3 = navContent.filter(e => e.menuLayoutId === 3)

  return (<>
    <div className="dropdown-content ddtype-box width">
      <div className="flex">
        <div className="col lx-4 l-4">
          <div className="custom-menu flex ">

          </div>
        </div>
        <div className="col lx-2 l-2">
          <div className="custom-menu">
            <div>
              <h3>Mức giá</h3>
              <a href="#">Dưới 2tr</a>
              <a href="#">Dưới 2tr</a>
              <a href="#">Dưới 2tr</a>
            </div>
          </div>
        </div>
        <div className="col lx-6 l-6">
          <div className="custom-menu last-custom-menu">
            <div className="flex js-between h-100">
              <div className="product-best-sell">
                <h3>Bán chạy nhất</h3>
                <div className="product flex">
                  <div className="product-img">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/3/638134385008402132_samsung-galaxy-a14-4g-dd-moi.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-desc">
                    <a href="#">Samsung Galaxy A14 4G 4GB</a>
                    <span>4.490.000 ₫</span>
                  </div>
                </div>
                <div className="product flex">
                  <div className="product-img">
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/80x80/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/12/20/638071500758726769_oppo-a57-dd.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-desc">
                    <a href="#">OPPO A57 4GB-128GB</a>
                    <span>4.590.000 ₫</span>
                  </div>
                </div>
              </div>
              <div className="product-sale flex ali-center">
                <img
                  src="asset/img/638122426805162395_F-H4_248x248@2x.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

const CustomMenu1 = ({ menus }) => {
  return (<>
    {menus.map((menu, menuId) => {
      <div style={{ order: menu.order }} key={menuId} >
        <h3>{menu.text}</h3>

        
        <div className="flex">
          <a href="#" className="lx-4 l-6">
            Apple(iphone)
          </a>
         
        </div>
      </div>
    })}
  </>)
}