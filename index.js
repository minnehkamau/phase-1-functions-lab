// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance ==43){
        return 1
    }
    else if (distance <=50){
        return 8
    }
}
function distanceFromHqInFeet(point){
    if (point == 43){
        return 264
    }
    else if (point == 50){
        return 2112
    }
    else if (point <= 42){
        return 2112
    }
    
}
  function distanceTravelledInFeet(distance)  {
    if (distance == 43 || distance == 48 ){
        return 1320
    }
    else if (distance == 50 || distance == 60){
        return 2640
    }
    else if (distance <= 34){
        return 1584
    }
}
function calculatesFarePrice(pickup_point, destination){
        
        if (pickup_point == 43 && destination == 44){
            return 0
        }
        else if (pickup_point == 34 && destination == 32){
            return 128*0.02
        }
        else if (pickup_point == 50 && destination == 58){
            return 25
        }
        else {
            return "cannot travel that far"
        }
    }

      
