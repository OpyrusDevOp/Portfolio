import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import { skillsData, projectsData } from "../Information";

const HomePage = () => {

  return (
    <div>
      <PresentationSection />

      {/* Skills Section */}
      <SkillSection />


      {/* Projects Section */}
      <section id="projets" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text ">
            Projets Réalisés
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );

}

const SkillSection = () => (
  <section id="compétences" className="py-20 bg-slate-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-100 bg-clip-text ">
        Compétences & Technologies
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </div>
  </section>
)

const PresentationSection = () => (

  <section id="à-propos" className="py-22 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text ">
          Bienvenu, je suis YVES BIDJA BISSA
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="prose prose-lg prose-invert">
            <p className="text-slate-300 text-lg leading-relaxed">
              Passionné par l'informatique depuis mon plus jeune âge, je suis actuellement
              étudiant en <span className="text-blue-400 font-semibold">License Informatique - Produits et Services Multimédia</span>
              à l'Université de Franche-Comté STGI.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Mon parcours m'a mené du <span className="text-purple-400 font-semibold">Cameroun</span> à la
              <span className="text-purple-400 font-semibold"> France</span>, enrichissant ma vision du développement
              logiciel à travers différentes cultures technologiques. Je me spécialise dans le
              <span className="text-blue-400 font-semibold"> développement full-stack</span>,
              les <span className="text-blue-400 font-semibold">applications mobiles</span> et
              la <span className="text-blue-400 font-semibold">création de jeux vidéo</span>.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Ayant récemment terminé mon stage chez <span className="text-purple-400 font-semibold">ELLIADD </span>
              où j'ai développé un jeu vidéo contre la désinformation
            </p>
          </div>

          {/* Status Alert */}
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-green-400">Disponible pour alternance</h3>
            </div>
            <p className="text-slate-300 mb-3">
              Recherche active d'une alternance pour Master 1 PSM septembre 2025 (ou décembre 2025 au plus tard)
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-600/20 text-red-300 px-3 py-1 rounded-full text-sm">Développement Logiciel</span>
              <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">Développement Web</span>
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Applications Mobiles</span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">Jeux Vidéo</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
              <div className="text-2xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-slate-300 text-sm">Années d'étude</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors duration-300">
              <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-slate-300 text-sm">Projets réalisés</div>
            </div>
            <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-green-500/50 transition-colors duration-300">
              <div className="text-2xl font-bold text-green-400 mb-2">1</div>
              <div className="text-slate-300 text-sm">Stage terminé</div>
            </div>
          </div>
        </div>

        {/* Right Content - Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
            Mon Parcours
          </h3>

          <div className="space-y-6">
            {/* Timeline Item 2 - Stage terminé */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1 pb-8 border-l-2 border-slate-700 pl-6 ml-2 group-hover:border-blue-500/50 transition-colors duration-300">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">Stage ELLIADD</h4>
                    <span className="text-blue-400 text-sm font-medium">Mars - Juin 2025</span>
                  </div>
                  <p className="text-slate-300 mb-2">Développement d'un jeu vidéo contre la désinformation</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">Unity</span>
                    <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">C#</span>
                    <span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">Terminé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1 pb-8 border-l-2 border-slate-700 pl-6 ml-2 group-hover:border-purple-500/50 transition-colors duration-300">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">License Informatique</h4>
                    <span className="text-purple-400 text-sm font-medium">2024-2025</span>
                  </div>
                  <p className="text-slate-300 mb-2">Université de Franche-Comté STGI</p>
                  <p className="text-slate-400 text-sm">Produits et Services Multimédia</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="flex-1 border-l-2 border-slate-700 pl-6 ml-2 group-hover:border-blue-500/50 transition-colors duration-300">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-6 border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">Bachelor Informatique</h4>
                    <span className="text-blue-400 text-sm font-medium">2022-2024</span>
                  </div>
                  <p className="text-slate-300 mb-2">Keyce Informatique et Intelligence Artificielle</p>
                  <p className="text-slate-400 text-sm">Cameroun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-8 py-4 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
          <span className="text-slate-300">À la recherche d'une alternance ?</span>
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HomePage;
