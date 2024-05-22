/**
 * # Movimiento MRU
 * La velocidad es constante
 */
class MRU {
    /**
     * # Movimiento MRU
     * La velocidad es constante
     * @param {float} initialPos Posicion inicial del cuerpo (m)
     * @param {float} velocity Velocidad del cuerpo (m/s)
     */
    constructor(initialPos, velocity){
        this.initialPos = initialPos
        this.velocity = velocity
    }

    /**
     * Devuelve la posicion del cuerpo en un instante
     * @param {float} time Instante (s)
     * @returns {float} Nueva posicion (m)
     */
    getPositionAtTime(time) {
        return this.initialPos + this.velocity * time
    }

    /**
     * Devuelve el instante dado una posicion
     * @param {float} pos Posicion del cuerpo (m)
     * @returns {float} Instante (s)
     */
    getTimeAtPos(pos) {
        return (pos - this.initialPos) / this.velocity
    }

    /**
     * Representa la funcion en el eje X
     * @param {float} time Instante (s)
     * @param {float} y Posicion en el eje Y (m)
     */
    plotOverX(time, y){
        y = y ? y : 0
        stroke(30,100,100)
        point(this.initialPos + this.getPositionAtTime(time), y)
    }

    /**
     * Representa la funcion en el eje X en tiempo real
     * @param {float} y Posicion Y en la que representar (m)
     * @param {*} scale Escala del tiempo a representar
     */
    plotOverXRealTime(y, scale){
        scale = scale ? scale : 1000
        const instant = millis()/scale  

        this.plotOverX(instant, y)
    }

    /**
     * Representa la funcion en el eje Y
     * @param {float} time Instante (s)
     * @param {float} x Posicion en el eje X (m)
     */
    plotOverY(time, x){
        x = x ? x : 0
        stroke(30,100,100)
        point(x, this.initialPos + this.getPositionAtTime(time))
    }

    /**
     * Representa la funcion en el eje Y en tiempo real
     * @param {float} x Posicion X en la que representar (m)
     * @param {*} scale Escala del tiempo a representar
     */
    plotOverYRealTime(x, scale){
        scale = scale ? scale : 1000
        const instant = millis()/scale  

        this.plotOverY(instant, x)
    }

    /**
     * Muestra informacion del movimiento
     * @param {Vector2} pos Posicion en el que mostrar la ventana
     */
    debug(pos){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        noStroke()
        fill('red')
        text("MRU", horizontal, placement)
        fill('cornflowerblue');
        text(`Punto Inicial: ${this.initialPos}m`, horizontal, placement + 20)
        text(`Velocidad: ${this.velocity}m/s`, horizontal, placement + 35)
    }

    /**
     * Muestra informacion a tiempo real del movimiento
     * @param {Vector2} pos Posicion en la que mostrar la informacion
     * @param {float} scale Escala que reducir la representacion
     */
    debugRealTime(pos, scale){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        scale = scale ? scale : 1000
        const instant = millis()/scale  

        const position = this.getPositionAtTime(instant)

        noStroke()
        fill('pink')
        text(`Instante Actual: ${instant}s`, horizontal, placement)
        text(`Posicion Actual: ${this.getPositionAtTime(instant).toFixed(2)}m`, horizontal, placement + 15)
    }
}


/**
 * # Movimiento MRUA
 * La velocidad es cambiante debido a la aceleracion
 */
class MRUA {
    /**
     * # Movimiento MRUA
     * La velocidad es cambiante debido a la aceleracion
     * @param {float} initialPos Posicion inicial del cuerpo (m)
     * @param {float} initialVelocity Velocidad inicial del cuerpo (m/s)
     * @param {float} acceleration Aceleracion inicial del cuerpo (m2/s)
     */
    constructor(initialPos, initialVelocity, acceleration){
        this.initialPos = initialPos
        this.initialVelocity = initialVelocity
        this.acceleration = acceleration
    }

    /**
     * Devuelve la velocidad del cuerpo dado un instante
     * @param {float} time Instante (s)
     * @returns {float} Nueva Velocidad (m/s)
     */
    getVelocityAtTime(time){
        return this.initialVelocity + this.acceleration * time
    }

