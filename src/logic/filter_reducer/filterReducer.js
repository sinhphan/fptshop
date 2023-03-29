import { DATA } from "../../asset/data/data";
import * as ACTIONS from "./actionsConstant";
import * as CATEGORYS from "./categoryConstant";


function filterReducer(state, action) {
  let payload = action.payload
  let newState = {}



  switch (action.type) {
    case ACTIONS.FILTER_ACTION:
      let listProduct = []
      let listProductFilter = []
      let listAttributeSpecItemByScreenSize
      let listProductId

      payload.forEach(search => {

        switch (search.parentName) {

          case CATEGORYS.BRAND_CATEGORY:
            listProductFilter = DATA.listDefault.list.filter(product =>
              product.brandName.toLowerCase() === search.searchKey.toLowerCase()
            )
            listProduct = [...listProduct, ...listProductFilter]
            break

          case CATEGORYS.PRICE_CATEGORY:

            listProductFilter = DATA.listDefault.list.filter(product =>
              filterByPrice(search.searchKey, product.productVariant.price)
            )

            listProduct = [...listProduct, ...listProductFilter]
            break

          case CATEGORYS.SCREEN_SIZE_CATEGORY:
            listAttributeSpecItemByScreenSize = DATA.attributeSpecItems.filter(attributeSpecItem =>
              attributeSpecItem.attributeID === 33 &&
              filterByScreenSize(search.searchKey, attributeSpecItem.specName)
            )

            listProductId = listAttributeSpecItemByScreenSize.map(attributeSpecItem => attributeSpecItem.productID)

            listProductFilter = DATA.listDefault.list.filter(product =>
              listProductId.includes(product.id)
            )

            listProduct = [...listProduct, ...listProductFilter]
            break

          case CATEGORYS.CPU_CATEGORY:
            listAttributeSpecItemByScreenSize = DATA.attributeSpecItems.filter(attributeSpecItem =>
              attributeSpecItem.attributeID === 34 &&
              filterByCPU(search.searchKey, attributeSpecItem.specName)
            )

            listProductId = listAttributeSpecItemByScreenSize.map(attributeSpecItem => attributeSpecItem.productID)

            listProductFilter = DATA.listDefault.list.filter(product =>
              listProductId.includes(product.id)
            )

            listProduct = [...listProduct, ...listProductFilter]
            break

          case CATEGORYS.RAM_CATEGORY:
            listAttributeSpecItemByScreenSize = DATA.attributeSpecItems.filter(attributeSpecItem =>
              attributeSpecItem.attributeID === 35 &&
              filterByRAM(search.searchKey, attributeSpecItem.specName)
            )

            listProductId = listAttributeSpecItemByScreenSize.map(attributeSpecItem => attributeSpecItem.productID)

            listProductFilter = DATA.listDefault.list.filter(product =>
              listProductId.includes(product.id)
            )

            listProduct = [...listProduct, ...listProductFilter]
            break

          case CATEGORYS.GRAPHIC_CARD_CATEGORY:
            listAttributeSpecItemByScreenSize = DATA.attributeSpecItems.filter(attributeSpecItem =>
              attributeSpecItem.attributeID === 36 &&
              filterByGraphicCard(search.searchKey, attributeSpecItem.specName)
            )

            listProductId = listAttributeSpecItemByScreenSize.map(attributeSpecItem => attributeSpecItem.productID)

            listProductFilter = DATA.listDefault.list.filter(product =>
              listProductId.includes(product.id)
            )

            listProduct = [...listProduct, ...listProductFilter]
            break

          case CATEGORYS.SSD_CATEGORY:
            listAttributeSpecItemByScreenSize = DATA.attributeSpecItems.filter(attributeSpecItem =>
              attributeSpecItem.attributeID === 27 &&
              filterBySSD(search.searchKey, attributeSpecItem.specName)
            )

            listProductId = listAttributeSpecItemByScreenSize.map(attributeSpecItem => attributeSpecItem.productID)

            listProductFilter = DATA.listDefault.list.filter(product =>
              listProductId.includes(product.id)
            )

            listProduct = [...listProduct, ...listProductFilter]
            break

          default:
            break
        }

      }
      )

      listProduct = listProduct.length > 0 ? listProduct : DATA.listDefault.list

      newState = {
        ...state,
        listDefault: {
          ...state.listDefault,
          list: listProduct
        }
      }

      console.log('filterReducer: newState : ', newState);
      return newState
    default:
      break
  }

}

export default filterReducer


function filterByPrice(key, price) {
  switch (key) {
    case 'duoi-10-trieu':
      return price <= 10e6
    case 'tu-10-15-trieu':
      return price >= 10e6 && price <= 15e6
    case 'tu-15-20-trieu':
      return price >= 15e6 && price <= 20e6
    case 'tu-20-25-trieu':
      return price >= 20e6 && price <= 25e6
    case 'tren-25-trieu':
      return price >= 25e6
    default:
      break;
  }
}

function filterByScreenSize(key, screenSize) {
  let size = +screenSize.slice(0, 2)
  switch (key) {
    case 'khoang-13-inch':
      return size == 13
    case 'khoang-14-inch':
      return size == 14
    case 'tren-15-inch':
      return size >= 15
    default:
      break;
  }
}

function filterByCPU(key, cpu) {
  switch (key) {
    case 'intel-celeron':
      return cpu === 'Celeron'

    case 'intel-pentium':
      return cpu === 'Pentium'

    case 'intel-core-i3':
      return cpu === 'Core i3'

    case 'intel-core-i7':
      return cpu === 'Core i7'

    case 'amd-ryzen-3':
      return cpu === 'Ryzen 3'

    case 'amd-ryzen-5':
      return cpu === 'Ryzen 5'

    case 'amd-ryzen-7':
      return cpu === 'Ryzen 7'

    case 'amd-ryzen-9':
      return cpu === 'Ryzen 9'

    default:
      break;
  }
}

function filterByRAM(key, ram) {
  ram = +ram.slice(0, 2)

  switch (key) {
    case '4-gb':
      return ram === 4

    case '8-gb':
      return ram === 8

    case '16-gb':
      return ram === 16

    case '32-gb':
      return ram === 32

    default:
      break
  }
}

function filterByGraphicCard(key, graphicCard) {
  switch (key) {
    case 'nvidia-geforce-series':
      return graphicCard.includes('NVIDIA')

    case 'amd-radeon-series':
      return graphicCard.includes('AMD')

    case 'card-onboard':
      return graphicCard.includes('Intel')

    default:
      break;
  }
}

function filterBySSD(key, ssd) {

  switch (key) {
    case 'ssd-1-tb':
      return ssd.includes('1 TB')

    case 'ssd-512-gb':
      return ssd.includes('512')

    case 'ssd-256-gb':
      return ssd.includes('256')

    case 'ssd-128-gb':
      return ssd.includes('128')

    default:
      break;
  }
}