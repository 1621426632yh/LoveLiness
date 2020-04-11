<template>
  <div class="v-body">
    <canvas
      :width="canvasWidth"
      :height="canvasHeight"
      id="canvas"
      v-show="showCanvas"
      ref="canvasElement"
    ></canvas>
    <el-button type="primary" @click="openScan">开启扫描</el-button>
    <el-button type="primary" @click="closeCamera">关闭扫描</el-button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import adapter from "webrtc-adapter";
// WebRTC适配器 只需要引入就ok
import jsQR from "jsqr";
/**
 * jsqr demo
 */

export default {
  name: "Saomiao",
  data: () => ({
    video: document.createElement("video"),
    // 是否显示摄像头
    showCanvas: true,
    canvas2d: undefined,
    canvasWidth: 320,
    canvasHeight: 480
  }),
  destroyed() {
    this.closeCamera();
  },
  methods: {
    //打开摄像头
    openScan() {
      const videoParam = { video: true };
      console.log(this.video);
      navigator.mediaDevices.getUserMedia(videoParam).then(stream => {
        this.video.srcObject = stream;
        this.video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        this.video.play();
        requestAnimationFrame(this.tick);
      });
    },
    // 关闭摄像头
    closeCamera() {
      if (this.video.srcObject) {
        this.video.srcObject.getTracks().forEach(function(track) {
          track.stop();
        });
      }
    },
    tick() {
      this.loadingMessage = "⌛ Loading video...";
      if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
        // this.showCanvas = true
        this.canvasHeight = this.video.videoHeight;
        this.canvasWidth = this.video.videoWidth;
        !this.canvas2d &&
          (this.canvas2d = this.$refs.canvasElement.getContext("2d"));
        this.canvas2d.drawImage(
          this.video,
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        );
        var imageData = this.canvas2d.getImageData(
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        );
        var code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert"
        });
        if (code) {
          this.drawLine(
            code.location.topLeftCorner,
            code.location.topRightCorner,
            "#FF3B58"
          );
          this.drawLine(
            code.location.topRightCorner,
            code.location.bottomRightCorner,
            "#FF3B58"
          );
          this.drawLine(
            code.location.bottomRightCorner,
            code.location.bottomLeftCorner,
            "#FF3B58"
          );
          this.drawLine(
            code.location.bottomLeftCorner,
            code.location.topLeftCorner,
            "#FF3B58"
          );
        //   this.outputData = code.data;
        //   console.log(code.data);
          // this.closeCamera()
          // return
        } else {
          this.outputData = undefined;
        }
      }
      requestAnimationFrame(this.tick);
    },
    drawLine(begin, end, color) {
      this.canvas2d.beginPath();
      this.canvas2d.moveTo(begin.x, begin.y);
      this.canvas2d.lineTo(end.x, end.y);
      this.canvas2d.lineWidth = 4;
      this.canvas2d.strokeStyle = color;
      this.canvas2d.stroke();
    }
  }
};
</script>

<style scoped>
.v-body {
  font-family: "Ropa Sans", sans-serif;
  color: #333;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
}
#githubLink {
  position: absolute;
  right: 0;
  top: 12px;
  color: #2d99ff;
}
h1 {
  margin: 10px 0;
  font-size: 40px;
}
#loadingMessage {
  text-align: center;
  padding: 40px;
  background-color: #eee;
}
#canvas {
  width: 100%;
}
#output {
  margin-top: 20px;
  background: #eee;
  padding: 10px;
  padding-bottom: 0;
}
#output div {
  padding-bottom: 10px;
  word-wrap: break-word;
}
#noQRFound {
  text-align: center;
}
</style>