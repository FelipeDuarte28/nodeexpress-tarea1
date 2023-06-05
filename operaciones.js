const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const cita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad,
    };

    const citas = JSON.parse(fs.readFileSync('citas.json', 'UTF8'));
    citas.push(cita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 4));

    console.log('Registrado OK.');
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'UTF8'));
    console.log(' ');
    console.log('Citas agendadas:');
    console.log('------------------');
    citas.forEach((cita) => {
        console.log('Nombre:', cita.nombre);
        console.log('Edad:', cita.edad);
        console.log('Animal:', cita.animal);
        console.log('Color:', cita.color);
        console.log('Enfermedad:', cita.enfermedad);
        console.log('...........................');
    });
}

module.exports = {
    registrar,
    leer,
};