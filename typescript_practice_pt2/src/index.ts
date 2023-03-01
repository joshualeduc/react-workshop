import Phone from './models/Phone'
import {
  chicagoWarehouse,
  detroitWarehouse,
  newYorkWarehouse
} from './warehouses'

function addPhone(newPhone: Phone, inventory: Phone[]): Phone[] {
  return inventory.concat(newPhone)
}

function deletePhoneByIndex(inventory: Phone[], index: number): Phone[] {
  return inventory.slice(0, index).concat(inventory.slice(index + 1, inventory.length))
}

function deletePhoneByName(inventory: Phone[], givenName: string): Phone[] {
  const toRemoveIndex: number = inventory.findIndex((phone: Phone) => phone?.name === givenName)

  return deletePhoneByIndex(inventory, toRemoveIndex)
}

function filter5G(inventory: Phone[], is5G: boolean): Phone[] {
  return is5G ? inventory.filter((phone: Phone) => phone?.fiveG) : inventory.filter((phone: Phone) => !phone?.fiveG)
}

function filterPriceLessThan(inventory: Phone[], givenPrice: number): Phone[] {
  return inventory.filter((phone: Phone) => phone?.price < givenPrice)
}

function filterPriceGreaterThan(inventory: Phone[], givenPrice: number): Phone[] {
  return inventory.filter((phone: Phone) => phone?.price > givenPrice)
}

function findPhoneByName(inventory: Phone[], givenName: string): Phone | undefined {
  return inventory.find((phone: Phone) => phone?.name === givenName)
}

function calcAverageCost(inventory: Phone[]): number {
  let priceTotal: number = 0;

  inventory.map((phone: Phone) => { priceTotal = priceTotal + phone?.price })

  return priceTotal / inventory.length
}

function doWeHaveA5GPhone(inventory: Phone[]): boolean {
  return !!inventory.find((phone: Phone) => phone?.fiveG)
}

function phoneFlashSale(inventory: Phone[], discount: number) {
  return inventory.map((phone: Phone) => ({ ...phone, price: phone?.price - (phone?.price * discount / 100) }))
}

function phoneFlashSaleV2(inventory: Phone[], givenName: string, discount: number) {
  return inventory.map((phone: Phone) => {
    if (phone?.name === givenName) {
      return { ...phone, price: phone?.price - (phone?.price * discount / 100) }
    } else {
      return phone
    }
  })
}

console.log('addPhone', addPhone({
  name: "Crazy New Phone",
  price: 999,
  fiveG: false,
}, chicagoWarehouse))
console.log('deletePhoneByIndex', deletePhoneByIndex(detroitWarehouse, 1))
console.log('deletePhoneByName', deletePhoneByName(newYorkWarehouse, 'Pixel 5'))
console.log('filter5G', filter5G(chicagoWarehouse, true))
console.log('filterPriceLessThan', filterPriceLessThan(detroitWarehouse, 500))
console.log('filterPriceGreaterThan', filterPriceGreaterThan(newYorkWarehouse, 500))
console.log('findPhoneByName', findPhoneByName(chicagoWarehouse, 'Pixel 4a'))
console.log('calcAverageCost', calcAverageCost(detroitWarehouse))
console.log('doWeHaveA5GPhone', doWeHaveA5GPhone(newYorkWarehouse))
console.log('phoneFlashSale', phoneFlashSale(chicagoWarehouse, 15))
console.log('phoneFlashSaleV2', phoneFlashSaleV2(detroitWarehouse, 'iPhone 12 Mini', 50))
