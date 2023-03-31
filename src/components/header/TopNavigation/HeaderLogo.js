
import { Logo } from "../../global"

function HeaderLogo({ onlcikMenuButton }) {
  // console.log('HeaderLogo re-render' );

  return (
    <>
      {/* logo in pc */}
      <div className="col lx-2 l-2 only-pc">
        <Logo />
      </div>
      {/* end logo in pc */}

      {/* logo mobile  */}
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
      {/* end logo mobile */}

    </>)
}

export default HeaderLogo = HeaderLogo