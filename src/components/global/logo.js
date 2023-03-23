import img from "../../asset/img"

function Logo() {
  const logo = `url("${img.logo}")`
  return (<>
    <div
      className="header-logo"
     style={{backgroundImage: logo}}
    >
    </div>
  </>)
}

// `url(\'${DOMAIN}${ADMIN_SETTINGS.logoURL}\')`

export default Logo