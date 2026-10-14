// Los mensajes que el cliente puede escoger. Siempre puede escribir el suyo.
// 'g' es el grupo con el que se acomodan en la pantalla.
// Editar aqui y hacer push: las tarjetas ya repartidas cambian solas.
window.ESTILOS = [
  // ------------------------------------------------------------ de corazon
  { g: "De corazón", n: "Clásico", t: "Te deseamos una muy feliz Navidad",
    m: "Este regalo fue pensado para ti y para tu familia, para que lo disfruten en estas épocas tan especiales y lo compartan con quienes más quieren.\n\nQue esta Navidad les traiga salud, calma y momentos de los que se recuerdan." },

  { g: "De corazón", n: "Corazón lleno", t: "Que la Navidad te encuentre con el corazón lleno",
    m: "Que llegue diciembre y te halle rodeado de los tuyos, con la casa tibia, la mesa puesta y nada pendiente que te quite el sueño.\n\nEso es todo lo que te deseamos. Y que lo sepas: se te quiere, y mucho." },

  { g: "De corazón", n: "Eres el regalo", t: "Hay personas que son regalo",
    m: "No hace falta que sea Navidad para saberlo, pero en Navidad se dice más fácil: tú eres de esas.\n\nGracias por estar. Que este año te devuelva todo lo bonito que repartes sin darte cuenta." },

  { g: "De corazón", n: "Lo mejor del año", t: "Lo mejor de este año fuiste tú",
    m: "Pasaron muchas cosas, unas buenas y otras no tanto, pero cuando hago la cuenta de lo que valió la pena, ahí estás.\n\nFeliz Navidad. Que el que viene nos encuentre igual de cerca." },

  { g: "De corazón", n: "Para la familia", t: "Feliz Navidad de nuestra casa a la suya",
    m: "Hay regalos que se abren y hay regalos que se comparten. Este es de los segundos: para la mesa, para la sobremesa, para cuando ya están todos juntos y nadie se quiere levantar.\n\nQue no les falte eso este año." },

  { g: "De corazón", n: "Que nunca te falte", t: "Que nunca te falte quien te espere",
    m: "Ni la silla guardada en la mesa, ni la llamada de buenas noches, ni alguien que se alegre de verte llegar.\n\nEso vale más que cualquier cosa que quepa en una caja. Feliz Navidad." },

  { g: "De corazón", n: "Para agradecer", t: "Gracias, de verdad",
    m: "Este año no habría sido el mismo sin ti. Esto es apenas un detalle, pero va con toda la intención de decirte lo que a veces no se dice.\n\nQue tengas una Navidad tranquila y un año que te devuelva todo lo que das." },

  { g: "De corazón", n: "Para alguien querido", t: "Porque me acordé de ti",
    m: "No es una fecha, ni un compromiso, ni porque tocaba. Simplemente te vi en la lista y supe que esto te iba a gustar.\n\nFeliz Navidad. Ojalá nos veamos pronto." },

  { g: "De corazón", n: "A la distancia", t: "Aunque este año no nos veamos",
    m: "La distancia es un detalle. Estás en la lista de siempre, en los pendientes de siempre y en el cariño de siempre.\n\nQue tengas una Navidad hermosa. Te mandamos un pedacito de nuestra mesa." },

  // ------------------------------------------------------------- empresas
  { g: "Para empresas", n: "A clientes", t: "Gracias por su confianza este año",
    m: "Detrás de cada proyecto que hicimos juntos este año hubo decisiones suyas que nos permitieron trabajar con tranquilidad. Eso no se da por sentado y no lo damos por sentado.\n\nLes deseamos una Navidad en paz y un año nuevo con buenos números y mejores motivos." },

  { g: "Para empresas", n: "Al equipo", t: "Esto lo construimos entre todos",
    m: "El año se midió en metas, pero se sostuvo en días largos, en juntas que se alargaron y en gente que levantó la mano cuando hacía falta.\n\nGracias por ponerle el hombro. Que estas fiestas sean de descanso de verdad, del que no revisa el celular." },

  { g: "Para empresas", n: "A proveedores", t: "Gracias por responder siempre",
    m: "Trabajar con alguien que cumple lo que promete vale más de lo que cabe en una orden de compra. Este año nos lo demostraron varias veces.\n\nFeliz Navidad y excelente cierre de año. Seguimos contando con ustedes." },

  { g: "Para empresas", n: "Institucional", t: "Felices fiestas de parte de todo el equipo",
    m: "Cerramos un año de trabajo compartido y queremos agradecerle la oportunidad de haber sido parte de él.\n\nLe deseamos a usted y a su familia unas fiestas tranquilas y un año nuevo lleno de buenos proyectos." },

  // ----------------------------------------------------------- divertidos
  { g: "Divertidos", n: "Se desaparecen", t: "Advertencia: se desaparecen",
    m: "Nadie sabe cómo. Las dejas en la mesa, te volteas tantito, y la caja ya pesa la mitad.\n\nNosotros ya te avisamos. Tú sabrás dónde las escondes.\n\nFeliz Navidad." },

  { g: "Divertidos", n: "Entre hermanos", t: "Pueden ocasionar problemas entre hermanos",
    m: "Esta caja no alcanza para todos y alguien va a contar cuántas se comió el otro. Pasa en las mejores familias.\n\nTe la damos de todos modos, con mucho cariño y cero responsabilidad.\n\nFeliz Navidad, y que gane el más rápido." },

  { g: "Divertidos", n: "No las compartas", t: "No las compartas. Es un consejo",
    m: "Las vas a abrir pensando que son para todos. No lo son. Para cuando te des cuenta ya te acabaste la mitad y vas a tener que explicarlo.\n\nMejor cómetelas en paz y luego nos cuentas.\n\nFelices fiestas." },

  // ------------------------------------------------------------------ fe
  { g: "De fe", n: "De fe", t: "Que la paz de esta Navidad se quede en tu casa",
    m: "Que el Niño Dios les traiga salud, unión y la tranquilidad de saberse acompañados. Que lo que este año costó, el que viene lo devuelva multiplicado.\n\nCon nuestras oraciones y nuestro cariño." },

  { g: "De fe", n: "Nacó en lo sencillo", t: "Lo más grande nació en lo más sencillo",
    m: "No hubo lugar en la posada, ni lujos, ni nada de lo que uno esperaría. Y aun así esa noche cambió todo.\n\nQue esta Navidad te recuerde que lo bueno casi nunca llega como uno lo imaginó, pero llega." },

  { g: "De fe", n: "Bendiciones", t: "Que Dios bendiga tu casa y a los que viven en ella",
    m: "Que no falte el pan en tu mesa, ni la salud en los tuyos, ni la fe en los días en que cuesta tenerla.\n\nFeliz Navidad. Vas en nuestras oraciones." },

  { g: "De fe", n: "Gracias a Dios", t: "Gracias a Dios por un año más juntos",
    m: "Por lo que se nos dio y por lo que se nos cuidó, aunque no siempre lo hayamos visto en el momento.\n\nQue esta Navidad nos encuentre agradecidos, y que el año que viene nos halle igual de unidos." }
];
window.TEL = "5218180297400";
