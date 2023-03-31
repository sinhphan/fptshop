import { memo } from "react"

function DropdownContentTypeBoxCategoryItem({ items }) {
  return (<>
    {items.map(item => {
      let hasImg = item.image !== ''
      let hasPrice = item.price !== ''

      return (
        <div
          className={item.widthCssClass}
          key={item.id}
        >
          <a href={item.link}>
            {hasImg && <img src={item.image} />}
            {item.text}
            {hasPrice && <span>{item.price}</span>}
          </a>
        </div>
      )
    })}
  </>)
}


export default DropdownContentTypeBoxCategoryItem = memo(DropdownContentTypeBoxCategoryItem)