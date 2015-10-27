var random = require('./randomNumber');
var convert = require('./convertToUSD');

function combine(){
    var randomNumber = random(100, 1000000);
    var convertToUSD = convert(randomNumber);

    return convertToUSD;
}

function display() {
    return "Account balance: \n";
}

module.exports.combine = combine;
module.exports.display = display;

