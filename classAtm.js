class Billete
{
    constructor(v, c, u)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = u;
    }
}

var caja = [];
caja.push(new Billete(1000, 15, "1000.png"));
caja.push(new Billete(500, 15, "500.png"));
caja.push(new Billete(200, 10, "200.png"));
caja.push(new Billete(50, 06, "50.png"));
caja.push(new Billete(20, 05, "20.png"));
caja.push(new Billete(10, 04, "10.png"));

var entregado = [];
