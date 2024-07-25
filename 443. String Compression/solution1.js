/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIndex = 0;
    let count = 1;
    for(i = 0; i < chars.length; i++){
        if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
            count++;
        }else {
            chars[writeIndex] = chars[i];
            writeIndex++;
            if (count > 1) {
                const countStr = count.toString();
                for (let j = 0; j < countStr.length; j++) {
                    chars[writeIndex] = countStr[j];
                    writeIndex++;
                }
            }
            count = 1;
        }
    }    
    chars.length = writeIndex;
};