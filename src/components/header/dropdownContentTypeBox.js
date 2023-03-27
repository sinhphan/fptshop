import DropdownContentTypeBoxCategory from "./dropdownContentTypeBoxCategory"

function DropdownContentTypeBox({dropdownContent}) {
  
  return (
    <div className="dropdown-content ddtype-box width">
      <div className="flex">

          {dropdownContent.menuLayouts.map(
            menuLayout => {
              const categorysInLayout = dropdownContent.childrens.filter(
                  e=>e.menuLayoutId === menuLayout.id
                ) 

              return (
                <div 
                  className={`${menuLayout.widthCssClass} flex`} 
                  style={{order:menuLayout.order}}
                  key= {menuLayout.id} 
                  >
                    <DropdownContentTypeBoxCategory category={categorysInLayout}/>
                </div>
              )
            }
          )}

      </div>
    </div>
  )
}

export default DropdownContentTypeBox