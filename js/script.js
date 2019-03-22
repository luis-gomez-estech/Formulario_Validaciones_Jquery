  
   //DATAPICKER
    
    $(function(){
      $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy"
      });
    });

  /* Barra progreso */

    $( function() {
      $( "#progressbar" ).progressbar({
        value: 37
      });
    });

  /* Acordeon */


    $( function() {
      $( "#accordion" ).accordion();
    });

  /* Slider */

    $( function() {
      $( "#slider" ).slider();
    });


function validarFormulario(){  

    $("#formulario-contacto").validate({

      rules: {
        usuario: {
          required: true,
          rangelength: [5,12]

        },
        password: {
          required: true,
          rangelength: [7,12]

        },
        nombre: {
          required: true,
          lettersonly: true

        },
        email: {
          required: true,
          email: true

        },
        cp: {
          required: true,
          number:  true                       

        },
        selector: {
          required: true,


        },
        textarea: {
          maxlength:240,


        }
      },

      messages: {
        usuario: {
          required: "Debes rellenar este campo",
          rangelength: $.format("Debes introducir entre 5 y 12 caracteres")

        },
        password: {
          required: "Debes rellenar este campo",
          rangelength: $.format("Debes introducir entre 7 y 12 caracteres")

        },
        nombre: {
          required: "Debes rellenar este campo",
          lettersonly: "Debes ingresar solo letras"

        },
        email: {
          required: "Debes rellenar este campo",
          email: "Debes ingresar un email válido"

        },
        cp: {
          required: "Debes rellenar este campo",
          number: "Debes ingresar solo números"                        

        },
        selector: {
          required:  "Debes seleccionar una opcion",  


        },
        textarea: {
          maxlength: "Has excedido el númer de caracteres",


        }


      },

          // Aqui valido a entrar al campo   
          highlight: function(element,input) {

            $(element).addClass('campoError');
            $(element).removeClass('campoValidado');
          },
          // Aqui valido al salir del campo
          unhighlight: function(element) {

            $(element).removeClass('campoError');
            $(element).addClass('campoValidado');
          },
          /*
          errorPlacement: function(error, element) {
              if(element.parent('.input-group').length) {
                  error.insertAfter(element.parent());
              } else {
                  error.insertAfter(element);
              }
          }
          */
        });



}

    //Contador para el textArea
    
    function contador(){
      
      $('textarea').keyup(function() {

        var length = $("#textarea").val().length; // Guardo el numero de los caracteres introducidos      

        $('#digitosIntroducidos').text(length); // Aqui va a ir añadiendo el numero de caracteres introducidos

        // Si hay mas de 240 caracteres, el contador se pone de color rojo y el input tambien, sino permaneceran verdes
        if (length<=240){
          $("#digitosIntroducidos").css("color", "#2ec120");
          $("#textarea").addClass('campoValidado');

            //$("#textarea").addClass('campoError');

          } else if (length>240){
            $("#digitosIntroducidos").css("color", "#ff0036");
            $("#textarea").removeClass('campoValidado');
            $("#textarea").addClass('campoError');

           // $("#textarea").removeClass('campoValidado');

         } else {
          $("#digitosIntroducidos").css("color", "#ff0036");
          $("#textarea").removeClass('campoValidado');            
          $("#textarea").addClass('campo');
            //$("#textarea").addClass('campoError');

          }     

        }); 
      

    }

    // Validar Sexo
    function validarSexo(){

      if ($('input[id="sexo"]').is(':checked')) {
        $("#campo_error_sexo").text("");

      } else {
        $("#campo_error_sexo").text("Debes checkear al menos una opción"); 
        $("#campo_error_sexo").addClass('error'); 
      }

    }  


    // Validar Idioma
    function validarIdioma(){


      if ($('input[id="checkBox1"]').is(':checked') || $('input[id="checkBox2"]').is(':checked')) {
        $("#campo_error_idioma").text("");

          
     
     } else {
      $("#campo_error_idioma").text("Debes checkear al menos una opción");
       $("#campo_error_idioma").addClass('error');   
    }
  }

    //Con un toggle abrimos mas opcones cuando pinchamos en el boton
    
    $(document).ready(function(){
      $("#botonMasOpciones").click('slow',function(){
        $(".masOpciones").toggle("slow" );
      });
    });
   

    //Limpiamos el form al cargar la pagina
    function limpiar(){

      $('#formulario-contacto')[0].reset();
    
    }


