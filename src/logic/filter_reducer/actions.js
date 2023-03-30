import * as ACTIONS from './actionsConstant'

export const filterAction = payload => {
  return {
    type: ACTIONS.FILTER_ACTION,
    payload
  }
}

export const bestSellingFilterAction = payload => {
  return {
    type: ACTIONS.BEST_SELLING_FILTER_ACTION,
    payload
  }
}

export const lowPriceFilterAction = payload => {
  return {
    type: ACTIONS.LOW_PRICE_FILTER_ACTION,
    payload
  }
}

export const highPriceFilterAction = payload => {
  return {
    type: ACTIONS.HIGH_PRICE_FILTER_ACTION,
    payload
  }
}

export const zeroPercentPaymentFilterAction = payload => {
  return {
    type: ACTIONS.ZERO_PERCENT_PAYMENT_FILTER_ACTION,
    payload
  }
}

export const onlineOfferFilterAction = payload => {
  return {
    type: ACTIONS.ONLINE_OFFER_FILTER_ACTION,
    payload
  }
}

