function getBillWithItem(bill, itemAnnaDeclined) {
  return [
    ...bill.slice(0, itemAnnaDeclined),
    ...bill.slice(itemAnnaDeclined + 1)
  ]
  return
}
function bonAppétit(bill, itemAnnaDeclined, amountAnnaPaid) {
  const billWithoutItem = getBillWithItem(bill, itemAnnaDeclined)
  const trueAmount = billWithoutItem.reduce((acc, n) => acc + n) / 2
  return amountAnnaPaid === trueAmount
    ? 'Bon Appetit'
    : amountAnnaPaid - trueAmount
}

module.exports = { bonAppétit }