/*
    // Validar Idioma
    function validarIdioma(){

      var isChecked = document.getElementById('checkBox1').checked;
      var isChecked2 = document.getElementById('checkBox2').checked;
      
      if(!isChecked&&!isChecked2){
       $("#campo_error_idioma").text("Debes checkear al menos una opción");
       $("#campo_error_idioma").addClass('error');   
     } else {
      $("#campo_error_idioma").text("");
    }
  }

*/







  


    // DESDE AQUI HACIA ABAJO, PARA EL CAMPO USUARIO ESTA HECHO CON JQUERY  
/*
   //Limpiamos el form al cargar la pagina
    function limpiar(){

      $('#formulario-contacto')[0].reset();
    
    }


    function masOpciones(){
    
      $(document).ready(function(){
        $("#botonMasOpciones").click(function(){
          $(".masOpciones_oculto").toggleClass("masOpciones_oculto_activado");
        });
      });

     
    }



function validar(){ 

    $("#usuario").blur(function() {
    
  
        // Si no hse ha escrito nada o se han introducidoe spacios en blanco
        if (usuario==0||$('#usuario').val().trim() === '') {     
        
        $("#campo_error_usuario").show("slow"); // He metido efecto para que noa parezca instantaneo sino con unas milesimas de retardo
        $("#campo_error_usuario").text(texto_error()); // Muesta un texto pero lo hace llamando a un metodo comun que le añade el texto, Debe rellenar este campo...
        $("#campo_error_usuario").css("color", "#ff0036");
        $("#usuario").css('border', '2px solid #ff0036');

      }                  

      else if (usuario<5||usuario>12) {     
        
        $("#campo_error_usuario").show("slow"); // He metido efecto para que noa parezca instantaneo sino con unas milesimas de retardo
        $("#campo_error_usuario").text('Introduzca entre 5 y 12 caracteres'); // Muesta un texto pero lo hace llamando a un metodo comun que le añade el texto, Debe rellenar este campo...
        $("#campo_error_usuario").css("color", "#ff0036");
        $("#usuario").css('border', '2px solid #ff0036');
       
      }  else {

       $("#campo_error_usuario").show("slow"); 
        $("#campo_error_usuario").text(validado()); // Muesta un texto pero lo hace llamando a un metodo comun que le añade el texto, Debe rellenar este campo...
        $("#campo_error_usuario").css("color", "#4a971e");
        $("#campo_error_usuario").fadeOut(5000);
        $("#usuario").css('border', '2px solid #4a971e');

      }
  });

}


// DESDE AQUI HACIA ABAJO, SIN  LIBRERIA JQUERY

*/



