// Write your solution in this file!
var driver = {}
function updateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value
  return driver 
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
  driver[key].delete
   return driver 
}