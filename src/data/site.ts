export const site = { name: 'Carpe Diem – Equipo Terapéutico', url: 'https://carpediemequipo.com.ar', address: 'Dr. Amadeo Sabattini 4954 5B, Caseros, Tres de Febrero, Buenos Aires', phone: '+54 9 11 4447-6935', instagram: 'https://www.instagram.com/carpediemequipo/' };
export const whatsapp = (subject = 'una consulta') => `https://wa.me/5491144476935?text=${encodeURIComponent(`Hola, quisiera información sobre ${subject} en Carpe Diem.`)}`;
export const specialties = [
 {slug:'psicopedagogia', name:'Psicopedagogía', intro:'Consultas de psicopedagogía en Caseros, Tres de Febrero, para conversar sobre procesos de aprendizaje y dificultades que pueden surgir en cada recorrido. Área a cargo de Marianela Belén Salgado.', focus:'El aprendizaje se construye de distintas maneras. Cada persona tiene sus propios tiempos, recursos y desafíos. La consulta psicopedagógica permite escuchar inquietudes vinculadas al aprendizaje, el estudio y el recorrido educativo para evaluar los pasos a seguir.', professional:'Marianela Belén Salgado', faq:[
  ['¿Quién está a cargo de Psicopedagogía?', 'Marianela Belén Salgado es la psicopedagoga profesional a cargo del área de Psicopedagogía de Carpe Diem.'],
  ['¿Dónde queda el consultorio de Psicopedagogía?', 'Estamos en Dr. Amadeo Sabattini 4954 5B, Caseros, partido de Tres de Febrero, Buenos Aires.'],
  ['¿Es necesario tener un diagnóstico para consultar?', 'Podés comunicarte para contar una inquietud relacionada con el aprendizaje. La orientación y los pasos a seguir se definen según cada caso, con criterio profesional.'],
  ['¿Cómo consulto por disponibilidad de Psicopedagogía?', 'Escribinos por WhatsApp al +54 9 11 4447-6935 y contanos brevemente el motivo de consulta.'],
  ['¿Carpe Diem trabaja de manera interdisciplinaria?', 'Sí. Carpe Diem es un equipo terapéutico interdisciplinario. El intercambio entre especialidades se considera según las necesidades de cada situación.']
 ]},
 {slug:'psicologia', name:'Psicología', intro:'Un espacio de escucha para conversar sobre inquietudes emocionales, vínculos y situaciones de la vida cotidiana.', focus:'Una consulta permite plantear lo que preocupa y conocer las opciones de acompañamiento. Las características de la atención se acuerdan con el profesional según cada situación.'},
 {slug:'terapia-ocupacional', name:'Terapia Ocupacional', intro:'Una mirada sobre la participación en las actividades cotidianas y los apoyos que cada persona puede necesitar.', focus:'Las actividades cotidianas pueden presentar desafíos diferentes para cada persona. Consultá por el abordaje de Terapia Ocupacional y las modalidades disponibles en el equipo.'},
 {slug:'psicomotricidad', name:'Psicomotricidad', intro:'Un abordaje que considera el cuerpo, el movimiento y su relación con la expresión y los vínculos.', focus:'La consulta permite conversar sobre inquietudes relacionadas con el desarrollo psicomotor y conocer cómo se organiza el acompañamiento en esta especialidad.'},
 {slug:'fonoaudiologia', name:'Fonoaudiología', intro:'Un espacio de consulta sobre la comunicación, el lenguaje y el habla.', focus:'Si tenés inquietudes sobre la comunicación, el lenguaje o el habla, podés consultar por Fonoaudiología. El equipo te informará sobre disponibilidad y características de la atención.'}
];
export const professionals = [{ slug:'marianela-belen-salgado', name:'Marianela Belén Salgado', specialty:'Psicopedagogía', specialtySlug:'psicopedagogia', description:'Profesional de Psicopedagogía de Carpe Diem – Equipo Terapéutico, en Caseros.' }];
export const workshops = [{slug:'habilidades-sociales', name:'Habilidades sociales', intro:'Consultá por un espacio orientado a las habilidades para relacionarse y participar en situaciones sociales.', description:'Para conocer la propuesta del taller, escribinos por WhatsApp. El equipo podrá informarte sobre destinatarios, modalidad, coordinación y próximas fechas.'}];
export const generalFaq = [
 ['¿Dónde está Carpe Diem?', 'En Dr. Amadeo Sabattini 4954 5B, Caseros, Tres de Febrero, Buenos Aires. Coordiná tu visita por WhatsApp.'],
 ['¿Cómo hago una consulta?', 'Escribinos al WhatsApp +54 9 11 4447-6935. Podés indicar qué especialidad te interesa y contar brevemente tu inquietud.'],
 ['¿Qué especialidades puedo consultar?', 'Podés consultar por Psicopedagogía, Psicología, Terapia Ocupacional, Psicomotricidad y Fonoaudiología. Confirmá disponibilidad con el equipo.'],
 ['¿Necesito una derivación?', 'Consultá por WhatsApp los requisitos para tu situación y la documentación que conviene llevar.'],
 ['¿Qué edades atienden y trabajan con obras sociales?', 'Las edades de atención, cobertura, aranceles y modalidades deben confirmarse directamente con el equipo.'],
 ['¿Cómo sé qué especialidad consultar?', 'Si no sabés por dónde empezar, contanos brevemente qué te preocupa por WhatsApp para consultar al equipo.'],
 ['¿Cómo consulto por el taller de habilidades sociales?', 'Escribinos por WhatsApp para conocer destinatarios, disponibilidad, fechas y modalidad.']
];
