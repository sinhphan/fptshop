function DropdownContentTypeList({ subNav }){
  return (<>
    <div className="dropdown-content ddtype-list">
      {subNav.map(
        (subNav, subNavId) =>
          <a
            href={subNav.link}
            key={subNavId}
          >
            {subNav.text}
          </a>
      )}
    </div>
  </>)
}

export default DropdownContentTypeList