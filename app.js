// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadeamigos = [];
let numeroMaximo = 1;
function agregarAmigo()
{ 
    if (numeroMaximo > 0 && numeroMaximo < 11)
     {
    let nuevoAmigo = document.getElementById('amigo').value;
        if (nuevoAmigo != '')
            {
        listadeamigos.push(nuevoAmigo);
        console.log(listadeamigos);
        numeroMaximo += 1;
        console.log(numeroMaximo);
        limpiarParametros ();
        listarAmigos();
        return;
        }
        else {
            alert('No se aceptan valores vacios')
        }
    }
    else {
    alert('Se llego a la cantidad maxima de amigos para añadir')
    }

}


function limpiarParametros ()
{
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
    return;
}
function listarAmigos ()
{
    let listadoDeAmigos = document.getElementById('listaAmigos');
    listadoDeAmigos.innerHTML = listadeamigos.join('<br>'); 

}
function sortearAmigo ()
{
    if (listadeamigos.length === 0)
    {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    else 
    {    
    let tamanoLista = Math.floor(Math.random() * listadeamigos.length);
    let ganador = listadeamigos[tamanoLista];

    document.getElementById('resultado').innerHTML = `Tu amigo secreto es: <strong>${ganador}<strong>`
    limpiarLista ();
    listadeamigos = [];
    return; 
    }
    
}
function limpiarLista ()
{
    let valorLista = document.getElementById('listaAmigos');
    valorLista.innerHTML = '';

    return;
}

