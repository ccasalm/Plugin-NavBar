(function($) {

    //MÉTODOS PARA EL PLUGIN.

    var methods = {
        // CREA/BORRA NAV CON ANIMACIÓN
        navAnimacion: function(nombreNavBar) {
            //Comrprueba si ya existe un elemento #iniciar, para asi evitar que se repita.
            if ($("#iniciar").length) {
                $('#iniciar').remove();
            }

            $('body').append('<div id="iniciar"></div>');
            $('#iniciar').append('<div id="texto-inicio">START</div>');
            var nombreNavBar = nombreNavBar.toLowerCase().replace(" ", "-");
            $(this).prepend(`<div id="${nombreNavBar}" class="navbar"><ul></ul></div>`);

            //Oculta la navbar.
            $('.navbar').hide();

            //Hace que el div start parpadee.
            for (let index = 1; index < 3; index++) {
                $("#iniciar").animate({
                    opacity: '1',
                }, 'fast');
                $("#iniciar").animate({
                    opacity: '0.5',
                }, 'fast');
                $("#iniciar").animate({
                    opacity: '0',
                }, 'fast');
                $("#iniciar").animate({
                    opacity: '0.5',
                }, 'fast');
                $("#iniciar").animate({
                    opacity: '1',
                }, 'fast');
            }
            //Oculta la animación start y muestra la navbar deslizandola hacia abajo.
            $("#iniciar").slideUp('low', function() {
                $(".navbar").slideDown('low')
            });

        },

        //----------------------------------------------------------------------------------//

        // CREA/BORRA NAV SIN ANIMACIÓN
        navSimple: function(nombreNavBar) {
            var nombreNavBar = nombreNavBar.toLowerCase().replace(" ", "-");
            $(this).prepend(`<div id="${nombreNavBar}" class="navbar"><ul></ul></div>`);
        },

        borrarNav: function() {
            if ($(this).length) {
                if ($(this).attr('class') == 'navbar') {
                    $(this).remove();
                } else {
                    console.log('El elemento <<' + this.attr('id') + '>> no es un menú');
                }
            } else {
                console.log('Has intentado borrar <<borrarNav>> un elemento que no existe.');
            }

        },

        //----------------------------------------------------------------------------------//

        //AÑADIR/BORRAR ELEMENTO NAV.

        añadirElementoNav: function(nombreElemento, hijos = false, urlPagina, posicion = 'null', elemento) {

            if (!$('#' + nombreElemento).length) {
                
                var nombreElementoMayus = nombreElemento.toUpperCase();
                var nombreElementoMinus = nombreElemento.toLowerCase().replace(" ", "-");

                if ((urlPagina == 'null') || (urlPagina == undefined)) {
                    var urlPagina = (nombreElemento.replace(" ", "-") + '.html').toLowerCase();
                } else {
                    var urlPagina = urlPagina;
                }

                if ($(this).attr('class') == 'navbar') {
                    if ((posicion == 'null')) {
                        $('#' + $(this).attr('id')+'>ul').append(`<li id="${nombreElementoMinus}" class="elementos-menu"><a href="${urlPagina}">${nombreElementoMayus}</a></li>`);   
                    }else if (posicion == 'before' || posicion == 'after'){
                        if (!(elemento == 'undefined')) {
                            if (!elemento == '') {
                                if (($('#' + elemento).length)) {
                                    if ($('#' + elemento).attr('class') == 'elementos-menu') {
                                        if (posicion == 'before'){
                                            $('#' + elemento).before(`<li id="${nombreElementoMinus}" class="elementos-menu"><a href="${urlPagina}">${nombreElementoMayus}</a></li>`);
                                        }
                                        if (posicion == 'after'){
                                            $('#' + elemento).after(`<li id="${nombreElementoMinus}" class="elementos-menu"><a href="${urlPagina}">${nombreElementoMayus}</a></li>`);
                                        }
                                    }
                                }else{
                                    console.log('El elemento pasado como 5º parámetro: <<' + elemento + '>>, no existe');
                                }
                            }else{
                                console.log('El parámetro elemento no puede ser cadena vacia');
                            }
                        }else{
                            console.log('Debes pasar un elemento como 5º parámetro');
                        } 
                    }else{
                        console.log('Debes pasar un elemento como 3º parámetro null, before o after');
                    }
                    if (!hijos == false) {
                        $('#' + nombreElementoMinus ).append(`<ul><div class="submenu"></div></ul>`);  
                    }
                }else{
                    console.log('#' + nombreElemento + ' Deber tener al atributo class : navbar');
                }
            }else{
                console.log('#' + nombreElemento + ' ya existe');
            }
        },

        //-------------------------------------------------------------


        borrarElementoNav: function() {
            if ($(this).length) {
                if ($(this).attr('class') == 'elementos-menu') {
                    $(this).remove();
                } else {
                    console.log('El elemento <<' + this.attr('id') + '>> no es un elemento de class: elementos-menu');
                }
            } else {
                console.log('Has intentado borrar con un elemento que no existe.');
            }
        },

        //----------------------------------------------------------------------------------//

        //AÑADIR/BORRAR ELEMENTO SUBNAV.
        añadirElementoSubNav: function(nombreSubElemento, urlPagina, posicion = 'null', elemento) {

            if (!$('#' + nombreSubElemento).length) {
                
                var nombreElementoMayus = nombreSubElemento.toUpperCase();
                var nombreElementoMinus = nombreSubElemento.toLowerCase().replace(" ", "-");

                if ((urlPagina == 'null') || (urlPagina == undefined)) {
                    var urlPagina = (nombreSubElemento.replace(" ", "-") + '.html').toLowerCase();
                } else {
                    var urlPagina = urlPagina;
                }

                if ($(this).attr('class') == 'elementos-menu') {
                    if ((posicion == 'null')) {
                        $('#' + $(this).attr('id')+'>ul>div').append(`<li id="${nombreElementoMinus}" "><a href="${urlPagina}">${nombreElementoMayus}</a></li>`);   
                    }else if (posicion == 'before' || posicion == 'after'){
                        if (!(elemento == 'undefined')) {
                            if (!elemento == '') {
                                if (($('#' + elemento).length)) {
                                    if ($('#' + elemento).attr('class') == 'submenu') {
                                        if (posicion == 'before'){
                                            $('#' + elemento).before(`<li id="${nombreElementoMinus}" "><a href="${urlPagina}">${nombreElementoMayus}</a></li>`);
                                        }
                                        if (posicion == 'after'){
                                            $('#' + elemento).after(`<li id="${nombreElementoMinus}" "><a href="${urlPagina}">${nombreElementoMayus}</a></li>`);
                                        }
                                    }
                                }else{
                                    console.log('El elemento pasado como 5º parámetro: <<' + elemento + '>>, no existe');
                                }
                            }else{
                                console.log('El parámetro elemento no puede ser cadena vacia');
                            }
                        }else{
                            console.log('Debes pasar un elemento como 5º parámetro');
                        } 
                    }else{
                        console.log('Debes pasar un elemento como 3º parámetro null, before o after');
                    }
                }else{
                    console.log('#' + nombreSubElemento + ' Deber tener al atributo class : navbar');
                }
            }else{
                console.log('#' + nombreSubElemento + ' ya existe');
            }
        },

        borrarElementoSubNav: function() {
            if ($(this).length) {
                if ($(this).attr('class') == 'submenu') {
                    $(this).remove();
                } else {
                    console.log('El elemento <<' + this.attr('id') + '>> no es un elemento de class: submenu');
                }
            } else {
                console.log('Has intentado borrar con <<borrarElementoNavInicio>> un elemento que no existe.');
            }
        },
    };
    //----------------------------------------------------------------------------------//

    //PLUGIN
    $.fn.cCasalNav = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            //Si no se pasa ningún parámetro o el parámetro es
            //un objeto de configuración llamamos al inicializador
            return methods.init.apply(this, arguments);
        } else {
            //En el resto de los casos mostramos un error
            console.log('La función ' + method + ' no existe en jQuery.cCasalNav');
        }
    };

}(jQuery));