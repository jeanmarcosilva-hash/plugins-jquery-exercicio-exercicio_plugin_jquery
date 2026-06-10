$(document).ready(function() {
    // Aplicação das máscaras
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');

    // Configuração da validação do formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome completo",
            // As outras mensagens serão traduzidas pelo arquivo messages_pt_BR.min.js
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise!");
            form.reset(); // Limpa o formulário após o envio
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos ou vazios!`);
            }
        }
    });
});