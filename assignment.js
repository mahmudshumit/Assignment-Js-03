//problem-01
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return 'Not Valid';
    }
    else {
        var meter = kilometer * 1000;//1km = 1000;
    }
    return meter;
}

//problem-02
function budgetCalculator(watch, phone, laptop) {
    var totalCost = (watch * 50) + (phone * 100) + (laptop * 500);//multiply device to it's price
    return totalCost;
}

//problem-03
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;//first ten days cost
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;//second ten days cost
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;//rest of the cost
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var result = hotelCost(2);
console.log(result);

//problem-04
function megaFriend(array) {
    var friendName = "";
    for (var i = 0; i < array.length; i++) {
        if (friendName.length < array[i].length) {
            friendName = array[i];
        }
    }
    return friendName;
}