    /**
     * Devuelve la posicion del cuerpo dado un instante
     * @param {float} time Instante del cuerpo (s)
     * @returns {float} Nueva Posicion (m)
     */
    getPositionAtTime(time){
        return this.initialPos + this.initialVelocity*time + (this.acceleration*time**2) / 2
    }

    /**
     * Devuelve el tiempo dado la velocidad
     * @param {float} velocity (m/s)
     * @returns {float} Instante (s)
     */
    getTimeAtVelocity(velocity){
        return (velocity - this.initialVelocity) / this.acceleration
    }

    /**
     * Representa la funcion en el eje X
     * @param {float} time Instante (s)
     * @param {float} y Posicion en el eje Y (m)
     */
    plotOverX(time, y){
        y = y ? y : 0
        stroke(330,100,100)
        point(this.initialPos + this.getPositionAtTime(time), y)
    }

    /**
     * Representa la funcion en el eje X en tiempo real
     * @param {float} y Posicion Y en la que representar (m)
     * @param {*} scale Escala del tiempo a representar
     */
    plotOverXRealTime(y, scale){
        scale = scale ? scale : 1000
        const instant = millis()/scale  

        this.plotOverX(instant, y)
    }

    /**
     * Representa la funcion en el eje Y
     * @param {float} time Instante (s)
     * @param {float} x Posicion en el eje X (m)
     */
    plotOverY(time, x){
        x = x ? x : 0
        stroke(330,100,100)
        point(x, this.initialPos + this.getPositionAtTime(time))
    }

    /**
     * Representa la funcion en el eje Y en tiempo real
     * @param {float} x Posicion X en la que representar (m)
     * @param {*} scale Escala del tiempo a representar
     */
    plotOverYRealTime(x, scale){
        scale = scale ? scale : 1000
        const instant = millis()/scale  

        this.plotOverY(instant, x)
    }

    /**
     * Muestra informacion del movimiento
     * @param {Vector2} pos Posicion en el que mostrar la ventana
     */
    debug(pos){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        noStroke()
        fill('red')
        text("MRUA", horizontal, placement)
        fill('cornflowerblue');
        text(`Punto Inicial: ${this.initialPos}m`, horizontal, placement + 20)
        text(`Velocidad Inicial: ${this.initialVelocity}m/s`, horizontal, placement + 35)
        text(`Aceleracion: ${this.acceleration}m2/s`, horizontal, placement + 50)
    }

    /**
     * Muestra informacion a tiempo real del movimiento
     * @param {Vector2} pos Posicion en la que mostrar la informacion
     * @param {float} scale Escala que reducir la representacion
     */
    debugRealTime(pos, scale){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        scale = scale ? scale : 1000
        const instant = millis()/scale  

        const position = this.getPositionAtTime(instant)

        noStroke()
        fill('pink')
        text(`Instante Actual: ${instant}s`, horizontal, placement)
        text(`Velocidad Actual: ${this.getVelocityAtTime(instant).toFixed(2)}m/s`, horizontal, placement + 15)
        text(`Posicion Actual: ${this.getPositionAtTime(instant).toFixed(2)}m`, horizontal, placement + 30)
    }
}


/**
 * # Movimiento MCU
 * Movimiento circular con velocidad constante
 */
class MCU {
    /**
     *  # Movimiento MCU
     * Movimiento circular con velocidad constante
     * @param {Vector2} center Centro del movimiento
     * @param {float} initialAngle Angulo inicial (rad)
     * @param {float} angularVelocity Velocidad angular (rad/s)
     * @param {float} radius Radio del movimiento (m)
     */
    constructor(center, initialAngle, angularVelocity, radius){
        this.center = center
        this.radius = radius
        this.initialAngle = initialAngle
        this.angularVelocity = angularVelocity
        this.linearVelocity = angularVelocity * radius
        this.normalAcceleration = this.linearVelocity**2 / radius
        this.period = (2 * Math.PI)/angularVelocity
        this.frequency = 1/this.period
    }

    /**
     * Devuelve el angulo dado un instante
     * @param {*} time Instante (s)
     * @returns {float} Angulo recorrido (rad)
     */
    getAngleAtTime(time){
        return this.initialAngle + this.angularVelocity * time
    }

    /**
     * Devuelve el espacio recorrido dado un instante
     * @param {float} time Instante (s)
     * @returns {space} Espacio recorrido (m)
     */
    getSpaceAtTime(time){
        return this.getAngleAtTime(time) * this.radius
    }

