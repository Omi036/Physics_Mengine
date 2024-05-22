const canvasWidth = 1200
const canvasHeight = 600


function setup() {
  createCanvas(canvasWidth,canvasHeight)
  background(27)
  colorMode(HSB);
}

// See more on https://p5js.org/reference/
function draw() {
  clear()
  strokeWeight(10)
  
  const myMRU = new MRU(130, 30)
  myMRU.plotOverXRealTime(50)
  myMRU.debug()
  myMRU.debugRealTime(Vector2.new(20, 75))

  const myMRUA = new MRUA(130, 15, 20)
  myMRUA.plotOverXRealTime(200)
  myMRUA.debug(Vector2.new(20, 160))
  myMRUA.debugRealTime(Vector2.new(20, 230))

  strokeWeight(2)
  const myMCU = new MCU(Vector2.new(400, 440), 0, 2, 100)
  myMCU.plotRealTime()
  myMCU.debug(Vector2.new(20, 330))
  myMCU.debugRealTime(Vector2.new(20, 490))

  stroke(150, 100, 100)
  const myMCUA = new MCUA(Vector2.new(1100, 440), 0, 1, 2, 100)
  myMCUA.plotRealTime()
  myMCUA.debug(Vector2.new(700, 330))
  myMCUA.debugRealTime(Vector2.new(700, 470))
}