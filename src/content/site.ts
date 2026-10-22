// Conteúdo do site. Posicionamento: agência digital que transforma empresas em referência no seu mercado.

export const site = {
  name: "aw3s",
  email: "contato@aw3s.com.br",
  whatsapp: "5511978370758",
  messenger: "111801600513365",
  social: {
    facebook: "https://www.facebook.com/Aw3s-111801600513365/",
    linkedin: "https://www.linkedin.com/company/aw3s/",
    instagram: "https://www.instagram.com/aw3s.agenciadigital/",
  },
};

export const nav = [
  { label: "Home", href: "/", section: "inicio" },
  { label: "Sobre", href: "/#sobre", section: "sobre" },
  { label: "Quem somos", href: "/quem-somos/", section: null },
  { label: "Serviços", href: "/#servicos", section: "servicos" },
  { label: "Metodologia", href: "/#metodologia", section: "metodologia" },
] as const;

export const footerServices = ["Criação de sites", "SEO e conteúdo", "Estratégia digital", "Automação de marketing"];

export const contactChannels = ["Email", "WhatsApp", "Telefone"] as const;

export const contactModal = {
  asideTitle: "Vamos tornar sua marca referência",
  asideText: "Conte rapidamente o que você precisa e um especialista retorna para você.",
  title: "Fale com um especialista",
  subtitle: "Preencha o formulário e vamos entender o momento da sua empresa",
};

export const home = {
  hero: {
    kicker: "Agência digital de autoridade",
    title: "Sua empresa vista como referência no seu mercado",
    text: "Site, conteúdo e Google para o cliente confiar em você antes do primeiro contato, e automações que cuidam do atendimento enquanto você foca no negócio.",
    cta: "Quero ser referência",
  },
  expertises: {
    title: "Autoridade não se declara, se constrói",
    text: "Unimos design, conteúdo e estratégia para que o mercado reconheça o valor que sua empresa já entrega. Cada peça trabalha a favor da mesma percepção: a de que você é a escolha certa.",
    cta: "Conheça a AW3S",
    pillars: [
      { title: "Site profissional", text: "A primeira impressão que transmite confiança." },
      { title: "Presença no Google", text: "Ser encontrado por quem já procura o que você oferece." },
      { title: "Conteúdo relevante", text: "Mostrar domínio do assunto antes da venda." },
      { title: "Relacionamento contínuo", text: "Manter sua marca lembrada até o fechamento." },
    ],
  },
  sobre: {
    title: "Experiência de quem atende clientes exigentes há anos",
    text: [
      "A ",
      { strong: "AW3S" },
      " nasceu dentro da ",
      { strong: "walkssystem" },
      ", que há anos atende empresas exigentes. Levamos essa bagagem para um único objetivo: fazer o mercado enxergar sua empresa como a melhor escolha.",
    ] as (string | { strong: string })[],
    history: {
      title: "Nossa história",
      text: "Conheça quem está por trás da AW3S →",
    },
    pillars: [
      { icon: "briefcase", title: "Você foca no negócio", text: "Cuidamos do projeto de ponta a ponta, com um especialista responsável por cada etapa." },
      { icon: "coins", title: "Investimento sob medida", text: "Escopo pensado para o seu momento, sem pacotes inflados." },
      { icon: "chart", title: "Estratégia baseada no seu mercado", text: "Antes de criar, estudamos seus concorrentes e o que seu cliente procura." },
    ],
  },
  servicos: {
    kicker: "Site, Google e relacionamento trabalhando juntos",
    title: "O que fazemos para sua marca ser lembrada",
    cta: "Quero isso para minha empresa",
    items: [
      { image: "/images/icon-web.png", title: "Um site à altura da sua empresa", text: "Rápido, profissional e pensado para transformar visitantes em contatos qualificados." },
      { image: "/images/icon-seo.png", title: "Apareça quando seu cliente procura", text: "SEO e conteúdo para colocar sua empresa entre as primeiras opções no Google." },
      { image: "/images/icon-automacao.png", title: "Contatos que viram clientes", text: "Funis, e-mail marketing e automações que conduzem o interessado até a venda." },
    ],
  },
  metodologia: {
    title: "Metodologia",
    subtitle: "Um processo claro, do diagnóstico à entrega",
    steps: [
      { title: "Diagnóstico", text: "Entendemos seu negócio, seu público e como o mercado enxerga sua marca hoje." },
      { title: "Estratégia", text: "Definimos o posicionamento e os canais que vão construir sua autoridade." },
      { title: "Criação", text: "Site, conteúdo e campanhas produzidos com base no que foi planejado." },
      { title: "Lançamento e acompanhamento", text: "Colocamos no ar, medimos os resultados e ajustamos o que for preciso." },
    ],
    highlight: "Você acompanha cada etapa e sabe exatamente o que está sendo feito e por quê.",
  },
  cta: {
    title: "Vamos conversar sobre a autoridade da sua empresa?",
    text: "Conte onde sua empresa está hoje e mostramos o caminho até onde ela quer chegar.",
    button: "Falar com um especialista",
  },
};

export const about = {
  hero: {
    title: "Estratégia, criatividade e tecnologia a serviço da reputação da sua empresa.",
    kicker: "#O digital tornou-se a nossa língua nativa",
  },
  world: {
    title: "Quem está por trás da AW3S",
    columns: [
      [
        "Somos estrategistas, criadores de conteúdo e desenvolvedores que vivem o digital todos os dias. Acompanhamos de perto as novas tecnologias para que sua empresa esteja sempre um passo à frente.",
        "Trabalhamos com agilidade, qualidade e pensamento estratégico, dentro do orçamento que faz sentido para você.",
      ],
      [
        "Mergulhamos no negócio de cada cliente para enxergar o que ele enxerga e perseguir os mesmos objetivos. Levamos para cada projeto as melhores práticas que aprendemos atendendo empresas de diversos segmentos pelo Brasil.",
      ],
    ],
    values: { title: "Nossos Valores", subtitle: "O que guia cada projeto", follow: "Acompanhe" },
  },
  values: [
    { title: "#Paixão", text: "Tudo começa com a vontade genuína de ver a ideia do cliente se transformar em resultado." },
    { title: "#Pensamento", text: "Toda ideia vira estratégia: um plano detalhado de como ela ganha vida e alcança resultados." },
    { title: "#Resultados", text: "Medimos sucesso pelos seus objetivos de negócio, como retorno sobre o investimento e reconhecimento da marca." },
    { title: "#Narrativa", text: "Damos forma visual e criativa à sua história, porque é ela que cria conexão com seus clientes." },
    { title: "#Inovação", text: "Escolhemos os canais e as tecnologias certas. E, quando a solução ainda não existe, nós a criamos." },
  ],
  team: {
    title: "Somos uma equipe de marketing que entende de negócios.",
    text: "Não somos apenas uma agência. Sabemos que o objetivo final do seu negócio é vender mais enquanto fortalece a marca, e trabalhamos para os dois ao mesmo tempo.",
  },
  cta: {
    question: "Quer saber o que a AW3S pode fazer pela sua marca?",
    button: "Sim, quero a AW3S cuidando da minha marca!",
  },
};

export const footerAbout =
  "Uma agência digital que transforma empresas em referência no seu mercado. Site, conteúdo e estratégia trabalhando juntos para que a AW3S esteja ao seu lado em cada etapa da construção da sua marca.";
