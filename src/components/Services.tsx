import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Shield,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sites Institucionais",
      description: "Sites profissionais para apresentar sua empresa, produtos e serviços com design moderno e responsivo.",
      features: ["Design Responsivo", "SEO Otimizado", "Carregamento Rápido"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Lojas virtuais completas com carrinho de compras, pagamentos integrados e painel administrativo.",
      features: ["Pagamentos Seguros", "Gestão de Estoque", "Relatórios Detalhados"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicações Web",
      description: "Sistemas web personalizados para automatizar processos e aumentar a produtividade da sua empresa.",
      features: ["Interface Intuitiva", "Banco de Dados", "Integração APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Sistemas Personalizados",
      description: "Desenvolvemos sistemas sob medida para atender às necessidades específicas do seu negócio.",
      features: ["Totalmente Customizado", "Escalável", "Suporte Técnico"],
      color: "from-orange-500 to-red-500"
    },
   
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Manutenção & Suporte",
      description: "Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente com nosso suporte técnico.",
      features: ["Backup Automático", "Atualizações", "Monitoramento 24/7"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento web para impulsionar seu negócio no mundo digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
                Saiba Mais
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Desenvolvemos soluções personalizadas para atender às necessidades específicas do seu projeto. 
              Entre em contato e vamos conversar sobre suas ideias.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;