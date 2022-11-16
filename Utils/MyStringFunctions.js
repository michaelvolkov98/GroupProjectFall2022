class MyStringFunctions {

    static toTitleCase(inputString) {
        inputString = inputString.toLowerCase();
        return inputString.substring(0,1).toUpperCase() + inputString.substring(1);
    }





}
module.exports = MyStringFunctions;