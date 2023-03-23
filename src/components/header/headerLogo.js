

import { Logo } from "../global"

function HeaderLogo({onlcikMenuButton}) {

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
          onClick= {onlcikMenuButton}
        >
          <i className="fa-solid fa-bars" />
        </div>
        <Logo />
      </div>
      {/* end logo mobile */}

    </>)
}

export default HeaderLogo