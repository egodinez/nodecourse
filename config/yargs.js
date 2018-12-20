const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo con con la tabla proporcionada', opt)
    .help()
    .argv;


module.exports = {
    argv
};