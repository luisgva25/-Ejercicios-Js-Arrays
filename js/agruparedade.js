const personas = [
    { nombre: 'luis', edad: 25 },
    { nombre: 'toño', edad: 32 },
    { nombre: 'pablo', edad: 45 },
    { nombre: 'kevin', edad: 22 },
    { nombre: 'meryl', edad: 38 },
    { nombre: 'diego', edad: 27 }
];

const agruparedades = personas.reduce((grupos, persona) => {
    const decada = Math.floor(persona.edad / 10) * 10 + 's';
    if (!grupos[decada]) {
        grupos[decada] = [];
    }
    grupos[decada].push(persona);

    return grupos;
}, {});

console.log(agruparedades);
