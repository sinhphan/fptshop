import {memo} from 'react'

import "../../asset/css/header.css"
import MainNavigation from './mainNavigation'
import TopNavigationWrap from './topNavigationWrap'


function Header(){
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