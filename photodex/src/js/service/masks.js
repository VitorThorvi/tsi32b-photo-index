$(document).ready(function () {

    $('#customerCPF').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $('#customerCEP').mask('00000-000', {
        placeholder: '_____-__'
    });
});
