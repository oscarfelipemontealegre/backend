class TicketManager {
    #precioBaseGanancia = 0.15
    constructor(nombre){
        this.nombre =nombre
        this.eventos = []
    } 

    getEventos(){
        return this.eventos
    }
    agregarEventos(nombre,lugar,precio, capacidad=50, fecha= new Date() ){
        const evento = {
            id: this.#agregarId(),
            nombre,
            lugar,
            precio: precio + this.#precioBaseGanancia,
            capacidad,
            fecha,
            participantes: []

        }
        this.eventos.push(evento)
    }

    agregarUsuario (idEvento,idUsuario){
        const evento = this.#evaluarEvento(idEvento)
        if (evento){
            if (evento.participantes.incluides(idUsuario)){
                console.log('partipante ya esta incluido en este evento')
            } else {
                evento.participantes.push(idUsuario)
                console.log('participante incluido con exito')
            }
        }else{
            console.log('evento no existe')
        }
    }

    ponerEventoGira(idEvento,nuevoLugar,nuevaFecha){
        const evento = this.#evaluarEvento(idEvento)
            if (evento){
                const nuevoEvento ={
                    ...evento,
                    id:this.#agregarId,
                    lugar: nuevoLugar,
                    fecha: nuevaFecha,
                    participantes:[]
                }
                this.eventos.push(nuevoEvento)
            } else {
                console.log ('evento no existe')
                }
        }

    #agregarId(){
        let id = 1
        if (this.eventos.length!==0){
            id = this.eventos[this.eventos.length-1].id+1
        }
        return id
    }
    #evaluarEvento(idEvento){
        return this.eventos.find(evento=>evento.id===idEvento)
    }
}

const TicketManager1 = new TicketManager('oscar')
const TicketManager2 = new TicketManager()

TicketManager1.agregarEventos('evento1','luaga1',3,100,)

TicketManager1.agregarEventos('evento2','luaga2',2.50,50,)

TicketManager1.agregarEventos('evento3','luaga3',10,80,)

TicketManager1.agregarEventos(2,1)
TicketManager1.agregarEventos(2,1)

TicketManager1.ponerEventoGira('evento4','lugar4', new Date ('01/10/2023'))

TicketManager1.ponerEventoGira('evento1','lugar4', new Date ('05/10/2023'))


console.log (TicketManager1.getEventos())
//console.log (TicketManager2.getEventos());
