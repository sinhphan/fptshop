import { Icon } from "../global"
import MainNavDropdownContent from "./mainNavDropdownContent"


function MainNavigationItem({ childrens, navItem }){
  let hasChildrens = childrens.length > 0
  let cssClass = 'main-nav-pc-item'
  
  if(hasChildrens && childrens[0].dropdownType === 'box') cssClass = 'hover-dropdown ddtype-box main-nav-pc-item'
  if(hasChildrens && childrens[0].dropdownType === 'list') cssClass = 'hover-dropdown main-nav-pc-item'
  // console.log('MainNavigationItem' , childrens);


  return (<>
    <div className={cssClass}>
      <a href="#" className="main-nav-link ">
        <Icon iconid={navItem.iconId} /> {navItem.text}
      </a>
      {hasChildrens && <MainNavDropdownContent navContent={childrens[0]} />}
    </div>
  </>)
}

export default MainNavigationItem