/*
  // Valido el Usuario
    function validarUsuario(){

      var compruebaUsuario = document.getElementById("usuario").value;

      if (compruebaUsuario==''|| /^\s+$/.test(compruebaUsuario)){

          //document.getElementById('usuario').value = texto_error();

          document.getElementById('campo_error_usuario').innerHTML = texto_error();
          document.getElementById('usuario').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('usuario').classList.add('campo_marca_error');  //Añade la class marca errores
           document.getElementById('campo_error_usuario').style.color="red";    

          //  document.getElementById("usuario").style.color = "red";

      } else if (compruebaUsuario.length<5||compruebaUsuario.length > 12) {

          document.getElementById('campo_error_usuario').innerHTML = "Debes introducir entre 5 y 12 caracteres";
          document.getElementById('usuario').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('usuario').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_usuario').style.color="red";

      } else  {

        
          //document.getElementById('campo_error_usuario').innerHTML = "";
          document.getElementById('usuario').classList.add('campo_validado'); // Añade la class
          document.getElementById('campo_error_usuario').innerHTML ="Usuario válido";
          document.getElementById('campo_error_usuario').style.color="green";
          
      
        }
    }

    // Valido la contraseña
    function validarPassword(){

      var compruebaPassword = document.getElementById("password").value;

      if (compruebaPassword==''|| /^\s+$/.test(compruebaPassword)){

          document.getElementById('campo_error_password').innerHTML = texto_error();
          document.getElementById('password').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('password').classList.add('campo_marca_error'); //Añade la class marca errores  
          document.getElementById('campo_error_password').style.color="red";      
    
      } else if (compruebaPassword.length<7||compruebaPassword.length > 12) {

          document.getElementById('campo_error_password').innerHTML = "Debes introducir entre 7 y 12 caracteres";
          document.getElementById('password').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('password').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_password').style.color="red";


      } else {
          //document.getElementById('campo_error_password').innerHTML = "";
          document.getElementById('password').classList.add('campo_validado');
          document.getElementById('campo_error_password').innerHTML ="Password válida";
          document.getElementById('campo_error_password').style.color="green";
      }

    }


    // Valido nombre

    //Aqui he usado una funcion que no conocia, pero se me ocurrio de como hacerlo para impedir o no dejar escribir si detecta que es un numero
    // y di con este metodo, y me parecio muy util y por eso lo he usado, lo vi como algo estandar y usable, y lo que siempre comentas ya inventado y
    // y que esta muy completo
    function soloLetras(e){

      var key = window.event ? e.which : e.keyCode;

         key = e.keyCode || e.which;
         tecla = String.fromCharCode(key).toLowerCase();
         letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
         especiales = "8-37-39-46";

         tecla_especial = false
         for(var i in especiales){
              if(key == especiales[i]){
                  tecla_especial = true;
                  break;
              }
          }
          if(letras.indexOf(tecla)==-1 && !tecla_especial){
      
      return false;
      ValidarNombre();
      }
    }

    // y aqui valido si esta vacio
    function validarNombre(){

      var compruebaNombre = document.getElementById("nombre").value;    

      if (compruebaNombre==''|| /^\s+$/.test(compruebaNombre)){

          document.getElementById('campo_error_nombre').innerHTML = texto_error();        
          document.getElementById('nombre').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('nombre').classList.add('campo_marca_error'); // Añade la class 

          document.getElementById('campo_error_nombre').style.color="red";
    
      } else {
          //document.getElementById('campo_error_nombre').innerHTML = "";
          document.getElementById('nombre').classList.add('campo_validado');
          document.getElementById('campo_error_nombre').innerHTML ="Nombre válido";
          document.getElementById('campo_error_nombre').style.color="green";
      }
    }

    // Valido CP
    function validarPais(){

        var compruebaLista = document.getElementById('selector').selectedIndex;

           //Test comboBox
        if(compruebaLista == null || compruebaLista == 0){
          
          document.getElementById('campo_error_pais').innerHTML = texto_error();
          document.getElementById('selector').classList.remove('campo_validado'); // Elimina la class marca_errores
          document.getElementById('selector').classList.add('campo_marca_error'); //Añade la class marca errores  
           document.getElementById('campo_error_pais').style.color="red"; 
    
      }  else {
          //document.getElementById('campo_error_pais').innerHTML = "";
          document.getElementById('selector').classList.add('campo_validado');
          document.getElementById('campo_error_pais').innerHTML ="País validado";
          document.getElementById('campo_error_pais').style.color="green";
      
        }
    }

    // Valido CP
    function validarCp(){

        var compruebaCp = document.getElementById("cp").value;
        var compruebaCp2 =  document.getElementById('cp').innerHTML
        compruebaCp2 = document.getElementById("cp").value.length;

      if (compruebaCp==''|| /^\s+$/.test(compruebaCp)){

          document.getElementById('campo_error_cp').innerHTML = texto_error();
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); //Añade la class marca errores  
          document.getElementById('campo_error_cp').style.color="red";    
    
      } else if (isNaN(compruebaCp)){

          document.getElementById('campo_error_cp').innerHTML = "Debes ingresar solo números";
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_cp').style.color="red";
    
      } 

      else if (compruebaCp2<5||compruebaCp2>5){

          document.getElementById('campo_error_cp').innerHTML = "Debes ingresar 5 números";
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_cp').style.color="red";
    
      }
      else {
          //document.getElementById('campo_error_cp').innerHTML = "";
          document.getElementById('cp').classList.add('campo_validado');
          document.getElementById('campo_error_cp').innerHTML ="CP válido";
          document.getElementById('campo_error_cp').style.color="green";
      
      }
    }

    function validarEmail() {

      var compruebaEmail = document.getElementById("email").value;
      if (compruebaEmail==''){

        document.getElementById('campo_error_email').innerHTML = texto_error();
        document.getElementById('email').classList.remove('campo_validado'); // Elimina la class
        document.getElementById('email').classList.add('campo_marca_error');  //Añade la class marca errores    
        document.getElementById('campo_error_email').style.color="red";

      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(compruebaEmail)){
        document.getElementById('campo_error_email').innerHTML ="Debe introducir un email válido";
        document.getElementById('email').classList.remove('campo_validado'); // Elimina la class
        document.getElementById('email').classList.add('campo_marca_error'); // Añade la class   

        document.getElementById('campo_error_email').style.color="red";
      
      } else {
        //document.getElementById('campo_error_email').innerHTML = "";
        document.getElementById('email').classList.add('campo_validado');
        document.getElementById('campo_error_email').innerHTML ="Email válido";
        document.getElementById('campo_error_email').style.color="green";
      }
    }

        //Contador para el textArea
    function validarSexo(){

    var isChecked = document.getElementById('radioButton1').checked;
    
    
    if(!isChecked){
      document.getElementById('campo_error_sexo').innerHTML = "Debes checkear al menos una opción";
      document.getElementById('campo_error_sexo').style.color="red";
    } else {
      document.getElementById('campo_error_sexo').innerHTML ="Sexo validado";
      document.getElementById('campo_error_sexo').style.color="green";
    }
    }
   

    //Contador para el textArea
    function validarIdioma(){

    var isChecked = document.getElementById('checkBox1').checked;
    var isChecked2 = document.getElementById('checkBox2').checked;
    
    if(!isChecked&&!isChecked2){
      document.getElementById('campo_error_idioma').innerHTML = "Debes checkear al menos una opción";
      document.getElementById('campo_error_idioma').style.color="red";
    } else {
      document.getElementById('campo_error_idioma').innerHTML ="Idioma validado";
      document.getElementById('campo_error_idioma').style.color="green";
    }
    }
   

 

    // metodo comun para usarlo dentro de varios metodos para mostrar el texto, Debe rellenar este campo...
    function texto_error(){ 

      var texto_error = "Debe rellenar este campo";
      return texto_error;

    }
    */






