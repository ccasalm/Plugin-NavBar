$(function() {

    //CREANDO NAVBARS.
    if (!getCookie('nuevo')) {

        $('#container').cCasalNav('navAnimacion', 'menu1');
        $('#container2').cCasalNav('navAnimacion', 'menu2');

        setCookie('nuevo', 0);
    } else {
        $('#container').cCasalNav('navSimple', 'menu1')
        $('#container2').cCasalNav('navSimple', 'menu2')
    }
    //-------------------------------------------------------//


    //AÑADIENDO ELEMENTOS A MENU1.
    $('#menu1').cCasalNav('añadirElementoNav', 'home', false, 'index.html');
    $('#menu1').cCasalNav('añadirElementoNav', 'conocenos', true,);
    $('#menu1').cCasalNav('añadirElementoNav', 'contacto', true, 'null', 'after', 'conocenos');

    //-------------------------------------------------------//

    //BORRANDO UN ELEMENTO DEL MENÚ.
    //$('#conocenos').cCasalNav('borrarElementoNav');
    //-------------------------------------------------------//




    //AÑADIENDO ELEMENTOS A MENU2.
    $('#menu2').cCasalNav('añadirElementoNav', 'home2', false, 'index.html');
    $('#menu2').cCasalNav('añadirElementoNav', 'conocenos2', true,);
    $('#menu2').cCasalNav('añadirElementoNav', 'contacto2', true, 'null', 'after', 'conocenos2');
    //-------------------------------------------------------//



    //AÑADIENDO SUBELEMENTOS A ELEMENTOS.
    $('#conocenos').cCasalNav('añadirElementoSubNav', 'luis');
    $('#conocenos').cCasalNav('añadirElementoSubNav', 'pepe', 'null');
    $('#conocenos').cCasalNav('añadirElementoSubNav', 'carlos', 'null');


    $('#conocenos2').cCasalNav('añadirElementoSubNav', 'luis2', 'null');
    $('#conocenos2').cCasalNav('añadirElementoSubNav', 'pepe2', 'null');
    $('#conocenos2').cCasalNav('añadirElementoSubNav', 'carlo2s', 'null');
    //-------------------------------------------------------//

    //BORRANDO UN SUBELEMENTO DEL MENÚ.
    //$('#pepe2').cCasalNav('borrarElementoSubNav');
    //-------------------------------------------------------//



    //FUNCIONES NECESARIAS
    function getCookie(name) {
        var cname = name + '=';
        var dc = document.cookie;
        if (dc.length > 0) {
            begin = dc.indexOf(cname);
            if (begin != -1) {
                begin += cname.length;
                end = dc.indexOf(';', begin);
                if (end == -1) end = dc.length;
                return decodeURIComponent(dc.substring(begin, end));
            }
        }
        return null;
    }


    function setCookie(name, value, expires, path, domain, secure) {
        document.cookie =
            name +
            '=' +
            encodeURIComponent(value) +
            (expires == null ? '' : '; expires=' + expires.toGMTString()) +
            (path == null ? '' : '; path=' + path) +
            (path == null ? '' : '; path=' + path) +
            (domain == null ? '' : '; domain=' + domain) +
            (secure == null ? '' : '; secure');
    }


});