// Banco de preguntas multiple choice para la seccion Q&A.
// Armado a mano a partir del Cuadernillo 2026 (CUADERNILLO-2026.pdf).
//
// Cada pregunta: (articulo, titulo, enunciado, correcta, [3 distractores], explicacion).
// `articulo` puede ser "" cuando el contenido no corresponde a un articulo puntual;
// `titulo` es el rotulo/seccion del cuadernillo donde esta el dato.
// Las opciones se mezclan al armar el examen (js/qa.js), asi que la correcta
// se carga siempre primera.

const PREGUNTAS_QA = [];

const _contadores = {};

function crearTema(tema, prefijo) {
  return function (articulo, titulo, pregunta, correcta, distractores, explicacion) {
    const n = (_contadores[prefijo] = (_contadores[prefijo] || 0) + 1);
    PREGUNTAS_QA.push({
      id: `${prefijo}-${n}`,
      tema,
      articulo,
      titulo,
      pregunta,
      opciones: [correcta].concat(distractores),
      correcta: 0,
      explicacion,
    });
  };
}

// ---------------------------------------------------------------- Tema I
(function () {
  const q = crearTema("Tema I — Derecho Constitucional", "t1");

  q("Art. 31 C.N.", "Supremacía de la Constitución",
    "¿Qué artículo de la Constitución Nacional consagra expresamente la supremacía constitucional?",
    "El artículo 31",
    ["El artículo 28", "El artículo 5", "El artículo 110"],
    "El artículo 31 establece la supremacía de la Constitución y del Derecho Federal sobre el Derecho Provincial.");

  q("Art. 28 C.N.", "Supremacía de la Constitución",
    "¿Qué consagra el artículo 28 de la Constitución Nacional?",
    "La inalterabilidad de las normas constitucionales por las leyes que reglamenten su ejercicio",
    ["La inviolabilidad del domicilio y de la correspondencia frente a toda intervención estatal", "La forma representativa republicana federal de gobierno de la Nación Argentina", "La competencia originaria y exclusiva de la Corte Suprema en causas provinciales"],
    "Las normas constitucionales no deben ser modificadas, desvirtuadas o desnaturalizadas por las leyes que reglamentan su ejercicio.");

  q("", "Clases de Constitución",
    "¿Cómo se define a la Constitución rígida?",
    "La que no se puede modificar sino mediante procedimientos diferentes a los de la legislación común",
    ["La que admite su enmienda por el mismo mecanismo empleado para la legislación común", "La que carece de unidad por estar dispersa en distintas normas escritas y no escritas", "La que deriva de un acuerdo o transacción entre un órgano estatal y la comunidad"],
    "La Constitución flexible es la que se modifica con el mismo mecanismo de la legislación común; la rígida exige un procedimiento distinto.");

  q("", "Clases de Constitución",
    "¿Cuándo se considera que una Constitución es «otorgada»?",
    "Cuando un órgano estatal la establece unilateralmente",
    ["Cuando deriva de un acuerdo entre un órgano estatal y la comunidad", "Cuando emana del poder constituyente radicado en el pueblo", "Cuando es totalmente no escrita"],
    "La pactada deriva de un acuerdo o transacción; la impuesta se supone emanada del poder constituyente del pueblo.");

  q("", "Caracterización de la Constitución Argentina",
    "¿Cuál de los siguientes NO está entre los contenidos pétreos que el cuadernillo atribuye a la Constitución Argentina?",
    "La separación absoluta entre Iglesia y Estado",
    ["La democracia como forma de estado, basada en el respeto de la dignidad del hombre", "El federalismo como forma de estado, que descentraliza el poder con base territorial", "La forma republicana de gobierno, como opuesta a la monarquía"],
    "Los contenidos pétreos citados son: democracia, federalismo, forma republicana y la confesionalidad del estado (reconocimiento de la Iglesia Católica).");

  q("", "Partes dogmática y orgánica",
    "¿Qué artículos comprende la parte orgánica de la Constitución Nacional según el cuadernillo?",
    "Del artículo 44 al 129",
    ["Del artículo 1 al 35", "Del artículo 36 al 43", "Del artículo 75 al 129"],
    "La parte dogmática abarca los arts. 1 al 35 y los nuevos derechos y garantías (36 al 43); la orgánica se extiende del 44 al 129.");

  q("Art. 1 C.N.", "El Estado Federal",
    "¿Qué forma de gobierno adopta la Nación Argentina según el artículo 1 de la Constitución Nacional?",
    "Representativa republicana federal",
    ["Parlamentaria republicana unitaria", "Presidencialista democrática confederal", "Representativa monárquica federal"],
    "El artículo 1 dispone: «La Nación Argentina adopta para su gobierno la forma representativa republicana federal».");

  q("", "Relaciones de la estructura federal",
    "¿Cuáles son las tres relaciones fundamentales de la estructura federal argentina?",
    "Subordinación, participación y coordinación",
    ["Delegación, representación y control", "Autonomía, supremacía y cooperación", "Subordinación, jerarquía y concurrencia"],
    "La participación se institucionaliza a través del Senado y la coordinación delimita competencias (art. 121 C.N.).");

  q("Arts. 126 y 127 C.N.", "Reparto de competencias",
    "¿Cuál de estas facultades tienen PROHIBIDA las provincias?",
    "Acuñar moneda y establecer aduanas provinciales",
    ["Dictar su propia Constitución y asegurar su régimen municipal y educación primaria", "Establecer impuestos directos y dictar leyes procesales propias", "Aprobar su presupuesto y organizar su administración de justicia local"],
    "Dictar su Constitución, establecer impuestos directos y dictar leyes procesales son competencias exclusivas de las provincias.");

  q("Art. 126 C.N.", "Reparto de competencias",
    "¿Qué competencia excepcional tienen las provincias?",
    "Formar ejércitos y armar buques ante invasión exterior o peligro inminente",
    ["Declarar la guerra a otra provincia en caso de conflicto limítrofe grave", "Dictar impuestos directos por tiempo determinado cuando la seguridad común lo exija", "Declarar el estado de sitio en su territorio con aprobación de su Legislatura"],
    "También pueden dictar códigos de fondo hasta tanto los sancione el Congreso.");

  q("Art. 75 inc. 2 C.N.", "Reparto de competencias",
    "¿Qué competencia excepcional tiene el Estado Federal?",
    "Dictar impuestos directos por tiempo determinado cuando la defensa, seguridad común y bien general lo exijan",
    ["Dictar los códigos de fondo hasta tanto los sancione el Congreso, por razones de urgencia", "Armar buques de guerra en caso de invasión exterior o peligro inminente, dando cuenta luego", "Asegurar el régimen municipal y la educación primaria en las provincias"],
    "La regla es que los impuestos directos son provinciales; la Nación puede imponerlos excepcionalmente y por tiempo determinado.");

  q("Arts. 5, 122 y 123 C.N.", "Las Provincias",
    "Según el cuadernillo, ¿cómo se caracteriza a las provincias argentinas?",
    "No son soberanas, pero sí autónomas",
    ["Son soberanas y autónomas", "Son entidades autárquicas descentralizadas administrativamente", "Son soberanas pero no autónomas"],
    "La soberanía es el poder jurídico supremo del Estado; las provincias tienen autonomía respetando la supremacía de la Constitución Federal.");

  q("Art. 5 C.N.", "Los Municipios",
    "¿Qué artículo de la Constitución Nacional alude a que cada provincia puede dictar su régimen municipal?",
    "El artículo 5",
    ["El artículo 129", "El artículo 31", "El artículo 75"],
    "La reforma de 1994 zanjó la cuestión de la autonomía municipal, que la Corte había pasado de considerar autarquía a autonomía.");

  q("Art. 129 C.N.", "La Ciudad de Buenos Aires",
    "¿Cómo es elegido el Jefe de Gobierno de la Ciudad de Buenos Aires según el artículo 129?",
    "Directamente por el pueblo de la ciudad",
    ["Por el Presidente de la Nación", "Por el Senado de la Nación", "Por el Congreso con mayoría especial"],
    "La Ciudad es una entidad sui géneris: no es provincia, pero tiene régimen de gobierno autónomo y se sitúa entre las provincias y los municipios.");

  q("", "Declaraciones, derechos y garantías",
    "¿Qué son las «garantías» en la parte dogmática de la Constitución?",
    "Mecanismos o instrumentos especiales que la Constitución crea para amparar el ejercicio de ciertos derechos fundamentales",
    ["Afirmaciones expresas que adoptan una postura política en cuestiones fundamentales del Estado", "Facultades que se reconocen a sus titulares y que pueden exigirse coactivamente al Estado", "Normas que reglamentan los derechos de modo absoluto e irrestricto para todos los habitantes"],
    "Las declaraciones adoptan posturas políticas (ej. art. 1 y 2); los derechos son facultades exigibles; las garantías protegen esos derechos.");

  q("", "Límites en el sistema de derecho",
    "Según el cuadernillo, los derechos que reconoce la Constitución son:",
    "Relativos: pueden ser limitados o restringidos si la limitación resulta razonable",
    ["Absolutos: no pueden ser limitados ni reglamentados por ninguna ley del Congreso", "Absolutos, salvo durante el estado de sitio, en que quedan suspendidos totalmente", "Relativos, pero solo pueden limitarse mediante decreto del Poder Ejecutivo Nacional"],
    "Se gozan y ejercen conforme a las leyes que los reglamentan, siempre que la restricción sea razonable.");

  q("Art. 18 C.N.", "La libertad corporal en el proceso penal",
    "En el proceso de tipo acusatorio, propio de los regímenes liberales y democráticos:",
    "El acusado, en principio, goza de libertad y la prisión preventiva es excepcional",
    ["La detención es la regla y la libertad una excepción que depende de la voluntad del juez", "La prisión preventiva es obligatoria para todo delito hasta que se dicte la sentencia", "El acusado no tiene derecho a ser oído hasta que el fiscal complete la investigación"],
    "En el proceso inquisitivo ocurre lo contrario: la detención es la regla.");

  q("Art. 292 LP 1851-O", "La libertad corporal en el proceso penal",
    "Según el art. 292 de la ley procesal 1851-O, ¿cuánto puede durar como máximo la detención solicitada por el Fiscal?",
    "Setenta y dos (72) horas",
    ["Veinticuatro (24) horas", "Cuarenta y ocho (48) horas", "Diez (10) días"],
    "La detención sirve para preparar y fundar en audiencia el pedido de prisión preventiva.");

  q("Ley 24.390", "La libertad corporal en el proceso penal",
    "Como regla general, ¿cuál es el límite máximo de la prisión preventiva establecido por la Ley 24.390?",
    "Dos años, con prórrogas cuando se reúnan los extremos legales",
    ["Seis meses improrrogables, vencidos los cuales el procesado recupera su libertad", "Un año, sin posibilidad de prórroga alguna por parte del juez de la causa", "Cinco años, con prórrogas automáticas hasta el dictado de la sentencia definitiva"],
    "Si transcurre el plazo o sus prórrogas sin sentencia condenatoria, el procesado recupera la libertad.");

  q("Art. 18 C.N.", "El principio de inocencia",
    "¿Qué principio constitucional implica que antes de un fallo que declare la culpabilidad una persona es inocente?",
    "El principio de inocencia (art. 18)",
    ["El principio de legalidad (art. 19)", "El principio de igualdad (art. 16)", "El principio de propiedad (art. 17)"],
    "De este principio deriva el carácter preventivo, cautelar y provisional de toda restricción de la libertad antes de la condena.");

  q("Art. 18 C.N.", "La ley y el juicio previo en materia penal",
    "Según el art. 18, nadie puede ser penado sin juicio previo fundado en:",
    "Ley anterior al hecho del proceso",
    ["Ley posterior al hecho del proceso", "Decreto del Poder Ejecutivo", "Resolución administrativa"],
    "De aquí se deriva la irretroactividad de la ley penal (leyes ex post facto prohibidas).");

  q("Arts. 35 y 36 C.P.", "Inviolabilidad del domicilio",
    "En la provincia de San Juan, ¿quién ordena el allanamiento de moradas mediante resolución escrita y fundada?",
    "El Juez",
    ["La autoridad policial", "El Fiscal", "El Ministro de Gobierno"],
    "Constitucionalmente, domicilio incluye el asiento de los negocios y la residencia ocasional, como la habitación de un hotel.");

  q("Art. 37 C.P.", "Inviolabilidad de correspondencia y papeles privados",
    "¿Qué artículo de la Constitución Provincial de San Juan protege los papeles particulares y la correspondencia epistolar?",
    "El artículo 37",
    ["El artículo 32", "El artículo 40", "El artículo 41"],
    "Solo pueden registrarse conforme a leyes que se establezcan para casos limitados y concretos.");

  q("Art. 17 C.N.", "El derecho de propiedad",
    "¿Qué dice el artículo 17 sobre la propiedad?",
    "Es inviolable y nadie puede ser privado de ella sino en virtud de sentencia fundada en ley",
    ["Es absoluta y no puede ser reglamentada ni limitada por ley alguna", "Puede ser privada por decreto del Poder Ejecutivo en caso de emergencia pública", "Solo puede pertenecer a personas físicas, nunca a asociaciones ni sociedades"],
    "El sujeto activo puede ser una persona física o jurídica y el término alcanza a todos los bienes susceptibles de valor económico.");

  q("Art. 43 C.N.", "Hábeas corpus",
    "¿En qué artículo la reforma de 1994 se refirió al Hábeas Corpus de manera expresa por primera vez?",
    "Artículo 43",
    ["Artículo 18", "Artículo 14 bis", "Artículo 75"],
    "La reglamentación del procedimiento sumario se hizo por Ley Nacional 23.098.");

  q("Art. 32 C.P.", "Hábeas corpus",
    "Según el art. 32 de la Constitución Provincial, ¿dentro de qué plazo el Juez examina el caso de hábeas corpus y hace cesar la afectación?",
    "Dentro de las veinticuatro horas",
    ["Dentro de las setenta y dos horas", "Dentro de los tres días hábiles", "Dentro de las cuarenta y ocho horas"],
    "La acción puede instaurarse sin formalidad procesal y por terceros sin necesidad de mandato.");

  q("Art. 18 C.N.", "Hábeas corpus",
    "¿En qué situación NO es necesaria la orden escrita de un juez para detener a una persona?",
    "Cuando es sorprendida en flagrante delito",
    ["Cuando existe una simple sospecha", "Cuando lo pide un particular", "Nunca; siempre se necesita orden escrita"],
    "La aprehensión en flagrancia está prevista en el art. 294 LP 1851-O; la autoridad debe comunicarlo de inmediato al juez y al Ministerio Público Fiscal.");

  q("Art. 18 C.N.", "Hábeas corpus",
    "Según el último párrafo del art. 18, las cárceles de la Nación serán:",
    "Sanas y limpias, para seguridad y no para castigo de los reos",
    ["Seguras y reformatorias", "Públicas y de acceso libre", "Administradas exclusivamente por el Poder Judicial"],
    "El agravamiento de las condiciones de la detención habilita el hábeas corpus.");

  q("Art. 43 C.N.", "El Amparo",
    "¿Cuál de los siguientes sujetos está legitimado para el amparo colectivo del segundo párrafo del art. 43?",
    "El afectado, el defensor del pueblo y las asociaciones registradas",
    ["El Ministerio Público y las asociaciones, pero no el afectado ni el defensor del pueblo", "Únicamente el defensor del pueblo, en representación de los intereses colectivos", "Cualquier persona, sin restricciones ni necesidad de registro ante la autoridad"],
    "El primer párrafo del art. 43 reconoce la acción a «toda persona»; el segundo legitima al afectado, al defensor del pueblo y a las asociaciones.");

  q("Art. 40 C.P.", "El Amparo",
    "¿En qué artículo de la Constitución Provincial (1986) se contempla el amparo?",
    "Artículo 40",
    ["Artículo 32", "Artículo 37", "Artículo 41"],
    "A nivel nacional fue incorporado expresamente en el art. 43 con la reforma de 1994.");

  q("Art. 41 C.P.", "Amparo por mora",
    "¿Qué artículo de la Constitución Provincial respalda el amparo por mora?",
    "Artículo 41",
    ["Artículo 32", "Artículo 35", "Artículo 40"],
    "Permite demandar la ejecución inmediata de actos que un funcionario o entidad pública rehúsa cumplir.");

  q("Art. 43 C.N.", "Secreto periodístico",
    "¿Qué secreto protege específicamente el tercer párrafo del art. 43 de la Constitución Nacional?",
    "El secreto de las fuentes de información periodística",
    ["El secreto médico respecto de los datos de salud de los pacientes", "El secreto profesional del abogado respecto de los datos de sus clientes", "El secreto bancario respecto de los depósitos de los ahorristas"],
    "El secreto profesional de otros oficios tiene albergue implícito en el artículo 19.");

  q("Art. 18 C.N.", "El debido proceso",
    "¿Cómo se denomina la violación al derecho de defensa que torna nulo el proceso?",
    "Indefensión",
    ["Prevaricato", "Caducidad", "Preclusión"],
    "Para Bidart Campos el debido proceso es la «oportunidad o posibilidad suficiente de participar con utilidad en el proceso».");

  q("", "División de poderes",
    "¿Cuál es la finalidad básica de la división de poderes según el cuadernillo?",
    "Evitar la concentración del poder que degenera en tiranía y resguardar la libertad de las personas",
    ["Aumentar la eficiencia de la administración concentrando las decisiones en un solo órgano", "Permitir que el Poder Ejecutivo disuelva el Congreso cuando éste obstaculice su gestión", "Subordinar el Poder Judicial al Legislativo para controlar las decisiones de los jueces"],
    "Es un rasgo esencial de toda República Representativa y debe asegurarse en la Nación, las Provincias y los Municipios.");

  q("", "Poder Legislativo. Estructura y funciones",
    "¿Cuántos senadores tiene cada provincia y la Ciudad de Buenos Aires?",
    "Tres",
    ["Dos", "Cuatro", "Uno por cada 500.000 habitantes"],
    "El Senado representa igualitariamente a las provincias (igualdad federal); Diputados representa proporcionalmente a la población.");

  q("", "Poder Legislativo. Estructura y funciones",
    "¿Cuál es el mandato de los diputados nacionales y cómo se renuevan?",
    "Duran 4 años y se renuevan por mitad cada bienio",
    ["Duran 6 años y se renuevan por tercios cada dos años", "Duran 4 años y se renuevan totalmente", "Duran 2 años y se renuevan cada año"],
    "Los senadores duran 6 años y se renuevan a razón de una tercera parte cada dos años.");

  q("", "Poder Legislativo. Estructura y funciones",
    "¿Qué edad se requiere para ser senador nacional?",
    "30 años",
    ["25 años", "35 años", "18 años"],
    "Para diputado se requieren 25 años y 4 de ciudadanía en ejercicio; para senador, 30 años y 6 de ciudadanía.");

  q("Art. 77 C.N.", "Poder Legislativo. Estructura y funciones",
    "¿Qué proyectos tienen iniciativa exclusiva de la Cámara de Diputados?",
    "Los de contribuciones y reclutamiento de tropas",
    ["Los de coparticipación federal", "Los de crecimiento armónico de la Nación", "Los de tratados internacionales"],
    "El Senado tiene iniciativa exclusiva en coparticipación y en lo conducente al crecimiento armónico de la Nación y sus Regiones.");

  q("", "Poder Legislativo. Estructura y funciones",
    "¿Cuándo vota el Vicepresidente de la Nación como presidente del Senado?",
    "Solo en caso de empate en la votación",
    ["Siempre que lo desee", "Nunca", "Solo en asuntos de política exterior"],
    "El vicepresidente preside el Senado pero no tiene voto, salvo desempate.");

  q("Art. 87 C.N.", "Poder Ejecutivo. Estructura y funciones",
    "¿Cómo es el Poder Ejecutivo de la Nación según el artículo 87?",
    "Unipersonal: lo desempeña un ciudadano con el título de Presidente de la Nación Argentina",
    ["Colegiado: lo integran el Presidente de la Nación y el Jefe de Gabinete de Ministros", "Compartido entre el Presidente y el Vicepresidente, que ejercen funciones coordinadas", "Integrado por el Presidente de la Nación y por la totalidad de los ministros secretarios"],
    "Ni el Vicepresidente, ni el Jefe de Gabinete ni los ministros integran el Poder Ejecutivo.");

  q("", "Poder Ejecutivo. Estructura y funciones",
    "Tras la reforma de 1994, ¿cuánto dura el mandato presidencial y cuántas reelecciones consecutivas admite?",
    "4 años, con una sola reelección consecutiva",
    ["6 años de mandato, sin posibilidad de reelección inmediata", "4 años de mandato, con reelección indefinida de manera consecutiva", "6 años de mandato, con una reelección consecutiva admitida"],
    "Pueden volver a ser elegidos luego del intervalo de un período.");

  q("Art. 101 C.N.", "Poder Ejecutivo. Estructura y funciones",
    "¿Cuál es el único funcionario del Gabinete Nacional que puede ser removido por moción de censura?",
    "El Jefe de Gabinete de Ministros",
    ["El Presidente", "Cualquier ministro secretario", "El Vicepresidente"],
    "El Jefe de Gabinete ejerce la administración general del país con responsabilidad política ante el Congreso.");

  q("", "Poder Ejecutivo. Estructura y funciones",
    "Según el cuadernillo, ¿en qué caso se realiza una segunda vuelta electoral para Presidente y Vicepresidente?",
    "Si la fórmula más votada no logra más del 45 %, o logrando más del 40 % no supera por más de 10 puntos a la segunda",
    ["Si ninguna fórmula supera el 50 % de los votos válidamente emitidos en la primera vuelta", "Si la fórmula más votada no llega al 60 % de los votos en la primera vuelta", "Siempre que se presenten más de dos fórmulas en la elección presidencial"],
    "La elección directa y la doble vuelta democratizan el poder público y buscan una mayoría significativa.");

  q("", "Poder Ejecutivo. Estructura y funciones",
    "¿En qué materias NO pueden dictarse decretos de necesidad y urgencia?",
    "Penal, tributaria, electoral y régimen de partidos políticos",
    ["Civil, comercial y laboral, por ser materias propias de los códigos de fondo", "Administrativa y de emergencia, por ser materias propias del Poder Ejecutivo", "Defensa y relaciones exteriores, por ser materias propias del Congreso"],
    "Solo pueden dictarse si el Congreso no pudiere seguir los trámites ordinarios de sanción de las leyes.");

  q("Arts. 53, 59 y 60 C.N.", "Poder Legislativo. Estructura y funciones",
    "¿Qué instituto de control parlamentario regulan los artículos 53, 59 y 60 de la Constitución Nacional?",
    "El Juicio Político",
    ["La moción de censura", "El pedido de informes", "La Auditoría General de la Nación"],
    "Los pedidos de informes están en el art. 71, la Auditoría en el art. 85 y la moción de censura en el art. 101.");

  q("Art. 75 inc. 22 y 24 C.N.", "Orden de prelación de las normas",
    "Tras la reforma de 1994, ¿qué normas ocupan el rango más alto en la jerarquía normativa?",
    "La Constitución Nacional y los instrumentos internacionales de derechos humanos del art. 75 inc. 22 y 24",
    ["Solo la Constitución Nacional, con exclusión de los tratados internacionales", "Las leyes de la Nación y todos los tratados celebrados con potencias extranjeras", "Las leyes provinciales, por ser dictadas por las autonomías locales"],
    "Por debajo están las leyes de la Nación y los demás tratados, y luego las leyes provinciales.");

  q("", "Poder Judicial. Estructura y competencia",
    "¿Cómo se designa a los miembros de la Corte Suprema de Justicia de la Nación?",
    "El Presidente los nombra con acuerdo del Senado por dos tercios de los miembros presentes, en sesión pública",
    ["El Congreso por mayoría simple de ambas cámaras reunidas en asamblea", "El Consejo de la Magistratura por concurso público de oposición y antecedentes", "El pueblo de la Nación por elección directa en comicios nacionales"],
    "Este mecanismo fue incorporado por la reforma de 1994.");

  q("", "Competencia de la Corte Suprema",
    "¿Cuál de estas causas corresponde a la competencia ORIGINARIA de la Corte Suprema?",
    "Las causas en que es parte una provincia con otra provincia, y las concernientes a embajadores acreditados",
    ["El recurso extraordinario por sentencia arbitraria contra tribunales provinciales", "El recurso de queja por denegación del recurso extraordinario federal", "Las apelaciones ordinarias en causas donde el Estado es parte y el monto es elevado"],
    "El recurso extraordinario y el de queja son competencia por apelación extraordinaria.");

  q("Art. 114 C.N.", "Consejo de la Magistratura",
    "¿Qué funciones tiene el Consejo de la Magistratura según el artículo 114?",
    "La selección de los magistrados y la administración del Poder Judicial",
    ["Juzgar a los jueces de la Corte Suprema y aplicar la sanción de destitución", "Dictar sentencias en las causas federales que lleguen en grado de apelación", "Designar al Procurador General de la Nación con acuerdo del Senado"],
    "Entre sus atribuciones está emitir ternas vinculantes para nombrar magistrados inferiores.");

  q("Art. 115 C.N.", "Jurado de Enjuiciamiento",
    "¿Qué efecto tiene el fallo del Jurado de Enjuiciamiento?",
    "Es irrecurrible y solo destituye al acusado, que queda sujeto a juicio ante los tribunales ordinarios",
    ["Es apelable ante la Corte Suprema, que puede revisar la destitución dispuesta", "Impone penas de prisión al magistrado removido, además de la destitución", "Solo suspende al juez por ciento ochenta días, sin destituirlo del cargo"],
    "Se archivan las actuaciones y se repone al juez si transcurren 180 días desde la apertura del procedimiento sin fallo.");
})();

// ---------------------------------------------------------------- Tema II (parte 1)
(function () {
  const q = crearTema("Tema II — Constitución Provincial", "t2");

  q("Art. 1 C.P.", "Sistema político",
    "¿Cómo define el artículo 1 de la Constitución de San Juan el sistema bajo el cual está organizada la Provincia?",
    "Republicano, democrático, representativo y participativo",
    ["Republicano, democrático, federal y unitario, con poder compartido con la Nación", "Monárquico, representativo y participativo, bajo la Constitución Nacional", "Republicano, aristocrático y representativo, con soberanía popular limitada"],
    "San Juan es un Estado autónomo e inescindible de la República Argentina, que reconoce a la Constitución Nacional como Ley Suprema.");

  q("Art. 3 C.P.", "Sede de las autoridades",
    "¿Dónde deben funcionar en forma permanente las autoridades que ejercen el gobierno central?",
    "En la Ciudad de San Juan, Capital de la Provincia",
    ["En la ciudad que fije cada gobernador", "En Rawson", "En cualquiera de los departamentos, rotativamente"],
    "Solo por razones extraordinarias pueden funcionar en otro lugar, y la ley debe fijar la sede en esos casos.");

  q("Art. 6 C.P.", "Modificación de límites",
    "¿Qué se requiere para modificar los límites territoriales de la Provincia?",
    "Ley con tres cuartas partes de los diputados y consulta popular",
    ["Ley sancionada por mayoría simple de la Cámara de Diputados, sin consulta popular", "Decreto del Gobernador con acuerdo previo de la Corte de Justicia de la Provincia", "Ley con el voto de los dos tercios de la Cámara y ratificación del Congreso Nacional"],
    "Sin esos recaudos la ley no será promulgada.");

  q("Art. 7 C.P.", "División política",
    "¿En cuántos departamentos se divide el territorio de la Provincia de San Juan?",
    "Diecinueve",
    ["Quince", "Dieciocho", "Veinte"],
    "Sus límites no pueden ser modificados sin previa consulta popular en los departamentos involucrados.");

  q("Art. 8 C.P.", "Responsabilidad del Estado",
    "Según el artículo 8, ¿qué ocurre si la Cámara de Diputados no arbitra la forma de pago de una condena contra la Provincia en el término de tres meses de ejecutoriada la sentencia?",
    "La sentencia puede ser ejecutada en la forma ordinaria",
    ["La condena queda sin efecto y se extingue la obligación de pago de la Provincia", "Se traba embargo preventivo automático sobre las rentas y bienes de la Provincia", "El Gobernador debe pagar la condena mediante decreto dentro de los treinta días"],
    "La Provincia puede ser demandada sin autorización previa ni privilegio alguno, pero no puede trabarse embargo preventivo sobre sus bienes o rentas.");

  q("Art. 9 C.P.", "Publicidad de los actos de gobierno",
    "¿Qué provoca la violación a la publicidad de los actos de gobierno?",
    "La nulidad absoluta del acto administrativo",
    ["La nulidad relativa del acto", "Una simple sanción administrativa", "La caducidad del acto a los 30 días"],
    "Sin perjuicio de las responsabilidades políticas, civiles y penales de los intervinientes.");

  q("Art. 10 C.P.", "Manifestación de bienes",
    "¿Ante quién deben manifestar sus bienes los funcionarios de los poderes Legislativo, Ejecutivo y Judicial?",
    "Ante la escribanía mayor de gobierno",
    ["Ante la Corte de Justicia de la Provincia, que lleva el registro respectivo", "Ante el Tribunal de Cuentas, por su función de control del patrimonio público", "Ante la Cámara de Diputados, en sesión reservada de cada período ordinario"],
    "Intendentes y concejales lo hacen conforme a lo establecido en la sección IX.");

  q("Art. 11 C.P.", "Declaración de inconstitucionalidad",
    "Según el artículo 11, los jueces deben declarar la inconstitucionalidad de una norma contraria a la Constitución:",
    "En juicio, aun cuando no hubiere sido requerido por parte",
    ["Solo si lo pide expresamente una de las partes", "Únicamente la Corte de Justicia puede declararla", "Solo mediante dictamen del Fiscal de Estado"],
    "La inconstitucionalidad declarada por la Corte de Justicia debe comunicarse formal y fehacientemente a los poderes públicos correspondientes.");

  q("Art. 12 C.P.", "Derechos implícitos",
    "¿Qué establece el artículo 12 sobre la enumeración de derechos?",
    "No debe entenderse como negación de otros derechos no enumerados que fluyan del espíritu de la Constitución",
    ["Que solo valen los derechos y garantías expresamente enumerados en la Constitución", "Que los derechos pueden ser suspendidos por ley cuando existan razones de emergencia", "Que solo se reconocen los derechos que surjan de la Constitución Nacional"],
    "Los derechos implícitos deben fluir del espíritu de la Constitución provincial, de la nacional y de la Declaración Universal de los Derechos Humanos.");

  q("Art. 13 C.P.", "Intervención federal",
    "¿Qué carácter tienen los nombramientos realizados durante una intervención federal?",
    "Transitorio",
    ["Permanente", "Vitalicio", "Revocable solo por el Poder Judicial"],
    "La intervención debe circunscribirse a los actos determinados en la ley que la dispone y a los derechos y garantías de la Constitución.");

  q("Art. 16 C.P.", "Derechos individuales",
    "Según el artículo 16, ¿qué NO excusa la responsabilidad de la autoridad que somete a alguien a tortura?",
    "La obediencia debida",
    ["El estado de necesidad", "La orden verbal de un superior", "El consentimiento de la víctima"],
    "El Estado repara los daños provocados y también es responsable la autoridad que por negligencia produzca efectos similares.");

  q("Art. 17 C.P.", "Derechos individuales",
    "Los funcionarios cuya culpabilidad se demuestre en delitos de tortura o tratos crueles quedan:",
    "Exonerados y de por vida inhabilitados en la función pública",
    ["Suspendidos en sus cargos por diez años, con pérdida de los haberes del período", "Sancionados únicamente con multa, sin pérdida del cargo en la función pública", "Inhabilitados por cinco años para el desempeño de cargos en la función pública"],
    "Sin perjuicio de las penas que por ley les correspondan.");

  q("Art. 21 C.P.", "Libertad religiosa",
    "Según el artículo 21, la religión pertenece:",
    "A la órbita privada del individuo, y nadie está obligado a declarar su religión",
    ["Al ámbito público del Estado, que puede exigir su declaración a los habitantes", "A la órbita exclusiva de la Iglesia Católica, reconocida por la Provincia", "Al ámbito de las organizaciones sociales, que la registran para sus afiliados"],
    "El Estado garantiza el libre ejercicio de cultos que no se opongan a la moral pública ni a la organización política y civil.");

  q("Art. 22 C.P.", "Defensa de los derechos",
    "En el caso de incorporarse la pena de muerte en la legislación nacional, ¿qué se requiere para su aplicación en la Provincia?",
    "Pronunciamiento unánime de los miembros de la Corte de Justicia",
    ["Aprobación por mayoría absoluta de la Cámara de Diputados de la Provincia", "Consulta popular obligatoria a todos los electores inscriptos en el padrón", "Decreto del Gobernador con acuerdo de sus ministros y dictamen del Fiscal de Estado"],
    "Los derechos solo pueden suprimirse por vía de penalidad con arreglo a la ley anterior al hecho y previa sentencia de juez competente.");

  q("Art. 25 C.P.", "Libertad de expresión",
    "Quien se considere afectado por informaciones inexactas o agraviantes en un medio de difusión y reciba negativa a su rectificación, ¿en qué plazo puede recurrir a la justicia?",
    "Dentro de los quince días posteriores a la fecha de la publicación o emisión",
    ["Dentro de los treinta días posteriores a la fecha de la publicación o emisión", "Dentro de los cinco días posteriores a la fecha de la publicación o emisión", "Dentro de los diez días hábiles posteriores a la fecha de la publicación o emisión"],
    "Transcurrido el plazo caduca el derecho; el trámite es sumarísimo. La crítica política, deportiva, literaria y artística no está sujeta al derecho de réplica.");

  q("Art. 26 C.P.", "Registro de personas e informática",
    "¿Qué derecho reconoce el artículo 26 a todo ciudadano respecto de los registros?",
    "Tomar conocimiento de lo que consta de él, de la finalidad de la información y exigir su rectificación y actualización",
    ["Solo consultar los registros públicos, sin poder pedir rectificación alguna", "Exigir la destrucción de cualquier registro que contenga datos sobre su persona", "Acceder únicamente a los registros policiales y de antecedentes penales"],
    "No se puede utilizar la informática para tratar datos sobre convicciones políticas, fe religiosa o vida privada, salvo fines estadísticos no identificables.");

  q("Art. 28 C.P.", "Medios de comunicación",
    "¿Qué prohíbe el artículo 28 respecto de los medios de comunicación?",
    "El monopolio y oligopolio por parte de entes públicos o privados",
    ["La propiedad privada de medios de comunicación por parte de personas físicas", "La transmisión de contenido político durante los períodos de campaña electoral", "La publicidad oficial en los medios gráficos, radiales y televisivos de la Provincia"],
    "El art. 29 aplica las normas del Código Penal a los delitos cometidos por cualquier medio de comunicación social.");

  q("Art. 30 C.P.", "Principio de inocencia",
    "¿Qué institución procesal queda abolida según el artículo 30?",
    "El sobreseimiento provisional",
    ["La prisión preventiva, que no puede aplicarse a ningún imputado en la Provincia", "La excarcelación, que queda reemplazada por la eximición de prisión obligatoria", "El juicio abreviado, que queda reemplazado por el juicio oral y público"],
    "Toda persona es inocente mientras no se declare su culpabilidad por sentencia firme de juez competente, dictada en debido proceso.");

  q("Art. 31 C.P.", "Detención de personas",
    "Según el artículo 31, la aprehensión, el arresto y la detención no pueden prolongarse por más de:",
    "Veinticuatro horas sin ser comunicadas al juez competente",
    ["Cuarenta y ocho horas sin ser comunicadas al juez competente y al Ministerio Público", "Setenta y dos horas sin ser comunicadas al juez competente y a un familiar", "Diez días sin ser comunicadas al juez competente, salvo flagrante delito"],
    "Tampoco se cumplen en cárceles públicas destinadas a penados, y deben informarse dentro de las veinticuatro horas a un familiar del detenido.");

  q("Art. 33 C.P.", "Defensa en juicio",
    "¿Por cuánto tiempo máximo puede incomunicarse a un detenido mediando resolución fundada del juez?",
    "Cuarenta y ocho horas",
    ["Veinticuatro horas", "Setenta y dos horas", "Cinco días"],
    "Nadie puede ser indagado en instancia policial o judicial sin asistencia letrada necesaria, y la confesión policial carece de valor probatorio en su contra.");

  q("Art. 34 C.P.", "Oralidad",
    "¿Qué establece el artículo 34 respecto del juicio?",
    "La Provincia propende al establecimiento del juicio oral y público",
    ["Que los juicios serán siempre escritos y reservados para proteger a las partes", "Que el juicio por jurados es obligatorio para todos los delitos graves", "Que el juicio será oral solamente en materia civil y comercial"],
    "Es una declaración programática dentro de las garantías de la Sección Primera.");

  q("Art. 35 C.P.", "Inviolabilidad del domicilio",
    "Según el artículo 35, ¿cómo se considera al domicilio?",
    "Como asilo",
    ["Como propiedad exclusiva", "Como bien público", "Como lugar de residencia oficial"],
    "El registro domiciliario requiere orden escrita de juez competente y presencia de representantes del Poder Judicial, contralor de su morador y testigo.");

  q("Art. 36 C.P.", "Allanamiento",
    "¿En qué horario se ejecuta el allanamiento de domicilio, salvo autorización expresa del juez?",
    "En horas de luz natural",
    ["En horas nocturnas", "A cualquier hora", "Solo entre las 8 y las 20"],
    "La orden debe ser expedida por autoridad judicial competente y con las formalidades de ley.");

  q("Art. 37 C.P.", "Inviolabilidad de papeles privados",
    "¿Qué ocurre con los papeles o comunicaciones obtenidos en contra de las leyes que regulan su registro?",
    "No pueden ser utilizados en procesos judiciales o administrativos",
    ["Pueden usarse como prueba indiciaria, valorada con criterio restrictivo por el juez", "Pueden usarse si el juez lo autoriza luego de su obtención y bajo reserva", "Solo pueden usarse en el fuero penal, pero no en el administrativo"],
    "Los papeles particulares y las comunicaciones de cualquier medio son inviolables.");
})();

// ---------------------------------------------------------------- Tema II (parte 2)
(function () {
  const q = crearTema("Tema II — Constitución Provincial", "t2");

  q("Art. 39 C.P.", "Cárceles",
    "Según el artículo 39, en las cárceles de la Provincia no existirán pabellones de castigo sino de:",
    "Corrección",
    ["Aislamiento", "Reflexión", "Seguridad"],
    "Tampoco se aplicarán sanciones que impliquen disminución de ración alimentaria, agua, retiro de ropa y abrigo o destrucción de bienes de los internos.");

  q("Art. 40 C.P.", "Acción de amparo",
    "¿Contra quiénes procede la acción de amparo del artículo 40?",
    "Contra actos u omisiones de autoridades públicas, de grupos organizados de personas y de particulares",
    ["Solo contra actos u omisiones de autoridades públicas y de sus agentes", "Solo contra actos u omisiones de particulares o grupos organizados de personas", "Únicamente contra leyes, decretos y ordenanzas de carácter general"],
    "Exige arbitrariedad o ilegalidad manifiesta, que se necesite reparación urgente y que la cuestión no deba o no pueda sustanciarse por otro proceso eficaz.");

  q("Art. 41 C.P.", "Amparo por mora",
    "¿Qué libra el juez en el amparo por mora, previa comprobación sumarísima de los hechos?",
    "Un mandamiento para exigir el cumplimiento inmediato del deber omitido",
    ["Una sentencia que declara la nulidad del acto administrativo omitido", "Una multa al funcionario que incumplió el deber a su cargo", "Un pedido de informes al Poder Ejecutivo sobre el expediente demorado"],
    "Procede por incumplimiento de un deber que una ley u ordenanza impone en forma expresa y determinada a un funcionario o entidad pública.");

  q("Art. 43 C.P.", "Responsabilidad funcional",
    "Quien en ejercicio de funciones públicas viola derechos o garantías de la Constitución es:",
    "Personalmente responsable de las consecuencias dañosas, sin perjuicio de la responsabilidad del Estado",
    ["Responsable solamente el Estado, sin que alcance al funcionario en lo personal", "Exento de responsabilidad si actuó en cumplimiento de una orden superior", "Responsable únicamente en el plano penal, sin consecuencias civiles"],
    "Se aplican las normas del derecho común en cuanto fueren aplicables.");

  q("Art. 44 C.P.", "Delegación de poderes y funciones",
    "¿Qué facultades NO puede delegar en ningún caso el Poder Judicial?",
    "Sus facultades jurisdiccionales",
    ["Sus facultades administrativas", "Sus facultades reglamentarias", "Ninguna, puede delegar todas"],
    "La delegación no exime de responsabilidad ni al delegante ni al delegado.");

  q("Art. 45 C.P.", "Admisión e incompatibilidades en el empleo público",
    "Según el artículo 45, ¿qué excepción admite la prohibición de acumular dos o más empleos públicos a sueldo?",
    "La docencia",
    ["La salud", "La justicia", "Ninguna excepción"],
    "El acceso a los empleos públicos requiere solo idoneidad, y el acceso a los cargos técnicos y administrativos está sujeto a concursos.");

  q("Art. 46 C.P.", "Estabilidad del empleado público",
    "¿A partir de qué antigüedad un empleado de la Provincia goza de estabilidad según el artículo 46?",
    "Más de seis meses consecutivos de servicio",
    ["Más de un año consecutivo de servicio, con evaluación de desempeño favorable", "Más de tres meses consecutivos de servicio, con designación en planta permanente", "Más de dos años consecutivos de servicio, en cargos técnicos o administrativos"],
    "Mientras dure su buena conducta, su contratación y eficiencia para la función.");

  q("Art. 48 C.P.", "Partidos políticos",
    "¿Cómo se reconoce a los partidos políticos en el artículo 48?",
    "Como personas jurídicas de derecho público no estatal",
    ["Como personas jurídicas de derecho privado, regidas por el Código Civil y Comercial", "Como órganos del Estado provincial, integrados al Poder Ejecutivo", "Como asociaciones civiles sin personería, reguladas por la ley electoral"],
    "Las candidaturas para cargos electivos son nominadas exclusivamente por los partidos políticos.");

  q("Art. 49 C.P.", "Derecho de asociarse",
    "¿Cómo pueden disolverse las asociaciones según el artículo 49?",
    "Solo en virtud de sentencia judicial",
    ["Por decreto del Poder Ejecutivo", "Por resolución de la Legislatura", "Por decisión administrativa"],
    "Solo pueden ser intervenidas conforme a la ley y no son disueltas en forma compulsiva.");

  q("Art. 51 C.P.", "Derecho de petición",
    "¿Qué delito cometen quienes se atribuyen la representación del pueblo o peticionan en su nombre, según el artículo 51?",
    "Sedición",
    ["Usurpación", "Coacción", "Rebelión"],
    "El derecho de petición es individual o colectivo, pero ninguna reunión de personas puede atribuirse los derechos del pueblo.");

  q("Art. 54 C.P.", "Protección de la niñez",
    "¿Hasta qué edad es obligación del Estado atender la nutrición suficiente de los menores, como mínimo?",
    "Hasta los seis años",
    ["Hasta los tres años", "Hasta los diez años", "Hasta los doce años"],
    "Se creará un registro de esa minoridad carenciada; toda falsa declaración para obtener el beneficio será sancionada.");

  q("Art. 59 C.P.", "Bien de familia",
    "¿Qué efecto tiene la declaración de un lote como bien de familia?",
    "Hace a la vivienda inembargable, inajenable e irrescindible",
    ["Hace a la vivienda embargable solo por impuestos", "Permite su libre venta", "La exime únicamente de impuestos nacionales"],
    "El hogar de familia es inembargable; solo puede cederse a otra familia con la conformidad del Poder Ejecutivo.");

  q("Art. 62 C.P.", "Derechos y garantías del trabajador",
    "Según el artículo 62, queda prohibido el trabajo de los menores de:",
    "Dieciséis años en actividades incompatibles con su edad",
    ["Catorce años en cualquier actividad, sea remunerada o no", "Dieciocho años en cualquier actividad, salvo la docencia y la capacitación", "Quince años en actividades rurales y en tareas domésticas"],
    "También garantiza el principio «a trabajo igual, salario igual» y una retribución mínima, vital y móvil.");

  q("Art. 63 C.P.", "Autogestión y cogestión",
    "¿Qué alienta el Estado Provincial según el artículo 63?",
    "La autogestión y la cogestión en las empresas",
    ["La estatización de las empresas privadas que presten servicios esenciales", "La privatización de los servicios públicos que presta el Estado provincial", "La libre tercerización laboral en las empresas con participación estatal"],
    "Es una de las normas de los derechos sociales del Capítulo IV.");

  q("Art. 67 C.P.", "Garantías sindicales",
    "¿Qué fuerza tienen los convenios colectivos de trabajo concertados por los gremios más representativos según el artículo 67?",
    "Fuerza de ley",
    ["Valor de recomendación", "Valor de contrato privado", "Fuerza de decreto"],
    "El Estado garantiza además el reconocimiento sindical con la sola inscripción en un registro especial y el derecho de huelga.");

  q("Art. 68 C.P.", "Policía del trabajo",
    "¿Qué norma debe aplicarse en todos los casos según el artículo 68?",
    "La norma más favorable al trabajador",
    ["La norma más reciente", "La norma provincial siempre", "La norma más favorable al empleador"],
    "El control o policía del trabajo es un derecho indelegable del Estado.");
})();

// ---------------------------------------------------------------- Tema II (parte 3)
(function () {
  const q = crearTema("Tema II — Constitución Provincial", "t2");

  q("Art. 80 C.P.", "Principios básicos de la enseñanza básica estatal",
    "Según el artículo 80, la enseñanza que imparte el Estado es:",
    "Obligatoria, gratuita, no confesional, integral, asistencial y democrática",
    ["Optativa, gratuita y confesional, a elección de los padres de los alumnos", "Obligatoria, arancelada y laica, con financiamiento de las familias", "Gratuita, confesional y voluntaria, sujeta a la vocación de los alumnos"],
    "Además exaltará los principios de solidaridad y cooperación humana.");

  q("Art. 83 C.P.", "Educación obligatoria",
    "¿Qué niveles educativos declara obligatorios y gratuitos el artículo 83 de manera expresa?",
    "La educación inicial y primaria",
    ["Solo la primaria", "La primaria y la secundaria únicamente", "La educación universitaria"],
    "Luego continúa siendo obligatoria y gratuita en la forma y hasta el límite que establezca la ley; es obligatoria la enseñanza de los derechos humanos y de las Constituciones.");

  q("Art. 86 C.P.", "Gobierno y administración de la educación",
    "¿Quién ejerce el gobierno y la administración de la educación según el artículo 86?",
    "Un Ministerio",
    ["Un Consejo General de Educación", "La Cámara de Diputados", "Los municipios"],
    "El art. 87 crea en cada escuela un Consejo Académico, integrado según el nivel.");

  q("Art. 88 C.P.", "Actualización, perfeccionamiento y capacitación docente",
    "¿Cada cuánto tiempo se realizan los concursos de oposición y antecedentes para integrar los equipos interdisciplinarios de capacitación docente?",
    "Cada seis años",
    ["Cada cuatro años", "Cada año", "Cada diez años"],
    "El Poder Ejecutivo designa al coordinador general de esos equipos.");

  q("Art. 109 C.P.", "Legislación tributaria",
    "¿Cómo se crean, modifican o suprimen los tributos según el artículo 109?",
    "Solo por ley expresa",
    ["Por decreto del Poder Ejecutivo", "Por resolución del Ministerio de Hacienda", "Por ordenanza municipal en todos los casos"],
    "No hay impuesto confiscatorio ni privilegio personal en materia tributaria, y ningún tributo tiene efecto retroactivo salvo los percibidos durante el año fiscal.");

  q("Art. 110 C.P.", "Presupuesto provincial",
    "¿Quién aprueba el presupuesto provincial?",
    "La Cámara de Diputados",
    ["El Poder Ejecutivo", "La Corte de Justicia", "El Tribunal de Cuentas"],
    "En la ley de presupuesto no pueden constar disposiciones ajenas a la materia presupuestaria.");

  q("Art. 112 C.P.", "Expropiación",
    "Si las obras de una expropiación no se inician dentro del término de tres años, el expropiado puede:",
    "Reclamar la devolución, fijándose las compensaciones a que hubiere lugar",
    ["Exigir el doble de la indemnización fijada por la expropiación original", "Nada, porque la expropiación es definitiva desde la sentencia que la declara", "Reclamar solamente una indemnización adicional por el tiempo transcurrido"],
    "Solo puede expropiarse por razones de utilidad pública o bienestar general calificadas por ley u ordenanza y previa indemnización.");

  q("Art. 113 C.P.", "Dominio de los recursos naturales",
    "¿Qué dominio tiene la Provincia sobre las sustancias minerales y fuentes naturales de energía de su territorio?",
    "La plenitud del dominio imprescriptible e inalienable",
    ["Un dominio compartido con la Nación, que debe autorizar cada explotación", "Un dominio temporal, sujeto a concesiones por períodos de veinte años", "Un dominio limitado solo a los hidrocarburos líquidos y gaseosos"],
    "El Estado nacional no puede disponer de estos recursos sin el previo acuerdo de la Provincia, expresado por ley.");

  q("Art. 114 C.P.", "Función de la tierra",
    "¿Cómo considera la Constitución a la tierra?",
    "Factor de producción y no de renta",
    ["Factor de renta y no de producción", "Bien de especulación", "Bien exclusivamente estatal"],
    "Debe ser objeto de explotación racional.");

  q("Art. 115 C.P.", "Colonización",
    "En la adjudicación de tierra pública, la inajenabilidad de la tierra durante el término que fije la ley no puede ser menor de:",
    "Veinte años",
    ["Cinco años", "Diez años", "Treinta años"],
    "Los planes de colonización evitan el minifundio y establecen la adjudicación preferencial a cooperativas.");

  q("Art. 117 C.P.", "Régimen de aguas",
    "La concesión de uso y goce del agua para beneficio y cultivo de un predio constituye:",
    "Un derecho inherente e inseparable del inmueble",
    ["Un derecho personal e intransferible", "Un derecho temporal de cinco años", "Un derecho que se extingue al vender el predio"],
    "Corresponde a la Provincia reglar el uso y aprovechamiento de todas las aguas del dominio público.");
})();

// ---------------------------------------------------------------- Tema II (parte 4)
(function () {
  const q = crearTema("Tema II — Constitución Provincial", "t2");

  q("Art. 121 C.P.", "Subversión del orden constitucional",
    "¿Qué trato reciben quienes se alzaren en armas para cambiar la Constitución o deponer alguno de los poderes públicos?",
    "El de traidores a la Patria, pasibles de las sanciones que la ley determine",
    ["El de rebeldes, pasibles de sanciones administrativas y de exoneración del servicio", "El de simples contraventores, sujetos a sanciones de arresto o multa", "El de exiliados políticos, que pierden los derechos de ciudadanía por diez años"],
    "Los funcionarios del régimen constitucional que omitieren actos en defensa del sistema reciben el mismo tratamiento.");

  q("Art. 125 C.P.", "Obediencia debida",
    "En la situación de Gobierno ilegal, ¿qué principio NO rige según el artículo 125?",
    "El de obediencia debida a los superiores",
    ["El de legalidad, por no existir régimen legítimo al que someterse", "El de irretroactividad de la ley penal, durante el período de facto", "El de cosa juzgada, respecto de las sentencias de los jueces ordinarios"],
    "Tampoco rige respecto de quienes se atribuyen el mando.");

  q("Art. 127 C.P.", "Inhabilitación perpetua",
    "Los funcionarios con responsabilidad política en regímenes de facto no podrán ocupar cargos públicos en la Provincia:",
    "A perpetuidad",
    ["Por diez años", "Por veinte años", "Durante el período constitucional siguiente"],
    "También alcanza a quienes pertenezcan a asociaciones que sustenten principios opuestos a la Constitución (art. 126).");

  q("Art. 129 C.P.", "Derecho electoral",
    "Según el artículo 129, la ley puede reducir la edad mínima para ser elector hasta los:",
    "Dieciséis años, pero no incrementarla",
    ["Catorce años", "Diecisiete años", "Quince años, y también incrementarla"],
    "Son electores los ciudadanos mayores de dieciocho años; el voto es universal, libre, igual y secreto.");

  q("Art. 130 C.P.", "Tribunal electoral",
    "¿Cómo se integra el tribunal electoral permanente?",
    "Por dos miembros de la Corte de Justicia designados por sorteo público y por el Fiscal General de la Corte de Justicia",
    ["Por tres jueces de Cámara designados por el Gobernador de la Provincia", "Por el Presidente de la Corte de Justicia y dos diputados provinciales", "Por el Vicegobernador y dos ministros del Poder Ejecutivo designados por sorteo"],
    "Duran cuatro años en sus cargos.");

  q("Art. 131 C.P.", "Integración de la Cámara",
    "Además de un representante por cada departamento, ¿cuántos habitantes determinan un diputado elegido por representación proporcional?",
    "Uno cada veinte mil habitantes",
    ["Uno cada diez mil habitantes", "Uno cada cincuenta mil habitantes", "Uno cada cien mil habitantes"],
    "La Provincia es distrito electoral único para los diputados proporcionales; cada departamento lo es para el suyo, a simple mayoría de sufragios.");

  q("Art. 132 C.P.", "Duración",
    "¿Cuánto duran los diputados provinciales en sus funciones?",
    "Cuatro años, pudiendo ser reelegidos",
    ["Dos años, sin reelección", "Seis años, pudiendo ser reelegidos", "Cuatro años, sin reelección"],
    "Inician y concluyen sus mandatos en la misma oportunidad que el Poder Ejecutivo.");

  q("Art. 135 C.P.", "Requisitos para ser diputado",
    "¿Qué edad se requiere para ser diputado provincial?",
    "Veintiún años a la fecha de incorporación al cuerpo",
    ["Dieciocho años de edad a la fecha de incorporación al cuerpo", "Veinticinco años de edad a la fecha de incorporación al cuerpo", "Treinta años de edad a la fecha de incorporación al cuerpo"],
    "También se requiere ser nativo de la Provincia o tener tres años de residencia inmediata y continua en ella.");

  q("Art. 136 C.P.", "Inhabilidades",
    "¿Cuál de las siguientes personas NO puede ser miembro de la Cámara de Diputados?",
    "Los militares en actividad",
    ["Los docentes en ejercicio, por la incompatibilidad con la función legislativa", "Los abogados con matrícula activa, por el riesgo de conflicto de intereses", "Los jubilados, por la imposibilidad de acumular beneficios previsionales"],
    "Tampoco los condenados en causa criminal mientras subsistan los efectos de la condena, ni los quebrados fraudulentos no rehabilitados.");

  q("Art. 137 C.P.", "Incompatibilidades",
    "Es incompatible el cargo de diputado con los de funcionarios y empleados de los estados nacional, provincial o municipal, excepto:",
    "La docencia",
    ["La medicina", "La abogacía", "La investigación"],
    "Los agentes públicos elegidos diputados quedan automáticamente con licencia sin goce de sueldo.");

  q("Art. 139 C.P.", "Inmunidad de arresto",
    "Si un diputado es sorprendido en flagrante ejecución de un hecho ilícito doloso, ¿en qué plazo da cuenta el juez a la Cámara?",
    "Dentro de tres días, con la información sumaria del hecho",
    ["Dentro de las veinticuatro horas, con la información sumaria del hecho", "Dentro de los diez días, con la información sumaria del hecho", "De inmediato, sin plazo, con la información sumaria del hecho"],
    "Ningún miembro puede ser arrestado desde el día de su elección hasta el de su cese, salvo ese caso.");

  q("Art. 140 C.P.", "Desafuero",
    "¿Qué mayoría requiere la Cámara para allanar el fuero del arrestado?",
    "Mayoría absoluta de sus miembros",
    ["Dos tercios de sus miembros", "Mayoría simple de los presentes", "Unanimidad"],
    "Se considera allanado de hecho si la Cámara no resolvió dentro de los diez días siguientes a la recepción del sumario.");

  q("Art. 141 C.P.", "Denuncia criminal contra un diputado",
    "Ante una denuncia criminal contra un diputado, ¿qué mayoría necesita la Cámara para suspenderlo en sus funciones?",
    "Dos tercios de votos",
    ["Mayoría simple", "Mayoría absoluta de sus miembros", "Unanimidad"],
    "El suspendido queda a disposición del juez competente para su juzgamiento.");

  q("Art. 143 C.P.", "Sesiones públicas",
    "¿Qué mayoría se requiere para que las sesiones de la Cámara sean secretas?",
    "Dos tercios de los miembros presentes",
    ["Mayoría simple de los presentes", "La mitad más uno de sus miembros", "Unanimidad"],
    "La regla es la publicidad de las sesiones, salvo gravedad o interés de los asuntos a tratar.");

  q("Art. 145 C.P.", "Presidencia",
    "¿Quién es el presidente nato de la Cámara de Diputados y cuándo tiene voto?",
    "El Vicegobernador, que no tiene voto salvo en caso de empate",
    ["El Gobernador de la Provincia, que tiene voto siempre", "El Vicegobernador de la Provincia, que tiene voto siempre", "El diputado de mayor edad, que preside sin voto salvo en caso de empate"],
    "La Cámara nombra anualmente un Vicepresidente Primero y un Segundo, quienes tienen voto cuando ejercen la presidencia.");

  q("Art. 147 C.P.", "Facultades disciplinarias",
    "¿Hasta cuánto puede reprimir la Cámara con arresto las faltas contra el orden de sus sesiones?",
    "Hasta dos días",
    ["Hasta cinco días", "Hasta veinticuatro horas", "Hasta diez días"],
    "La Cámara es el único juez de faltas cometidas dentro o fuera de su recinto contra el orden de sus sesiones.");

  q("Art. 150 inc. 4 C.P.", "Atribuciones de la Cámara de Diputados",
    "¿Qué porcentaje mínimo de distribución de gastos anuales debe asegurar la Ley de Presupuesto para el Poder Judicial?",
    "No inferior al seis por ciento",
    ["No inferior al uno por ciento", "No inferior al diez por ciento", "No inferior al tres por ciento"],
    "Para el Poder Legislativo el mínimo es del uno por ciento. Si la Cámara rechaza el proyecto del Ejecutivo, rige el presupuesto del año anterior.");

  q("Art. 150 inc. 2 C.P.", "Atribuciones de la Cámara de Diputados",
    "Si la Cámara no se pronuncia en noventa días sobre un tratado o convenio presentado por el Poder Ejecutivo con otra provincia, el tratado se considera:",
    "Aprobado; salvo los convenios con estados extranjeros u organismos internacionales, que se consideran rechazados",
    ["Rechazado en todos los casos, debiendo el Ejecutivo presentarlo nuevamente", "Aprobado en todos los casos, incluidos los convenios con estados extranjeros", "Pendiente de tratamiento hasta que el Poder Ejecutivo lo presente nuevamente"],
    "El silencio opera de forma distinta según se trate de convenios internos o con entes extranjeros.");

  q("Art. 150 inc. 27 C.P.", "Atribuciones de la Cámara de Diputados",
    "¿Quién designa a los magistrados judiciales, Fiscal General, titulares del ministerio público y Fiscal de Estado, a propuesta en terna del Consejo de la Magistratura?",
    "La Cámara de Diputados",
    ["El Gobernador", "La Corte de Justicia", "El Vicegobernador"],
    "La Cámara también designa al legislador titular y suplente que la representan en el Consejo de la Magistratura (inc. 30).");

  q("Art. 150 inc. 26 C.P.", "Atribuciones de la Cámara de Diputados",
    "Para los nombramientos que requieren acuerdo, ¿cuándo se entiende denegado el acuerdo?",
    "Si dentro de los treinta días de recibida la comunicación del Poder Ejecutivo la Cámara no se hubiese expedido",
    ["Si la Cámara no se hubiese expedido dentro de los diez días de recibida la comunicación", "Si la Cámara no se hubiese expedido dentro de los noventa días de recibida la comunicación", "Nunca: el silencio de la Cámara implica la aprobación automática del acuerdo"],
    "El acuerdo al Poder Ejecutivo es atribución de la Cámara de Diputados.");

  q("Art. 150 inc. 21 C.P.", "Atribuciones de la Cámara de Diputados",
    "¿Qué institución puede crear la Cámara para la defensa de los derechos de la Sección Primera y de intereses difusos o colectivos?",
    "El Defensor del Pueblo",
    ["El Fiscal de Estado", "El Tribunal de Cuentas", "El Procurador General"],
    "En el amparo por tales derechos tiene participación necesaria y representación conjunta con los interesados.");

  q("Art. 151 C.P.", "Quórum",
    "¿Con qué presencia sesiona la Cámara y cuántos miembros se requieren para tomar resoluciones?",
    "Sesiona con la cuarta parte de sus miembros, pero para tomar resoluciones se requiere la mitad más uno",
    ["Sesiona con la mitad más uno de sus miembros y resuelve con la cuarta parte", "Sesiona y resuelve únicamente con la mitad más uno de sus miembros", "Sesiona con un tercio de sus miembros y resuelve con los dos tercios"],
    "Distinción entre quórum para sesionar y para decidir.");

  q("Art. 152 C.P.", "Sesiones ordinarias",
    "¿Durante qué período se reúne la Cámara en sesiones ordinarias?",
    "Desde el primer día hábil de abril hasta el último de noviembre, prorrogable por treinta días",
    ["Desde el primer día hábil de marzo hasta el último de diciembre, sin prórroga", "Desde el primer día hábil de mayo hasta el último de octubre, prorrogable", "Durante todo el año calendario, sin interrupciones ni receso legislativo"],
    "La Cámara puede por sí sola prorrogarlas hasta un término de treinta días.");

  q("Art. 153 C.P.", "Sesiones extraordinarias",
    "Si la tercera parte de sus miembros solicita una sesión extraordinaria, ¿dentro de qué plazo la Cámara llama a sesionar?",
    "Dentro de los ocho días de recibida la petición",
    ["Dentro de las veinticuatro horas de recibida la petición de sus miembros", "Dentro de los quince días de recibida la petición de sus miembros", "Dentro de los treinta días de recibida la petición de sus miembros"],
    "También puede ser convocada por el Poder Ejecutivo o por el Presidente del cuerpo.");
})();

// ---------------------------------------------------------------- Tema II (parte 5: Poder Ejecutivo)
(function () {
  const q = crearTema("Tema II — Constitución Provincial", "t2");

  q("Art. 174 C.P.", "Requisitos",
    "¿Qué edad se requiere para ser elegido Gobernador o Vicegobernador?",
    "Treinta años",
    ["Veintiún años", "Veinticinco años", "Treinta y cinco años"],
    "Además se requiere ser elector y tener cinco años de domicilio inmediato en la Provincia.");

  q("Art. 175 C.P.", "Duración del mandato - Reelección",
    "Según el artículo 175 (enmendado por Ley Nº 8199), el Gobernador y el Vicegobernador duran cuatro años y pueden ser reelegidos:",
    "Consecutivamente hasta dos veces",
    ["Sin límite de reelecciones", "Una sola vez consecutivamente", "No pueden ser reelegidos"],
    "El artículo fue enmendado conforme al procedimiento del art. 277 de la Constitución.");

  q("Art. 176 C.P.", "Cese del mandato",
    "¿Cuándo cesan en sus mandatos el Gobernador y el Vicegobernador?",
    "El mismo día en que expire el período, sin prórroga ni siquiera por un día más",
    ["Cuando asume el nuevo gobernador, aunque ello ocurra pasado el período legal", "Treinta días después de vencido el período correspondiente, como máximo", "Cuando la Cámara de Diputados lo decida por mayoría de sus miembros"],
    "Ningún evento que haya interrumpido el mandato permite completarlo más tarde.");

  q("Art. 178 C.P.", "Juramento",
    "¿Ante quién prestan juramento el Gobernador y el Vicegobernador al tomar posesión?",
    "Ante la Cámara de Diputados y, en su defecto, ante la Corte de Justicia",
    ["Ante el Poder Judicial exclusivamente, reunido en pleno en la Corte de Justicia", "Ante el Gobernador saliente, en acto público de transmisión del mando", "Ante el Tribunal Electoral, al proclamarse el resultado de los comicios"],
    "Juran cumplir y hacer cumplir la Constitución, las leyes de la Nación y de la Provincia.");

  q("Art. 179 C.P.", "Residencia",
    "¿Por cuánto tiempo pueden ausentarse de la Provincia el Gobernador y el Vicegobernador sin permiso de la Cámara?",
    "No más de treinta días",
    ["No más de quince días", "No más de diez días", "No más de sesenta días"],
    "Deben residir en la Ciudad de San Juan, Capital de la Provincia.");

  q("Art. 181 C.P.", "Emolumentos",
    "La remuneración del Gobernador y el Vicegobernador, fijada por ley:",
    "No puede ser disminuida durante el período de su mandato",
    ["Puede reducirse por decreto cuando la situación fiscal de la Provincia lo exija", "Se fija por decreto del propio Gobernador al asumir sus funciones", "Es ad honorem, sin perjuicio de los gastos de representación que reciban"],
    "Mientras ejercen sus funciones no pueden practicar otro empleo, arte, profesión o comercio.");

  q("Art. 183 C.P.", "Acefalía simultánea",
    "En caso de impedimento del Gobernador y del Vicegobernador, ¿quién ejerce el Poder Ejecutivo?",
    "El Vicepresidente Primero de la Cámara de Diputados y, en su defecto, el Segundo",
    ["El Presidente de la Corte de Justicia, en su carácter de máxima autoridad judicial", "El Ministro de Gobierno, por ser el funcionario de mayor jerarquía del gabinete", "El Fiscal de Estado, por ser el representante legal de la Provincia"],
    "Quienes asuman deben prestar juramento de ley al tomar posesión.");

  q("Art. 184 C.P.", "Acefalía total",
    "En caso de acefalía total con más de dos años para concluir el período, ¿en qué plazo se convoca a elecciones de Gobernador y Vicegobernador?",
    "Dentro de los cinco días desde que se asumió las funciones",
    ["Dentro de los treinta días desde la fecha en que asumió sus funciones", "Dentro de los quince días desde la fecha en que asumió sus funciones", "Dentro de las veinticuatro horas desde la fecha en que asumió sus funciones"],
    "Si faltan menos de dos años pero más de tres meses, la Cámara de Diputados elige al Gobernador de su seno.");

  q("Art. 185 C.P.", "Elección - Época",
    "¿Cómo se elige al Gobernador y al Vicegobernador?",
    "Directamente por los electores, a simple mayoría de votos en distrito único",
    ["Por la Cámara de Diputados, de entre sus miembros, por mayoría absoluta", "Por un colegio electoral integrado por los diputados y los intendentes", "Con segunda vuelta si ninguna fórmula supera el 50% de los votos válidos"],
    "La elección tiene lugar conjuntamente con la de diputados provinciales del año que corresponda.");

  q("Art. 188 C.P.", "Nueva elección",
    "Si dos o más fórmulas obtienen igual número de votos, la nueva elección entre las empatadas debe practicarse en un término que no exceda:",
    "Treinta días después de aprobado el comicio anterior",
    ["Diez días después de aprobado el comicio anterior por el Tribunal Electoral", "Sesenta días después de aprobado el comicio anterior por el Tribunal Electoral", "Quince días después de aprobado el comicio anterior por el Tribunal Electoral"],
    "La nueva elección se hace solo entre las fórmulas que empataron.");

  q("Art. 189 inc. 5 C.P.", "Atribuciones y deberes",
    "¿Dentro de qué plazo el Gobernador debe presentar a la Cámara el proyecto de presupuesto general?",
    "Dentro de los tres primeros meses de sesiones ordinarias",
    ["Dentro de los primeros diez días del año, antes de iniciarse las sesiones ordinarias", "Dentro del primer mes de sesiones ordinarias, sin posibilidad de prórroga", "Antes del 1 de noviembre de cada año, para el ejercicio siguiente"],
    "El plazo solo puede prorrogarse por un término no mayor a treinta días.");

  q("Art. 189 inc. 15 C.P.", "Atribuciones y deberes",
    "¿Por cuánto tiempo puede el Gobernador ordenar arrestos y detenciones, con las limitaciones de la Constitución y las leyes?",
    "Hasta por dos días",
    ["Hasta por veinticuatro horas", "Hasta por una semana", "Hasta por setenta y dos horas"],
    "Es una de las atribuciones del art. 189.");

  q("Art. 189 inc. 19 C.P.", "Atribuciones y deberes",
    "Para conceder indultos y conmutar penas, el Gobernador necesita previo:",
    "Informe de la Corte de Justicia",
    ["Acuerdo de la Cámara de Diputados", "Dictamen del Fiscal de Estado", "Consulta popular"],
    "Se exceptúan los delitos de la sección segunda (defensa de la Constitución y de la democracia).");

  q("Art. 189 inc. 17 C.P.", "Atribuciones y deberes",
    "Si el Gobernador dicta leyes de necesidad y urgencia durante el receso de la Cámara, debe convocarla a sesiones extraordinarias en un plazo no mayor de:",
    "Cinco días",
    ["Veinticuatro horas", "Diez días", "Treinta días"],
    "Es una atribución específica del art. 189 inc. 17.");

  q("Art. 190 C.P.", "Prohibiciones",
    "¿Cuál de las siguientes conductas le está absolutamente prohibida a quien ejerce el Poder Ejecutivo?",
    "Arrogarse facultades judiciales, imponer contribuciones, decretar embargos y aplicar penas",
    ["Vetar leyes sancionadas por la Cámara de Diputados dentro del plazo legal", "Reglamentar las leyes sin alterar su espíritu mediante decretos", "Designar a los ministros y removerlos cuando lo crea conveniente"],
    "Tampoco puede realizar propaganda sobre obras de gobierno durante los quince días previos a cualquier comicio.");

  q("Art. 191 C.P.", "Designación de ministros",
    "¿Cuál es el número mínimo de Ministros según el artículo 191?",
    "No inferior a cinco",
    ["No inferior a tres", "No inferior a siete", "No inferior a diez"],
    "Una ley de iniciativa exclusiva del Poder Ejecutivo determina el número, rama y funciones.");

  q("Art. 192 C.P.", "Condiciones",
    "Para ser Ministro se requieren las mismas condiciones que para ser Diputado y no tener parentesco con el Gobernador dentro del:",
    "Cuarto grado de afinidad o consanguinidad",
    ["Segundo grado de afinidad o consanguinidad con quien ejerce la función de Gobernador", "Tercer grado de afinidad o consanguinidad con quien ejerce la función de Gobernador", "Sexto grado de afinidad o consanguinidad con quien ejerce la función de Gobernador"],
    "Los ministros gozan de un sueldo que no puede ser disminuido, y el Gobernador puede removerlos cuando lo crea conveniente.");

  q("Art. 195 C.P.", "Competencias - Responsabilidades",
    "¿Qué efecto tiene la firma del Ministro en las resoluciones del Gobernador?",
    "Las refrenda y legaliza; sin ella no tienen efecto ni se les da cumplimiento",
    ["Es meramente opcional y no condiciona la eficacia de las resoluciones", "Solo sirve para ordenar la publicación de la resolución en el Boletín Oficial", "Suple la firma del Gobernador cuando éste se encuentre ausente de la Provincia"],
    "El Ministro es solidariamente responsable y no puede eximirse invocando órdenes del Gobernador.");

  q("Art. 196 C.P.", "Relación con la Cámara",
    "Los Ministros pueden participar en las discusiones de la Cámara de Diputados, pero:",
    "No tienen voto",
    ["Tienen voto en materias de su cartera", "Tienen voto solo en caso de empate", "No pueden hablar"],
    "Deben asistir cuando sean llamados y remitir los informes que la Cámara solicite.");
})();

// ---------------------------------------------------------------- Tema II (parte 6: Poder Judicial)
(function () {
  const q = crearTema("Tema II — Constitución Provincial", "t2");

  q("Art. 197 C.P.", "Composición",
    "¿Por quiénes es desempeñado el Poder Judicial de la Provincia según el artículo 197?",
    "Por una Corte de Justicia, Jueces y Jueces de Paz Letrados y demás tribunales que la ley establezca",
    ["Solo por la Corte de Justicia, con exclusión de los demás tribunales inferiores", "Por la Corte de Justicia y el Ministerio Público únicamente, sin otros órganos", "Por Cámaras y Juzgados de Primera Instancia exclusivamente, sin Corte de Justicia"],
    "El Ministerio Público es órgano del Poder Judicial (art. 202).");

  q("Art. 198 C.P.", "Independencia",
    "¿Qué le reconoce el artículo 198 al Poder Judicial?",
    "Todo el imperio necesario para mantener su inviolabilidad e independencia ante los otros poderes",
    ["Facultad de dictar leyes procesales con valor vinculante para los otros poderes", "Facultad de disolver la Legislatura cuando ésta obstaculice la administración de justicia", "Facultad de nombrar al Gobernador cuando se produzca acefalía en el Poder Ejecutivo"],
    "La ley orgánica (art. 199) determina el orden jerárquico, competencia, atribuciones y responsabilidades de sus órganos.");

  q("Art. 200 C.P.", "Inamovilidad e inmunidades",
    "La inamovilidad de los magistrados y representantes del ministerio público comprende:",
    "El grado y la sede; no pueden ser trasladados sin su consentimiento",
    ["Solo el grado", "Solo la sede", "Ninguno de los dos, pueden ser trasladados por la Corte"],
    "Conservan sus cargos mientras dure su buena conducta y gozan de las mismas inmunidades que los legisladores.");

  q("Art. 200 C.P.", "Inamovilidad e inmunidades",
    "Según el artículo 200, los jueces no pueden ser responsabilizados por sus decisiones:",
    "Salvo en las excepciones expresamente especificadas por la ley",
    ["Nunca, bajo ninguna circunstancia, ni siquiera por la comisión de delitos", "Siempre que la parte vencida lo solicite mediante recurso fundado", "Salvo que lo disponga el Poder Ejecutivo mediante decreto fundado"],
    "Sus retribuciones no pueden ser disminuidas con descuentos que no sean los dispuestos con fines de previsión o con carácter general.");

  q("Art. 201 C.P.", "Corte de Justicia",
    "¿Cómo está integrada la Corte de Justicia según el artículo 201?",
    "Por cinco miembros como mínimo, se divide en salas y su número siempre debe ser impar",
    ["Por tres miembros como mínimo, se divide en cámaras y su número debe ser par", "Por siete miembros fijos, que no pueden aumentarse ni disminuirse por ley", "Por un número par de miembros, que se divide en salas de dos integrantes"],
    "Solo por ley puede aumentarse el número.");

  q("Art. 201 C.P.", "Corte de Justicia",
    "¿Cómo se desempeña la Presidencia de la Corte de Justicia?",
    "Anualmente y por turno, por cada uno de sus miembros, comenzando por el de mayor edad",
    ["La designa el Gobernador cada cuatro años con acuerdo de la Cámara de Diputados", "La ejerce siempre el miembro más antiguo del cuerpo mientras dure su mandato", "Se elige por sorteo cada dos años entre todos los miembros del cuerpo"],
    "Es un sistema rotativo anual.");

  q("Art. 202 C.P.", "Ministerio Público",
    "¿Quién ejerce superintendencia sobre los demás miembros del Ministerio Público?",
    "El Fiscal General de la Corte de Justicia",
    ["El Presidente de la Corte de Justicia", "El Gobernador", "El Fiscal de Estado"],
    "El Ministerio Público está integrado por el Fiscal General, Fiscales de Cámara, Agentes Fiscales, Asesores y Defensores oficiales.");

  q("Art. 204 C.P.", "Requisitos",
    "¿Qué requisitos de edad y ejercicio profesional se exigen para ser miembro de la Corte de Justicia y Fiscal General?",
    "Treinta años de edad y diez años de ejercicio profesional o desempeño en la magistratura",
    ["Veinticinco años de edad y cinco años de ejercicio profesional o desempeño en la magistratura", "Treinta y cinco años de edad y quince años de ejercicio profesional o desempeño en la magistratura", "Veintiún años de edad y tres años de ejercicio profesional o desempeño en la magistratura"],
    "Para Cámaras, Jueces, Agentes Fiscales, Defensores y Asesores: veinticinco años de edad y cinco años de ejercicio.");

  q("Art. 204 C.P.", "Requisitos",
    "¿Qué se requiere para ser juez de paz letrado?",
    "Argentino nativo o naturalizado con cinco años de ciudadanía, título de abogado y ser mayor de edad",
    ["Treinta años de edad, título de abogado y diez años de ejercicio profesional", "Veinticinco años de edad, título de abogado y cinco años de ejercicio profesional", "Ser argentino nativo, tener título de abogado y diez años de residencia en la Provincia"],
    "Para los jueces de paz letrados no se exige la residencia previa de cinco años en la Provincia; la fijará la ley.");

  q("Art. 204 C.P.", "Requisitos",
    "En todos los casos, los magistrados y miembros del ministerio público (salvo los jueces de paz letrados) deben acreditar una residencia continuada y previa a su designación en la Provincia de:",
    "Cinco años",
    ["Dos años", "Diez años", "Un año"],
    "La exigencia no rige para los jueces de paz letrados.");

  q("Art. 205 C.P.", "Incompatibilidades",
    "Los magistrados e integrantes del ministerio público no pueden ejercer su profesión ni desempeñar otras actividades, exceptuando:",
    "La docencia universitaria",
    ["La docencia en cualquier nivel", "La actividad comercial", "La actividad política partidaria"],
    "Tampoco pueden participar en organizaciones ni actividades políticas.");

  q("Art. 206 C.P.", "Designación",
    "¿Dentro de qué plazo deben cubrirse las vacantes de funcionarios judiciales?",
    "Dentro de los noventa días de producidas",
    ["Dentro de los treinta días de producidas, bajo apercibimiento de nulidad", "Dentro de los sesenta días de producidas, bajo apercibimiento de nulidad", "Dentro del año de producidas, bajo apercibimiento de nulidad"],
    "Si no se cubren, la Corte de Justicia las cubre con carácter provisorio hasta que se haga la designación.");

  q("Art. 206 C.P.", "Designación",
    "¿Quién nombra a los miembros de la Corte de Justicia y a los magistrados judiciales?",
    "La Cámara de Diputados, a propuesta de una terna elevada por el Consejo de la Magistratura",
    ["El Gobernador, con acuerdo de la Corte de Justicia y a propuesta del Consejo", "El Consejo de la Magistratura directamente, sin intervención de otro órgano", "El pueblo de la Provincia por elección directa, a propuesta de la Cámara de Diputados"],
    "La terna es elaborada por el Consejo de la Magistratura.");

  q("Art. 207 inc. 2 C.P.", "Atribuciones y deberes de la Corte",
    "¿Quién nombra, traslada y remueve a los empleados del Poder Judicial?",
    "La Corte de Justicia",
    ["El Gobernador", "La Cámara de Diputados", "El Consejo de la Magistratura"],
    "La Corte reglamenta los derechos y obligaciones de los empleados judiciales mediante acordadas (inc. 12).");

  q("Art. 207 inc. 12 C.P.", "Atribuciones y deberes de la Corte",
    "¿Mediante qué instrumento reglamenta la Corte los derechos y obligaciones de los empleados judiciales?",
    "Acordadas",
    ["Decretos", "Resoluciones ministeriales", "Ordenanzas"],
    "Entre sus atribuciones también está dictar el reglamento interno del Poder Judicial.");

  q("Art. 207 inc. 10 C.P.", "Atribuciones y deberes de la Corte",
    "¿Sobre qué organismo ejerce superintendencia la Corte de Justicia, además de la administración de justicia?",
    "La Policía Judicial",
    ["La Policía de la Provincia", "El Servicio Penitenciario", "El Tribunal de Cuentas"],
    "Según el art. 213 la Policía Judicial es de su exclusiva dependencia.");

  q("Art. 208 inc. 1 C.P.", "Jurisdicción",
    "¿En cuál de estos casos ejerce la Corte de Justicia jurisdicción originaria y exclusiva?",
    "En los conflictos entre poderes públicos y entre tribunales inferiores por competencia",
    ["En los juicios civiles de menor cuantía promovidos contra la Provincia", "En las apelaciones de sentencias penales dictadas por los tribunales inferiores", "En los juicios laborales de monto elevado que lleguen en grado de revisión"],
    "También en los conflictos de las municipalidades entre sí y con los poderes del Estado, y en los recursos extraordinarios de casación e inconstitucionalidad.");

  q("Art. 208 inc. 6 C.P.", "Jurisdicción",
    "En jurisdicción provincial, la Corte de Justicia es:",
    "Tribunal Superior de toda causa para la sentencia sobre cuestiones constitucionales federales",
    ["Un tribunal sin competencia alguna en cuestiones constitucionales de naturaleza federal", "El tribunal de alzada del Tribunal de Cuentas únicamente, en materia de rendiciones", "Un tribunal de instancia originaria en todo tipo de causas, civiles o penales"],
    "Todo tribunal provincial tiene competencia y obligación de resolver las cuestiones constitucionales de naturaleza federal incluidas en cualquier causa.");

  q("Art. 209 C.P.", "Jurisprudencia vinculante",
    "La interpretación que haga la Corte de Justicia en sus pronunciamientos plenarios es:",
    "De aplicación obligatoria para todos los tribunales inferiores",
    ["Meramente orientadora, pudiendo los tribunales inferiores apartarse libremente de ella", "Obligatoria solo para la propia Corte de Justicia en causas futuras", "Obligatoria solo en materia penal y para los tribunales de la Capital"],
    "La ley establece la forma y procedimiento para obtener la revisión de la jurisprudencia.");

  q("Art. 210 C.P.", "Competencia y jurisdicción de tribunales inferiores - Revisión",
    "¿Contra qué sentencias procede el recurso de revisión del artículo 210?",
    "Contra todas las sentencias definitivas dictadas por jueces cuyos nombramientos no reúnan los requisitos constitucionales",
    ["Contra todas las sentencias penales dictadas por tribunales colegiados de la Provincia", "Contra las sentencias de la Corte de Justicia dictadas en pleno", "Contra las resoluciones administrativas dictadas por el Poder Ejecutivo"],
    "Y en los demás casos que la ley establezca.");

  q("Art. 211 C.P.", "Tratamiento",
    "¿Cuál es el tratamiento que corresponde a los miembros de la Corte de Justicia?",
    "«Señor Ministro»",
    ["«Señor Juez»", "«Señor Juez de Cámara»", "«Señor Presidente»"],
    "Los miembros de la Cámara: «Señor Juez de Cámara»; los demás jueces: «Señor Juez».");

  q("Art. 212 C.P.", "Publicidad",
    "Los tribunales de la Provincia deben informar y publicar periódicamente:",
    "Las causas que pasen a estado de sentencia, consignando la fecha en que los autos quedan a disposición del tribunal",
    ["Solo las causas penales que pasen a estado de sentencia, con nombres de las partes", "Los nombres de los litigantes y el monto de cada uno de los juicios", "Las causas archivadas durante el año calendario anterior, con su fecha de cierre"],
    "También deben hacer conocer que las causas han sido sentenciadas.");

  q("Art. 213 C.P.", "Policía Judicial",
    "La Policía Judicial es de dependencia exclusiva de:",
    "La Corte de Justicia, que la organiza",
    ["Del Poder Ejecutivo, a través del Ministerio de Gobierno de la Provincia", "Del Ministerio de Seguridad, que la organiza y la dirige", "De la Cámara de Diputados, que la organiza por ley"],
    "El Poder Judicial dispone de la fuerza pública necesaria para el cumplimiento de sus funciones.");

  q("Art. 214 C.P.", "Consejo de la Magistratura - Integración",
    "¿Cómo está integrado el Consejo de la Magistratura según el artículo 214?",
    "Dos abogados, un legislador, un miembro de la Corte y un ministro del Ejecutivo",
    ["Tres abogados en ejercicio, un juez de Cámara y un diputado provincial", "Dos jueces de la Corte, dos diputados provinciales y un ministro del Ejecutivo", "Un abogado en ejercicio, un legislador, un juez de Cámara y el Gobernador"],
    "Son cinco miembros.");

  q("Art. 215 C.P.", "Consejo de la Magistratura - Elección",
    "¿Cómo se elige al miembro de la Corte de Justicia que integra el Consejo de la Magistratura?",
    "Por sorteo entre sus miembros",
    ["Por designación del Gobernador", "Por designación de la Cámara de Diputados", "Por elección directa de los abogados"],
    "Los abogados son elegidos por elección única, directa, secreta y obligatoria; el legislador, por la Cámara; el ministro, por el Gobernador.");

  q("Art. 215 C.P.", "Consejo de la Magistratura - Elección",
    "¿Cuánto dura el mandato de los miembros del Consejo de la Magistratura?",
    "Cuatro años, pudiendo ser reelectos",
    ["Dos años, sin posibilidad de ser reelectos para el período siguiente", "Seis años, sin posibilidad de ser reelectos para el período siguiente", "Cuatro años, sin posibilidad de ser reelectos para el período siguiente"],
    "El ejercicio de estas funciones constituye carga pública y el asiento del Consejo es el de la Corte de Justicia.");

  q("Art. 216 C.P.", "Consejo de la Magistratura - Funciones",
    "¿Cuál de las siguientes es una función del Consejo de la Magistratura?",
    "Organizar y resolver los concursos de antecedentes y oposición y armar las ternas",
    ["Designar directamente a los jueces y fiscales luego de cada concurso", "Destituir a los magistrados que incurran en mal desempeño de sus funciones", "Dictar sentencias en casos de corrupción de funcionarios públicos"],
    "También propone por terna el nombramiento de magistrados, titulares del Ministerio Público y Fiscal de Estado.");

  q("Art. 217 C.P.", "Vacancia",
    "Comunicada una vacancia por la Corte de Justicia, ¿en qué plazo debe el Consejo proponer la terna a la Cámara de Diputados?",
    "Dentro de los sesenta días de recibida la comunicación",
    ["Dentro de los treinta días de recibida la comunicación de la vacancia", "Dentro de los noventa días de recibida la comunicación de la vacancia", "Dentro de los diez días de recibida la comunicación de la vacancia"],
    "Comparar con el plazo de noventa días del art. 206 para cubrir las vacantes.");

  q("Art. 218 C.P.", "Función auxiliar de la justicia",
    "¿Cómo define el artículo 218 a la abogacía?",
    "Como una función pública no estatal, auxiliar del Poder Judicial",
    ["Como una función estatal", "Como una actividad privada sin vinculación con la justicia", "Como un órgano del Poder Judicial"],
    "La totalidad de los abogados inscriptos en la matrícula conforman el Foro de Abogados.");
})();

// ---------------------------------------------------------------- Tema II (parte 7: juicio político, jurado, consulta)
(function () {
  const q = crearTema("Tema II — Constitución Provincial", "t2");

  q("Art. 219 C.P.", "Juicio político - Ámbito personal",
    "¿Quiénes pueden ser denunciados ante la Cámara de Diputados en juicio político?",
    "El Gobernador, el Vicegobernador, los miembros de la Corte, el Fiscal General y el Fiscal de Estado",
    ["Los jueces de primera instancia y los jueces de paz letrados de la Provincia", "Los agentes fiscales, los defensores oficiales y los asesores de menores", "Los miembros del Tribunal de Cuentas, el Contador y el Tesorero de la Provincia"],
    "Cualquier ciudadano puede denunciar el delito o falta. Los demás magistrados son juzgados por el Jurado de Enjuiciamiento.");

  q("Art. 220 C.P.", "Juicio político - Salas",
    "En el juicio político, ¿qué Sala de la Cámara tiene a su cargo la acusación y cuál juzga?",
    "La Sala Primera acusa y la Sala Segunda juzga",
    ["La Sala Primera juzga y la Sala Segunda acusa", "Ambas salas acusan y juzgan en conjunto", "La Corte de Justicia juzga"],
    "La Cámara se divide anualmente por sorteo en dos Salas; la Segunda se integra con un miembro más si el número es impar.");

  q("Art. 222 C.P.", "Juicio político - Instrucción",
    "¿En qué término perentorio la Comisión Investigadora practica las diligencias del juicio político?",
    "Cuarenta días",
    ["Treinta días", "Quince días", "Sesenta días"],
    "La Sala acusadora necesita mayoría absoluta de la totalidad de sus miembros cuando el dictamen sea favorable a la acusación.");

  q("Art. 223 C.P.", "Juicio político - Suspensión de funciones",
    "¿Qué ocurre con el acusado desde que la Sala acusadora admite la acusación?",
    "Queda suspendido en el ejercicio de sus funciones, sin goce de sueldo",
    ["Continúa en sus funciones con goce de sueldo hasta que se dicte la sentencia", "Queda suspendido en el ejercicio de sus funciones, pero con goce de sueldo", "Es destituido automáticamente del cargo y queda inhabilitado por diez años"],
    "La Sala nombra luego una comisión de tres miembros para sostener la acusación.");

  q("Art. 225 C.P.", "Juicio político - Sentencia",
    "Si la Sala de sentencia no se pronuncia en el término de treinta días:",
    "El acusado vuelve a sus funciones con los haberes no cobrados y el juicio no puede repetirse",
    ["El juicio se repite desde el principio ante una nueva Sala sorteada", "El acusado es destituido automáticamente por falta de pronunciamiento a tiempo", "Se prorroga el plazo por otros treinta días y el acusado permanece suspendido"],
    "Garantía de celeridad del procedimiento.");

  q("Art. 226 C.P.", "Juicio político - Votación",
    "¿Qué mayoría se requiere para declarar culpable a un acusado en juicio político?",
    "Los dos tercios de la totalidad de los miembros de la Segunda Sala",
    ["La mayoría simple de los miembros presentes de la Cámara de Diputados", "La mayoría absoluta de la totalidad de los miembros de la Primera Sala", "La unanimidad de los miembros de la Segunda Sala en votación nominal"],
    "La votación es nominal y se registra el voto de los diputados sobre cada cargo.");

  q("Art. 227 C.P.", "Juicio político - Efectos",
    "¿Cuál es el efecto del fallo en el juicio político?",
    "Destituir al acusado y aun inhabilitarlo por tiempo determinado, quedando sujeto a la justicia ordinaria",
    ["Imponer pena de prisión al acusado por los delitos que se le atribuyan", "Solo apercibirlo, sin que pueda separarlo de su cargo ni inhabilitarlo", "Eximirlo de toda responsabilidad penal por los hechos que motivaron el juicio"],
    "El destituido queda sujeto a acusación, juicio y condena según las leyes comunes.");

  q("Art. 229 C.P.", "Jurado de Enjuiciamiento - Ámbito personal",
    "¿Quiénes pueden ser acusados ante el Jurado de Enjuiciamiento?",
    "Jueces de Cámara, de primera instancia y de paz, defensores, agentes fiscales, Tribunal de Cuentas, Contador y Tesorero",
    ["El Gobernador, el Vicegobernador y sus reemplazantes legales en ejercicio", "Los miembros de la Corte de Justicia y el Fiscal General de la Corte", "El Fiscal de Estado y los intendentes de los departamentos de la Provincia"],
    "Causales: incapacidad física o mental sobreviniente, delitos en el desempeño de sus funciones, incumplimiento de deberes y delitos comunes.");

  q("Art. 230 C.P.", "Jurado de Enjuiciamiento - Integración",
    "¿Cómo está integrado el Jurado de Enjuiciamiento?",
    "Un miembro de la Corte de Justicia designado por sorteo, dos diputados y dos abogados de la matrícula",
    ["Tres miembros de la Corte de Justicia y dos diputados elegidos por la Cámara", "Dos miembros de la Corte de Justicia, un diputado y dos abogados de la matrícula", "Cinco diputados elegidos por la Cámara, presididos por el Vicegobernador"],
    "Sus miembros pueden ser recusados y excusarse por causa fundada.");

  q("Art. 232 C.P.", "Jurado de Enjuiciamiento - Sentencia",
    "¿En qué término perentorio dicta sentencia el Jurado de Enjuiciamiento desde que la causa quedó en estado de resolver?",
    "Treinta días",
    ["Diez días", "Cuarenta días", "Noventa días"],
    "Puede absolver (restableciendo al funcionario) o destituir (separándolo definitivamente).");

  q("Art. 233 C.P.", "Jurado de Enjuiciamiento - Causales especiales",
    "¿Cuál de estas es una causal especial de remoción de magistrados según el artículo 233?",
    "La morosidad injustificada en el ejercicio de sus funciones",
    ["El rechazo de una terna por parte de la Cámara de Diputados", "La disconformidad del Gobernador con las decisiones judiciales adoptadas", "El cumplimiento de la edad de sesenta años en el ejercicio del cargo"],
    "Las otras causales son la mala conducta, la negligencia y el desconocimiento reiterado y notorio del derecho.");

  q("Art. 235 C.P.", "Consulta popular",
    "¿Qué mayoría requiere la Cámara de Diputados para someter una cuestión a consulta popular?",
    "El voto favorable de dos tercios de sus miembros",
    ["La mayoría simple de los miembros presentes en la sesión respectiva", "La mayoría absoluta de la totalidad de los miembros de la Cámara", "La unanimidad de los miembros presentes de la Cámara de Diputados"],
    "La iniciativa puede originarse en el Poder Ejecutivo o a propuesta de uno o más legisladores, y la ley no puede ser vetada (art. 236).");

  q("Art. 237 C.P.", "Consulta popular - Característica",
    "En una consulta popular optativa, ¿qué porcentaje de electores inscriptos debe haber sufragado para que su resultado sea válido?",
    "El cincuenta por ciento",
    ["El veinticinco por ciento", "El setenta por ciento", "El treinta y tres por ciento"],
    "Cuando la consulta está ordenada por la Constitución, el voto es obligatorio y el pronunciamiento vinculante.");

  q("Art. 239 C.P.", "Municipios",
    "¿Qué población mínima dentro del ejido necesita un centro poblacional para poder constituir municipio?",
    "Más de dos mil habitantes",
    ["Más de mil habitantes", "Más de cinco mil habitantes", "Más de diez mil habitantes"],
    "Son gobernados con arreglo a la Constitución, las cartas municipales y la Ley Orgánica.");

  q("Art. 240 C.P.", "Categorías",
    "¿Qué población se requiere para un municipio de «primera categoría»?",
    "Más de treinta mil habitantes",
    ["Más de diez mil habitantes", "Más de veinte mil habitantes", "Más de cincuenta mil habitantes"],
    "Segunda categoría: más de 10.000; tercera: más de 2.000 habitantes.");
})();

// ---------------------------------------------------------------- Tema III (parte 1)
(function () {
  const q = crearTema("Tema III — Organización Del Poder Judicial De San Juan", "t3");

  q("Ley 2352-O", "Introducción",
    "¿Qué ley es la actual Ley Orgánica del Poder Judicial de San Juan (LOPJ), sancionada el 17 de enero de 2022?",
    "Ley 2352-O",
    ["Ley 358-E", "Ley 1851-O", "Ley 754-O"],
    "Abrogó a la Ley 358-E (antes 5854), Ley Orgánica de Tribunales de 1988, y faculta a la Corte a dictar acordadas reglamentarias.");

  q("", "Jurisdicción y Competencia. Distinción",
    "¿Qué es la competencia, a diferencia de la jurisdicción?",
    "La aptitud legal de ejercitar la función de aplicar el derecho con relación a un asunto determinado",
    ["La función que el juez ejercita de aplicar el derecho en cada caso concreto", "El conjunto de tribunales que integran el Poder Judicial de una provincia", "La facultad de dictar las leyes procesales que rigen la actividad de los jueces"],
    "La jurisdicción es la función de aplicar el derecho; la competencia distribuye el trabajo entre distintos tribunales.");

  q("", "Jurisdicción y Competencia. Distinción",
    "¿Cuáles son los criterios más relevantes para distribuir la competencia?",
    "El territorio, la materia, el grado y el valor económico comprometido (cuantía)",
    ["La edad de las partes, la materia del litigio y el territorio del tribunal", "El domicilio del juez, el grado de la instancia y la cuantía del reclamo", "La nacionalidad de las partes, la materia del litigio y el grado del tribunal"],
    "El fundamento es la imposibilidad fáctica de que un solo tribunal se ocupe de todos los asuntos judiciales de un Estado.");

  q("Art. 1 LOPJ", "Competencia territorial",
    "¿En cuántas circunscripciones judiciales se divide el territorio de San Juan a los efectos de la competencia?",
    "Dos: la de la Capital y la de Jáchal",
    ["Tres: Capital, Jáchal y Caucete", "Una sola", "Cuatro, una por zona"],
    "La Primera tiene asiento en la ciudad de San Juan y comprende 17 departamentos; la Segunda, con asiento en Jáchal, comprende Jáchal e Iglesia.");

  q("Art. 1 LOPJ", "Competencia territorial",
    "¿Qué departamentos comprende la Segunda Circunscripción Judicial?",
    "Jáchal e Iglesia",
    ["Jáchal y Calingasta", "Iglesia y Valle Fértil", "Jáchal, Iglesia y Ullum"],
    "Su asiento está en la Ciudad de Jáchal.");

  q("Art. 88 LOPJ", "Competencia territorial",
    "¿Cuántos Juzgados de Paz Letrados hay en la Provincia y cuántos tienen competencia en el Gran San Juan?",
    "25 en total, 11 en el Gran San Juan",
    ["19 en total, 7 en el Gran San Juan", "30 en total, 15 en el Gran San Juan", "25 en total, 7 en el Gran San Juan"],
    "De los 11 del Gran San Juan, 7 tienen asiento en Capital y uno en cada uno de Santa Lucía, Rivadavia, Chimbas y Rawson.");

  q("Art. 2 LOPJ", "Competencia material",
    "Según el artículo 2 de la LOPJ, ¿por quiénes es ejercida la administración de justicia de la Provincia?",
    "Corte; Cámaras, Tribunal de Impugnaciones y Cámara de Paz; Jueces de Primera Instancia y de Paz",
    ["Solo por la Corte de Justicia y los Jueces de Paz Letrados de cada departamento", "Por la Corte, el Ministerio Público y el Consejo de la Magistratura en forma conjunta", "Por las Cámaras de Apelaciones y los Juzgados de Faltas de cada municipio"],
    "Los jueces de Primera Instancia actúan en forma unipersonal o reunidos en Colegio de Jueces.");

  q("Art. 79 LOPJ", "Competencia material",
    "¿Con cuántos Jueces de Primera Instancia, como mínimo, se compone la Segunda Circunscripción Judicial?",
    "Dos",
    ["Uno", "Cuatro", "Seis"],
    "Con competencia en lo Civil, Comercial, Minería, Laboral, Contencioso Administrativo, Familia, Penal y Penal de la Niñez y Adolescencia.");

  q("Art. 63 LOPJ", "Jueces en lo Civil, Comercial, Minería y Contencioso Administrativo",
    "¿Por qué se dice que los juzgados civiles tienen «competencia residual»?",
    "Porque son competentes en todas las cuestiones no asignadas a otros juzgados",
    ["Porque solo entienden en causas de poco monto que deben tramitar en forma sumaria", "Porque resuelven únicamente apelaciones de sentencias de los jueces de paz", "Porque entienden en causas penales menores que no revisten mayor complejidad"],
    "Entienden por ejemplo en cumplimiento de contratos, cobro de pesos, escrituraciones, posesiones veinteañales y daños y perjuicios.");

  q("Arts. 65 y 66 LOPJ", "Jueces de Familia",
    "¿En qué procesos conocen los jueces con competencia en asuntos de familia?",
    "Nulidad de matrimonio, uniones convivenciales, adopción, divorcio y sus incidencias, entre otros",
    ["Concursos, quiebras y asuntos relativos a sociedades comerciales y al Registro Público", "Controversias individuales entre empleadores y trabajadores derivadas del contrato de trabajo", "Ejecuciones hipotecarias y prendarias, desalojos y cobros de pesos de cualquier monto"],
    "Los concursos y quiebras corresponden a los jueces en lo comercial especial.");

  q("Art. 67 LOPJ", "Jueces en lo Comercial Especial",
    "¿Qué ejecuciones se asignan a los jueces en lo comercial especial?",
    "Las hipotecarias y prendarias",
    ["Las de alimentos", "Las de créditos laborales", "Las de multas de tránsito"],
    "También conocen en concursos y quiebras, sociedades comerciales y trámites ante el Registro Público de Comercio.");

  q("Art. 70 LOPJ", "Jueces del Trabajo",
    "¿En cuál de estos asuntos conocen los jueces del trabajo según el artículo 70 de la LOPJ?",
    "En las controversias individuales de derecho entre empleadores y trabajadores derivadas del contrato de trabajo",
    ["En los divorcios, uniones convivenciales y demás procesos de familia", "En las sucesiones y en los juicios de escrituración de inmuebles", "En los delitos de violencia familiar cometidos entre integrantes de un grupo familiar"],
    "Incluye las ejecuciones de créditos laborales y las acciones originadas en hechos de violencia laboral en el ámbito privado.");

  q("Art. 72 LOPJ", "Jueces Penales",
    "En el fuero penal de la Primera Circunscripción, además de los jueces de Flagrancia, de Niñez y Adolescencia y de Ejecución Penal, hay jueces penales de Primera Instancia, a saber:",
    "Jueces de Instrucción, Correccionales y de primera instancia del Colegio de Jueces",
    ["Jueces de Sentencia, de Apelación y de Casación con competencia territorial", "Jueces de Garantías, de Faltas y de Ejecución Civil con competencia departamental", "Jueces de Menores, de Paz y de Instrucción Militar con competencia limitada"],
    "Con las competencias que les confieren las Leyes 754-O y 1851-O, respectivamente.");

  q("Acuerdo General 43/2015", "Jueces Penales de la Niñez y adolescencia",
    "Tras la Ley 8194, ¿cómo se denominan los antiguos Juzgados de Menores?",
    "Primer y Segundo Juzgado Penal de la Niñez y Adolescencia",
    ["Primer y Segundo Juzgado de Familia y Protección Integral de la Niñez", "Primer y Segundo Juzgado de Protección de Derechos de Niños y Adolescentes", "Primer y Segundo Juzgado Correccional de Menores y Adolescentes"],
    "Les corresponde de modo exclusivo y excluyente la investigación y juzgamiento de hechos delictivos en los que aparezcan involucrados niños, niñas o adolescentes.");

  q("Art. 74 LOPJ", "Jueces Penales de la Niñez y adolescencia",
    "El ejercicio de la competencia de investigación por parte de los Jueces Penales de Niñez y Adolescencia:",
    "Excluye la de juicio",
    ["Incluye la de juicio", "Es compatible con la de ejecución", "No existe, solo juzgan"],
    "Conocen también en delitos de violencia familiar (Ley 989-E) cuando el presunto agresor sea niño, niña o adolescente.");

  q("Art. 95 LOPJ", "Jueces de Paz Letrados",
    "Los Jueces de Paz Letrados tienen, respecto de los Magistrados de Primera Instancia:",
    "Los mismos deberes y facultades",
    ["Menores facultades", "Solo facultades administrativas", "Facultades exclusivamente penales"],
    "Cuentan con la colaboración de los funcionarios y agentes que la Corte de Justicia les asigne.");

  q("Art. 90 LOPJ", "Jueces de Paz Letrados",
    "Entre las competencias materiales de los Jueces de Paz Letrados se encuentra:",
    "Desalojos por cualquier causa y juicios ejecutivos sin límite de monto, salvo hipotecarios y prendarios",
    ["Los concursos y quiebras, las ejecuciones hipotecarias y los juicios de familia", "Los divorcios contenciosos, la nulidad de matrimonio y la adopción plena", "Los delitos correccionales y los de instrucción con pena superior a tres años"],
    "También las cuestiones de vecindad como amigables componedores y los interdictos posesorios.");

  q("Acuerdo General 149/2022", "Jueces de Paz Letrados",
    "Según el Acuerdo General 149/2022, ¿qué tribunales dejan de tener competencia en procesos sucesorios?",
    "Los Jueces de Justicia Ordinaria en lo Civil de la Primera y Segunda Circunscripción",
    ["Los Juzgados de Paz Letrados de los departamentos del Gran San Juan", "Las Cámaras de Apelaciones en lo Civil, Comercial, Minería y Familia", "Los Jueces de Familia de la Primera y Segunda Circunscripción Judicial"],
    "La Cámara de Paz Letrada es competente para entender en dichos procesos.");

  q("Art. 93 LOPJ", "Jueces de Paz Letrados",
    "¿Qué acción pueden resolver los Jueces de Paz departamentales (excepto Gran San Juan y Jáchal) en los casos del artículo 32 de la Constitución Provincial?",
    "El Hábeas Corpus",
    ["El amparo por mora", "El juicio político", "La acción de inconstitucionalidad"],
    "También conocen en cobro de salarios e indemnizaciones laborales (opcional para el accionante) y en violencia familiar (Ley 989-E).");
})();

// ---------------------------------------------------------------- Tema III (parte 2)
(function () {
  const q = crearTema("Tema III — Organización Del Poder Judicial De San Juan", "t3");

  q("", "Competencia funcional o por grado",
    "¿En qué se fundamenta la competencia funcional o por grado?",
    "En la falibilidad del juicio humano, que justifica la doble instancia",
    ["En la cuantía del juicio, que justifica la intervención de tribunales superiores", "En el domicilio de las partes, que determina qué tribunal conoce de la causa", "En la naturaleza del derecho sustantivo que se discute en el proceso"],
    "La segunda instancia revisa lo resuelto dentro de lo expuesto en la expresión de agravios.");

  q("Ley 2353-O", "Competencia funcional o por grado",
    "¿Qué ley regula el Recurso Extraordinario Provincial ante la Corte de Justicia?",
    "Ley 2353-O",
    ["Ley 2352-O", "Ley 1851-O", "Ley 754-O"],
    "Los recursos nominados en el art. 208 de la Constitución Provincial están subsumidos en el Recurso Extraordinario Provincial.");

  q("Ley 2353-O", "Competencia funcional o por grado",
    "¿Cuál NO es una de las finalidades del Recurso Extraordinario Provincial?",
    "Revisar libremente los hechos y la prueba de la causa",
    ["Mantener la supremacía de la Constitución Nacional y Provincial", "Actuar la garantía de la defensa en juicio y el debido proceso", "Asegurar la uniforme interpretación y correcta aplicación de las normas jurídicas"],
    "El recurso es extraordinario y de interpretación restrictiva; no es una tercera instancia ordinaria.");

  q("Art. 45 LOPJ", "Competencia funcional o por grado",
    "¿Cómo está compuesta la Cámara de Apelaciones en lo Civil, Comercial, Minería, Familia y Contencioso Administrativo?",
    "12 miembros divididos en 4 salas de tres miembros cada una",
    ["9 miembros divididos en 3 salas de tres miembros cada una, numeradas del uno al tres", "6 miembros divididos en 2 salas de tres miembros cada una, denominadas Primera y Segunda", "15 miembros divididos en 5 salas de tres miembros cada una, numeradas del uno al cinco"],
    "A la Sala IV se le reserva además competencia en materia Comercial Especial.");

  q("", "Competencia funcional o por grado",
    "¿Cómo está integrada la Cámara del Trabajo?",
    "Por 6 miembros divididos en 2 salas de 3 miembros",
    ["Por 3 miembros reunidos en una sola sala con competencia en toda la Provincia", "Por 9 miembros divididos en 3 salas de tres miembros cada una", "Por 12 miembros divididos en 4 salas de tres miembros cada una"],
    "La Cámara de Paz Letrada es una y está integrada por 3 miembros.");

  q("", "Competencia funcional o por grado",
    "¿Cuántos miembros tienen la Cámara en lo Penal y Correccional (Ley 754-O) y el Tribunal de Impugnación (Ley 1851-O)?",
    "3 y 9 miembros, respectivamente",
    ["9 y 3 miembros, respectivamente", "5 y 5 miembros", "3 y 6 miembros, respectivamente"],
    "Sus sentencias son revisables por casación e inconstitucionalidad ante la Corte de Justicia.");

  q("Arts. 97 y 98 LOPJ", "Oficinas Judiciales",
    "¿Qué es la Oficina Judicial según el artículo 97 de la LOPJ?",
    "Una estructura de la Corte que da soporte y apoyo a la actividad jurisdiccional de jueces y tribunales",
    ["Un tribunal de apelación que revisa las sentencias de los jueces de primera instancia", "Un órgano del Ministerio Público que asiste a los fiscales en la investigación", "El juzgado tradicional con mayor dotación de personal y de recursos materiales"],
    "Permite que la magistratura se enfoque en la actividad jurisdiccional, mientras la Oficina asume la actividad administrativa.");

  q("Arts. 17, 20 y 21 LOPJ", "Corte de Justicia. Integración y competencias",
    "¿Cuándo comienza y termina el período de la presidencia anual de la Corte de Justicia?",
    "Desde el 1 de marzo hasta el último día de febrero del año siguiente",
    ["Desde el 1 de enero hasta el 31 de diciembre de cada año calendario", "Desde el 1 de abril hasta el 31 de marzo del año siguiente", "Desde el 1 de julio hasta el 30 de junio del año siguiente"],
    "Se ejerce por turno, comenzando por el Ministro de mayor edad.");

  q("Art. 17 LOPJ", "Corte de Justicia. Integración y competencias",
    "¿En cuántas salas se divide la Corte de Justicia según la LOPJ?",
    "Tres salas de tres miembros cada una",
    ["Dos salas de cinco miembros", "Cuatro salas de tres miembros", "Una sola sala plenaria"],
    "La Sala Tercera está compuesta por quien preside la Corte, quien la presidió el año anterior y quien la presidirá el siguiente.");

  q("Art. 24 LOPJ", "Corte de Justicia. Integración y competencias",
    "Según el artículo 24 de la LOPJ, ¿cuántos Conjueces o Conjuezas designa anualmente la Corte entre los abogados del Foro?",
    "Diez",
    ["Cinco", "Quince", "Veinte"],
    "Se designan para integrar la Corte, Cámaras y Juzgados cuando todos los reemplazantes legales estén impedidos.");

  q("Art. 24 LOPJ", "Corte de Justicia. Integración y competencias",
    "¿Qué puede hacer la Corte en pleno cuando el Fiscal General la convoca por mala conducta o morosidad de un magistrado?",
    "Denunciar a la Sala acusadora de la Cámara de Diputados o al Jurado de Enjuiciamiento, según corresponda",
    ["Destituirlo directamente sin intervención de otro órgano del Estado", "Suspenderlo por seis meses sin necesidad de sumario administrativo previo", "Trasladarlo a otra circunscripción judicial hasta que se resuelva el caso"],
    "La Corte también convoca al acuerdo, cuando lo considere necesario, al Defensor General, que participa con voz pero sin voto.");

  q("Art. 27 LOPJ", "Corte de Justicia. Salas",
    "¿Qué recursos extraordinarios conoce la Sala Primera de la Corte?",
    "Los de materia civil, comercial y minería",
    ["Los de materia penal y laboral", "Los de materia previsional", "Los de materia contencioso administrativa"],
    "La Sala Segunda conoce en materia penal, laboral, contencioso administrativa y previsional.");

  q("Art. 28 LOPJ", "Corte de Justicia. Salas",
    "¿Qué Sala de la Corte puede requerir informes y practicar visitas de cárceles para conocer la situación de los internos?",
    "La Sala Segunda",
    ["La Sala Primera", "La Sala Tercera", "La Corte en pleno exclusivamente"],
    "También conoce en los casos de reducción, conmutación e indultos de pena.");

  q("Art. 29 LOPJ", "Corte de Justicia. Salas",
    "¿Qué Sala de la Corte ejerce la autoridad administrativa y de superintendencia del Poder Judicial?",
    "La Sala Tercera",
    ["La Sala Primera", "La Sala Segunda", "El Presidente de la Corte únicamente"],
    "Sus pronunciamientos se impugnan por recurso de reconsideración ante la misma Sala, agotando la vía administrativa.");

  q("Art. 29 LOPJ", "Corte de Justicia. Salas",
    "¿Qué facultad corresponde a la Sala Tercera respecto de las ferias judiciales y los plazos?",
    "Fijar las ferias, decretar asuetos y suspender plazos judiciales por circunstancias graves",
    ["Solo cerrar tribunales cuando lo ordene el Poder Ejecutivo provincial", "Ninguna: la fijación de ferias es facultad exclusiva del Gobernador de la Provincia", "Solo fijar las ferias judiciales, pero no puede suspender los plazos de los litigantes"],
    "Estas facultades pueden delegarse en el Presidente cuando se estime necesario.");

  q("Art. 32 LOPJ", "Jurisprudencia vinculante",
    "¿Qué ocurre cuando una Sala de la Corte entiende que puede producirse una resolución contraria a la adoptada en causas anteriores?",
    "El Presidente de la Sala convoca al Tribunal en pleno, que decide por mayoría y dicta un fallo plenario vinculante",
    ["Se remite el caso al Poder Legislativo para que dicte una ley interpretativa", "La Sala resuelve libremente sin consultar a los demás miembros del Tribunal", "Se pide dictamen al Fiscal General, que fija la doctrina aplicable al caso"],
    "En el plenario no se admiten presentaciones de ninguna naturaleza ni se pueden recusar los miembros; la causa vuelve luego a la Sala de origen.");
})();

// ---------------------------------------------------------------- Tema III (parte 3: Ministerio Público y otros órganos)
(function () {
  const q = crearTema("Tema III — Organización Del Poder Judicial De San Juan", "t3");

  q("Art. 202 C.P. y Ley 633-E", "Ministerio Público Fiscal",
    "¿Qué ley organiza centralmente al Ministerio Público en San Juan en su doble vertiente (Fiscal y Defensa Oficial)?",
    "La Ley 633-E",
    ["La Ley 2352-O", "La Ley 1851-O", "La Ley 2179-E"],
    "La Defensa Oficial se regula en lo esencial por la Ley 2179-E.");

  q("Art. 1 Ley 633-E", "Función y misión",
    "Según el artículo 1 de la Ley 633-E, el Ministerio Público es:",
    "Un órgano del Poder Judicial con independencia orgánica y funcional",
    ["Un órgano del Poder Ejecutivo con independencia orgánica y funcional", "Un órgano extrapoder con autonomía funcional y financiera plena", "Un órgano dependiente de la Cámara de Diputados en su organización"],
    "Su misión es actuar en defensa del interés público y de los derechos de las personas y custodiar la normal prestación del servicio de justicia.");

  q("Ley 1851-O", "Función y misión",
    "¿Cuál NO es uno de los tres deberes concretos del Ministerio Público Fiscal en el proceso penal acusatorio?",
    "Dictar sentencia sobre la responsabilidad penal del acusado",
    ["Promover y ejercer la acción penal pública", "Dirigir el cuerpo de investigadores fiscales", "Asumir la iniciativa probatoria sujetándose a la objetividad y buena fe"],
    "Quien investiga y acusa no puede ser quien decide sobre la responsabilidad penal.");

  q("Art. 2 Ley 633-E", "Principios que rigen su funcionamiento",
    "¿Qué establece el principio de unidad orgánica?",
    "Que el Ministerio Público es único y lo representa cada uno de sus integrantes",
    ["Que cada fiscal actúa a título personal y compromete solo su propia gestión", "Que el Ministerio Público depende orgánicamente del Poder Ejecutivo provincial", "Que solo el Fiscal General puede litigar ante los tribunales de la Provincia"],
    "Un fiscal puede ser reemplazado por otro sin afectar la continuidad ni la validez de lo actuado.");

  q("Art. 3 Ley 633-E", "Principios que rigen su funcionamiento",
    "¿A qué principios se ajusta la actuación del Ministerio Público según el artículo 3 de la Ley 633-E?",
    "Legalidad, imparcialidad, unidad de actuación y dependencia jerárquica",
    ["Oportunidad, parcialidad, unidad de actuación y autonomía funcional", "Celeridad, oralidad, publicidad y concentración de los actos del proceso", "Independencia, inmediación, concentración y dependencia del Poder Ejecutivo"],
    "Ejerce sus funciones por medio de sus órganos propios, con arreglo a las leyes.");

  q("Art. 4 Ley 633-E", "Principios que rigen su funcionamiento",
    "Si un fiscal recibe una instrucción que estima improcedente y es ratificada por quien la emitió, ¿qué debe hacer?",
    "Cumplirla; la responsabilidad recae sobre quien insistió en ella",
    ["Negarse a cumplirla y elevar el caso al Fiscal General para su resolución", "Cumplirla y asumir él la responsabilidad por el acto realizado", "Elevarla al Poder Ejecutivo para que ratifique o rectifique lo dispuesto"],
    "Primero debe hacerlo saber por informe fundado a quien la emitió, para que la rectifique o ratifique (subordinación jerárquica).");

  q("Art. 9 Ley 633-E", "Principios que rigen su funcionamiento",
    "¿Qué garantiza el principio de superintendencia e independencia funcional?",
    "Absoluta independencia respecto de los demás poderes, sin recibir instrucciones de ellos",
    ["Que los miembros dependen del Gobernador para recibir instrucciones sobre su actuación", "Que pueden actuar sin control alguno del Fiscal General de la Corte", "Que están subordinados a la Cámara de Diputados en el ejercicio de sus funciones"],
    "Los poderes públicos están obligados a prestar la colaboración necesaria para el cumplimiento de sus funciones.");

  q("Art. 5 Ley 633-E", "Integración del Ministerio Público Fiscal",
    "¿Quién ejerce la superintendencia sobre los demás miembros y el personal del Ministerio Público según el artículo 5 de la Ley 633-E?",
    "El Fiscal General de la Corte de Justicia",
    ["El Defensor General de la Provincia, por ser titular de la defensa oficial", "El Presidente de la Corte de Justicia, por ser la máxima autoridad judicial", "El Fiscal de Cámara de mayor antigüedad en el cargo dentro del organismo"],
    "Lo integran el Fiscal General, los Fiscales de Cámara, Agentes Fiscales, Asesores y Defensores Oficiales.");

  q("Art. 114 Ley 1851-O", "Integración del Ministerio Público Fiscal",
    "Los Ayudantes Fiscales ejercen idénticas funciones que los fiscales del caso, salvo:",
    "Aquellas que impliquen la disponibilidad de la acción penal",
    ["Las que impliquen realizar audiencias de formalización ante el juez de garantías", "Las que impliquen tomar declaraciones a testigos durante la investigación", "Ninguna: tienen exactamente las mismas funciones que los fiscales del caso"],
    "Los Asesores de Menores e Incapaces intervienen donde esté comprometido el interés de niños, niñas, adolescentes o personas con discapacidad.");

  q("Resolución 4.092/2021", "Organización del Ministerio Público Fiscal según el sistema acusatorio",
    "¿Cómo se integra, como mínimo, cada Unidad Fiscal de Investigación?",
    "Dos fiscales coordinadores, fiscales del caso, ayudantes, personal administrativo y policía asignada",
    ["Por un solo fiscal y un secretario, sin personal administrativo propio", "Por tres jueces de garantías y un fiscal coordinador designado por la Corte", "Solo por fiscales del caso, sin ayudantes ni personal técnico asignado"],
    "La UFI del Norte es la excepción a la organización por especialidad temática: interviene en todos los hechos de la segunda circunscripción.");

  q("Ley 989-E", "UFI CAVIG",
    "¿Qué significa la sigla CAVIG?",
    "Centro de Abordaje de Violencia Intrafamiliar y de Género",
    ["Centro de Atención de Víctimas de Incidentes Graves", "Comisión de Abordaje de Violencia e Inseguridad General", "Centro Administrativo de Víctimas y Garantías"],
    "Investiga delitos cometidos contra cualquier persona por integrantes de su grupo familiar (arts. 4 y 5 de la Ley 989-E) y delitos con violencia de género.");

  q("Art. 80 inc. 11 C.P. (Código Penal)", "UFI CAVIG",
    "Cuando la violencia de género deriva en la muerte de la víctima (femicidio), ¿qué unidad fiscal pasa a ser competente?",
    "La UFI Delitos Especiales",
    ["La UFI CAVIG, por tratarse de un hecho de violencia intrafamiliar y de género", "La UFI ANIVI, por tratarse de un delito contra la integridad de las personas", "La UFI Flagrancia, por tratarse de un hecho grave de resolución inmediata"],
    "La distribución de competencias entre unidades no es estanca: responde a la calificación jurídica del hecho.");

  q("Ley 26.485", "UFI CAVIG",
    "Según la Ley Nacional 26.485, ¿cuántos tipos de violencia contra la mujer define el artículo 5?",
    "Cinco: física, psicológica, sexual, económica y patrimonial, y simbólica",
    ["Tres: física, psicológica y sexual, sin distinguir otras formas de violencia", "Seis: física, psicológica, sexual, económica, simbólica y obstétrica", "Cuatro: física, psicológica, sexual y laboral, en el ámbito privado"],
    "El artículo 6 define seis modalidades: doméstica, institucional, laboral, contra la libertad reproductiva, obstétrica y mediática.");

  q("Ley 24.632", "UFI CAVIG",
    "¿Qué es la Convención de Belém do Pará según el cuadernillo?",
    "La Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer (Ley 24.632)",
    ["La Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer (Ley 23.179)", "La Convención sobre los Derechos del Niño", "La Convención contra la Tortura"],
    "La CEDAW es la Ley 23.179. Ambas consagran el estándar de debida diligencia reforzada.");

  q("", "UFI ANIVI",
    "¿Qué investiga la Unidad Fiscal ANIVI?",
    "Los delitos contra la integridad sexual cuando la víctima es menor de edad o persona con discapacidad",
    ["Los delitos informáticos y las estafas cometidas a través de medios electrónicos", "Los delitos cometidos por funcionarios públicos en ejercicio de sus funciones", "Los delitos contra la propiedad cometidos sin muerte de la víctima"],
    "Trabaja con el protocolo de entrevista única (audiencia videograbada) con psicólogo especializado para evitar la revictimización.");

  q("", "UFI Flagrancia",
    "¿Con qué criterio organiza sus casos la UFI Flagrancia?",
    "Por circunstancia (el autor es sorprendido cometiendo el delito o inmediatamente después) y no por materia",
    ["Por la gravedad de la pena prevista para el delito investigado", "Por el domicilio de la víctima y su pertenencia a una circunscripción", "Por la materia del delito exclusivamente, sin tener en cuenta las circunstancias"],
    "Se rige por el procedimiento especial y abreviado del Capítulo III de la Ley 1851-O y descomprime al resto del sistema.");

  q("Resolución 4633/2023", "Unidad Fiscal del Norte",
    "¿Qué investiga la Unidad Fiscal del Norte?",
    "La totalidad de los delitos cometidos en la Segunda Circunscripción Judicial (Jáchal e Iglesia)",
    ["Solo los delitos informáticos cometidos en el norte de la Provincia", "Los delitos cometidos en los departamentos de Calingasta y Ullum", "Solo los delitos de violencia de género cometidos en Jáchal e Iglesia"],
    "Cuenta con dos fiscales del caso, ayudantes fiscales y personal administrativo.");

  q("", "Dependencias operativas complementarias",
    "¿Cuál es una función de la Unidad de Abordaje Territorial?",
    "Intervenir como primer interventor en el lugar del hecho y determinar la Unidad Fiscal competente",
    ["Dictar sentencias en causas penales leves cometidas en el territorio provincial", "Ejercer la defensa oficial de los imputados que carezcan de abogado particular", "Resolver los recursos de casación contra las sentencias del Colegio de Jueces"],
    "Inicia el legajo de investigación penal preliminar conforme a la Ley 1851-O.");

  q("Ley 2179-E", "El Ministerio Público de la Defensa",
    "¿A cargo de quién está el Ministerio Público de la Defensa?",
    "De un Defensor General",
    ["Del Fiscal General", "Del Presidente de la Corte", "Del Asesor de Menores"],
    "Tiene autonomía funcional y técnica respecto de los demás órganos del Poder Judicial; se integra además con Defensores Oficiales y el Defensor de la Víctima.");

  q("", "Las Asesorías Oficiales de Menores e Incapaces",
    "¿Qué representan las Asesorías Oficiales de Menores e Incapaces?",
    "Los intereses de menores de edad y personas con discapacidad, sin ser parte del conflicto",
    ["Los intereses del Estado provincial en los juicios en que éste sea parte", "La acusación penal en los delitos cometidos contra personas menores de edad", "La defensa técnica del imputado en los procesos penales de la niñez"],
    "A diferencia del Fiscal, que persigue el delito, y del Defensor, que resiste la acusación.");

  q("Ley 137-C", "Registro Inmobiliario",
    "En San Juan, el Registro General Inmobiliario:",
    "Integra el Poder Judicial y depende de la Corte de Justicia",
    ["Depende del Poder Ejecutivo, a través del Ministerio de Gobierno de la Provincia", "Depende de la Cámara de Diputados, que designa a su director", "Es un organismo autárquico de derecho privado con control del Foro de Abogados"],
    "Hay un registro en la ciudad de San Juan (Primera Circunscripción) y otro en Jáchal (Segunda), con dependencia administrativa del primero (Ley 137-C, antes ley 3802).");

  q("Acuerdo General 12/2026", "Escuela Judicial",
    "¿Qué aprobó el Acuerdo General Nº 12/2026 de la Corte de Justicia?",
    "La nueva Estructura Organizativa Funcional y el nuevo Reglamento de la Escuela Judicial",
    ["La creación de la Oficina de la Mujer y de la Dirección de Género", "El nuevo Reglamento Judicial aplicable a todos los empleados del Poder Judicial", "El nuevo régimen de ferias judiciales y de receso invernal del año 2026"],
    "La Escuela Judicial fue creada por el Acuerdo N° 34/1997 y funciona bajo la coordinación de un Ministro o Ministra de la Corte.");
})();

// ---------------------------------------------------------------- Tema III (parte 4: Escuela, Mediación, Tribunal Electoral, presupuesto)
(function () {
  const q = crearTema("Tema III — Organización Del Poder Judicial De San Juan", "t3");

  q("Art. 1 Reglamento Escuela Judicial", "Escuela Judicial",
    "¿De quién depende directamente la Escuela Judicial?",
    "De la Corte de Justicia de San Juan",
    ["Del Ministerio de Educación", "Del Consejo de la Magistratura", "De la Universidad Nacional de San Juan"],
    "Es un centro académico permanente de formación, capacitación y perfeccionamiento del Poder Judicial.");

  q("Art. 10 Reglamento Escuela Judicial", "Escuela Judicial",
    "¿Mediante qué plataforma institucional se acredita la capacitación de los integrantes del Poder Judicial?",
    "SICAP (Sistema Integral de Capacitación)",
    ["REFLEJAR (Instituto de Capacitación Judicial de las Provincias Argentinas)", "CEJUME (Centro Judicial de Mediación del Poder Judicial de San Juan)", "OFIJU (Oficina de Gestión Judicial de cada fuero de la Provincia)"],
    "La acreditación se integra al legajo digital del agente judicial.");

  q("Art. 13 Reglamento Escuela Judicial", "Escuela Judicial",
    "La Escuela Judicial integra el Instituto de Capacitación Judicial de las Provincias Argentinas y CABA, conocido como:",
    "REFLEJAR",
    ["SICAP", "CEJUME", "JUFEJUS"],
    "Funciona en el ámbito de la Junta Federal de Cortes y Tribunales Superiores de Provincias.");

  q("Ley 1990-P", "Centro Judicial de Mediación",
    "¿Qué ley instituye la mediación en la Provincia de San Juan y la declara de interés público?",
    "La Ley 1990-P",
    ["La Ley 883-A", "La Ley 2352-O", "La Ley 331-N"],
    "Para la mediación comunitaria y escolar la autoridad de aplicación es el Poder Ejecutivo; la mediación judicial se instituye en el ámbito del Poder Judicial.");

  q("Art. 15 Ley 1990-P", "Centro Judicial de Mediación",
    "¿Cuál es la autoridad de aplicación de la mediación judicial?",
    "La Corte de Justicia de la Provincia de San Juan",
    ["El Ministerio de Gobierno de la Provincia, a través de la Secretaría de Promoción Social", "El Foro de Abogados de San Juan, que lleva la matrícula de mediadores", "La Cámara de Diputados de la Provincia, que dictó la ley de mediación"],
    "El Centro Judicial de Mediación (CEJUME) se creó por Acuerdo General N° 23/2004 y depende de la Secretaría Administrativa de la Sala Tercera.");

  q("Ley 1990-P", "Centro Judicial de Mediación",
    "¿Cuál es la definición de mediación según el cuadernillo?",
    "Procedimiento no adversarial en el que un tercero neutral ayuda a las partes a un arreglo voluntario",
    ["Un proceso en el cual un juez impone una solución a las partes en disputa", "Un arbitraje obligatorio en el cual un tercero decide el conflicto planteado", "Un juicio abreviado en el cual las partes litigan ante un juez especializado"],
    "La Mediación Judicial Previa Obligatoria busca el abordaje temprano del conflicto y reducir la litigiosidad.");

  q("Art. 2 Ley 1990-P", "Centro Judicial de Mediación",
    "¿Qué implica el principio de confidencialidad en la mediación?",
    "Que lo dicho en la audiencia queda reservado, incluso lo hablado en privado, salvo autorización",
    ["Que el acta de la audiencia es pública y puede ser consultada por cualquier persona", "Que el mediador puede revelar a la otra parte lo dicho en reunión privada", "Que solo se reserva lo dicho en audiencias conjuntas con ambas partes presentes"],
    "Otros principios: voluntariedad, comunicación directa de las partes, satisfactoria composición de intereses y neutralidad.");

  q("Art. 2 Ley 1990-P", "Centro Judicial de Mediación",
    "¿Cómo debe ser el mediador respecto de las partes y del conflicto?",
    "Imparcial en relación a las partes y neutral en relación al conflicto",
    ["Neutral en relación a las partes e imparcial en relación al conflicto planteado", "Parcial a favor de la parte más débil para equilibrar la negociación", "Decisorio respecto del conflicto, pudiendo imponer un acuerdo a las partes"],
    "Es la dupla imparcialidad/neutralidad que guía la dirección del proceso.");

  q("Ley 1990-P", "Centro Judicial de Mediación",
    "¿Quiénes pueden actuar como mediadores en mediación judicial?",
    "Abogados capacitados, matriculados e inscriptos en el Foro y en el Registro de Mediadores Judiciales",
    ["Cualquier persona con título universitario que haya aprobado un curso de capacitación", "Solo jueces jubilados que se hayan desempeñado en el fuero civil", "Solo funcionarios judiciales designados por la Sala Tercera de la Corte"],
    "Los honorarios de los mediadores son asumidos por la Corte de Justicia según un esquema tarifario.");

  q("Ley 883-A", "Mediación previa y obligatoria en causas que el Estado es parte",
    "¿Qué instituye la Ley 883-A (antes ley 7675)?",
    "La mediación previa obligatoria en las causas donde el Estado provincial o municipios adheridos son parte",
    ["La mediación escolar obligatoria en todos los establecimientos educativos de la Provincia", "El arbitraje obligatorio laboral en todos los conflictos individuales del trabajo", "La mediación penal previa para todos los delitos de acción privada"],
    "Su régimen es de orden público (art. 27): su cumplimiento no puede ser eludido por las partes.");

  q("Art. 130 C.P. y Ley 331-N", "Tribunal electoral",
    "El Tribunal Electoral, ¿forma parte de la estructura del Poder Judicial?",
    "No; es un órgano extra poder, aunque funciona en dependencias de la Corte",
    ["Sí; es una Cámara especializada del Poder Judicial de la Provincia", "Sí; depende del Ministerio de Gobierno en su organización y funcionamiento", "No; es un órgano dependiente de la Cámara de Diputados de la Provincia"],
    "Se rige por la Ley 331-N (antes 5636), Código Electoral provincial, y conoce en primera y única instancia en juicios sobre faltas electorales y en las cuestiones de partidos políticos.");

  q("Art. 207 C.P.", "Gobierno y administración del Poder Judicial",
    "¿Qué organismo tiene a su cargo el gobierno y la administración del Poder Judicial?",
    "Exclusivamente la Corte de Justicia; no existe ningún otro organismo que colabore con ello",
    ["El Consejo de la Magistratura, que colabora con la Corte en su administración", "El Poder Ejecutivo, a través del Ministerio de Hacienda de la Provincia", "La Cámara de Diputados, mediante una comisión permanente de justicia"],
    "Principalmente incisos 1, 2, 5 y 6 del art. 207.");

  q("Art. 150 inc. 4 C.P.", "Gobierno y administración del Poder Judicial",
    "¿Qué asegura la exigencia de no menos del seis por ciento del presupuesto para el Poder Judicial?",
    "La autarquía o autonomía económica del Poder Judicial",
    ["La dependencia económica del Poder Ejecutivo en la ejecución del presupuesto", "La gratuidad de la justicia para todos los litigantes de la Provincia", "El aumento salarial automático de los magistrados y empleados judiciales"],
    "La Cámara no aprueba ninguna ley de presupuesto sin esa distribución mínima.");
})();

// ---------------------------------------------------------------- Tema III (parte 5: independencia, designación, reglamento)
(function () {
  const q = crearTema("Tema III — Organización Del Poder Judicial De San Juan", "t3");

  q("Ley 401-I", "Presupuesto",
    "Según la Ley 401-I (antes ley 6119), ¿cómo se transfieren los fondos que corresponden al Poder Judicial?",
    "La Tesorería General transfiere automáticamente, en forma diaria, a una cuenta específica el monto que le corresponda",
    ["Se transfieren mensualmente, previa solicitud formal de la Corte de Justicia", "Los administra directamente el Poder Ejecutivo y los entrega según necesidades", "Se transfieren una vez al año, al aprobarse la ley de presupuesto"],
    "El porcentaje anual no puede ser inferior al 6% del gasto corriente, excluyendo los importes con afectación determinada.");

  q("Art. 6 Ley 401-I", "Presupuesto",
    "¿Qué facultad tiene la Corte de Justicia respecto de los aranceles según el artículo 6 de la Ley 401-I?",
    "Establecer aranceles y fijar sus montos, garantizando el libre acceso a la justicia",
    ["Eximir de aranceles a todos los litigantes para garantizar el acceso a la justicia", "Solo proponer los aranceles al Poder Ejecutivo para su aprobación por decreto", "Ninguna: los aranceles judiciales los fija exclusivamente la Legislatura provincial"],
    "Es una derivación de la autarquía económica del Poder Judicial.");

  q("Art. 200 C.P.", "Garantías que aseguran la independencia judicial",
    "¿Cuál de las siguientes NO es una garantía de independencia judicial mencionada en el cuadernillo?",
    "La elección popular de los magistrados",
    ["La autarquía económica", "La inamovilidad", "La intangibilidad de las remuneraciones"],
    "También figuran la inmunidad de arresto y el imperio del art. 198 para mantener la inviolabilidad e independencia.");

  q("Art. 139 C.P.", "Garantías que aseguran la independencia judicial",
    "Los magistrados gozan de la inmunidad de arresto de los legisladores. ¿En qué plazo debe dar cuenta a la Cámara el juez que ordene la detención de un magistrado sorprendido en flagrante delito doloso?",
    "En tres días, con la información sumaria del hecho",
    ["En veinticuatro horas, con la información sumaria del hecho que motivó la detención", "En diez días, con la información sumaria del hecho que motivó la detención", "De inmediato, sin plazo, con la información sumaria del hecho que motivó la detención"],
    "La excepción es la flagrante ejecución de un hecho ilícito doloso con pena privativa de libertad.");

  q("Art. 89 Ley 2352-O", "Procedimiento de designación de magistrados",
    "Para jueces de paz letrados, la LOPJ reduce el requisito de residencia continuada previa en la Provincia a:",
    "Dos años",
    ["Cinco años", "Un año", "Diez años"],
    "La Constitución exige cinco años de residencia para los demás magistrados, pero no a los jueces de paz letrados.");

  q("Ley 325-E", "Procedimiento de designación de magistrados",
    "Según la Ley 325-E (antes ley 5594), los cargos de miembros del Consejo de la Magistratura son:",
    "Honoríficos",
    ["Remunerados con un adicional", "Vitalicios", "Rotativos mensualmente"],
    "El mandato dura 4 años y el ejercicio constituye carga pública.");

  q("Art. 150 inc. 27 C.P.", "Procedimiento de designación de magistrados",
    "En el procedimiento de designación de magistrados, ¿qué órgano elige finalmente entre los integrantes de la terna?",
    "La Cámara de Diputados",
    ["El Consejo de la Magistratura", "El Gobernador", "La Corte de Justicia"],
    "El Consejo organiza los concursos y eleva la terna; la Cámara designa.");

  q("Arts. 219 a 234 C.P.", "Remoción de los magistrados",
    "¿Cuántos sistemas de remoción de magistrados establece la Constitución de San Juan?",
    "Dos: el juicio político y el Jurado de Enjuiciamiento, según la jerarquía",
    ["Uno solo: el juicio político, aplicable a todos los magistrados y funcionarios", "Tres: juicio político, Jurado de Enjuiciamiento y sumario ante el Consejo", "Ninguno: la remoción de magistrados es un trámite exclusivamente administrativo"],
    "El juicio político juzga al Gobernador, Vicegobernador, Fiscal de Estado, ministros de la Corte y Fiscal General; el Jurado, a los demás.");

  q("Acuerdo General 98/2018", "Reglamento del Poder Judicial",
    "¿Qué norma aprobó el Código de Ética Judicial de San Juan?",
    "El Acuerdo General N° 98/2018",
    ["El Acuerdo General N° 24/98", "La Ley 2352-O", "El Acuerdo General N° 149/2022"],
    "El Reglamento interno del Poder Judicial vigente está en el Acuerdo General N° 24/98, hasta que la Corte lo modifique o sustituya.");

  q("Art. 122 LOPJ", "Reglamento del Poder Judicial",
    "¿Hasta cuántos días puede la Corte de Justicia aplicar la suspensión sin goce de haberes según el art. 122 LOPJ?",
    "Hasta 30 días",
    ["Hasta 10 días", "Hasta 60 días", "Hasta 90 días"],
    "La Sala Tercera también puede suspender hasta 30 días; la cesantía y exoneración corresponden solo a la Corte.");

  q("Art. 120 LOPJ", "Régimen de sanciones",
    "Para aplicar las sanciones disciplinarias de la LOPJ se procede previamente a:",
    "Un sumario administrativo, salvo el caso de apercibimiento",
    ["Un juicio oral y público ante el Tribunal Superior de la Provincia", "Un dictamen previo del Ministerio Público Fiscal sobre la falta cometida", "Una consulta al Gobernador de la Provincia sobre la sanción a aplicar"],
    "Todas las sanciones se registran en el legajo respectivo, en la oficina de Legajos y Certificaciones de Recursos Humanos.");

  q("Art. 21 Acuerdo General 24/98", "Reglamento del Poder Judicial",
    "La inasistencia al lugar de trabajo sin aviso durante tres días consecutivos implica:",
    "Abandono de servicio, pasible de la sanción de cesantía",
    ["Un simple apercibimiento por escrito, que se registra en el legajo", "Una suspensión de tres días sin goce de haberes, sin otra consecuencia", "El descuento de un día de haberes, sin otra sanción disciplinaria"],
    "Si la inasistencia es por enfermedad, además debe avisarse a la Secretaría Administrativa de la Corte el mismo día hasta las nueve horas.");

  q("Art. 110 LOPJ", "Régimen de licencias",
    "¿Cómo se compone la Feria Judicial y el Receso de Invierno según el artículo 110 de la LOPJ?",
    "La Feria es el mes de enero y el Receso de Invierno son quince días corridos",
    ["La Feria es el mes de julio y el Receso de Invierno es el mes de enero", "Ambos períodos duran un mes completo en el año calendario", "La Feria dura quince días en enero y el Receso de Invierno un mes en julio"],
    "Durante ambas se suspenden los plazos judiciales que deban computarse en días hábiles.");

  q("Acuerdo General 24/98", "Régimen de licencias",
    "¿Cuántos días dura la licencia por maternidad en el Poder Judicial según el cuadernillo?",
    "120 días, divididos antes y después del parto",
    ["90 días, divididos antes y después del parto", "180 días, divididos antes y después del parto", "60 días, divididos antes y después del parto"],
    "El permiso para la atención de lactante permite a la madre reducir una hora su jornada diaria.");

  q("Acuerdo General 24/98", "Régimen de licencias",
    "¿Cuántos días hábiles de licencia por matrimonio prevé el régimen del Poder Judicial?",
    "Doce días hábiles",
    ["Cinco días hábiles", "Diez días hábiles", "Quince días hábiles"],
    "Por nacimiento de hijo, 5 días hábiles al personal masculino; por fallecimiento de cónyuge, parientes en primer grado o hermano, cinco días hábiles.");

  q("Acuerdo General 24/98", "Régimen de licencias",
    "¿Cuántos días de licencia anual para rendir exámenes universitarios o terciarios tienen quienes superen los seis meses de antigüedad?",
    "Veintiocho días por año, en lapsos de hasta siete días",
    ["Diez días por año, en lapsos de hasta siete días", "Quince días por año, en lapsos de hasta siete días", "Treinta días por año, en un solo lapso continuo"],
    "Debe acreditarse con certificación del Instituto, Colegio o Universidad.");

  q("Acuerdo General 24/98", "Régimen de licencias",
    "Para pedir una licencia (no extraordinaria) con anticipación suficiente, ¿cuántos días de anticipación indica el cuadernillo?",
    "Cinco días",
    ["Un día", "Quince días", "Treinta días"],
    "La invocación de falsos motivos para obtener licencia es falta grave y da lugar a la cancelación de la concedida.");
})();

// ---------------------------------------------------------------- Tema IV (parte 1)
(function () {
  const q = crearTema("Tema IV — Ministerio Público De La Provincia De San Juan", "t4");

  q("Art. 4 Ley 633-E", "Subordinación jerárquica",
    "¿Cómo se imparten, por regla general, las instrucciones dentro del Ministerio Público?",
    "Por escrito; en caso de urgencia, verbalmente con constancia escrita inmediata",
    ["Siempre en forma verbal, sin necesidad de dejar constancia escrita", "Solo mediante resolución publicada en el Boletín Oficial de la Provincia", "Solo en audiencia, en presencia de todos los miembros del organismo"],
    "El fiscal que reciba una instrucción se atiene a ella, sin perjuicio de examinar su procedencia legal.");

  q("Art. 6 Ley 633-E", "Requisitos",
    "¿Qué edad mínima se requiere para ser Fiscal General de la Corte?",
    "Treinta años",
    ["Veinticinco años", "Treinta y cinco años", "Cuarenta años"],
    "Además diez años de ciudadanía, título de abogado y diez años de ejercicio profesional o magistratura.");

  q("Art. 6 Ley 633-E", "Requisitos",
    "Para ser Fiscal de Cámara, Agente Fiscal, Defensor y Asesor Oficial se requieren, entre otros, cinco años de ejercicio profesional y no menos de:",
    "Veinticinco años de edad",
    ["Veintiún años de edad", "Treinta años de edad", "Dieciocho años de edad"],
    "También ser argentino, nativo o naturalizado con diez años de ejercicio de la ciudadanía, y título de abogado.");

  q("Art. 7 Ley 633-E", "Designación",
    "Si las vacantes del Ministerio Público no se cubren en el plazo de noventa días, ¿qué puede hacer la Corte de Justicia?",
    "La Corte, a propuesta del Fiscal General, las cubre provisoriamente hasta la designación",
    ["La Corte designa definitivamente a los reemplazantes sin intervención de otro órgano", "La vacante queda sin cubrir hasta que se produzca la próxima convocatoria", "La Corte pide al Gobernador que designe a los reemplazantes de forma directa"],
    "La designación definitiva corresponde a la Cámara de Diputados, a propuesta de una terna del Consejo de la Magistratura.");

  q("Art. 9 Ley 633-E", "Superintendencia",
    "¿Quién es el titular de las potestades reglamentarias, administrativas y disciplinarias del Ministerio Público?",
    "El Fiscal General de la Corte",
    ["El Presidente de la Corte de Justicia", "El Defensor General", "El Fiscal de Cámara más antiguo"],
    "Los miembros gozan de absoluta independencia orgánica y funcional respecto de los demás poderes.");

  q("Art. 10 Ley 633-E", "Reemplazo",
    "Si el impedimento lo tuviera el Fiscal General, ¿cómo es reemplazado?",
    "Por sorteo, por un Fiscal de Cámara que reúna los requisitos para el cargo",
    ["Por el Defensor General, que asume la superintendencia hasta su reemplazo", "Por el Presidente de la Corte, que asume transitoriamente las funciones", "Por el Fiscal de Estado, que asume la representación del Ministerio Público"],
    "La intervención en una causa se mantiene hasta el final.");

  q("Art. 11 inc. 7 Ley 633-E", "Fiscal General",
    "¿Cuántas veces al año debe disponer el Fiscal General visitas de cárceles y establecimientos de detención, como mínimo?",
    "Tres veces",
    ["Una vez", "Seis veces", "Doce veces"],
    "Dicta un reglamento de visitas para verificar el cumplimiento de las leyes y la garantía de los derechos humanos.");

  q("Art. 11 inc. 9 Ley 633-E", "Fiscal General",
    "¿Cuántos miembros especiales del Ministerio Público propone el Fiscal General a la Corte para su designación anual?",
    "Diez",
    ["Cinco", "Quince", "Veinte"],
    "Se eligen de entre los abogados del Foro local que reúnan los requisitos del art. 204 de la Constitución para reemplazar a los titulares cuando todos los reemplazantes legales estén impedidos.");

  q("Art. 11 inc. 12 Ley 633-E", "Fiscal General",
    "¿Con qué derecho participa el Fiscal General en los Acuerdos de la Corte de Justicia?",
    "Con voz y sin voto",
    ["Con voz y voto", "Con voto solamente", "No participa"],
    "Para ello debe ser notificado con expresión del orden del día respectivo.");

  q("Art. 12 Ley 633-E", "Facultades disciplinarias",
    "¿Qué sanciones puede imponer el Fiscal General a miembros, funcionarios y agentes del Ministerio Público?",
    "Apercibimiento, suspensión hasta treinta días o multa hasta tres salarios mínimos",
    ["Solo apercibimiento por escrito, sin otra sanción disciplinaria", "Cesantía y exoneración, con comunicación a la Cámara de Diputados", "Suspensión de hasta seis meses sin goce de haberes"],
    "En todos los casos se respeta el derecho de defensa; contra las sanciones procede apelación ante la Corte (art. 13).");

  q("Art. 13 Ley 633-E", "Facultades disciplinarias",
    "Contra las sanciones impuestas por el Fiscal General procede:",
    "Recurso de apelación ante la Corte de Justicia",
    ["Recurso de revisión ante el Consejo de la Magistratura", "Recurso ante el Poder Ejecutivo", "Ningún recurso"],
    "Es una garantía frente a las potestades disciplinarias del Fiscal General.");

  q("Art. 14 Ley 633-E", "Licencias",
    "¿Hasta cuántos días puede el Fiscal General conceder licencia a miembros, funcionarios, agentes y empleados del Ministerio Público, con conocimiento de la Corte?",
    "Treinta días",
    ["Diez días", "Sesenta días", "Noventa días"],
    "Es una de las facultades del Fiscal General como titular del Ministerio Público.");

  q("Art. 15 Ley 633-E", "Auxiliares de la Fiscalía General",
    "¿Por quiénes es asistido, como mínimo, el Fiscal General?",
    "Por un Secretario Relator y un Secretario designados por la Corte",
    ["Por tres Fiscales de Cámara designados por el Consejo de la Magistratura", "Por un Defensor General designado por la Cámara de Diputados", "Por un Asesor y un Prosecretario designados por el Gobernador"],
    "Deben reunir los requisitos para ser Fiscal de Cámara.");

  q("Art. 20 Ley 633-E", "Fiscales de Impugnación",
    "¿Cuántos Fiscales de Cámara ejercen el Ministerio Fiscal del Tribunal de Impugnación?",
    "Seis",
    ["Tres", "Nueve", "Doce"],
    "Mientras convivan los sistemas procesales de las Leyes 754-O y 1851-O actuarán según el orden de turnos que fije el Fiscal General.");

  q("Art. 21 inc. 3 Ley 633-E", "Fiscales de Cámara",
    "Los Fiscales de Cámara asisten a los Acuerdos Administrativos de las Cámaras:",
    "Sin voto, pudiendo proponer las medidas que crean convenientes",
    ["Con voto, en todos los asuntos que traten las Cámaras", "Con voz y voto, pero solo en materia penal", "No asisten a los acuerdos administrativos de las Cámaras"],
    "De lo que deberá dejarse constancia.");

  q("Art. 22 Ley 633-E", "Auxiliares de los Fiscales de Cámara",
    "¿Qué requisitos tiene el Secretario de una Fiscalía de Cámara?",
    "Título de abogado y cinco años de ejercicio profesional o como agente judicial",
    ["Título de abogado y tres años de ejercicio profesional o como agente judicial", "Título de abogado y diez años de ejercicio profesional o como agente judicial", "Solo título de abogado, sin años de ejercicio profesional requeridos"],
    "Es designado por la Corte conforme al art. 45 de la Constitución Provincial.");

  q("Art. 24 Ley 633-E", "Fiscales de Primera Instancia",
    "¿Cuántos fiscales de primera instancia hay en la Primera Circunscripción Judicial?",
    "Cuarenta y cuatro",
    ["Veinticuatro", "Treinta y cuatro", "Cincuenta y cuatro"],
    "En la Segunda Circunscripción hay tres, al menos uno de los cuales actúa también ante los fueros no penales.");

  q("Art. 27 Ley 633-E", "Secretarios del Ministerio Público",
    "¿Qué requisitos tiene el Secretario del Ministerio Público de Primera Instancia (Ayudante Fiscal)?",
    "Título de abogado y tres años de ejercicio profesional o como agente judicial",
    ["Título de abogado y cinco años de ejercicio profesional o como agente judicial", "Título de abogado y diez años de ejercicio profesional o como agente judicial", "Ser mayor de edad solamente, sin título habilitante específico"],
    "Son designados por la Corte a propuesta del Fiscal General.");

  q("Art. 25 Ley 633-E", "Atribuciones de los Agentes Fiscales",
    "En materia penal, los Agentes Fiscales deben:",
    "Promover la acción penal, instar los procesos y recurrir resoluciones y sentencias",
    ["Dictar sentencias en causas menores cuando el fiscal de Cámara lo autorice", "Ejercer la defensa del imputado cuando éste carezca de abogado", "Resolver los conflictos de competencia entre los juzgados penales"],
    "En materia civil intervienen, entre otros, en nulidad de matrimonio, divorcio, acciones de estado, concursos y sucesorios.");

  q("Arts. 29 y 30 Ley 633-E", "Asesorías Oficiales de Menores e Incapaces",
    "¿Cuántas Asesorías Oficiales de Menores e Incapaces hay en la Primera Circunscripción Judicial?",
    "Seis",
    ["Una", "Tres", "Diez"],
    "En la Segunda Circunscripción hay una.");

  q("Art. 31 Ley 633-E", "Asesorías Oficiales de Menores e Incapaces",
    "Los Ministerios Públicos de Menores son parte necesaria en:",
    "Todos los asuntos del régimen de las personas y bienes de menores e incapaces",
    ["Solo las causas penales en que intervengan menores de edad", "Solo las causas de familia en que intervengan menores de edad", "Únicamente los procesos de adopción de niños, niñas y adolescentes"],
    "Los Asesores intervienen en juicios de todos los fueros donde los incapaces demanden o sean demandados.");
})();

// ---------------------------------------------------------------- Tema IV (parte 2: Defensa Oficial)
(function () {
  const q = crearTema("Tema IV — Ministerio Público De La Provincia De San Juan", "t4");

  q("Arts. 34 y 35 Ley 633-E", "Defensores Oficiales",
    "¿Cuántos Defensores Oficiales («Defensor de Pobres y Ausentes») hay en la Primera Circunscripción Judicial según la Ley 633-E?",
    "Veinticuatro",
    ["Doce", "Tres", "Cuarenta y cuatro"],
    "En la Segunda Circunscripción hay tres.");

  q("Art. 37 Ley 633-E", "Defensores Oficiales",
    "Cuando hubiere condenación en costas a favor del pobre que litiga, el Defensor de Pobres y Ausentes puede percibir honorarios, los cuales:",
    "Los regula el órgano jurisdiccional interviniente",
    ["Los fija el propio Defensor de Pobres y Ausentes que intervino", "Los fija el Fiscal General de la Corte de Justicia", "No se perciben nunca, por tratarse de una función gratuita"],
    "Nótese que la Ley 2179-E (art. 6) establece que el defensor oficial no tiene derecho a percibir honorarios regulados judicialmente.");

  q("Art. 41 Ley 633-E", "Defensores Oficiales ante el fuero de menores",
    "¿Cuál de estas es una función de los Defensores Oficiales ante el fuero de menores?",
    "Fiscalizar el trabajo de menores en fábricas, talleres y lugares públicos o privados",
    ["Dictar sentencias en las causas de menores que tramiten ante los juzgados", "Acusar a los menores infractores ante el juez penal de la niñez", "Designar directamente tutores para los menores huérfanos o abandonados"],
    "También patrocinar a quienes necesiten accionar ante los Tribunales de Menores, defender a los menores y velar por el cumplimiento de la Convención de los Derechos del Niño.");

  q("Art. 49 bis Ley 633-E", "Cláusulas transitorias",
    "¿Cuántos cargos de Secretarios del Ministerio Público de Primera Instancia (Ayudantes Fiscales) crea el artículo 49 bis?",
    "Doce",
    ["Cuatro", "Veinte", "Tres"],
    "También crea cuatro Secretarios de Primera Instancia (Ayudantes Defensores).");

  q("Art. 2 Ley 2179-E", "Misión de la Defensa Oficial",
    "¿Cuál es la misión de la Defensa Oficial según el artículo 2 de la Ley 2179-E?",
    "Defender y proteger los derechos humanos e individuales en el caso asignado",
    ["Representar los intereses del Estado provincial en los juicios en que sea parte", "Ejercer la acción penal pública en los delitos de acción pública", "Controlar la legalidad de los actos administrativos de la Provincia"],
    "No interviene en procesos administrativos salvo disposición expresa de la ley.");

  q("Art. 3 Ley 2179-E", "Autonomía funcional y técnica",
    "La Defensa Oficial ejerce sus funciones sin sujeción a directivas que emanen de:",
    "Órganos ajenos a su estructura",
    ["El Defensor General", "La Corte de Justicia únicamente", "El Fiscal General"],
    "Los funcionarios dependen solo de las directivas del Defensor General, con responsabilidad profesional y funcional.");

  q("Art. 4 Ley 2179-E", "Equiparaciones",
    "¿Qué remuneración percibe el Defensor General?",
    "La misma que un Fiscal de Cámara",
    ["La misma que un Ministro de la Corte de Justicia", "La misma que un Juez de Primera Instancia en lo Penal", "La misma que el Fiscal General de la Corte de Justicia"],
    "Los miembros de la Defensa Oficial gozan en cuanto a trato y respeto de los mismos derechos de jueces y fiscales.");

  q("Art. 6 Ley 2179-E", "Principios",
    "¿Qué significa el principio de intervención supletoria de la Defensa Oficial?",
    "Que su intervención cesa cuando el asistido designa abogado de la matrícula o asume su defensa",
    ["Que interviene únicamente cuando el juez de la causa así lo disponga", "Que reemplaza siempre al abogado particular en todos los procesos", "Que solo actúa en las causas penales y nunca en materia civil"],
    "Otros principios: interés predominante de la persona asistida, unidad de actuación, confidencialidad y gratuidad.");

  q("Art. 8 Ley 2179-E", "Funciones",
    "¿Qué asume la Defensa Oficial en causa penal con carácter subsidiario?",
    "La defensa técnica del imputado que no tenga abogado de la matrícula",
    ["La acusación pública del imputado en las causas de acción pública", "La investigación penal preparatoria de los hechos denunciados", "La representación del Estado provincial en los procesos penales"],
    "También asume la asistencia de víctimas del delito con escasez de recursos o en situación de vulnerabilidad.");

  q("Art. 11 Ley 2179-E", "Defensor General - Requisitos",
    "¿Cuántos años de desempeño como Defensor Oficial en San Juan se requieren para ser Defensor General?",
    "Cinco años",
    ["Tres años", "Diez años", "Quince años"],
    "Es asistido, como mínimo, por dos Secretarios de Ministerio Público.");

  q("Art. 12 inc. l Ley 2179-E", "Funciones del Defensor General",
    "El Defensor General debe asistir a visitas a establecimientos de detención e internación, al menos:",
    "Tres veces al año",
    ["Una vez al año", "Seis veces al año", "Todos los meses"],
    "Por sí o en compañía de los Defensores Oficiales.");

  q("Art. 12 inc. s Ley 2179-E", "Funciones del Defensor General",
    "¿Cuántos Defensores Oficiales de la Víctima debe disponer como mínimo el Defensor General por cada circunscripción judicial?",
    "Uno",
    ["Tres", "Cinco", "Diez"],
    "La Defensa de la Víctima se ejerce en procesos penales del sistema acusatorio adversarial, ante escasez de recursos o vulnerabilidad.");

  q("Art. 13 Ley 2179-E", "Defensores Oficiales",
    "¿Qué deben hacer los Defensores Oficiales frente a las resoluciones adversas de sus representados?",
    "Agotar los recursos legales; solo consentir con dictamen fundado si la prosecución perjudica al asistido",
    ["Consentir siempre las resoluciones adversas para evitar demoras en el proceso", "Recurrir solamente si el asistido abona los gastos y costas del recurso", "Remitir la resolución al Fiscal General sin interponer recurso alguno"],
    "La Defensa debe garantizar una defensa técnica efectiva y eficaz.");

  q("Art. 16 Ley 2179-E", "Licencias",
    "¿Hasta cuántos días puede el Defensor General conceder licencias?",
    "Hasta treinta días; las de mayor plazo las resuelve el Fiscal General",
    ["Hasta quince días; las de mayor plazo las resuelve la Corte de Justicia", "Hasta sesenta días; las de mayor plazo las resuelve el Gobernador", "Ninguna; todas las licencias las concede la Corte de Justicia"],
    "Se comunica a la Oficina Administrativa del Ministerio Público.");

  q("Art. 18 Ley 2179-E", "Recursos",
    "Contra una resolución sancionatoria del Defensor General, ¿en qué plazo debe interponerse y fundarse el recurso de apelación?",
    "Tres días de notificada la resolución",
    ["Cinco días de notificada la resolución", "Diez días de notificada la resolución", "Quince días de notificada la resolución"],
    "Lo resuelve el Fiscal General; contra éste cabe recurso jerárquico ante la Corte en cinco días.");

  q("Art. 21 Ley 2179-E", "Defensores Ad Hoc",
    "¿Cuántos Defensores Ad Hoc designa anualmente la Corte para cada circunscripción judicial?",
    "Diez",
    ["Cinco", "Veinte", "Tres"],
    "Intervienen en caso de impedimento o vacancia de la totalidad de los miembros de la Defensa Oficial.");
})();

// ---------------------------------------------------------------- Tema V (parte 1)
(function () {
  const q = crearTema("Tema V — Derecho Civil Y Derecho Procesal Civil", "t5");

  q("Art. 1 CCyC", "Fuentes y aplicación",
    "Según el artículo 1 del Código Civil y Comercial, los casos deben ser resueltos según las leyes aplicables, conforme con:",
    "La Constitución Nacional y los tratados de derechos humanos ratificados",
    ["Solo la jurisprudencia de la Corte Suprema de Justicia de la Nación", "Únicamente los usos, prácticas y costumbres de cada lugar", "La doctrina de los autores más reconocidos de cada materia"],
    "Los usos, prácticas y costumbres son vinculantes cuando las leyes o los interesados se refieren a ellos o en situaciones no regladas legalmente, siempre que no sean contrarios a derecho.");

  q("Art. 2 CCyC", "Interpretación",
    "¿Cuál NO es una pauta de interpretación de la ley del artículo 2 del CCyC?",
    "La voluntad exclusiva del juez",
    ["Las palabras de la ley y sus finalidades", "Las leyes análogas y los tratados sobre derechos humanos", "Los principios y valores jurídicos, de modo coherente con todo el ordenamiento"],
    "El artículo adopta siete reglas, cuatro de las cuales ya estaban en el ordenamiento anterior.");

  q("Art. 3 CCyC", "Deber de resolver",
    "¿Qué exige el artículo 3 del CCyC al juez?",
    "Resolver los asuntos mediante una decisión razonablemente fundada",
    ["Resolver siempre dentro de un plazo máximo de diez días hábiles", "Resolver siempre aplicando la costumbre aunque exista ley aplicable", "Abstenerse de resolver cuando no haya una ley que regule el caso"],
    "La resolución no debe ser incoherente, arbitraria ni socialmente disvaliosa.");

  q("Art. 5 CCyC", "Vigencia",
    "¿Desde cuándo rigen las leyes según el artículo 5 del CCyC, salvo que ellas determinen otra fecha?",
    "Después del octavo día de su publicación oficial",
    ["Desde el día de su sanción", "Desde el día siguiente a su publicación", "Después del décimo quinto día de su publicación"],
    "Hace efectiva la obligatoriedad de la ley mediante un plazo de ocho días desde la publicación en el Boletín Oficial.");

  q("Art. 6 CCyC", "Modo de contar los intervalos del derecho",
    "En el cómputo civil de los plazos, ¿se excluyen los días inhábiles o no laborables?",
    "No; el cómputo civil es de días completos y continuos",
    ["Sí, siempre se excluyen los días inhábiles y no laborables", "Solo se excluyen los domingos, pero no los sábados ni feriados", "Solo se excluyen los feriados nacionales, pero no los fines de semana"],
    "En los plazos fijados en días queda excluido el día de partida; los plazos vencen a la hora veinticuatro del día del vencimiento.");

  q("Art. 7 CCyC", "Eficacia temporal",
    "Respecto de la retroactividad de las leyes, el artículo 7 del CCyC establece que las leyes:",
    "No son retroactivas, sean o no de orden público, salvo disposición en contrario",
    ["Siempre son retroactivas si son de orden público", "Siempre son retroactivas, salvo que afecten derechos adquiridos", "Nunca pueden ser retroactivas, bajo ninguna excepción legal"],
    "Las nuevas leyes supletorias no se aplican a los contratos en curso de ejecución, salvo las normas más favorables al consumidor.");

  q("Art. 8 CCyC", "Principio de inexcusabilidad",
    "¿Qué establece el principio de inexcusabilidad del artículo 8?",
    "Que la ignorancia de las leyes no sirve de excusa para su cumplimiento",
    ["Que las leyes solo obligan a quienes efectivamente las conocen", "Que los extranjeros no están obligados a cumplir las leyes argentinas", "Que la ignorancia de la ley exime siempre de toda responsabilidad"],
    "Es similar al antiguo artículo 20 del Código Civil.");

  q("", "Los atributos de la personalidad",
    "¿Cuáles son los atributos de la personalidad que menciona el cuadernillo?",
    "Nombre, domicilio, capacidad, estado civil y derechos personalísimos",
    ["Nombre, patrimonio, nacionalidad y edad de la persona humana", "Domicilio, patrimonio y capacidad de la persona humana solamente", "Nombre, profesión y estado civil de la persona humana"],
    "La persona los tiene desde el momento de su nacimiento con vida.");

  q("Art. 19 CCyC", "Derechos de la personalidad",
    "Según el cuadernillo, ¿cómo define Rivera a los derechos de la personalidad?",
    "Prerrogativas extrapatrimoniales, inalienables, perpetuas y oponibles erga omnes",
    ["Derechos patrimoniales transmisibles por actos entre vivos o por causa de muerte", "Derechos de contenido económico, prescriptibles y renunciables por su titular", "Derechos que solo corresponden a los ciudadanos con capacidad de ejercicio"],
    "Corresponden a toda persona por su condición de tal, desde antes de su nacimiento y hasta después de su muerte.");

  q("Art. 51 CCyC", "Persona humana",
    "¿Qué reconoce el artículo 51 del CCyC como sustento de todos los derechos y actos personalísimos?",
    "La dignidad de la persona humana y su inviolabilidad",
    ["La nacionalidad de la persona humana y su ciudadanía", "La capacidad de ejercicio de la persona humana y su patrimonio", "El domicilio real de la persona humana y su estado civil"],
    "Es el concepto fundante del sistema axiológico que justifica el concepto de persona.");

  q("", "El nombre de las personas humanas",
    "¿Cómo está compuesto el nombre de las personas humanas?",
    "Por el prenombre o nombre de pila y por el apellido",
    ["Solo por el apellido", "Por el apodo y el apellido", "Por el apellido paterno y el materno obligatoriamente"],
    "El nombre cumple una función individual (da individualidad) y otra social (identificación ante los demás).");

  q("", "El nombre de las personas humanas",
    "Si los progenitores no se ponen de acuerdo sobre el apellido de los hijos, el Código opta por:",
    "El azar (sorteo)",
    ["El apellido paterno", "El apellido materno", "La decisión del juez"],
    "Se prefiere el sorteo por ser la solución que mejor respeta el principio de igualdad; todos los hijos deben llevar el mismo apellido.");

  q("Art. 73 CCyC", "Domicilio real",
    "¿Dónde tiene su domicilio real la persona humana?",
    "En su residencia habitual o, si ejerce actividad profesional, donde la desempeña",
    ["Siempre en el lugar de su nacimiento, sin importar su residencia actual", "Siempre en el lugar donde trabaja, aunque resida en otro lugar", "En el lugar que la ley presume sin admitir prueba en contrario"],
    "El domicilio legal, en cambio, es el que la ley presume, sin admitir prueba en contra (art. 74).");

  q("Art. 74 CCyC", "Domicilio legal",
    "El domicilio legal es el lugar que:",
    "El que la ley presume, sin admitir prueba en contra, como residencia permanente",
    ["El que la persona elige libremente para el ejercicio de sus derechos", "El que el juez fija en cada caso según las circunstancias", "El que se acredita por la residencia habitual de la persona"],
    "Por ejemplo, los funcionarios públicos tienen su domicilio en el lugar en que deben cumplir sus funciones, si no son temporarias o de simple comisión.");
})();

// ---------------------------------------------------------------- Tema V (parte 2)
(function () {
  const q = crearTema("Tema V — Derecho Civil Y Derecho Procesal Civil", "t5");

  q("", "Domicilio especial",
    "¿Qué es el domicilio ad litem o procesal?",
    "El domicilio constituido por el litigante dentro del radio del tribunal",
    ["El domicilio real del demandado, donde se le notifica la demanda", "El domicilio legal de los funcionarios públicos en ejercicio de sus funciones", "El domicilio de las personas jurídicas, que coincide con su sede social"],
    "Su razón práctica es permitir las notificaciones a través de los oficiales de justicia.");

  q("Art. 74 CCyC", "Domicilio legal",
    "¿Dónde tienen su domicilio legal los militares en servicio activo?",
    "En el lugar en que están prestando servicio",
    ["En el lugar de su nacimiento", "En el lugar de su residencia anterior", "En la capital de la provincia"],
    "Las personas incapaces lo tienen en el domicilio de sus representantes; los transeúntes, en el lugar de su residencia actual.");

  q("Art. 22 CCyC", "Capacidad de derecho",
    "¿Qué es la capacidad de derecho según el artículo 22 del CCyC?",
    "La aptitud para ser titular de derechos y deberes jurídicos",
    ["La aptitud para ejercer por sí mismo los derechos", "La aptitud para contratar", "La edad mínima para trabajar"],
    "No hay personas incapaces de derecho, sino supuestos de incapacidades de derecho respecto de ciertos hechos o actos.");

  q("Art. 23 CCyC", "Capacidad de ejercicio",
    "Según el artículo 23, ¿cuál es la regla y cuál la excepción en materia de capacidad?",
    "La regla es la capacidad de ejercicio; la excepción, la incapacidad",
    ["La regla es la incapacidad de ejercicio; la excepción, la capacidad", "Ambas son reglas que se aplican según el criterio del juez", "Depende de la edad de la persona al momento de actuar"],
    "Antes la capacidad de ejercicio se denominaba capacidad de hecho o de obrar.");

  q("Art. 24 CCyC", "Incapacidad de ejercicio",
    "¿Cuáles son los tres casos de incapacidad de ejercicio del artículo 24?",
    "Persona por nacer, sin edad o madurez suficiente, e incapaz por sentencia",
    ["Menores, sordomudos y dementes declarados judicialmente incapaces", "Menores, fallidos y religiosos profesos declarados incapaces por ley", "Pródigos, menores y extranjeros sin residencia en el país"],
    "El CCyC ya no distingue entre incapaces absolutos y relativos, no incluye la sordomudez y no habla de «dementes».");

  q("", "Incapacidad de derecho",
    "El acto realizado violando una incapacidad de derecho es:",
    "Nulo de nulidad absoluta",
    ["Nulo de nulidad relativa", "Válido", "Anulable solo a pedido del incapaz"],
    "En cambio, el acto realizado violando una incapacidad de ejercicio es de nulidad relativa.");

  q("Art. 1002 CCyC", "Inhabilidades especiales para contratar",
    "¿Cuál de las siguientes personas NO puede contratar en interés propio, respecto de bienes litigiosos de procesos en los que intervienen o han intervenido?",
    "Los abogados y procuradores",
    ["Los médicos que atienden a las partes del proceso", "Los docentes que se desempeñan en escuelas públicas", "Los escribanos que intervienen en las escrituras de venta"],
    "También los jueces, funcionarios y auxiliares de la justicia, árbitros y mediadores respecto de bienes relacionados con procesos en que intervienen o intervinieron.");

  q("Art. 25 CCyC", "Persona menor de edad",
    "Según el artículo 25, ¿desde qué edad el CCyC denomina «adolescente» a la persona menor de edad?",
    "Desde los trece años",
    ["Desde los doce años", "Desde los quince años", "Desde los dieciséis años"],
    "Menor de edad es la persona que no ha cumplido dieciocho años.");

  q("Arts. 260 y 261 CCyC", "Persona menor de edad",
    "¿A qué edad se adquiere el discernimiento para los actos voluntarios ilícitos y para los lícitos?",
    "A los diez años para los ilícitos y a los trece años para los lícitos",
    ["A los trece años para ambos", "A los diez años para ambos", "A los dieciséis años para los lícitos y trece para los ilícitos"],
    "Según el cuadernillo, es una novedad del Código la autonomía progresiva.");

  q("Art. 26 CCyC", "Persona menor de edad",
    "Según el artículo 26, ¿desde qué edad el adolescente es considerado como un adulto para las decisiones atinentes al cuidado de su propio cuerpo?",
    "Desde los dieciséis años",
    ["Desde los trece años", "Desde los catorce años", "Desde los dieciocho años"],
    "Entre los trece y dieciséis años se presume su aptitud para decidir respecto de tratamientos no invasivos.");

  q("Art. 595 inc. f CCyC", "Persona menor de edad",
    "¿A partir de qué edad el niño debe prestar consentimiento para su propia adopción?",
    "A partir de los diez años",
    ["A partir de los trece años", "A partir de los dieciséis años", "No necesita consentir"],
    "Según el cuadernillo, cuando gozan de edad y grado de madurez suficiente pueden ejercer por sí otros derechos como demandar alimentos a sus progenitores.");

  q("Art. 141 CCyC", "Personas jurídicas",
    "¿Cómo define el artículo 141 del CCyC a las personas jurídicas?",
    "Los entes a los que el ordenamiento confiere aptitud para adquirir derechos y contraer obligaciones",
    ["Las agrupaciones de personas humanas constituidas con fines de lucro", "Las sociedades comerciales inscriptas en el Registro Público de Comercio", "Los entes que carecen de patrimonio propio y de representantes legales"],
    "La persona jurídica tiene personalidad distinta de la de sus miembros, que no responden por sus obligaciones salvo disposición expresa de la ley.");

  q("Art. 146 CCyC", "Personas jurídicas públicas",
    "¿Cuál de los siguientes es una persona jurídica pública según el artículo 146?",
    "La Iglesia Católica",
    ["Las sociedades", "Las fundaciones", "Las cooperativas"],
    "También el Estado nacional, las Provincias, la CABA, los municipios, las entidades autárquicas, los Estados extranjeros y las organizaciones reconocidas por el derecho internacional público.");

  q("Art. 148 CCyC", "Personas jurídicas privadas",
    "¿Cuál NO es una persona jurídica privada del artículo 148?",
    "Los municipios",
    ["Las sociedades", "Las asociaciones civiles", "El consorcio de propiedad horizontal"],
    "También las simples asociaciones, fundaciones, iglesias y confesiones religiosas, mutuales y cooperativas.");

  q("Art. 257 CCyC", "Hechos jurídicos",
    "¿Qué es un hecho jurídico según el artículo 257?",
    "El acontecimiento que produce el nacimiento, modificación o extinción de relaciones jurídicas",
    ["Todo acontecimiento de la naturaleza, tenga o no efectos jurídicos", "El acto voluntario con fin inmediato de producir efectos jurídicos", "Solo el hecho humano ilícito que genere un daño a terceros"],
    "El acto jurídico es una especie del género hecho jurídico: todos los actos son hechos jurídicos, pero no al revés.");

  q("Arts. 1897 a 1899 CCyC", "Hechos jurídicos",
    "La usucapión es un ejemplo de adquisición:",
    "Originaria, pues el derecho no se funda en otro derecho antecedente",
    ["Derivada y traslativa, pues el derecho pasa de un titular a otro", "Derivada y constitutiva, pues el titular anterior conserva el derecho", "Constitutiva del usufructo, pues se grava el derecho del propietario"],
    "La compraventa y la cesión de créditos son ejemplos de adquisición derivada.");
})();

// ---------------------------------------------------------------- Tema V (parte 3)
(function () {
  const q = crearTema("Tema V — Derecho Civil Y Derecho Procesal Civil", "t5");

  q("Art. 259 CCyC", "Acto jurídico",
    "¿Cómo define el artículo 259 al acto jurídico?",
    "El acto voluntario lícito con fin inmediato de adquirir, modificar o extinguir relaciones jurídicas",
    ["Cualquier acontecimiento que produce efectos jurídicos para las personas", "El acto voluntario ilícito que causa un daño a otra persona", "El hecho de la naturaleza que produce efectos sobre las relaciones jurídicas"],
    "Sus caracteres: voluntario (con discernimiento, intención y libertad), lícito y con finalidad jurídica.");

  q("", "Clasificación de los actos jurídicos en cuanto a su forma",
    "En los actos formales «ad solemnitatem», la forma es:",
    "Un requisito inexcusable de validez; su incumplimiento acarrea nulidad",
    ["Un medio de prueba exigido solo para la protección de los terceros", "Una formalidad totalmente libre que las partes pueden omitir", "Un requisito exigido solo para proteger los derechos de terceros"],
    "En los «ad probationem» la forma se exige como medio de prueba y protección de derechos de terceros.");

  q("Art. 289 CCyC", "Instrumentos públicos",
    "¿Cuál de las siguientes NO es un instrumento público según el artículo 289?",
    "El contrato firmado por las partes sin intervención de oficial público",
    ["Las escrituras públicas y sus copias o testimonios", "Los instrumentos extendidos por escribanos o funcionarios públicos con los requisitos legales", "Los títulos emitidos por el Estado nacional, provincial o la CABA"],
    "Lo que confiere calidad de público a un instrumento es su autenticidad.");

  q("", "Instrumentos privados",
    "¿Cuál es la condición esencial para la existencia de un instrumento privado?",
    "La firma de las partes",
    ["La intervención de un escribano", "La inscripción en un registro", "La fecha cierta"],
    "Rige el principio de libertad de formas, con la limitación de la firma.");

  q("", "Contrato",
    "¿Cómo se define el contrato?",
    "El acto por el que dos o más partes manifiestan su consentimiento para crear relaciones patrimoniales",
    ["El acuerdo de una sola voluntad que obliga a su declarante", "El acto unilateral de disposición sobre bienes propios del declarante", "La obligación nacida de un hecho ilícito que causa daño a otro"],
    "El CCyC regula una parte general, los contratos de consumo y los contratos en particular (Libro Tercero, Títulos II, III y IV).");
})();

// ---------------------------------------------------------------- Tema V (parte 4: Derecho Procesal Civil I)
(function () {
  const q = crearTema("Tema V — Derecho Civil Y Derecho Procesal Civil", "t5");

  q("", "Proceso. Concepto",
    "¿Cuándo una pretensión procesal es «admisible» y cuándo «fundada»?",
    "Admisible si permite un fallo sobre el fondo; fundada si resulta apropiada para una decisión favorable",
    ["Admisible si es favorable al actor; fundada si es formalmente correcta", "Ambos términos son sinónimos y se utilizan de modo indistinto", "Admisible si existe prueba; fundada si ya hay sentencia dictada"],
    "La pretensión procesal debe reunir requisitos de admisibilidad y de fundabilidad.");

  q("", "Proceso. Concepto",
    "Entre los tipos de proceso, ¿cuál NO corresponde al proceso de conocimiento?",
    "Las ejecuciones cambiarias",
    ["El ordinario", "El abreviado", "Todos corresponden al proceso de conocimiento"],
    "Las ejecuciones cambiarias e hipotecarias son procesos de ejecución; el concursal comprende verificaciones de crédito y concurso especial.");

  q("", "Procedimiento",
    "¿Qué diferencia hay entre proceso y procedimiento?",
    "El proceso es el conjunto de actos para obtener una norma individual; el procedimiento, sus etapas",
    ["Son exactamente lo mismo y se utilizan como sinónimos en la práctica", "El procedimiento es el conjunto de actos y el proceso son sus etapas", "El proceso es solo la sentencia y el procedimiento, solo la demanda"],
    "En el juicio ordinario, el procedimiento incluye demanda, contestación, reconvención, prueba, sentencia, recursos y ejecución.");

  q("Art. 39 CPC", "Partes en el proceso",
    "¿Cómo se adquiere la cualidad de parte, actora o demandada?",
    "Por el solo hecho de promover la demanda o de ser llamado a contestarla",
    ["Solo si se acredita el derecho invocado con la prueba producida", "Solo después de que se dicte la sentencia que decide la causa", "Por designación del juez, mediante providencia de trámite"],
    "No es necesario que el proponente tenga realmente el derecho que alega: en el inicio del proceso son simples afirmaciones.");

  q("", "Partes en el proceso",
    "¿Qué supone la legitimación?",
    "La aptitud para estar en juicio como parte actora o demandada",
    ["La capacidad de ejercicio que se exige al juez de la causa", "El derecho a apelar las resoluciones que sean desfavorables", "El domicilio constituido por la parte dentro del radio del tribunal"],
    "Por ejemplo, quien demanda la escrituración debe contar con el boleto de compraventa y haber pagado el precio.");

  q("Arts. 33 a 36 CPC", "Juez",
    "¿En qué artículos del Código Procesal Civil local están contenidos los deberes y facultades de los jueces?",
    "Del artículo 33 al 36 inclusive",
    ["Del artículo 1 al 10 inclusive", "Del artículo 39 al 41 inclusive", "Del artículo 90 al 91 inclusive"],
    "El juez no es parte en el juicio; su misión es juzgadora.");

  q("Art. 42 CPC", "Muerte o incapacidad de una de las partes",
    "Comprobada la muerte o incapacidad de una de las partes, el juez:",
    "Suspende el trámite y cita a herederos o representantes bajo apercibimiento de rebeldía",
    ["Archiva el expediente hasta que se presenten los herederos o representantes", "Continúa el proceso sin citar a nadie, con intervención del defensor oficial", "Declara la caducidad de la instancia y ordena el archivo de las actuaciones"],
    "La suspensión opera desde que se acredita el hecho y el juez lo dispone.");

  q("Arts. 90 y 91 CPC", "Sustitución de parte",
    "En San Juan, si una de las partes enajena el bien objeto del litigio, ¿qué ocurre con la intervención del adquirente?",
    "El adquirente puede intervenir sin conformidad expresa de la contraria",
    ["El adquirente solo puede intervenir con conformidad expresa de la contraria", "El adquirente no puede intervenir en el proceso bajo ninguna circunstancia", "El proceso se retrotrae a su inicio con el nuevo litigante"],
    "Es una diferencia con el Código nacional: el proceso continúa sin retrotraer los actos ya cumplidos.");

  q("Art. 39 CPC", "Domicilio",
    "Según el artículo 39 del CPC, toda persona que litigue debe constituir domicilio procesal:",
    "En la circunscripción del tribunal, más un domicilio procesal electrónico",
    ["Solo un domicilio real, sin necesidad de constituir otro domicilio", "Solo un domicilio electrónico, sin necesidad de domicilio físico", "En cualquier lugar de la Provincia que la parte elija libremente"],
    "Debe cumplirse en el primer escrito o audiencia y ser aceptado por el tribunal; además se denuncia el domicilio real, el especial o el legal.");

  q("", "Domicilio procesal",
    "¿Dónde debe estar constituido el domicilio procesal según el cuadernillo?",
    "Dentro del anillo interno de la Avenida de Circunvalación",
    ["En cualquier departamento de la Provincia que la parte elija", "En el edificio donde funciona el tribunal que interviene en la causa", "En el domicilio real del abogado patrocinante únicamente"],
    "La parte no puede tener dos o más domicilios constituidos.");

  q("Acordada 6/2018", "Domicilio procesal electrónico",
    "¿Qué acordada de la Corte implementó el sistema de notificación electrónica y la carga de constitución de domicilio electrónico?",
    "La Acordada 6/2018, vigente desde el 1 de mayo de 2018",
    ["La Acordada 149/2022, vigente desde el 1 de enero de 2022", "La Acordada 24/98, vigente desde el 1 de marzo de 1998", "La Acordada 98/2018, vigente desde el 1 de junio de 2018"],
    "Fue modificada por las Acordadas 32/2018 y 42/2018.");

  q("Art. 40 CPC", "Falta de constitución y denuncia de domicilio",
    "Si no se constituye domicilio, las sucesivas resoluciones se tendrán por notificadas:",
    "Por ministerio de la ley, conforme a lo fijado por el artículo 132",
    ["Mediante cédula que se diligencia en el domicilio real de la parte", "Por edictos publicados en el Boletín Oficial y en un diario local", "Personalmente en el tribunal, mediante diligencia en el expediente"],
    "Esto se mantiene hasta que el tribunal acepte el domicilio procesal y electrónico que se constituya ulteriormente.");

  q("Art. 41 CPC", "Subsistencia de los domicilios",
    "¿Hasta cuándo subsisten los domicilios constituidos en un proceso?",
    "Hasta la terminación del juicio o su archivo, salvo que se constituya otro",
    ["Hasta el dictado de la sentencia de primera instancia en la causa", "Hasta cada nueva presentación que realice la parte en el expediente", "Por el plazo de un año desde que fueron constituidos en el expediente"],
    "Para las demás partes subsiste el anterior hasta que se les notifique por cédula la sustitución.");

  q("Art. 45 CPC", "Patrocinio letrado",
    "Según el artículo 45 del CPC, toda persona puede comparecer en juicio por derecho propio:",
    "Con patrocinio letrado, salvo que prefiera ser representada por abogado o procurador",
    ["Sin ninguna asistencia letrada, bajo su exclusiva responsabilidad", "Únicamente por medio de apoderado, con poder general o especial", "Únicamente si la persona que litiga es abogada de la matrícula"],
    "El abogado patrocinante tiene la dirección jurídica del proceso; sus obligaciones son de medios, no de resultado.");

  q("Art. 48 CPC", "Patrocinio letrado",
    "Si un escrito es firmado solo por la parte y no por el abogado patrocinante, ¿qué ocurre?",
    "Se tiene por no presentado y se devuelve si no se suple la omisión en el segundo día",
    ["Se admite igualmente, sin necesidad de otra formalidad adicional", "Se admite con apercibimiento de aplicar una multa a la parte", "Se intima a ratificarlo dentro de los cinco días siguientes"],
    "El abogado deberá suscribir el escrito ante la presencia del actuario del Tribunal, quien certifica esa circunstancia.");

  q("Art. 46 CPC", "Excepciones al patrocinio letrado",
    "¿En cuál de estos casos se puede actuar sin patrocinio letrado?",
    "Para pedir declaratoria de pobreza o contestar intimaciones de carácter personal",
    ["Para contestar una demanda en el juicio ordinario o abreviado", "Para interponer recursos contra las sentencias de primera instancia", "Para ofrecer prueba en la audiencia inicial del proceso"],
    "También para solicitar y recibir órdenes de pago y tramitar informaciones sumarias o certificaciones ante la Justicia de Paz.");

  q("Art. 363 CPC", "Patrocinio letrado",
    "¿Qué amplía el artículo 363 del CPC respecto de las facultades del patrocinante?",
    "Firmar por sí solo peticiones de mero trámite e impulso y asistir a audiencias sin el patrocinado",
    ["Transigir en el juicio sin necesidad de autorización de su patrocinado", "Firmar la demanda sin la firma de la parte que patrocina", "Cobrar sus honorarios sin necesidad de que sean regulados por el juez"],
    "Es una atribución que amplía la posibilidad del abogado patrocinante.");

  q("Art. 49 CPC", "Representación legal o necesaria",
    "¿Quiénes actúan mediante representación legal o necesaria en juicio?",
    "Los incapaces de hecho y las personas jurídicas, según sus estatutos",
    ["Quienes otorgan poder a un abogado o procurador de la matrícula", "Las partes que actúan con patrocinio letrado por derecho propio", "Los abogados que actúan en causa propia sin patrocinio ajeno"],
    "El representante legal también debe hacerse patrocinar por un abogado u otorgar poder al profesional.");
})();

// ---------------------------------------------------------------- Tema V (parte 5: Derecho Procesal Civil II)
(function () {
  const q = crearTema("Tema V — Derecho Civil Y Derecho Procesal Civil", "t5");

  q("Art. 51 CPC", "Gestor procesal",
    "Si el gestor procesal no presenta los poderes o no se ratifica la gestión dentro del plazo, ¿qué ocurre?",
    "Es nulo lo actuado por el gestor, que paga las costas; el plazo es de 40 días hábiles",
    ["Se tiene por válida la gestión realizada, aunque no se ratifique", "Se suspende el juicio por el plazo de un año, sin otra sanción", "Se sanciona al gestor con multa, pero lo actuado conserva validez"],
    "La gestión procede en casos de urgencia, es de interpretación restrictiva y solo puede usarse una vez por instancia.");

  q("Art. 52 CPC", "Efectos de la presentación del poder",
    "Admitida la personería del apoderado, sus actos:",
    "Obligan al poderdante como si los practicara él, salvo exceso en los límites del poder",
    ["No obligan al poderdante, que debe ratificar cada acto procesal", "Obligan al poderdante solo cuando éste los ratifica por escrito", "Obligan solamente al abogado apoderado que los realiza"],
    "El poder se extiende a los incidentes procesales y a los que se sucedan en la litis.");

  q("Art. 55 CPC", "Cesación de la representación",
    "En caso de renuncia del apoderado, el juez fija un plazo para que el poderdante comparezca, que generalmente es de:",
    "Cinco días, bajo apercibimiento de continuar en rebeldía, notificado por cédula",
    ["Veinte días, notificado por edictos en el Boletín Oficial", "Diez días, sin apercibimiento alguno de continuar en rebeldía", "Un día, notificado personalmente al poderdante en el tribunal"],
    "El abogado debe continuar con las gestiones hasta que venza el plazo para que el poderdante comparezca.");

  q("Art. 55 inc. 5 CPC", "Cesación de la representación",
    "El mandatario que no haga conocer en el expediente el deceso o incapacidad del representado dentro del plazo de diez días:",
    "Pierde el derecho a cobrar los honorarios devengados con posterioridad",
    ["Debe pagar las costas del juicio desde la fecha del fallecimiento", "Es sancionado con una multa a favor de la parte contraria", "Pierde la matrícula profesional por el plazo de un año"],
    "Si no se conoce el domicilio de los herederos, se los cita por edictos por dos días consecutivos, bajo apercibimiento de nombrarles Defensor Oficial.");

  q("Art. 56 CPC", "Unificación de la personería",
    "¿Cuándo procede la unificación de personería?",
    "Cuando hay pluralidad de partes con distintos abogados y el derecho o fundamento es el mismo",
    ["Cuando una de las partes lo solicita en cualquier momento del proceso", "Solo en procesos penales con pluralidad de imputados y querellantes", "Cuando el juez lo decide sin audiencia previa de los interesados"],
    "El juez, luego de contestada la demanda, intima a unificarla; si no hay acuerdo, designa a alguno de los abogados.");

  q("Art. 108 CPC", "Idioma",
    "¿Qué idioma debe utilizarse en los escritos judiciales y en todos los actos del proceso?",
    "El idioma nacional",
    ["Cualquier idioma, con traducción", "El latín", "El idioma del demandado"],
    "Si quien debe declarar no conoce el idioma nacional se designa por sorteo un traductor público; los documentos en idioma extranjero se acompañan con traducción de traductor público matriculado.");

  q("", "Redacción",
    "Un escrito que no cumple con la forma de presentación exigida se tiene por no presentado si la omisión no se suple dentro de:",
    "Dos días siguientes a la notificación por ministerio de la ley de la providencia",
    ["Cinco días siguientes a la notificación por ministerio de la ley de la providencia", "Veinticuatro horas siguientes a la notificación por ministerio de la ley de la providencia", "Diez días siguientes a la notificación por ministerio de la ley de la providencia"],
    "Los escritos deben presentarse en forma electrónica; las presentaciones en soporte papel solo en los supuestos habilitados por la reglamentación.");

  q("Art. 286 CPC", "Encabezamiento",
    "Según el artículo 286 del CPC, la demanda debe contener:",
    "Los hechos claramente explicados, el derecho expuesto sucintamente y la petición en términos claros",
    ["Solo la petición, sin explicación de los hechos ni del derecho", "El derecho expuesto extensamente y la petición en términos ambiguos", "Solo los hechos, sin exposición del derecho ni petición concreta"],
    "Es una exigencia de claridad y precisión de la demanda.");

  q("Art. 112 CPC", "Escrito firmado a ruego",
    "Cuando un escrito fuere firmado a ruego del interesado, el funcionario judicial debe:",
    "Certificar que el firmante fue autorizado en su presencia o que ratificó la autorización ante él",
    ["Anular el escrito por carecer de la firma autógrafa del interesado", "Exigir que el escrito sea firmado por el abogado patrocinante", "Requerir siempre la intervención de un escribano público de registro"],
    "Fuera de los estrados tribunalicios, la situación debe ser certificada por escribano público.");

  q("", "Cargo",
    "¿Qué efecto tiene el cargo judicial?",
    "Da fecha cierta al escrito y hace plena fe; solo se desvirtúa por redargución de falsedad",
    ["Es un simple sello administrativo que carece de todo valor probatorio", "Prueba solamente la identidad de la persona que presenta el escrito", "Se desvirtúa mediante cualquier prueba en contrario que ofrezca la parte"],
    "Las presentaciones en papel se consideran en plazo si se realizan el día hábil siguiente al vencimiento dentro de las dos primeras horas del horario.");

  q("", "Audiencias testimoniales",
    "¿Desde qué edad puede ser propuesta una persona como testigo?",
    "Mayor de catorce años",
    ["Mayor de dieciocho años", "Mayor de diez años", "Mayor de dieciséis años"],
    "Están excluidos los consanguíneos o afines en línea directa de las partes y el cónyuge, salvo reconocimiento de firmas o declaraciones sobre nacimientos, defunciones o matrimonios de familiares.");

  q("Arts. 363 y 420 CPC", "Audiencias testimoniales",
    "¿Cuántos testigos se admiten en el juicio ordinario y en el proceso abreviado?",
    "Ocho en el ordinario y cinco en el abreviado",
    ["Cinco en el ordinario y ocho en el abreviado", "Diez en ambos", "Tres en el ordinario y dos en el abreviado"],
    "No es admisible el ofrecimiento para el reemplazo de testigos que no concurrieron.");

  q("Art. 394 CPC", "Audiencias testimoniales",
    "Los testigos deben ser citados por cédula con una anticipación de:",
    "Tres días",
    ["Un día", "Cinco días", "Diez días"],
    "La cédula debe transcribir el art. 364 sobre la obligación de comparecer y la sanción por no hacerlo.");

  q("Art. 275 Cód. Penal", "Audiencias testimoniales",
    "Según el artículo 275 del Código Penal, ¿qué pena se aplica al testigo que afirmare una falsedad o negare o callare la verdad?",
    "Prisión de un mes a cuatro años e inhabilitación absoluta por doble tiempo",
    ["Solo multa, sin pena de prisión ni de inhabilitación", "Prisión de seis meses a un año, sin pena de inhabilitación", "Solo inhabilitación absoluta, sin pena de prisión ni de multa"],
    "Al testigo se le informa de esta consecuencia al tomarle juramento o promesa de decir verdad (art. 373 CPC).");

  q("Art. 374 CPC", "Audiencias testimoniales",
    "¿Qué son las «generales de la ley» del artículo 374 del CPC?",
    "Las preguntas preliminares sobre datos personales, parentesco, interés, amistad o dependencia",
    ["Las preguntas sobre los hechos del litigio que el testigo presenció", "Las preguntas que formula el juez al finalizar la declaración", "Las preguntas del interrogatorio que formula la parte contraria"],
    "Permiten evaluar la idoneidad del testigo; luego se le pregunta cómo conoce lo que declara.");

  q("", "Audiencia inicial",
    "Si una parte no asiste injustificadamente a la audiencia inicial:",
    "Se realiza igual y se la tiene por desistida de la prueba, salvo la documental de terceros",
    ["Se suspende la audiencia hasta que la parte justifique su inasistencia", "Se declara la rebeldía automáticamente y se dicta sentencia en su contra", "Se la condena en costas del juicio y se archivan las actuaciones"],
    "Si faltan ambas partes, se fija por única vez una nueva audiencia; si vuelven a faltar, se las tiene por desistidas y se archivan las actuaciones.");

  q("", "Audiencia inicial",
    "¿Cuál es el plazo máximo para fijar la audiencia final, computado desde la audiencia inicial?",
    "Ochenta días, ampliable excepcionalmente por resolución fundada",
    ["Treinta días, ampliable excepcionalmente por resolución fundada", "Sesenta días, ampliable excepcionalmente por resolución fundada", "Ciento veinte días, sin posibilidad de ampliación alguna"],
    "El juez, en la audiencia inicial, debe intentar la conciliación y, si la cuestión no es de puro derecho, ordenar la apertura a prueba.");

  q("", "Audiencia inicial",
    "Si la cuestión se declara de puro derecho en la audiencia inicial, las partes pueden informar sobre su derecho en el plazo de:",
    "Cinco días",
    ["Tres días", "Diez días", "Quince días"],
    "Presentado el informe o vencido el plazo, el expediente pasa a resolver.");

  q("", "Audiencia final",
    "La inasistencia injustificada a la audiencia final da lugar a una multa a favor de la parte contraria que compareció, que puede alcanzar hasta:",
    "Hasta el cincuenta por ciento de las costas del juicio",
    ["Hasta el diez por ciento de las costas del juicio", "Hasta el cien por ciento de las costas del juicio", "Hasta dos salarios mínimos de escalafón judicial"],
    "La justificación debe ponerse en conocimiento dos días antes de su celebración.");
})();

// ---------------------------------------------------------------- Tema V (parte 6: Derecho Procesal Civil III)
(function () {
  const q = crearTema("Tema V — Derecho Civil Y Derecho Procesal Civil", "t5");

  q("", "Audiencia final",
    "¿Cuánto puede durar la exposición breve que el juez invita a formular a cada parte en la audiencia final?",
    "No más de cinco minutos",
    ["No más de diez minutos", "No más de treinta minutos", "No tiene límite"],
    "En la audiencia final el juez decreta además la caducidad de la prueba no producida y clausura la etapa probatoria.");

  q("", "Expedientes - Carátula y foliatura",
    "¿Para qué se creó la Mesa de Entradas Única Receptora de Causas?",
    "Recibir las causas nuevas y sortearlas entre los juzgados con un programa informático",
    ["Permitir que cada juzgado reciba directamente las demandas que prefiera", "Archivar los expedientes que ya hayan sido terminados por sentencia", "Registrar únicamente las causas penales que se inicien en la Provincia"],
    "Luego se caratulan, numeran y remiten a la Oficina Judicial del juez sorteado.");

  q("Arts. 121 y 122 CPC", "Oficios y exhortos",
    "¿Cuál es la diferencia relevante entre oficios y exhortos?",
    "Los exhortos comunican solo órganos judiciales; los oficios también otros poderes y particulares",
    ["Los oficios solo se dirigen a jueces y los exhortos a particulares", "No existe ninguna diferencia entre ambos medios de comunicación", "Los exhortos solo pueden ser firmados por los letrados de las partes"],
    "La suscripción de los exhortos incumbe solamente a los jueces.");

  q("Art. 353 CPC", "Oficios y exhortos",
    "¿De cuánto tiempo disponen las oficinas públicas y privadas para contestar lo requerido por oficio, según el art. 353?",
    "Veinte días hábiles",
    ["Cinco días hábiles", "Diez días hábiles", "Treinta días hábiles"],
    "Los letrados pueden suscribir los oficios de pedidos de informes, expedientes, testimonios y certificados previamente ordenados por el juez.");

  q("Ley 22.172", "Oficios y exhortos",
    "¿Qué ley rige las comunicaciones entre jueces de distintas jurisdicciones nacionales?",
    "La Ley 22.172",
    ["La Ley 24.390", "La Ley 23.098", "La Ley 26.061"],
    "El tribunal exhortado debe verificar la procedencia de la medida y no puede discutirse ante él cuestión de ninguna naturaleza (art. 4).");

  q("Arts. 123 a 129 CPC", "Notificaciones",
    "¿Cuál es la finalidad esencial del sistema de notificaciones?",
    "Asegurar la bilateralidad y la contradicción y fijar el inicio del cómputo de los plazos",
    ["Acelerar los procesos judiciales a cualquier costo para las partes", "Reducir los costos del proceso para el Poder Judicial de la Provincia", "Limitar la participación de las partes en las actuaciones del juicio"],
    "Con ellas se marca el inicio de la relación jurídico-procesal.");

  q("Art. 123 CPC", "Notificación electrónica",
    "Según el artículo 123 del CPC, ¿qué día quedan notificadas las resoluciones por vía electrónica?",
    "El martes posterior a su disponibilidad en el sistema; si es inhábil, el siguiente martes",
    ["El mismo día en que se dictan, a la hora de su incorporación al sistema", "El día siguiente a su publicación en el sistema informático judicial", "El primer día hábil posterior, cualquiera que sea el día de la semana"],
    "Si el sistema electrónico no está operativo, se notifica por libro y día de nota (martes).");

  q("", "Notificación personal",
    "La notificación personal se cumple:",
    "En la oficina del tribunal, con diligencia firmada por el interesado y el funcionario",
    ["En el domicilio real de la parte, mediante cédula diligenciada", "Por edictos publicados en el Boletín Oficial de la Provincia", "Por carta documento con aviso de entrega dirigida a la parte"],
    "Es considerada «la notificación por excelencia» y suple a cualquiera de las otras modalidades.");

  q("Art. 126 CPC", "Notificación personal o por cédula",
    "¿Cuál de estas resoluciones debe notificarse personalmente o por cédula en el domicilio?",
    "La que dispone el traslado de la demanda y de la reconvención",
    ["La que ordena la apertura a prueba de la causa", "La que fija un plazo común para alegar sobre la prueba", "La que tiene por presentado un escrito de mero trámite"],
    "También la que designa audiencia inicial, las que disponen medidas precautorias y la que tiene por no constituido domicilio.");

  q("Arts. 134 a 136 CPC", "Notificación por edictos",
    "¿Cuándo se recurre a la notificación por edictos?",
    "Cuando la cédula es imposible: personas inciertas, domicilio ignorado o destinatario reticente",
    ["Siempre que la parte interesada prefiera esta forma de notificación", "Cuando se trata de resoluciones sencillas de mero trámite", "Cuando el abogado de la parte así lo decida por conveniencia"],
    "Se publican en el Boletín Oficial y en un diario de mayor circulación; la notificación se tiene por hecha el día siguiente a la última publicación.");

  q("Art. 141 CPC", "Días y horas hábiles",
    "Para las diligencias que los jueces o empleados deben practicar fuera de la oficina, son horas hábiles las que median entre:",
    "Las 7 y las 20 horas",
    ["Las 8 y las 18 horas", "Las 6 y las 22 horas", "Las 9 y las 17 horas"],
    "Son días inhábiles los sábados, domingos, feriados, asuetos, los de feria judicial, etc.");

  q("Art. 141 CPC", "Días y horas hábiles",
    "¿Qué actuaciones pueden practicarse en días y horas inhábiles según el artículo 141?",
    "El proceso de amparo y las notificaciones postales y telegráficas",
    ["Las audiencias de conciliación convocadas por el juez de la causa", "Las notificaciones electrónicas únicamente, pero no las postales", "Ninguna actuación puede practicarse en días y horas inhábiles"],
    "Las demás actuaciones y diligencias judiciales deben practicarse en días y horas hábiles, bajo pena de nulidad.");

  q("Arts. 142 y 143 CPC", "Habilitación de día y hora",
    "¿Qué es la habilitación tácita del artículo 143?",
    "Continuar hasta su fin, en tiempo inhábil, una diligencia iniciada en tiempo hábil",
    ["La habilitación solicitada por una de las partes ante el juez", "La habilitación que decreta la Corte de Justicia para todo el fuero", "La habilitación de los días comprendidos en la feria judicial"],
    "La habilitación expresa (art. 142) procede a petición de parte o de oficio para audiencias o diligencias urgentes.");

  q("Art. 144 CPC", "Plazos",
    "Los plazos legales o judiciales son:",
    "Perentorios, salvo acuerdo escrito de partes sobre actos determinados antes de su vencimiento",
    ["Prorrogables siempre, por simple petición de cualquiera de las partes", "Ordenatorios en todos los casos, sin efecto de caducidad alguno", "Indefinidos cuando el código no fija un plazo expreso"],
    "Perentorio significa preclusivo o fatal: vencido el plazo, caduca automáticamente la facultad procesal.");

  q("Art. 145 CPC", "Cómputo",
    "¿Desde cuándo comienzan a correr los plazos según el artículo 145?",
    "Desde el día hábil siguiente a la notificación, sin contar el día de la diligencia ni los inhábiles",
    ["Desde el mismo día de la notificación, contando ese día como el primero", "Desde el día en que se presenta el escrito que da origen al trámite", "Desde la fecha de la providencia que dispone el traslado o la vista"],
    "Los plazos concluyen el día de su vencimiento, con un plazo de gracia de las dos primeras horas del despacho del día posterior.");

  q("", "Interrupción y suspensión",
    "¿Cuál es la diferencia entre interrupción y suspensión de un plazo?",
    "La interrupción borra lo transcurrido; la suspensión detiene el cómputo y luego se retoma",
    ["Son exactamente lo mismo y producen idénticos efectos sobre el plazo", "La suspensión hace ineficaz todo el tiempo transcurrido del plazo", "La interrupción solo opera por acuerdo expreso entre las partes"],
    "En la interrupción el plazo comienza a correr nuevamente de cero; en la suspensión se cuenta lo ya transcurrido.");

  q("Art. 146 CPC", "Suspensión y abreviación convencional",
    "Los apoderados no pueden acordar una suspensión mayor de veinte días sin acreditar:",
    "La conformidad de sus mandantes ante el Juez o Tribunal",
    ["La autorización previa de la Corte de Justicia de la Provincia", "El dictamen favorable del Fiscal que interviene en el proceso", "El pago de una tasa de justicia adicional por la suspensión"],
    "Las partes también pueden acordar la abreviación de los plazos, siempre por escrito.");

  q("Art. 147 CPC", "Ampliación de los plazos",
    "¿En cuánto se amplían los plazos para diligencias fuera del asiento del tribunal, dentro de la República?",
    "Un día por cada 200 km o fracción que no baje de 100",
    ["Un día por cada 100 km o fracción que no baje de 50", "Dos días por cada 500 km o fracción que no baje de 250", "Un día por cada 300 km o fracción que no baje de 150"],
    "Por ejemplo, para un demandado de Buenos Aires (1.200 km) se suman 6 días; para Mendoza (170 km), un día.");
})();

// ---------------------------------------------------------------- Tema VI (parte 1)
(function () {
  const q = crearTema("Tema VI — Derecho Laboral Y Procesal Laboral", "t6");

  q("", "Trabajo humano",
    "¿De qué trabajo se ocupa el Derecho del Trabajo?",
    "Solamente del prestado en relación de dependencia",
    ["De todo trabajo humano, sea o no prestado en relación de dependencia", "Solamente del trabajo autónomo prestado sin relación de dependencia", "Solamente del trabajo prestado en el sector público estatal"],
    "El trabajo en el Derecho del Trabajo es toda actividad lícita prestada a otro a cambio de una remuneración.");

  q("Art. 4 LCT", "El trabajo en la Ley de Contrato de Trabajo",
    "Según el artículo 4 de la LCT, constituye trabajo:",
    "Toda actividad lícita prestada a favor de quien puede dirigirla, mediante una remuneración",
    ["Toda actividad humana que produzca bienes, aunque no sea remunerada", "Solo la actividad física prestada a cambio de una remuneración", "Toda actividad que se realice sin remuneración y por voluntad propia"],
    "Los caracteres son: productividad, ajenidad y libertad.");

  q("", "Relación de dependencia",
    "¿Cuáles son los tres sentidos de la subordinación que caracteriza la relación de dependencia?",
    "Subordinación jurídica, técnica y económica",
    ["Subordinación jurídica, laboral y personal del trabajador", "Subordinación técnica, social y política del trabajador", "Subordinación económica, moral y profesional del trabajador"],
    "La subordinación jurídica es la posibilidad del empleador de dirigir, controlar y ejercer poder disciplinario.");

  q("", "Derecho del trabajo",
    "¿Cuál NO es una de las cuatro partes en que se divide el derecho del trabajo?",
    "El derecho civil del trabajo",
    ["El derecho individual del trabajo", "El derecho colectivo del trabajo", "El derecho administrativo y procesal del trabajo"],
    "La cuarta parte es el derecho internacional del trabajo (convenios y recomendaciones de la OIT).");

  q("", "Derecho del trabajo",
    "¿Qué se entiende por derecho colectivo del trabajo?",
    "El que se ocupa de las relaciones entre sindicatos y cámaras empresariales",
    ["El que regula la relación individual entre un trabajador y su empleador", "El que regula los tratados internacionales sobre materia laboral", "El que regula el procedimiento ante los tribunales del trabajo"],
    "El derecho individual regula las relaciones entre trabajador y empleador individualmente considerados.");

  q("", "Caracteres",
    "Cuando el cuadernillo dice que el derecho del trabajo es «tuitivo», significa que:",
    "Es protector y tutelar de la parte más débil de la relación laboral",
    ["Es un derecho privado puro regido por la autonomía de la voluntad", "Es un derecho codificado definitivamente en un único cuerpo legal", "Es un derecho que protege principalmente los intereses del empleador"],
    "El carácter protectorio se funda en el art. 9 de la LCT y en el art. 14 bis de la CN, por la desigualdad del poder negociador.");

  q("Art. 1 LCT", "Fuentes del derecho del trabajo",
    "La enumeración de fuentes del artículo 1 de la LCT es:",
    "Enunciativa, no taxativa, y sin orden de prelación",
    ["Taxativa y jerarquizada según el orden en que se enumeran", "Taxativa pero sin establecer un orden de prelación entre fuentes", "Enunciativa pero con un orden de prelación estricto entre fuentes"],
    "Omite la Constitución Nacional y los tratados internacionales (art. 75 inc. 22).");

  q("", "Fuentes del derecho del trabajo",
    "¿Cuál de las siguientes es una fuente «propia» (exclusiva) del Derecho del Trabajo?",
    "Los convenios colectivos de trabajo",
    ["La Constitución Nacional", "Las leyes y sus reglamentaciones", "La jurisprudencia"],
    "También son propias los estatutos profesionales, los laudos arbitrales, los convenios de la OIT, la voluntad de las partes y los usos y costumbres empresarios.");

  q("", "Principios del derecho del trabajo",
    "¿Cuáles son las tres reglas del principio protectorio?",
    "In dubio pro operario, norma más favorable y condición más beneficiosa",
    ["Continuidad, primacía de la realidad y buena fe en el contrato", "Gratuidad, equidad y razonabilidad en la aplicación de la norma", "Irrenunciabilidad, justicia social y no discriminación en el trato"],
    "Su finalidad es proteger la dignidad del trabajador y equilibrar las diferencias preexistentes con el empleador.");

  q("", "Principios del derecho del trabajo",
    "¿Qué establece el principio de irrenunciabilidad de los derechos?",
    "Que los derechos de normas imperativas son indisponibles, ni aun a título oneroso",
    ["Que el trabajador puede renunciar gratuitamente a cualquier derecho laboral", "Que solo pueden renunciarse los derechos de fuente legal, no convencional", "Que los derechos laborales son renunciables si la renuncia consta por escrito"],
    "Los mayores derechos de normas no imperativas son irrenunciables pero disponibles a título oneroso.");

  q("", "Principios del derecho del trabajo",
    "¿Cuál es el plazo de prescripción en materia laboral y en seguridad social?",
    "Dos años en materia laboral y diez años en seguridad social",
    ["Cinco años en materia laboral y diez años en seguridad social", "Dos años tanto en materia laboral como en seguridad social", "Diez años en materia laboral y dos años en seguridad social"],
    "La prescripción es una de las excepciones al principio de irrenunciabilidad, junto con la transacción, conciliación, renuncia al empleo, caducidad y desistimiento.");

  q("", "Principios del derecho del trabajo",
    "¿Cómo debe hacerse la renuncia al empleo, según el cuadernillo?",
    "Por telegrama colacionado enviado por el trabajador, o ante la autoridad administrativa del trabajo",
    ["Verbalmente ante dos testigos que den fe de la manifestación del trabajador", "Por correo electrónico simple dirigido al responsable de recursos humanos", "Por carta simple entregada en mano al encargado del establecimiento"],
    "Es una de las excepciones al principio de irrenunciabilidad.");

  q("", "Principios del derecho del trabajo",
    "Si hay duda sobre la continuación o la duración de un contrato de trabajo, el principio de continuidad indica resolver a favor de:",
    "La existencia de un contrato por tiempo indeterminado",
    ["La existencia de un contrato a plazo fijo por el período de prueba", "La extinción del contrato por vencimiento del plazo originalmente pactado", "La existencia de un contrato eventual por el tiempo que dure la tarea"],
    "Tiende al mantenimiento de la fuente de trabajo.");

  q("", "Principios del derecho del trabajo",
    "El principio de primacía de la realidad establece que:",
    "Es nulo el contrato celebrado con simulación o fraude a la ley laboral",
    ["Vale siempre lo que dice el contrato escrito firmado por las partes", "Vale siempre la voluntad del empleador expresada en el contrato", "El convenio colectivo prevalece siempre sobre la realidad de la relación"],
    "Se vincula con el art. 14 de la LCT, que establece la nulidad del contrato donde haya mediado simulación o fraude.");

  q("Ley 27.802", "Principios del derecho del trabajo",
    "Según el cuadernillo, a partir de la Ley 27.802, el principio de justicia social:",
    "Ya no es principio de aplicación e interpretación de las cuestiones laborales",
    ["Se refuerza como principio rector de aplicación e interpretación laboral", "Pasa a ser fuente formal del derecho del trabajo de alcance general", "Se transforma en un principio exclusivamente procesal en el fuero laboral"],
    "Antes buscaba equilibrar las desigualdades del trabajo y garantizar condiciones dignas y equitativas.");

  q("Ley 2424-O", "Derecho procesal laboral",
    "¿Qué ley regula principalmente el proceso laboral en San Juan?",
    "La Ley 2424-O (antes 337-O), Código de Procedimiento Laboral",
    ["La Ley 2352-O, Ley Orgánica del Poder Judicial de la Provincia", "La Ley 1851-O, Código Procesal Penal Acusatorio de la Provincia", "La Ley 358-E, antigua Ley Orgánica de Tribunales de la Provincia"],
    "De aplicación supletoria, en cuanto sea compatible con los principios del derecho laboral, el Código de Procedimiento Civil.");

  q("", "Principios del proceso laboral",
    "¿En qué consiste la inversión de la carga de la prueba en el proceso laboral?",
    "El empleador demandado debe, excepcionalmente, desvirtuar las afirmaciones del trabajador",
    ["El trabajador debe probar siempre todos los hechos que invoca", "No existe carga de la prueba en el proceso laboral sumario", "La prueba la produce siempre el juez de oficio, sin intervención de partes"],
    "En el derecho procesal civil, en cambio, quien demanda debe probar los hechos que invoca.");

  q("Art. 28 LCT", "Principios del proceso laboral",
    "¿Qué garantiza el principio de gratuidad procesal en favor del trabajador?",
    "El acceso gratuito a la justicia para reclamar sus derechos, sin perjuicio de las costas",
    ["Que el trabajador nunca pagará costas en ningún supuesto procesal", "Que el empleador no podrá defenderse en el proceso laboral", "Que no habrá honorarios para ninguno de los abogados intervinientes"],
    "Se funda en la carencia de recursos económicos del trabajador y en la prioridad de sus beneficios laborales.");
})();

// ---------------------------------------------------------------- Tema VI (parte 2)
(function () {
  const q = crearTema("Tema VI — Derecho Laboral Y Procesal Laboral", "t6");

  q("Art. 9 LCT", "Principios del proceso laboral - In dubio pro operario",
    "A partir de la Ley 27.802, ¿cuándo corresponde resolver la duda a favor del trabajador?",
    "Solo cuando la duda proviene de la interpretación de normas legales o convencionales",
    ["En toda duda, incluso la referida a los hechos y a la prueba", "Nunca, aun cuando se trate de la interpretación de normas legales", "Solo en materia probatoria, cuando la prueba sea insuficiente"],
    "El art. 9 de la LCT establece que si la duda recae en la interpretación o alcance de la ley, se decide en el sentido más favorable al trabajador.");

  q("Art. 83 CPL", "Inversión de la carga de la prueba",
    "Según el artículo 83 del CPL de San Juan, ¿cuándo se produce la inversión de la carga probatoria sobre el empleador respecto de actos discriminatorios?",
    "Cuando se verifican indicios graves de la discriminación alegada",
    ["Siempre que el trabajador alegue haber sufrido un acto discriminatorio", "Nunca: la ley nacional lo impide en todos los casos de discriminación", "Solo cuando exista sentencia penal previa que declare la discriminación"],
    "La Ley 27.742 impide la inversión de la carga de la prueba para los despidos invocados por diversas causas discriminatorias en la legislación de fondo.");

  q("Art. 100 in fine CPL", "Sentencia plus o ultra petita",
    "En el proceso laboral, ¿qué tipo de incongruencia de la sentencia se permite?",
    "La sentencia plus o ultra petita; no la extra petita",
    ["La sentencia citra petita, que omite pronunciarse sobre algún extremo", "La sentencia extra petita, que resuelve cuestiones no demandadas", "Todas las incongruencias, sin límite alguno para el juez laboral"],
    "Citra petita omite pronunciarse sobre extremos de la demanda; extra petita resuelve cuestiones no contenidas en la demanda; plus petita concede valores mayores.");

  q("Arts. 20 y 15 CPL", "Principio de veracidad o primacía de la realidad",
    "En el proceso laboral, ¿qué debe primar frente a la «verdad formal»?",
    "La verdad real",
    ["La voluntad de las partes", "La prueba documental exclusivamente", "La decisión del empleador"],
    "El juez laboral averigua cómo se desarrolló la prestación de servicios, más allá de lo que las partes denominaron contrato de locación de servicios.");

  q("Arts. 12 a 18 CPL", "Dirección del proceso",
    "Según el principio de dirección del proceso, el juez puede ordenar diligencias necesarias para esclarecer los hechos, pero:",
    "Sin suplir a las partes en las cargas de prueba que a ellas les corresponden",
    ["Debiendo suplir todas las pruebas que las partes no ofrezcan en tiempo", "Sin poder ordenar ninguna diligencia que no hayan pedido las partes", "Pudiendo ordenar solamente las pruebas que haya pedido el trabajador"],
    "Este principio posibilita la vigencia de la veracidad, el impulso procesal y la celeridad.");

  q("", "Sencillez y oralidad",
    "En San Juan, el proceso laboral es escrito en:",
    "En demandas y contestaciones; la prueba se gestiona oralmente",
    ["En todas sus etapas, incluidas las audiencias de prueba", "En ninguna etapa: el proceso laboral es totalmente oral", "Solo en la etapa de sentencia, que se dicta por escrito"],
    "La oralidad se liga a la sencillez y permite cumplir la inmediación, celeridad, veracidad y concentración.");

  q("Arts. 21 y 75 CPL", "Inmediación",
    "El principio de inmediación busca que:",
    "El juez que va a resolver dirija personalmente las diligencias más importantes",
    ["Los secretarios resuelvan las causas por delegación del juez", "Las partes no comparezcan personalmente a las audiencias", "El expediente «hable solo» sin intervención de los litigantes"],
    "En el proceso laboral los magistrados deben participar en las audiencias de prueba y dirigir las audiencias de conciliación (inicial y final).");

  q("", "Lealtad procesal",
    "El principio de lealtad procesal también se denomina:",
    "Principio de probidad o buena fe: el deber de decir la verdad",
    ["Principio de celeridad: el deber de resolver en el menor tiempo", "Principio de concentración: el deber de unificar actos procesales", "Principio de economía: el deber de reducir los gastos del proceso"],
    "No es leal el litigante que hace lo posible para que la verdad no se esclarezca o que usa actitudes dilatorias.");

  q("Art. 113 CPL", "Doble instancia",
    "¿Qué busca la pluralidad de instancias?",
    "Evitar el error en los fallos permitiendo su revisión por un tribunal superior",
    ["Prolongar indefinidamente el proceso para agotar las posibilidades", "Eliminar la oralidad para facilitar la revisión del expediente", "Reducir el costo del proceso para las partes y para el Estado"],
    "Couture sostenía que no debe buscarse «ni tanta economía que la justicia sufra quebranto, ni tanta discusión que prolongue indefinidamente el día de la justicia».");

  q("", "Principio de celeridad procesal",
    "En el proceso laboral, la celeridad es prioritaria porque:",
    "Está en juego el sustento del trabajador y su familia, que no pueden esperar",
    ["Los jueces laborales tienen menos causas que los de otros fueros", "Los empleadores así lo exigen en defensa de sus intereses", "No existe segunda instancia que revise lo resuelto por el juez"],
    "La dilación acentúa la desigualdad entre trabajador y empleador, pues posibilita el desaliento y abandono de la pretensión del primero.");

  q("Arts. 69, 75 y 81 CPL", "Economía procesal",
    "La economía procesal no solo se refiere a la reducción del gasto, sino también a la economía de:",
    "Tiempo y esfuerzo",
    ["Pruebas y testigos", "Jueces y secretarios", "Instancias y recursos"],
    "La economía del esfuerzo busca la supresión de trámites superfluos o redundantes.");

  q("", "Concentración",
    "La concentración consiste en:",
    "Realizar varios actos procesales en una sola diligencia, en el menor tiempo",
    ["Reunir en un solo juez todas las causas de un mismo trabajador", "Reducir a cero las audiencias para acelerar la resolución", "Acumular todas las pruebas al final del proceso, antes de alegar"],
    "Es un mecanismo para el logro de la celeridad del proceso.");

  q("Art. 76 CPL", "Conciliación",
    "¿Qué ventaja destaca el cuadernillo de la conciliación en el derecho del trabajo?",
    "Permite al trabajador recuperar su derecho más rápido y ahorra tiempo y dinero",
    ["Elimina la necesidad de contar con abogados en el proceso", "Aumenta los honorarios de los profesionales que intervienen", "Genera siempre un vencedor y un vencido en el conflicto"],
    "La conciliación es la conclusión anticipada y armoniosa del conflicto, sin vencedores ni vencidos.");

  q("Art. 14 CPL", "Impulso de oficio",
    "Según el artículo 14 del CPL, una vez presentada la demanda, el procedimiento puede ser impulsado por:",
    "Las partes, el Ministerio Público y el Tribunal",
    ["Solamente el Tribunal, que actúa siempre de oficio", "Solamente las partes, que deben instar cada etapa", "Solamente el trabajador, como parte más débil del proceso"],
    "Sin perjuicio de ello, se produce la caducidad de la instancia cuando no se insta su curso en la forma y plazos del Código de Procedimiento Civil.");

  q("Art. 25 LCT", "Partes en el proceso laboral",
    "Según el artículo 25 de la LCT, el trabajador es:",
    "La persona física que presta servicios personales en relación de dependencia por una retribución",
    ["Toda persona física o jurídica que presta servicios a un tercero", "Toda persona jurídica que requiere servicios de una persona física", "Toda persona que presta servicios de forma autónoma e independiente"],
    "El carácter es personal: no se puede delegar el cumplimiento de la actividad.");

  q("Art. 26 LCT", "Partes en el proceso laboral",
    "Según el artículo 26 de la LCT, el empleador es:",
    "La persona física o jurídica, tenga o no personalidad propia, que requiere los servicios del trabajador",
    ["Solo la persona jurídica que cuente con personería jurídica otorgada", "Solo el Estado nacional, provincial o municipal en sus distintos niveles", "El trabajador autónomo que contrata los servicios de un tercero"],
    "La parte puede intervenir por sí con patrocinio letrado o mediante apoderado.");

  q("Art. 27 CPL", "Carta poder",
    "Según el artículo 27 del CPL, la representación de los trabajadores en juicio puede ejercerse mediante carta poder, autenticándose la firma por:",
    "Escribano de Registro, funcionario judicial o Juez de Paz, previa justificación de identidad",
    ["Solamente un escribano de registro de la matrícula provincial", "Solamente el Juez del Trabajo que interviene en el proceso", "Cualquier abogado de la matrícula del Foro de Abogados"],
    "También pueden hacerse representar por el Presidente o Secretario de la asociación profesional.");

  q("Art. 28 CPL", "Beneficio de justicia gratuita",
    "Según el artículo 28 del CPL, ¿qué caución se exige a los trabajadores para el pago de costas o responsabilidad por medidas precautorias?",
    "Ninguna caución real o personal: solo caución juratoria de pagar si mejora de fortuna",
    ["Caución real obligatoria, constituida sobre bienes registrables", "Caución personal con fiador de reconocida solvencia económica", "Depósito del diez por ciento del monto reclamado en la demanda"],
    "Están exceptuados de todo impuesto o tasa y del pago de costos y costas hasta la acreditación de mejor fortuna.");

  q("Art. 30 CPL", "Patrocinio letrado",
    "Ante la justicia del trabajo, el patrocinio letrado es:",
    "Obligatorio; si el trabajador carece de él, lo presta el Defensor Oficial",
    ["Optativo para el trabajador, según su elección libre", "Obligatorio solamente para el empleador demandado", "Prohibido para el trabajador, que debe actuar por sí mismo"],
    "El funcionario que sin justa causa se niegue a prestar la colaboración incurre en falta grave y recibe suspensión.");
})();

// ---------------------------------------------------------------- Tema VI (parte 3: organización y proceso ordinario)
(function () {
  const q = crearTema("Tema VI — Derecho Laboral Y Procesal Laboral", "t6");

  q("Acuerdo General 197/2019", "Órganos jurisdiccionales",
    "¿Cuántos jueces de primera instancia del fuero laboral hay en la Primera Circunscripción, y cuántos en la Segunda?",
    "Seis jueces en la Primera y dos en la Segunda, con competencia multifuero",
    ["Cuatro jueces en la Primera y uno en la Segunda Circunscripción", "Seis jueces en cada una de las dos circunscripciones judiciales", "Diez jueces en la Primera y tres en la Segunda Circunscripción"],
    "Actúan en forma asociada, organizados en dos Oficinas Judiciales (N° 1 y N° 2).");

  q("Art. 8 CPL", "Competencia por materia",
    "¿Qué establece el artículo 8 del CPL sobre la conexidad?",
    "El juez de medidas preparatorias o precautorias conoce el proceso principal y su ejecución",
    ["Cada incidente del juicio se radica ante un juez distinto", "El juez de la medida precautoria debe excusarse de conocer el principal", "La conexidad no existe en el fuero laboral de la Provincia"],
    "En caso de muerte, incapacidad, quiebra o concurso del demandado, los juicios laborales continúan en esa jurisdicción hasta la sentencia definitiva.");

  q("Art. 33 CPL", "Actos procesales",
    "Según el artículo 33 del CPL, las actuaciones procesales del trabajo tienen carácter:",
    "Urgente: las autoridades deben prestar preferente atención y pronto despacho",
    ["Ordinario: las autoridades las atienden según el orden de ingreso", "Reservado: las autoridades las tramitan sin intervención de las partes", "Facultativo: las autoridades las atienden según su disponibilidad"],
    "En caso de demora injustificada se pone en conocimiento de la autoridad superior del responsable a los fines disciplinarios.");

  q("Art. 48 CPL", "Vistas y traslados",
    "Salvo disposición en contrario, las vistas y traslados en el proceso laboral se confieren por el término de:",
    "Cinco días",
    ["Diez días", "Tres días", "Quince días"],
    "El Ministerio Público debe expedirse en cinco días en las instancias ordinarias; el vencimiento sin expedirse es falta grave.");

  q("Art. 55 CPL", "Tramitación de los incidentes",
    "Promovido un incidente en el proceso laboral, ¿qué plazo tiene la contraparte para contestar el traslado, y por cuánto se abre a prueba?",
    "Cinco días de traslado y, en su caso, diez días de prueba",
    ["Diez días de traslado y, en su caso, cinco días de prueba", "Tres días de traslado y, en su caso, tres días de prueba", "Quince días de traslado y, en su caso, treinta días de prueba"],
    "Los incidentes no suspenden el trámite de la causa principal, salvo disposición expresa o auto fundado.");

  q("Art. 75 CPL", "Audiencia inicial",
    "Según el artículo 75 del CPL, ¿en qué término el juez convoca a la audiencia inicial desde que se contestó la demanda o se resolvieron las excepciones previas?",
    "Dentro de los cuarenta días",
    ["Dentro de los diez días", "Dentro de los veinte días", "Dentro de los sesenta días"],
    "En la audiencia se intenta la conciliación y, si fracasa, se fijan los términos de la controversia, se ordena la prueba y se fija la audiencia final.");

  q("Art. 55 LCT", "Inversión de la carga de la prueba",
    "¿Qué presunción genera la falta de registración del trabajador según el artículo 55 de la LCT?",
    "Una presunción a favor de lo que manifieste el trabajador sobre lo que debía constar",
    ["Una presunción a favor de lo que manifieste el empleador sobre el registro", "Ninguna presunción: el trabajador debe probar todas las circunstancias", "La nulidad absoluta de la relación laboral por falta de registro"],
    "Se refiere al libro especial del art. 52 de la LCT.");

  q("Art. 57 LCT", "Inversión de la carga de la prueba",
    "El silencio del empleador ante la intimación fehaciente del trabajador constituye presunción en contra del empleador si subsiste durante un plazo razonable que nunca será inferior a:",
    "Dos días hábiles",
    ["Un día hábil", "Cinco días hábiles", "Diez días hábiles"],
    "La intimación se refiere al cumplimiento o incumplimiento de obligaciones derivadas del contrato de trabajo.");

  q("Art. 23 LCT", "Presunción de la existencia del contrato de trabajo",
    "Según el artículo 23 de la LCT, el hecho de la prestación de servicios en situación de dependencia hace presumir:",
    "La existencia de un contrato de trabajo, salvo prueba en contrario",
    ["La existencia de un contrato civil de locación de servicios", "La inexistencia de toda relación laboral entre las partes", "La existencia de un contrato de trabajo a plazo fijo"],
    "La presunción no se aplica en contrataciones de obras o servicios profesionales o de oficios con recibos o facturas y pago bancarizado.");

  q("Art. 82 CPL", "Prueba de la remuneración",
    "Si se controvierte el cobro o monto de salarios, la prueba contraria al reclamo corresponde:",
    "Al empleador",
    ["Al trabajador", "Al juez", "Al perito contador"],
    "Es una aplicación de la inversión de la carga de la prueba en el proceso laboral.");

  q("Art. 100 CPL", "Libros, registros y documentación laboral",
    "Si el empleador no exhibe las constancias requeridas o no lleva las registraciones conforme a la ley, el órgano jurisdiccional podrá:",
    "Tener por ciertas las afirmaciones del trabajador sobre los datos que debían registrarse",
    ["Rechazar la demanda por falta de prueba de los hechos invocados", "Aplicar una multa al empleador y archivar las actuaciones", "Suspender el proceso hasta que el empleador presente la documentación"],
    "Es otra de las normas que invierten la carga probatoria en materia laboral.");

  q("Art. 65 CPL", "Requisitos de la demanda",
    "Si la demanda laboral tiene defectos de forma, el juez intima al actor a subsanarlos dentro de:",
    "Cinco días, bajo apercibimiento de tenerla por no presentada",
    ["Diez días, bajo apercibimiento de archivo de las actuaciones", "Tres días, bajo apercibimiento de aplicar una multa al actor", "Veinte días, sin apercibimiento alguno por el incumplimiento"],
    "El juez puede además requerir aclaraciones sobre su competencia y declararse incompetente de oficio.");

  q("Art. 73 CPL", "Contestación de demanda",
    "Se corre traslado de la demanda laboral a la accionada, por cédula y con copia, por el término de:",
    "Diez días",
    ["Cinco días", "Quince días", "Veinte días"],
    "En la contestación debe reconocer o negar categóricamente cada hecho; el silencio, las respuestas evasivas o la negativa general pueden estimarse como reconocimiento.");

  q("Art. 81 CPL", "Medios de prueba",
    "¿Cuál de estos es un medio de prueba contemplado en el artículo 81 del CPL?",
    "Documentos, testimonial, pericial, informativa e inspecciones",
    ["Solo la prueba confesional y la prueba testimonial de las partes", "Solo los documentos acompañados con la demanda y su contestación", "Únicamente la declaración de parte, sin otros medios probatorios"],
    "Las partes pueden proponer cualquier otro medio que consideren conducente. La prueba testimonial se produce en la audiencia final ante el juez.");

  q("Art. 108 CPL", "Audiencia final",
    "Finalizada la producción de prueba en la audiencia final laboral, el juez:",
    "Declara la caducidad de la prueba no producida, clausura la etapa y cita a alegar",
    ["Dicta sentencia de inmediato sin escuchar los alegatos de las partes", "Abre una nueva etapa probatoria para producir la prueba pendiente", "Remite el expediente a la Cámara para que dicte sentencia definitiva"],
    "Luego llama autos para resolver en sentencia.");

  q("Art. 110 CPL", "Sentencia",
    "¿Cuál es el plazo para dictar sentencia en el proceso ordinario laboral según la síntesis del cuadernillo?",
    "Cuarenta días",
    ["Diez días", "Veinte días", "Sesenta días"],
    "La sentencia se notifica de manera electrónica, salvo que el juez disponga en forma fundada la notificación por cédula.");

  q("", "Recursos",
    "La sentencia definitiva en los procesos ordinarios laborales es apelable dentro de:",
    "Diez días; si no se apela, queda consentida y pasa en autoridad de cosa juzgada",
    ["Cinco días; si no se apela, queda consentida y pasa en autoridad de cosa juzgada", "Quince días; si no se apela, queda consentida y pasa en autoridad de cosa juzgada", "Treinta días; si no se apela, queda consentida y pasa en autoridad de cosa juzgada"],
    "Se apela con un formulario aprobado por la Corte; la fundamentación se realiza en forma oral en audiencia ante la Sala sorteada.");

  q("Ley 59-O", "Recursos",
    "Contra la sentencia de la Cámara en el proceso laboral solo procede:",
    "El recurso extraordinario ante la Corte de Justicia de San Juan",
    ["El recurso de apelación ante otra Sala", "El recurso de revisión ante el Juez de primera instancia", "Ningún recurso"],
    "Firme la sentencia, se ejecuta por el procedimiento de ejecución de sentencia del CPC (art. 428) conforme al art. 22 inc. 7 del CPL.");
})();

// ---------------------------------------------------------------- Tema VII (parte 1)
(function () {
  const q = crearTema("Tema VII — Derecho De Las Familias Y Proceso De Familia", "t7");

  q("Ley 2435-O", "Derecho de las Familias. Concepto y principios generales",
    "¿Qué ley es el Código Procesal de Familia (CPF) de San Juan?",
    "La Ley 2435-O",
    ["La Ley 2424-O", "La Ley 2352-O", "La Ley 1851-O"],
    "Su artículo 1 establece que su finalidad es hacer efectivos los derechos y deberes establecidos en las leyes de fondo.");

  q("", "Derecho de las Familias. Concepto y principios generales",
    "¿Por qué se utiliza la expresión «Derecho de las Familias» en plural?",
    "Porque reconoce la diversidad de formas de organización familiar, no un único modelo",
    ["Porque existen varios códigos de familia vigentes en el país", "Porque se aplica en varias provincias con distintas normas locales", "Porque se divide en varias ramas procesales independientes entre sí"],
    "Siempre dentro de un marco común de respeto por la dignidad humana, la igualdad y no discriminación, la autonomía personal, la solidaridad y la responsabilidad.");

  q("Art. 4 CPF", "Marco constitucional y convencional",
    "¿Qué ordena el artículo 4 del CPF?",
    "Garantizar el acceso a justicia de personas en situación de vulnerabilidad",
    ["Limitar el acceso a la justicia a las personas adultas y capaces", "Establecer la competencia material de los jueces de familia", "Fijar los plazos que rigen la producción de la prueba"],
    "Profundiza la orientación de derechos humanos en el proceso de familia.");

  q("Art. 706 CCyC", "El proceso de familia",
    "¿Cuáles son los principios de los procesos de familia que establece el artículo 706 del CCyC?",
    "Tutela judicial efectiva, inmediación, buena fe, oficiosidad, oralidad y acceso limitado al expediente",
    ["Celeridad, confidencialidad, publicidad y concentración de los actos del proceso", "Escritura, mediación, principio dispositivo y acceso irrestricto al expediente", "Oportunidad, legalidad, concentración y secreto de las actuaciones procesales"],
    "El art. 3 del CPF reproduce estos principios y agrega expresamente la celeridad y la confidencialidad.");

  q("Art. 3 CPF", "El proceso de familia",
    "¿Qué principios agrega el artículo 3 del CPF a los del artículo 706 del CCyC?",
    "La celeridad y la confidencialidad",
    ["La publicidad y la escritura", "La eventualidad y la preclusión", "La economía y la bilateralidad"],
    "Las normas principales a estudiar son los arts. 705 a 711 CCyCN y 3 a 15 CPF.");

  q("Art. 11 CPF", "Buena fe y lealtad procesal",
    "Según el artículo 11 del CPF, los que intervienen en el proceso de familia tienen el deber de:",
    "Procurar la pacificación del conflicto y no agravarlo con sus acciones u omisiones",
    ["Litigar hasta obtener una sentencia favorable a sus propios intereses", "Mantener en reserva la identidad de todas las partes del proceso", "Presentar toda su prueba junto con la demanda o su contestación"],
    "El proceso de familia no puede convertirse en una prolongación de enfrentamientos personales.");

  q("Art. 709 CCyC y 9 CPF", "Oficiosidad",
    "¿Qué atribuyen el art. 709 del CCyC y el art. 9 del CPF al juez?",
    "La dirección e impulso del proceso, con medidas para evitar su paralización",
    ["La facultad de decidir sin escuchar a las partes involucradas", "La posibilidad de sustituir ilimitadamente la actividad de las partes", "La facultad de modificar libremente el objeto del proceso planteado"],
    "Se exceptúan del impulso oficioso los asuntos estrictamente patrimoniales entre personas plenamente capaces.");

  q("Art. 7 CPF", "Oralidad y solución consensuada",
    "Según el artículo 7 del CPF, debe procurarse la solución acordada mediante mediación, conciliación, transacción u otras formas no adversariales, siempre que:",
    "La materia sea disponible y el acuerdo no afecte derechos indisponibles",
    ["Las partes lo soliciten por escrito y con patrocinio letrado", "El juez lo disponga en cualquier caso, aunque no haya acuerdo", "Exista una sentencia previa que lo autorice expresamente"],
    "El proceso de familia usa las audiencias como instrumento de inmediación y concentración.");

  q("Art. 14 CPF", "Perspectiva de género",
    "¿Qué dispone expresamente el artículo 14 del CPF?",
    "Abordar los conflictos con perspectiva de género y flexibilizar formas respetando el debido proceso",
    ["Que la perspectiva de género se aplique solo en los casos de violencia", "Que las formas procesales son inflexibles en todos los procesos", "Que el juez debe actuar en forma neutral, sin considerar el género"],
    "La perspectiva de género evita decisiones aparentemente neutrales que reproduzcan desigualdades.");

  q("Art. 5 CPF", "Especialidad",
    "¿Qué exige el artículo 5 del CPF respecto de los procesos de familia?",
    "Que se tramiten ante un fuero especializado con auxilio de equipos interdisciplinarios",
    ["Que se tramiten ante los jueces civiles de la jurisdicción correspondiente", "Que se resuelvan sin intervención de equipos técnicos interdisciplinarios", "Que sean públicos y abiertos a cualquier persona interesada"],
    "El art. 706 del CCyC exige jueces especializados y apoyo multidisciplinario.");

  q("Art. 17 CPF", "Competencia material",
    "¿Cuál es el artículo del CPF que establece principalmente la competencia material de los jueces de familia?",
    "El artículo 17",
    ["El artículo 5", "El artículo 11", "El artículo 42"],
    "Comprende, entre otras, matrimonio y divorcio, uniones convivenciales, filiación, adopción, responsabilidad parental, violencia familiar y capacidad.");

  q("Art. 16 CPF", "Competencia material",
    "Según el artículo 16 del CPF, la competencia se determina por:",
    "La naturaleza de la pretensión deducida, no las defensas de la demandada",
    ["Las defensas que oponga la parte demandada al contestar", "El monto económico que se reclame en la demanda interpuesta", "El domicilio del abogado patrocinante de la parte actora"],
    "Es una regla importante para evitar que las excepciones modifiquen la competencia.");

  q("Art. 716 CCyC", "Competencia territorial y centro de vida",
    "En los procesos relativos a responsabilidad parental, guarda, alimentos o adopción, ¿qué juez es competente según el artículo 716 del CCyC?",
    "El del lugar donde se encuentra el centro de vida de la persona menor de edad",
    ["El del domicilio del progenitor demandado en el proceso", "El del domicilio del actor que promueve la demanda", "El de la ciudad capital de la provincia en todos los casos"],
    "El centro de vida es el lugar donde la persona menor desarrolla de manera estable sus relaciones familiares, educativas, sociales y afectivas.");

  q("Art. 21 CPF", "Prevención y conexidad",
    "¿Cuál es el objetivo de la competencia por prevención y conexidad del artículo 21 del CPF?",
    "Evitar la dispersión de procesos de un mismo conflicto familiar",
    ["Acumular siempre todas las causas en un único juez, sin excepciones", "Eliminar por completo la competencia territorial en el fuero de familia", "Reducir la cantidad de jueces que integran el fuero de familia"],
    "Siempre respetando las reglas especiales de competencia y las modificaciones del centro de vida.");

  q("Art. 23 CPF", "Organización del órgano judicial",
    "Según el artículo 23 del CPF, ¿a quién corresponde la gestión administrativa en el fuero de familia?",
    "A la Oficina Judicial; la función jurisdiccional corresponde al juez",
    ["Al juez de familia, que también ejerce la gestión administrativa", "Al Equipo Técnico Interdisciplinario que asiste al juzgado", "A la Asesoría Oficial que interviene en los procesos"],
    "El art. 26 CPF regula las funciones del Equipo Técnico Interdisciplinario: asesorar al juez, elaborar informes y evitar la revictimización.");

  q("Art. 707 CCyC", "Niñas, niños y adolescentes en el proceso",
    "El artículo 707 del CCyC reconoce a niñas, niños, adolescentes y personas con capacidad restringida:",
    "A ser oídos en los procesos que los afecten, valorándose su opinión según su discernimiento",
    ["A decidir por sí mismos el resultado final del proceso", "A no ser oídos cuando los progenitores se opongan expresamente", "A ser oídos solamente si ya son adolescentes de trece años"],
    "En San Juan, los arts. 6 y 8 CPF receptan el interés superior y el derecho a ser oído.");

  q("Art. 639 CCyC", "Autonomía progresiva",
    "¿Cuáles son los tres principios fundamentales de la responsabilidad parental según el artículo 639 del CCyC?",
    "Interés superior, autonomía progresiva y derecho a ser oído",
    ["Interés superior, igualdad entre progenitores y gratuidad del proceso", "Autonomía progresiva, oficiosidad judicial y oralidad en las audiencias", "Tutela efectiva, inmediación y celeridad en la resolución del conflicto"],
    "Establece que a mayor autonomía del hijo, disminuye la representación de los progenitores.");

  q("Art. 679 CCyC", "Representación y participación procesal de NNA",
    "Según el artículo 679 del CCyC, una persona menor de edad puede reclamar judicialmente contra sus propios progenitores, sin autorización previa, cuando cuenta con:",
    "Edad y madurez suficientes y asistencia letrada",
    ["Autorización previa del juez de paz del domicilio del menor", "Más de dieciséis años, sin necesidad de asistencia letrada", "El acuerdo de ambos progenitores, expresado por escrito"],
    "El art. 677 dispone que los progenitores pueden estar en juicio por sus hijos como actores o demandados.");

  q("Art. 27 CPF", "El abogado o abogada del niño",
    "Según el artículo 27 del CPF, los adolescentes pueden contar con patrocinio letrado:",
    "De manera conjunta o autónoma respecto de sus representantes legales",
    ["Solamente de manera conjunta con sus representantes legales", "No pueden contar con patrocinio letrado propio en ningún caso", "Solamente si han cumplido los dieciséis años de edad"],
    "Los niños con edad y madurez suficiente pueden tener patrocinio propio, previa evaluación judicial. Ser oído y tener abogado propio no son conceptos idénticos.");

  q("Art. 109 CCyC", "Tutor o tutora especial. Tutor ad litem",
    "¿Cuándo corresponde designar tutor especial según el artículo 109 del CCyC?",
    "Cuando existe conflicto de intereses entre el menor y su representante, entre otros supuestos",
    ["Siempre que se inicie un proceso de familia que lo involucre", "Cuando el menor cumple trece años de edad, de manera automática", "Cuando los progenitores lo soliciten de común acuerdo"],
    "El tutor especial es un representante para una cuestión determinada; no es una tutela general ni sustituye la responsabilidad parental.");

  q("Art. 103 CCyC", "Asesoría Oficial. Ministerio Público",
    "¿Cuándo es «complementaria» la actuación del Ministerio Público respecto de personas menores de edad o incapaces?",
    "Cuando hay intereses de esas personas en juego; su falta puede causar nulidad relativa",
    ["Cuando existe inacción de los representantes legales de la persona", "Cuando la persona carece de representante legal que la asista", "Cuando se exige a los representantes el cumplimiento de sus deberes"],
    "Es principal cuando los derechos están comprometidos y hay inacción de los representantes, cuando el proceso exige el cumplimiento de deberes de los representantes o cuando la persona carece de representante legal.");

  q("Art. 111 CPF", "Asesoría Oficial. Ministerio Público",
    "La intervención de la Asesoría Oficial en violencia es obligatoria cuando están involucrados:",
    "Niñas, niños y adolescentes, personas con capacidad restringida, incapaces o con discapacidad",
    ["Únicamente personas adultas mayores en situación de vulnerabilidad", "Únicamente mujeres víctimas de violencia de género o doméstica", "Ninguna persona en particular, pues es siempre facultativa"],
    "También interviene en el control de legalidad de medidas excepcionales (arts. 169 a 173), procesos de capacidad (art. 125 y ss.) y adopción (art. 182 y ss.).");

  q("Art. 13 CPF", "Actos procesales y lenguaje claro",
    "¿Qué establece el artículo 13 del CPF respecto de las resoluciones judiciales?",
    "Redactarse con términos simples y entendibles, según las características de las partes",
    ["Utilizar lenguaje técnico estricto para asegurar la precisión jurídica", "Prescindir de fundamentos para lograr mayor rapidez en la decisión", "Ser breves y carecer de explicación sobre sus consecuencias"],
    "El lenguaje claro no implica perder precisión jurídica.");

  q("Art. 42 CPF", "Audiencias",
    "Según el artículo 42 del CPF, como principio las audiencias de familia:",
    "No son públicas, pueden hacerse por medios tecnológicos y deben documentarse",
    ["Son públicas y abiertas a cualquier persona interesada en asistir", "Son siempre presenciales y no pueden realizarse por medios virtuales", "No se documentan, por su carácter confidencial y reservado"],
    "En el proceso de conocimiento, la audiencia inicial se rige por los arts. 80 y siguientes CPF.");

  q("Art. 82 CPF", "Audiencias",
    "El artículo 82 del CPF autoriza al juez a:",
    "Ordenar prueba de oficio, siempre que no afecte el derecho de defensa",
    ["Rechazar toda prueba ofrecida por las partes en el proceso", "Prescindir de la prueba cuando las partes estén de acuerdo", "Ordenar prueba de oficio sin límite alguno, aun afectando la defensa"],
    "En la audiencia inicial se procura delimitar las cuestiones controvertidas, intentar una solución consensuada y determinar el objeto del proceso y de la prueba.");

  q("Art. 710 CCyC", "Prueba en los procesos de familia",
    "Según el artículo 710 del CCyC, los procesos de familia se rigen por los principios de libertad, amplitud y flexibilidad de la prueba, y la carga recae finalmente sobre:",
    "Quien se encuentra en mejores condiciones de probar",
    ["El actor, en todos los casos que se discuten en el proceso", "El demandado, en todos los casos que se discuten en el proceso", "El juez, que debe producir toda la prueba de oficio"],
    "El art. 67 CPF recepta la carga dinámica de la prueba, por ejemplo en alimentos respecto de la capacidad económica del alimentante.");

  q("Art. 711 CCyC", "Prueba en los procesos de familia",
    "El artículo 711 del CCyC admite como testigos a parientes y allegados, aunque permite:",
    "Excluir la declaración de menores según las circunstancias, para evitar conflictos de lealtades",
    ["Excluir siempre la declaración de los parientes de las partes", "Exigir juramento a los menores que presten declaración", "Prohibir toda declaración de adultos allegados a la familia"],
    "La finalidad es evitar que una niña o niño sea colocado innecesariamente en un conflicto entre adultos.");
})();

// ---------------------------------------------------------------- Tema VII (parte 2)
(function () {
  const q = crearTema("Tema VII — Derecho De Las Familias Y Proceso De Familia", "t7");

  q("Art. 57 CPF", "Medidas cautelares, provisionales y tutela anticipada",
    "¿Qué permite la tutela anticipada del artículo 57 del CPF?",
    "Satisfacer provisoriamente una pretensión ante riesgo de perjuicio irreparable y alta probabilidad",
    ["Dictar sentencia definitiva sin necesidad de sustanciar el juicio", "Suspender el proceso principal hasta que se resuelva la medida", "Rechazar la demanda sin dar traslado a la parte demandada"],
    "La decisión provisional no equivale a la definitiva y puede modificarse si cambian las circunstancias.");

  q("Art. 55 CPF", "Medidas provisionales",
    "Según el artículo 55 del CPF, las reglas sobre medidas provisionales aplicables al matrimonio se extienden, en lo pertinente, a:",
    "Las uniones convivenciales",
    ["Las sucesiones", "Las adopciones", "Las relaciones laborales"],
    "El art. 722 CCyC permite medidas para impedir que la administración o disposición de bienes de un cónyuge ponga en peligro los derechos patrimoniales del otro.");

  q("Art. 438 CCyC", "Divorcio",
    "En el régimen actual de divorcio, ¿qué requiere el artículo 438 del CCyC?",
    "Acompañar a toda petición una propuesta para regular los efectos del divorcio",
    ["Probar la culpa del otro cónyuge en la ruptura matrimonial", "Esperar un plazo mínimo de matrimonio antes de pedirlo", "Contar con el consentimiento expreso de ambos cónyuges"],
    "Cualquiera de los cónyuges puede pedir el divorcio unilateralmente o ambos conjuntamente, sin invocar causa.");

  q("Art. 213 CPF", "Divorcio",
    "Según el artículo 213 del CPF, el desacuerdo sobre los efectos del divorcio:",
    "No suspende el dictado de la sentencia de divorcio",
    ["Suspende el dictado de la sentencia hasta que haya acuerdo", "Obliga a las partes a probar la culpa del otro cónyuge", "Impide el divorcio unilateral hasta que se resuelvan los efectos"],
    "El CPF diferencia el divorcio bilateral (art. 214) y el unilateral (art. 215).");

  q("Art. 441 CCyC", "Compensación económica",
    "¿Cuál es la finalidad de la compensación económica como efecto del divorcio?",
    "Corregir el desequilibrio económico manifiesto causado por el matrimonio y su ruptura",
    ["Indemnizar al cónyuge inocente por los daños de la ruptura", "Sancionar al cónyuge culpable por haber causado el divorcio", "Repartir por mitades los bienes gananciales de los cónyuges"],
    "Puede ser prestación única, renta por tiempo determinado o excepcionalmente indeterminado. La acción caduca a los seis meses de la sentencia de divorcio.");

  q("Art. 463 CCyC", "Régimen patrimonial del matrimonio",
    "Si los cónyuges no hicieron una opción válida de régimen patrimonial, el matrimonio queda sometido al régimen de:",
    "Comunidad de ganancias, desde la celebración del matrimonio",
    ["Separación de bienes, desde la celebración del matrimonio", "Un régimen mixto que combina comunidad y separación de bienes", "Ningún régimen patrimonial hasta que se produzca el divorcio"],
    "El CCyC permite optar entre comunidad de ganancias y separación de bienes. Los arts. 464 y 465 establecen reglas de calificación de bienes propios y gananciales.");

  q("Arts. 464 y 465 CCyC", "Régimen patrimonial del matrimonio",
    "Para determinar si un bien es propio o ganancial, la titularidad registral:",
    "No lo determina: importan la causa y el momento de adquisición y el origen de los fondos",
    ["Lo determina siempre, por ser el dato oficial del registro respectivo", "Es irrelevante en todos los casos, aun para los bienes registrables", "Solo importa en los bienes muebles, pero no en los inmuebles"],
    "Las recompensas procuran restablecer el equilibrio cuando una masa patrimonial se benefició a costa de otra.");

  q("Art. 509 CCyC", "Uniones convivenciales",
    "¿Cómo define el artículo 509 del CCyC a la unión convivencial?",
    "La unión afectiva singular, pública, notoria, estable y permanente de dos personas que conviven",
    ["Una unión equiparada al matrimonio en todos sus efectos jurídicos", "La unión que se encuentra inscripta en el Registro Civil", "La convivencia de las personas que supera los cinco años"],
    "El Código reconoce efectos jurídicos a las uniones convivenciales sin equipararlas al matrimonio.");

  q("Art. 510 CCyC", "Uniones convivenciales",
    "¿Qué convivencia mínima exige el artículo 510 del CCyC para reconocer efectos a la unión convivencial?",
    "Dos años",
    ["Un año", "Cinco años", "Seis meses"],
    "La inscripción registral facilita la prueba pero no es constitutiva. La compensación económica al finalizar la unión caduca a los seis meses del cese de la convivencia.");

  q("Art. 558 CCyC", "Filiación",
    "¿Cuáles son las tres fuentes de la filiación según el artículo 558 del CCyC?",
    "La naturaleza, las técnicas de reproducción humana asistida y la adopción",
    ["La naturaleza, el matrimonio de los progenitores y la adopción", "La sangre, el matrimonio de los progenitores y la voluntad", "La adopción, la tutela y la naturaleza de los progenitores"],
    "Las tres fuentes producen igualdad de efectos dentro de los términos del Código.");

  q("Art. 566 CCyC", "Filiación matrimonial",
    "Según el artículo 566, salvo prueba en contrario, se presume la filiación respecto del cónyuge de quien da a luz para los hijos nacidos hasta cuántos días después de los supuestos de la norma?",
    "Hasta los trescientos días",
    ["Hasta los ciento ochenta días", "Hasta los noventa días", "Hasta los cuatrocientos días"],
    "Esta presunción no se aplica a las TRHA cuando el cónyuge no prestó el consentimiento previo, informado y libre.");

  q("Art. 576 a 581 CCyC", "Acciones de filiación por naturaleza",
    "El derecho a reclamar o impugnar la filiación:",
    "No se extingue por prescripción ni por renuncia",
    ["Prescribe a los diez años de producido el nacimiento", "Es renunciable por su titular mediante acto expreso", "Se extingue al cumplir el hijo los dieciocho años de edad"],
    "El art. 579 admite toda clase de pruebas y permite ordenar de oficio las pruebas genéticas, incluso post mortem.");

  q("Art. 582 CCyC", "Acciones de reclamación",
    "La acción de reclamación de filiación del hijo puede ejercerse:",
    "En todo tiempo; si es matrimonial, debe demandar a ambos cónyuges",
    ["Solo dentro del año de nacido el hijo, bajo pena de caducidad", "Solo durante la minoría de edad, hasta los dieciocho años", "Solo con autorización judicial previa del juez de familia"],
    "El art. 583 prevé la intervención del Ministerio Público cuando el niño está inscripto solo con filiación materna.");

  q("Art. 591 CCyC", "Acciones de impugnación",
    "El artículo 591 regula la acción de negación de la filiación presumida, que puede ejercer el cónyuge respecto del hijo nacido dentro de los:",
    "Dentro de los ciento ochenta días siguientes a la celebración del matrimonio",
    ["Dentro de los trescientos días siguientes a la celebración del matrimonio", "Dentro de los noventa días siguientes a la celebración del matrimonio", "Dentro de los treinta días siguientes a la celebración del matrimonio"],
    "El art. 592 regula la impugnación preventiva, que puede interponerse incluso antes del nacimiento.");

  q("Art. 256 CPF", "Proceso de filiación en San Juan",
    "Según el artículo 256 del CPF, las acciones de filiación tramitan, como regla, mediante:",
    "Proceso ordinario, aunque el juez puede disponer otro trámite fundadamente",
    ["Proceso abreviado, sin posibilidad de que el juez disponga otro", "Proceso monitorio, con inversión del contradictorio inicial", "Proceso sumarísimo, con plazos reducidos para toda la actividad"],
    "El art. 259 regula la prueba genética: puede ordenarse la prueba de ADN aun cuando no haya sido ofrecida por las partes.");

  q("Art. 263 CPF", "Proceso de filiación en San Juan",
    "El artículo 263 del CPF permite fijar:",
    "Alimentos provisorios durante el proceso o antes de su inicio, con plazo para promover la acción",
    ["Un régimen de comunicación provisorio entre el hijo y el progenitor", "La guarda con fines de adopción de la persona nacida", "El cuidado personal compartido de manera alternada o indistinta"],
    "Los arts. 260 y 261 regulan la incomparecencia o negativa injustificada a la prueba genética.");

  q("Arts. 560 a 562 CCyC", "Técnicas de reproducción humana asistida",
    "En las técnicas de reproducción humana asistida, la determinación de la filiación se centra en:",
    "La voluntad procreacional expresada mediante consentimiento previo, informado y libre",
    ["El elemento genético del donante, que determina siempre la filiación", "El vínculo biológico entre el donante y la persona nacida", "La edad y el estado civil de las personas que se someten a la técnica"],
    "Quien aporta material genético como donante no queda emplazado automáticamente como progenitor.");

  q("Art. 595 CCyC", "Adopción",
    "¿Cuál es la finalidad fundamental de la adopción?",
    "Que niñas, niños y adolescentes crezcan en una familia si no pueden hacerlo en la de origen",
    ["Satisfacer el deseo de las personas adultas de tener hijos", "Reducir exclusivamente el número de niños institucionalizados", "Transferir bienes y derechos hereditarios a los adoptantes"],
    "Principios: interés superior, derecho a la identidad, agotamiento de las posibilidades en familia de origen o ampliada y preservación de vínculos fraternos.");

  q("Art. 619 CCyC", "Adopción",
    "¿Cuáles son los tres tipos de adopción que reconoce el artículo 619 del CCyC?",
    "Plena, simple y de integración",
    ["Plena, parcial y abierta", "Simple, legal y judicial", "Plena, simple y administrativa"],
    "La plena extingue los vínculos con la familia de origen; la simple mantiene ciertos vínculos; la de integración incorpora al hijo del cónyuge o conviviente.");

  q("Art. 187 CPF", "Declaración de situación de adoptabilidad",
    "En caso de fracaso de las medidas excepcionales para preservar la familia de origen o ampliada, ¿qué plazo máximo fija el artículo 187 del CPF?",
    "Ciento ochenta días",
    ["Noventa días desde la adopción de la medida excepcional", "Treinta días desde la adopción de la medida excepcional", "Un año desde la adopción de la medida excepcional"],
    "Los arts. 182 a 195 CPF regulan el procedimiento de declaración de adoptabilidad.");

  q("Art. 199 CPF", "Guarda con fines de adopción",
    "¿Cuál es el plazo máximo de la guarda con fines de adopción según el artículo 199 del CPF?",
    "Seis meses",
    ["Un año", "Tres meses", "Dos años"],
    "Está regulada por los arts. 611 a 614 CCyC y 196 a 202 CPF.");

  q("Art. 207 CPF", "Juicio de adopción",
    "¿Desde qué edad debe prestar consentimiento expreso la persona que será adoptada, según el artículo 207 del CPF?",
    "Desde los diez años",
    ["Desde los trece años", "Desde los dieciséis años", "Desde los seis años"],
    "El consentimiento es un requisito jurídico adicional, distinto del derecho a ser oído.");

  q("Art. 632 CCyC", "Adopción de integración",
    "La adopción de integración, a diferencia de las restantes adopciones, NO requiere:",
    "Declaración de adoptabilidad, guarda previa ni inscripción en el registro de adoptantes",
    ["Sentencia judicial que constituya el vínculo de filiación adoptiva", "Intervención de la Asesoría Oficial cuando el adoptado es menor", "Escuchar a los progenitores de origen del niño que se pretende adoptar"],
    "En San Juan se rige por los arts. 209 y 210 CPF y por las normas del proceso abreviado.");

  q("Art. 638 CCyC", "Responsabilidad parental",
    "¿Cómo define el artículo 638 del CCyC la responsabilidad parental?",
    "Los deberes y derechos de los progenitores sobre la persona y bienes del hijo menor no emancipado",
    ["El derecho exclusivo del padre a decidir sobre la vida de los hijos", "El deber de alimentos que corresponde a los progenitores únicamente", "El derecho de visita del progenitor con quien no convive el hijo"],
    "La titularidad corresponde, como regla, a ambos progenitores, convivan o no; el ejercicio es la puesta en práctica de esa responsabilidad.");

  q("Art. 641 CCyC", "Responsabilidad parental - Ejercicio",
    "Según el artículo 641, ¿a quién corresponde el ejercicio de la responsabilidad parental si los progenitores se divorcian?",
    "A ambos progenitores, como regla (coparentalidad)",
    ["Solo a la madre", "Solo al progenitor con quien convive el hijo", "Solo al padre"],
    "Se presume que los actos de uno cuentan con la conformidad del otro, salvo oposición expresa o los actos del art. 645.");

  q("Art. 642 CCyC", "Responsabilidad parental - Ejercicio",
    "Ante desacuerdos reiterados que entorpecen gravemente el ejercicio, el juez puede atribuir total o parcialmente el ejercicio a uno de los progenitores por un plazo máximo de:",
    "Dos años",
    ["Seis meses", "Un año", "Cinco años"],
    "También puede distribuir funciones entre ellos.");

  q("Art. 645 CCyC", "Actos que requieren el consentimiento de ambos progenitores",
    "¿Cuál de estos actos requiere el consentimiento expreso de ambos progenitores según el artículo 645?",
    "Autorizar la salida de la República o el cambio de residencia permanente en el extranjero",
    ["Inscribir al hijo en el establecimiento educativo que elija el progenitor", "Autorizar un viaje del hijo dentro del territorio de la República", "Contratar un servicio médico de rutina para atender al hijo"],
    "También autorizar al adolescente de 16 a 18 años a contraer matrimonio, el ingreso a comunidades religiosas o fuerzas armadas, estar en juicio y administrar sus bienes.");

  q("Arts. 648 a 651 CCyC", "Cuidado personal",
    "Cuando los progenitores no conviven, ¿qué modalidad de cuidado personal prioriza el CCyC como primera alternativa?",
    "El cuidado compartido indistinto, salvo que sea imposible o perjudicial para el hijo",
    ["El cuidado unilateral a cargo de la madre, salvo acuerdo en contrario", "El cuidado compartido alternado, con permanencia por períodos iguales", "El cuidado unilateral a cargo del padre, salvo acuerdo en contrario"],
    "En el alternado el hijo permanece períodos con cada progenitor; en el indistinto reside principalmente con uno pero ambos comparten decisiones.");
})();

// ---------------------------------------------------------------- Tema VII (parte 3)
(function () {
  const q = crearTema("Tema VII — Derecho De Las Familias Y Proceso De Familia", "t7");

  q("Art. 654 CCyC", "Deber de información",
    "¿Qué impone el artículo 654 del CCyC a cada progenitor?",
    "Informar al otro sobre cuestiones de educación, salud y otras circunstancias relevantes del hijo",
    ["Pagar las cuotas escolares y los gastos extraordinarios del hijo", "Mantener la convivencia con el otro progenitor y el hijo en común", "Tramitar ante el juez el plan de parentalidad del hijo en común"],
    "Los arts. 655 y 656 regulan el plan de parentalidad, cuyo objetivo es ejercer adecuadamente la coparentalidad.");

  q("Art. 657 CCyC", "Guarda a un pariente",
    "La guarda a un pariente del artículo 657 del CCyC puede otorgarse por el plazo de:",
    "Un año, prorrogable por otro período igual mediante decisión fundada",
    ["Seis meses, sin posibilidad de prórroga alguna", "Tres años, prorrogables por otro período igual", "Cinco años, prorrogables por otro período igual"],
    "El guardador asume el cuidado personal, pero la titularidad y el ejercicio de la responsabilidad parental permanecen, como regla, en los progenitores.");

  q("Art. 643 CCyC", "Delegación del ejercicio de la responsabilidad parental",
    "¿Qué requisitos tiene la delegación del ejercicio de la responsabilidad parental a un pariente (art. 643)?",
    "Acuerdo homologado judicialmente, hijo oído, y plazo de un año renovable por otro igual",
    ["Resolución del juez dictada sin acuerdo previo de los progenitores", "Plazo máximo de cinco años, renovable por períodos iguales", "Acuerdo de los progenitores que no requiere homologación judicial"],
    "A diferencia de la guarda del art. 657, en la delegación son los propios progenitores quienes acuerdan transferir temporalmente el ejercicio; conservan la titularidad.");

  q("Art. 104 CCyC", "Tutela",
    "¿Cuándo procede la tutela según el artículo 104 del CCyC?",
    "Cuando no hay quien ejerza la responsabilidad parental, para proteger a la persona y bienes del niño",
    ["Cuando los progenitores se divorcian y no acuerdan el cuidado personal", "Cuando los progenitores viajan al exterior por más de tres meses", "Cuando el niño cumple trece años y solicita un tutor propio"],
    "El tutor asume funciones de protección y representación legal, a diferencia de la delegación y la guarda.");

  q("Arts. 700 a 702 CCyC", "Privación y suspensión",
    "¿Qué diferencia hay entre privación y suspensión de la responsabilidad parental?",
    "La privación afecta la titularidad y exige sentencia; la suspensión afecta solo el ejercicio",
    ["La privación afecta solo el ejercicio; la suspensión afecta la titularidad", "Ambas afectan la titularidad y requieren siempre sentencia judicial", "Ambas son medidas definitivas que no pueden dejarse sin efecto"],
    "Si uno de los progenitores es privado o suspendido, el otro continúa ejerciendo; la obligación alimentaria subsiste en todos los casos (art. 704).");

  q("Art. 701 CCyC", "Privación y suspensión",
    "La privación de la responsabilidad parental puede dejarse sin efecto mediante:",
    "La rehabilitación, cuando resulte beneficiosa para el hijo",
    ["La caducidad automática a los cinco años de dictada la sentencia", "Una nueva sentencia de adopción a favor de los mismos progenitores", "La decisión de los progenitores adoptada de común acuerdo"],
    "La privación procede en supuestos taxativos, como delitos dolosos contra el hijo, abandono o declaración de situación de adoptabilidad.");

  q("Art. 220 CPF", "Proceso de parentalidad en San Juan",
    "¿Qué permite el artículo 220 del CPF respecto del proceso de alimentos?",
    "Acumular excepcionalmente cuidado personal y comunicación al proceso de alimentos, sin que sea obligatorio",
    ["Prohibir toda acumulación de pretensiones al proceso de alimentos", "Acumular obligatoriamente todas las pretensiones de parentalidad al proceso", "Acumular el divorcio vincular al proceso de alimentos en trámite"],
    "El art. 543 CCyC establece como regla que los alimentos tramitan por el proceso más breve y no se acumulan a otra pretensión.");

  q("Art. 250 CPF", "Proceso de parentalidad en San Juan",
    "Ante incumplimientos relacionados con cuidado o comunicación, el artículo 250 del CPF indica que el juez debe:",
    "Ordenar el cumplimiento en plazo razonable y aplicar sanciones conminatorias, pudiendo oír al menor",
    ["Quitar automáticamente la responsabilidad parental al progenitor incumplidor", "Archivar la causa por tratarse de una cuestión estrictamente familiar", "Ordenar el arresto inmediato del progenitor que incumple lo dispuesto"],
    "Las decisiones sobre cuidado y comunicación no atribuyen derechos de un progenitor frente al otro, sino que organizan el ejercicio de la parentalidad.");

  q("Art. 658 CCyC", "Alimentos de hijas e hijos",
    "Como regla, la obligación alimentaria de los progenitores respecto de sus hijos se extiende hasta los:",
    "Los veintiún años, salvo que el hijo mayor cuente con recursos suficientes",
    ["Los dieciocho años, sin excepción para los hijos mayores de edad", "Los veinticinco años, sin importar los recursos que tenga el hijo", "Los dieciséis años, momento en que el hijo puede trabajar"],
    "Entre los 21 y 25 años se mantiene la obligación si el hijo continúa estudios y ello le impide sostenerse (art. 663), debiendo acreditarse.");

  q("Art. 660 CCyC", "Alimentos de hijas e hijos",
    "Según el artículo 660 del CCyC, las tareas cotidianas de cuidado personal de los hijos:",
    "Tienen valor económico y constituyen un aporte a su manutención",
    ["No tienen valor económico ni se computan como aporte alimentario", "Solo se valoran económicamente si se contrata a una empleada doméstica", "Se descuentan de la cuota alimentaria que fije el juez de familia"],
    "Por ello la contribución de cada progenitor no se mide exclusivamente por los aportes dinerarios.");

  q("Art. 668 CCyC", "Alimentos a cargo de los ascendientes",
    "Para reclamar alimentos a los abuelos, según el artículo 668, hay que acreditar:",
    "Verosímilmente, las dificultades para percibir los alimentos del progenitor obligado",
    ["Que se agotaron todas las vías de ejecución contra el progenitor obligado", "Que el progenitor obligado falleció y no dejó bienes suficientes", "Que el abuelo demandado es mayor de sesenta y cinco años de edad"],
    "Se trata de una subsidiariedad relativa: no hace falta agotar previamente todas las vías de ejecución.");

  q("Art. 537 CCyC", "Alimentos entre parientes",
    "Según el artículo 537, entre parientes se deben alimentos, en primer término:",
    "Ascendientes y descendientes, con preferencia de los más próximos; luego hermanos",
    ["Los tíos y los sobrinos, con preferencia de los más próximos en grado", "Los primos hermanos y los demás parientes colaterales de cuarto grado", "Los hermanos exclusivamente, con preferencia de los bilaterales"],
    "Los tíos y sobrinos son parientes colaterales de tercer grado y no son obligados ordinarios; hay precedentes excepcionales que los admitieron en situaciones de especial vulnerabilidad.");

  q("Art. 538 CCyC", "Alimentos entre parientes",
    "Entre los parientes por afinidad, el artículo 538 limita la obligación alimentaria a quienes están vinculados:",
    "En línea recta y en primer grado",
    ["En línea colateral", "En cualquier grado de la línea recta", "En segundo grado"],
    "El art. 541 define el contenido: subsistencia, habitación, vestuario y asistencia médica, y educación si el alimentado es menor.");

  q("Arts. 432 y 434 CCyC", "Alimentos entre cónyuges y después del divorcio",
    "Dictado el divorcio, los alimentos entre ex cónyuges proceden solo excepcionalmente. ¿En qué supuesto?",
    "Enfermedad grave preexistente que impide autosustentarse, o falta de recursos propios suficientes",
    ["Siempre que lo solicite el ex cónyuge que se considere afectado", "Por la culpa del otro cónyuge en la ruptura del matrimonio", "Cuando existan hijos menores a cargo de alguno de los ex cónyuges"],
    "En el segundo supuesto la duración no puede superar los años del matrimonio y es incompatible con la compensación económica del art. 441.");

  q("Art. 519 CCyC", "Uniones convivenciales y progenitor afín",
    "Entre convivientes existe un deber recíproco de asistencia:",
    "Mientras dura la convivencia; cesada la unión, como regla no hay alimentos posteriores",
    ["Aun después de cesada la unión, por tiempo indeterminado", "Solamente durante el primer año de convivencia de la pareja", "Nunca: los convivientes no se deben asistencia entre sí"],
    "A diferencia del matrimonio, no hay alimentos posteriores entre exconvivientes como regla, aunque hay casos jurisprudenciales que los admitieron.");

  q("Art. 676 CCyC", "Uniones convivenciales y progenitor afín",
    "La obligación alimentaria del progenitor afín respecto de los hijos de su cónyuge o conviviente es:",
    "Subsidiaria: los obligados principales son los progenitores y cesa, en principio, con la ruptura",
    ["Principal y vitalicia, igual a la de los progenitores del niño", "Igual a la de los progenitores, aun después de la ruptura", "Inexistente en todos los casos, aun durante la vida en común"],
    "Excepcionalmente puede fijarse una cuota asistencial transitoria si el cese del aporte puede provocar un grave daño y el progenitor afín asumió el sustento durante la vida familiar.");

  q("Arts. 220 y 221 CPF", "Proceso de alimentos en el CPF",
    "Según el artículo 220 del CPF, el proceso de alimentos se rige por las reglas del:",
    "Juicio abreviado, con las especialidades del Título VIII",
    ["Juicio ordinario, con las especialidades del Título VIII", "Juicio sumarísimo, con las especialidades del Título VIII", "Juicio ejecutivo, con las especialidades del Título VIII"],
    "El art. 221 contiene reglas como autonomía progresiva, irrepetibilidad, prueba oficiosa y carga del alimentante de acreditar su capacidad económica.");

  q("Art. 222 CPF", "Proceso de alimentos en el CPF",
    "¿Quiénes están legitimados para reclamar alimentos para una niña, niño o adolescente según el artículo 222 del CPF?",
    "Representantes legales, quien cuide al NNA, la Asesoría y el propio NNA con patrocinio",
    ["Solamente los progenitores, en representación de su hijo", "Solamente el juez de oficio, en protección del niño", "Solamente la Asesoría Oficial, como representante institucional"],
    "Es una aplicación concreta de la autonomía progresiva y la representación procesal.");

  q("Art. 235 CPF", "Alimentos provisorios",
    "Según el artículo 235 del CPF, al abrirse el proceso de alimentos el juez puede:",
    "Fijar la prestación provisoriamente si hay elementos probatorios suficientes",
    ["Rechazar la demanda sin dar traslado a la parte demandada", "Fijar alimentos definitivos sin necesidad de celebrar audiencia", "Suspender la cuota por seis meses hasta producirse la prueba"],
    "El art. 544 CCyC autoriza la fijación de alimentos provisorios desde el comienzo del proceso, para satisfacer necesidades inmediatas.");

  q("Arts. 228 a 230 y 249 CPF", "Incumplimiento de alimentos",
    "¿Qué medidas contemplan los artículos 228 a 230 del CPF ante el incumplimiento de alimentos?",
    "Sanciones conminatorias, retención directa sobre haberes y medidas cautelares",
    ["Solo el arresto automático del deudor alimentario moroso", "Solo la inhabilitación comercial del deudor alimentario moroso", "Ninguna medida especial: solo el cobro por la vía ejecutiva común"],
    "El art. 249 CPF establece un trámite ejecutivo especialmente expeditivo. También se han dispuesto prohibición de salida del país o de asistir a espectáculos y, en casos, el arresto del deudor.");

  q("Art. 251 CPF", "Aumento, disminución y cese",
    "Los pedidos de aumento, disminución, coparticipación o cesación de la cuota alimentaria:",
    "Se tramitan por el mismo Título y no interrumpen las cuotas vigentes",
    ["Suspenden automáticamente la cuota hasta que se resuelva el pedido", "Se tramitan por proceso ordinario ante el juez de primera instancia", "Requieren sentencia previa de la Cámara de Apelaciones en familia"],
    "El art. 252 permite fijar un aumento provisorio mientras se tramita el incidente cuando hay verosimilitud del derecho.");

  q("Art. 32 Ley 26.061", "Sistema de protección de derechos de NNA",
    "¿Cómo define el artículo 32 de la Ley 26.061 al Sistema de Protección Integral?",
    "Conjunto de organismos y servicios que protegen y restablecen los derechos de NNA",
    ["El sistema judicial integrado por los juzgados de menores", "El conjunto de normas penales aplicables a los adolescentes", "El sistema de adopción y guarda con fines adoptivos"],
    "La primera respuesta ante una amenaza no corresponde necesariamente al Poder Judicial, sino a políticas públicas y organismos administrativos.");

  q("Art. 35 Ley 26.061", "Medidas de protección integral",
    "Según el artículo 35 de la Ley 26.061, la falta de recursos económicos:",
    "No justifica por sí sola la separación del niño de su familia",
    ["Justifica siempre la separación del niño de su familia", "Justifica el inicio del proceso de adopción del niño", "Justifica la privación de la responsabilidad parental"],
    "La respuesta estatal debe orientarse al fortalecimiento familiar mediante programas y prestaciones adecuados.");

  q("Arts. 39 a 41 Ley 26.061", "Medidas excepcionales de protección",
    "Las medidas excepcionales de protección son:",
    "Excepcionales, subsidiarias, temporales y por el tiempo estrictamente necesario",
    ["Permanentes y sancionatorias para los progenitores incumplidores", "Principales y definitivas ante cualquier vulneración de derechos", "Opcionales y de duración indefinida hasta la mayoría de edad"],
    "El art. 40 exige que se hayan cumplimentado antes las medidas de protección integral del art. 33; el art. 41 prioriza la familia ampliada, mantener unidos a los hermanos y evitar la privación de libertad.");

  q("Art. 170 CPF", "Actuación del organismo administrativo",
    "Dentro de qué plazo de adoptada la medida excepcional el Organismo Administrativo debe remitir al juez el acto, informe técnico y antecedentes?",
    "Dentro de las veinticuatro horas",
    ["Dentro de las setenta y dos horas", "Dentro de los diez días", "Dentro de los treinta días"],
    "El acto debe establecer una duración que no puede exceder inicialmente de noventa días.");

  q("Arts. 171 y 173 CPF", "Control de legalidad",
    "¿En qué plazo el juez debe resolver sobre la legalidad de la medida excepcional (art. 171 CPF)?",
    "Dentro de los tres días",
    ["Dentro de las veinticuatro horas", "Dentro de los diez días", "Dentro de los noventa días"],
    "El juez no reemplaza al organismo administrativo: controla la legalidad (agotamiento de medidas previas, proporcionalidad, plazos y estrategias de abordaje).");

  q("Art. 177 CPF", "Seguimiento, prórroga y cese",
    "Si el Organismo Administrativo prorroga la medida excepcional, la prórroga no puede exceder de:",
    "Noventa días, sujeta a control judicial",
    ["Treinta días, sujeta a control judicial", "Seis meses, sujeta a control judicial", "Un año, sujeta a control judicial"],
    "Debe presentar un nuevo acto fundado. Debe evitarse prolongar la medida mediante renovaciones automáticas.");

  q("Art. 180 CPF", "Seguimiento, prórroga y cese",
    "¿Cuál es una causa de cese de la medida excepcional según el artículo 180 del CPF?",
    "Reintegro familiar, guarda judicial a un pariente, ilegalidad o adoptabilidad",
    ["Cumplimiento de la mayoría de edad de los progenitores", "Vencimiento del año calendario en que se dictó la medida", "Decisión del Fiscal que interviene en la causa respectiva"],
    "Es la última respuesta, no la primera: la separación del medio familiar es excepcional.");
})();

// ---------------------------------------------------------------- Tema VII (parte 4: capacidad, salud mental, violencia)
(function () {
  const q = crearTema("Tema VII — Derecho De Las Familias Y Proceso De Familia", "t7");

  q("Ley 26.378 y 27.044", "Restricción a la capacidad, sistemas de apoyo e inhabilitación",
    "¿Qué ley aprobó la Convención sobre los Derechos de las Personas con Discapacidad y qué ley le dio jerarquía constitucional?",
    "Ley 26.378 la aprobó y Ley 27.044 le dio jerarquía constitucional",
    ["Ley 26.061 la aprobó y Ley 26.657 le dio jerarquía constitucional", "Ley 27.044 la aprobó y Ley 26.378 le dio jerarquía constitucional", "Ley 26.485 la aprobó y Ley 27.736 le dio jerarquía constitucional"],
    "Su artículo 12 reconoce la capacidad jurídica y el derecho a apoyos; el 13, el acceso a la justicia con ajustes de procedimiento.");

  q("Art. 31 CCyC", "Principios aplicables",
    "¿Cuál de estos es un principio del artículo 31 del CCyC sobre capacidad?",
    "Presunción de capacidad, excepcionalidad de las restricciones y alternativas menos restrictivas",
    ["Presunción de incapacidad y restricción como regla general", "Restricción de capacidad como regla para toda persona internada", "La internación como indicio de capacidad restringida de la persona"],
    "La internación en un establecimiento asistencial, por sí sola, no modifica ni hace presumir restringida la capacidad.");

  q("Ley 26.657", "Principios aplicables",
    "Según la Ley de Salud Mental 26.657, un diagnóstico de salud mental:",
    "No permite presumir incapacidad ni riesgo; lo determina una evaluación interdisciplinaria",
    ["Permite presumir la incapacidad de la persona diagnosticada", "Habilita la internación automática de la persona diagnosticada", "Determina por sí solo la restricción de la capacidad jurídica"],
    "La pregunta central no es el diagnóstico, sino qué actos puede realizar por sí la persona, qué barreras encuentra y qué apoyos requiere.");

  q("Art. 32 CCyC", "Restricción a la capacidad",
    "¿Respecto de qué persona puede el juez restringir la capacidad según el artículo 32 del CCyC?",
    "Persona mayor de trece años con adicción o alteración mental grave que pueda dañarse o dañar sus bienes",
    ["Cualquier persona mayor de edad que tenga un diagnóstico psiquiátrico", "Cualquier persona con una discapacidad física permanente", "Toda persona mayor de sesenta años de edad, aunque conserve aptitudes"],
    "La sentencia debe identificar concretamente los actos alcanzados; en lo no restringido la persona conserva plena capacidad.");

  q("Arts. 125 a 142 CPF", "Restricción a la capacidad",
    "En el proceso de restricción de capacidad regulado por el CPF de San Juan, la sentencia está sometida a revisión periódica:",
    "Cada tres años, o en cualquier momento a pedido del interesado",
    ["Cada año, o en cualquier momento a pedido del interesado", "Cada diez años, sin posibilidad de pedido del interesado", "No se revisa: la sentencia es definitiva y no admite revisión"],
    "El juez debe entrevistar personalmente a la persona antes de resolver, que es parte del proceso, tiene derecho a asistencia letrada y el trámite es gratuito.");

  q("Art. 32 último párrafo CCyC", "Declaración excepcional de incapacidad",
    "¿Cuándo procede la declaración de incapacidad?",
    "Solo si la persona no puede interactuar ni expresar su voluntad y los apoyos son ineficaces",
    ["Siempre que exista un diagnóstico psiquiátrico que lo indique", "Siempre que lo soliciten los familiares directos de la persona", "Cuando la persona rechaza el tratamiento indicado por el equipo"],
    "Recién entonces puede designarse un curador representante. El art. 135 CPF reproduce este criterio restrictivo.");

  q("Art. 43 CCyC", "Sistemas de apoyo",
    "¿Cómo define el artículo 43 del CCyC al apoyo?",
    "Toda medida judicial o extrajudicial que facilite la toma de decisiones de la persona",
    ["La sustitución de la voluntad de la persona por un tercero", "La representación legal obligatoria de la persona con discapacidad", "Una tutela general sobre la persona y sus bienes"],
    "Apoyo y restricción de capacidad no son sinónimos: una persona puede necesitar ayuda sin restricción judicial de su capacidad.");

  q("Arts. 151 a 155 CPF", "Designación voluntaria de apoyos",
    "¿Qué particularidad tiene el CPF de San Juan en materia de apoyos?",
    "Regula un proceso autónomo de designación voluntaria de apoyos sin restringir la capacidad",
    ["Prohíbe la designación de apoyos si no hay restricción previa", "Exige restringir siempre la capacidad antes de designar apoyos", "Solo prevé la designación de apoyos para las personas menores"],
    "La persona conserva íntegramente su capacidad; si se opone al sistema de apoyo, el procedimiento no puede continuar.");

  q("Arts. 48 y 49 CCyC", "Inhabilitación por prodigalidad",
    "¿Cuál es el único supuesto de inhabilitación que subsiste en el CCyC?",
    "La prodigalidad: la gestión que expone a la familia a la pérdida del patrimonio",
    ["La disminución de facultades mentales de la persona", "Las adicciones que afectan la administración de bienes", "La ceguera o sordera que dificulta la gestión patrimonial"],
    "El efecto es la designación de un apoyo que asista a la persona en los actos de disposición entre vivos; la persona sigue siendo capaz. En San Juan: arts. 143 a 150 CPF.");

  q("Arts. 41 y 42 CCyC y Ley 26.657", "Salud mental e internaciones",
    "La internación involuntaria por razones de salud mental procede solo si:",
    "Riesgo cierto e inminente, evaluación interdisciplinaria, sin alternativa menos restrictiva y control judicial",
    ["Un diagnóstico psiquiátrico que lo justifique, sin otros requisitos", "El pedido de la familia, sin evaluación interdisciplinaria previa", "La decisión del juez de oficio, en todos los casos de internación"],
    "El art. 42 permite el traslado urgente de una persona en riesgo, pero con la finalidad de su evaluación por el sistema de salud.");

  q("Art. 20 Ley 26.657", "¿Quién decide la internación?",
    "Como regla, ¿quién decide la internación involuntaria?",
    "El equipo de salud, con dictamen de dos profesionales de distintas disciplinas",
    ["El juez de familia, previa audiencia con la persona afectada", "La Asesoría Oficial, con dictamen del equipo interdisciplinario", "El Ministerio Público Fiscal, con intervención de la policía"],
    "El juez controla inmediatamente la legalidad; excepcionalmente ordena la internación si el servicio de salud se niega pese a reunirse los presupuestos (art. 21 Ley 26.657; art. 162 CPF).");

  q("Art. 21 Ley 26.657 y art. 159 CPF", "Comunicación al juez",
    "La internación involuntaria debe ser comunicada al juez y al órgano de revisión dentro de las:",
    "Diez horas de adoptada; en cuarenta y ocho horas se remiten los antecedentes",
    ["Veinticuatro horas de adoptada; en setenta y dos horas se remiten los antecedentes", "Setenta y dos horas de adoptada; en cinco días se remiten los antecedentes", "Cinco días de adoptada; en diez días se remiten los antecedentes"],
    "El equipo de salud adopta la internación; el juez controla su legalidad.");

  q("Art. 22 Ley 26.657", "Defensa de la persona internada",
    "Si la persona internada no designa abogado, el Estado debe:",
    "Proporcionarle uno desde el inicio, que puede oponerse y pedir la externación",
    ["Designarle un tutor que decida por él durante la internación", "Esperar a que se inicie el juicio para designarle un defensor", "Designarle un curador que administre sus bienes mientras esté internado"],
    "El art. 158 CPF dispone la intervención de la Defensoría Oficial cuando no cuente con abogado; el art. 160 exige intervención de la Asesoría Oficial.");

  q("Art. 161 CPF", "¿Qué controla el juez?",
    "Según el artículo 161 del CPF, dentro de qué plazo máximo el juez debe autorizar o denegar la internación?",
    "Tres días; si la deniega, ordena la externación inmediata",
    ["Veinticuatro horas; si la deniega, ordena la externación inmediata", "Diez días; si la deniega, ordena la externación inmediata", "Treinta días; si la deniega, ordena la externación inmediata"],
    "Si la información es insuficiente puede solicitar informes ampliatorios o pericias externas (art. 160).");

  q("Art. 24 Ley 26.657", "Control periódico y externación",
    "¿Con qué periodicidad máxima debe el juez solicitar informes sobre la internación involuntaria según el artículo 24 de la Ley 26.657?",
    "Treinta días, con equipo independiente a los noventa días",
    ["Diez días, con equipo independiente a los treinta días", "Sesenta días, con equipo independiente a los ciento ochenta días", "Un año, con equipo independiente a los dos años"],
    "El art. 165 CPF adopta la misma lógica.");

  q("Art. 23 Ley 26.657", "Control periódico y externación",
    "El alta y la externación de una persona internada involuntariamente:",
    "Corresponden al equipo de salud, sin autorización judicial previa, informando al juez",
    ["Requieren siempre la autorización judicial previa a la externación", "Corresponden al Defensor, que los dispone a pedido de la persona", "Corresponden a la Asesoría Oficial, que los dispone de oficio"],
    "El art. 166 CPF exige comunicar judicialmente el cese dispuesto por el servicio de salud.");

  q("Art. 93 CPF", "Violencia familiar y violencia contra las mujeres",
    "¿Cómo define el artículo 93 del CPF la violencia familiar?",
    "Acción, omisión o maltrato para dominar o agredir a una persona de la familia, haya o no convivencia",
    ["Solo la violencia física ejercida contra mujeres en el hogar", "Solo la violencia ejercida entre cónyuges que conviven", "Solo la que ocurre en el hogar compartido por las partes"],
    "La protección no está limitada a las mujeres: alcanza a niños, personas mayores, personas con discapacidad, varones, etc.");

  q("Ley 26.485 y 27.736", "Violencia familiar y violencia contra las mujeres",
    "¿Qué incorporó la Ley 27.736 (Ley Olimpia) a la Ley 26.485?",
    "La violencia en el espacio digital",
    ["La violencia laboral contra las mujeres", "La violencia obstétrica contra las mujeres", "La violencia institucional contra las mujeres"],
    "La Ley 26.485 protege específicamente a las mujeres frente a violencias basadas en razones de género, en ámbito público y privado.");

  q("Art. 92 CPF", "Ley 989-E y Código Procesal de Familia",
    "¿Qué finalidad establece el artículo 92 del CPF para el proceso de violencia familiar?",
    "Adoptar medidas de protección integral para prevenir y erradicar la violencia familiar",
    ["Establecer la responsabilidad penal del denunciado en el proceso", "Resolver los divorcios entre las personas involucradas", "Fijar los alimentos definitivos a favor de las víctimas"],
    "Según el art. 94, el proceso se rige por gratuidad, celeridad, confidencialidad, profesionalidad, capacitación y prohibición de victimización institucional.");

  q("Art. 100 CPF", "¿Quién puede denunciar?",
    "Según el artículo 100 del CPF, la propia persona afectada por violencia familiar puede denunciar por sí desde los:",
    "Trece años",
    ["Dieciséis años", "Dieciocho años", "Diez años"],
    "Los funcionarios públicos que conozcan los hechos tienen obligación de denunciarlos (art. 101).");

  q("Art. 102 CPF", "¿Dónde puede realizarse la denuncia?",
    "¿Qué establece el artículo 102 del CPF respecto de la denuncia penal?",
    "Que la denuncia no puede condicionarse a una denuncia penal previa ni posterior",
    ["Que es obligatorio formular primero una denuncia penal", "Que debe esperarse la resolución del proceso penal", "Que el proceso de familia es accesorio del proceso penal"],
    "El proceso de protección familiar y la investigación penal son vías independientes. Las medidas protectorias permanecen vigentes mientras no sean modificadas (art. 122).");

  q("Arts. 104 y 105 CPF", "¿Dónde puede realizarse la denuncia?",
    "La presentación inicial de una denuncia de violencia familiar:",
    "No requiere patrocinio letrado; si luego hace falta y no tiene abogado, se designa defensa oficial",
    ["Requiere patrocinio letrado obligatorio desde el primer momento", "Requiere escritura pública que acredite la identidad del denunciante", "Solo puede hacerse por escrito y firmada por el denunciante"],
    "Puede formularse verbalmente, por escrito, por medios tecnológicos o mediante lenguajes alternativos.");

  q("Art. 112 CPF", "Medidas que puede adoptar el juez",
    "¿Cuál de estas medidas puede adoptar el juez de familia en violencia familiar según el artículo 112 del CPF?",
    "Atribuir el uso de la vivienda y excluir al denunciado, sea quien sea el titular",
    ["Condenar penalmente al denunciado por los hechos de violencia", "Disolver el vínculo matrimonial entre las partes en conflicto", "Privar de la responsabilidad parental al progenitor denunciado"],
    "También prohibir acercamiento y comunicaciones, incautar armas, fijar provisoriamente alimentos y cuidado personal, y otorgar guarda protectoria provisoria.");

  q("Art. 99 CPF", "Carácter urgente y relación con otros procesos",
    "Según el artículo 99 del CPF, las medidas de protección en violencia familiar pueden adoptarse:",
    "Inaudita parte, si hay verosimilitud suficiente del derecho invocado",
    ["Solo previa audiencia de ambas partes, con presencia del denunciado", "Solo con sentencia firme que declare los hechos de violencia", "Solo con dictamen previo del Fiscal que intervenga en la causa"],
    "Si se celebra audiencia, debe evitarse toda confrontación entre la persona afectada y la denunciada, escuchándolas por separado (art. 109).");

  q("Art. 118 CPF", "Carácter urgente y relación con otros procesos",
    "El incumplimiento de las medidas de protección puede dar lugar, entre otras, a las sanciones del artículo 118 del CPF, como:",
    "Multa, arresto, tareas comunitarias, capacitación obligatoria y costas",
    ["Solo apercibimiento por escrito, sin otra consecuencia", "Prisión preventiva automática del denunciado", "Pérdida automática de la responsabilidad parental"],
    "Sin perjuicio de las consecuencias penales que correspondan.");
})();

// ---------------------------------------------------------------- Tema VIII (parte 1)
(function () {
  const q = crearTema("Tema VIII — Derecho Penal Y Procesal Penal", "t8");

  q("", "Derecho Penal. Definición",
    "Según Enrique Cury, el derecho penal es:",
    "El conjunto de normas que regulan la potestad punitiva del Estado, con pena o medida de seguridad",
    ["El conjunto de normas que regulan el procedimiento de los jueces", "El conjunto de normas que regulan las relaciones entre particulares", "La potestad del Poder Ejecutivo de castigar a los habitantes"],
    "Su objetivo es asegurar los valores elementales sobre los cuales descansa la convivencia humana pacífica.");

  q("Art. 75 inc. 12 C.N.", "Derecho Penal Sustantivo y Derecho Procesal Penal",
    "¿A quién corresponde dictar el Código Penal según el artículo 75 inc. 12 de la Constitución Nacional?",
    "Al Congreso de la Nación, aplicándose luego en las provincias",
    ["A cada Legislatura provincial, según su jurisdicción", "Al Poder Ejecutivo Nacional, mediante decretos de necesidad", "A la Corte Suprema de Justicia, mediante acordadas generales"],
    "Las provincias interpretan y aplican el derecho penal sustantivo y dictan sus normas procesales (art. 5 C.N.).");

  q("Ley 754-O", "Derecho Penal Sustantivo y Derecho Procesal Penal",
    "¿Qué ley es el antiguo Código Procesal Penal de San Juan (sistema mixto), sancionado en 2004?",
    "La Ley 754-O (antes 7398)",
    ["La Ley 1851-O, sancionada en el año 2019", "La Ley 1993-O, sancionada en el año 2021", "La Ley 2352-O, sancionada en el año 2022"],
    "Rige hoy en forma residual para las causas que continúan en el sistema mixto.");

  q("Ley 1851-O", "Derecho Penal Sustantivo y Derecho Procesal Penal",
    "¿Desde qué fecha rige el Código Procesal Penal Acusatorio (Ley 1851-O), conforme el art. 3 de la Ley 1993-O y el Acuerdo General 45/2021?",
    "Desde el 26 de febrero de 2021",
    ["Desde el 27 de diciembre de 2019", "Desde el 24 de febrero de 2024", "Desde el 8 de noviembre de 2019"],
    "Fue sancionado el 8 de noviembre de 2019 y publicado el 27 de diciembre; el proceso de flagrancia (arts. 419 a 434) está vigente según el art. 616.");

  q("Acordada 6/2024", "Derecho Penal Sustantivo y Derecho Procesal Penal",
    "¿Qué dispuso la Acordada 6/2024 de la Corte de Justicia?",
    "La fecha de funcionamiento del sistema acusatorio para todos los delitos provinciales",
    ["La derogación del Código Penal de la Nación Argentina", "La creación de la Escuela Judicial de la Provincia", "La creación del Jurado de Enjuiciamiento de magistrados"],
    "Los procesos en trámite continúan hasta su conclusión por la Ley 754-O mediante la Oficina Judicial Penal de Finalización de Causas del Sistema Mixto.");

  q("", "Derecho Penal Sustantivo. Delito",
    "¿Cómo se define el delito según el cuadernillo?",
    "Una conducta típica, antijurídica, culpable y punible",
    ["Cualquier conducta que sea reprochable moralmente", "Toda infracción a las normas administrativas del Estado", "Una conducta típica y antijurídica, sin exigir culpabilidad"],
    "El Código Penal se divide en Parte General y Parte Especial (delitos en particular).");

  q("Art. 71 C.P.", "Derecho Penal Sustantivo. Delito",
    "Según el artículo 71 del Código Penal, ¿cómo deben iniciarse en general las acciones penales?",
    "De oficio, salvo las que dependan de instancia privada y las acciones privadas",
    ["Siempre a instancia de parte, mediante denuncia del ofendido", "Siempre por querella, con patrocinio letrado de la víctima", "Solo por denuncia de la víctima o de sus representantes legales"],
    "Son acciones privadas, por ejemplo, calumnias e injurias, violación de secretos (salvo arts. 154 y 157) y concurrencia desleal (art. 73).");

  q("Art. 72 C.P.", "Derecho Penal Sustantivo. Delito",
    "¿Cuál de estos delitos es de acción dependiente de instancia privada según el artículo 72 del Código Penal?",
    "Las lesiones leves, dolosas o culposas, salvo razones de seguridad o interés público",
    ["El homicidio simple, cuando no mediaren agravantes", "El robo simple, cuando no mediare violencia en las personas", "La calumnia y la injuria, que son de acción privada"],
    "También los delitos de los arts. 119, 120 y 130 cuando no resultare la muerte, y el impedimento de contacto de los hijos menores con sus padres no convivientes.");

  q("", "Sistemas procesales: caracterización",
    "¿Cuáles son los tres modelos de sistemas procesales que distingue el cuadernillo?",
    "El inquisitivo, el acusatorio y el mixto",
    ["El oral, el escrito y el mixto", "El adversarial, el inquisitivo y el dispositivo", "El público, el secreto y el mixto"],
    "El mixto es una mezcla de los dos anteriores.");

  q("", "Sistemas procesales: caracterización",
    "¿Cuál es una característica del sistema inquisitivo?",
    "El juez acusa y juzga, investiga y concentra las pruebas; el proceso es secreto y escrito",
    ["El fiscal investiga y acusa, y el juez solo decide el caso", "Las discusiones se desarrollan en audiencias orales y públicas", "El proceso es público y las sentencias se dictan oralmente"],
    "Son rasgos del acusatorio: el fiscal investiga y acusa, la defensa contesta y presenta prueba, el proceso es público y oral, y el juez juzga conforme a su libre convicción con sentencias orales.");

  q("", "Sistemas procesales: caracterización",
    "El sistema mixto divide el proceso en dos etapas. ¿Cuáles son y qué predomina en cada una?",
    "La instrucción, de rasgos inquisitivos, y el juicio, de rasgos acusatorios",
    ["La acusación y la defensa, de rasgos contradictorios", "La investigación y la ejecución, de rasgos administrativos", "La instrucción, de rasgos acusatorios, y el juicio, de rasgos inquisitivos"],
    "En la instrucción rige el secreto de sumario; en el juicio las audiencias son orales y contradictorias.");

  q("", "Diferencias de los distintos modelos procesales",
    "¿Qué principio rige en el sistema mixto, a diferencia del acusatorio?",
    "La legalidad procesal: el fiscal no puede decidir si investiga ni usar soluciones alternativas",
    ["El principio de oportunidad, que habilita criterios discrecionales", "El principio de conciliación, que habilita acuerdos entre las partes", "El principio de mediación, que habilita someter el conflicto a un mediador"],
    "En el acusatorio se autoriza al fiscal a disponer de la acción penal mediante criterios de oportunidad, conversión de la acción, conciliación, mediación, reparación integral y suspensión del proceso a prueba.");

  q("", "Caracteres generales del sistema mixto (Ley 754-O)",
    "En la etapa de instrucción del sistema mixto, intervendrá un juez Correccional si se trata de delitos cuyo máximo de pena:",
    "No exceda de tres años; si lo supera, interviene el Juez de Instrucción",
    ["No exceda de cinco años; si lo supera, interviene el Juez de Instrucción", "No exceda de un año; si lo supera, interviene el Juez de Instrucción", "No exceda de diez años; si lo supera, interviene el Juez de Instrucción"],
    "El juez instructor indaga al imputado y debe resolver su situación procesal en el término de diez días posteriores a la declaración indagatoria.");

  q("", "Caracteres generales del sistema mixto (Ley 754-O)",
    "¿Qué temperamentos puede adoptar el juez instructor tras la declaración indagatoria en el sistema mixto?",
    "Sobreseimiento, procesamiento o falta de mérito",
    ["Condena, absolución o archivo", "Acusación, defensa o prueba", "Prisión preventiva, libertad o excarcelación"],
    "La falta de mérito se dicta cuando los elementos de prueba no alcanzan para procesar ni para sobreseer y restan elementos por producirse.");

  q("", "Caracteres generales del sistema mixto (Ley 754-O)",
    "Una vez firme el procesamiento y agotada la prueba, el fiscal en el sistema mixto formula:",
    "El Requerimiento de Elevación de la Causa a Juicio, base de la acusación",
    ["La acusación directa en la audiencia oral de debate", "El pedido de sobreseimiento del imputado ante el juez", "El pedido de prisión preventiva del imputado ante el juez"],
    "La sentencia del Tribunal de Juicio es revisable por casación e inconstitucionalidad ante la Corte de Justicia.");
})();

// ---------------------------------------------------------------- Tema VIII (parte 2: sistema acusatorio)
(function () {
  const q = crearTema("Tema VIII — Derecho Penal Y Procesal Penal", "t8");

  q("Acuerdo General 45/2021", "Sistema procesal acusatorio - Implementación",
    "¿Qué dispuso el Acuerdo General 45/2021 de la Corte de Justicia?",
    "Que desde el 26 de febrero de 2021 el sistema acusatorio funcione en la Primera Circunscripción",
    ["Que el sistema acusatorio rija en toda la Provincia desde el año 2019", "Que se derogue la Ley 754-O desde el 26 de febrero de 2021", "Que se cree la Escuela Judicial desde el 26 de febrero de 2021"],
    "La implementación a todos los delitos de la provincia fue dispuesta por la Acordada 6/2024.");

  q("Art. 22 Ley 1851-O", "Nuevos roles en el proceso penal",
    "Con la Ley 1851-O, ¿cuál es la finalidad principal del proceso penal según el artículo 22?",
    "La resolución del conflicto, en lugar de la búsqueda de la verdad del modelo inquisitorial",
    ["La búsqueda de la verdad real como finalidad principal del proceso", "La imposición de la pena más grave prevista para el delito", "La celeridad del proceso por encima de cualquier otra finalidad"],
    "El juez pasa a ser custodio de la oralidad y su espacio natural de trabajo es la sala de audiencias.");

  q("Arts. 76 y 77 Ley 1851-O", "Nuevos roles en el proceso penal",
    "¿Qué es el «Colegio de Jueces» según el cuadernillo?",
    "Una referencia administrativa para distribuir tareas entre jueces, sin autoridades ni voluntad propia",
    ["Un tribunal colegiado que dicta sentencia por mayoría de sus miembros", "Un órgano con autoridades propias y manifestación de voluntad", "Un tribunal de apelación que revisa las decisiones de los jueces"],
    "La Oficina Judicial organiza audiencias, convoca a las partes, graba audios y videos y realiza las comunicaciones.");

  q("Arts. 104 y 105 Ley 1851-O", "Nuevos roles en el proceso penal",
    "Los miembros del Ministerio Público Fiscal deben sujetar su actuación a los principios de:",
    "Objetividad y buena fe",
    ["Oportunidad y parcialidad", "Legalidad y secreto", "Escritura y reserva"],
    "Tienen el deber de promover la acción penal pública, dirigir el cuerpo de investigadores fiscales y adoptar medidas para proteger a las víctimas.");

  q("Art. 120 Ley 1851-O", "Nuevos roles en el proceso penal",
    "¿A quién se denomina imputado según el artículo 120 de la Ley 1851-O?",
    "Toda persona señalada como autor o partícipe de un delito mediante un acto del procedimiento",
    ["Solamente quien tiene una sentencia condenatoria firme en su contra", "Solamente quien es indagado formalmente por el juez de garantías", "Solamente quien se encuentra detenido por orden de autoridad competente"],
    "Desde la primera diligencia y hasta la finalización del proceso tiene derecho a que se le aseguren las garantías necesarias para su defensa.");

  q("Art. 121 Ley 1851-O", "Derechos del imputado",
    "Si el imputado se encuentra detenido, tiene derecho a declarar cuantas veces quiera con su defensor, y dentro de qué plazo de efectivizada la medida?",
    "Dentro de las setenta y dos horas",
    ["Dentro de las veinticuatro horas", "Dentro de los diez días", "Dentro de las cuarenta y ocho horas"],
    "Entre otros derechos: ser informado de las razones de su detención, guardar silencio sin que ello sea indicio de culpabilidad, y entrevistarse con su defensor libre, privada y confidencialmente.");

  q("Art. 133 Ley 1851-O", "La víctima",
    "¿Quién se considera víctima del delito según el artículo 133 de la Ley 1851-O?",
    "El ofendido directamente y, en ciertos casos, familiares, socios, asociaciones y Fiscalía de Estado",
    ["Solamente la persona ofendida directamente por el hecho delictivo", "Solamente los herederos de la persona ofendida por el delito", "Solamente quien se constituye en querellante particular en la causa"],
    "La nueva ley pasa a la víctima de «sujeto pasivo» del derecho penal a «sujeto activo» del derecho procesal.");

  q("Art. 134 Ley 1851-O", "La víctima",
    "¿Cuál es un derecho de la víctima según el artículo 134 de la Ley 1851-O?",
    "Pedir la revisión del archivo, del criterio de oportunidad o del sobreseimiento, aun sin ser querellante",
    ["Decidir la pena que deberá cumplir el imputado condenado", "Dirigir la investigación penal preparatoria junto con el fiscal", "Integrar el Colegio de Jueces que resuelva la causa penal"],
    "También recibir trato digno, ser informada del estado de la causa, ser escuchada antes de decisiones que extingan o suspendan la acción penal y participar como querellante particular.");

  q("Arts. 135 y 136 Ley 1851-O", "La víctima",
    "¿Cuándo deben comunicarse a la víctima sus derechos según el artículo 135?",
    "En la primera diligencia procesal que se practique con ella",
    ["Al finalizar el juicio, en la audiencia de lectura de sentencia", "Al dictarse la sentencia, junto con la notificación de lo resuelto", "Solamente cuando ella lo solicite expresamente al fiscal"],
    "El art. 136 le permite designar un abogado de confianza y ser informada de su derecho a un defensor oficial en los casos en que la ley lo autoriza.");

  q("", "Noción del proceso acusatorio (Ley 1851-O)",
    "¿Cuáles son las etapas del proceso acusatorio según el cuadernillo?",
    "Investigación Penal Preparatoria, etapa intermedia y juicio oral",
    ["Instrucción, juicio oral y ejecución de la pena impuesta", "Denuncia, acusación y condena del imputado en la causa", "Instrucción y casación ante la Corte de Justicia provincial"],
    "La etapa intermedia va desde que el fiscal agota la investigación hasta el Auto de Apertura de Juicio Oral y está a cargo del Juez de la Investigación Preparatoria.");

  q("", "Noción del proceso acusatorio (Ley 1851-O)",
    "¿Qué función cumple la etapa intermedia?",
    "Controlar los resultados de la IPP y el mérito de la acusación antes del juicio oral",
    ["Dictar la sentencia que resuelva la responsabilidad del imputado", "Ejecutar la pena impuesta al imputado condenado en juicio", "Recibir la denuncia que inicia la investigación preparatoria"],
    "Es el momento de saneamiento del proceso, en el que se controlan las garantías procesales.");

  q("", "Noción del proceso acusatorio (Ley 1851-O)",
    "En el juicio oral, tras el veredicto de culpabilidad, ¿qué debe efectuarse para individualizar la pena?",
    "La cesura",
    ["La casación", "La suspensión del juicio a prueba", "La elevación a juicio"],
    "Antes, las partes valoran la prueba en los alegatos de clausura.");

  q("", "Investigación Penal Preparatoria",
    "¿Quiénes detentan con carácter exclusivo la potestad de recepción de denuncias en la IPP?",
    "El Ministerio Público Fiscal y la autoridad policial",
    ["El juez de garantías, de oficio o a pedido de parte", "El defensor oficial, cuando la víctima carece de recursos", "La Oficina Judicial, a través de sus unidades de gestión"],
    "Puede formularse por escrito, verbalmente o de cualquier modo fehaciente; en la denuncia verbal se extiende un acta.");

  q("", "Valoración inicial",
    "Una vez iniciada la investigación, ¿en qué plazo debe el fiscal adoptar o proponer alguna de las decisiones de valoración inicial?",
    "Quince días",
    ["Cinco días", "Treinta días", "Noventa días"],
    "Puede desestimar, archivar, aplicar criterio de oportunidad, iniciar la investigación previa a la formalización, formalizar la IPP o aplicar un procedimiento especial.");

  q("", "Valoración inicial",
    "¿En qué plazo puede el MPF realizar medidas probatorias en la investigación previa a la formalización de la IPP?",
    "Noventa días",
    ["Quince días", "Sesenta días", "Un año"],
    "Está obligado a formalizar la IPP cuando se cumple ese plazo o solicita la aplicación de la prisión preventiva.");

  q("", "Valoración inicial",
    "¿Cuál es la diferencia entre la desestimación y el archivo?",
    "Desestimación: no es delito; archivo: no se identificó al autor y no hay forma de probar",
    ["Son exactamente lo mismo y producen idénticos efectos", "El archivo procede cuando el hecho no constituye delito", "La desestimación procede cuando no se identificó al autor"],
    "El archivo no impide que se reabra la investigación; la desestimación no impide una nueva denuncia con elementos distintos.");
})();

// ---------------------------------------------------------------- Tema VIII (parte 3: IPP, disponibilidad, flagrancia)
(function () {
  const q = crearTema("Tema VIII — Derecho Penal Y Procesal Penal", "t8");

  q("", "Legajo de investigación",
    "El legajo de investigación en el sistema acusatorio:",
    "Pertenece al fiscal, es público para las partes desde la formalización y el juez no puede consultarlo",
    ["Pertenece al juez y es secreto para las partes durante todo el proceso", "Puede ser consultado libremente por el juez en cualquier momento", "Tiene pleno valor probatorio para fundar una condena en el juicio"],
    "El fiscal puede reservar las actuaciones por 10 días, prorrogables por igual período, con control jurisdiccional a petición de parte.");

  q("", "Legajo de investigación",
    "Las actuaciones del legajo de investigación:",
    "No tienen valor para condenar, pero sirven para cautelares, excepciones o sobreseimiento",
    ["Tienen pleno valor probatorio para fundar una condena", "No tienen ningún valor jurídico en el proceso penal", "Son prueba plena desde su incorporación al legajo del fiscal"],
    "Los elementos de convicción adquieren la condición de prueba recién al incorporarse a juicio respetando el principio de oralidad.");

  q("", "Formalización de la investigación penal preparatoria",
    "¿Qué es la formalización de la IPP?",
    "El acto en que el fiscal comunica en audiencia al imputado el hecho, su calificación y las pruebas",
    ["El acto por el cual el juez dicta sentencia de condena o absolución", "La denuncia que se formula ante la policía en función judicial", "El pedido de sobreseimiento que se presenta al cerrar la investigación"],
    "La presencia del defensor es requerida bajo pena de nulidad, y si el imputado declara no se le requiere juramento ni promesa de decir verdad.");

  q("", "Desarrollo de la investigación penal preparatoria",
    "Cuando las partes proponen diligencias al fiscal, este debe expedirse dentro de:",
    "Cuarenta y ocho horas; la negativa se controla judicialmente en tres días",
    ["Veinticuatro horas; la negativa se controla judicialmente en tres días", "Diez días; la negativa se controla judicialmente en tres días", "Treinta días; la negativa se controla judicialmente en tres días"],
    "El fiscal puede impartir instrucciones obligatorias y excluir a las partes de los actos que practique.");

  q("", "Desarrollo de la investigación penal preparatoria",
    "¿En cuál de estos casos puede solicitarse el anticipo jurisdiccional de prueba?",
    "Si es un acto definitivo e irreproducible o una declaración que no podrá recibirse en juicio",
    ["Siempre que lo pida la defensa, sin necesidad de fundamentos", "Solo si el imputado se encuentra detenido preventivamente", "Nunca: la prueba solo se produce en el juicio oral y público"],
    "También si por la complejidad del asunto el testigo puede olvidar circunstancias esenciales, o si el imputado está prófugo, es incapaz o hay un obstáculo constitucional.");

  q("", "Desarrollo de la investigación penal preparatoria",
    "¿Cuál es la duración máxima de la IPP desde la formalización y cuánto puede prorrogarse?",
    "Un año, con prórroga de hasta 180 días",
    ["Seis meses, con prórroga de hasta 90 días", "Dos años, con prórroga de hasta un año", "Un año, sin posibilidad de prórroga alguna"],
    "La prórroga se decide en audiencia que debe solicitarse antes del vencimiento del plazo ordinario; el imputado o el querellante pueden pedir un plazo menor.");

  q("", "Cierre de la investigación penal preparatoria",
    "Al cerrar la IPP, el fiscal puede:",
    "Solicitar el sobreseimiento del imputado o acusarlo",
    ["Dictar sentencia", "Ordenar la libertad sin intervención judicial", "Archivar el caso sin motivo"],
    "La acusación solo puede referirse a hechos y personas incluidos en la formalización, aunque se invoque una calificación jurídica distinta.");

  q("Art. 33 Ley 1851-O", "Disponibilidad de la acción penal",
    "¿Cuáles son las formas en que el fiscal puede disponer de la acción penal pública según el artículo 33?",
    "Oportunidad, conversión, conciliación, mediación, reparación integral y suspensión a prueba",
    ["Solo los criterios de oportunidad previstos por la ley procesal", "Archivo, desestimación y sobreseimiento de la causa penal", "Prisión preventiva, excarcelación y condena condicional"],
    "Los jueces no pueden otorgar, bajo pena de nulidad, medida alternativa alguna sin acuerdo expreso previo del fiscal y la defensa.");

  q("Art. 33 Ley 1851-O", "Disponibilidad de la acción penal",
    "¿En cuál de estos casos el fiscal NO puede disponer de la acción penal?",
    "Funcionario por delito del cargo, violencia doméstica o discriminatoria, o armas de fuego",
    ["Cuando el hecho investigado es insignificante para el interés público", "Cuando el imputado sufrió un daño grave a causa del hecho", "Cuando la víctima solicita expresamente que se disponga de la acción"],
    "Tampoco en supuestos incompatibles con instrumentos internacionales, leyes o instrucciones generales del MPF fundadas en política criminal.");

  q("", "Disponibilidad de la acción penal",
    "Los criterios de oportunidad son:",
    "La contracara de la legalidad procesal, que obligaba al fiscal a instar toda denuncia",
    ["Una forma de condena abreviada acordada entre las partes", "Un tipo de pena alternativa a la prisión impuesta por el juez", "Una forma de recurso contra las decisiones del fiscal"],
    "Procede, por ejemplo, ante hechos insignificantes, intervención de menor relevancia o daño grave sufrido por el propio imputado.");

  q("", "Disponibilidad de la acción penal",
    "La conciliación entre víctima e imputado procede en delitos:",
    "Delitos patrimoniales sin violencia o culposos, sin lesiones gravísimas ni muerte, homologada por el juez",
    ["Delitos de cualquier naturaleza, sin límite en la gravedad", "Delitos contra las personas, cualquiera sea el resultado", "Delitos cometidos por funcionarios públicos en el ejercicio de su cargo"],
    "Acreditado el cumplimiento, se extingue la acción penal; si se incumple, la víctima o el fiscal pueden solicitar la reapertura.");

  q("", "Disponibilidad de la acción penal",
    "¿Cuál es el plazo máximo del procedimiento de mediación penal?",
    "Treinta días",
    ["Quince días", "Noventa días", "Seis meses"],
    "Se rige por voluntariedad, confidencialidad, celeridad e imparcialidad; si se celebra y cumple un acuerdo, el imputado es sobreseído.");

  q("", "Disponibilidad de la acción penal",
    "Si el imputado incumple la suspensión del juicio a prueba y se revoca la medida, la pena que se le aplique en el juicio, en caso de condena:",
    "No podrá dejarse en suspenso",
    ["Se reduce a la mitad", "Se condona", "Se aplica en suspenso obligatoriamente"],
    "El acuerdo se redacta por escrito con firma del imputado, defensor y fiscal, y el juez decide sobre su admisibilidad en audiencia.");

  q("Arts. 419 y ss. Ley 1851-O", "Proceso especial de flagrancia",
    "¿En cuáles de estas situaciones se aplica el procedimiento de flagrancia?",
    "Sorprendido cometiendo el delito, perseguido, o con objetos o rastros que lo vinculen",
    ["Cuando el autor confiesa voluntariamente la comisión del delito", "Cuando el delito investigado es culposo y no tiene gravedad", "Cuando la víctima del delito es una persona menor de edad"],
    "Se llaman flagrancia propiamente dicha, cuasi flagrancia y flagrancia presunta.");

  q("Ley 2690-O", "Proceso especial de flagrancia",
    "El procedimiento de flagrancia es aplicable a los delitos dolosos cuya escala penal no supere:",
    "Veinte años de prisión o reclusión",
    ["Diez años de prisión o reclusión", "Cinco años de prisión o reclusión", "Treinta años de prisión o reclusión"],
    "Se excluyen las acciones dependientes de instancia privada (salvo lesiones leves) y las privadas. La Ley 2690-O modificó el art. 420.");

  q("Arts. 419 a 434 Ley 1851-O", "Proceso especial de flagrancia",
    "La audiencia de finalización o juicio en el procedimiento de flagrancia debe fijarse dentro de:",
    "7 días hábiles de la aprehensión, ampliables hasta 10 si hay pruebas que demanden más tiempo",
    ["24 horas de la aprehensión, sin posibilidad de ampliación", "30 días de la aprehensión, ampliables a 60 si hay pruebas pendientes", "3 días hábiles de la aprehensión, ampliables hasta 5 por pruebas"],
    "La sentencia es oral y, en casos complejos, los fundamentos pueden diferirse por 5 días.");
})();

// ---------------------------------------------------------------- Tema IX (parte 1: Ley 26.485)
(function () {
  const q = crearTema("Tema IX — Normativa De Género", "t9");

  q("Art. 1 Ley 26.485", "Ámbito de aplicación. Orden público",
    "Las disposiciones de la Ley 26.485 son de orden público y de aplicación en todo el territorio de la República, con excepción de:",
    "Las disposiciones procesales del Capítulo II del Título III",
    ["Las disposiciones sobre los tipos de violencia contra las mujeres", "Las disposiciones sobre políticas públicas de los tres poderes", "Las definiciones del artículo 4 sobre violencia contra las mujeres"],
    "Las jurisdicciones locales dictan sus normas de procedimiento o adhieren al régimen procesal de la ley (art. 19).");

  q("Art. 2 Ley 26.485", "Objeto",
    "¿Cuál es uno de los objetos de la Ley 26.485 según el artículo 2?",
    "Garantizar a las mujeres una vida sin violencia y remover patrones que sostienen la desigualdad",
    ["Reprimir penalmente a los agresores de manera exclusiva y excluyente", "Reglamentar el matrimonio igualitario en todo el territorio nacional", "Crear el Ministerio de la Mujer como autoridad de aplicación"],
    "También la eliminación de la discriminación entre mujeres y varones, el acceso a la justicia y la asistencia integral a las mujeres que padecen violencia.");

  q("Art. 3 Ley 26.485", "Derechos protegidos",
    "¿Cuál de estos es uno de los derechos que garantiza el artículo 3 de la Ley 26.485?",
    "Acceso gratuito a la justicia y trato respetuoso que evite la revictimización",
    ["Decidir libremente la pena que corresponde aplicar al agresor", "Recibir una indemnización automática por los daños sufridos", "Acceso a la justicia con patrocinio jurídico arancelado"],
    "También una vida sin violencia, la integridad física, psicológica, sexual, económica o patrimonial, y decidir sobre la vida reproductiva (Ley 25.673).");

  q("Art. 4 Ley 26.485", "Definición",
    "Según el artículo 4, la violencia contra las mujeres es toda conducta, por acción u omisión, basada en razones de género, que se produce:",
    "Se produce en el ámbito público o privado, por una relación desigual de poder, incluso desde el Estado",
    ["Se produce solo en el ámbito privado, entre personas que conviven", "Se produce solo en el ámbito familiar, entre integrantes del grupo", "Se produce solo cuando hay lesiones físicas comprobadas en la víctima"],
    "El artículo fue sustituido por la Ley 27.533. La violencia indirecta es toda conducta o práctica discriminatoria que ponga a la mujer en desventaja con respecto al varón.");

  q("Art. 5 Ley 26.485", "Tipos de violencia",
    "¿Cuántos tipos de violencia enumera el artículo 5 de la Ley 26.485 tras la Ley 27.533?",
    "Seis: física, psicológica, sexual, económica y patrimonial, simbólica y política",
    ["Cuatro: física, psicológica, sexual y económica y patrimonial", "Cinco: física, psicológica, sexual, económica y patrimonial, y simbólica", "Ocho: incluidas la violencia obstétrica y la violencia mediática"],
    "El inciso de violencia política fue incorporado por la Ley 27.533 (B.O. 20/12/2019).");

  q("Art. 5 inc. 5 Ley 26.485", "Tipos de violencia",
    "¿Cómo define la ley a la violencia simbólica?",
    "La que mediante estereotipos, mensajes o íconos reproduce dominación y naturaliza la subordinación de la mujer",
    ["La que se emplea contra el cuerpo de la mujer produciendo dolor o daño", "La que busca ocasionar un menoscabo en los recursos económicos de la mujer", "La que ejerce el personal de salud sobre los procesos reproductivos"],
    "La violencia económica y patrimonial incluye, por ejemplo, la percepción de un salario menor por igual tarea dentro de un mismo lugar de trabajo.");

  q("Art. 6 Ley 26.485", "Modalidades de violencia",
    "¿Cuál es la modalidad de violencia ejercida por el personal de salud sobre el cuerpo y los procesos reproductivos de las mujeres?",
    "La violencia obstétrica, regulada por la Ley 25.929",
    ["La violencia institucional, regulada por la Ley 26.485", "La violencia mediática, regulada por la Ley 26.522", "La violencia laboral, regulada por la Ley de Contrato de Trabajo"],
    "La violencia contra la libertad reproductiva vulnera el derecho a decidir el número de embarazos o el intervalo entre nacimientos.");

  q("Art. 6 inc. a Ley 26.485", "Modalidades de violencia",
    "Para la violencia doméstica contra las mujeres, el grupo familiar:",
    "Incluye parentesco, matrimonio, uniones de hecho y noviazgos, vigentes o finalizados, sin convivencia",
    ["Exige convivencia actual entre la mujer y el integrante del grupo", "Comprende solamente a las personas unidas en matrimonio civil", "Comprende solamente a los parientes por consanguinidad directa"],
    "Es la violencia ejercida por un integrante del grupo familiar independientemente del espacio físico donde ocurra.");

  q("Art. 6 Ley 26.485", "Modalidades de violencia",
    "¿Cuál de estas modalidades fue incorporada por la Ley 27.501 y cuál por la Ley 27.533?",
    "Espacio público (Ley 27.501) y pública-política (Ley 27.533)",
    ["Obstétrica (Ley 27.501) y mediática (Ley 27.533)", "Laboral (Ley 27.501) y doméstica (Ley 27.533)", "Institucional (Ley 27.501) y sexual (Ley 27.533)"],
    "La violencia contra las mujeres en el espacio público es la ejercida en lugares públicos o de acceso público con conductas de connotación sexual.");

  q("Art. 6 inc. c Ley 26.485", "Modalidades de violencia",
    "La violencia laboral contra las mujeres incluye:",
    "Exigir requisitos de estado civil o maternidad, test de embarazo, pagar menos por igual tarea",
    ["Únicamente el acoso sexual cometido por un superior jerárquico", "Únicamente la discriminación cometida en el ámbito del sector público", "Únicamente el despido de una trabajadora por motivo de su embarazo"],
    "Discrimina a las mujeres en los ámbitos de trabajo públicos o privados.");

  q("Art. 7 Ley 26.485", "Preceptos rectores",
    "¿Cuál es uno de los preceptos rectores que deben garantizar los tres poderes del Estado según el artículo 7?",
    "El principio de transversalidad, con coordinación interinstitucional de recursos",
    ["La reserva de la información sobre los casos al público en general", "La exclusión de las organizaciones de la sociedad civil de las políticas", "La limitación de los recursos económicos destinados a las políticas"],
    "También el respeto a la confidencialidad e intimidad, prohibiéndose la difusión de información sobre situaciones de violencia sin autorización de quien la padece.");

  q("Art. 16 Ley 26.485", "Derechos y garantías mínimas de procedimientos",
    "¿Cuál de estos derechos garantiza el artículo 16 a las mujeres en cualquier procedimiento judicial o administrativo?",
    "Gratuidad de las actuaciones y del patrocinio, amplitud probatoria y trato humanizado",
    ["El pago de honorarios al denunciante que acredite los hechos", "La obligación de ratificar la denuncia en cada etapa del proceso", "La realización de una mediación obligatoria con el denunciado"],
    "También a ser oída personalmente por el juez, a la confidencialidad de las actuaciones y a oponerse a inspecciones sobre su cuerpo por fuera de la orden judicial.");

  q("Art. 18 Ley 26.485", "Denuncia",
    "Las personas que se desempeñan en servicios asistenciales, sociales, educativos y de salud que tomen conocimiento de un hecho de violencia contra las mujeres:",
    "Están obligadas a denunciar, aun cuando el hecho no configure delito",
    ["Pueden optar por denunciar o no, según su criterio profesional", "Solo deben denunciar cuando existan lesiones físicas visibles", "Deben esperar el consentimiento de la mujer antes de denunciar"],
    "El art. 24 inc. e) establece que la denuncia penal es obligatoria para esas personas siempre que los hechos pudieran constituir un delito.");

  q("Art. 20 Ley 26.485", "Características del procedimiento",
    "Según el artículo 20, el procedimiento previsto por la Ley 26.485 será:",
    "Gratuito y sumarísimo",
    ["Oneroso y ordinario", "Reservado y escrito", "Gratuito y abreviado"],
    "Las jurisdicciones locales dictan sus normas de procedimiento o adhieren al régimen de la ley.");

  q("Art. 21 Ley 26.485", "Presentación de la denuncia",
    "La denuncia por violencia contra las mujeres puede efectuarse ante:",
    "Cualquier juez de cualquier fuero o el Ministerio Público, oral o escrita, con reserva de identidad",
    ["Únicamente la policía de la jurisdicción donde ocurrieron los hechos", "Únicamente el juez de familia de la jurisdicción de la denunciante", "Únicamente el Ministerio de la Mujer, Género y Diversidad"],
    "Aun en caso de incompetencia, el juez interviniente puede disponer las medidas preventivas que estime pertinentes (art. 22).");

  q("Art. 23 Ley 26.485", "Exposición policial",
    "Si en un servicio policial solo se labrase exposición y de ella surgiere la posible existencia de violencia contra la mujer, debe remitirse a la autoridad judicial competente dentro de:",
    "Veinticuatro horas",
    ["Cuarenta y ocho horas", "Setenta y dos horas", "Diez días"],
    "Es una garantía de celeridad en la respuesta.");

  q("Art. 24 inc. d Ley 26.485", "Personas que pueden efectuar la denuncia",
    "En los casos de violencia sexual, si la denuncia es efectuada por un tercero, se citará a la mujer para que la ratifique o rectifique en:",
    "Veinticuatro horas, evitando que la causa tome estado público",
    ["Cuarenta y ocho horas, evitando que la causa tome estado público", "Diez días, evitando que la causa tome estado público", "Setenta y dos horas, evitando que la causa tome estado público"],
    "La mujer que padeció la violencia sexual es la única legitimada para hacer la denuncia.");

  q("Art. 25 Ley 26.485", "Asistencia protectora",
    "¿Qué permite el artículo 25 en toda instancia del proceso?",
    "La presencia de un acompañante ad honórem si la mujer lo pide, para preservar su salud",
    ["La presencia obligatoria del agresor durante todas las audiencias", "La presencia de la prensa durante las audiencias del proceso", "La exclusión del abogado de la mujer durante las audiencias"],
    "El único objeto es preservar la salud física y psicológica de la mujer.");

  q("Art. 26 Ley 26.485", "Medidas preventivas urgentes",
    "¿Cuál de estas medidas puede ordenar el juez en la modalidad de violencia doméstica según el artículo 26 inc. b?",
    "Excluir al agresor de la residencia común, sin importar la titularidad",
    ["Ordenar la prisión preventiva del agresor desde el inicio", "Disolver el vínculo matrimonial entre la mujer y el agresor", "Privar de la responsabilidad parental al progenitor agresor"],
    "También prohibir enajenar bienes gananciales, fijar cuota alimentaria provisoria y suspender provisoriamente el régimen de visitas.");

  q("Art. 26 inc. a Ley 26.485", "Medidas preventivas urgentes",
    "Entre las medidas preventivas urgentes del inciso a) del artículo 26 se encuentra:",
    "Prohibir al agresor la compra y tenencia de armas y secuestrar las que posea",
    ["Ordenar la mediación entre la mujer y el presunto agresor", "Ordenar la convivencia supervisada entre las partes involucradas", "Ordenar el pago de una indemnización a favor de la mujer"],
    "También la prohibición de acercamiento a la residencia, trabajo, estudio o lugares de habitual concurrencia de la mujer.");

  q("Art. 27 Ley 26.485", "Facultades del juez",
    "Según el artículo 27, el juez puede dictar más de una medida a la vez y debe establecer:",
    "Un plazo máximo de duración de las medidas, por auto fundado",
    ["Una duración indeterminada de las medidas, por auto fundado", "Una duración de un año fijo para las medidas, por auto fundado", "Una duración máxima de 24 horas para las medidas, por auto fundado"],
    "La duración se determina según las circunstancias del caso.");

  q("Art. 28 Ley 26.485", "Audiencia",
    "¿En qué plazo debe fijar y tomar personalmente el juez la audiencia luego de ordenadas las medidas del artículo 26?",
    "Cuarenta y ocho horas, bajo pena de nulidad, sin mediación ni conciliación",
    ["Diez días, con mediación obligatoria entre las partes", "Veinticuatro horas, escuchando a las partes en forma conjunta", "Treinta días, sin mediación ni conciliación entre las partes"],
    "El presunto agresor está obligado a comparecer bajo apercibimiento de ser llevado con auxilio de la fuerza pública.");

  q("Art. 29 Ley 26.485", "Informes",
    "El informe del equipo interdisciplinario que el juez puede requerir debe remitirse en el plazo de:",
    "Cuarenta y ocho horas",
    ["Veinticuatro horas", "Setenta y dos horas", "Cinco días"],
    "Debe evitarse producir nuevos informes que revictimicen a la mujer.");

  q("Art. 31 Ley 26.485", "Resoluciones",
    "En materia de prueba, la Ley 26.485 establece:",
    "Libertad probatoria, sana crítica y presunciones de indicios graves, precisos y concordantes",
    ["Prueba tasada, con valor fijado por la ley para cada medio", "Prueba exclusivamente testimonial, sin otros medios admitidos", "Carga de la prueba íntegramente sobre la mujer denunciante"],
    "El juez tiene amplias facultades para ordenar e impulsar el proceso, rigiendo el principio de verdad material (art. 30).");

  q("Art. 32 Ley 26.485", "Sanciones",
    "Frente a un nuevo incumplimiento de las medidas ordenadas, el juez deberá aplicar alguna de las siguientes sanciones:",
    "Advertencia, comunicación al lugar de trabajo del agresor o programas reflexivos obligatorios",
    ["Prisión inmediata del agresor por el plazo que fije el juez", "Multa equivalente a dos salarios mínimos, vitales y móviles", "Destitución del cargo que desempeñe el agresor en la función pública"],
    "Si el incumplimiento configura desobediencia u otro delito, el juez pone el hecho en conocimiento del juez penal.");

  q("Art. 33 Ley 26.485", "Apelación",
    "Las resoluciones que concedan, rechacen, interrumpan, modifiquen o dispongan el cese de medidas preventivas urgentes son apelables dentro de:",
    "Tres días hábiles",
    ["Cinco días hábiles", "Diez días hábiles", "Veinticuatro horas"],
    "La apelación contra las que concedan medidas se concede con efecto devolutivo; contra las que dispongan su cese, con efecto suspensivo.");
})();

// ---------------------------------------------------------------- Tema IX (parte 2: Ley 26.485 final y Ley 989-E)
(function () {
  const q = crearTema("Tema IX — Normativa De Género", "t9");

  q("Art. 36 Ley 26.485", "Obligaciones de los funcionarios",
    "Según el artículo 36, los funcionarios a quienes acudan las mujeres afectadas tienen la obligación de informar sobre:",
    "Sus derechos, los servicios disponibles, dónde ser asistida y cómo preservar evidencias",
    ["Solo los plazos de prescripción del proceso penal que se inicie", "Los datos personales y el domicilio del denunciado en la causa", "La sanción que corresponde aplicar al agresor denunciado"],
    "Policías, funcionarios judiciales, agentes sanitarios y cualquier otro funcionario público.");

  q("Art. 37 Ley 26.485", "Registros",
    "¿Quién lleva los registros sociodemográficos de las denuncias de violencia previstos en la Ley 26.485?",
    "La Corte Suprema de Justicia de la Nación",
    ["El Ministerio de Seguridad de la Nación y de las provincias", "Cada Cámara provincial en su respectiva jurisdicción", "El Consejo de la Magistratura de la Nación y de las provincias"],
    "El acceso requiere motivos fundados y autorización judicial; se elaboran estadísticas de acceso público.");

  q("Art. 38 Ley 26.485", "Colaboración de organizaciones",
    "El juez podrá solicitar o aceptar en carácter de amicus curiae:",
    "La colaboración de entidades dedicadas a proteger los derechos de las mujeres",
    ["La opinión de los medios de comunicación sobre el caso concreto", "La intervención de los partidos políticos en el proceso judicial", "La opinión del agresor sobre las medidas que se dispongan"],
    "Las actuaciones fundadas en la ley están exentas del pago de sellado, tasas y depósitos (art. 39).");

  q("Art. 41 Ley 26.485", "Disposiciones finales",
    "¿Qué establece el artículo 41 de la Ley 26.485?",
    "Que no se crean nuevos tipos penales ni se modifican o derogan los vigentes",
    ["Que se crean nuevos tipos penales para las conductas previstas", "Que se deroga el Código Penal en lo referido a estos delitos", "Que se modifican las penas del delito de femicidio"],
    "La Ley 24.417 de Protección contra la Violencia Familiar se aplica en los casos de violencia doméstica no previstos en la ley (art. 42).");

  q("Art. 1 Ley 989-E", "Objeto",
    "¿Cuál es el objeto de la Ley provincial 989-E?",
    "Establecer garantías y procedimientos para prevenir y sancionar la violencia familiar",
    ["Regular el divorcio y los efectos patrimoniales del matrimonio", "Sancionar la violencia laboral dentro del ámbito del empleo público", "Crear el fuero de familia dentro del Poder Judicial de la Provincia"],
    "Prioriza a los niños, niñas, adolescentes, mujeres, adultos mayores y personas con capacidades especiales.");

  q("Art. 2 Ley 989-E", "Bienes jurídicos tutelados",
    "¿Cuáles son los bienes jurídicos tutelados por la Ley 989-E?",
    "Vida, libertad, integridad física, psicológica, económica y sexual, y desarrollo psicoemocional",
    ["Solo la integridad física de los integrantes del grupo familiar", "La propiedad y el patrimonio de los integrantes del grupo familiar", "La institución matrimonial y la estabilidad del núcleo familiar"],
    "Es una enumeración específica de la ley provincial.");

  q("Art. 3 Ley 989-E", "Principios",
    "¿Cuál de los siguientes NO es uno de los principios del artículo 3 de la Ley 989-E?",
    "Onerosidad",
    ["Gratuidad", "Celeridad", "No victimización"],
    "Los principios son: gratuidad, celeridad, confidencialidad, profesionalidad, capacitación y no victimización.");

  q("Art. 4 Ley 989-E", "Concepto",
    "Según el artículo 4 de la Ley 989-E, la violencia familiar tiene lugar:",
    "En la familia, unidad doméstica o relación interpersonal, haya o no compartido domicilio",
    ["Solo cuando agresor y víctima conviven en el mismo domicilio", "Solo entre cónyuges unidos en matrimonio civil vigente", "Solo en el hogar familiar donde residen las partes"],
    "Es toda acción, omisión, abuso o maltrato dirigido a dominar, someter, controlar o agredir la integridad de una persona.");

  q("Art. 5 Ley 989-E", "Ámbito",
    "¿Cuál de estas personas está comprendida en el ámbito de la Ley 989-E?",
    "Quienes procrearon hijos en común, aunque no hayan convivido",
    ["Compañeros de trabajo que comparten el mismo lugar de empleo", "Vecinos que habitan en domicilios linderos del mismo barrio", "Socios comerciales de una misma sociedad de responsabilidad limitada"],
    "También cónyuges, ex cónyuges, convivientes, ascendientes, descendientes, colaterales, personas con funciones parentales, parejas y noviazgos, y personas que habiten el mismo hogar en situación de dependencia.");

  q("Art. 6 Ley 989-E", "Actos de violencia",
    "Según el artículo 6 de la Ley 989-E, los actos de violencia familiar enumerados son:",
    "Física, psicológica o emocional, sexual y económica, con carácter enunciativo",
    ["Solo violencia física y psicológica, con carácter taxativo", "Física, simbólica y mediática, con carácter enunciativo", "Solo violencia física, con carácter taxativo y excluyente"],
    "La violencia psicológica se define como un patrón de conducta repetitivo de acción u omisión.");

  q("Art. 9 Ley 989-E", "Autoridad de Aplicación",
    "¿Quién es la Autoridad de Aplicación de la Ley 989-E, en todo lo que no competa directamente al Poder Judicial?",
    "El Ministerio de Desarrollo Humano y Promoción Social, por su Secretaría de Promoción Social",
    ["El Ministerio de Seguridad, por su Secretaría de Seguridad Pública", "La Corte de Justicia, por su Secretaría Administrativa", "El Ministerio de Educación, por su Secretaría de Gestión Educativa"],
    "Tiene a su cargo, entre otras funciones, los consultorios interdisciplinarios para atención psico-socio-legal diaria, gratuita y anónima.");

  q("Art. 10 Ley 989-E", "Funciones de la Autoridad de Aplicación",
    "¿Qué debe implementar la Autoridad de Aplicación como medio de contención en la urgencia?",
    "Una línea telefónica gratuita y directa de contención y asesoramiento",
    ["Una aplicación de mensajería para contactar a la policía de guardia", "Una guardia policial exclusiva en cada departamento de la Provincia", "Un registro público de agresores accesible para toda la población"],
    "También lleva estadísticas y un banco de datos sobre la violencia contra la mujer y la violencia familiar.");

  q("Art. 12 Ley 989-E", "Registro",
    "¿Qué implementa la Autoridad de Aplicación según el artículo 12 de la Ley 989-E?",
    "El Registro Central para la Prevención de la Violencia Familiar",
    ["El Registro de Deudores Alimentarios Morosos de la Provincia", "El Registro Provincial de Personas Condenadas por Violencia", "El Registro de Mediadores Judiciales de la Corte de Justicia"],
    "Concentra estadísticas de las solicitudes de protección y de las denuncias ante la autoridad judicial.");

  q("Art. 14 Ley 989-E", "Organismos receptores",
    "Cuando la solicitud de protección se hace ante autoridad policial, según el artículo 14, debe ser atendida por:",
    "Personal femenino idóneo; su inobservancia es falta disciplinaria grave",
    ["Cualquier oficial que se encuentre de guardia en la dependencia", "Un abogado de la matrícula designado por el Foro de Abogados", "Un juez de paz del departamento donde está la dependencia"],
    "La solicitud puede hacerse en forma oral o escrita, con o sin patrocinio legal, ante la autoridad de aplicación, servicios sociales, sanitarios o educativos o la unidad policial.");

  q("Art. 15 Ley 989-E", "Habilitados para solicitar",
    "¿Quiénes pueden requerir la solicitud de protección según el artículo 15 de la Ley 989-E?",
    "Afectados, parientes, terceros, vecinos, agentes de salud y educación y ONG",
    ["Solamente la víctima de la violencia familiar, personalmente", "Solamente los parientes de la víctima de la violencia familiar", "Solamente la policía que tome conocimiento de los hechos"],
    "Es un régimen amplio de legitimación.");

  q("Art. 16 Ley 989-E", "Obligatoriedad de solicitar",
    "Los agentes de la administración pública y de las áreas de salud y educación que tomen conocimiento de hechos de violencia familiar:",
    "Deben solicitar protección ante la autoridad, liberados del secreto profesional",
    ["Deben guardar el secreto profesional y no intervenir en el caso", "Pueden optar por no intervenir según su criterio profesional", "Deben esperar la autorización de la víctima antes de actuar"],
    "La solicitud se presume de buena fe y el solicitante tiene inmunidad administrativa, civil y penal.");

  q("Art. 17 Ley 989-E", "Reserva de la identidad del solicitante",
    "Por razones de seguridad, los organismos que reciban las solicitudes de protección deben:",
    "Mantener en reserva la identidad del solicitante",
    ["Publicar la identidad del solicitante en los registros oficiales", "Informar la identidad del solicitante a la persona denunciada", "Comunicar la identidad del solicitante a los medios de prensa"],
    "El formulario de solicitud tiene carácter reservado (art. 18).");

  q("Art. 19 Ley 989-E", "Trámite",
    "Si la solicitud de protección es receptada por organismos no pertenecientes a la Autoridad de Aplicación, deben remitir copia a la unidad central en el término de:",
    "Cuarenta y ocho horas",
    ["Veinticuatro horas", "Setenta y dos horas", "Cinco días"],
    "Al momento de la solicitud la persona interesada podrá peticionar medidas protectorias de naturaleza administrativa.");
})();

// ---------------------------------------------------------------- Tema IX (parte 3: Ley 989-E procedimiento)
(function () {
  const q = crearTema("Tema IX — Normativa De Género", "t9");

  q("Art. 20 Ley 989-E", "Medidas protectorias de naturaleza administrativa",
    "El alojamiento de las víctimas en albergues o establecimientos de residencia transitoria por razones de seguridad personal no puede exceder de:",
    "Quince días, prorrogables por única vez por igual término",
    ["Siete días corridos, sin posibilidad de prórroga alguna", "Treinta días, prorrogables indefinidamente por razones de seguridad", "Seis meses, prorrogables por igual término por razones de seguridad"],
    "También pueden disponer la incorporación a programas para garantizar la seguridad alimentaria de la víctima y sus hijos menores.");

  q("Art. 22 Ley 989-E", "Competencia",
    "Según el artículo 22 de la Ley 989-E, ¿cuándo es competente cualquier magistrado de cualquier fuero?",
    "Ante circunstancias excepcionales y hechos graves que exijan hacer cesar sus efectos de inmediato",
    ["Siempre, sin restricción alguna por razón de la materia o del turno", "Solo cuando el magistrado pertenezca al fuero penal de la Provincia", "Nunca: la competencia está fijada de manera rígida por la ley"],
    "Son competentes indistintamente los Juzgados de Familia, de Menores, de Instrucción, Correccionales y de Paz Letrados (con excepciones).");

  q("Art. 24 Ley 989-E", "Carácter reservado",
    "Las actuaciones judiciales formadas con motivo de la aplicación de la Ley 989-E:",
    "No pueden darse a publicidad: son reservadas a las partes intervinientes",
    ["Son públicas y pueden ser consultadas por cualquier interesado", "Se publican en el Boletín Oficial una vez dictada la resolución", "Son públicas, salvo que la víctima pida expresamente su reserva"],
    "El proceso es urgente, independiente y de trámite prioritario.");

  q("Art. 25 Ley 989-E", "Trámite",
    "Las medidas de protección en el proceso de la Ley 989-E pueden dictarse inaudita parte siempre que:",
    "Esté acreditado verosímilmente el derecho invocado por quien las peticiona",
    ["Exista sentencia firme que declare los hechos de violencia", "Lo solicite expresamente el Fiscal que intervenga en la causa", "Se haya celebrado una audiencia previa con ambas partes"],
    "La finalidad de las medidas es el cese de la violencia actual y su prevención futura (art. 26).");

  q("Art. 27 Ley 989-E", "Denuncia",
    "Según el artículo 27 de la Ley 989-E, la denuncia puede efectuarse por escrito o verbalmente, con o sin patrocinio letrado, el cual:",
    "Será obligatorio para sustanciar el proceso",
    ["Está siempre prohibido durante todo el proceso", "Es obligatorio desde la presentación de la denuncia", "No es necesario nunca en ninguna etapa del proceso"],
    "Debe contener de modo claro y preciso, en cuanto fuere posible, los datos del denunciante, la víctima, los hechos y los testigos.");

  q("Art. 29 Ley 989-E", "Legitimación para denunciar",
    "Según el artículo 29 de la Ley 989-E, ¿quiénes pueden denunciar en sede judicial?",
    "Los mayores de dieciocho años; por menores o incapaces, sus padres, tutores o la Asesoría",
    ["Cualquier menor que haya cumplido trece años de edad", "Únicamente el fiscal que tome conocimiento de los hechos", "Únicamente la policía que reciba la solicitud de protección"],
    "El CPF, en cambio, permite que la persona afectada denuncie por sí desde los trece años (art. 100 CPF).");

  q("Art. 30 Ley 989-E", "Obligación de denunciar",
    "Los funcionarios públicos que en ocasión de sus funciones tomaren conocimiento de hechos de violencia familiar:",
    "Tienen obligación de denunciarlos",
    ["Pueden optar por no denunciarlos", "Solo denuncian si lo autoriza la víctima", "Deben esperar la orden judicial"],
    "La omisión de recibir denuncias por parte de los órganos legitimados constituye falta grave (art. 31).");

  q("Art. 32 Ley 989-E", "Admisibilidad",
    "¿Cuándo se desestima in limine una denuncia de violencia familiar según el artículo 32?",
    "Si los hechos no configuran ningún supuesto de violencia de la ley; nunca por defectos formales",
    ["Si la denuncia tiene defectos formales que no pueden subsanarse", "Si el denunciante no cuenta con patrocinio letrado de abogado", "Si el denunciante no acredita su identidad en la presentación"],
    "En ningún caso la denuncia podrá ser desestimada por defectos formales: se dispone lo conducente para subsanarlos.");

  q("Art. 33 Ley 989-E", "Procedimiento",
    "El juez puede requerir informes médicos, psicológicos y socioambientales de urgencia, que deben expedirse en el plazo de:",
    "Cuarenta y ocho horas, ampliable por motivos fundados",
    ["Veinticuatro horas, ampliable por motivos fundados", "Diez días, ampliable por motivos fundados", "Treinta días, ampliable por motivos fundados"],
    "Los informes se solicitan a los integrantes del Cuerpo Asesor de la Secretaría Social del Poder Judicial o de la Administración Pública.");

  q("Art. 34 Ley 989-E", "Audiencia",
    "En la audiencia de violencia familiar, el juez adoptará medidas para:",
    "Evitar la confrontación, con declaraciones por separado y en lugares distintos",
    ["Promover el careo directo entre el agresor y la víctima", "Obligar a las partes a una mediación en la propia audiencia", "Exigir la presencia conjunta de ambas partes durante el acto"],
    "Del acto se labra acta según la ley procesal de la competencia del juez.");

  q("Art. 36 Ley 989-E", "Intervención de la Asesoría",
    "La intervención de la Asesoría Letrada de Menores e Incapaces en la Ley 989-E es obligatoria cuando:",
    "Hay menores o incapaces involucrados; dictamina por escrito en 24 horas o de inmediato",
    ["Hay un adulto mayor involucrado en los hechos denunciados", "Lo solicita expresamente la víctima de los hechos denunciados", "Nunca es obligatoria: depende del criterio del juez interviniente"],
    "Según el art. 37 se debe dar intervención al Agente Fiscal en los casos que corresponda.");

  q("Art. 38 Ley 989-E", "Medidas de protección",
    "¿Cuál de las siguientes medidas puede disponer el juez según el artículo 38 de la Ley 989-E?",
    "Atribuir el hogar, excluir al agresor, vedarle el acceso a lugares de la víctima e incautar armas",
    ["Privar al agresor de su libertad por el plazo de un año", "Ordenar el divorcio vincular entre la víctima y el agresor", "Reducir la cuota alimentaria que fijó el juez de familia"],
    "Las medidas pueden disponerse de oficio, a petición de parte o del Ministerio Público, como cautelar, autosatisfactiva u otra análoga.");

  q("Art. 39 Ley 989-E", "Resolución",
    "El juez dictará resolución fundada disponiendo las medidas de protección cuando existieren:",
    "Indicios suficientes y fundados de una situación objetiva de riesgo para la víctima",
    ["Una sentencia penal firme que condene al denunciado por los hechos", "La confesión del agresor sobre los hechos que se le imputan", "Un informe del médico forense como único elemento de prueba"],
    "La resolución debe contener, bajo sanción de nulidad, los elementos del art. 40.");

  q("Art. 41 Ley 989-E", "Duración. Cese",
    "Las medidas de protección subsisten:",
    "Mientras duren las circunstancias que las determinaron",
    ["Durante seis meses fijos, contados desde que se dictaron", "Hasta que se dicte sentencia en la causa penal paralela", "Durante un año fijo, contado desde que se dictaron"],
    "Su levantamiento puede ser ordenado de oficio o a pedido de parte.");

  q("Art. 45 Ley 989-E", "Sanciones",
    "¿Qué monto de multa puede fijar el juez por incumplimiento de las medidas, según el artículo 45?",
    "De uno a diez salarios mínimos, vitales y móviles, pagadera en tres días",
    ["De diez a cien salarios mínimos, vitales y móviles, pagadera en tres días", "De medio a un salario mínimo, vital y móvil, pagadero en tres días", "Una suma fija de mil pesos, pagadera en el término de tres días"],
    "Si no se paga, la multa se convierte en arresto.");

  q("Art. 45 Ley 989-E", "Sanciones",
    "La pena de arresto por incumplimiento de las medidas de protección no puede exceder de:",
    "Cinco días, pudiendo diferirse su cumplimiento a los días no laborales",
    ["Un día, pudiendo diferirse su cumplimiento a los días no laborales", "Treinta días, pudiendo diferirse su cumplimiento a los días no laborales", "Un año, pudiendo diferirse su cumplimiento a los días no laborales"],
    "El trabajo comunitario puede durar de tres meses a dos años y se realiza durante los fines de semana.");

  q("Art. 45 Ley 989-E", "Sanciones",
    "¿En qué consiste la sanción de «capacitación» del artículo 45?",
    "Asistir y aprobar un curso de Derechos Humanos",
    ["Asistir y aprobar un curso de oratoria y comunicación", "Trabajar a favor del Estado durante los fines de semana", "Realizar una pasantía en un organismo del Poder Judicial"],
    "Las sanciones son multa, arresto, trabajos comunitarios y capacitación, además de las del Código Penal.");

  q("Art. 46 Ley 989-E", "Modificación",
    "Si la modificación de una medida de protección es solicitada por aquel contra quien se dispuso, la resolución se dicta previo traslado a la otra parte por el plazo de:",
    "Cinco días",
    ["Un día", "Diez días", "Quince días"],
    "Cuando hay menores o incapaces involucrados debe darse vista previa a la Asesoría Letrada de Menores e Incapaces.");
})();

// ---------------------------------------------------------------- Tema IX (parte 4: Ley 989-E final y CEDAW)
(function () {
  const q = crearTema("Tema IX — Normativa De Género", "t9");

  q("Art. 47 Ley 989-E", "Recursos",
    "La resolución de medidas de protección de la Ley 989-E es apelable dentro del término de:",
    "Tres días de notificada, ante el mismo juez, con efecto devolutivo",
    ["Cinco días de notificada, ante el mismo juez, con efecto suspensivo", "Diez días de notificada, ante la Corte de Justicia, con efecto devolutivo", "Veinticuatro horas de notificada, ante el mismo juez, sin fundamentación"],
    "Solo es recurrible por el afectado, la víctima, el Ministerio Público Fiscal o el Asesor Letrado de Menores, según el caso.");

  q("Art. 48 Ley 989-E", "Derivación. Remisión",
    "Si durante la tramitación de una causa de violencia familiar surge la posible comisión de un delito, el juez con competencia no penal debe:",
    "Dispone medidas protectorias y remite los antecedentes a la Fiscalía Penal en turno",
    ["Archiva la causa por tratarse de un hecho de competencia penal", "Se declara incompetente y no adopta ninguna medida de protección", "Espera que la víctima formule por sí una denuncia penal posterior"],
    "Cuando el delito dependa de instancia privada, se requiere el consentimiento expreso de la víctima mayor de edad.");

  q("Art. 49 Ley 989-E", "Coordinación entre órganos judiciales",
    "¿Cuál es la finalidad de la coordinación entre órganos judiciales del artículo 49 de la Ley 989-E?",
    "Evitar resoluciones contradictorias entre los órganos judiciales intervinientes",
    ["Acelerar el cobro de las tasas de justicia de cada proceso", "Aumentar el número de causas que ingresan a cada juzgado", "Evitar la intervención de la víctima en los procesos paralelos"],
    "Los tribunales deben prestar colaboración con carácter de preferente despacho.");

  q("Art. 50 Ley 989-E", "Exenciones",
    "Las actuaciones llevadas a cabo en el marco de la Ley 989-E están exentas de:",
    "Tasa de justicia y sellado de actuación",
    ["Honorarios profesionales de los letrados intervinientes", "Costas del proceso a cargo de la parte vencida", "Gastos de notificación de las resoluciones judiciales"],
    "Los tribunales llevan estadísticas de los casos registrados (art. 51).");

  q("Art. 53 Ley 989-E", "Órgano Coordinador",
    "El Órgano Coordinador Provincial de Seguimiento, Evaluación y Prevención de la Problemática de la Violencia Familiar debe sesionar en forma ordinaria:",
    "Por lo menos una vez al mes",
    ["Una vez por semana", "Una vez al año", "Una vez cada seis meses"],
    "Elige anualmente su Presidente, Vicepresidente y Secretario, que no pueden ser reelectos en forma consecutiva.");

  q("Arts. 54 a 56 Ley 989-E", "Órgano Coordinador",
    "¿Cómo se integra el Órgano Coordinador Provincial y cuánto dura el mandato de sus integrantes?",
    "Cuatro titulares y dos suplentes de cada poder; tres años y ad honorem",
    ["Tres miembros del Poder Ejecutivo exclusivamente, por dos años", "Cinco miembros del Poder Judicial exclusivamente, por cuatro años", "Representantes de ONG exclusivamente, con mandato de un año"],
    "El Poder Ejecutivo asegura la representación de los Ministerios de Desarrollo Humano, Gobierno, Educación y Salud Pública.");

  q("Art. 57 Ley 989-E", "Funciones del Órgano Coordinador",
    "Una de las funciones del Órgano Coordinador es:",
    "Elaborar un informe anual cuanticualitativo, elevado a los tres poderes",
    ["Dictar sentencias en las causas de violencia familiar de la Provincia", "Aplicar sanciones a los agresores que incumplan las medidas dispuestas", "Designar jueces de familia para los distintos departamentos"],
    "También asesorar a las áreas del Poder Ejecutivo y coordinar el intercambio de información y estadísticas.");

  q("Art. 62 Ley 989-E", "Disposiciones generales",
    "¿Qué dispone el artículo 62 de la Ley 989-E respecto de los municipios?",
    "Invita a los municipios a adherir para unificar el tratamiento en toda la Provincia",
    ["Obliga a los municipios a crear juzgados de violencia familiar", "Excluye a los municipios de la aplicación de la ley provincial", "Transfiere a los municipios la competencia judicial en la materia"],
    "El art. 58 obliga a divulgar la ley exhibiendo su texto completo en lugar visible de acceso al público.");

  q("Ley 23.179", "CEDAW",
    "¿Qué ley aprobó en Argentina la Convención sobre la eliminación de todas las formas de discriminación contra la mujer (CEDAW)?",
    "La Ley 23.179",
    ["La Ley 24.632", "La Ley 26.485", "La Ley 26.061"],
    "La Convención fue aprobada por resolución 34/180 de la Asamblea General de la ONU del 18 de diciembre de 1979 y suscripta por Argentina el 17 de julio de 1980.");

  q("Art. 1 CEDAW", "Convención CEDAW",
    "¿Cómo define el artículo 1 de la CEDAW la «discriminación contra la mujer»?",
    "Toda distinción, exclusión o restricción por sexo que anule el goce de derechos de la mujer",
    ["Toda diferencia de trato entre hombres y mujeres, sea cual fuere", "Solo la discriminación que ocurre en el ámbito laboral", "Solo la discriminación ejercida por parte del propio Estado"],
    "Se aplica independientemente del estado civil de la mujer, en las esferas política, económica, social, cultural y civil.");

  q("Art. 2 CEDAW", "Convención CEDAW",
    "En el artículo 2 de la CEDAW, los Estados partes se comprometen, entre otras cosas, a:",
    "Consagrar la igualdad en sus constituciones y legislación y prohibir toda discriminación",
    ["Mantener las distinciones culturales entre hombres y mujeres", "Dejar la protección de la mujer en manos de entidades privadas", "Aplicar sanciones únicamente a los funcionarios públicos infractores"],
    "También establecer la protección jurídica de los derechos de la mujer y abstenerse de incurrir en actos discriminatorios.");

  q("Art. 2 Ley 23.179", "CEDAW",
    "¿Qué reserva formuló Argentina al depositar el instrumento de ratificación de la CEDAW?",
    "No se considera obligada por el párrafo 1 del artículo 29 de la Convención",
    ["No se considera obligada por el artículo 1 de la Convención", "No ratifica la Parte I de la Convención sobre la mujer", "No aplica la Convención al derecho de familia argentino"],
    "El art. 29 se refiere a la solución de controversias entre Estados partes.");
})();

// ---------------------------------------------------------------- Tema IX (parte 5: CEDAW y Belém do Pará)
(function () {
  const q = crearTema("Tema IX — Normativa De Género", "t9");

  q("Art. 4 CEDAW", "Convención CEDAW",
    "Según el artículo 4 de la CEDAW, las medidas especiales de carácter temporal encaminadas a acelerar la igualdad de facto:",
    "No son discriminación y cesan al alcanzarse la igualdad de oportunidad y trato",
    ["Son siempre discriminatorias y están prohibidas por la Convención", "Son permanentes y no cesan una vez alcanzada la igualdad", "Solo pueden aplicarse en el ámbito laboral y educativo"],
    "Las medidas destinadas a proteger la maternidad tampoco se consideran discriminatorias.");

  q("Art. 5 CEDAW", "Convención CEDAW",
    "¿Qué obligan los Estados partes a hacer según el artículo 5 de la CEDAW?",
    "Modificar patrones y estereotipos socioculturales y reconocer la responsabilidad común en la crianza",
    ["Mantener los roles tradicionales de hombres y mujeres en la familia", "Evitar toda medida educativa sobre los patrones socioculturales", "Limitar la responsabilidad de la crianza de los hijos a la madre"],
    "El interés de los hijos constituye la consideración primordial en todos los casos.");

  q("Art. 6 CEDAW", "Convención CEDAW",
    "¿Qué dispone el artículo 6 de la CEDAW?",
    "Que se supriman todas las formas de trata de mujeres y de explotación de su prostitución",
    ["Que el voto sea obligatorio para las mujeres en todas las elecciones", "Que se garanticen licencias por maternidad con sueldo pagado", "Que se fije una edad mínima para la celebración del matrimonio"],
    "Sigue la Parte I de la Convención.");

  q("Art. 7 CEDAW", "Convención CEDAW",
    "¿Qué derecho de la vida política y pública garantiza el artículo 7 de la CEDAW a las mujeres en igualdad de condiciones con los hombres?",
    "Votar, ser elegible, participar en políticas públicas y ocupar cargos públicos",
    ["Votar únicamente en las elecciones nacionales y los referéndums", "Ocupar únicamente cargos en el Poder Judicial y el Ministerio Público", "Participar únicamente en organizaciones no gubernamentales"],
    "El art. 8 garantiza la oportunidad de representar al gobierno en el plano internacional.");

  q("Art. 9 CEDAW", "Convención CEDAW",
    "Respecto de la nacionalidad, el artículo 9 de la CEDAW garantiza que:",
    "Que el matrimonio con extranjero no cambia su nacionalidad; igual derecho sobre la de los hijos",
    ["Que la esposa adopta siempre la nacionalidad de su marido al casarse", "Que la nacionalidad de los hijos sigue siempre la nacionalidad del padre", "Que la mujer pierde su nacionalidad de origen al contraer matrimonio"],
    "Es una de las garantías de la Parte II de la Convención.");

  q("Art. 10 CEDAW", "Convención CEDAW",
    "En la esfera de la educación, el artículo 10 de la CEDAW exige asegurar, entre otras cosas:",
    "Eliminar estereotipos de los papeles masculino y femenino e igualdad de oportunidades en el deporte",
    ["La separación obligatoria de varones y mujeres en las escuelas", "Programas de estudio distintos para cada uno de los sexos", "Becas y subvenciones destinadas solo a los estudiantes varones"],
    "También igualdad de acceso a estudios, programas, exámenes, personal docente y becas.");

  q("Art. 11 CEDAW", "Convención CEDAW",
    "Para impedir la discriminación por matrimonio o maternidad, el artículo 11 de la CEDAW obliga a los Estados a:",
    "Prohibir el despido por embarazo y establecer licencia de maternidad paga sin perder empleo",
    ["Permitir el despido por embarazo con una indemnización adicional", "Eliminar la licencia por maternidad para equiparar a ambos sexos", "Obligar a trabajar durante el embarazo para conservar el empleo"],
    "También el derecho a igual remuneración por trabajo de igual valor y a la seguridad social.");

  q("Art. 12 CEDAW", "Convención CEDAW",
    "¿Qué garantiza el artículo 12 de la CEDAW en el embarazo, parto y posparto?",
    "Servicios apropiados y gratuitos si fuera necesario, y nutrición adecuada en embarazo y lactancia",
    ["Solo servicios privados de atención médica con cobertura parcial", "Solo servicios de planificación familiar de carácter ambulatorio", "Solo la licencia por maternidad con goce de sueldo completo"],
    "Asegura además acceso a servicios de atención médica, incluida la planificación de la familia, en condiciones de igualdad.");

  q("Art. 16 CEDAW", "Convención CEDAW",
    "Según el artículo 16 de la CEDAW, ¿qué efecto jurídico tienen los esponsales y el matrimonio de niños?",
    "Ninguno: debe fijarse edad mínima e inscribirse el matrimonio en un registro oficial",
    ["Son válidos si cuentan con la autorización de los padres del niño", "Son válidos si el niño presta su consentimiento ante la autoridad", "Son válidos a partir de los doce años de edad del niño"],
    "Es la norma de la Parte IV sobre igualdad en el matrimonio y las relaciones familiares.");

  q("Art. 17 CEDAW", "Convención CEDAW",
    "¿Qué se establece con el artículo 17 de la CEDAW para examinar los progresos en su aplicación?",
    "Un Comité de dieciocho expertos, que pasan a veintitrés tras el trigésimo quinto Estado parte",
    ["Un tribunal penal internacional que juzgue la discriminación contra la mujer", "Un Consejo de Seguridad especial para casos de violencia de género", "Una comisión de diez miembros designados por la Asamblea General"],
    "Los expertos son elegidos por los Estados partes entre sus nacionales y ejercen sus funciones a título personal.");

  q("Art. 29 CEDAW", "Convención CEDAW",
    "Toda controversia entre dos o más Estados partes sobre la interpretación de la CEDAW que no se solucione mediante negociaciones se somete:",
    "Al arbitraje; si no hay acuerdo en seis meses, a la Corte Internacional de Justicia",
    ["Al Comité de la CEDAW, que dicta una resolución vinculante", "Al Consejo de Seguridad, que decide sobre la controversia planteada", "Directamente al Tribunal de La Haya, sin necesidad de arbitraje previo"],
    "Un Estado puede declarar que no se considera obligado por esta cláusula; Argentina formuló esa reserva.");

  q("Art. 1 Convención de Belém do Pará", "Belém do Pará",
    "¿Cómo define el artículo 1 de la Convención de Belém do Pará la violencia contra la mujer?",
    "Toda conducta basada en el género que cause muerte, daño o sufrimiento a la mujer, en lo público o privado",
    ["Solamente la violencia física que se produce dentro del hogar", "Solamente la violencia que ejercen el Estado y sus agentes", "Cualquier delito cometido contra una mujer, cualquiera sea su causa"],
    "La Convención fue suscripta en Belém do Pará (Brasil) el 9 de junio de 1994 y aprobada por Ley 24.632.");

  q("Art. 2 Convención de Belém do Pará", "Belém do Pará",
    "¿Qué ámbitos de violencia contra la mujer incluye el artículo 2 de la Convención de Belém do Pará?",
    "La ocurrida en la familia, en la comunidad y la perpetrada o tolerada por el Estado",
    ["Solamente la que ocurre dentro de la familia o unidad doméstica", "Solamente la que ocurre en el lugar de trabajo de la mujer", "Solamente la que es perpetrada por el Estado o sus agentes"],
    "Comprende violación, maltrato, abuso sexual, tortura, trata de personas, prostitución forzada, secuestro y acoso sexual en el trabajo, instituciones educativas, establecimientos de salud, etc.");

  q("Art. 3 Convención de Belém do Pará", "Belém do Pará",
    "¿Qué derecho consagra el artículo 3 de la Convención de Belém do Pará?",
    "El derecho de toda mujer a una vida libre de violencia, en el ámbito público y privado",
    ["El derecho de toda mujer a la propiedad privada de sus bienes", "El derecho de toda mujer a la libertad de comercio e industria", "El derecho de toda mujer a la jubilación con haber móvil"],
    "El art. 6 aclara que incluye el derecho a ser libre de toda forma de discriminación y a ser valorada y educada libre de patrones estereotipados.");

  q("Art. 7 inc. b Convención de Belém do Pará", "Belém do Pará",
    "Según el artículo 7 de la Convención de Belém do Pará, los Estados deben actuar con:",
    "La debida diligencia para prevenir, investigar y sancionar la violencia contra la mujer",
    ["Total discrecionalidad en la elección de las medidas a adoptar", "Un criterio exclusivamente penal para toda situación de violencia", "Preferencia por la mediación entre la víctima y el agresor"],
    "También incluir en su legislación normas penales, civiles y administrativas, y establecer procedimientos legales justos y eficaces para la mujer sometida a violencia.");

  q("Art. 9 Convención de Belém do Pará", "Belém do Pará",
    "Para adoptar medidas, los Estados Partes deben tener especialmente en cuenta la situación de vulnerabilidad a la violencia de la mujer por razón de:",
    "Raza o etnia, condición de migrante o desplazada, embarazo, discapacidad, minoridad, ancianidad o pobreza",
    ["Únicamente su edad al momento de sufrir la situación de violencia", "Únicamente su profesión o actividad laboral al momento del hecho", "Únicamente su estado civil al momento de sufrir la violencia"],
    "Es un criterio de interseccionalidad del art. 9.");

  q("Arts. 11 y 12 Convención de Belém do Pará", "Belém do Pará",
    "¿A quién pueden requerir los Estados y la Comisión Interamericana de Mujeres opinión consultiva sobre la interpretación de la Convención de Belém do Pará?",
    "A la Corte Interamericana de Derechos Humanos",
    ["A la Corte Internacional de Justicia", "Al Comité de la CEDAW", "Al Consejo de Seguridad"],
    "Cualquier persona o entidad no gubernamental puede presentar a la Comisión Interamericana de Derechos Humanos peticiones por violación del art. 7.");
})();