/*


 <form action="" method="POST" id="formulario">

                <div class="row">

                  <div class="col-md-12 col-md-offset-13">   

                        <div class="row">

                            <div class="col-sm-6 form-group">
                              <label for="usuario">Usuario:</label>

                                        <input type="text" id="usuario" class="form-control campo" name="usuario" onblur="requiredField()" placeholder="Escribe tu nombre de usuario" >

                                    <!--
                              <input type="text" id="usuario" class="form-control campo" name="usuario" onkeydown="validarUsuario()" onkeyup="validarUsuario()" onblur="validarUsuario()" required>

                                    -->
                              <span id="campo_error_usuario" class="texto_campo_error"></span>                           
                            </div>

                            <div class="col-sm-6 form-group">
                                <label for="password">Password:</label>
                                <input id="password" class="form-control campo" name="password" type="password" placeholder="Introduce la contraseña" onkeydown="validarPassword()" onkeyup="validarPassword()" onblur="validarPassword()" required>
                                <span id="campo_error_password" class="texto_campo_error"></span>
                            </div>

                          
                        </div>

                        <div class="row">

                            <div class="col-sm-6 form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control campo" id="nombre" name="nombre" onkeypress="return soloLetras(event)" onkeydown="validarNombre()" onkeyup="validarNombre()" onblur="validarNombre()" required>
                                <span id="campo_error_nombre" class="texto_campo_error"></span>
                            </div>

                            <div class="col-sm-6 form-group">
                                <label for="email">Email:</label>

                             <input type="email" class="form-control campo" id="email" name="email" onblur="requiredField()" required>

                            <!--
                                <input type="text" class="form-control campo" id="email" name="email" onkeydown="validarEmail()" onkeyup="validarEmail()" onblur="validarEmail()" required>

                            -->
                                <span id="campo_error_email" class="texto_campo_error"></span>
                            </div>
                            
                        </div>

                        <div class="row">

                           <div class="col-sm-6 form-group">
                                <label for="direccion">Direccion:</label>
                                <input type="text" class="form-control campo" id="direccion" name="direccion" title="">
                            </div>

                            
                            <div class="col-sm-6 form-group">

                                <label for="cp">CP:</label>
                                <input type="text" class="form-control campo" id="cp" name="cp" onkeydown="validarCp()" onkeyup="validarCp()" onblur="validarCp()" required>
                                <span id="campo_error_cp" class="texto_campo_error"></span>

                            </div>
                        </div>


                        <div class="row">

                          <div class="col-sm-6 form-group">

                                <label for="selector">País:</label>
                                  <select id="selector" class="form-control" name="selector" onkeydown="validarPais()" onkeyup="validarPais()" onblur="validarPais()" required>
                                    <option value="0">Elige una opcion</option>
                                    <option value="1">España</option>
                                    <option value="2">Inglaterra</option>
                                    <option value="3">Portugal</option>
                                  </select>
                                <span id="campo_error_pais" class="texto_campo_error"></span>

                            </div>
                            

                            <div class="col-sm-6 form-group">
                                <label for="otros">Otros:</label>
                                <input type="text" class="form-control campo" id="otros" name="otros" title="">
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-sm-6 form-group" id="sexo">
                                <label for="radioButton">Sexo:</label><br>
                                <input type="radio" id="radioButton1" name="radioButton1" onclick="validarSexo()"> Hombre<br>
                                <input type="radio" id="radioButton1" name="radioButton1"> Mujer<br>
                                <span id="campo_error_sexo" class="texto_campo_error"></span>
                            </div>

                            <div class="col-sm-6 form-group">
                                <label for="checkBox">Idioma:</label><br>
                                <input id="checkBox1" name="checkBox" type="checkbox" onclick="validarIdioma()"> Inglés<br>
                                <input id="checkBox2" name="checkBox2" type="checkbox" onclick="validarIdioma()"> Francés<br>
                                <span id="campo_error_idioma" class="texto_campo_error"></span>
        
                              
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-sm-12 form-group">

                                <label for="name">Mensaje:</label>
                                <textarea class="form-control" type="text" id="mensaje" name="message" onkeydown="contador()" onkeyup="contador()" placeholder="Escribe tu mensaje" rows="2"></textarea>

                                <!-- CONTADOR DEL TEXT AREA -->
                                <div class="contador">
                                <span id="digitosIntroducidos" name="digitosIntroducidos">0</span>/<span id="contadorTotal" name="contadorTotal">240</span>
                                </div>

                            </div>

                        </div>

                    
                  </div>
                  
                </div>

                <!-- Boton enviar -->

                <div class="row">

                    <div class="col-sm-12 form-group">
                     
                        <button type="submit" class="btn btn-lg btn-success btn-block" name="submit" value="Enviar" id="btnEnviar">ENVIAR</button>

                    </div>

                </div>

            </form>


            */



