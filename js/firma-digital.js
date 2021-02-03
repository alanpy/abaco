(function ($, window, document, undefined) {
    'use strict';

    const _autocompleteCiudades = ['Juan E. Estigarrbia, Caaguazú', 'Ciudad Del Este, Alto Paraná', 'Domingo Martínez De Irala, Alto Paraná', 'Dr. Juan León Mallorquín, Alto Paraná', 'Hernandarias, Alto Paraná', 'Itaquyry, Alto Paraná', 'Juan E. Oleary, Alto Paraná', 'Los Cedrales, Alto Paraná', 'Mbaracayu, Alto Paraná', 'Minga Guazú, Alto Paraná', 'Minga Pora, Alto Paraná', 'Ñacunday, Alto Paraná', 'Naranjal, Alto Paraná', 'Presidente Franco, Alto Paraná', 'Puerto Bertoni, Alto Paraná', 'San Alberto, Alto Paraná', 'San Cristobal, Alto Paraná', 'Santa Rita, Alto Paraná', 'Santa Rosa Del Monday, Alto Paraná', 'Yguazu, Alto Paraná', 'Asunción, Asunción', 'Aregua, Asunción', 'Capiatá, Asunción', 'Fernando De La Mora, Asunción', 'Guarambare, Asunción', 'Ita, Asunción', 'Itagua, Asunción', 'José Augusto Saldivar, Asunción', 'Lambaré, Asunción', 'Limpio, Asunción', 'Loma Pyta, Asunción', 'Luque, Asunción', 'Mariano Roque Alonso, Asunción', 'Ñemby, Asunción', 'Nueva Italia, Asunción', 'San Antonio, Asunción', 'San Lorenzo, Asunción', 'Villa Elisa, Asunción', 'Villeta, Asunción', 'Ypacarai, Asunción', 'Ypane, Asunción', 'Zeballos Cue, Asunción', 'Belen, Concepción', 'Concepción, Concepción', 'Horqueta, Concepción', 'Loreto, Concepción', 'Paso Barreto, Concepción', 'Paso Mbutu, Concepción', 'Puerto Fonciere, Concepción', 'San Carlos, Concepción', 'San Lazaro, Concepción', 'Vallemi, Concepción', 'Yby ? Yau, Concepción', '25 De Diciembre, San Pedro', 'Antequera, San Pedro', 'Chore, San Pedro', 'Colonia Friesland, San Pedro', 'Colonia Navidad, San Pedro', 'Colonia Volendam, San Pedro', 'General Aquino, San Pedro', 'General Resquin, San Pedro', 'Guayaibi, San Pedro', 'Itacurubi, San Pedro', 'Lima, San Pedro', 'Nueva Germania, San Pedro', 'Puerto Rosario, San Pedro', 'Puerto Ybapobo, San Pedro', 'San Estanislao, San Pedro', 'San José Del Rosario, San Pedro', 'San Pablo, San Pedro', 'San Pedro, San Pedro', 'Tacuati, San Pedro', 'Union, San Pedro', 'Villa Del Rosario, San Pedro', 'Yataity Del Norte, San Pedro', 'Atyra, Cordillera', 'Barrio Estación, Guairá', 'Borja, Guairá', 'Capitán Mauricio José Troche, Guairá', 'Colonia Carlos Pfannl, Guairá', 'Colonia San Roque González, Guairá', 'Coronel Martínez, Guairá', 'Dr. Bottrell, Guairá', 'Felix Perez Cardozo, Guairá', 'General Eugenio A. Garay, Guairá', 'Independencia, Guairá', 'Itape, Guairá', 'Iturbe, Guairá', 'José Fasardi, Guairá', 'Mbocayaty, Guairá', 'Natalicio Talavera, Guairá', 'Ñumi, Guairá', 'Paso Yobay, Guairá', 'Pindoyu, Guairá', 'San Salvador, Guairá', 'Tebicuary, Guairá', 'Villarrica, Guairá', 'Yataity, Guairá', '3 De Febrero, Caaguazú', 'Caaguazú, Caaguazú', 'Carayao, Caaguazú', 'Cecilio Baez, Caaguazú', 'Colonia Genaro Romero, Caaguazú', 'Coronel Oviedo, Caaguazú', 'Dr. Juan Manuel Frutos, Caaguazú', 'José Domingo Ocampos, Caaguazú', 'La Pastora, Caaguazú', 'Mcal. F. Solano Lopez, Caaguazú', 'Nueva Australia, Caaguazú', 'Nueva Londres, Caaguazú', 'R.i. 3 Corrales, Caaguazú', 'Raul A. Oviedo, Caaguazú', 'Repatriación, Caaguazú', 'San Antonio Cordillera, Caaguazú', 'San Joaquin, Caaguazú', 'San José De Los Arroyos, Caaguazú', 'Santa Rosa Del Mbutu, Caaguazú', 'Simon Bolivar, Caaguazú', 'Yhu, Caaguazú', 'Abai, Caazapá', 'Buena Vista, Caazapá', 'Caazapá, Caazapá', 'Col. Mayor Nicolas Arguello, Caazapá', 'Colonia San Cosme, Caazapá', 'Compañía San Francisco, Caazapá', 'Dr. Moises Bertoni, Caazapá', 'Estacion Gral. Patricio Colman, Caazapá', 'Estacion Yuty, Caazapá', 'General Higinio Morinigo, Caazapá', 'Isla Saca, Caazapá', 'Maciel, Caazapá', 'San Juan Nepomuceno, Caazapá', 'Santa Barbara, Caazapá', 'Santa Luisa, Caazapá', 'Santa Rosa De Lima, Caazapá', 'Tabai, Caazapá', 'Yacubo, Caazapá', 'Yegros, Caazapá', 'Yuty, Caazapá', 'Alto Vera, Itapúa', 'Barrio San Roque, Itapúa', 'Bella Vista, Itapúa', 'Cambyreta, Itapúa', 'Capitán Meza, Itapúa', 'Capitán Miranda, Itapúa', 'Carlos Antonio Lopez, Itapúa', 'Carmen Del Paraná, Itapúa', 'Centro De Fronteras, Itapúa', 'Colonia Federico Chavez, Itapúa', 'Colonia Samu-u, Itapúa', 'Colonia Triunfo, Itapúa', 'Coronel Bogado, Itapúa', 'Curuñai, Itapúa', 'Edelira, Itapúa', 'Encarnación, Itapúa', 'Fram, Itapúa', 'General Artigas, Itapúa', 'General Delgado, Itapúa', 'Hohenau, Itapúa', 'Isla Alta, Itapúa', 'Jesus, Itapúa', 'José L. Oviedo, Itapúa', 'La Paz, Itapúa', 'Mayor Julio Otaño, Itapúa', 'Natalio, Itapúa', 'Nueva Alborada, Itapúa', 'Obligado, Itapúa', 'Pirapo, Itapúa', 'San Cosme Y Damian, Itapúa', 'San Dionisio, Itapúa', 'San Juan Del Paraná, Itapúa', 'San Luis Del Paraná, Itapúa', 'San Pedro Del Paraná, Itapúa', 'San Rafael Del Paraná, Itapúa', 'Tomas Romero Pereira, Itapúa', 'Trinidad, Itapúa', 'Yatytay, Itapúa', 'Ayolas, Misiones', 'Colonia Alejo García, Misiones', 'Itayuru, Misiones', 'San Ignacio, Misiones', 'San Miguel, Misiones', 'San Patricio, Misiones', 'San Ramon, Misiones', 'Santa Maria, Misiones', 'Santa Rosa, Misiones', 'Santiago, Misiones', 'Villa Florida, Misiones', 'Yabebyry, Misiones', 'Yacuti, Misiones', 'Acahay, Paraguarí', 'Caapucu, Paraguarí', 'Caballero, Paraguarí', 'Carapegua, Paraguarí', 'Cerro Leon, Paraguarí', 'Colonia G. Cesar Barrientos, Paraguarí', 'Colonia Santa Isabel, Paraguarí', 'Escobar, Paraguarí', 'La Colmena, Paraguarí', 'Mbuyapey, Paraguarí', 'Paraguarí, Paraguarí', 'Pirayu, Paraguarí', 'Quiindy, Paraguarí', 'Quyquyho, Paraguarí', 'San Roque Gonzalez, Paraguarí', 'Sapucai, Paraguarí', 'Tebicuarymi, Paraguarí', 'Valle Apua, Paraguarí', 'Yaguaron, Paraguarí', 'Ybycui, Paraguarí', 'Ybytymi, Paraguarí', 'Alberdi, Ñeembucú', 'Barrio Burrerita, Ñeembucú', 'Barrio Obrero, Ñeembucú', 'Cerrito, Ñeembucú', 'Desmochado, Ñeembucú', 'General José Eduvigis Diaz, Ñeembucú', 'Guazu Cua, Ñeembucú', 'Humaita, Ñeembucú', 'Isla Umbu, Ñeembucú', 'Laureles, Ñeembucú', 'Mayor José De J. Martinez, Ñeembucú', 'Paso De Patria, Ñeembucú', 'Pilar, Ñeembucú', 'San Juan B. De Ñeembucu, Ñeembucú', 'Tacuaras, Ñeembucú', 'Villa Franca, Ñeembucú', 'Villa Oliva, Ñeembucú', 'Villalbin, Ñeembucú', 'Bella Vista, Amambay', 'Capitán Bado, Amambay', 'Pedro Juan Caballero, Amambay', 'Colonia Anahi, Canindeyú', 'Indefinida, Indefinido', 'Corpus Christi, Canindeyú', 'Curuguaty, Canindeyú', 'General Francisco Alvarez, Canindeyú', 'Itarara, Canindeyú', 'La Paloma, Canindeyú', 'Nueva Esperanza, Canindeyú', 'Salto Del Guaira, Canindeyú', 'Ygatimi, Canindeyú', 'Ypejhu, Canindeyú', 'Benjamín Aceval, Presidente Hayes', 'Chaco-i, Presidente Hayes', 'Colonia Falcon, Presidente Hayes', 'Dr. Francia (Beteretecue), Presidente Hayes', 'Fortín Esteban Martínez, Presidente Hayes', 'Fortín General Bruguez, Presidente Hayes', 'Fortín General Caballero, Presidente Hayes', 'Nanawa, Presidente Hayes', 'Pozo Colorado, Presidente Hayes', 'Puerto Pinasco, Presidente Hayes', 'Villa Hayes, Presidente Hayes', 'Bahia Negra, Alto Paraguay', 'Fuerte Olimpo, Alto Paraguay', 'Isla Margarita, Alto Paraguay', 'La Victoria, Alto Paraguay', 'Lagerenza, Alto Paraguay', 'Puerto Guarani, Alto Paraguay', 'Puerto La Esperanza, Alto Paraguay', 'Capitán Joel Estigarribia, Boquerón', 'Colonia Neuland, Boquerón', 'Dr. Pedro P. Peña, Boquerón', 'Filadelfia, Boquerón', 'General Eugenio A. Garay, Boquerón', 'Loma Plata, Boquerón', 'Mariscal Estigarribia, Boquerón', 'Teniente 1ro. Irala Fernandez, Boquerón', 'Raul Pena, Alto Paraná', 'Iruna, Alto Paraná', 'Tavapy, Alto Paraná', 'Katuete, Canindeyú', 'Maria Auxiliadora, Itapúa', 'San Juan Bautista, Misiones', 'Altos, Cordillera', '1° De Marzo, Cordillera', 'Alfonso Tranquera, Cordillera', 'Arroyos Y Esteros, Cordillera', 'Caacupé, Cordillera', 'Caraguatay, Cordillera', 'Col. G. Bernardino Caballero, Cordillera', 'Compañía San Antonio, Cordillera', 'Emboscada, Cordillera', 'Eusebio Ayala, Cordillera', 'Isla Pucu, Cordillera', 'Itacurubi De La Cordillera, Cordillera', 'Itapiru, Cordillera', 'Juan De Mena, Cordillera', 'Loma Grande, Cordillera', 'Mbocayaty Del Yhaguy, Cordillera', 'Nueva Colombia, Cordillera', 'Piribebuy, Cordillera', 'San Bernardino, Cordillera', 'San José Obrero, Cordillera', 'Santa Elena, Cordillera', 'Tobati, Cordillera', 'Valenzuela, Cordillera', 'Yaguarete Cua, Cordillera'];

    let tabs = [];
    let current = 0;
    let max = 0;
    let form_validators = [];
    let tipo_certificado = null;
    let form_data = {};
    let block_buttons = false;

    function updateNavigation() {
        current = 0;
        max = tabs.length - 1;
    }

    function isValid() {

        if (form_validators[current]) {
            return form_validators[current]();
        }

        return true;
    }

    function next(no_validate) {

        if (block_buttons) {
            return;
        }

        if (no_validate !== true && !isValid()) {
            return;
        }

        if (current < max) {
            current++;
            $(tabs[current]).trigger('click');
        }
    }

    function prev() {
        if (block_buttons) {
            return;
        }

        if (current > 0) {
            current--;
            $(tabs[current]).trigger('click');
        }
    }

    function allow_continue() {
        return true;
    }

    // datos del solicitante
    function persona_fisica_validator() {
        if ($('#wf-form-Form-Persona-Fisica').validate().form()) {
            form_data = {};
            form_data['ci'] = $('#ci').val();
            form_data['nombres'] = $('#nombres').val();
            form_data['apellidos'] = $('#apellidos').val();
            form_data['fecha-de-nacimiento'] = $('#fecha-de-nacimiento').val();
            form_data['telefono'] = $('#telefono').val();
            form_data['email'] = $('#email').val().toUpperCase();
            form_data['direccion'] = $('#direccion').val();
            form_data['razon-social'] = '';
            form_data['ruc'] = '';
            form_data['cargo'] = '';
            form_data['area'] = '';
            form_data['titulo'] = '';

            $('#columnas-data-ci .value-confirmation-certificado').text(form_data.ci);
            $('#columnas-data-nombres .value-confirmation-certificado').text(form_data.nombres);
            $('#columnas-data-apellidos .value-confirmation-certificado').text(form_data.apellidos);
            $('#columnas-data-fecha-nacimiento .value-confirmation-certificado').text(form_data['fecha-de-nacimiento']);
            $('#columnas-data-telefono .value-confirmation-certificado').text(form_data.telefono);
            $('#columnas-data-email .value-confirmation-certificado').text(form_data.email);
            $('#columnas-data-direccion .value-confirmation-certificado').text(form_data.direccion);

            // scroll to wz top
            let _view = tipo_certificado == 'Persona Física' ? '#wz-confirmacion-title' : '#wz-persona-juridica-title';
            c_scrollTo(_view, 500);

            return true;
        }

        return false;
    }

    // datos laborales
    function datos_laborales_validator() {

        if ($('#wf-form-Form-Persona-Juridica').validate().form()) {

            form_data['razon-social'] = $('#razon-social').val();
            form_data['ruc'] = $('#ruc').val();
            form_data['cargo'] = $('#cargo').val();
            form_data['area'] = $('#area').val();
            form_data['titulo'] = $('#titulo').val();

            $('#columnas-data-ruc .value-confirmation-certificado').text(form_data.ruc);
            $('#columnas-data-razon-social .value-confirmation-certificado').text(form_data['razon-social']);
            $('#columnas-data-cargo .value-confirmation-certificado').text(form_data.cargo);
            $('#columnas-data-area .value-confirmation-certificado').text(form_data.area);
            $('#columnas-data-titulo .value-confirmation-certificado').text(form_data.titulo);

            // scroll to wz top in 0.5s
            c_scrollTo('#wz-confirmacion-title', 500);

            return true;
        }

        return false;
    }

    // persona jurídica 
    function persona_juridica_validator() {
        if ($('#wf-form-Form-Persona-Juridica').validate().form()) {

            form_data['razon-social'] = $('#razon-social').val();
            form_data['ruc'] = $('#ruc').val();
            form_data['cargo'] = '';
            form_data['area'] = '';
            form_data['titulo'] = '';

            $('#columnas-data-ruc .value-confirmation-certificado').text(form_data.ruc);
            $('#columnas-data-razon-social .value-confirmation-certificado').text(form_data['razon-social']);
            $('#columnas-data-cargo .value-confirmation-certificado').text(form_data.cargo);
            $('#columnas-data-area .value-confirmation-certificado').text(form_data.area);
            $('#columnas-data-titulo .value-confirmation-certificado').text(form_data.titulo);

            // scroll to wz top in 0.5s
            c_scrollTo('#wz-confirmacion-title', 500);

            return true;
        }

        return false;
    }

    function send_data() {

        // show loading
        block_buttons = true;
        $('#confirmation-tab .btn-avanzar')
            .text('Enviando...')
            .addClass('btn-avanzar-wait');

        $('#confirmation-tab .btn-volver')
            .addClass('btn-volver-wait');

        $('#confirmation-tab .loader-indicator')
            .removeClass('hide-loading');

        $('#certificado-submit-error').hide();

        // submit
        envia_formulario_mautic();

        return false;
    }

    function envia_formulario_mautic() {

        if (typeof window.MauticFormCallback == 'undefined') {
            window.MauticFormCallback = {};
        }

        window.MauticFormCallback['formulariofirmadigital'] = {
            onResponse: function (response) {

                block_buttons = false;
                $('#confirmation-tab .btn-avanzar')
                    .text('Confirmar')
                    .removeClass('btn-avanzar-wait');

                $('#confirmation-tab .btn-volver')
                    .removeClass('btn-volver-wait');

                $('#confirmation-tab .loader-indicator')
                    .addClass('hide-loading');

                if (response && response.success) {
                    $('#certificado-submit-error').hide();
                    next(true);
                } else {
                    $('#certificado-submit-error').show();
                }

            }
        };

        // fill data and send
        $('#mauticform_input_formulariofirmadigital_necesidadsolucion').val(tipo_certificado);
        $('#mauticform_input_formulariofirmadigital_cedula_de_identidad1').val(form_data['ci']);
        $('#mauticform_input_formulariofirmadigital_nombre_y_apellido').val(form_data['nombres']);
        $('#mauticform_input_formulariofirmadigital_apellidos').val(form_data['apellidos']);
        $('#mauticform_input_formulariofirmadigital_fecha_de_nacimiento').val(form_data['fecha-de-nacimiento']);
        $('#mauticform_input_formulariofirmadigital_telefono').val(form_data['telefono']);
        $('#mauticform_input_formulariofirmadigital_correo_electronico').val(form_data['email']);
        $('#mauticform_input_formulariofirmadigital_direccion').val(form_data['direccion']);
        $('#mauticform_input_formulariofirmadigital_razon_social').val(form_data['razon-social']);
        $('#mauticform_input_formulariofirmadigital_ruc').val(form_data['ruc']);
        $('#mauticform_input_formulariofirmadigital_cargo').val(form_data['cargo']);
        $('#mauticform_input_formulariofirmadigital_area__departamento_de_la').val(form_data['area']);
        $('#mauticform_input_formulariofirmadigital_titulo').val(form_data['titulo']);
        document.getElementById('mauticform_formulariofirmadigital').submit();

    }


    // scroll into view helper function
    function c_scrollTo(jQselector, delay) {
        const $el = $(jQselector);

        if ($el.lenght === 0) {
            return;
        }

        let nDelay = parseInt(delay, 10);
        nDelay = isNaN(nDelay) ? 0 : nDelay;

        // try use of native scrollIntoView function, fallback jquery
        const elDOM = $el[0];
        if (elDOM.scrollIntoView) {

            setTimeout(function () {
                elDOM.scrollIntoView({ behavior: "smooth" });
            }, delay);

        } else {
            $('html, body').delay(nDelay).animate({
                scrollTop: $el.offset().top
            }, 500);
        }
    }

    function resetWzForms() {

        $('#wf-form-Form-Persona-Fisica').trigger('reset').validate().resetForm();
        $('#wf-form-Form-Persona-Juridica').trigger('reset').validate().resetForm();

        // FIX: remove remaining classes
        $('#wf-form-Form-Persona-Fisica input.error').removeClass('error');
        $('#wf-form-Form-Persona-Juridica input.error').removeClass('error');
    }

    // persona fisica helper
    function preparePFWizzard() {

        const data = {
            tabs: ['#tab-tipo-certificado', '#tab-solicitante', '#tab-confirmacion', '#tab-gracias'],
            tipo: 'Persona Física'
        }

        $('#columna-datos-empresa').hide();

        // update number of steps
        $('.qty-pasos, #confirmacion-paso-number').text('2');

        // wizzard title
        $('.tipo-certificado-label').text(data.title);

        resetWzForms();
        c_scrollTo('#wz-persona-fisica-title', 500);

        return data;
    }

    // sanitize an clean input value
    function cleanAndReturnInputValue(el) {

        const $el = $(el);
        const inputVal = $el.val();
        const trimmedValue = typeof inputVal == 'string' ? inputVal.trim() : '';

        if (inputVal != trimmedValue) {
            $el.val(trimmedValue);
        }

        return trimmedValue;
    }

    // on load
    $(function () {

        $('#fecha-de-nacimiento').attr('type', 'date');

        $.extend($.validator.messages, {
            required: 'Campo obligatorio.',
            email: 'Por favor, introduce una dirección de email válida.'
        });

        $('#btn-persona-fisica-2').on('click', function () {

            const wzData = preparePFWizzard();

            tipo_certificado = wzData.tipo;
            tabs = wzData.tabs;

            form_validators = [allow_continue, persona_fisica_validator, send_data];
            updateNavigation();

            next();
        });

        $('#btn-persona-fisica-datos-laborales-2').on('click', function () {
            tipo_certificado = 'Persona Física con Datos Laborales';

            $('.qty-pasos, #confirmacion-paso-number').text('3');

            tabs = ['#tab-tipo-certificado', '#tab-solicitante', '#tab-entidad-juridica', '#tab-confirmacion', '#tab-gracias'];
            form_validators = [allow_continue, persona_fisica_validator, datos_laborales_validator, send_data];
            updateNavigation();

            $('.tipo-certificado-label, #label-confirmacion-title-empresa').text(tipo_certificado);

            $('#columna-datos-empresa, #row-form-cargo, #row-form-area, #row-form-titulo, #columnas-data-cargo, #columnas-data-area, #columnas-data-titulo').show();

            resetWzForms();
            c_scrollTo('#wz-persona-fisica-title', 500);

            next();
        });

        $('#btn-persona-juridica-2').on('click', function () {
            tipo_certificado = 'Persona Jurídica';

            $('.qty-pasos, #confirmacion-paso-number').text('3');

            tabs = ['#tab-tipo-certificado', '#tab-solicitante', '#tab-entidad-juridica', '#tab-confirmacion', '#tab-gracias'];
            form_validators = [allow_continue, persona_fisica_validator, persona_juridica_validator, send_data];
            updateNavigation();

            $('.tipo-certificado-label, #label-confirmacion-title-empresa').text(tipo_certificado);

            // form settings
            $('#row-form-cargo, #row-form-area, #row-form-titulo, #columnas-data-cargo, #columnas-data-area, #columnas-data-titulo').hide();
            $('#columna-datos-empresa').show();

            resetWzForms();
            c_scrollTo('#wz-persona-fisica-title', 500);

            next();
        });

        $('.btn-avanzar').on('click', function () {
            next();
        });

        $('.btn-volver').on('click', function () {
            prev();
        });

        $("input").inputmask({ casing: "upper" });

        // busca ci
        $('#ci').on('change', function (e) {

            const ci = cleanAndReturnInputValue(this);

            // search and update
            $('#nombres, #apellidos').attr('disabled', 'disabled');

            $.getJSON('https://www.ruc.com.py/v2/getci/' + encodeURIComponent(ci))
                .done(function (data) {
                    if (data && data.result) {
                        $('#nombres').val(data.nombres);
                        $('#apellidos').val(data.apellidos);
                    }
                })
                .always(function () {
                    $('#nombres, #apellidos').removeAttr('disabled');
                })

        });

        // busca ruc
        $('#ruc').on('change', function (e) {

            // sanitize an clean input data
            const ruc = cleanAndReturnInputValue(this);

            // search and update
            $('#razon-social').attr('disabled', 'disabled');

            $.getJSON('https://www.ruc.com.py/v2/get/' + encodeURIComponent(ruc))
                .done(function (data) {
                    if (data && data.result) {
                        $('#razon-social').val(data.razon_social);
                    }
                })
                .always(function () {
                    $('#razon-social').removeAttr('disabled');
                })

        });

        // busca ciudades
        $("#direccion").autocomplete({
            source: _autocompleteCiudades,
            minLength: 1,
            open: function (e, ui) {
                var acData = $(this).data('ui-autocomplete');
                acData
                    .menu
                    .element
                    .find('.ui-menu-item-wrapper')
                    .each(function () {
                        var me = $(this);
                        var keywords = acData.term.split(' ').join('|');
                        me.html(me.text().replace(new RegExp("(" + keywords + ")", "gi"), '<b>$1</b>'));
                    });
            }
        });
    });


})(jQuery, window, document);