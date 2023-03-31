import { DATA } from "../../asset/data/data";
import * as ACTIONS from "./actionsConstant";

function filterReducer(state, action) {
  let payload = action.payload
  let newState = {}
  let filteredProducts = []

  switch (action.type) {
    case ACTIONS.FILTER_ACTION:

      let attributeSpecItems
      let productIds
      let hasFilterByCustomer = payload.filter(e => e.id > -1).length > 0
      let listProductLast = []

      payload.sort((a, b) => a.parentOrder - b.parentOrder)

      if (hasFilterByCustomer) {
        let listProduct = [...DATA.listDefault.list]
        let productsTemp = []
        let data = [...listProduct]

        let brandCheckedItems = payload.filter(e => e.parentOrder === -1)
        let priceCheckedItems = payload.filter(e => e.parentOrder === 0)
        let screenSizeCheckedItems = payload.filter(e => e.parentOrder === 1)
        let cpuCheckedItems = payload.filter(e => e.parentOrder === 2)
        let ramCheckedItems = payload.filter(e => e.parentOrder === 3)
        let graphicCardCheckedItems = payload.filter(e => e.parentOrder === 4)
        let ssdCheckedItems = payload.filter(e => e.parentOrder === 5)

        if (brandCheckedItems[0].id !== -1) {
          productsTemp = []
          brandCheckedItems.forEach(e => {
            filteredProducts = data.filter(product =>
              product.brandName.toLowerCase() === e.searchKey.toLowerCase()
            )
            productsTemp = [...productsTemp, ...filteredProducts]
          })
          listProduct = [...productsTemp]
        }

        data = [...listProduct]
        if (priceCheckedItems[0].id !== -1) {
          productsTemp = []
          priceCheckedItems.forEach(e => {
            filteredProducts = data.filter(product =>
              filterByPrice(e.searchKey, product.productVariant.price)
            )
            productsTemp = [...productsTemp, ...filteredProducts]
          })
          listProduct = [...productsTemp]
        }

        data = [...listProduct]
        if (screenSizeCheckedItems[0].id !== -1) {
          productsTemp = []
          screenSizeCheckedItems.forEach(e => {
            let isScreenSize = attributeSpecItem => attributeSpecItem.attributeID === 33 &&
              filterByScreenSize(e.searchKey, attributeSpecItem.specName)

            attributeSpecItems = state.attributeSpecItems.filter(isScreenSize)
            productIds = attributeSpecItems.map(attributeSpecItem => attributeSpecItem.productID)
            filteredProducts = data.filter(product =>
              productIds.includes(product.id)
            )
            productsTemp = [...productsTemp, ...filteredProducts]
          })
          listProduct = [...productsTemp]
        }

        data = [...listProduct]
        if (cpuCheckedItems[0].id !== -1) {
          productsTemp = []
          cpuCheckedItems.forEach(e => {
            let isCpu = attributeSpecItem => attributeSpecItem.attributeID === 34 &&
              filterByCPU(e.searchKey, attributeSpecItem.specName)

            attributeSpecItems = state.attributeSpecItems.filter(isCpu)
            productIds = attributeSpecItems.map(attributeSpecItem => attributeSpecItem.productID)
            filteredProducts = data.filter(product =>
              productIds.includes(product.id)
            )
            productsTemp = [...productsTemp, ...filteredProducts]
          })
          listProduct = [...productsTemp]
        }

        data = [...listProduct]
        if (ramCheckedItems[0].id !== -1) {
          productsTemp = []

          ramCheckedItems.forEach(e => {
            let isRam = attributeSpecItem => attributeSpecItem.attributeID === 35 &&
              filterByRAM(e.searchKey, attributeSpecItem.specName)
            attributeSpecItems = state.attributeSpecItems.filter(isRam)
            productIds = attributeSpecItems.map(attributeSpecItem => attributeSpecItem.productID)
            filteredProducts = data.filter(product =>
              productIds.includes(product.id)
            )
            productsTemp = [...productsTemp, ...filteredProducts]
          })
          listProduct = [...productsTemp]
        }


        data = [...listProduct]
        if (graphicCardCheckedItems[0].id !== -1) {
          productsTemp = []
          graphicCardCheckedItems.forEach(e => {
            attributeSpecItems = state.attributeSpecItems.filter(attributeSpecItem =>
              attributeSpecItem.attributeID === 36 &&
              filterByGraphicCard(e.searchKey, attributeSpecItem.specName)
            )

            productIds = attributeSpecItems.map(attributeSpecItem => attributeSpecItem.productID)

            filteredProducts = data.filter(product =>
              productIds.includes(product.id)
            )
            productsTemp = [...productsTemp, ...filteredProducts]
          })
          listProduct = [...productsTemp]
        }

        data = [...listProduct]
        if (ssdCheckedItems[0].id !== -1) {
          productsTemp = []
          ssdCheckedItems.forEach(e => {
            attributeSpecItems = state.attributeSpecItems.filter(attributeSpecItem =>
              attributeSpecItem.attributeID === 27 &&
              filterBySSD(e.searchKey, attributeSpecItem.specName)
            )

            productIds = attributeSpecItems.map(attributeSpecItem => attributeSpecItem.productID)

            filteredProducts = data.filter(product =>
              productIds.includes(product.id)
            )
            productsTemp = [...productsTemp, ...filteredProducts]
          })
          listProduct = [...productsTemp]
        }
        listProductLast = [...listProduct]
      }
      //  !hasFilterByCustomer
      else {
        listProductLast = DATA.listDefault.list
      }

      newState = {
        ...state,
        listDefault: {
          ...state.listDefault,
          list: listProductLast
        }
      }
      return newState

    case ACTIONS.BEST_SELLING_FILTER_ACTION:
      state.listDefault.list.sort((a, b) =>
        b.productVariant.stockQuantity - a.productVariant.stockQuantity
      )
      newState = { ...state }
      return newState

    case ACTIONS.LOW_PRICE_FILTER_ACTION:
      state.listDefault.list.sort((a, b) =>
        a.productVariant.price - b.productVariant.price
      )
      newState = { ...state }
      return newState

    case ACTIONS.HIGH_PRICE_FILTER_ACTION:
      state.listDefault.list.sort((a, b) =>
        b.productVariant.price - a.productVariant.price
      )
      newState = { ...state }
      return newState

    case ACTIONS.ZERO_PERCENT_PAYMENT_FILTER_ACTION:
      filteredProducts = state.listDefault.list.filter(product => product.labelInst === "Trả góp 0%")

      newState = {
        ...state,
        listDefault: {
          ...state.listDefault,
          list: filteredProducts
        }
      }
      return newState

    case ACTIONS.ONLINE_OFFER_FILTER_ACTION:
      return DATA

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