    /**
     * Devuelve la posicion del cuerpo dado un instante
     * @param {float} time Instante
     * @returns {Vector2} Posicion del cuerpo
     */
    getPositionAtTime(time){
        const angle = this.getAngleAtTime(time)

        const xPos = this.center.x + (Math.cos(angle) * this.radius)
        const yPos = this.center.y - (Math.sin(angle) * this.radius)

        return new Vector2(xPos, yPos)
    }
    
    /**
     * Representa el movimiento dado un instante
     * @param {float} time Instante que representar (s)
     */
    plot(time){
        time = time ? time : 0

        stroke('green') // Dibuja el centro
        point(...this.center.toArray())

        const angle = this.getAngleAtTime(time)

        const xPos = this.center.x + (Math.cos(angle) * this.radius)
        const yPos = this.center.y - (Math.sin(angle) * this.radius)

        line(...this.center.toArray(), xPos, yPos)
    }

    /**
     * Representa la funcion en tiempo real
     * @param {*} scale Escala a la que reducir la velocidad
     */
    plotRealTime(scale){
        scale = scale ? scale : 1000
        const instant = millis()/scale  
        
        this.plot(instant)
    }

    /**
     * Muestra informacion del movimiento
     * @param {Vector2} pos Posicion en el que mostrar la ventana
     */
    debug(pos){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        noStroke()
        fill('red')
        text("MCU", horizontal, placement)
        fill('cornflowerblue');
        text(`Punto medio: ${this.center.x}m, ${this.center.y}m`, horizontal, placement + 20)
        text(`Radio: ${this.radius}m`, horizontal, placement + 35)
        text(`Velocidad Angular: ${this.angularVelocity}rad/s`, horizontal, placement + 50)
        text(`Angulo Inicial: ${this.initialAngle}rad`, horizontal, placement + 65)
        text(`Periodo: ${this.period}rad`, horizontal, placement + 80)
        text(`Frecuencia: ${this.frequency}rad`, horizontal, placement +95)

        fill('limegreen');
        text(`Velocidad Linear: ${this.linearVelocity}rad/s`, horizontal, placement + 115)
        text(`Aceleracion Normal: ${this.normalAcceleration }rad2/s`, horizontal,placement + 130)
    }

    /**
     * Muestra informacion a tiempo real del movimiento
     * @param {Vector2} pos Posicion en la que mostrar la informacion
     * @param {float} scale Escala que reducir la representacion
     */
    debugRealTime(pos, scale){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        scale = scale ? scale : 1000
        const instant = millis()/scale  

        const position = this.getPositionAtTime(instant)

        noStroke()
        fill('pink')
        text(`Instante Actual: ${instant}s`, horizontal, placement)
        text(`Radio Actual: ${this.getAngleAtTime(instant).toFixed(2)}rad`, horizontal, placement + 15)
        text(`Espacio Recorrido: ${this.getSpaceAtTime(instant).toFixed(0)}m`, horizontal, placement + 30)
        text(`Posicion Actual: ${position.x.toFixed(3)}m ${position.y.toFixed(3)}m`, horizontal, placement + 45)
    }
}


/**
 * # MCUA
 * Movimiento circular en el que varia la velocidad por aceleracion
 */
class MCUA {
    /**
     * # MCUA
     * Movimiento circular en el que varia la velocidad por aceleracion
     * @param {Vector2} center Posicion del centro de la circunferencia (m)
     * @param {float} initialAngle Angulo inicial del cuerpo (rad)
     * @param {float} initialAngularVelocity Velocidad angular inicial del cuerpo (rad/s)
     * @param {float} angularAcceleration Aveleracion angular del cuerpo (rad2/s)
     * @param {float} radius Radio de la circunferencia (m)
     */
    constructor(center, initialAngle, initialAngularVelocity, angularAcceleration, radius){
        this.center = center,
        this.initialAngle = initialAngle
        this.initialAngularVelocity = initialAngularVelocity
        this.radius = radius
        this.initialLinearVelocity = initialAngularVelocity * radius
        this.angularAcceleration = angularAcceleration
        this.initialCentrAcceleration = this.initialLinearVelocity**2 / radius
    }

