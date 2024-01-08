var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();
var source = null;
var analyser = null;

const canvas = document.getElementById('player-fireplace');
const canvasCtx = canvas.getContext('2d');



analyser = audioCtx.createAnalyser();
source = audioCtx.createMediaElementSource(audioPlayer);

analyser.fftSize = 1024; 
var bufferLength = analyser.frequencyBinCount;
console.log(bufferLength);
var dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, canvas.width, canvas.height);



function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(25, 23, 27)';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  var barWidth = (canvas.width / bufferLength) * 2.5;
  var barHeight;
  var x = 0;
  for (var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];

    canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',176,64)';
    canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

    x += barWidth + 1;
  }
}

audioPlayer.addEventListener('play', () => {
  audioCtx.resume().then(() => {
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
      draw();
  });
});

audioPlayer.addEventListener('pause', () => {
  audioCtx.suspend();
});