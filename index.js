// Code your solution here
function findMatching(drivers, string){
    const result = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase());
    return result;
}

function fuzzyMatch(names, string){
    const matchingLetters = names.filter(name => name.charAt(0) === string.charAt(0));
    return matchingLetters;
}

function matchName(driver, string){
    const matchingNames = driver.filter(driverName => driverName.name === string);
    return matchingNames;
}