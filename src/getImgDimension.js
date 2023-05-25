/**
 * @description Get image dimension from buffer
 * @param {Buffer} buff
 */
function getImgDimension(buff) {
    if (
        buff.toString("utf8", 1, 8) === "PNG\r\n\x1a\n" &&
        buff.toString("utf8", 12, 16) === "IHDR"
    ) {
        return new Promise((resolve, reject) => {
            resolve({
                width: buff.readUInt32BE(16),
                height: buff.readUInt32BE(20),
            });
        });
    } else {
        return false;
    }
}

module.exports = getImgDimension;
