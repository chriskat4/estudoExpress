exports.paginaInicial = (req, res) =>{
    req.session.usuario = {nome: 'Chris', logado: true};
    console.log(req.session.usuario);// cokkie de 7 dias.

    req.flash('<nome>', '<msg>');//fm-auto-destrutiva.

    res.render('index', {
        titulo: 'este é o titulo da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};

