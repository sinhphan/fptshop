import { DATA } from "../asset/data/data"
import { ADMIN_SETTINGS } from "./adminSettings"

const parentCategory = DATA.navFilter.listCategory.filter(e => e.id == ADMIN_SETTINGS.firstGroupOfSidebar)



const attributeItems = DATA.navFilterAttributeItem.attributeItems.filter(e => {
  return e.isShowNavFilter === true
})

export const createInitCheckedItems = () => {

  const initCheckedItems = [{
    id: -1,
    parentName: parentCategory[0].nameAscii,
    searchKey: '',
    name: '',
    parentOrder: -1,
  }]

  attributeItems.forEach((e, i) => {
    initCheckedItems.push({
      id: -1,
      parentName: e.nameAscii,
      searchKey: '',
      name: '',
      parentOrder: i,
    })
  })
  return initCheckedItems
}