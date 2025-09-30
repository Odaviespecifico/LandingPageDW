
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Qualidade",
      description: "Compromisso com a excelência em cada projeto desenvolvido"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Agilidade",
      description: "Entregas rápidas sem comprometer a qualidade do resultado"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Dedicação",
      description: "Paixão pelo que fazemos refletida em cada linha de código"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parceria",
      description: "Relacionamento próximo e transparente com nossos clientes"
    }
  ];

  const achievements = [
    { number: "15+", label: "Projetos Concluídos", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "12+", label: "Clientes Atendidos", icon: <Users className="w-5 h-5" /> },
    { number: "3+", label: "Anos de Experiência", icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <span className="text-blue-600 font-semibold text-lg mb-2 block">Sobre Nós</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transformamos ideias em 
                <span className="text-blue-600"> soluções digitais</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A DW Desenvolvimentos é uma empresa especializada em criar soluções web inovadoras 
                que impulsionam o crescimento dos nossos clientes no ambiente digital.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nossa Missão</h4>
                  <p className="text-gray-600">
                    Desenvolver soluções web de alta qualidade que atendam às necessidades específicas 
                    de cada cliente, proporcionando resultados excepcionais.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nossa Visão</h4>
                  <p className="text-gray-600">
                    Ser reconhecida como referência em desenvolvimento web, sempre inovando e 
                    superando expectativas dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-center mb-2 text-blue-600">
                    {achievement.icon}
                    <span className="text-2xl font-bold ml-2">{achievement.number}</span>
                  </div>
                  <p className="text-sm text-gray-600">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe trabalhando"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Certificação</div>
                  <div className="text-sm text-gray-600">Qualidade Garantida</div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <p className="text-xl text-gray-600">
              Os princípios que norteiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;