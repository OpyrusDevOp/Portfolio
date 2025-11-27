import type { Project } from "../types";
import imag from "../assets/imag_1.png";
import messaging from "../assets/messaging_app.png"
import motion_sync from "../assets/mosyn.png"
import neobuild from "../assets/neobuild.png"
import taskoria from "../assets/taskoria.png"
import harmonia from "../assets/harmonia.png"
import SimpleCodeBlock from "../components/SimpleCodeBlock";
import CodeBlock from "../components/CodeBlock";


export const projects: Project[] = [
  {
    id: "0",
    title: "Motion Syncher",
    description: "C’est une application pilotée par l’IA pour un déclencheur d’action basé sur le mouvement. Avec l’utilisation d’une caméra alimentée par IA, vous pourrez programmer votre propre chorégraphie où les mouvements clés déclenchent une action déterminée.",
    longDescription: (<><article className="project-showcase">
      <header>
        <h1>Motion Syncher</h1>
        <p className="tagline">Bridging the gap between physical movement and digital action with AI.</p>
      </header>

      <section className="overview">
        <h2>Project Overview</h2>
        <p>
          <strong>Motion Syncher</strong> is a sophisticated AI-driven application designed to transform a standard camera feed into a powerful, programmable input device. Unlike traditional motion detectors that simply sense activity, this system understands <em>specific</em> movements.
        </p>
        <p>
          Users can record their own custom gestures—like a wave, a specific dance move, or a hand signal—and link them to digital actions. This enables the creation of complex "choreographies" where a sequence of physical movements can control software, play media, or interact with other systems in real-time.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Custom Gesture Recording:</strong> Train the system on the fly by recording your own movements. The system captures the temporal dynamics of pose keypoints to create unique gesture signatures.
          </li>
          <li>
            <strong>Real-Time Pose Estimation:</strong> Leverages <strong>Luxonis OAK hardware</strong> (OAK-1, OAK-D) for high-performance, edge-based inference, ensuring low latency.
          </li>
          <li>
            <strong>Choreography Engine:</strong> A visual interface for sequencing multiple movements together to create complex interaction flows and logic.
          </li>
          <li>
            <strong>Dynamic Action Triggers:</strong> Detected movements can trigger diverse actions, such as playing sound effects, logging data, or executing custom scripts.
          </li>
          <li>
            <strong>Visual Feedback:</strong> Features a real-time visualizer overlaying pose skeletons and detection status for immediate feedback.
          </li>
        </ul>
      </section>

      <section className="technical">
        <h2>Technical Implementation</h2>
        <p>
          Built with <strong>Python</strong> and <strong>PySide6 (Qt)</strong>, the application features a modern, responsive desktop interface. The core logic employs <strong>DepthAI</strong> for interfacing with OAK devices to retrieve pose landmarks.
        </p>
        <p>
          Movement matching is achieved using <strong>Dynamic Time Warping (DTW)</strong> algorithms, which robustly compare live input against stored gesture templates, allowing for natural variations in speed and timing while maintaining high accuracy. Data persistence is managed via <strong>SQLite</strong>.
        </p>
      </section>

      <section className="applications">
        <h2>Potential Applications</h2>
        <ul>
          <li><strong>Interactive Art & Performance:</strong> Triggering audio-visual effects through dance and movement.</li>
          <li><strong>Smart Home Control:</strong> Contactless control of devices using hand or body gestures.</li>
          <li><strong>Accessibility:</strong> Alternative input methods for users with limited mobility.</li>
          <li><strong>Gaming:</strong> Immersive, motion-controlled gaming experiences without specialized controllers.</li>
        </ul>
      </section>
    </article>
    </>),
    technologies: ['Python', 'Qt', 'Pyside'],
    githubUrl: "https://github.com/OpyrusDevOp/Motion_Syncher",
    category: "ai",
    featured: true,
    imageUrl: motion_sync,
    date: "2025-09",
    status: "in-progress"
  },
  {
    id: '1',
    title: 'Duellist',
    description: 'Jeu vidéo d\'action développé avec Unity et C#',
    longDescription:
      'Un jeu d\'action  avec système de combat, IA ennemie, effets visuels et sonores. Développé entièrement en C# avec Unity, incluant la gestion des animations, des collisions et de l\'interface utilisateur.'
    ,
    technologies: ['Unity', 'C#', 'Game Design', 'Animation'],
    category: 'game',
    videoUrl: 'https://youtu.be/sAvPVJNv3yQ',
    featured: true,
    date: '2023-10',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Automaton',
    description: 'Implémentation d\'automates de reconnaissance de langage',
    longDescription: (<>
      <p>
        Bibliothèque complète pour la création et manipulation d\'automates finis.
        Inclut des algorithmes de minimisation, déterminisation et reconnaissance de patterns.
      </p>
      <br />
      <p>
        Exemple d'utilisation de la librarie :
      </p>
      <CodeBlock
        language="Csharp"
        fileName="Program.cs"
        code="using Automaton;

// Create first automaton
var a = new Automate(
    [
        new State(0, isEntry: true, isExit: false),
        new State(1, isEntry: false, isExit: true)
    ],
    [
        new Transition(new State(0, true), new State(1, false, true), 'a'),
        new Transition(new State(1, false, true), new State(0, true), 'b')
    ],
    [ 'a', 'b' ]
);

// Create second automaton
var b = new Automate(
    [
        new State(0, isEntry: true, isExit: false),
        new State(1, isEntry: false, isExit: true)
    ],
    [
        new Transition(new State(0, true), new State(1, false, true), 'x'),
        new Transition(new State(1, false, true), new State(0, true), 'y')
    ],
    [ 'x', 'y']
);

// Perform union
var unionAutomate = Automate.Union(a, b);

unionAutomate.Display_Alphabet();
unionAutomate.Display_Transition();" />
      <br />
      <p> Avec comme resultat : </p> <SimpleCodeBlock
        language="Plain Text"
        code="$ dotnet run
Alphabet: { a, b, x, y }
Transitions : 
(0) --x--> (1)
(0) --a--> (2)
(0) --a--> (3)
(0) --x--> (3)
(1) --a--> (2)
(1) --y--> (2)
(1) --a--> (3)
(2) --x--> (3)"/>
    </>),
    technologies: ['C#', 'Algorithmes', 'Compilation', 'Théorie des langages'],
    category: 'library',
    githubUrl: 'https://github.com/OpyrusDevOp/Automaton/tree/rework',
    featured: true,
    date: '2024-12',
    status: 'completed'
  },
  {
    id: '4',
    title: 'IMAG - Inventory Management',
    description: 'Application de gestion d\'inventaire pour magasins',
    longDescription: (
      <>
        <p>
          IMAG est une application de gestion d’inventaire conçue principalement pour les magasins.
          Elle intègre une interface utilisateur intuitive et plusieurs fonctionnalités essentielles
          pour la gestion de produits, d’utilisateurs et de ventes.
        </p>
        <br />
        <p><strong>Fonctionnalités principales :</strong></p>
        <ul>
          <li>Génération de reçus après chaque vente</li>
          <li>Gestion de l’inventaire (ajout, modification, suppression de produits)</li>
          <li>Gestion des comptes utilisateurs (admin et utilisateurs classiques)</li>
          <li>Accès restreint selon le type d’utilisateur</li>
          <li>Stockage local des données et des images produits</li>
        </ul>
        <br />
        <p><strong>Utilisation :</strong></p>
        <ul>
          <li>À la première ouverture, configuration du chemin de la base de données et création du compte admin</li>
          <li>La vente s’effectue via une interface claire et accessible (section Shop)</li>
          <li>La gestion de l’inventaire permet de consulter et modifier la liste des produits disponibles</li>
          <li>Le clic droit permet de supprimer un utilisateur, le clic gauche de le modifier</li>
          <li>Le premier compte admin ne peut pas être supprimé</li>
        </ul>
        <br />
        <p>Fonctionnalité à venir : journalisation des actions (logs).</p>
      </>
    ),
    technologies: ['C#', 'WPF', 'SQLite', 'MVVM', 'Base de données'],
    category: 'desktop',
    imageUrl: imag,
    githubUrl: 'https://github.com/OpyrusDevOp/IMAG',
    featured: false,
    date: '2024-12',
    status: 'completed'
  }
  ,

  {
    id: '3',
    title: 'HTTP-Server',
    description: 'Librairie simple pour serveur HTTP en C#',
    longDescription: (
      <>
        <p>
          <strong>HTTP-Server</strong> est une implémentation légère et personnalisable de serveur HTTP en C#. Il permet de gérer facilement les requêtes avec routage, fichiers statiques et endpoints dynamiques.
        </p>
        <br />
        <p>Fonctionnalités principales :</p>
        <ul>
          <li>Routage avec paramètres dynamiques</li>
          <li>Serveur de fichiers statiques (HTML, CSS...)</li>
          <li>Pool de threads configurable</li>
          <li>Gestion de sous-routes avec des <code>Router</code> imbriqués</li>
          <li>Helpers de réponse HTTP intégrés</li>
        </ul>
        <br />
        <p>Exemple d'utilisation :</p>
        <CodeBlock
          language="Csharp"
          fileName="Program.cs"
          code={`var server = new HttpServer(8080);

// Ajout de routes simples
server.AddEnpoint(HttpMethods.GET, "/hello", req => HttpResponses.Ok("Hello, World!"));

// Routage dynamique
server.AddEnpoint(
  HttpMethods.GET,
  req =>{
      if (req.Params.TryGetValue("id", out var productId))
          return HttpResponses.Ok($"Product ID: {productId}");
      return HttpResponses.NotFound();
  },
  "/product/{id}"
);

// Utilisation d’un router pour l’auth
var authRouter = new Router("/auth");
authRouter.AddEndpoint(HttpMethods.GET, req => HttpResponses.Ok("Login Page"), "/login");
authRouter.AddEndpoint(HttpMethods.POST, req => {
  var body = req.Body;
  return HttpResponses.Ok($"Authenticating user with data: {body}");
}, "/login");

// Ajout du router au serveur
server.AddRouter(authRouter);

// Lancement du serveur
server.Start();`}
        />
      </>
    ),
    technologies: ['C#', 'Networking', 'HTTP', 'API REST'],
    category: 'library',
    githubUrl: 'https://github.com/OpyrusDevOp/Http-Server',
    featured: false,
    date: '2024-12',
    status: 'completed'
  },

  {
    id: '5',
    title: 'Messaging',
    description: 'Application de messagerie temps réel en JavaScript',
    longDescription: (
      <>
        <p>
          <strong>Messaging</strong> est une application de messagerie développée dans le cadre
          d’un test technique JavaScript. Elle permet aux utilisateurs de discuter en temps réel
          via une interface web responsive, avec authentification, historique de messages et partage
          de médias.
        </p>
        <br />
        <p><strong>Fonctionnalités principales :</strong></p>
        <ul>
          <li>Envoi et réception de messages en temps réel</li>
          <li>Indicateurs de statut : lecture, utilisateur en train d’écrire</li>
          <li>Support des images et vidéos</li>
          <li>Authentification via JWT (inscription et connexion)</li>
          <li>Recherche de contacts par nom d’utilisateur</li>
          <li>Interface claire de gestion des conversations</li>
        </ul>
        <br />
        <p><strong>Fonctionnalités prévues :</strong></p>
        <ul>
          <li>Ajout d’emojis dans les messages</li>
          <li>Création et gestion de groupes de discussion</li>
        </ul>
        <br />
        <p><strong>Technologies utilisées :</strong></p>
        <ul>
          <li><strong>Frontend :</strong> Vite + JavaScript</li>
          <li><strong>Backend :</strong> Express.js, WebSocket, JWT</li>
          <li><strong>Temps réel :</strong> WebSocket pour les messages et les statuts</li>
        </ul>
        <br />
        <p>
          Le projet utilise des fichiers <code>.env</code> pour la configuration des
          adresses serveur et des clés secrètes. Une fois les serveurs lancés, l’utilisateur peut
          s’inscrire, rechercher d’autres utilisateurs, discuter et partager des médias.
        </p>
      </>
    ),
    technologies: ['JavaScript', 'Node.js', 'Express', 'WebSocket', 'Vite', 'JWT'],
    category: 'web',
    imageUrl: messaging,
    githubUrl: 'https://github.com/OpyrusDevOp/messaging-app',
    featured: false,
    date: '2025-02',
    status: 'completed'
  },
  {
    id: '6',
    title: 'NeoBuild',
    description: 'Configurateur de PC en ligne avec compatibilité automatique et espace communautaire',
    longDescription: (
      <>
        <p>
          <strong>NeoBuild</strong> est une plateforme web moderne permettant de configurer un PC
          sur mesure, avec vérification automatique de la compatibilité des composants, suggestions
          personnalisées, et espace communautaire de partage.
        </p>
        <br />
        <p><strong>Origine du projet :</strong> NeoBuild est une refonte du projet initial "PC-Lab",
          orientée vers une meilleure expérience utilisateur, une ergonomie améliorée, et un design plus
          sobre et accessible.</p>
        <br />
        <p><strong>Fonctionnalités principales :</strong></p>
        <ul>
          <li>Configurateur de PC avec vérification de compatibilité en temps réel</li>
          <li>Recommandations selon le profil de l’utilisateur (gamer, créatif, etc.)</li>
          <li>Sauvegarde et partage des configurations</li>
          <li>Filtres avancés (fréquence, chipset, etc.)</li>
          <li>Prévisualisation via modals avant achat</li>
          <li>Section Communauté pour consulter et partager des configurations</li>
          <li>Barre de résumé dynamique durant la configuration</li>
        </ul>
        <br />
        <p><strong>Évolution du design :</strong></p>
        <ul>
          <li>Abandon du thème rouge LDLC-like au profit d’une palette plus neutre (gris, blanc, violet)</li>
          <li>Suppression des motifs de fond pour une meilleure lisibilité</li>
          <li>Design responsive et accessible, avec typographies modernisées</li>
          <li>Interactions simplifiées (clic au lieu de drag-and-drop)</li>
        </ul>
        <br />
        <p><strong>Défis rencontrés :</strong></p>
        <ul>
          <li>Densité visuelle trop élevée dans la version initiale</li>
          <li>Contrastes inadaptés pour les utilisateurs malvoyants</li>
          <li>Drag-and-drop peu compatible avec les appareils mobiles</li>
        </ul>
        <p><strong>Ajustements réalisés :</strong> refonte graphique, meilleure accessibilité, interactions mobiles repensées.</p>
      </>
    ),
    technologies: ['JavaScript', 'TypeScript', 'React', 'UI/UX', 'Responsive Design'],
    category: 'web',
    imageUrl: neobuild,
    githubUrl: 'https://github.com/OpyrusDevOp/NeoBuild', // si tu veux, remplace avec l’URL réelle
    featured: false,
    date: '2025-03',
    status: 'in-progress'
  },
  {
    id: '7',
    title: 'Taskoria',
    description: 'Application de gestion de tâches gamifiée en Flutter',
    longDescription: (
      <>
        <p>
          <strong>Taskoria</strong> est une application mobile et desktop conçue pour rendre la gestion de tâches plus engageante à travers la gamification. Les tâches sont transformées en quêtes (principales, secondaires, récurrentes, etc.), permettant à l’utilisateur de gagner des XP, monter en niveau, débloquer des rangs, et maintenir une régularité grâce à un système de séries.
        </p>
        <div className="mb-6 align-middle items-center text-center w-full">
          <img src={taskoria} className='object-center align-middle text-center max-h-[60vh]' />
        </div>
        <br />
        <p><strong>Fonctionnalités principales :</strong></p>
        <ul>
          <li>Quêtes personnalisées avec XP selon le type (principale, secondaire, urgente...)</li>
          <li>Progression avec niveaux, XP et système de rang (ex. : Newcomer → TaskMaster)</li>
          <li>Système de streaks (quêtes récurrentes)</li>
          <li>Profil utilisateur avec statistiques, rang, niveaux, et réalisations</li>
          <li>Interface 100% offline avec stockage local via Hive (prévu)</li>
        </ul>
        <br />
        <p><strong>Design :</strong></p>
        <ul>
          <li>Palette rouge (#E53E3E) évoquant l’énergie et l’aventure</li>
          <li>Composants UI modulaires avec badges, barres de progression et effets visuels</li>
          <li>Responsive pour toutes tailles d’écrans (mobile, desktop, web)</li>
          <li>Composants clés : <code>QuestCard</code>, <code>RankBadge</code>, <code>ProfileHeader</code>, <code>CategoryChip</code></li>
        </ul>
        <br />
        <p><strong>Technologies utilisées :</strong></p>
        <ul>
          <li><strong>Flutter</strong> (iOS, Android, Web, Windows, macOS, Linux)</li>
          <li><strong>Riverpod</strong> pour la gestion d’état (prévu)</li>
          <li><strong>Hive</strong> pour le stockage local (prévu)</li>
          <li>Packages : <code>percent_indicator</code>, <code>intl</code></li>
        </ul>
        <br />
        <p><strong>Roadmap :</strong></p>
        <ul>
          <li>Phase 1 : Implémentation des modèles de données, gestion d’état et logiques XP</li>
          <li>Phase 2 : Gamification (succès, effets visuels, défis hebdomadaires)</li>
          <li>Phase 3 : Notifications locales, thème sombre, filtres avancés</li>
          <li>Phase 4 : Fonction export/import, analyse locale, extensions en ligne futures</li>
        </ul>
      </>
    ),
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'UI/UX'],
    category: 'mobile',
    // imageUrl: taskoria,
    githubUrl: 'https://github.com/OpyrusDevOp/Taskoria',
    featured: true,
    date: '2025-03',
    status: 'in-progress'
  },

  {
    id: '8',
    title: 'Harmonia',
    description: 'Lecteur de musique local moderne et multiplateforme',
    longDescription: (
      <>
        <p>
          <strong>Harmonia</strong> est un lecteur de musique local moderne, conçu avec Electron, React et TypeScript. Il permet de scanner, organiser et écouter ta bibliothèque musicale locale dans une interface fluide et responsive, sur Linux, Windows et macOS.
        </p>
        <br />
        <p><strong>Fonctionnalités principales :</strong></p>
        <ul>
          <li>🎵 Scan automatique et gestion de la bibliothèque musicale</li>
          <li>📂 Création et gestion de playlists personnalisées</li>
          <li>🕑 Historique des morceaux récemment écoutés</li>
          <li>🔍 Recherche, tri et filtrage efficaces</li>
          <li>🖥️ Intégration Media Session (touches multimédia et notifications)</li>
          <li>⚡ Interface rapide avec React + TailwindCSS</li>
          <li>🖼️ Affichage des pochettes d’album et métadonnées</li>
          <li>🏁 Emballage multiplateforme via Electron Forge</li>
        </ul>
        <br />
        <p><strong>Technologies utilisées :</strong></p>
        <ul>
          <li>Electron (binaire multiplateforme)</li>
          <li>React & TypeScript pour le frontend</li>
          <li>Vite pour le bundling</li>
          <li>TailwindCSS pour le style</li>
          <li>music-metadata pour l’analyse audio locale</li>
          <li>Lucide pour les icônes</li>
        </ul>
        <br />
        <p><strong>Structure du projet :</strong></p>
        <ul>
          <li><code>src/</code> contient les composants, écrans, services et types</li>
          <li><code>main.ts</code> et <code>renderer.ts</code> pour les processus Electron</li>
          <li><code>forge.config.ts</code> pour l’empaquetage multiplateforme</li>
        </ul>
        <br />
        <p>
          Le projet a été conçu avant tout pour offrir une belle expérience utilisateur sur Linux, où les lecteurs de musique modernes sont souvent limités ou datés. Harmonia répond à ce besoin avec une interface soignée et moderne.
        </p>
      </>
    ),
    technologies: ['Electron', 'React', 'TypeScript', 'TailwindCSS', 'Vite', 'Node.js'],
    category: 'desktop',
    imageUrl: harmonia,
    githubUrl: 'https://github.com/OpyrusDevOp/Harmonia',
    featured: true,
    date: '2025-04',
    status: 'in-progress'
  },
  {
    id: '9',
    title: 'Novecaz',
    description: 'Un site web pour un service d\'achat de pièce automobile',
    longDescription: 'Un site web pour un service d\'achat de pièce automobile',
    technologies: ['TypeScript', 'Express', 'Vite', 'React', 'TailwindCSS', 'Bun', 'Node.js'],
    category: 'web',
    githubUrl: 'https://github.com/OpyrusDevOp/Novecaz',
    featured: false,
    date: '2025-03',
    status: 'completed'
  },
  {
    id: '10',
    title: 'Portfolio React',
    description: 'Portfolio personnel développé avec React et TypeScript',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    githubUrl: 'https://github.com/OpyrusDevOp/portfolio',
    liveUrl: 'https://portfolio-nu-amber-48.vercel.app/',
    featured: false,
    date: '2025-01',
    status: 'in-progress'
  },
];
