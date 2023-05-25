const generateImg = require("../src/index.js");
const getImgDimension = require("../src/getImgDimension.js");

test("默认生成图片", () => {
    const buffer = generateImg();

    getImgDimension(buffer).then((res) => {
        expect(res).toStrictEqual({
            width: 100,
            height: 100,
        });
    });
});

test("生成指定宽高图片", () => {
    const buffer = generateImg(200, 100);

    getImgDimension(buffer).then((res) => {
        expect(res).toStrictEqual({
            width: 200,
            height: 100,
        });
    });
});
