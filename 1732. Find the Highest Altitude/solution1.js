/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let highestAltitude = currentAltitude;
    let i = 0;

    while(i<gain.length){
        currentAltitude += gain[i]
        if(highestAltitude < currentAltitude){
            highestAltitude =  currentAltitude
        }
        i++;
    }    

    return highestAltitude;
};