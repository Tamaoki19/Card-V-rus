function initializeCardFlip() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeCardFlip();
});
function saiba(){
  Swal.fire({
  title: "Quer saber mais sobre a gripe espanhola?",
  text: "A Gripe Espanhola, apesar de ter ocorrido há mais de 100 anos tem como seus principais impactos negativos o colapso dos sistemas de saúde, milhões de mortes, isolamento social forçado e crises. Os principais sintomas eram febre alta repentina, calafrios, dor de cabeça forte, dores no corpo e um cansaço extremo.",
  icon: "info"
});
}
function saiba2(){
  Swal.fire({
  title: "Quer saber mais sobre o covid?",
  text: "A COVID-19 causou milhões de mortes, colapsou sistemas de saúde, afetou a economia com desemprego e fechamento de empresas, prejudicou a educação com o fechamento das escolas e aumentou problemas de saúde mental como ansiedade e depressão. Os sintomas eram febre, tosse seca, cansaço, dor de garganta, dores no corpo, perda de olfato e paladar, dificuldade para respirar e, nos casos graves, pneumonia e insuficiência respiratória.",
  icon: "info"
});
}
function saiba3(){
  Swal.fire({
  title: "Quer saber mais sobre a poliomelite?",
  text: "A poliomielite é uma doença que atinge o sistema nervoso, podendo causar paralisia permanente, principalmente em crianças. Nos casos graves, pode afetar os músculos respiratórios e levar à morte. Quem sobrevive pode ficar com sequelas, como fraqueza muscular e limitações motoras, prejudicando a qualidade de vida. Os sintomas iniciais incluem febre, dor de cabeça e rigidez na nuca, e em alguns casos evoluem para paralisia súbita, geralmente nas pernas.",
  icon: "info"
});
}
function saiba4(){
  Swal.fire({
  title: "Quer saber mais sobre a HIV?",
  text: "O HIV enfraquece o sistema imunológico, deixando o corpo vulnerável a infecções graves e cânceres, podendo evoluir para AIDS se não tratado. É transmitido pelo contato com sangue contaminado, relações sexuais sem proteção, uso compartilhado de agulhas e de mãe para filho. Com os sintomas parecidos com gripe, como febre, cansaço e dor de garganta.",
  icon: "info"
});
}
function saiba5(){
  Swal.fire({
  title: "Quer saber mais sobre o vírus da raiva?",
  text: "A raiva é uma doença viral fatal transmitida pela mordida ou arranhão de animais infectados. Afeta o sistema nervoso central e, se não tratada rapidamente, leva à morte. Os sintomas iniciais incluem febre, dor de cabeça e mal-estar, evoluindo para agitação, alucinações, espasmos ao engolir líquidos (hidrofobia), paralisia e convulsões, geralmente culminando em morte poucos dias após o início dos sintomas.",
  icon: "info"
});
}
function saiba6(){
  Swal.fire({
  title: "Quer saber mais sobre o sarampo?",
  text: "Os sintomas do Sarampo começam com febre alta, tosse seca, coriza e olhos vermelhos e lacrimejantes. Após alguns dias, surgem manchas brancas dentro da boca (manchas de Koplik) e uma erupção cutânea vermelha que se espalha pelo rosto e corpo. A erupção pode causar coceira e dura vários dias. Durante a doença, a pessoa pode sentir cansaço intenso, perda de apetite e mal-estar geral. Em casos complicados, pode haver dificuldade respiratória e convulsões.",
  icon: "info"
});
}
function saiba7(){
  Swal.fire({
  title: "Quer saber mais sobre a dengue?",
  text: "A dengue é uma doença transmitida pelo mosquito Aedes aegypti que causa febre alta, dores intensas e, em casos graves, sangramentos, queda de pressão e choque, podendo levar à morte. A prevenção depende do controle do mosquito. Os sintomas incluem febre, dores de cabeça, dores musculares, náuseas e manchas vermelhas na pele, e em casos graves, sangramentos internos e choque.",
  icon: "info"
});
}
function saiba8(){
  Swal.fire({
  title: "Quer saber mais sobre a herpes?",
  text: "O herpes é uma infecção viral que causa bolhas dolorosas na boca ou região genital. É altamente contagioso e transmitido pelo contato direto com lesões. O vírus permanece no corpo e pode ser reativado, causando sintomas como formigamento, coceira e dor antes do aparecimento das bolhas. Não tem cura, mas antivirais ajudam a controlar os sintomas e reduzir crises.",
  icon: "info"
});
}
function saiba9(){
  Swal.fire({
  title: "Quer saber mais sobre a HPV?",
  text: "O HPV é um vírus transmitido principalmente pelo contato sexual, que pode causar verrugas genitais e está ligado a vários tipos de câncer, como o do colo do útero. Muitas infecções não apresentam sintomas e desaparecem sozinhas, mas não há cura para o vírus. A vacinação ajuda a prevenir os tipos mais perigosos, e o acompanhamento médico é importante para detectar e tratar possíveis alterações.",
  icon: "info"
});
}

