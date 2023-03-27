import DropdownContentTypeBoxCategoryItem from "./dropdownContentTypeBoxCategoryItem"

function DropdownContentTypeBoxCategory({category}) {
  
  return (
    <div className="custom-menu flex ali-start js-center">
      {
        category.map(category=>{
          let categoryTitleHide = category.category === 'ADS' ? 'hide' : ''
          return (
            <div 
              className={`${category.widthCssClass} flex`}
              key={category.id}
              style={{order: category.order}}
            >
              <p className={`c-12 ${categoryTitleHide}`}>{category.category}</p>

              <DropdownContentTypeBoxCategoryItem items={category.listLink}/>
            </div>
          )
        })
      }
    </div>
    
  )
}

export default DropdownContentTypeBoxCategory