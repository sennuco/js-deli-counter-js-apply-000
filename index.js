function takeANumber(katzDeli, name){
  this.katzDeli.push(name);
  return "Welcome, "+ name +". You are number "+ (katzDeli.length+1)+" in line."
}