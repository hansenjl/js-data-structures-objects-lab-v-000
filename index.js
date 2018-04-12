// Write your solution in this file!
var driver = {}
function updateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
   driver[key] = value
}

function deleteFromDriverByKey(driver,key){
   driver[key].delete
}

function destructivelyDeleteFromDriverByKey(driver,key){
  driver[key].delete
}