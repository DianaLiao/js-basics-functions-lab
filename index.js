// Code your solution in this file!

const distanceFromHqInBlocks = (streetNum) => {
  return Math.abs(42-streetNum)
}

const distanceFromHqInFeet = (streetNum) => {
  return 264* distanceFromHqInBlocks(streetNum)
}

const distanceTravelledInFeet = (num1, num2) => {
  return 264*Math.abs(num1-num2)
}

const calculatesFarePrice = (start, destination) => {
  let distance = distanceTravelledInFeet(start, destination)

  if (distance>2500) return "cannot travel that far"
  else if (distance<400) return 0
  else if (distance<2000) return (distance-400)*0.02
  else if (distance<= 2500) return 25
  else "I did something wrong"
}