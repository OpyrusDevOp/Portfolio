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
    id: '11',
    title: 'GestStack',
    description: 'ERP modulaire (Achats, Inventaire, Finance) en .NET 10 avec architecture clean et client desktop Avalonia',
    description_en: 'Modular ERP (Procurement, Inventory, Finance) built with .NET 10, clean architecture, and an Avalonia desktop client',
    longDescription: (
      <>
        <p>
          <strong>GestStack</strong> est un ERP couvrant trois modules : Achats, Inventaire et Finance.
          C'est mon projet en cours le plus ambitieux, pensé comme une vitrine d'ingénierie logicielle :
          l'architecture et la qualité du code sont au cœur du projet, autant que les fonctionnalités.
        </p>
        <br />
        <p><strong>Architecture :</strong></p>
        <ul>
          <li>Solution .NET 10 en <strong>clean architecture</strong> : API, Application, Domain, Infrastructure</li>
          <li><code>GestStack.API</code> — API REST ASP.NET Core avec ProblemDetails et codes d'erreur structurés</li>
          <li><code>GestStack.DesktopClient</code> — client desktop <strong>Avalonia</strong> (thème Fluent)</li>
          <li>Séparation stricte des responsabilités entre les couches, entités auditables</li>
        </ul>
        <br />
        <p><strong>Fonctionnalités réalisées :</strong></p>
        <ul>
          <li>Authentification JWT avec rôles et permissions</li>
          <li>Assistant de premier démarrage (setup wizard) : création de l'admin et du profil d'entreprise</li>
          <li>Jeton de setup dédié (second schéma bearer JWT avec audience distincte) sécurisant les routes d'installation</li>
          <li>Opérations critiques encapsulées dans des transactions base de données</li>
          <li>Tests unitaires sur les services applicatifs</li>
        </ul>
        <br />
        <p><strong>Pratiques d'ingénierie :</strong></p>
        <ul>
          <li>Workflow gitflow : branches <code>feature/*</code>, intégration par pull request uniquement</li>
          <li>Branches <code>main</code> et <code>development</code> protégées par ruleset GitHub</li>
          <li>Vérification de bout en bout de chaque fonctionnalité avant merge</li>
        </ul>
        <br />
        <p>
          En cours : gestion des utilisateurs (création de comptes par l'admin, inscription fermée),
          puis les modules métier (Inventaire, Achats, Finance) et le client desktop.
        </p>
      </>
    ),
    longDescription_en: (
      <>
        <p>
          <strong>GestStack</strong> is an ERP covering three modules: Procurement, Inventory, and Finance.
          It is my most ambitious ongoing project, designed as a software engineering showcase:
          architecture and code quality are as central to the project as the features themselves.
        </p>
        <br />
        <p><strong>Architecture:</strong></p>
        <ul>
          <li>.NET 10 solution following <strong>clean architecture</strong>: API, Application, Domain, Infrastructure</li>
          <li><code>GestStack.API</code> — ASP.NET Core REST API with ProblemDetails and structured error codes</li>
          <li><code>GestStack.DesktopClient</code> — <strong>Avalonia</strong> desktop client (Fluent theme)</li>
          <li>Strict separation of concerns between layers, auditable entities</li>
        </ul>
        <br />
        <p><strong>Implemented features:</strong></p>
        <ul>
          <li>JWT authentication with roles and permissions</li>
          <li>First-run setup wizard: admin account and company profile creation</li>
          <li>Dedicated setup token (second JWT bearer scheme with a distinct audience) securing installation routes</li>
          <li>Critical operations wrapped in database transactions</li>
          <li>Unit tests covering application services</li>
        </ul>
        <br />
        <p><strong>Engineering practices:</strong></p>
        <ul>
          <li>Gitflow workflow: <code>feature/*</code> branches, pull-request-only integration</li>
          <li><code>main</code> and <code>development</code> branches protected by a GitHub ruleset</li>
          <li>End-to-end verification of every feature before merge</li>
        </ul>
        <br />
        <p>
          In progress: user management (admin-created accounts, closed registration),
          then the business modules (Inventory, Procurement, Finance) and the desktop client.
        </p>
      </>
    ),
    technologies: ['C#', '.NET 10', 'ASP.NET Core', 'Avalonia', 'Clean Architecture', 'JWT'],
    category: 'desktop',
    githubUrl: 'https://github.com/OpyrusDevOp/GestStack',
    featured: true,
    date: '2026-07',
    status: 'in-progress'
  },
  {
    id: "0",
    title: "Motion Syncher",
    description: "C'est une application pilotée par l'IA pour un déclencheur d'action basé sur le mouvement. Avec l'utilisation d'une caméra alimentée par IA, vous pourrez programmer votre propre chorégraphie où les mouvements clés déclenchent une action déterminée.",
    description_en: "An AI-powered application for movement-based action triggering. Using an AI camera, you can program your own choreography where key movements trigger a defined action.",
    longDescription: (<><article className="project-showcase">
      <header>
        <h1>Motion Syncher</h1>
        <p className="tagline">Combler le fossé entre mouvement physique et action numérique avec l'IA.</p>
      </header>

      <section className="overview">
        <h2>Aperçu du projet</h2>
        <p>
          <strong>Motion Syncher</strong> est une application sophistiquée basée sur l'IA conçue pour transformer un flux de caméra standard en un périphérique d'entrée puissant et programmable. Contrairement aux détecteurs de mouvement traditionnels qui détectent simplement l'activité, ce système comprend des mouvements spécifiques.        </p>
        <p>
          Les utilisateurs peuvent enregistrer leurs propres gestes personnalisés—comme une vague, un mouvement de danse spécifique ou un signal de la main — et les lier à des actions numériques. Cela permet la création de « chorégraphies » complexes où une séquence de mouvements physiques peut contrôler un logiciel, jouer des médias ou interagir avec d'autres systèmes en temps réel.
        </p>
      </section>

      <section className="features">
        <h2>Principales caractéristiques</h2>
        <ul>
          <li>
            <strong>Enregistrement de gestes personnalisés :</strong> entraînez le système à la volée en enregistrant vos propres mouvements. Le système capture la dynamique temporelle des points clés de pose pour créer des signatures gestuelles uniques.          </li>
          <li>
            <strong>Estimation de pose en temps réel :</strong> Exploite le matériel <strong>Luxonis OAK</strong> (OAK-1, OAK-D) pour une inférence haute performance en périphérie, garantissant une faible latence.
          </li>
          <li>
            <strong>Moteur de chorégraphie :</strong> Une interface visuelle pour séquencer plusieurs mouvements ensemble afin de créer des flux d'interaction et une logique complexes.
          </li>
          <li>
            <strong>Déclencheurs d'action dynamiques :</strong> Les mouvements détectés peuvent déclencher diverses actions, telles que la lecture d'effets sonores, l'enregistrement de données ou l'exécution de scripts personnalisés.
          </li>
          <li>
            <strong>Retour visuel :</strong> Dispose d'un visualiseur en temps réel superposant les squelettes de pose et l'état de détection pour un retour immédiat.
          </li>
        </ul>
      </section>

      <section className="technical">
        <h2>Implémentation technique</h2>
        <p>
          Construit avec <strong>Python</strong> et <strong>PySide6 (Qt)</strong>, l'application dispose d'une interface de bureau moderne et réactive. La logique centrale utilise <strong>DepthAI</strong> pour s'interfacer avec les appareils OAK afin de récupérer les repères de pose.
        </p>
        <p>
          La correspondance des mouvements est réalisée à l'aide d'algorithmes de <strong>Dynamic Time Warping (DTW)</strong>, qui comparent de manière robuste l'entrée en direct aux modèles de gestes stockés, permettant des variations naturelles de vitesse et de timing tout en maintenant une grande précision. La persistance des données est gérée via <strong>SQLite</strong>.
        </p>
      </section>

      <section className="applications">
        <h2>Applications potentielles</h2>
        <ul>
          <li><strong>Art interactif et performance :</strong> Déclenchement d'effets audiovisuels par la danse et le mouvement.</li>
          <li><strong>Contrôle de la maison intelligente :</strong> Contrôle sans contact des appareils à l'aide de gestes de la main ou du corps.</li>
          <li><strong>Accessibilité :</strong> Méthodes d'entrée alternatives pour les utilisateurs à mobilité réduite.</li>
          <li><strong>Jeux vidéo :</strong> Expériences de jeu immersives contrôlées par le mouvement sans contrôleurs spécialisés.</li>
        </ul>
      </section>
    </article>
    </>),
    longDescription_en: (<><article className="project-showcase">
      <header>
        <h1>Motion Syncher</h1>
        <p className="tagline">Bridging the gap between physical movement and digital action with AI.</p>
      </header>

      <section className="overview">
        <h2>Project Overview</h2>
        <p>
          <strong>Motion Syncher</strong> is a sophisticated AI-based application designed to transform a standard camera feed into a powerful, programmable input device. Unlike traditional motion detectors that simply detect activity, this system understands specific movements.
        </p>
        <p>
          Users can record their own custom gestures — like a wave, a specific dance move, or a hand signal — and bind them to digital actions. This enables the creation of complex "choreographies" where a sequence of physical movements can control software, play media, or interact with other systems in real time.
        </p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Custom gesture recording:</strong> train the system on-the-fly by recording your own movements. The system captures the temporal dynamics of key pose landmarks to create unique gesture signatures.
          </li>
          <li>
            <strong>Real-time pose estimation:</strong> leverages <strong>Luxonis OAK</strong> hardware (OAK-1, OAK-D) for high-performance edge inference, ensuring low latency.
          </li>
          <li>
            <strong>Choreography engine:</strong> a visual interface for sequencing multiple movements together to create complex interaction flows and logic.
          </li>
          <li>
            <strong>Dynamic action triggers:</strong> detected movements can trigger various actions such as playing sound effects, logging data, or executing custom scripts.
          </li>
          <li>
            <strong>Visual feedback:</strong> features a real-time visualizer overlaying pose skeletons and detection state for immediate feedback.
          </li>
        </ul>
      </section>

      <section className="technical">
        <h2>Technical Implementation</h2>
        <p>
          Built with <strong>Python</strong> and <strong>PySide6 (Qt)</strong>, the application features a modern, responsive desktop interface. The core logic uses <strong>DepthAI</strong> to interface with OAK devices to retrieve pose landmarks.
        </p>
        <p>
          Motion matching is achieved using <strong>Dynamic Time Warping (DTW)</strong> algorithms, which robustly compare live input against stored gesture templates, allowing for natural speed and timing variations while maintaining high accuracy. Data persistence is handled via <strong>SQLite</strong>.
        </p>
      </section>

      <section className="applications">
        <h2>Potential Applications</h2>
        <ul>
          <li><strong>Interactive art and performance:</strong> triggering audiovisual effects through dance and movement.</li>
          <li><strong>Smart home control:</strong> contactless device control using hand or body gestures.</li>
          <li><strong>Accessibility:</strong> alternative input methods for users with limited mobility.</li>
          <li><strong>Video games:</strong> immersive movement-controlled gaming experiences without specialised controllers.</li>
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
    description_en: 'Action video game developed with Unity and C#',
    longDescription: 'Un jeu d\'action  avec système de combat, IA ennemie, effets visuels et sonores. Développé entièrement en C# avec Unity, incluant la gestion des animations, des collisions et de l\'interface utilisateur.',
    longDescription_en: 'An action game featuring a combat system, enemy AI, visual and sound effects. Fully developed in C# with Unity, including animation management, collisions, and the user interface.',
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
    description_en: 'Implementation of language recognition finite automata',
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
    longDescription_en: (<>
      <p>
        A complete library for creating and manipulating finite automata.
        Includes minimisation, determinisation, and pattern recognition algorithms.
      </p>
      <br />
      <p>
        Example usage:
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
      <p>Output:</p>
      <SimpleCodeBlock
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
    description_en: 'Inventory management application for retail stores',
    longDescription: (
      <>
        <p>
          IMAG est une application de gestion d'inventaire conçue principalement pour les magasins.
          Elle intègre une interface utilisateur intuitive et plusieurs fonctionnalités essentielles
          pour la gestion de produits, d'utilisateurs et de ventes.
        </p>
        <br />
        <p><strong>Fonctionnalités principales :</strong></p>
        <ul>
          <li>Génération de reçus après chaque vente</li>
          <li>Gestion de l'inventaire (ajout, modification, suppression de produits)</li>
          <li>Gestion des comptes utilisateurs (admin et utilisateurs classiques)</li>
          <li>Accès restreint selon le type d'utilisateur</li>
          <li>Stockage local des données et des images produits</li>
        </ul>
        <br />
        <p><strong>Utilisation :</strong></p>
        <ul>
          <li>À la première ouverture, configuration du chemin de la base de données et création du compte admin</li>
          <li>La vente s'effectue via une interface claire et accessible (section Shop)</li>
          <li>La gestion de l'inventaire permet de consulter et modifier la liste des produits disponibles</li>
          <li>Le clic droit permet de supprimer un utilisateur, le clic gauche de le modifier</li>
          <li>Le premier compte admin ne peut pas être supprimé</li>
        </ul>
        <br />
        <p>Fonctionnalité à venir : journalisation des actions (logs).</p>
      </>
    ),
    longDescription_en: (
      <>
        <p>
          IMAG is an inventory management application designed primarily for retail stores.
          It features an intuitive user interface and several essential functionalities
          for managing products, users, and sales.
        </p>
        <br />
        <p><strong>Key features:</strong></p>
        <ul>
          <li>Receipt generation after each sale</li>
          <li>Inventory management (add, edit, delete products)</li>
          <li>User account management (admin and standard users)</li>
          <li>Restricted access based on user type</li>
          <li>Local storage for data and product images</li>
        </ul>
        <br />
        <p><strong>Usage:</strong></p>
        <ul>
          <li>On first launch, configure the database path and create the admin account</li>
          <li>Sales are handled via a clear and accessible interface (Shop section)</li>
          <li>Inventory management lets you view and edit the available product list</li>
          <li>Right-click to delete a user, left-click to edit</li>
          <li>The first admin account cannot be deleted</li>
        </ul>
        <br />
        <p>Upcoming feature: action logging.</p>
      </>
    ),
    technologies: ['C#', 'WPF', 'SQLite', 'MVVM', 'Base de données'],
    category: 'desktop',
    imageUrl: imag,
    githubUrl: 'https://github.com/OpyrusDevOp/IMAG',
    featured: false,
    date: '2024-12',
    status: 'completed'
  },

  {
    id: '3',
    title: 'HTTP-Server',
    description: 'Librairie simple pour serveur HTTP en C#',
    description_en: 'Lightweight HTTP server library in C#',
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

// Utilisation d'un router pour l'auth
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
    longDescription_en: (
      <>
        <p>
          <strong>HTTP-Server</strong> is a lightweight, customisable HTTP server implementation in C#. It makes it easy to handle requests with routing, static file serving, and dynamic endpoints.
        </p>
        <br />
        <p>Key features:</p>
        <ul>
          <li>Routing with dynamic parameters</li>
          <li>Static file server (HTML, CSS…)</li>
          <li>Configurable thread pool</li>
          <li>Sub-route management with nested <code>Router</code> instances</li>
          <li>Built-in HTTP response helpers</li>
        </ul>
        <br />
        <p>Example usage:</p>
        <CodeBlock
          language="Csharp"
          fileName="Program.cs"
          code={`var server = new HttpServer(8080);

// Simple route
server.AddEnpoint(HttpMethods.GET, "/hello", req => HttpResponses.Ok("Hello, World!"));

// Dynamic routing
server.AddEnpoint(
  HttpMethods.GET,
  req =>{
      if (req.Params.TryGetValue("id", out var productId))
          return HttpResponses.Ok($"Product ID: {productId}");
      return HttpResponses.NotFound();
  },
  "/product/{id}"
);

// Auth router
var authRouter = new Router("/auth");
authRouter.AddEndpoint(HttpMethods.GET, req => HttpResponses.Ok("Login Page"), "/login");
authRouter.AddEndpoint(HttpMethods.POST, req => {
  var body = req.Body;
  return HttpResponses.Ok($"Authenticating user with data: {body}");
}, "/login");

// Add router to server
server.AddRouter(authRouter);

// Start the server
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
    description_en: 'Real-time messaging application in JavaScript',
    longDescription: (
      <>
        <p>
          <strong>Messaging</strong> est une application de messagerie développée dans le cadre
          d'un test technique JavaScript. Elle permet aux utilisateurs de discuter en temps réel
          via une interface web responsive, avec authentification, historique de messages et partage
          de médias.
        </p>
        <br />
        <p><strong>Fonctionnalités principales :</strong></p>
        <ul>
          <li>Envoi et réception de messages en temps réel</li>
          <li>Indicateurs de statut : lecture, utilisateur en train d'écrire</li>
          <li>Support des images et vidéos</li>
          <li>Authentification via JWT (inscription et connexion)</li>
          <li>Recherche de contacts par nom d'utilisateur</li>
          <li>Interface claire de gestion des conversations</li>
        </ul>
        <br />
        <p><strong>Fonctionnalités prévues :</strong></p>
        <ul>
          <li>Ajout d'emojis dans les messages</li>
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
          adresses serveur et des clés secrètes. Une fois les serveurs lancés, l'utilisateur peut
          s'inscrire, rechercher d'autres utilisateurs, discuter et partager des médias.
        </p>
      </>
    ),
    longDescription_en: (
      <>
        <p>
          <strong>Messaging</strong> is a messaging application built as a JavaScript technical test.
          It allows users to chat in real time via a responsive web interface, with authentication,
          message history, and media sharing.
        </p>
        <br />
        <p><strong>Key features:</strong></p>
        <ul>
          <li>Real-time message sending and receiving</li>
          <li>Status indicators: read receipts, typing indicator</li>
          <li>Image and video support</li>
          <li>JWT authentication (registration and login)</li>
          <li>Contact search by username</li>
          <li>Clean conversation management interface</li>
        </ul>
        <br />
        <p><strong>Planned features:</strong></p>
        <ul>
          <li>Emoji support in messages</li>
          <li>Group chat creation and management</li>
        </ul>
        <br />
        <p><strong>Tech stack:</strong></p>
        <ul>
          <li><strong>Frontend:</strong> Vite + JavaScript</li>
          <li><strong>Backend:</strong> Express.js, WebSocket, JWT</li>
          <li><strong>Real-time:</strong> WebSocket for messages and statuses</li>
        </ul>
        <br />
        <p>
          The project uses <code>.env</code> files for server address and secret key configuration.
          Once the servers are running, users can register, search for other users, chat, and share media.
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
    description_en: 'Online PC configurator with automatic compatibility checking and a community sharing space',
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
          <li>Recommandations selon le profil de l'utilisateur (gamer, créatif, etc.)</li>
          <li>Sauvegarde et partage des configurations</li>
          <li>Filtres avancés (fréquence, chipset, etc.)</li>
          <li>Prévisualisation via modals avant achat</li>
          <li>Section Communauté pour consulter et partager des configurations</li>
          <li>Barre de résumé dynamique durant la configuration</li>
        </ul>
        <br />
        <p><strong>Évolution du design :</strong></p>
        <ul>
          <li>Abandon du thème rouge LDLC-like au profit d'une palette plus neutre (gris, blanc, violet)</li>
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
    longDescription_en: (
      <>
        <p>
          <strong>NeoBuild</strong> is a modern web platform for building a custom PC,
          with automatic component compatibility checking, personalised suggestions,
          and a community sharing space.
        </p>
        <br />
        <p><strong>Project origin:</strong> NeoBuild is a redesign of the original "PC-Lab" project,
          focused on a better user experience, improved ergonomics, and a cleaner, more accessible design.</p>
        <br />
        <p><strong>Key features:</strong></p>
        <ul>
          <li>PC configurator with real-time compatibility checking</li>
          <li>Recommendations based on user profile (gamer, creative, etc.)</li>
          <li>Save and share configurations</li>
          <li>Advanced filters (frequency, chipset, etc.)</li>
          <li>Modal previews before purchase</li>
          <li>Community section to browse and share configurations</li>
          <li>Dynamic summary bar during configuration</li>
        </ul>
        <br />
        <p><strong>Design evolution:</strong></p>
        <ul>
          <li>Dropped the LDLC-like red theme in favour of a neutral palette (grey, white, purple)</li>
          <li>Removed background patterns for better readability</li>
          <li>Responsive and accessible design with modernised typography</li>
          <li>Simplified interactions (click instead of drag-and-drop)</li>
        </ul>
        <br />
        <p><strong>Challenges faced:</strong></p>
        <ul>
          <li>Excessive visual density in the initial version</li>
          <li>Inadequate contrast for visually impaired users</li>
          <li>Drag-and-drop poorly suited to mobile devices</li>
        </ul>
        <p><strong>Adjustments made:</strong> graphic redesign, improved accessibility, rethought mobile interactions.</p>
      </>
    ),
    technologies: ['JavaScript', 'TypeScript', 'React', 'UI/UX', 'Responsive Design'],
    category: 'web',
    imageUrl: neobuild,
    githubUrl: 'https://github.com/OpyrusDevOp/NeoBuild',
    featured: false,
    date: '2025-03',
    status: 'in-progress'
  },
  {
    id: '7',
    title: 'Taskoria',
    description: 'Application de gestion de tâches gamifiée en Flutter',
    description_en: 'Gamified task management application built with Flutter',
    longDescription: (
      <>
        <p>
          <strong>Taskoria</strong> est une application mobile et desktop conçue pour rendre la gestion de tâches plus engageante à travers la gamification. Les tâches sont transformées en quêtes (principales, secondaires, récurrentes, etc.), permettant à l'utilisateur de gagner des XP, monter en niveau, débloquer des rangs, et maintenir une régularité grâce à un système de séries.
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
          <li>Palette rouge (#E53E3E) évoquant l'énergie et l'aventure</li>
          <li>Composants UI modulaires avec badges, barres de progression et effets visuels</li>
          <li>Responsive pour toutes tailles d'écrans (mobile, desktop, web)</li>
          <li>Composants clés : <code>QuestCard</code>, <code>RankBadge</code>, <code>ProfileHeader</code>, <code>CategoryChip</code></li>
        </ul>
        <br />
        <p><strong>Technologies utilisées :</strong></p>
        <ul>
          <li><strong>Flutter</strong> (iOS, Android, Web, Windows, macOS, Linux)</li>
          <li><strong>Riverpod</strong> pour la gestion d'état (prévu)</li>
          <li><strong>Hive</strong> pour le stockage local (prévu)</li>
          <li>Packages : <code>percent_indicator</code>, <code>intl</code></li>
        </ul>
        <br />
        <p><strong>Roadmap :</strong></p>
        <ul>
          <li>Phase 1 : Implémentation des modèles de données, gestion d'état et logiques XP</li>
          <li>Phase 2 : Gamification (succès, effets visuels, défis hebdomadaires)</li>
          <li>Phase 3 : Notifications locales, thème sombre, filtres avancés</li>
          <li>Phase 4 : Fonction export/import, analyse locale, extensions en ligne futures</li>
        </ul>
      </>
    ),
    longDescription_en: (
      <>
        <p>
          <strong>Taskoria</strong> is a mobile and desktop application designed to make task management more engaging through gamification. Tasks are turned into quests (main, side, recurring, etc.), allowing users to earn XP, level up, unlock ranks, and maintain consistency through a streak system.
        </p>
        <div className="mb-6 align-middle items-center text-center w-full">
          <img src={taskoria} className='object-center align-middle text-center max-h-[60vh]' />
        </div>
        <br />
        <p><strong>Key features:</strong></p>
        <ul>
          <li>Custom quests with XP based on type (main, side, urgent…)</li>
          <li>Progression with levels, XP, and a rank system (e.g. Newcomer → TaskMaster)</li>
          <li>Streak system (recurring quests)</li>
          <li>User profile with stats, rank, levels, and achievements</li>
          <li>100% offline interface with local storage via Hive (planned)</li>
        </ul>
        <br />
        <p><strong>Design:</strong></p>
        <ul>
          <li>Red palette (#E53E3E) conveying energy and adventure</li>
          <li>Modular UI components with badges, progress bars, and visual effects</li>
          <li>Responsive across all screen sizes (mobile, desktop, web)</li>
          <li>Key components: <code>QuestCard</code>, <code>RankBadge</code>, <code>ProfileHeader</code>, <code>CategoryChip</code></li>
        </ul>
        <br />
        <p><strong>Tech stack:</strong></p>
        <ul>
          <li><strong>Flutter</strong> (iOS, Android, Web, Windows, macOS, Linux)</li>
          <li><strong>Riverpod</strong> for state management (planned)</li>
          <li><strong>Hive</strong> for local storage (planned)</li>
          <li>Packages: <code>percent_indicator</code>, <code>intl</code></li>
        </ul>
        <br />
        <p><strong>Roadmap:</strong></p>
        <ul>
          <li>Phase 1: Data models, state management, and XP logic implementation</li>
          <li>Phase 2: Gamification (achievements, visual effects, weekly challenges)</li>
          <li>Phase 3: Local notifications, dark theme, advanced filters</li>
          <li>Phase 4: Export/import, local analytics, future online extensions</li>
        </ul>
      </>
    ),
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'UI/UX'],
    category: 'mobile',
    githubUrl: 'https://github.com/OpyrusDevOp/Taskoria',
    featured: true,
    date: '2025-03',
    status: 'in-progress'
  },

  {
    id: '8',
    title: 'Harmonia',
    description: 'Lecteur de musique local moderne et multiplateforme',
    description_en: 'Modern cross-platform local music player',
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
          <li>🖼️ Affichage des pochettes d'album et métadonnées</li>
          <li>🏁 Emballage multiplateforme via Electron Forge</li>
        </ul>
        <br />
        <p><strong>Technologies utilisées :</strong></p>
        <ul>
          <li>Electron (binaire multiplateforme)</li>
          <li>React & TypeScript pour le frontend</li>
          <li>Vite pour le bundling</li>
          <li>TailwindCSS pour le style</li>
          <li>music-metadata pour l'analyse audio locale</li>
          <li>Lucide pour les icônes</li>
        </ul>
        <br />
        <p><strong>Structure du projet :</strong></p>
        <ul>
          <li><code>src/</code> contient les composants, écrans, services et types</li>
          <li><code>main.ts</code> et <code>renderer.ts</code> pour les processus Electron</li>
          <li><code>forge.config.ts</code> pour l'empaquetage multiplateforme</li>
        </ul>
        <br />
        <p>
          Le projet a été conçu avant tout pour offrir une belle expérience utilisateur sur Linux, où les lecteurs de musique modernes sont souvent limités ou datés. Harmonia répond à ce besoin avec une interface soignée et moderne.
        </p>
      </>
    ),
    longDescription_en: (
      <>
        <p>
          <strong>Harmonia</strong> is a modern local music player built with Electron, React, and TypeScript. It lets you scan, organise, and listen to your local music library through a smooth, responsive interface on Linux, Windows, and macOS.
        </p>
        <br />
        <p><strong>Key features:</strong></p>
        <ul>
          <li>🎵 Automatic library scan and management</li>
          <li>📂 Create and manage custom playlists</li>
          <li>🕑 Recently played track history</li>
          <li>🔍 Efficient search, sort, and filtering</li>
          <li>🖥️ Media Session integration (media keys and notifications)</li>
          <li>⚡ Fast interface with React + TailwindCSS</li>
          <li>🖼️ Album artwork and metadata display</li>
          <li>🏁 Cross-platform packaging via Electron Forge</li>
        </ul>
        <br />
        <p><strong>Tech stack:</strong></p>
        <ul>
          <li>Electron (cross-platform binary)</li>
          <li>React & TypeScript for the frontend</li>
          <li>Vite for bundling</li>
          <li>TailwindCSS for styling</li>
          <li>music-metadata for local audio parsing</li>
          <li>Lucide for icons</li>
        </ul>
        <br />
        <p><strong>Project structure:</strong></p>
        <ul>
          <li><code>src/</code> contains components, screens, services, and types</li>
          <li><code>main.ts</code> and <code>renderer.ts</code> for Electron processes</li>
          <li><code>forge.config.ts</code> for cross-platform packaging</li>
        </ul>
        <br />
        <p>
          The project was designed primarily to offer a great user experience on Linux, where modern music players are often limited or outdated. Harmonia addresses this need with a polished, modern interface.
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
    description_en: 'A website for an automotive parts purchasing service',
    longDescription: 'Un site web pour un service d\'achat de pièce automobile',
    longDescription_en: 'A website for an automotive parts purchasing service',
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
    description_en: 'Personal portfolio developed with React and TypeScript',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    githubUrl: 'https://github.com/OpyrusDevOp/portfolio',
    liveUrl: 'https://portfolio-nu-amber-48.vercel.app/',
    featured: false,
    date: '2025-01',
    status: 'in-progress'
  },
];
