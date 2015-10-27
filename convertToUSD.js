function convertToUSD(number) {

    //number comes in as a string
    number = Number(number).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    return "$" + number;
}

module.exports = convertToUSD;