import { DATA } from "../../asset/data/data"

const specItems = DATA.navFilterAttributeItem.specItems

function MainSidebarGroup({ attributeItem }) {
  const specItemsOfThisAttr = specItems.filter(e => e.attributeID === attributeItem.id)
  return (
    <div className="main-sidebar-group">
      <h3>{attributeItem.name}</h3>
      <div
        className="main-sidebar-group-options flex"
        data-query={attributeItem.nameAscii}
      >
        <div
          className="c-12"
          data-search-key=''
          data-search-category=''
        >
          <input type="checkbox" value='' />
          Tất Cả
        </div>

        {specItemsOfThisAttr.map((e, i) => {
          return (
            <div
              key={i}
              className="c-12"
              data-search-key={e.nameAscii}
              data-search-category={attributeItem.nameAscii}
            >
              <input type="checkbox" value={e.nameAscii} />
              {e.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainSidebarGroup