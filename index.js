function takeANumber(numberInline,customerName){
  numberInline.push(customerName)
  return "Welcome, " +  customerName + ". " + " You are number " + numberInline.length + " in line."
}