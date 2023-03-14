function scuberGreetingForFeet(num){

  let x = 400;
  let y = 2000;
  let z = 2500;
//Writing a scuber ride function using if statements
if (num < x) {
  return 'This one is on me!';
} else if (num >=y && num <= z){
  return 'I will gladly take your thirty bucks.'

}else if (num > z) {
  return 'No can do.';
}
}

function ternaryCheckCity(city){
 return (city == "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
   case "generous":
    return 'Thank you so much.';
    break;
    case "not as generous":
    return 'Thank you.';
    break;
    default:
      return 'Bye.';
}
}