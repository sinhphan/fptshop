
import { memo } from "react"
import { Logo } from "../../global"

function HeaderLogo({ onlcikMenuButton }) {

  return (
    <>
      <div className="col lx-2 l-2 only-pc">
        <Logo />
      </div>

      <div className="col c-8 only-mobile flex">
        <div
          className="mobile-menu-btn"
          onClick={onlcikMenuButton}
        >
          <div className="base-ic flex ali-center">
            <i className="demo-icon ic-menu"></i>
          </div>
        </div>
        <Logo />
      </div>
    </>)
}

export default HeaderLogo = memo(HeaderLogo)