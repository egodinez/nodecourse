const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log('=================================================='.green);
                console.log(`=== Tabla de ${ argv.base} hasta ${ argv.limite }===`.blue);
                console.log(colors.red(data));
                console.log('============================='.green);
            })
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.gray(archivo) }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

        break;

}
//console.log(process.argv);


//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(argv);
console.log(`Comando:${ comando }, Bae: ${ argv.base }, Limite ${ argv.limite }`);
//console.log(argv2);

//console.log(base);