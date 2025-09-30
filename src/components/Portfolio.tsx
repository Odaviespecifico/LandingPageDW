import { ExternalLink, Github, } from 'lucide-react';

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }}

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Rk med",
      category: "ecommerce",
      description: "Sistema de gestão e aplicação para lojistas com sistema de descontos para clientes recorrentes.",
      image: "./project/rkmed.png",
      technologies: ["Vanilla JS", , "Node.js", "PostgresSQL", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "TestBridge",
      category: "sistema",
      description: "Plataforma de simulados para exames internacionais para o Linguaskill.",
      image: "./project/TestBridge.png",
      technologies: ["React", "TailwindCSS", "PostgresSQL"],
      link: "https://linguaskill.vercel.app/",
      github: "https://github.com/Odaviespecifico/TestBridge"
    },
    {
      id: 3,
      title: "Agenda LAB",
      category: "sistema",
      description: "Sistema de agendamentos para reforços de alunos de um curso de inglês",
      image: "./project/agendalab.png",
      technologies: ["React", "TailwindCSS", "PostgresSQL"],
      link: "#",
      github: "#"
    },
  ];

  // const filters = [
  //   { id: 'todos', label: 'Todos os Projetos', icon: <Globe className="w-4 h-4" /> },
  //   { id: 'website', label: 'Websites', icon: <Globe className="w-4 h-4" /> },
  //   { id: 'ecommerce', label: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
  //   { id: 'sistema', label: 'Sistemas', icon: <Zap className="w-4 h-4" /> },
  //   { id: 'aplicativo', label: 'Aplicativos', icon: <Smartphone className="w-4 h-4" /> }
  // ];

  // const filteredProjects = activeFilter === 'todos' 
  //   ? projects 
  //   : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {(project.link != '#') ? <a
                    href={project.link}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    target='_blank'
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a> : ''}
                  {(project.github != '#') ? <a
                    href={project.github}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    target='_blank'
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a> : ''}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {/* <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium">
                  Ver Detalhes
                </button> */}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Gostou do que viu? Vamos criar algo incrível juntos!
          </p>
          <button onClick={() => scrollToSection('contato')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold">
            Iniciar Meu Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;