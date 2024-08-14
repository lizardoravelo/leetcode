/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let highestAltitude = 0;
    let i = 0;
    
    while(i<gain.length){
        currentAltitude += gain[i]
        if(currentAltitude > highestAltitude){
            highestAltitude = currentAltitude;
        }
        i++;
    }

    return highestAltitude;
};