exports.middlewareGlobal = (req, res, next) =>{
    console.log();
    
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('MOD', 'MOD é exclusivo');
        console.log(`vi que voce postou ${req.body.cliente}`);
    }

    console.log();
    
    next();
};