const SAVE_URL = 'http://example.com/receive.php';//保存を行うプログラムのURL
const IMAGE_URL = 'http://example.com/image';// 画像が保存されているURL

//---------------------------------------------
// オブジェクト
//---------------------------------------------
const Banner = {
    bgcolor: "#FFFFFF",  // 背景色
    font: "48px serif",  // フォント
    fontcolor: "Blue",   // 文字色
    text: "Hello World", // テキスト

    // Canvas情報
    canvas: {
      width: null,   // 横幅
      height: null,  // 高さ
      ctx: null      // context
    }
}