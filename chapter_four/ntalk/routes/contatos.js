module.exports = function(app) {
	var contatos = app.controller.contatos;
	app.get('/contatos', contatos.index);
};