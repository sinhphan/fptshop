import { memo } from 'react'

import "../../asset/css/header.css"
import MainNavigation from './MainNavigation/MainNavigation'
import TopNavigationWrap from './TopNavigation/TopNavigationWrap'


function Header() {
  // console.log('Header re-render');
  return (
    <>
      {/* header  */}
      <div className="header">
        <TopNavigationWrap />
        <MainNavigation />
      </div>
      {/* end header  */}
    </>
  )
}


export default Header = memo(Header)