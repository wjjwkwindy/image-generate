const path = require("path");
const { createCanvas, registerFont } = require("canvas");

// 注册字体
registerFont(path.resolve(__dirname, "fonts/Exo2-Regular.ttf"), {
    family: "Exo2-Regular",
});

/**
 * 生成图片
 * @param {number} width 宽度
 * @param {number} height 高度
 * @param {string} text 文字
 */
const generateImg = (width = 100, height = 100 , text) => {
    // TODO: 宽高参数校验、文字参数校验、宽高限制
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    
    text = text || `${width} x ${height}`;

    // 背景、宽高
    ctx.fillStyle = "#dddddd";
    ctx.fillRect(0, 0, width, height);

    // 文字
    // TODO: 文字大小随图片宽高变化
    ctx.font = '20px "Exo2-Regular"';
    ctx.textAlign = "center";
    ctx.fillStyle = "#aaaaaa";
    ctx.fillText(
        text,
        width / 2,
        height / 2 + ctx.measureText("M").width / 2
    );

    // 生成图片
    const buffer = canvas.toBuffer("image/png");
    return buffer;
};

module.exports = generateImg;
