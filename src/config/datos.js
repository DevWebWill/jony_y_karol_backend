// Datos a insertar
const datos = [
    { slug: 'montenegro',  name: 'Oscar', attendance: false },
    { slug: 'montenegro',  name: 'Nayibe Andrea', attendance: false },
    { slug: 'montenegro',  name: 'Samuel', attendance: false },
    { slug: 'montenegro',  name: 'Santi Mayor', attendance: false },

    { slug: 'ospina',  name: 'Yulieth', attendance: false },
    { slug: 'ospina',  name: 'Alberto', attendance: false },
    { slug: 'ospina',  name: 'Santi Menor', attendance: false },

    { slug: 'anacona-ante',  name: 'Abuela Aura', attendance: false },

    { slug: 'luis-y-katy',  name: 'Tío Luis', attendance: false },
    { slug: 'luis-y-katy',  name: 'Katy', attendance: false },

    { slug: 'julia',  name: 'Abuela Julia', attendance: false },

    { slug: 'munoz',  name: 'Julian David', attendance: false },
    { slug: 'munoz',  name: 'Tía Marta', attendance: false },
    { slug: 'munoz',  name: 'Bryan', attendance: false },

    { slug: 'murcia',  name: 'Narly', attendance: false },
    { slug: 'murcia',  name: 'Luis', attendance: false },

    { slug: 'bolanos',  name: 'Jenny Julieta', attendance: false },
    { slug: 'bolanos',  name: 'Paco', attendance: false },
    { slug: 'bolanos',  name: 'Santi', attendance: false },
    { slug: 'bolanos',  name: 'Dilan', attendance: false },

    { slug: 'ospina-maya',  name: 'Alex Ospina', attendance: false },
    { slug: 'ospina-maya',  name: 'Jhon Henry', attendance: false },

    { slug: 'piedad-reyes-e-hijos',  name: 'Piedad Reyes e hijos', attendance: false },

    { slug: 'sanmartin-silverio',  name: 'Efrain', attendance: false },
    { slug: 'sanmartin-silverio',  name: 'Rosa', attendance: false },

    { slug: 'kris-y-lori',  name: 'Cristian', attendance: false },
    { slug: 'kris-y-lori',  name: 'Lory', attendance: false },

    { slug: 'ignacio-y-dani',  name: 'Ignacio', attendance: false },
    { slug: 'ignacio-y-dani',  name: 'Dani', attendance: false },

    { slug: 'flor-sanmartin',  name: 'Flor San Martín', attendance: false },
    { slug: 'paula-vazquez',  name: 'Paula Vazquez', attendance: false },

    { slug: 'sanmartin-quezada',  name: 'Enrique', attendance: false },
    { slug: 'sanmartin-quezada',  name: 'Tía Ermelinda', attendance: false },

    { slug: 'rosario-pastaza',  name: 'Tía Rosario', attendance: false },



    { slug: 'salas-chamorro',  name: 'Néstor', attendance: false },
    { slug: 'salas-chamorro',  name: 'Anahi', attendance: false },

    { slug: 'villareal-peña',  name: 'Dixon', attendance: false },
    { slug: 'villareal-peña',  name: 'Yohanna', attendance: false },

    { slug: 'villareal1',  name: 'Wilson', attendance: false },
    { slug: 'villareal1',  name: 'Sary', attendance: false },

    { slug: 'villareal2',  name: 'William', attendance: false },
    { slug: 'villareal2',  name: 'Tania', attendance: false },

    { slug: 'carrasco-santamaria',  name: 'Reno', attendance: false },
    { slug: 'carrasco-santamaria',  name: 'Monse', attendance: false },

    { slug: 'martinez-sanchez',  name: 'Robert', attendance: false },
    { slug: 'martinez-sanchez',  name: 'Dayanet', attendance: false },

    { slug: 'urrea-benitez',  name: 'Valentina', attendance: false },
    { slug: 'urrea-benitez',  name: 'Lorena', attendance: false },

    { slug: 'villamizar-cabrera',  name: 'Carolina', attendance: false },
    { slug: 'villamizar-cabrera',  name: 'Pepe', attendance: false },

    { slug: 'toro-nader',  name: 'Jose', attendance: false },
    { slug: 'toro-nader',  name: 'Kata', attendance: false },

    { slug: 'stefanov-herrera',  name: 'Karol', attendance: false },
    { slug: 'stefanov-herrera',  name: 'Rachel Paz', attendance: false },

    { slug: 'gutierrez-garcia',  name: 'Marie', attendance: false },
    { slug: 'gutierrez-garcia',  name: 'Fredy', attendance: false },
    { slug: 'gutierrez-garcia',  name: 'Gaby', attendance: false },
    { slug: 'gutierrez-garcia',  name: 'Lifred', attendance: false },

    { slug: 'alvez-toro',  name: 'Michel', attendance: false },
    { slug: 'alvez-toro',  name: 'Ana', attendance: false },

    { slug: 'guaman-torrez',  name: 'Darío', attendance: false },
    { slug: 'guaman-torrez',  name: 'Valeria', attendance: false },

    { slug: 'sosa-carrasco',  name: 'Marta', attendance: false },
    { slug: 'sosa-carrasco',  name: 'Matías', attendance: false },

    { slug: 'sanchez-alzate',  name: 'Teresita', attendance: false },
    { slug: 'sanchez-alzate',  name: 'Angelo', attendance: false },

    { slug: 'sanchez-marulanda',  name: 'Cristian', attendance: false },
    { slug: 'sanchez-marulanda',  name: 'Erika', attendance: false },

    { slug: 'gomez-ospino',  name: 'Daniela', attendance: false },
    { slug: 'gomez-ospino',  name: 'Leo', attendance: false },

    { slug: 'cardenas-hernandez',  name: 'Eduardo', attendance: false },
    { slug: 'cardenas-hernandez',  name: 'Ale', attendance: false },

    { slug: 'hoyte-turnsek',  name: 'Raquel', attendance: false },
    { slug: 'hoyte-turnsek',  name: 'Alberth', attendance: false },

    { slug: 'montoya-ortiz',  name: 'Valentina', attendance: false },
    { slug: 'montoya-ortiz',  name: 'Duván', attendance: false },
    { slug: 'montoya-ortiz',  name: 'Cristina', attendance: false },
    { slug: 'montoya-ortiz',  name: 'Hermano', attendance: false },

    { slug: 'sanchez-leyva',  name: 'Keyla', attendance: false },
    { slug: 'sanchez-leyva',  name: 'Pedro', attendance: false },

    { slug: 'caballos-luna',  name: 'Tania', attendance: false },
    { slug: 'caballos-luna',  name: 'Camilo', attendance: false },

    { slug: 'rodriguez-pernas',  name: 'Eli', attendance: false },
    { slug: 'rodriguez-pernas',  name: 'Willy', attendance: false },

    { slug: 'calustro',  name: 'Padre de Gaby', attendance: false },
    { slug: 'calustro',  name: 'Ma. Dolores Marza', attendance: false },
    { slug: 'calustro',  name: 'Gaby Calustro', attendance: false },

    { slug: 'dosantos',  name: 'Daniela Dosantos', attendance: false },
    { slug: 'dosantos',  name: 'Manuel Dosantos', attendance: false },
    { slug: 'dosantos',  name: 'Damely', attendance: false },

    { slug: 'caramutti',  name: 'Jessica', attendance: false },
    { slug: 'caramutti',  name: 'Ezaquiel', attendance: false },
    { slug: 'caramutti',  name: 'Lucas Caramutti', attendance: false },

    { slug: 'zambrano-loor',  name: 'Maricruz', attendance: false },
    { slug: 'zambrano-loor',  name: 'Wacho', attendance: false },
    { slug: 'zambrano-loor',  name: 'Eddy', attendance: false },
    { slug: 'zambrano-loor',  name: 'Fran', attendance: false },
    { slug: 'zambrano-loor',  name: 'Aitana', attendance: false },

    { slug: 'grajales-upegui',  name: 'María Jose Grajales', attendance: false },
    { slug: 'grajales-upegui',  name: 'Jose', attendance: false },
    { slug: 'grajales-upegui',  name: 'Lorena', attendance: false },

    { slug: 'estefania-rojas', name: 'Estefania Rojas', attendance: false },
    { slug: 'elvis-tola',      name: 'Elvis Tola', attendance: false },
    { slug: 'talita-corado',   name: 'Talita Corado', attendance: false },
    { slug: 'ruth-alquinga',   name: 'Ruth Alquinga', attendance: false },
    { slug: 'any-andino',      name: 'Any Andino', attendance: false },
    { slug: 'isabel-arango',   name: 'Isabel Arango', attendance: false },
    { slug: 'jersson-henao',   name: 'Jersson Henao', attendance: false },
    { slug: 'daniela-lopez',   name: 'Daniela López', attendance: false },
    { slug: 'kiara-montalvan', name: 'Kiara Montalvan', attendance: false },
    { slug: 'samuel-posada',   name: 'Samuel Posada', attendance: false },
    { slug: 'karina-paz',      name: 'Karina Paz', attendance: false },
    { slug: 'bryan-gonzalez',  name: 'Bryan González', attendance: false },
    { slug: 'claudia-garcia',  name: 'Claudia García', attendance: false },
    { slug: 'susana-mengual',  name: 'Susana Mengual', attendance: false },
    { slug: 'jessica-silva',   name: 'Jessica Silva', attendance: false },
    
    
    
    
  ];
  
// Exportar los datos para usarlos en otros archivos
export default datos;