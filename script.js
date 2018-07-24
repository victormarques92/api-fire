var tipo = '';
var acao = '';
var parametros = '';

var api = 'http://fipeapi.appspot.com/api/1/'+ tipo +'/'+ acao +'/'+ parametros +'.json'

$.ajax({
    url: encodeURI(api),
    dataType: 'json',
    type: 'GET',
    success: function(data) {

    }
});