/*
   //Limpiamos el form al cargar la pagina
    function limpiar(){

      $('#formulario-contacto')[0].reset();
    
    }


    function masOpciones(){
    
      $(document).ready(function(){
        $("#botonMasOpciones").click(function(){
          $(".masOpciones_oculto").toggleClass("masOpciones_oculto_activado");
        });
      });

     
    }



function validar(){ 

    $("#usuario").blur(function() {
    
  
        // Si no hse ha escrito nada o se han introducidoe spacios en blanco
        if (usuario==0||$('#usuario').val().trim() === '') {     
        
        $("#campo_error_usuario").show("slow"); // He metido efecto para que noa parezca instantaneo sino con unas milesimas de retardo
        $("#campo_error_usuario").text(texto_error()); // Muesta un texto pero lo hace llamando a un metodo comun que le añade el texto, Debe rellenar este campo...
        $("#campo_error_usuario").css("color", "#ff0036");
        $("#usuario").css('border', '2px solid #ff0036');

      }                  

      else if (usuario<5||usuario>12) {     
        
        $("#campo_error_usuario").show("slow"); // He metido efecto para que noa parezca instantaneo sino con unas milesimas de retardo
        $("#campo_error_usuario").text('Introduzca entre 5 y 12 caracteres'); // Muesta un texto pero lo hace llamando a un metodo comun que le añade el texto, Debe rellenar este campo...
        $("#campo_error_usuario").css("color", "#ff0036");
        $("#usuario").css('border', '2px solid #ff0036');
       
      }  else {

       $("#campo_error_usuario").show("slow"); 
        $("#campo_error_usuario").text(validado()); // Muesta un texto pero lo hace llamando a un metodo comun que le añade el texto, Debe rellenar este campo...
        $("#campo_error_usuario").css("color", "#4a971e");
        $("#campo_error_usuario").fadeOut(5000);
        $("#usuario").css('border', '2px solid #4a971e');

      }
  });

}


// DESDE AQUI HACIA ABAJO, SIN  LIBRERIA JQUERY

*/



