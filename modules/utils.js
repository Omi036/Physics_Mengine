/**
 * Representa un movimiento en el eje X
 * @param {MRU|MRUA} movement Movimiento que mostrar
 * @param {float} initialTime Instante inicial a mostrart
 * @param {float} finalTime  Instante final que mostrar
 * @param {float} timeInterval Mostrar puntos cada x intervalo
 */
function drawAcrossX(movement, initialTime, finalTime, timeInterval){
    timeInterval = timeInterval ? timeInterval : 1
    for(let i = initialTime; i < finalTime; i+=timeInterval){
      point(movement.getPositionAtTime(i), 200)
    }
}

/**
 * Representa un movimiento en el eje Y
 * @param {MRU|MRUA} movement Movimiento que mostrar
 * @param {float} initialTime Instante inicial a mostrart
 * @param {float} finalTime  Instante final que mostrar
 * @param {float} timeInterval Mostrar puntos cada x intervalo
 */
function drawAcrossY(movement, initialTime, finalTime, timeInterval){
    timeInterval = timeInterval ? timeInterval : 1
    for(let i = initialTime; i < finalTime; i+=timeInterval){
      stroke(i*25,100,100)
      point(200, movement.getPositionAtTime(i))
    }
}
  
/**
 * Representa dos movimientos como uno solo
 * @param {MRU|MRUA} movement_x Movimiento del que obtener la posicion X
 * @param {MRU|MRUA} movement_y Movimiento del que obtener la posicion Y
 * @param {float} initialTime Instante inicial a mostrart
 * @param {float} finalTime  Instante final que mostrar
 * @param {float} timeInterval Mostrar puntos cada x intervalo
 */
function drawAcrossMix(movement_x, movement_y, initialTime, finalTime, timeInterval){
    timeInterval = timeInterval ? timeInterval : 1
    for(let i = initialTime; i < finalTime; i+=timeInterval){
      stroke(i*25,100,100)
      point(movement_x.getPositionAtTime(i), movement_y.getPositionAtTime(i))
    }
}

/**
 * 
 * @param {float} deg 
 * @returns {float} Radianes
 */
function degToRad(deg) {
  return deg * Math.PI / 180
}

/**
 * 
 * @param {float} rad 
 * @returns {float} Grados
 */
function radToDeg(rad) {
  return rad * 180 / Math.PI
}