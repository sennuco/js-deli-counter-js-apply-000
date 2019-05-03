function takeANumber(numberInline,customerName){
  numberInline.push(customerName)
  return "Welcome, " +  customerName + ". " + "You are number " + numberInline.length + " in line."
}
function  nowServing(numberInline){
  if(numberInline.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
    ""
  }
}