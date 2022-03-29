(function ($) {
    "use strict";


    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

    $("#cpfcnpj").keydown(function(){
        try {
            $("#cpfcnpj").unmask();
        } catch (e) {}

        var tamanho = $("#cpfcnpj").val().length;

        if(tamanho < 11){
            $("#cpfcnpj").mask("999.999.999-99");
        } else {
            $("#cpfcnpj").mask("99.999.999/9999-99");
        }

        // ajustando foco
        var elem = this;
        setTimeout(function(){
            // mudo a posição do seletor
            elem.selectionStart = elem.selectionEnd = 10000;
        }, 0);
        // reaplico o valor para mudar o foco
        var currentValue = $(this).val();
        $(this).val('');
        $(this).val(currentValue);
    });


   /* function validate (input) {
        if($(input).attr('id') == 'cpf' || $(input).attr('name') == 'cpf') {
            if($(input).val().trim().match(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }
       /* if($(input).attr('id') == 'venc' || $(input).attr('name') == 'vencimento') {
            if(){

            }

        }

    }


     /*function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }
    
    function validaCPF (input) {   

    var ao_cpf=document.forms.form1.cpf.value; 
    var cpfValido = /^(([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}))$/;     
    if (cpfValido.test(cpf) == false)    {  
       //alert("invalido");
       var valorValido = document.getElementById("ao_cpf").value = "???????";
    }
}
    
    
    */

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf136;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }

    

    (jQuery);

    $(document).ready(function() {
        $(".js-select2").select2({
            searchInputPlaceholder: ''
        });
    })

    

    $(document).ready(function() {
        $(".dinheiro").maskMoney({
            prefix: "R$:",
            decimal: ",",
            thousands: "."
        });
    });

    /*
    new Vue({
    el: '#app',
        data() {
        const m = {
            decimal: ',',
            thousands: '.',
            precision: 2,
            prefix: 'R$ ',
            suffix: ' #',
            masked: false
    };

    return {
      price: null,
      money: m
    }
  }
})
    

    /*$(function() {
        $('#currency').maskMoney();
    })

  */
})



  /*

    $('.cpf').mask('000-000.000-00');
    $('.cep').mask('00000-000');
    $('.negociação').mask('#.##0,00', {reverse: true});
    $('.telefone').mask('(00) 0 0000-0000');



  */