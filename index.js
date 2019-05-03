function takeANumber(numberInline,customerName){
  numberInline.push(customerName)
  return "Welcome, " +  customerName + ". " + "You are number " + numberInline.length + " in line."
}
function  nowServing(numberInline){
  if(numberInline.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
    var first = numberInline[0];
    numberInline.shift();
    return "Currently serving "+ first +".";
  }
}
function currentLine(numberInline){
  var stringToReturn = "The line is currently:";
  for(var i; i < numberInline.length; i++){
    stringToReturn += (i+1) + ". " + numberInline[i];
    if(i == numberInline.length - 1)
  }
  
}