/*
  // Valido el Usuario
    function validarUsuario(){

      var compruebaUsuario = document.getElementById("usuario").value;

      if (compruebaUsuario==''|| /^\s+$/.test(compruebaUsuario)){

          //document.getElementById('usuario').value = texto_error();

          document.getElementById('campo_error_usuario').innerHTML = texto_error();
          document.getElementById('usuario').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('usuario').classList.add('campo_marca_error');  //Añade la class marca errores
           document.getElementById('campo_error_usuario').style.color="red";    

          //  document.getElementById("usuario").style.color = "red";

      } else if (compruebaUsuario.length<5||compruebaUsuario.length > 12) {

          document.getElementById('campo_error_usuario').innerHTML = "Debes introducir entre 5 y 12 caracteres";
          document.getElementById('usuario').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('usuario').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_usuario').style.color="red";

      } else  {

        
          //document.getElementById('campo_error_usuario').innerHTML = "";
          document.getElementById('usuario').classList.add('campo_validado'); // Añade la class
          document.getElementById('campo_error_usuario').innerHTML ="Usuario válido";
          document.getElementById('campo_error_usuario').style.color="green";
          
      
        }
    }

    // Valido la contraseña
    function validarPassword(){

      var compruebaPassword = document.getElementById("password").value;

      if (compruebaPassword==''|| /^\s+$/.test(compruebaPassword)){

          document.getElementById('campo_error_password').innerHTML = texto_error();
          document.getElementById('password').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('password').classList.add('campo_marca_error'); //Añade la class marca errores  
          document.getElementById('campo_error_password').style.color="red";      
    
      } else if (compruebaPassword.length<7||compruebaPassword.length > 12) {

          document.getElementById('campo_error_password').innerHTML = "Debes introducir entre 7 y 12 caracteres";
          document.getElementById('password').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('password').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_password').style.color="red";


      } else {
          //document.getElementById('campo_error_password').innerHTML = "";
          document.getElementById('password').classList.add('campo_validado');
          document.getElementById('campo_error_password').innerHTML ="Password válida";
          document.getElementById('campo_error_password').style.color="green";
      }

    }


    // Valido nombre

    //Aqui he usado una funcion que no conocia, pero se me ocurrio de como hacerlo para impedir o no dejar escribir si detecta que es un numero
    // y di con este metodo, y me parecio muy util y por eso lo he usado, lo vi como algo estandar y usable, y lo que siempre comentas ya inventado y
    // y que esta muy completo
    function soloLetras(e){

      var key = window.event ? e.which : e.keyCode;

         key = e.keyCode || e.which;
         tecla = String.fromCharCode(key).toLowerCase();
         letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
         especiales = "8-37-39-46";

         tecla_especial = false
         for(var i in especiales){
              if(key == especiales[i]){
                  tecla_especial = true;
                  break;
              }
          }
          if(letras.indexOf(tecla)==-1 && !tecla_especial){
      
      return false;
      ValidarNombre();
      }
    }

    // y aqui valido si esta vacio
    function validarNombre(){

      var compruebaNombre = document.getElementById("nombre").value;    

      if (compruebaNombre==''|| /^\s+$/.test(compruebaNombre)){

          document.getElementById('campo_error_nombre').innerHTML = texto_error();        
          document.getElementById('nombre').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('nombre').classList.add('campo_marca_error'); // Añade la class 

          document.getElementById('campo_error_nombre').style.color="red";
    
      } else {
          //document.getElementById('campo_error_nombre').innerHTML = "";
          document.getElementById('nombre').classList.add('campo_validado');
          document.getElementById('campo_error_nombre').innerHTML ="Nombre válido";
          document.getElementById('campo_error_nombre').style.color="green";
      }
    }

    // Valido CP
    function validarPais(){

        var compruebaLista = document.getElementById('selector').selectedIndex;

           //Test comboBox
        if(compruebaLista == null || compruebaLista == 0){
          
          document.getElementById('campo_error_pais').innerHTML = texto_error();
          document.getElementById('selector').classList.remove('campo_validado'); // Elimina la class marca_errores
          document.getElementById('selector').classList.add('campo_marca_error'); //Añade la class marca errores  
           document.getElementById('campo_error_pais').style.color="red"; 
    
      }  else {
          //document.getElementById('campo_error_pais').innerHTML = "";
          document.getElementById('selector').classList.add('campo_validado');
          document.getElementById('campo_error_pais').innerHTML ="País validado";
          document.getElementById('campo_error_pais').style.color="green";
      
        }
    }

    // Valido CP
    function validarCp(){

        var compruebaCp = document.getElementById("cp").value;
        var compruebaCp2 =  document.getElementById('cp').innerHTML
        compruebaCp2 = document.getElementById("cp").value.length;

      if (compruebaCp==''|| /^\s+$/.test(compruebaCp)){

          document.getElementById('campo_error_cp').innerHTML = texto_error();
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); //Añade la class marca errores  
          document.getElementById('campo_error_cp').style.color="red";    
    
      } else if (isNaN(compruebaCp)){

          document.getElementById('campo_error_cp').innerHTML = "Debes ingresar solo números";
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_cp').style.color="red";
    
      } 

      else if (compruebaCp2<5||compruebaCp2>5){

          document.getElementById('campo_error_cp').innerHTML = "Debes ingresar 5 números";
          document.getElementById('cp').classList.remove('campo_validado'); // Elimina la class
          document.getElementById('cp').classList.add('campo_marca_error'); // Añade la class
          document.getElementById('campo_error_cp').style.color="red";
    
      }
      else {
          //document.getElementById('campo_error_cp').innerHTML = "";
          document.getElementById('cp').classList.add('campo_validado');
          document.getElementById('campo_error_cp').innerHTML ="CP válido";
          document.getElementById('campo_error_cp').style.color="green";
      
      }
    }

    function validarEmail() {

      var compruebaEmail = document.getElementById("email").value;
      if (compruebaEmail==''){

        document.getElementById('campo_error_email').innerHTML = texto_error();
        document.getElementById('email').classList.remove('campo_validado'); // Elimina la class
        document.getElementById('email').classList.add('campo_marca_error');  //Añade la class marca errores    
        document.getElementById('campo_error_email').style.color="red";

      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(compruebaEmail)){
        document.getElementById('campo_error_email').innerHTML ="Debe introducir un email válido";
        document.getElementById('email').classList.remove('campo_validado'); // Elimina la class
        document.getElementById('email').classList.add('campo_marca_error'); // Añade la class   

        document.getElementById('campo_error_email').style.color="red";
      
      } else {
        //document.getElementById('campo_error_email').innerHTML = "";
        document.getElementById('email').classList.add('campo_validado');
        document.getElementById('campo_error_email').innerHTML ="Email válido";
        document.getElementById('campo_error_email').style.color="green";
      }
    }

        //Contador para el textArea
    function validarSexo(){

    var isChecked = document.getElementById('radioButton1').checked;
    
    
    if(!isChecked){
      document.getElementById('campo_error_sexo').innerHTML = "Debes checkear al menos una opción";
      document.getElementById('campo_error_sexo').style.color="red";
    } else {
      document.getElementById('campo_error_sexo').innerHTML ="Sexo validado";
      document.getElementById('campo_error_sexo').style.color="green";
    }
    }
   

    //Contador para el textArea
    function validarIdioma(){

    var isChecked = document.getElementById('checkBox1').checked;
    var isChecked2 = document.getElementById('checkBox2').checked;
    
    if(!isChecked&&!isChecked2){
      document.getElementById('campo_error_idioma').innerHTML = "Debes checkear al menos una opción";
      document.getElementById('campo_error_idioma').style.color="red";
    } else {
      document.getElementById('campo_error_idioma').innerHTML ="Idioma validado";
      document.getElementById('campo_error_idioma').style.color="green";
    }
    }
   

 

    // metodo comun para usarlo dentro de varios metodos para mostrar el texto, Debe rellenar este campo...
    function texto_error(){ 

      var texto_error = "Debe rellenar este campo";
      return texto_error;

    }
    */






