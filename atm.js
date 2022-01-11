var dinero, div, papeles;
var boton = document.getElementById("btnextraer");
var number = document.getElementById("valordinero");
var resultado = document.getElementById("resultado");
var cajero = document.getElementById("cajero");

boton.addEventListener("click", extraerDinero);

for ( var v of caja)
{
    cajero.innerHTML +=  v.cantidad +  " billetes de $" + v.valor + " <br />";
}
cajero.innerHTML = "Billetes disponible: <hr />" + cajero.innerHTML + "<hr />";

function extraerDinero()
{
    entregado.splice(0, entregado.length);
    dinero = parseInt(number.value);

    for( var b of caja)
    {
        if( dinero > 0)
        {
            div = Math.floor( dinero / b.valor);
            if(div > b.cantidad)
            {
                papeles = b.cantidad;
            }
            else
            {
                papeles = div;
            }

            for(i=0;  i < papeles; i++)
            {
             entregado.push(new Billete( b.valor, 1, b.imagen.src));
            }
                        
            dinero = dinero - ( b.valor * papeles);
        }
    }

    if(dinero > 0)
    {
        entregado.splice(0, entregado.length);
        resultado.innerHTML += "Cajero no dispone de esa cantidad !!!"
        resultado.innerHTML += "<hr/>";
    }
    else
    {
        cajero.innerHTML = "";
        resultado.innerHTML += "Billetes Extraidos:  <br>";

        for(var x of caja )
        {

         for (var e of entregado)
         {
            if (e.valor == x.valor)
            {
                x.cantidad -= e.cantidad;
                resultado.innerHTML += "<img src=" + e.imagen.src + " />" ;
            }
         }

        cajero.innerHTML +=   x.cantidad +  " billetes de $" + x.valor + " <br />";
        }
        cajero.innerHTML = "Billetes disponible: <hr />" + cajero.innerHTML + "<hr />";
        resultado.innerHTML += "<hr/>";
    }
}

