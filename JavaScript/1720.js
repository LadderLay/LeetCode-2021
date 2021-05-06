/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    let res = [first];
    for(let i=0; i<encoded.length; ++i) {
        res[i+1] = encoded[i] ^ res[i];
    }
    return res;
};

// 考察点主要在于对异或的规则的理解