/*


 <form action="" method="POST" id="formulario">

                <div class="row">

                  <div class="col-md-12 col-md-offset-13">   

                        <div class="row">

                            <div class="col-sm-6 form-group">
                              <label for="usuario">Usuario:</label>

                                        <input type="text" id="usuario" class="form-control campo" name="usuario" onblur="requiredField()" placeholder="Escribe tu nombre de usuario" >

                                    <!--
                              <input type="text" id="usuario" class="form-control campo" name="usuario" onkeydown="validarUsuario()" onkeyup="validarUsuario()" onblur="validarUsuario()" required>

                                    -->
                              <span id="campo_error_usuario" class="texto_campo_error"></span>                           
                            </div>

                            <div class="col-sm-6 form-group">
                                <label for="password">Password:</label>
                                <input id="password" class="form-control campo" name="password" type="password" placeholder="Introduce la contraseña" onkeydown="validarPassword()" onkeyup="validarPassword()" onblur="validarPassword()" required>
                                <span id="campo_error_password" class="texto_campo_error"></span>
                            </div>

                          
                        </div>

                        <div class="row">

                            <div class="col-sm-6 form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control campo" id="nombre" name="nombre" onkeypress="return soloLetras(event)" onkeydown="validarNombre()" onkeyup="validarNombre()" onblur="validarNombre()" required>
                                <span id="campo_error_nombre" class="texto_campo_error"></span>
                            </div>

                            <div class="col-sm-6 form-group">
                                <label for="email">Email:</label>

                             <input type="email" class="form-control campo" id="email" name="email" onblur="requiredField()" required>

                            <!--
                                <input type="text" class="form-control campo" id="email" name="email" onkeydown="validarEmail()" onkeyup="validarEmail()" onblur="validarEmail()" required>

                            -->
                                <span id="campo_error_email" class="texto_campo_error"></span>
                            </div>
                            
                        </div>

                        <div class="row">

                           <div class="col-sm-6 form-group">
                                <label for="direccion">Direccion:</label>
                                <input type="text" class="form-control campo" id="direccion" name="direccion" title="">
                            </div>

                            
                            <div class="col-sm-6 form-group">

                                <label for="cp">CP:</label>
                                <input type="text" class="form-control campo" id="cp" name="cp" onkeydown="validarCp()" onkeyup="validarCp()" onblur="validarCp()" required>
                                <span id="campo_error_cp" class="texto_campo_error"></span>

                            </div>
                        </div>


                        <div class="row">

                          <div class="col-sm-6 form-group">

                                <label for="selector">País:</label>
                                  <select id="selector" class="form-control" name="selector" onkeydown="validarPais()" onkeyup="validarPais()" onblur="validarPais()" required>
                                    <option value="0">Elige una opcion</option>
                                    <option value="1">España</option>
                                    <option value="2">Inglaterra</option>
                                    <option value="3">Portugal</option>
                                  </select>
                                <span id="campo_error_pais" class="texto_campo_error"></span>

                            </div>
                            

                            <div class="col-sm-6 form-group">
                                <label for="otros">Otros:</label>
                                <input type="text" class="form-control campo" id="otros" name="otros" title="">
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-sm-6 form-group" id="sexo">
                                <label for="radioButton">Sexo:</label><br>
                                <input type="radio" id="radioButton1" name="radioButton1" onclick="validarSexo()"> Hombre<br>
                                <input type="radio" id="radioButton1" name="radioButton1"> Mujer<br>
                                <span id="campo_error_sexo" class="texto_campo_error"></span>
                            </div>

                            <div class="col-sm-6 form-group">
                                <label for="checkBox">Idioma:</label><br>
                                <input id="checkBox1" name="checkBox" type="checkbox" onclick="validarIdioma()"> Inglés<br>
                                <input id="checkBox2" name="checkBox2" type="checkbox" onclick="validarIdioma()"> Francés<br>
                                <span id="campo_error_idioma" class="texto_campo_error"></span>
        
                              
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-sm-12 form-group">

                                <label for="name">Mensaje:</label>
                                <textarea class="form-control" type="text" id="mensaje" name="message" onkeydown="contador()" onkeyup="contador()" placeholder="Escribe tu mensaje" rows="2"></textarea>

                                <!-- CONTADOR DEL TEXT AREA -->
                                <div class="contador">
                                <span id="digitosIntroducidos" name="digitosIntroducidos">0</span>/<span id="contadorTotal" name="contadorTotal">240</span>
                                </div>

                            </div>

                        </div>

                    
                  </div>
                  
                </div>

                <!-- Boton enviar -->

                <div class="row">

                    <div class="col-sm-12 form-group">
                     
                        <button type="submit" class="btn btn-lg btn-success btn-block" name="submit" value="Enviar" id="btnEnviar">ENVIAR</button>

                    </div>

                </div>

            </form>


            */

