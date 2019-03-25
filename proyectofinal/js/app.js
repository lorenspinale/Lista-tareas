

let listaTareas = new Array();

listaTareas = [];

console.log(listaTareas);

let boton = document.getElementById('guardar');

boton.addEventListener('click', actualizarTarea);

function actualizarTarea(e){

	event.preventDefault();

	let tarea = document.getElementById('tituloTarea').value;
	let prioridad = document.getElementById('prioridad').value;

	if(tarea == "" || prioridad == "")
	{
		alert('por favor rellena todas las opciones');
	}else{
		guardarTarea(tarea, prioridad);
	}

	//console.log(listaTareas);

}

function guardarTarea(pTarea, pPrioridad){

	let registro = {'idTarea': listaTareas.length, 'titulo': pTarea , 'prioridad': pPrioridad };

	listaTareas.push(registro);

	pintarTarea(registro);
}



function pintarTarea(pRegistro){

	let SectionNombre = document.getElementById('tareas');
	let crearArticle = document.createElement('article');
		crearArticle.className = pRegistro.prioridad;
		crearArticle.id = pRegistro.idTarea;
		crearArticle.innerHTML = `<h2>${pRegistro.titulo}</h2><a id="eliminar${pRegistro.idTarea}" href="#" onclick="eliminarTarea(${crearArticle.id});" title="eliminar">Eliminar</a>`;
		SectionNombre.appendChild(crearArticle);
		//console.log(crearArticle);	
}

function eliminarTarea(pArticle){

	let tareaEliminada = document.getElementById(pArticle);
	tareaEliminada.parentNode.removeChild(tareaEliminada);

}

let prioridadFiltro = document.getElementById('prioridadSelect');

prioridadFiltro.addEventListener('change', filtrarPrioridad);

function filtrarPrioridad(e){}



	

	


