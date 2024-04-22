const arrayProductos = [
    {
        nombre: 'ZAPATILLAS ADIZERO BOSTON 12',
        precio: 165199,
        descripcion: '<strong>ZAPATILLAS DE RUNNING CAPACES PARA DISTANCIAS MEDIAS Y LARGAS HECHAS ' +
            'PARCIALMENTE CON MATERIALES RECICLADOS</strong>. La Maratón de Boston® es una ' +
            'carrera. Pero también es un objetivo, un plan de entrenamiento y está en tu ' +
            'mente todos los días antes del gran reto. Las zapatillas Adizero Boston 12 están ' +
            'diseñadas para correr distancias medias y largas. Inyectan una sensación de ' +
            'propulsión a cada entrenamiento con la infusión de fibra de vidrio con las ' +
            'varillas ENERGYRODS 2.0, que limitan la pérdida de energía bajo el pie. Son ' +
            'rápidas, pero esto no se consigue a expensas de la durabilidad. La mediasuela ' +
            'combina la amortiguación Lightstrike Pro ultraliviana con una nueva versión de ' +
            'la mediasuela Lightstrike 2.0 EVA resistente.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/48d444365d31404fb7b8ae7a69127482_9366/Zapatillas_Ozelle_Cloudfoam_Lifestyle_Running_Gris_IG9797_01_standard.jpg'
    },
    {
        nombre: 'ZAPATILLAS ULTRABOOST LIGHT 23',
        precio: 158399,
        descripcion: '<strong>ENERGÍA ÉPICA. MÁS LIVIANA QUE NUNCA.</strong> Descubrí una energía ' +
            'épica con las nuevas Ultraboost Light, las Ultraboost más ligeras que hemos ' +
            'creado. La magia está en la mediasuela Light BOOST, una nueva generación de ' +
            'adidas BOOST. Su exclusivo diseño molecular convierte a la espuma BOOST en la ' +
            'más ligera. Con cientos de cápsulas BOOST llenas de energía y lo último en ' +
            'amortiguación y comodidad, algunos pies realmente pueden tenerlo todo.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9fc33404c64d4b8db52af275add6b62e_9366/Zapatillas_Ultraboost_Light_23_Blanco_IE1768_01_standard.jpg'
    },
    {
        nombre: 'ZAPATILLAS TERREX SPEED 2.0',
        precio: 113999,
        descripcion: '<strong>ZAPATILLAS PARA CORRER CON LIGEREZA Y ESTABILIDAD EN LOS SENDEROS, ' +
            'HECHAS PARCIALMENTE CON MATERIALES RECICLADOS</strong> El trail running te ' +
            'permite estar saludable y disfrutar del aire libre mientras lo hacés. Cuando ' +
            'corrés en exteriores necesitás un calzado adecuado. Las Terrex Speed Flow fueron ' +
            'diseñadas para que puedas correr a un ritmo constante sin sentir tus pies ' +
            'pesados.\n\n' +
            'La suela de caucho Continental™ Rubber ofrece un agarre seguro durante toda tu ' +
            'aventura y la caída de 8mm del talón a la punta te va a poner a andar ' +
            'literalmente en la punta de tus pies. El exterior de malla mantiene tus pies ' +
            'frescos y la lengüeta acolchada brinda comodidad con cada paso.\n\n' +
            'Hora de ponerte las zapatillas y disfrutar de los senderos.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b71caaa190f44f2a431ae9900cdaeb7_9366/Zapatillas_de_Trail_Running_Terrex_Speed_flow_Azul_GY6135_01_standard.jpg'
    },
    {
        nombre: 'ZAPATILLAS TRACEROCKER 2.0',
        precio: 101499,
        descripcion: '<strong>ZAPATILLAS DE TRAIL RUNNING TODO TERRENO HECHAS PARCIALMENTE CON ' +
            'MATERIALES RECICLADOS.</strong> Dejá atrás el pavimento con estas zapatillas ' +
            'de trail running de adidas. El exterior de malla mantiene tus pies frescos y los ' +
            'revestimientos resisten el desgaste del terreno escabroso. Recorré distancias ' +
            'más largas y buscá nuevas vistas gracias a la comodidad duradera de la ' +
            'amortiguación ligera y la sensación de propulsión bajo el pie. La suela Traxion ' +
            'ranurada te ofrece un agarre multidireccional a donde vayás.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/35a566a5ee344ab48c61af63013a124b_9366/Zapatillas_de_Trail_Running_Tracerocker_2.0_Naranja_HR1170_01_standard.jpg'
    },
    {
        nombre: 'ZAPATILLAS OZELLE CLOUDFOAM',
        precio: 80499,
        descripcion: '<strong>ZAPATILLAS CON UN ATRACTIVO RETRO HECHAS PARCIALMENTE CON MATERIALES RECICLADOS</strong> Estas zapatillas de running adidas retro se actualizan con una mezcla de materiales livianos y una suela de caucho robusto del momento. El interior también está a la moda, con amortiguación Cloudfoam que te envuelve en comodidad incluso en los momentos más intensos del día.\n\nHecho con una serie de materiales reciclados, este exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d5085c0fe2b4ccb8cd52d9d5c6cfb90_9366/Zapatillas_Ozelle_Cloudfoam_Lifestyle_Running_Rosa_IF2876_01_standard.jpg'
    },
    {
        nombre: 'ZAPATILLAS ADIDAS GRAND COURT TD',
        precio: 68799,
        descripcion: '<strong>ZAPATILLAS CLÁSICAS ACTUALIZADAS, HECHAS PARCIALMENTE CON MATERIALES ' +
            'RECICLADOS</strong> Zapatillas que perduran en el tiempo. Las zapatillas ' +
            'adidas Grand Court nos han acompañado desde los años 70. Una vez tengás la ' +
            'versión actualizada de este clásico en tu colección, no vas a querer usar otras ' +
            'zapatillas. Las 3 Tiras le confieren un toque deportivo a cualquier outfit. ' +
            'Hecha con una serie de materiales reciclados, esta parte superior incorpora al ' +
            'menos un 50 % de contenido reciclado.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bdf23cbaf0274284be323c74a924e184_9366/Zapatillas_adidas_Grand_Court_TD_Lifestyle_Court_Casual_Rosa_ID1852_01_standard.jpg'
    },
    {
        nombre: 'ZAPATILLAS DE CICLISMO DE RUTA',
        precio: 164999,
        descripcion: '<strong>ZAPATILLAS DE CICLISMO DE RUTA CÓMODAS HECHAS PARCIALMENTE CON PARLEY ' +
            'OCEAN PLASTIC.</strong> Desde gran fondos hasta entrenamientos de rutina y ' +
            'salidas a montar con amigos, las zapatillas de ciclismo adidas Road BOA® ' +
            'combinan una plataforma rígida y receptiva con comodidad que abraza tu pie. ' +
            'Estas zapatillas para ruta le brindan soporte a tus pies con un exterior tipo ' +
            'media en adidas PRIMEKNIT y una lengüeta adaptable que te brinda la comodidad ' +
            'que necesitás para concentrarte en tu esfuerzo. El pedaleo eficiente viene ' +
            'naturalmente con una placa sintética que incorpora materiales reciclados que ' +
            'transfieren energía a los pedales. El sistema de ajuste BOA® te permite ajustar ' +
            'la tensión a tu medida. Las 3 Tiras reflectivas aumentan la visibilidad, y el ' +
            'calzado es compatible con todos los sistemas de calas de tres tornillos. ' +
            'Ponetelas y salí a dominar la ruta.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/01b7bc1d394b47f991ad8d7e1d8c054c_9366/Zapatillas_de_Ciclismo_de_Ruta_The_Road_Cycling_Shoes_Blanco_HQ6712_01_standard.jpg'
    },
    {
        nombre: 'ZAPATILLAS GRAND COURT MD',
        precio: 68799,
        descripcion: '<strong>ZAPATILLAS CLÁSICAS ACTUALIZADAS, HECHAS PARCIALMENTE CON MATERIALES ' +
            'RECICLADOS</strong> Zapatillas que perduran en el tiempo. Las zapatillas ' +
            'adidas Grand Court nos han acompañado desde los años 70. Una vez tengás la ' +
            'versión actualizada de este clásico en tu colección, no vas a querer usar otras ' +
            'zapatillas. Las 3 Tiras le confieren un toque deportivo a cualquier outfit. ' +
            'Hecha con una serie de materiales reciclados, esta parte superior incorpora al ' +
            'menos un 50 % de contenido reciclado.',
        urlImagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e22688a1c7cb460a9c30c278ddc9dfe9_9366/Zapatillas_Grand_Court_Base_2.0_Negro_ID4446_01_standard.jpg'
    }
]