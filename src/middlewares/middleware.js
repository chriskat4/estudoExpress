exports.middlewareGlobal = (req, res, next) =>{
    res.locals.umaVariavelLocal = 'valor da variavel local';

    console.log();
    
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('MOD', 'MOD é exclusivo');
        console.log(`vi que voce postou ${req.body.cliente}`);
    }

    console.log();
    
    next();
};

exports.outroMiddleware = (req, res, next)=>{
    next();
};