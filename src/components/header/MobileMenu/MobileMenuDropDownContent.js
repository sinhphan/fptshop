import { memo } from "react"

function MobileMenuDropDownContent({ mobileChild, open }) {
  let links = mobileChild[0].listLink
  let cssOpen = open ? { display: 'flex' } : { display: 'none' }
  return (
    <div
      className="dropdown-content flex"
      style={cssOpen}
    >
      {links.map((e, i) => {
        return <a href={e.link} className="c-6" key={i}>
          {e.text}
        </a>
      })}
    </div>
  )
}

export default MobileMenuDropDownContent = memo(MobileMenuDropDownContent)