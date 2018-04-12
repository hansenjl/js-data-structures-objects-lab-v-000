// Write your solution in this file!
var driver = {}
function updateDriverWithKeyAndValue(driver,key,value){
  newDriver = Object.assign({},driver)
  newDriver[key] = value
  return newDriver 
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
   driver[key] = value
    return driver 
}

function deleteFromDriverByKey(driver,key){
   driver[key].delete
    return driver 
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key]
   return driver 
}