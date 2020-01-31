# Bienvenido a NavBar CCasal!

¡Hola!. Este plugin esta destinado a la creación dinámica de barras de navegación.


# Funciones Plugin:

- Para llamar a una función hay que hacerlo mediante:
- Lo que esta entre [] es opcional dependiendo de la función.
- Sintaxis:
	-	$('elemento').cCasalNav('nombreFuncion', ['Parámetros necesarios para la función]');


### navAnimacion. Para crear el navbar con una animación de inicio:
- Es recomendable usarla combinada con navSimple. Mediante el uso de cookies, para que navAnimacion solo se ejecute la primera vez que se accede.
- Sintaxis: 
	-	$('elemento').cCasalNav('navAnimacion', 'nombreMenu');


### navSimple. Para crear el navbar sin animación :

- Se puede usar sola o en combinación con navAnimacion, como se explica en el punto anterior.
- Sintaxis:
	-	$('elemento').cCasalNav('navSimple', 'nombreMenu');


### borrarNav. Para eliminar el navbar :
-Comprueba que el elemento que lo llama class= "navbar", y si es así, lo elimina.
-Sintaxis:
	-	$('elementoABorrar').cCasalNav('borrarNav');


### AñadirElementoNav. Añade un elemento al navbar:
 - Puede recibir 5 parámetros de los cuales los dos primeros son obligatorios.
	 1. Determina el nombre del nuevo elemento.
	 2. Indica si va a tener submenu, true: añade un "ul" para el submenu, sin esta opción no podrá usarse "añadirElementoSubNav" sobre el.
	 3. Enlace al que nos llevará el nuevo elemento, puede ser null: si es así, se creará un enlace automático a partir del id del elemento. O bien puede ser un enlace determinado. Este parámetro debe estar si se quiere hacer uso de los siguientes parámetros.
	 4. Determina la posición del objeto.Debe ser null, before o after:
	 - Si es null (por defecto) inyectará el elemento en la última posición de los hijos de .navbar, en el caso de que no los hubiera, se inyectaría como primer elemento. 
	 - Si es before lo inyectará antes del elemento pasado como último parámetro de la función.
	 - Si es after lo inyectará después del elemento pasado como último parámetro de la función.
	5. Elemento que se usará para colocar el nuevo elemento si se ha pasado el 5º parámetro.
	
 - Sintaxis:
	 -	$('.navbar').cCasalNav('añadirElementoNav', 'nombreElemento', true |false, 'urlPagina');
 
	 -	$('.navbar').cCasalNav('añadirElementoNav', 'nombreElemento', true |false, 'urlPagina', 'posición', 'elemento');

### borrarElementoNav. Borra un elemento del navbar:
-Comprueba que el elemento que lo llama class="elementos-menu", y si es así, lo elimina.
-Sintaxis:
$('elementoABorrar').cCasalNav('borrarElementoNav');

### añadirElementoSubNav. Añade un elemento al submenu de "elementos-menu":
 - Para que esta función funcione, a la hora de añadir el elemento al navbar mediante añadirElementoNav hay que pasarle true como segundo parámetro.
 - Puede recibir 4 parámetros de los cuales solo el primero es obligatorio.
	 1. Determina el nombre del nuevo elemento.
	 2. Enlace al que nos llevará el nuevo elemento, puede ser null: si es así, se creará un enlace automático a partir del id del elemento. O bien puede ser un enlace determinado. Este parámetro debe estar si se quiere hacer uso de los siguientes parámetros.
	 3. Determina la posición del objeto.Debe ser null, before o after:
	 - Si es null (por defecto) inyectará el elemento en la última posición de los hijos de .navbar, en el caso de que no los hubiera, se inyectaría como primer elemento. 
	 - Si es before lo inyectará antes del elemento pasado como último parámetro de la función.
	 - Si es after lo inyectará después del elemento pasado como último parámetro de la función.
	4. Elemento que se usará para colocar el nuevo elemento si se ha pasado el 4º parámetro.
	
 - Sintaxis:
	 -	$('.elementos-menu').cCasalNav('añadirElementoSubNav', 'nombreSubElemento', 'urlPagina');
 
	 -	$('.elementos-menu').cCasalNav('añadirElementoSubNav', 'nombreSubElemento', 'urlPagina', 'posición', 'elemento');


### borrarElementoSubNav. Borra un elemento del submenu:
-Comprueba que el elemento que lo llama tiene el atributo class= "submenu", y si es así, lo elimina.
-Sintaxis:
$('elementoABorrar').cCasalNav('borrarElementoSubNav');

## CSS PARA EL PLUGIN.

Este plugin usa los siguientes id/clases para darle el aspecto al navbar desplegable:
#iniciar.
- Le da el aspecto al  elemento div "iniciar" que sale la primera vez que se abre la página, siempre que se use el "navAnimacion".

#texto-inicio.
- Le da el aspecto al contenido del  elemento div "iniciar".

.navbar
- Clase colocada en el elemento div del menú creado, es decir, atributo colocado en el div que contiene el menú.

.elementos-menu
- Situado en el elemento "li" de cada elemento añadido al navbar.

.submenu
 -	Situado en el elemento "div" de cada sub elemento añadido un elemento con el atributo class="elementos-menu".



