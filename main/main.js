window.addEventListener("load", drawImage("./img/3.2.jpg"));

function drawImage(imagePath) {
  // canvas準備
  const ctx = document.getElementById("myChart").getContext("2d");

  // 前回の画像をクリア
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // 画像読み込み
  const img = new Image();
  // img.src = "./img/3.2.jpg"; // 画像のURLを指定
  img.src = imagePath; // 画像のURLを指定
  img.onload = () => {
    const canvasAspect = ctx.canvas.width / ctx.canvas.height; //canvasのアスペクト比
    const imgAspect = img.width / img.height; //イメージアスペクト
    var left, top, width, height;
    if (imgAspect >= canvasAspect) {
      // 画像が横長
      left = 0;
      width = ctx.canvas.width;
      height = ctx.canvas.width / imgAspect;
      top = (ctx.canvas.height - height) / 2;
    } else {
      top = 0;
      height = ctx.canvas.height;
      width = ctx.canvas.height * imgAspect;
      left = (ctx.canvas.width - width) / 2;
    }
    ctx.drawImage(img, 0, 0, img.width, img.height, left, top, width, height);
  };
}
