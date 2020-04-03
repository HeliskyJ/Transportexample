function createRent() {

    let transporte: HTMLSelectElement = document.getElementById('transport') as HTMLSelectElement;
    var transportE: string = transporte.value;
    let anio: HTMLInputElement = document.getElementById('anio') as HTMLInputElement;
    var aniO: string = anio.value;
    let motor: HTMLInputElement = document.getElementById('motor') as HTMLInputElement;
    var motoR: string = motor.value;
    let color: HTMLInputElement = document.getElementById('color') as HTMLInputElement;
    var coloR: string = color.value;
    let tipo: HTMLInputElement = document.getElementById('tipo') as HTMLInputElement;
    var tipO: string = tipo.value;
    let marca: HTMLInputElement = document.getElementById('marca') as HTMLInputElement;
    var marcA: string = marca.value;
    let modelo: HTMLInputElement = document.getElementById('modelo') as HTMLInputElement;
    var modelO: string = modelo.value;
    let alcance: HTMLInputElement = document.getElementById('alcance') as HTMLInputElement;
    var alcancE: number = Number(alcance.value);

    class Transports {
        transport: string;
        month: string;
        motor: string;
        color: string;
        type: string;
        marca: string;
        model: string;
        alcance: number;

        constructor(transport: string, month: string, motor: string, color: string, type: string, marca: string, model: string, alcance: number) {
            this.transport = transport;
            this.month = month;
            this.motor = motor;
            this.color = color;
            this.type = type;
            this.marca = marca;
            this.model = model;
            this.alcance = alcance;
        }
        getTransport(): string {
            return this.transport.toUpperCase();
        }
        getMonth(): string {
            return this.month.toUpperCase();
        }
        getMotor(): string {
            return this.motor.toUpperCase();
        }
        getColor(): string {
            return this.color.toUpperCase();
        }
        getType(): string {
            return this.type.toUpperCase();
        }
        getMarca(): string {
            return this.marca.toUpperCase();
        }
        getModel(): string {
            return this.model.toUpperCase();
        }
        getAlcance(): string {
            return String(this.alcance).toUpperCase();
        }
    }

    class Terrestre extends Transports {
        constructor(transport: string, month: string, motor: string, color: string, type: string, marca: string, model: string, alcance: number) {
            super(transport, month, motor, color, type, marca, model, alcance);
        }
    }
    class Aereo extends Transports {
        constructor(transport: string, month: string, motor: string, color: string, type: string, marca: string, model: string, alcance: number) {
            super(transport, month, motor, color, type, marca, model, alcance);
        }
    }
    class Maritimo extends Transports {
        constructor(transport: string, month: string, motor: string, color: string, type: string, marca: string, model: string, alcance: number) {
            super(transport, month, motor, color, type, marca, model, alcance);
        }
    }

    if (transportE == 'terrestre') {
        let transporteTerrestre = new Terrestre(transportE,aniO,motoR, coloR,tipO,marcA,modelO,alcancE);
        (<HTMLSpanElement>document.getElementById("trnsp")).innerHTML = transporteTerrestre.getTransport();
        (<HTMLSpanElement>document.getElementById("yr")).innerHTML = transporteTerrestre.getMonth();
        (<HTMLSpanElement>document.getElementById("mtr")).innerHTML = transporteTerrestre.getMotor();
        (<HTMLSpanElement>document.getElementById("cr")).innerHTML = transporteTerrestre.getColor();
        (<HTMLSpanElement>document.getElementById("tp")).innerHTML = transporteTerrestre.getType();
        (<HTMLSpanElement>document.getElementById("mrc")).innerHTML = transporteTerrestre.getMarca();
        (<HTMLSpanElement>document.getElementById("mdl")).innerHTML = transporteTerrestre.getModel();
        (<HTMLSpanElement>document.getElementById("lcnc")).innerHTML = transporteTerrestre.getAlcance();
    } else if (transportE == 'maritimo') {
        let transporteMaritimo = new Maritimo(transportE,aniO,motoR, coloR,tipO,marcA,modelO,alcancE);
        console.log('Maritimo');
    } else {
        let transporteAereo = new Aereo(transportE,aniO,motoR, coloR,tipO,marcA,modelO,alcancE);
        console.log('Aereo');
    }
}