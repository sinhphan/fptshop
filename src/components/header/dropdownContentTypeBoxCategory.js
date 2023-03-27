import DropdownContentTypeBoxCategoryItem from "./dropdownContentTypeBoxCategoryItem"

function DropdownContentTypeBoxCategory({category}) {
  
  return (
    <div className="custom-menu flex ali-start js-center c-12">
      {
        category.map(category=>{
          let isADS = category.category === 'ADS'
          let categoryTitleHide = isADS ? 'hide' : ''
          let cssClass = isADS ? `${category.widthCssClass} flex js-center` : `${category.widthCssClass} flex`
          return (
            <div 
              className={cssClass}
              key={category.id}
              style={{order: category.order}}
            >
              <p className={`c-12 ${categoryTitleHide}`}>{category.category}</p>

              <DropdownContentTypeBoxCategoryItem items={category.listLink} isADS = {isADS}/>
            </div>
          )
        })
      }
    </div>
    
  )
}

export default DropdownContentTypeBoxCategory