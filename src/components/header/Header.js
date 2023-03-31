import { memo } from 'react'

import "../../asset/css/header.css"
import MainNavigation from './MainNavigation/MainNavigation'
import TopNavigationWrap from './TopNavigation/TopNavigationWrap'

function Header() {
  return (
    <div className="header">
      <TopNavigationWrap />
      <MainNavigation />
    </div>
  )
}

export default Header = memo(Header)