    /**
     * Devuelve la velocidad angular dado un instante
     * @param {float} time Instante (s)
     * @returns {float} Velocidad Angular en el instante (rad/s)
     */
    getAngularVelocityAtTime(time){
        return this.initialAngularVelocity + this.angularAcceleration * time
    }

    /**
     * Devuelve el angulo del cuerpo dado un instante
     * @param {float} time Instante (s)
     * @returns {float} Angulo del cuerpo en el instane (rad)
     */
    getAngleAtTime(time){
        return this.initialAngle + this.initialAngularVelocity * time + (this.angularAcceleration * time**2)/2
    }

    /**
     * Devuelve la posicion del cuerpo dado un instante
     * @param {float} time Instante (s)
     * @returns {Vector2} Posicion del cuerpo en el instante
     */
    getPositionAtTime(time){
        const angle = this.getAngleAtTime(time)

        const xPos = this.center.x + (Math.cos(angle) * this.radius)
        const yPos = this.center.y - (Math.sin(angle) * this.radius)

        return new Vector2(xPos, yPos)
    }

    /**
     * Muestra la funcion dado un instante
     * @param {float} time Instante (s)
     */
    plot(time){
        time = time ? time : 0

        stroke(200,100,100) // Dibuja el centro
        point(...this.center.toArray())

        const angle = this.getAngleAtTime(time)

        const xPos = this.center.x + (Math.cos(angle) * this.radius)
        const yPos = this.center.y - (Math.sin(angle) * this.radius)

        line(...this.center.toArray(), xPos, yPos)
    }

    /**
     * Representa la funcion en tiempo real
     * @param {*} scale Escala a la que reducir la velocidad
     */
    plotRealTime(scale){
        scale = scale ? scale : 1000
        const instant = millis()/scale  
        
        this.plot(instant)
    }

    /**
     * Muestra informacion del movimiento
     * @param {Vector2} pos Posicion en el que mostrar la ventana
     */
    debug(pos){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        noStroke()
        fill('red')
        text("MCUA", horizontal, placement)
        fill('cornflowerblue');
        text(`Centro: ${this.center.x}m, ${this.center.y}m`, horizontal, placement + 20)
        text(`Radio: ${this.radius}m`, horizontal, placement + 35)
        text(`Angulo Inicial: ${this.initialAngle}rad`, horizontal, placement + 50)
        text(`Aceleracion Angular: ${this.angularAcceleration}rad2/s`, horizontal, placement + 65)
        text(`Aceleracion Centripeda Inicial: ${this.initialCentrAcceleration}rad2/s`, horizontal, placement + 80)

        fill('limegreen');
        text(`Velocidad Lineal Inicial: ${this.initialAngularVelocity}rad/s`, horizontal, placement + 100)
        text(`Velocidad Angular Inicial: ${this.initialAngularVelocity}rad/s`, horizontal, placement + 115)
    }

    /**
     * Muestra informacion a tiempo real del movimiento
     * @param {Vector2} pos Posicion en la que mostrar la informacion
     * @param {float} scale Escala que reducir la representacion
     */
    debugRealTime(pos, scale){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        scale = scale ? scale : 1000
        const instant = millis()/scale  

        const position = this.getPositionAtTime(instant)

        noStroke()
        fill('pink')
        text(`Instante Actual: ${instant}s`, horizontal, placement)
        text(`Radio Actual: ${this.getAngleAtTime(instant).toFixed(2)}rad`, horizontal, placement + 15)
        text(`Velocidad Angular Actual: ${this.getAngularVelocityAtTime(instant).toFixed(3)}rad/s`, horizontal, placement + 30)
        text(`Posicion Actual: ${position.x.toFixed(2)}m ${position.y.toFixed(2)}m`, horizontal, placement + 45)
    }
}


/**
 * # Tiro Horizontal
 * El tiro horizontal esta compuesto por un MRU en el eje-X y un MRUA en el eje-Y
 */
class HorizontalThrow{
    /**
     * # Tiro Horizontal
     * El tiro horizontal esta compuesto por un MRU en el eje-X y un MRUA en el eje-Y
     * @param {Vector2} initialPosition Vector2D de la posicion inicial del cuerpo
     * @param {float} velocity Velocidad del cuerpo
     * @param {float} angleInDeg Angulo del lanzamiento (en grados)
     * @param {float} acceleration Aceleracion vertical
     */
    constructor(initialPosition, velocity, angleInDeg, acceleration){
        this.initialPosition = initialPosition
        this.velocity = velocity
        this.angleInDeg = angleInDeg
        this.angleInRad = angleInDeg * (Math.PI / 180)
        this.acceleration = acceleration 
        this.xvelocity = Math.cos(this.angleInRad) * velocity
        this.yvelocity = -(Math.sin(this.angleInRad) * velocity)

        this.horizontalMovement = new MRU(initialPosition.x, this.xvelocity)
        this.verticalMovement = new MRUA(initialPosition.y, this.yvelocity, acceleration)
    }

