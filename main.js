/*
const clientes = [
	{
	nombre: 'Megapanza',
	telefono: '12345678',
	grabaciones: [
			{
			duracion: 2,
			fecha: '2/02/2020',
			},
			{
			duracion: 4,
			fecha: '6/02/2020',
			},
		],
		pagos: [
		{
			monto: 200,
			fecha: '22/02/2020',
		},
	],
	},

	{
		nombre: 'Conchas fofas',
		telefono: '24424424',
		grabaciones: [
			{
			duracion: 5,
			fecha: '5/02/2020',
			},
			{
			duracion: 6,
			fecha: '14/02/2020',
			},
		],
		pagos: [
			{
				monto: 500,
				fecha: '16/02/2020',
			},
			{
				monto: 400,
				fecha: '23/02/2020',
			},
		],
	},

]

const valorPorHora = 100
function obtenerDeudores(clientes){

const deudores = [];

for (let i = 0; i < clientes.length; i++){
	const cliente = clientes[i]

	let duracionesDeGrabaciones = 0;

	for (let j = 0; j < cliente.grabaciones.length; j++){
			const grabacion = cliente.grabaciones[j]
			
			duracionesDeGrabaciones += grabacion.duracion
			}
	

		const gastadoPorCliente = duracionesDeGrabaciones * valorPorHora
			
	let pagadoPorCliente = 0;
	
	for (let j = 0; j < cliente.pagos.length; j++){
		const pago = cliente.pagos[j]

		pagadoPorCliente += pago.monto

		}

		const deudaDeCliente = gastadoPorCliente - pagadoPorCliente;
			if (deudaDeCliente > 0){
			deudores.push({
					nombre: cliente.nombre,
					telefono: cliente.telefono,
					deuda: deudaDeCliente,

				})
			}

	}

return deudores
}

const misDeudores = obtenerDeudores(clientes)



const misFechas = [
	'03/04/2017',
	'01/05/2019',
	'03/11/2017',
	'09/01/2017',
	'01/03/2018',
]

function obtenerFechasABuscar(mes, anio){
	if(mes > 9){
		return mes + '/' + anio
	}
	return '0' + mes + '/' + anio
}


function obtenerFechasEn(fechas, mes, anio){
	const fechasEncontradas = []

	for(let i = 0; i < fechas.length; i++){
		const fecha = fechas[i]

		const aBuscar = obtenerFechasABuscar(mes, anio)

		if (fecha.includes(aBuscar)){
			fechasEncontradas.push(fecha)
		}
	}

	return fechasEncontradas

}

const fechasObtenidas = obtenerFechasEn(misFechas, 1, 2017)
console.log(fechasObtenidas)



window.onload = function(){
	const boton = document.querySelector('.boton')

	function capturarClick(){
		alert('capture el click!!')
	}

	boton.addEventListener('click', capturarClick)
}
*/
window.onload = function(){

	const boton = document.querySelector('.boton')
	const demo = document.querySelector('.demo')
	const demo2 = document.querySelector('.demo2')
	const edad = document.querySelector('.edad')


	function comprobarEdad(){
		let valor = document.querySelector('.edad').value
			if (document.querySelector('.edad').value.length == 0){
				alert('Por favor ingrese un numero')
			}

			if (valor < 18) {
				demo.innerHTML = 'Es menor de edad !!'
				demo2.innerHTML = ''

			}
			else{
				demo2.innerHTML = 'Bienvenidx'
				demo.innerHTML = ''
			}

	}
	
	boton.addEventListener('click', comprobarEdad)
}


































/*function obtenerFraseCensurada(expresion){
	let expresionCensurada = ''

	for (let i = 0; i < expresion.length; i++){
		expresionCensurada = expresionCensurada + '*'
	}

	return expresionCensurada
}

function censurarTexto(frase, expresionesCensuradas){
	let fraseCensurada = frase

	for (let i = 0; i < expresionesCensuradas.length; i++){
		const expresion = expresionesCensuradas[i]
		if(frase.includes(expresion)){
			fraseCensurada = fraseCensurada.replace(expresion, obtenerFraseCensurada(expresion))
		}
	}
	return fraseCensurada
}

console.log(censurarTexto('hola como les va mi gente bonita', ['hola', 'gente']))*/