    /**
     * Devuelve la posicion dado un instante
     * @param {float} time Instante
     * @returns {Vector2} Posicion del cuerpo
     */
    getPositionAtTime(time){
        const xPos = this.horizontalMovement.getPositionAtTime(time)
        const yPos = this.verticalMovement.getPositionAtTime(time)
        return new Vector2(xPos, yPos)
    }

    /**
     * Devuelve la posicion del punto mas alto.  
     * Calculado a partir del tiempo cuando la velocidad vertical es 0
     * @returns {Vector2} Vector2D Del punto mas alto
     */
    getHighestPoint(){
        const seconds = this.verticalMovement.getTimeAtVelocity(0)
        const verticalLocation = this.verticalMovement.getPositionAtTime(seconds)
        const horizontalLocation = this.horizontalMovement.getPositionAtTime(seconds)
        
        return new Vector2(horizontalLocation, verticalLocation)
    }

    /**
     * Muestra una grafica del lanzamiento
     * @param {float} initialTime Instante inicial a mostrart
     * @param {float} finalTime Instante final que mostrar
     * @param {float} interval Mostrar puntos cada x intervalo
     */
    plot(initialTime, finalTime, interval){
        interval = interval ? interval : 1
        for(let i=initialTime; i<finalTime; i+=interval){
            stroke(i*25,100,100)
            point(...this.getPositionAtTime(i).toArray())
        }
    }

    /**
     * Muestra informacion del lanzamiento
     * @param {Vector2} pos Posicion en el que mostrar los datos
     */
    debug(pos){
        if(!(pos instanceof Vector2)) {
            pos = Vector2.new(20, 20)
        }
        const horizontal = pos.x
        const placement = pos.y

        noStroke()
        fill('red')
        text("TIRO HORIZONTAL", horizontal, placement)

        fill('cornflowerblue');
        text(`Punto medio: ${this.initialPosition.x}m, ${this.initialPosition.y}m`, horizontal, placement + 20)
        text(`Velocidad: ${this.velocity}m/s `, horizontal, placement + 35)
        text(`Angulo: ${this.angleInDeg.toFixed(2)}°`, horizontal, placement + 50)
        text(`Aceleracion: -${this.acceleration}m2/s `, horizontal, placement + 65)

        fill('limegreen');
        text(`Velocidad X: ${this.xvelocity.toFixed(8)}m/s `, horizontal, placement + 90)
        text(`Velocidad Y: ${(this.yvelocity * -1).toFixed(8)}m/s `, horizontal, placement + 105)
    }
}

/**
 * # Vector 2D
 * Matriz que representa una posicion X e Y
 */
class Vector2 {
    /**
     * 
     * @param {int} x 
     * @param {int} y 
     */
    constructor(x, y){
        this.x = x
        this.y = y
        this.module = Math.sqrt(this.x**2 + this.y**2)
    }

    /**
     * Crea un nuevo vector2 a partir de una array de tipo int
     * @param {int[]} posArray 
     * @returns {Vector2}
     */
    static fromArray(posArray){
        return new Vector2(posArray[0], posArray[1])
    }

    static new(x, y){
        return new Vector2(x, y)
    }

    /**
     * Transforma el vector2 en array de tipo int
     * @returns {int[]}
     */
    toArray(){
        return [this.x, this.y]
    }

    /**
     * Suma el vector original con otro
     * @param {Vector2} vector2 Vector que sumar
     * @returns {Vector2}
     */
    sum(vector2){
        return new Vector2(this.x + vector2.x, this.y + vector2.y)
    }

    /**
     * Resta el vector original con otro
     * @param {Vector2} vector2 Vector que restar
     * @returns {Vector2}
     */
    diff(vector2){
        return new Vector2(this.x - vector2.x, this.y - vector2.y)
    }
}