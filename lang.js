const LANGS = {
  en: {
    name: "English", flag: "🇬🇧",
    langScreen: { title: "SELECT LANGUAGE", subtitle: "Choose your language to continue" },
    warning: { title: "WARNING!", line1: "This mod is not for children or those who are easily disturbed.", line2: "This mod contains flashing lights and/or imagery that may cause discomfort and/or seizures for those with photosensitive epilepsy.", question: "WOULD YOU LIKE TO PROCEED ANYWAY?", yes: "YES", no: "NO" },
    nav: { home: "HOME", about: "ABOUT", download: "DOWNLOAD", achievements: "ACHIEVEMENTS", updates: "UPDATES", credits: "CREDITS" },
    mobileMenu: { home: "HOME", about: "ABOUT", gallery: "GALLERY", download: "DOWNLOAD", credits: "CREDITS" },
    hero: { sub: "READY FOR ROUND 3?", download: "DOWNLOAD", achievements: "ACHIEVEMENTS" },
    about: { title: "ABOUT THE MOD", p1: "Ready to play once again...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> is a fan-made revival inspired by the iconic 2021 <span class=\"red\">Vs. Sonic.EXE</span> mod. Built to recapture the original's dark atmosphere and nostalgia, this project brings back part of the cancelled content with new reimaginations of its story, songs, and characters.", p3: "With eerie encounters, revamped visuals, and reimagined tracks, <strong>Vs Sonic.EXE (Unofficial)</strong> aims to deliver both a nostalgic and fresh experience for fans of the original mod.", f1: "50+ remade songs", f2: "20+ playable characters / opponents", f3: "Full achievement system with GameJolt trophies", f4: "Unique art & animations for every character", f5: "Multilanguage support" },
    download: { title: "DOWNLOAD", sub: "Available now", gjSpan: "Play & earn trophies", note: "This mod is a fan-made project and is not affiliated with SEGA or the original Sonic.EXE Team." },
    achievements: { title: "ACHIEVEMENTS", gjSub: "Connect your GameJolt account to see your progress", gjUserPlaceholder: "GameJolt Username", gjTokenPlaceholder: "GameJolt Token", gjConnect: "CONNECT", gjHelp: "Get your token at <span class=\"red\">gamejolt.com → Profile Menu → Game Token</span>", gjDisconnect: "DISCONNECT", gjCan: "Can you unlock them all?" },
    updates: { title: "UPDATES", sub: "WHAT'S COMING NEXT", u1: "Our first post-launch update is planned to be <strong>Version 1.5</strong>, bringing the <strong>PARALLAX</strong> cast into the mod alongside the <strong>Christmas Special</strong> songs. We'd love to make this update a reality, and we're excited to continue expanding the experience with even more content.", u2: "Looking even further ahead, <strong>Version 2</strong> is shaping up to be our biggest and most ambitious update yet. It will continue the <strong>Story Mode</strong> campaign with its second chapter, <strong>Overthrow</strong>, where you'll play as <strong>Girlfriend</strong> after she is mysteriously teleported during the Triple Trouble cutscene. Follow her journey as she faces new threats, uncovers hidden truths, and experiences the story from an entirely different perspective. This update will also introduce the remaining members of the <strong>Sound Test</strong> and <strong>File Extensions</strong> cast. Alongside new songs, mechanics, and surprises, our goal is to deliver an experience unlike anything we've created before." },
    comments: { title: "COMMENTS", sub: "Leave a message — it'll appear in our Discord", namePlaceholder: "Your name", msgPlaceholder: "Your comment...", send: "SEND", sending: "Sending...", ok: "Comment sent!", errFields: "Enter your name and a comment.", errConn: "Connection failed. Try again." },
    credits: { title: "CREDITS", sub: "The team behind the mod" },
    footer: { legal1: "Fan-made FNF mod. Not affiliated with SEGA nor the Original Sonic.exe Team.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "GOD KILLER", desc: "Beat the Main Week" },
      lordx: { title: "DON'T COME BACK", desc: "Find and beat Lord X" },
      majin: { title: "FUN IS INFINITE", desc: "Find and beat Majin and Mazin" },
      tailsdoll: { title: "Did you feel the sunshine?", desc: "Find and beat Tails Doll" },
      fleetway: { title: "Chaos Controlled!", desc: "Find and beat Fleetway" },
      exe: { title: "Back in the cage you go!", desc: "Find and beat EXE" },
      sanic: { title: "Would you do it all again?", desc: "Find and beat Sanic" },
      needlemouse: { title: "Could you repeat that?", desc: "Find and beat Needlemouse" },
      chaotix: { title: "It wasn't Tails...", desc: "Find and beat Chaotix" },
      scorched: { title: "He was replaced", desc: "Find and beat Scorched" },
      demogri: { title: "Uh Oh!", desc: "Find and beat Demogri & Griatos" },
      bratwurst: { title: "Where's the bonus fight?", desc: "Find and beat Bratwurst" },
      omw: { title: "Do You Know Da Wae?", desc: "Find and beat OMW.EXE" },
      devoid: { title: "The hedgehog of the night.", desc: "Find and beat Devoid" },
      rerun: { title: "Like the FNF Mod?!", desc: "Find and beat Re-Run" },
      soink: { title: "Adobe please...", desc: "Find and beat Soink.FLA" },
      ugly: { title: "Uh... ¿Meow?", desc: "Find and beat Movie Sonic" },
      sunky: { title: "Left, up, down... right?", desc: "Find and beat Sunky" },
      fatal: { title: "A FATAL Experience", desc: "Grant Fatal Error access to your game" },
      starved: { title: "One last meal", desc: "Find and beat Starved Eggman" },
      crazy: { title: "YOU WEREN'T SONIC", desc: "Beat Psycho Tails" },
      coldsteel: { title: "nothing personel kid", desc: "Find and beat Coldsteel" },
      genesys: { title: "BF HAS PASSED", desc: "Find and beat Genesys Eggman" },
      educator: { title: "Welcome to my SchoolHouse!", desc: "Find and beat Educator" },
      fileextensions: { title: "TOO MANY SONICS", desc: "Defeat all File Extensions characters" },
      rings: { title: "Allergic to Rings", desc: "Beat Triple Trouble without collecting any ring" },
      norings: { title: "I Show Speed!", desc: "Beat Manual Blast without pressing any ring" },
      tripledeaths: { title: "Some Trouble Going Forward?", desc: "Check all Triple Trouble deaths" },
      dagarden: { title: "MUSIC ENJOYER!", desc: "Complete the DA Garden Song Library" },
      parallax: { title: "The other side of the ring", desc: "Enter the PARALLAX Menu" },
      secondary: { title: "The hell is happening...", desc: "Find all secondary codes" },
      sega: { title: "MESSAGE RECEIVED", desc: "Get a Notification from SEGA Enterprise" },
      popup: { title: "HAVE SOME ORGANIZATION!", desc: "Beat Fatality without closing any pop-up" },
      super: { title: "Super Player!", desc: "Get A or higher rank in 5 songs" },
      hyper: { title: "Hyper Player!!", desc: "Get a P rank in any song" },
      die: { title: "You are just bad…", desc: "Get every game over" },
      credits: { title: "Source Investigator", desc: "Watch the mod's credits" },
      finale: { title: "Wanna touch some grass?", desc: "Beat the entire mod" }
    }
  },
  es: {
    name: "Español", flag: "🇪🇸",
    langScreen: { title: "SELECCIONA IDIOMA", subtitle: "Elige tu idioma para continuar" },
    warning: { title: "¡ADVERTENCIA!", line1: "Este mod no es apto para niños ni para personas sensibles.", line2: "Este mod contiene luces intermitentes y/o imágenes que pueden causar malestar o convulsiones en personas con epilepsia fotosensible.", question: "¿DESEAS CONTINUAR DE TODOS MODOS?", yes: "SÍ", no: "NO" },
    nav: { home: "INICIO", about: "ACERCA DE", download: "DESCARGAR", achievements: "LOGROS", updates: "ACTUALIZACIONES", credits: "CRÉDITOS" },
    mobileMenu: { home: "INICIO", about: "ACERCA DE", gallery: "GALERÍA", download: "DESCARGAR", credits: "CRÉDITOS" },
    hero: { sub: "¿LISTO PARA EL TERCER ROUND?", download: "DESCARGAR", achievements: "LOGROS" },
    about: { title: "ACERCA DEL MOD", p1: "¿Listo para jugar una vez más...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> es un proyecto creado por fans inspirado en el icónico mod <span class=\"red\">Vs. Sonic.EXE</span> de 2021. Creado para capturar la oscura atmósfera y la nostalgia del original, este proyecto recupera parte del contenido cancelado con nuevas reinterpretaciones de su historia, canciones y personajes.", p3: "Con encuentros espeluznantes, gráficos renovados y pistas musicales reimaginadas, <strong>Vs Sonic.EXE (Unofficial)</strong> busca ofrecer una experiencia tanto nostálgica como fresca para los fans del mod original.", f1: "Más de 50 canciones recreadas", f2: "Más de 20 personajes jugables y oponentes", f3: "Sistema completo de logros con trofeos de GameJolt", f4: "Arte y animaciones únicas para cada personaje", f5: "Soporte multilenguaje" },
    download: { title: "DESCARGAR", sub: "Ya disponible", gjSpan: "Juega y gana trofeos", note: "Este mod es un proyecto hecho por fans y no está afiliado con SEGA ni con el equipo original de Sonic.EXE." },
    achievements: { title: "LOGROS", gjSub: "Conecta tu cuenta de GameJolt para guardar tu progreso", gjUserPlaceholder: "Usuario de GameJolt", gjTokenPlaceholder: "Token de GameJolt", gjConnect: "CONECTAR", gjHelp: "Obtén tu token en <span class=\"red\">gamejolt.com → Menú de Perfil → Game Token</span>", gjDisconnect: "DESCONECTAR", gjCan: "¿Podrás desbloquearlos todos?" },
    updates: { title: "ACTUALIZACIONES", sub: "PRÓXIMAS NOVEDADES", u1: "Nuestra primera actualización post-lanzamiento será la <strong>Versión 1.5</strong>, que añadirá al elenco de <strong>PARALLAX</strong> al mod junto con las canciones del <strong>Especial Navideño</strong>. Nos encantaría hacer realidad esta actualización y estamos emocionados por seguir expandiendo la experiencia con aún más contenido.", u2: "Mirando más a futuro, la <strong>Versión 2</strong> se perfila como nuestra actualización más grande y ambiciosa hasta la fecha. Continuará la campaña del <strong>Modo Historia</strong> con su segundo capítulo, <strong>Overthrow</strong>, donde jugarás como <strong>Girlfriend</strong> tras ser misteriosamente teletransportada durante la cinemática de Triple Trouble. Sigue su viaje mientras se enfrenta a nuevas amenazas, descubre verdades ocultas y vive la historia desde una perspectiva completamente diferente. Esta actualización también introducirá a los miembros restantes del elenco de <strong>Sound Test</strong> y <strong>File Extensions</strong>. Con nuevas canciones, mecánicas y sorpresas, nuestro objetivo es ofrecer una experiencia como ninguna otra que hayamos creado antes." },
    comments: { title: "COMENTARIOS", sub: "Deja un mensaje — aparecerá en nuestro servidor de Discord", namePlaceholder: "Tu nombre", msgPlaceholder: "Tu comentario...", send: "ENVIAR", sending: "Enviando...", ok: "¡Comentario enviado!", errFields: "Ingresa tu nombre y un comentario.", errConn: "Error de conexión. Inténtalo de nuevo." },
    credits: { title: "CRÉDITOS", sub: "El equipo de desarrollo" },
    footer: { legal1: "Mod de FNF creado por fans. No afiliado a SEGA ni al equipo original de Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "ASESINO DE DIOSES", desc: "Supera la Semana Principal" },
      lordx: { title: "NO VUELVAS", desc: "Encuentra y vence a Lord X" },
      majin: { title: "LA DIVERSIÓN FUE INFINITA", desc: "Encuentra y vence a Majin y Mazin" },
      tailsdoll: { title: "¿Sentiste el brillo del sol?", desc: "Encuentra y vence a Tails Doll" },
      fleetway: { title: "¡Caos Controlado!", desc: "Encuentra y vence a Fleetway" },
      exe: { title: "¡Vuelve a tu jaula!", desc: "Encuentra y vence a EXE" },
      sanic: { title: "¿Lo harías todo de nuevo?", desc: "Encuentra y vence a Sanic" },
      needlemouse: { title: "¿Podrías repetir eso?", desc: "Encuentra y vence a Needlemouse" },
      chaotix: { title: "No era Tails...", desc: "Encuentra y vence a Chaotix" },
      scorched: { title: "Fue reemplazado", desc: "Encuentra y vence a Scorched" },
      demogri: { title: "¡Uh Oh!", desc: "Encuentra y vence a Demogri y Griatos" },
      bratwurst: { title: "¿Dónde está la pelea extra?", desc: "Encuentra y vence a Bratwurst" },
      omw: { title: "Do You Know Da Wae?", desc: "Encuentra y vence a OMW.EXE" },
      devoid: { title: "El erizo de la noche.", desc: "Encuentra y vence a Devoid" },
      rerun: { title: "¡¿Como el mod de FNF?!", desc: "Encuentra y vence a Re-Run" },
      soink: { title: "Adobe, por favor...", desc: "Encuentra y vence a Soink.FLA" },
      ugly: { title: "Uh... ¿Miau?", desc: "Encuentra y vence a Movie Sonic" },
      sunky: { title: "Izquierda, arriba, abajo... ¿derecha?", desc: "Encuentra y vence a Sunky" },
      fatal: { title: "Una Experiencia FATAL", desc: "Permite que Fatal Error acceda a tu juego" },
      starved: { title: "Una última comida", desc: "Encuentra y vence a Starved Eggman" },
      crazy: { title: "TÚ NO ERAS SONIC", desc: "Vence a Psycho Tails" },
      coldsteel: { title: "no es personal niño", desc: "Encuentra y vence a Coldsteel" },
      genesys: { title: "BF HA MUERTO", desc: "Encuentra y vence a Genesys Eggman" },
      educator: { title: "¡Bienvenido a mi escuela!", desc: "Encuentra y vence a Educator" },
      fileextensions: { title: "DEMASIADOS SONICS", desc: "Derrota a todos los personajes de File Extensions" },
      rings: { title: "Alérgico a los anillos", desc: "Supera Triple Trouble sin recoger ningún anillo" },
      norings: { title: "¡Soy la velocidad!", desc: "Supera Manual Blast sin presionar ningún anillo" },
      tripledeaths: { title: "¿Problemas para avanzar?", desc: "Mira todas las muertes en Triple Trouble" },
      dagarden: { title: "¡AMANTE DE LA MÚSICA!", desc: "Completa la biblioteca de canciones de DA Garden" },
      parallax: { title: "El otro lado del anillo", desc: "Entra al Menú PARALLAX" },
      secondary: { title: "Qué demonios está pasando...", desc: "Encuentra todos los códigos secretos" },
      sega: { title: "MENSAJE RECIBIDO", desc: "Recibe una notificación de SEGA Enterprise" },
      popup: { title: "¡UN POCO DE ORDEN!", desc: "Supera Fatality sin cerrar ninguna ventana emergente" },
      super: { title: "¡Súper Jugador!", desc: "Consigue rango A o superior en 5 canciones" },
      hyper: { title: "¡Híper Jugador!!", desc: "Consigue rango P en cualquier canción" },
      die: { title: "Simplemente eres malo...", desc: "Consigue cada Game Over" },
      credits: { title: "Investigador de Códigos", desc: "Mira los créditos del mod" },
      finale: { title: "¿Quieres tocar un poco de pasto?", desc: "Supera todo el mod" }
    }
  },
  pt: {
    name: "Português", flag: "🇧🇷",
    langScreen: { title: "SELECIONE O IDIOMA", subtitle: "Escolha seu idioma para continuar" },
    warning: { title: "AVISO!", line1: "Este mod não é recomendado para crianças ou pessoas sensíveis.", line2: "Este mod contém luzes piscantes e/ou imagens que podem causar desconforto ou convulsões em pessoas com epilepsia fotossensível.", question: "DESEJA CONTINUAR MESMO ASSIM?", yes: "SIM", no: "NÃO" },
    nav: { home: "INÍCIO", about: "SOBRE", download: "BAIXAR", achievements: "CONQUISTAS", updates: "ATUALIZAÇÕES", credits: "CRÉDITOS" },
    mobileMenu: { home: "INÍCIO", about: "SOBRE", gallery: "GALERIA", download: "BAIXAR", credits: "CRÉDITOS" },
    hero: { sub: "PRONTO PARA O ROUND 3?", download: "BAIXAR", achievements: "CONQUISTAS" },
    about: { title: "SOBRE O MOD", p1: "Pronto para jogar mais uma vez...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> é um projeto feito por fãs inspirado no icônico mod <span class=\"red\">Vs. Sonic.EXE</span> de 2021. Criado para resgatar a atmosfera sombria e a nostalgia do original, este projeto traz de volta parte do conteúdo cancelado com novas reinterpretações de sua história, músicas e personagens.", p3: "Com encontros sinistros, visuais reformulados e faixas reimaginadas, <strong>Vs Sonic.EXE (Unofficial)</strong> busca oferecer uma experiência nostálgica e inovadora para os fãs do mod original.", f1: "Mais de 50 músicas recriadas", f2: "Mais de 20 personagens jogáveis e oponentes", f3: "Sistema completo de conquistas com troféus do GameJolt", f4: "Arte e animações únicas para cada personagem", f5: "Suporte a múltiplos idiomas" },
    download: { title: "BAIXAR", sub: "Disponível agora", gjSpan: "Jogue e ganhe troféus", note: "Este mod é um projeto feito por fãs e não tem afiliação com a SEGA ou com a equipe original do Sonic.EXE." },
    achievements: { title: "CONQUISTAS", gjSub: "Conecte sua conta do GameJolt para salvar seu progresso", gjUserPlaceholder: "Nome de usuário do GameJolt", gjTokenPlaceholder: "Token do GameJolt", gjConnect: "CONECTAR", gjHelp: "Pegue seu token em <span class=\"red\">gamejolt.com → Menu do Perfil → Game Token</span>", gjDisconnect: "DESCONECTAR", gjCan: "Você consegue desbloquear todas?" },
    updates: { title: "ATUALIZAÇÕES", sub: "O QUE VEM POR AÍ", u1: "Nossa primeira atualização pós-lançamento será a <strong>Versão 1.5</strong>, trazendo o elenco de <strong>PARALLAX</strong> para o mod junto com as músicas do <strong>Especial de Natal</strong>. Gostaríamos muito de tornar essa atualização realidade e estamos animados para continuar expandindo a experiência com ainda mais conteúdo.", u2: "Olhando ainda mais à frente, a <strong>Versão 2</strong> está se tornando nossa maior e mais ambiciosa atualização até agora. Ela continuará a campanha do <strong>Modo História</strong> com o seu segundo capítulo, <strong>Overthrow</strong>, onde você jogará como <strong>Girlfriend</strong> após ela ser misteriosamente teletransportada durante a cutscene de Triple Trouble. Acompanhe sua jornada enquanto ela enfrenta novas ameaças, descobre verdades ocultas e vivencia a história de uma perspectiva completamente diferente. Esta atualização também apresentará os membros restantes do elenco de <strong>Sound Test</strong> e <strong>File Extensions</strong>. Com novas músicas, mecânicas e surpresas, nosso objetivo é oferecer uma experiência diferente de tudo que já criamos." },
    comments: { title: "COMENTÁRIOS", sub: "Deixe uma mensagem — ela aparecerá no nosso servidor do Discord", namePlaceholder: "Seu nome", msgPlaceholder: "Seu comentário...", send: "ENVIAR", sending: "Enviando...", ok: "Comentário enviado!", errFields: "Digite seu nome e um comentário.", errConn: "Falha na conexão. Tente novamente." },
    credits: { title: "CRÉDITOS", sub: "A equipe de desenvolvimento" },
    footer: { legal1: "Mod de FNF feito por fãs. Não afiliado à SEGA nem à equipe original do Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "MATADOR DE DEUSES", desc: "Zere a Semana Principal" },
      lordx: { title: "NÃO VOLTE", desc: "Encontre e derrote o Lord X" },
      majin: { title: "A DIVERSÃO FOI INFINITA", desc: "Encontre e derrote Majin e Mazin" },
      tailsdoll: { title: "Você sentiu o brilho do sol?", desc: "Encontre e derrote Tails Doll" },
      fleetway: { title: "Caos Controlado!", desc: "Encontre e derrote Fleetway" },
      exe: { title: "De volta pra jaula!", desc: "Encontre e derrote EXE" },
      sanic: { title: "Você faria tudo de novo?", desc: "Encontre e derrote Sanic" },
      needlemouse: { title: "Poderia repetir?", desc: "Encontre e derrote Needlemouse" },
      chaotix: { title: "Não era o Tails...", desc: "Encontre e derrote Chaotix" },
      scorched: { title: "Ele foi substituído", desc: "Encontre e derrote Scorched" },
      demogri: { title: "Uh Oh!", desc: "Encontre e derrote Demogri e Griatos" },
      bratwurst: { title: "Onde está a luta bônus?", desc: "Encontre e derrote Bratwurst" },
      omw: { title: "Do You Know Da Wae?", desc: "Encontre e derrote OMW.EXE" },
      devoid: { title: "O ouriço da noite.", desc: "Encontre e derrote Devoid" },
      rerun: { title: "Igual ao mod de FNF?!", desc: "Encontre e derrote Re-Run" },
      soink: { title: "Adobe por favor...", desc: "Encontre e derrote Soink.FLA" },
      ugly: { title: "Uh... Miau?", desc: "Encontre e derrote o Movie Sonic" },
      sunky: { title: "Esquerda, cima, baixo... direita?", desc: "Encontre e derrote Sunky" },
      fatal: { title: "Uma Experiência FATAL", desc: "Dê acesso ao Fatal Error no seu jogo" },
      starved: { title: "Uma última refeição", desc: "Encontre e derrote Starved Eggman" },
      crazy: { title: "VOCÊ NÃO ERA O SONIC", desc: "Derrote o Psycho Tails" },
      coldsteel: { title: "nada pessoal pirralho", desc: "Encontre e derrote Coldsteel" },
      genesys: { title: "BF PASSOU", desc: "Encontre e derrote Genesys Eggman" },
      educator: { title: "Bem-vindo à minha escola!", desc: "Encontre e derrote Educator" },
      fileextensions: { title: "SONICS DEMAIS", desc: "Derrote todos os personagens de File Extensions" },
      rings: { title: "Alérgico a anéis", desc: "Passe da Triple Trouble sem pegar nenhum anel" },
      norings: { title: "Eu sou a velocidade!", desc: "Passe da Manual Blast sem pressionar nenhum anel" },
      tripledeaths: { title: "Problemas para avançar?", desc: "Veja todas as mortes na Triple Trouble" },
      dagarden: { title: "AMANTE DE MÚSICA!", desc: "Complete a biblioteca de músicas do DA Garden" },
      parallax: { title: "O outro lado do anel", desc: "Entre no Menu PARALLAX" },
      secondary: { title: "Que diabos está acontecendo...", desc: "Encontre todos os códigos secretos" },
      sega: { title: "MENSAGEM RECEBIDA", desc: "Receba uma notificação da SEGA Enterprise" },
      popup: { title: "TENHA MAIS ORGANIZAÇÃO!", desc: "Passe da Fatality sem fechar nenhum pop-up" },
      super: { title: "Super Jogador!", desc: "Consiga Rank A ou superior em 5 músicas" },
      hyper: { title: "Hiper Jogador!!", desc: "Consiga Rank P em qualquer música" },
      die: { title: "Você é simplesmente ruim...", desc: "Pegue todos os Game Overs" },
      credits: { title: "Investigador de Códigos", desc: "Assista aos créditos do mod" },
      finale: { title: "Quer tocar um pouco de grama?", desc: "Zere o mod inteiro" }
    }
  },
  fr: {
    name: "Français", flag: "🇫🇷",
    langScreen: { title: "CHOISIR LA LANGUE", subtitle: "Choisissez votre langue pour continuer" },
    warning: { title: "AVERTISSEMENT !", line1: "Ce mod n'est pas destiné aux enfants ni aux personnes sensibles.", line2: "Ce mod contient des lumières clignotantes et/ou des images pouvant provoquer un inconfort ou des crises chez les personnes souffrant d'épilepsie photosensible.", question: "VOULEZ-VOUS VRAIMENT CONTINUER ?", yes: "OUI", no: "NON" },
    nav: { home: "ACCUEIL", about: "À PROPOS", download: "TÉLÉCHARGER", achievements: "SUCCÈS", updates: "MISES À JOUR", credits: "CRÉDITS" },
    mobileMenu: { home: "ACCUEIL", about: "À PROPOS", gallery: "GALERIE", download: "TÉLÉCHARGER", credits: "CRÉDITS" },
    hero: { sub: "PRÊT POUR LE ROUND 3 ?", download: "TÉLÉCHARGER", achievements: "SUCCÈS" },
    about: { title: "À PROPOS DU MOD", p1: "Prêt à jouer encore une fois... ?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> est un projet créé par des fans, inspiré du célèbre mod <span class=\"red\">Vs. Sonic.EXE</span> de 2021. Conçu pour retrouver l'atmosphère sombre et nostalgique de l'original, ce projet ressuscite une partie du contenu annulé avec de nouvelles réinterprétations de l'histoire, des musiques et des personnages.", p3: "Avec des affrontements terrifiants, des visuels repensés et des pistes remasterisées, <strong>Vs Sonic.EXE (Unofficial)</strong> vise à offrir une expérience à la fois nostalgique et inédite aux fans du mod original.", f1: "Plus de 50 musiques recréées", f2: "Plus de 20 personnages jouables et adversaires", f3: "Système complet de succès avec trophées GameJolt", f4: "Art et animations uniques pour chaque personnage", f5: "Support multilingue" },
    download: { title: "TÉLÉCHARGER", sub: "Disponible maintenant", gjSpan: "Jouez et gagnez des trophées", note: "Ce mod est un projet réalisé par des fans et n'est affilié ni à SEGA ni à l'équipe originale de Sonic.EXE." },
    achievements: { title: "SUCCÈS", gjSub: "Connectez votre compte GameJolt pour sauvegarder votre progression", gjUserPlaceholder: "Nom d'utilisateur GameJolt", gjTokenPlaceholder: "Token GameJolt", gjConnect: "CONNECTER", gjHelp: "Obtenez votre token sur <span class=\"red\">gamejolt.com → Menu Profil → Game Token</span>", gjDisconnect: "DÉCONNECTER", gjCan: "Serez-vous capable de tous les débloquer ?" },
    updates: { title: "MISES À JOUR", sub: "PROCHAINEMENT", u1: "Notre première mise à jour post-lancement, la <strong>Version 1.5</strong>, introduira les personnages de <strong>PARALLAX</strong> dans le mod ainsi que les musiques du <strong>Spécial Noël</strong>. Nous espérons concrétiser cette mise à jour et sommes impatients de continuer à enrichir l'expérience avec encore plus de contenu.", u2: "En regardant plus loin, la <strong>Version 2</strong> s'annonce comme notre mise à jour la plus ambitieuse à ce jour. Elle poursuivra la campagne du <strong>Mode Histoire</strong> avec son deuxième chapitre, <strong>Overthrow</strong>, où vous incarnerez <strong>Girlfriend</strong> après sa mystérieuse téléportation lors de la cinématique de Triple Trouble. Suivez son périple alors qu'elle fait face à de nouvelles menaces, découvre des vérités cachées et vit l'histoire d'une toute autre perspective. Cette mise à jour introduira également les membres restants de <strong>Sound Test</strong> et <strong>File Extensions</strong>. Avec de nouvelles musiques, mécaniques et surprises, notre but est de vous offrir une expérience sans précédent." },
    comments: { title: "COMMENTAIRES", sub: "Laissez un message — il apparaîtra sur notre serveur Discord", namePlaceholder: "Votre nom", msgPlaceholder: "Votre commentaire...", send: "ENVOYER", sending: "Envoi en cours...", ok: "Commentaire envoyé !", errFields: "Veuillez entrer votre nom et un commentaire.", errConn: "Échec de connexion. Veuillez réessayer." },
    credits: { title: "CRÉDITS", sub: "L'équipe de développement" },
    footer: { legal1: "Mod FNF créé par des fans. Non affilié à SEGA ni à l'équipe originale de Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "TUEUR DE DIEUX", desc: "Terminez la Semaine Principale" },
      lordx: { title: "NE REVIENS PAS", desc: "Trouvez et battez Lord X" },
      majin: { title: "LE FUN ÉTAIT INFINI", desc: "Trouvez et battez Majin et Mazin" },
      tailsdoll: { title: "As-tu senti les rayons du soleil ?", desc: "Trouvez et battez Tails Doll" },
      fleetway: { title: "Chaos Contrôlé !", desc: "Trouvez et battez Fleetway" },
      exe: { title: "Retourne dans ta cage !", desc: "Trouvez et battez EXE" },
      sanic: { title: "Le ferais-tu encore ?", desc: "Trouvez et battez Sanic" },
      needlemouse: { title: "Tu peux répéter ?", desc: "Trouvez et battez Needlemouse" },
      chaotix: { title: "Ce n'était pas Tails...", desc: "Trouvez et battez Chaotix" },
      scorched: { title: "Il a été remplacé", desc: "Trouvez et battez Scorched" },
      demogri: { title: "Oups !", desc: "Trouvez et battez Demogri & Griatos" },
      bratwurst: { title: "Où est le combat bonus ?", desc: "Trouvez et battez Bratwurst" },
      omw: { title: "Do You Know Da Wae?", desc: "Trouvez et battez OMW.EXE" },
      devoid: { title: "Le hérisson de la nuit.", desc: "Trouvez et battez Devoid" },
      rerun: { title: "Comme le mod FNF ?!", desc: "Trouvez et battez Re-Run" },
      soink: { title: "Adobe s'il te plaît...", desc: "Trouvez et battez Soink.FLA" },
      ugly: { title: "Euh... Miaou ?", desc: "Trouvez et battez Movie Sonic" },
      sunky: { title: "Gauche, haut, bas... droite ?", desc: "Trouvez et battez Sunky" },
      fatal: { title: "Une Expérience FATALE", desc: "Donnez à Fatal Error l'accès à votre jeu" },
      starved: { title: "Un dernier repas", desc: "Trouvez et battez Starved Eggman" },
      crazy: { title: "TU N'ÉTAIS PAS SONIC", desc: "Battez Psycho Tails" },
      coldsteel: { title: "rien de personnel, gamin", desc: "Trouvez et battez Coldsteel" },
      genesys: { title: "BF EST PASSÉ", desc: "Trouvez et battez Genesys Eggman" },
      educator: { title: "Bienvenue dans mon école !", desc: "Trouvez et battez Educator" },
      fileextensions: { title: "TROP DE SONICS", desc: "Battez tous les personnages de File Extensions" },
      rings: { title: "Allergique aux Anneaux", desc: "Terminez Triple Trouble sans ramasser un seul anneau" },
      norings: { title: "Je suis la Vitesse !", desc: "Terminez Manual Blast sans presser un seul anneau" },
      tripledeaths: { title: "Des problèmes pour avancer ?", desc: "Voyez toutes les morts de Triple Trouble" },
      dagarden: { title: "AMATEUR DE MUSIQUE !", desc: "Complétez la bibliothèque musicale du DA Garden" },
      parallax: { title: "L'autre côté de l'anneau", desc: "Entrez dans le menu PARALLAX" },
      secondary: { title: "C'est quoi ce bordel...", desc: "Trouvez tous les codes secrets" },
      sega: { title: "MESSAGE REÇU", desc: "Recevez une notification de SEGA Enterprise" },
      popup: { title: "UN PEU D'ORGANISATION !", desc: "Terminez Fatality sans fermer aucune pop-up" },
      super: { title: "Super Joueur !", desc: "Obtenez le rang A ou mieux dans 5 chansons" },
      hyper: { title: "Hyper Joueur !!", desc: "Obtenez le rang P dans n'importe quelle chanson" },
      die: { title: "Tu es juste nul...", desc: "Obtenez chaque Game Over" },
      credits: { title: "Enquêteur Source", desc: "Regardez les crédits du mod" },
      finale: { title: "Envie de toucher de l'herbe ?", desc: "Terminez tout le mod" }
    }
  },
  uz: {
    name: "O'zbekcha", flag: "🇺🇿",
    langScreen: { title: "TIL TANLANG", subtitle: "Davom etish uchun tilni tanlang" },
    warning: { title: "OGOHLANTIRISH!", line1: "Ushbu mod bolalar yoki ko'ngli bo'sh insonlar uchun mo'ljallanmagan.", line2: "Ushbu modda miltillovchi chiroqlar va/yoki fotosensitiv epilepsiyasi bor insonlarda noqulaylik yoki tutqanoq keltirib chiqarishi mumkin bo'lgan tasvirlar mavjud.", question: "SHUNDA HAM DAVOM ETISHNI XOHLAYSIZMI?", yes: "HA", no: "YO'Q" },
    nav: { home: "BOSH SAHIFA", about: "HAQIDA", download: "YUKLAB OLISH", achievements: "YUTUQLAR", updates: "YANGILANISHLAR", credits: "MUALLIFLAR" },
    mobileMenu: { home: "BOSH SAHIFA", about: "HAQIDA", gallery: "GALEREYA", download: "YUKLAB OLISH", credits: "MUALLIFLAR" },
    hero: { sub: "3-RAUNDGA TAYYORMISIZ?", download: "YUKLAB OLISH", achievements: "YUTUQLAR" },
    about: { title: "MOD HAQIDA", p1: "Yana bir bor o'ynashga tayyormisiz...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> — bu 2021-yildagi mashhur <span class=\"red\">Vs. Sonic.EXE</span> modidan ilhomlangan va muxlislar tomonidan qayta tiklangan loyiha. Asl nusxaning qorong'u atmosferasi va nostalgiyasini qaytarish maqsadida yaratilgan ushbu loyiha, bekor qilingan kontentning bir qismini hikoya, qo'shiqlar va qahramonlarning yangicha talqinlari bilan birga qaytaradi.", p3: "Qo'rqinchli to'qnashuvlar, yangilangan vizual effektlar va qayta ishlangan treklar yordamida <strong>Vs Sonic.EXE (Unofficial)</strong> original mod muxlislariga ham nostaljik, ham butunlay yangi tajriba taqdim etishni maqsad qilgan.", f1: "50 dan ortiq qayta ishlangan qo'shiqlar", f2: "20 dan ortiq o'ynaladigan personajlar / raqiblar", f3: "GameJolt trofeylari bilan to'liq yutuqlar tizimi", f4: "Har bir personaj uchun noyob art va animatsiyalar", f5: "Ko'p tilli qo'llab-quvvatlash" },
    download: { title: "YUKLAB OLISH", sub: "Hozir mavjud", gjSpan: "O'ynang va trofeylari yutib oling", note: "Bu mod muxlislar tomonidan yaratilgan loyiha bo'lib, SEGA yoki asl Sonic.EXE jamoasiga tegishli emas." },
    achievements: { title: "YUTUQLAR", gjSub: "Rivojingizni saqlash uchun GameJolt hisobingizni ulang", gjUserPlaceholder: "GameJolt foydalanuvchi nomi", gjTokenPlaceholder: "GameJolt tokeni", gjConnect: "ULANISH", gjHelp: "<span class=\"red\">gamejolt.com → Profil menyusi → Game Token</span> orqali tokeningizni oling", gjDisconnect: "UZISH", gjCan: "Hammasini ocha olasizmi?" },
    updates: { title: "YANGILANISHLAR", sub: "KELGUSI REJALAR", u1: "Relizdan keyingi birinchi yangilanishimiz <strong>1.5-versiya</strong> bo'lishi rejalashtirilgan. U modga <strong>Maxsus Rojdestvo</strong> qo'shiqlari bilan birga <strong>PARALLAX</strong> qahramonlarini olib keladi. Biz bu yangilanishni amalga oshirishni intiqlik bilan kutyapmiz va o'yinni yanada ko'proq kontent bilan kengaytirishdan xursandmiz.", u2: "Uzoqroq kelajakka nazar tashlasak, <strong>2-versiya</strong> bizning eng yirik va ulkan yangilanishimiz bo'lishi kutilmoqda. U <strong>Hikoya rejimi</strong> kampaniyasini ikkinchi bob — <strong>Overthrow</strong> bilan davom ettiradi. Unda siz Triple Trouble kat-sahnasi davomida sirli tarzda teleportatsiya qilingan <strong>Girlfriend</strong> sifatida o'ynaysiz. Uning yangi tahdidlarga duch kelishi, yashirin haqiqatlarni ochishi va voqealarni butunlay boshqa burchakdan boshdan kechirishiga guvoh bo'ling. Ushbu yangilanish, shuningdek, <strong>Sound Test</strong> va <strong>File Extensions</strong> tarkibidagi qolgan qahramonlarni ham taqdim etadi. Yangi qo'shiqlar, mexanikalar va kutilmagan hodisalar orqali maqsadimiz – avval hech qachon guvoh bo'lmagan tajribangizni taqdim etishdir." },
    comments: { title: "IZOHLAR", sub: "Xabar qoldiring — u Discord serverimizda paydo bo'ladi", namePlaceholder: "Ismingiz", msgPlaceholder: "Izohingiz...", send: "YUBORISH", sending: "Yuborilmoqda...", ok: "Izoh yuborildi!", errFields: "Ism va izohingizni kiriting.", errConn: "Ulanishda xatolik. Qayta urinib ko'ring." },
    credits: { title: "MUALLIFLAR", sub: "Unofficial jamoasi" },
    footer: { legal1: "Muxlislar tomonidan yaratilgan FNF mod. SEGA yoki asl Sonic.exe jamoasiga tegishli emas.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "XUDOLAR QOTILI", desc: "Asosiy haftani yakunlang" },
      lordx: { title: "QAYTIB KELMA", desc: "Lord X ni toping va mag'lub eting" },
      majin: { title: "QUVONCH CHEKSIZ", desc: "Majin va Mazin ni toping va mag'lub eting" },
      tailsdoll: { title: "Quyosh nurlarini his qilyapsanmi?", desc: "Tails Doll ni toping va mag'lub eting" },
      fleetway: { title: "Xaos nazorat ostida!", desc: "Fleetway ni toping va mag'lub eting" },
      exe: { title: "Qafasga qayt!", desc: "EXE ni toping va mag'lub eting" },
      sanic: { title: "Buni yana qila olarmiding?", desc: "Sanic ni toping va mag'lub eting" },
      needlemouse: { title: "Qaytarib yubora olasangmi?", desc: "Needlemouse ni toping va mag'lub eting" },
      chaotix: { title: "Bu Tails emas edi...", desc: "Chaotix ni toping va mag'lub eting" },
      scorched: { title: "U almashtirildi", desc: "Scorched ni toping va mag'lub eting" },
      demogri: { title: "Voy-bo'!", desc: "Demogri va Griatos ni toping va mag'lub eting" },
      bratwurst: { title: "Bonus jang qayerda?", desc: "Bratwurst ni toping va mag'lub eting" },
      omw: { title: "Do You Know Da Wae?", desc: "OMW.EXE ni toping va mag'lub eting" },
      devoid: { title: "Tungi tipratikan.", desc: "Devoid ni toping va mag'lub eting" },
      rerun: { title: "Xuddi FNF modidek?!", desc: "Re-Run ni toping va mag'lub eting" },
      soink: { title: "Adobe iltimos...", desc: "Soink.FLA ni toping va mag'lub eting" },
      ugly: { title: "Uhm... Miyov?", desc: "Movie Sonic ni toping va mag'lub eting" },
      sunky: { title: "Chapga, tepaga, pastga... o'ngga?", desc: "Sunky ni toping va mag'lub eting" },
      fatal: { title: "FATAL Tajriba", desc: "Fatal Error ga o'yiningizga kirishga ruxsat bering" },
      starved: { title: "So'nggi ovqat", desc: "Starved Eggman ni toping va mag'lub eting" },
      crazy: { title: "SEN SONIK EMASSAN", desc: "Psycho Tails ni mag'lub eting" },
      coldsteel: { title: "shaxsiy xusumat yo'q bolakay", desc: "Coldsteel ni toping va mag'lub eting" },
      genesys: { title: "BF O'LDI", desc: "Genesys Eggman ni toping va mag'lub eting" },
      educator: { title: "Mening maktabimga xush kelibsiz!", desc: "Educator ni toping va mag'lub eting" },
      fileextensions: { title: "SONIKLAR JUDA KO'P", desc: "Barcha File Extensions qahramonlarini mag'lub eting" },
      rings: { title: "Uzuklarga allergiya", desc: "Triple Trouble ni bitta ham uzuk yig'masdan yakunlang" },
      norings: { title: "Men tezlikni ko'rsataman!", desc: "Manual Blast ni uzuklarni bosmasdan yakunlang" },
      tripledeaths: { title: "Oldinga borishda muammolar bormi?", desc: "Triple Trouble dagi barcha o'limlarni ko'ring" },
      dagarden: { title: "MUSIQA SHAYDOSI!", desc: "DA Garden qo'shiqlar kutubxonasini to'ldiring" },
      parallax: { title: "Uzukning narigi tomoni", desc: "PARALLAX menyusiga kiring" },
      secondary: { title: "Nimalar bo'lyapti o'zi...", desc: "Barcha maxfiy kodlarni toping" },
      sega: { title: "XABAR QABUL QILINDI", desc: "SEGA Enterprise dan xabarnoma oling" },
      popup: { title: "TARTIBGA SOL!", desc: "Fatality ni bitta ham oyna yopmasdan yakunlang" },
      super: { title: "Super O'yinchi!", desc: "5 ta qo'shiqda A yoki undan yuqori baho oling" },
      hyper: { title: "Giper O'yinchi!!", desc: "Istalgan qo'shiqda P baho oling" },
      die: { title: "Siz shunchaki yomonsiz...", desc: "Har bir Game Over ekranini yig'ing" },
      credits: { title: "Manba tergovchisi", desc: "Modning mualliflar qismini tomosha qiling" },
      finale: { title: "Maysani ushlab ko'rmoqchimisiz?", desc: "Butun modni yakunlang" }
    }
  },
  ja: {
    name: "日本語", flag: "🇯🇵",
    langScreen: { title: "言語を選択", subtitle: "続けるには言語を選んでください" },
    warning: { title: "警告！", line1: "このMODは子供や刺激に敏感な方には向いていません。", line2: "このMODには光の点滅や映像が含まれており、光過敏性てんかんの方に不快感や発作を引き起こす可能性があります。", question: "それでも続けますか？", yes: "はい", no: "いいえ" },
    nav: { home: "ホーム", about: "概要", download: "ダウンロード", achievements: "実績", updates: "アップデート", credits: "クレジット" },
    mobileMenu: { home: "ホーム", about: "概要", gallery: "ギャラリー", download: "ダウンロード", credits: "クレジット" },
    hero: { sub: "ラウンド3の準備はいい？", download: "ダウンロード", achievements: "実績" },
    about: { title: "MODについて", p1: "また遊ぶ準備はできた...？", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong>は、2021年の伝説的なMOD <span class=\"red\">Vs. Sonic.EXE</span> からインスピレーションを受けたファンメイドのリバイバルプロジェクトです。オリジナルのダークな雰囲気とノスタルジアを再現するために作られ、キャンセルされたコンテンツの一部を、新しいストーリー・楽曲・キャラクターとして甦らせました。", p3: "不気味な出会い、刷新されたビジュアル、再構築されたトラックで、<strong>Vs Sonic.EXE (Unofficial)</strong>はオリジナルMODのファンにノスタルジックかつ新鮮な体験を届けることを目指しています。", f1: "50曲以上のリメイク楽曲", f2: "20人以上のプレイアブルキャラクター/対戦相手", f3: "GameJoltトロフィーと連携した完全な実績システム", f4: "全キャラクター独自のアートとアニメーション", f5: "多言語対応" },
    download: { title: "ダウンロード", sub: "今すぐプレイ可能", gjSpan: "プレイしてトロフィーを獲得", note: "このMODはファンメイドのプロジェクトであり、SEGAまたはオリジナルSonic.EXEチームとは一切関係ありません。" },
    achievements: { title: "実績", gjSub: "GameJoltアカウントを接続して進捗を保存", gjUserPlaceholder: "GameJoltユーザー名", gjTokenPlaceholder: "GameJoltトークン", gjConnect: "接続", gjHelp: "<span class=\"red\">gamejolt.com → プロフィールメニュー → Game Token</span> でトークンを取得してください", gjDisconnect: "切断", gjCan: "全て解除できるかな？" },
    updates: { title: "アップデート", sub: "今後の予定", u1: "リリース後初のアップデートは<strong>バージョン1.5</strong>を予定しており、<strong>クリスマススペシャル</strong>の楽曲とともに<strong>PARALLAX</strong>キャストをMODに追加します。このアップデートを実現したいと思っており、さらに多くのコンテンツで体験を拡張し続けることに興奮しています。", u2: "さらに先を見据えると、<strong>バージョン2</strong>はこれまでで最大かつ最も野心的なアップデートになりそうです。<strong>ストーリーモード</strong>キャンペーンの第二章<strong>Overthrow</strong>が続き、Triple Troubleのカットシーン中に謎の転送を受けた<strong>Girlfriend</strong>としてプレイします。新たな脅威に立ち向かい、隠された真実を明らかにし、まったく異なる視点からストーリーを体験してください。このアップデートでは<strong>Sound Test</strong>と<strong>File Extensions</strong>の残りメンバーも登場します。新しい楽曲・メカニクス・サプライズとともに、これまで作ったどんなものとも異なる体験を届けることが目標です。" },
    comments: { title: "コメント", sub: "メッセージを残してください — Discordに届きます", namePlaceholder: "お名前", msgPlaceholder: "コメントを入力...", send: "送信", sending: "送信中...", ok: "コメントを送信しました！", errFields: "名前とコメントを入力してください。", errConn: "接続に失敗しました。もう一度お試しください。" },
    credits: { title: "クレジット", sub: "制作チーム" },
    footer: { legal1: "ファンメイドのFNF MOD。SEGAまたはオリジナルSonic.exeチームとは無関係です。", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "神殺し", desc: "メインウィークをクリアする" },
      lordx: { title: "戻ってくるな", desc: "Lord Xを見つけて倒す" },
      majin: { title: "楽しみは無限大だった", desc: "MajinとMazinを見つけて倒す" },
      tailsdoll: { title: "太陽の光を感じたか？", desc: "Tails Dollを見つけて倒す" },
      fleetway: { title: "カオスコントロール！", desc: "Fleetwayを見つけて倒す" },
      exe: { title: "檻に戻れ！", desc: "EXEを見つけて倒す" },
      sanic: { title: "もう一度やるか？", desc: "Sanicを見つけて倒す" },
      needlemouse: { title: "もう一度言ってくれる？", desc: "Needlemouseを見つけて倒す" },
      chaotix: { title: "テイルスじゃなかった…", desc: "Chaotixを見つけて倒す" },
      scorched: { title: "彼はすり替えられた", desc: "Scorchedを見つけて倒す" },
      demogri: { title: "おっと！", desc: "Demogri & Griatosを見つけて倒す" },
      bratwurst: { title: "ボーナス戦はどこ？", desc: "Bratwurstを見つけて倒す" },
      omw: { title: "Do You Know Da Wae?", desc: "OMW.EXEを見つけて倒す" },
      devoid: { title: "夜のハリネズミ。", desc: "Devoidを見つけて倒す" },
      rerun: { title: "FNFのMODみたいに？！", desc: "Re-Runを見つけて倒す" },
      soink: { title: "Adobe頼むよ…", desc: "Soink.FLAを見つけて倒す" },
      ugly: { title: "えーっと… ニャー？", desc: "Movie Sonicを見つけて倒す" },
      sunky: { title: "左、上、下… 右？", desc: "Sunkyを見つけて倒す" },
      fatal: { title: "致命的な体験", desc: "Fatal Errorにゲームへのアクセスを許可する" },
      starved: { title: "最後の晩餐", desc: "Starved Eggmanを見つけて倒す" },
      crazy: { title: "お前はソニックじゃない", desc: "Psycho Tailsを倒す" },
      coldsteel: { title: "個人的;な 恨みじゃないぞ、ガキめ。", desc: "Coldsteelを見つけて倒す" },
      genesys: { title: "BFは通過した", desc: "Genesys Eggmanを見つけて倒す" },
      educator: { title: "私の学校へようこそ！", desc: "Educatorを見つけて倒す" },
      fileextensions: { title: "ソニック多すぎ", desc: "すべてのFile Extensionsキャラクターを倒す" },
      rings: { title: "リングアレルギー", desc: "リングを一つも取らずにTriple Troubleをクリアする" },
      norings: { title: "スピードを見せてやる！", desc: "リングを一度も押さずにManual Blastをクリアする" },
      tripledeaths: { title: "先に進むのに苦労してる？", desc: "Triple Troubleのすべてのゲームオーバーを見る" },
      dagarden: { title: "音楽愛好家！", desc: "DA Gardenのソングライブラリを完成させる" },
      parallax: { title: "リングの向こう側", desc: "PARALLAXメニューに入る" },
      secondary: { title: "一体何が起きているんだ…", desc: "すべてのシークレットコードを見つける" },
      sega: { title: "メッセージ受信", desc: "SEGA Enterpriseからの通知を受け取る" },
      popup: { title: "少しは整理しろ！", desc: "ポップアップを一つも閉じずにFatalityをクリアする" },
      super: { title: "スーパープレイヤー！", desc: "5曲でAランク以上を獲得する" },
      hyper: { title: "ハイパープレイヤー！！", desc: "任意の曲でPランクを獲得する" },
      die: { title: "お前が下手なだけ…", desc: "すべてのゲームオーバーを経験する" },
      credits: { title: "ソース調査員", desc: "MODのクレジットを見る" },
      finale: { title: "草に触れてみる？", desc: "MOD全体をクリアする" }
    }
  },
  zh: {
    name: "中文", flag: "🇨🇳",
    langScreen: { title: "选择语言", subtitle: "请选择您的语言以继续" },
    warning: { title: "警告！", line1: "此MOD不适合儿童或心理承受能力较弱的人群。", line2: "此MOD包含闪光效果和/或可能对光敏性癫痫患者造成不适或诱发癫痫发作的图像。", question: "您仍要继续吗？", yes: "是", no: "否" },
    nav: { home: "主页", about: "关于", download: "下载", achievements: "成就", updates: "更新", credits: "制作名单" },
    mobileMenu: { home: "主页", about: "关于", gallery: "画廊", download: "下载", credits: "制作名单" },
    hero: { sub: "准备好迎接第3回合了吗？", download: "下载", achievements: "成就" },
    about: { title: "关于MOD", p1: "准备好再次游玩了吗...？", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> 是一款由粉丝制作的复兴作品，灵感来自2021年标志性的 <span class=\"red\">Vs. Sonic.EXE</span> MOD。为了重现原作黑暗的氛围与怀旧感，该项目以全新的故事、歌曲和角色诠释带回了部分被取消的内容。", p3: "凭借令人毛骨悚然的相遇、焕然一新的视觉效果和重新构思的曲目，<strong>Vs Sonic.EXE (Unofficial)</strong> 致力于为原版MOD的粉丝带来兼具怀旧感与新鲜感的体验。", f1: "50首以上重制歌曲", f2: "20位以上可游玩角色/对手", f3: "配备GameJolt奖杯的完整成就系统", f4: "每个角色独特的美术与动画", f5: "多语言支持" },
    download: { title: "下载", sub: "现已发布", gjSpan: "游玩并赢取奖杯", note: "此MOD是粉丝制作的项目，与SEGA或原版Sonic.EXE团队无关联。" },
    achievements: { title: "成就", gjSub: "连接您的GameJolt账号以保存进度", gjUserPlaceholder: "GameJolt用户名", gjTokenPlaceholder: "GameJolt令牌", gjConnect: "连接", gjHelp: "在 <span class=\"red\">gamejolt.com → 个人资料菜单 → Game Token</span> 获取您的令牌", gjDisconnect: "断开连接", gjCan: "你能全部解锁吗？" },
    updates: { title: "更新", sub: "后续更新", u1: "我们的第一个发布后更新计划为<strong>版本1.5</strong>，将把<strong>PARALLAX</strong>阵容与<strong>圣诞特别篇</strong>歌曲一同带入MOD。我们非常希望实现这次更新，并期待继续用更多内容丰富游戏体验。", u2: "展望更远，<strong>版本2</strong>正在成为我们迄今最大、最雄心勃勃的更新。它将延续<strong>故事模式</strong>的活动，进入第二章<strong>Overthrow</strong>——在Triple Trouble过场动画中神秘传送后，你将扮演<strong>Girlfriend</strong>。跟随她的旅程，面对新的威胁，揭开隐藏的真相，以全新视角体验故事。此次更新还将引入<strong>Sound Test</strong>和<strong>File Extensions</strong>阵容的剩余成员。伴随着新歌曲、新机制和惊喜，我们的目标是带来前所未有的独特体验。" },
    comments: { title: "评论", sub: "留言 — 将出现在我们的Discord中", namePlaceholder: "您的名字", msgPlaceholder: "您的评论...", send: "发送", sending: "发送中...", ok: "评论已发送！", errFields: "请输入您的名字和评论。", errConn: "连接失败，请重试。" },
    credits: { title: "制作名单", sub: "制作团队" },
    footer: { legal1: "粉丝制作的FNF MOD。与SEGA或原版Sonic.exe团队无关联。", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "弑神者", desc: "完成主线周" },
      lordx: { title: "别回来", desc: "找到并击败 Lord X" },
      majin: { title: "乐趣是无限的", desc: "找到并击败 Majin 和 Mazin" },
      tailsdoll: { title: "你感觉到阳光了吗？", desc: "找到并击败 Tails Doll" },
      fleetway: { title: "混沌控制！", desc: "找到并击败 Fleetway" },
      exe: { title: "滚回笼子里去！", desc: "找到并击败 EXE" },
      sanic: { title: "你还会再来一次吗？", desc: "找到并击败 Sanic" },
      needlemouse: { title: "你能重复一遍吗？", desc: "找到并击败 Needlemouse" },
      chaotix: { title: "那不是塔尔斯...", desc: "找到并击败 Chaotix" },
      scorched: { title: "他被替换了", desc: "找到并击败 Scorched" },
      demogri: { title: "糟糕！", desc: "找到并击败 Demogri & Griatos" },
      bratwurst: { title: "奖励战在哪里？", desc: "找到并击败 Bratwurst" },
      omw: { title: "Do You Know Da Wae?", desc: "找到并击败 OMW.EXE" },
      devoid: { title: "夜之刺猬。", desc: "找到并击败 Devoid" },
      rerun: { title: "就像FNF模组一样？！", desc: "找到并击败 Re-Run" },
      soink: { title: "Adobe求你了...", desc: "找到并击败 Soink.FLA" },
      ugly: { title: "呃... 喵？", desc: "找到并击败 电影索尼克" },
      sunky: { title: "左，上，下... 右？", desc: "找到并击败 Sunky" },
      fatal: { title: "致命体验", desc: "允许 Fatal Error 访问你的游戏" },
      starved: { title: "最后一餐", desc: "找到并击败 Starved Eggman" },
      crazy: { title: "你不是索尼克", desc: "击败 Psycho Tails" },
      coldsteel: { title: "跟你没仇 小鬼", desc: "找到并击败 Coldsteel" },
      genesys: { title: "BF已通过", desc: "找到并击败 Genesys Eggman" },
      educator: { title: "欢迎来到我的学校！", desc: "找到并击败 Educator" },
      fileextensions: { title: "索尼克太多了", desc: "击败所有 File Extensions 角色" },
      rings: { title: "戒指过敏", desc: "在不收集任何戒指的情况下完成 Triple Trouble" },
      norings: { title: "让你看看速度！", desc: "在不按下任何戒指的情况下完成 Manual Blast" },
      tripledeaths: { title: "前进遇到困难了？", desc: "查看 Triple Trouble 的所有死亡画面" },
      dagarden: { title: "音乐爱好者！", desc: "完成 DA Garden 歌曲库" },
      parallax: { title: "戒指的另一边", desc: "进入 PARALLAX 菜单" },
      secondary: { title: "到底发生了什么...", desc: "找到所有隐藏代码" },
      sega: { title: "收到信息", desc: "收到 SEGA Enterprise 的通知" },
      popup: { title: "请保持一点条理！", desc: "在不关闭任何弹窗的情况下完成 Fatality" },
      super: { title: "超级玩家！", desc: "在5首歌曲中获得 A 或更高评价" },
      hyper: { title: "终极玩家！！", desc: "在任意歌曲中获得 P 评价" },
      die: { title: "你太菜了...", desc: "体验每一种 Game Over" },
      credits: { title: "来源调查员", desc: "观看模组制作名单" },
      finale: { title: "想去摸摸草吗？", desc: "完成整个模组" }
    }
  },
  ko: {
    name: "한국어", flag: "🇰🇷",
    langScreen: { title: "언어 선택", subtitle: "계속하려면 언어를 선택하세요" },
    warning: { title: "경고!", line1: "이 모드는 어린이나 심약자에게 적합하지 않습니다.", line2: "이 모드에는 광과민성 증후군이 있는 분들에게 불편함이나 발작을 유발할 수 있는 점멸 조명 및/또는 이미지가 포함되어 있습니다.", question: "그래도 계속하시겠습니까?", yes: "예", 고: "아니오" },
    nav: { home: "홈", about: "소개", download: "다운로드", achievements: "업적", updates: "업데이트", credits: "크레딧" },
    mobileMenu: { home: "홈", about: "소개", gallery: "갤러리", download: "다운로드", credits: "크레딧" },
    hero: { sub: "라운드 3, 준비되셨나요?", download: "다운로드", achievements: "업적" },
    about: { title: "모드 소개", p1: "다시 플레이할 준비가 되셨나요...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong>은 2021년의 기념비적인 <span class=\"red\">Vs. Sonic.EXE</span> 모드에서 영감을 받은 팬메이드 리바이벌 프로젝트입니다. 원작의 어두운 분위기와 향수를 재현하기 위해 만들어졌으며, 취소된 콘텐츠의 일부를 새로운 스토리, 곡, 캐릭터로 재해석하여 되살렸습니다.", p3: "으스스한 만남, 새롭게 단장된 비주얼, 재구성된 트랙으로 <strong>Vs Sonic.EXE (Unofficial)</strong>은 원작 모드 팬들에게 향수와 신선함을 동시에 선사하는 경험을 목표로 합니다.", f1: "50곡 이상의 리메이크 음악", f2: "20명 이상의 플레이어블 캐릭터 및 상대방", f3: "GameJolt 트로피가 연동된 완전한 업적 시스템", f4: "모든 캐릭터마다 제공되는 독자적인 아트 및 애니메이션", f5: "다국어 지원" },
    download: { title: "다운로드", sub: "지금 바로 플레이 가능", gjSpan: "플레이하고 트로피 획득하기", note: "이 모드는 팬메이드 프로젝트로 SEGA 또는 원작 Sonic.EXE 팀과 관련이 없습니다." },
    achievements: { title: "업적", gjSub: "GameJolt 계정을 연결하여 진행상황을 저장하세요", gjUserPlaceholder: "GameJolt 사용자명", gjTokenPlaceholder: "GameJolt 토큰", gjConnect: "연결", gjHelp: "<span class=\"red\">gamejolt.com → 프로필 메뉴 → Game Token</span>에서 토큰을 받으세요", gjDisconnect: "연결 해제", gjCan: "모두 잠금 해제할 수 있을까요?" },
    updates: { title: "업데이트", sub: "향후 업데이트", u1: "출시 후 첫 번째 업데이트는 <strong>버전 1.5</strong>로 계획되어 있으며, <strong>크리스마스 스페셜</strong> 곡들과 함께 <strong>PARALLAX</strong> 캐스트를 모드에 추가할 예정입니다. 이 업데이트가 실현되기를 진심으로 바라며, 더 많은 콘텐츠로 경험을 계속 확장해 나가겠습니다.", u2: "더 먼 미래를 보면, <strong>버전 2</strong>는 지금까지 중 가장 크고 야심 찬 업데이트가 될 것입니다. <strong>스토리 모드</strong> 캠페인의 두 번째 챕터 <strong>Overthrow</strong>가 이어지며, Triple Trouble 컷신 중 신비롭게 텔레포트된 <strong>Girlfriend</strong>로 플레이합니다. 새로운 위협에 맞서고, 숨겨진 진실을 밝히며, 완전히 다른 시각으로 스토리를 경험해보세요. 이번 업데이트에서는 <strong>Sound Test</strong>와 <strong>File Extensions</strong>의 나머지 멤버들도 소개됩니다. 새로운 노래, 메커니즘, 그리고 놀라움과 함께, 우리가 지금까지 만든 것과는 전혀 다른 경험을 선사하는 것이 목표입니다." },
    comments: { title: "댓글", sub: "메시지를 남겨주세요 — Discord 서버에 표시됩니다", namePlaceholder: "이름", msgPlaceholder: "댓글을 입력하세요...", send: "전송", sending: "전송 중...", ok: "댓글이 전송되었습니다!", errFields: "이름과 댓글을 입력해주세요.", errConn: "연결에 실패했습니다. 다시 시도해주세요." },
    credits: { title: "크레딧", sub: "제작팀" },
    footer: { legal1: "팬메이드 FNF 모드. SEGA 또는 원작 Sonic.exe 팀과 관련 없음.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "신을 죽인 자", desc: "메인 주간을 클리어하세요" },
      lordx: { title: "돌아오지 마", desc: "Lord X를 찾고 쓰러뜨리세요" },
      majin: { title: "재미는 무한했다", desc: "Majin과 Mazin을 찾고 쓰러뜨리세요" },
      tailsdoll: { title: "햇빛이 느껴졌니?", desc: "Tails Doll을 찾고 쓰러뜨리세요" },
      fleetway: { title: "카오스 컨트롤!", desc: "Fleetway를 찾고 쓰러뜨리세요" },
      exe: { title: "우리로 돌아가라!", desc: "EXE를 찾고 쓰러뜨리세요" },
      sanic: { title: "다시 할 수 있겠어?", desc: "Sanic을 찾고 쓰러뜨리세요" },
      needlemouse: { title: "다시 말해줄래?", desc: "Needlemouse를 찾고 쓰러뜨리세요" },
      chaotix: { title: "테일즈가 아니었어...", desc: "Chaotix를 찾고 쓰러뜨리세요" },
      scorched: { title: "그는 대체되었다", desc: "Scorched를 찾고 쓰러뜨리세요" },
      demogri: { title: "오 이런!", desc: "Demogri & Griatos를 찾고 쓰러뜨리세요" },
      bratwurst: { title: "보너스 전투는 어디 있지?", desc: "Bratwurst를 찾고 쓰러뜨리세요" },
      omw: { title: "Do You Know Da Wae?", desc: "OMW.EXE를 찾고 쓰러뜨리세요" },
      devoid: { title: "밤의 고슴도치.", desc: "Devoid를 찾고 쓰러뜨리세요" },
      rerun: { title: "FNF 모드처럼?!", desc: "Re-Run을 찾고 쓰러뜨리세요" },
      soink: { title: "Adobe 제발...", desc: "Soink.FLA를 찾고 쓰러뜨리세요" },
      ugly: { title: "어... 야옹?", desc: "영화 소닉을 찾고 쓰러뜨리세요" },
      sunky: { title: "좌, 상, 하... 우?", desc: "Sunky를 찾고 쓰러뜨리세요" },
      fatal: { title: "치명적인 경험", 단축어: "Fatal Error가 게임에 접근하도록 허용하세요" },
      starved: { title: "마지막 만찬", desc: "Starved Eggman을 찾고 쓰러뜨리세요" },
      crazy: { title: "넌 소닉이 아니었어", desc: "Psycho Tails를 쓰러뜨리세요" },
      coldsteel: { title: "개인적인 감정은 없다 꼬마", desc: "Coldsteel을 찾고 쓰러뜨리세요" },
      genesys: { title: "BF 통과", desc: "Genesys Eggman을 찾고 쓰러뜨리세요" },
      educator: { title: "내 학교에 온 걸 환영해!", desc: "Educator를 찾고 쓰러뜨리세요" },
      fileextensions: { title: "소닉이 너무 많아", desc: "모든 File Extensions 캐릭터를 쓰러뜨리세요" },
      rings: { title: "링 알레르기", desc: "링을 하나도 얻지 않고 Triple Trouble을 클리어하세요" },
      norings: { title: "스피드를 보여주지!", desc: "링을 한 번도 누르지 않고 Manual Blast를 클리어하세요" },
      tripledeaths: { title: "진행에 문제가 있나?", desc: "Triple Trouble의 모든 게임 오버를 확인하세요" },
      dagarden: { title: "음악 애호가!", desc: "DA Garden 노래 라이브러리를 완성하세요" },
      parallax: { title: "링의 반대편", desc: "PARALLAX 메뉴에 입장하세요" },
      secondary: { title: "도대체 무슨 일이...", desc: "모든 비밀 코드를 찾으세요" },
      sega: { title: "메시지 수신", desc: "SEGA Enterprise로부터 알림을 받으세요" },
      popup: { title: "정리 좀 합시다!", desc: "팝업을 하나도 닫지 않고 Fatality를 클리어하세요" },
      super: { title: "슈퍼 플레이어!", desc: "5곡에서 A 랭크 이상을 달성하세요" },
      hyper: { title: "하이퍼 플레이어!!", desc: "아무 곡에서나 P 랭크를 달성하세요" },
      die: { title: "넌 그냥 못하는 거야...", desc: "모든 게임 오버를 당해보세요" },
      credits: { title: "소스 조사관", desc: "모드 크레딧을 시청하세요" },
      finale: { title: "밖에 나가서 풀 좀 만지지 그래?", desc: "모드 전체를 클리어하세요" }
    }
  },
  ru: {
    name: "Русский", flag: "🇷🇺",
    langScreen: { title: "ВЫБЕРИТЕ ЯЗЫК", subtitle: "Выберите язык для продолжения" },
    warning: { title: "ПРЕДУПРЕЖДЕНИЕ!", line1: "Этот мод не предназначен для детей или впечатлительных людей.", line2: "Этот мод содержит мигающий свет и/или изображения, которые могут вызвать дискомфорт или судороги у людей с фотосенситивной эпилепсией.", question: "ВЫ ХОТИТЕ ПРОДОЛЖИТЬ?", yes: "ДА", no: "НЕТ" },
    nav: { home: "ГЛАВНАЯ", about: "О МОДЕ", download: "СКАЧАТЬ", achievements: "ДОСТИЖЕНИЯ", updates: "ОБНОВЛЕНИЯ", credits: "АВТОРЫ" },
    mobileMenu: { home: "ГЛАВНАЯ", about: "О МОДЕ", gallery: "ГАЛЕРЕЯ", download: "СКАЧАТЬ", credits: "АВТОРЫ" },
    hero: { sub: "ГОТОВ К РАУНДУ 3?", download: "СКАЧАТЬ", achievements: "ДОСТИЖЕНИЯ" },
    about: { title: "О МОДЕ", p1: "Готов сыграть еще раз...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> — это фанатский проект, вдохновленный культовым модом 2021 года <span class=\"red\">Vs. Sonic.EXE</span>. Созданный для того, чтобы вернуть мрачную атмосферу и чувство ностальгии оригинала, проект возвращает часть отмененного контента с совершенно новым взглядом на сюжет, песни и персонажей.", p3: "Благодаря пугающим столкновениям, обновленному визуалу и переосмысленным трекам <strong>Vs Sonic.EXE (Unofficial)</strong> стремится подарить фанатам оригинального мода как ностальгию, так и совершенно новый опыт.", f1: "50+ переработанных треков", f2: "20+ играбельных персонажей и противников", f3: "Полноценная система достижений с трофеями GameJolt", f4: "Уникальные арты и анимации для каждого персонажа", f5: "Поддержка нескольких языков" },
    download: { title: "СКАЧАТЬ", sub: "Доступно сейчас", gjSpan: "Играй и получай трофеи", note: "Этот мод является фанатским проектом и никак не связан с компанией SEGA или оригинальной командой Sonic.EXE." },
    achievements: { title: "ДОСТИЖЕНИЯ", gjSub: "Подключите аккаунт GameJolt, чтобы сохранять прогресс", gjUserPlaceholder: "Имя пользователя GameJolt", gjTokenPlaceholder: "Токен GameJolt", gjConnect: "ПОДКЛЮЧИТЬ", gjHelp: "Токен можно получить здесь: <span class=\"red\">gamejolt.com → Меню профиля → Game Token</span>", gjDisconnect: "ОТКЛЮЧИТЬ", gjCan: "Сможешь разблокировать все?" },
    updates: { title: "ОБНОВЛЕНИЯ", sub: "ЧТО БУДЕТ ДАЛЬШЕ", u1: "Наше первое обновление после релиза запланировано как <strong>Версия 1.5</strong>. В нем в мод будет добавлен состав <strong>PARALLAX</strong>, а также треки <strong>Рождественского спешла</strong>. Мы очень хотим воплотить это обновление в жизнь и рады продолжать расширять игру новым контентом.", u2: "Заглядывая еще дальше, <strong>Версия 2</strong> обещает стать нашим самым крупным и амбициозным обновлением. Она продолжит кампанию <strong>Сюжетного Режима (Story Mode)</strong> второй главой — <strong>Overthrow</strong>. В ней вы будете играть за <strong>Гёрлфренд (Girlfriend)</strong> после её таинственного перемещения во время кат-сцены Triple Trouble. Следите за ее путешествием: она столкнется с новыми угрозами, откроет скрытые истины и переживет события сюжета с совершенно иного ракурса. Также будут добавлены оставшиеся участники из <strong>Sound Test</strong> и <strong>File Extensions</strong>. С новыми песнями, механиками и сюрпризами мы хотим подарить вам опыт, не похожий ни на что из того, что мы делали раньше." },
    comments: { title: "КОММЕНТАРИИ", sub: "Оставьте сообщение — оно появится на нашем Discord-сервере", namePlaceholder: "Ваше имя", msgPlaceholder: "Ваш комментарий...", send: "ОТПРАВИТЬ", sending: "Отправка...", ok: "Комментарий отправлен!", errFields: "Введите имя и комментарий.", errConn: "Ошибка подключения. Попробуйте снова." },
    credits: { title: "АВТОРЫ", sub: "Команда разработчиков" },
    footer: { legal1: "Фанатский FNF мод. Не связан с SEGA или оригинальной командой Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "УБИЙЦА БОГОВ", desc: "Пройди Главную неделю" },
      lordx: { title: "НЕ ВОЗВРАЩАЙСЯ", desc: "Найди и победи Лорда Икс" },
      majin: { title: "ВЕСЕЛЬЕ БЕСКОНЕЧНО", desc: "Найди и победи Маджина и Мазина" },
      tailsdoll: { title: "Чувствуешь лучи солнца?", desc: "Найди и победи Тейлз Долла" },
      fleetway: { title: "Хаос под контролем!", desc: "Найди и победи Флитвея" },
      exe: { title: "А ну назад в клетку!", desc: "Найди и победи EXE" },
      sanic: { title: "Прошел бы ты это снова?", desc: "Найди и победи Саника" },
      needlemouse: { title: "Можешь повторить?", desc: "Найди и победи Нидлмаус" },
      chaotix: { title: "Это был не Тейлз...", desc: "Найди и победи Хаотикса" },
      scorched: { title: "Его заменили", desc: "Найди и победи Скорчеда" },
      demogri: { title: "Ой-ой!", desc: "Найди и победи Демогри и Гриатоса" },
      bratwurst: { title: "А где бонусный бой?", desc: "Найди и победи Братвурста" },
      omw: { title: "Do You Know Da Wae?", desc: "Найди и победи OMW.EXE" },
      devoid: { title: "Ёж в ночи", desc: "Найди и победи Девоида" },
      rerun: { title: "Прямо как в FNF моде?!", desc: "Найди и победи Re-Run" },
      soink: { title: "Adobe, пожалуйста...", desc: "Найди и победи Soink.FLA" },
      ugly: { title: "Эм... Мяу?", desc: "Найди и победи Уродливого Соника" },
      sunky: { title: "Влево, вверх, вниз... вправо?", desc: "Найди и победи Санки" },
      fatal: { title: "ФАТАЛЬНЫЙ опыт", desc: "Дай Fatal Error доступ к твоей игре" },
      starved: { title: "Последняя трапеза", desc: "Найди и победи Голодного Эггмана" },
      crazy: { title: "ТЫ НЕ СОНИК", desc: "Победи Чёкнутого Тейлза" },
      coldsteel: { title: "Ничего личного пацан", desc: "Найди и победи Колдстила" },
      genesys: { title: "БФ ПОГИБ", desc: "Найди и победи Генезис Эггмана" },
      educator: { title: "Добро пожаловать в Школу!", desc: "Найди и победи Эдукатора" },
      fileextensions: { title: "СЛИШКОМ МНОГО СОНИКОВ", desc: "Победи всех персонажей File Extensions" },
      rings: { title: "Аллергия на кольца", desc: "Пройди Triple Trouble, не собрав ни одного кольца" },
      norings: { title: "Я сама скорость!", desc: "Пройди Manual Blast, не нажав ни на одно кольцо" },
      tripledeaths: { title: "Возникли трудности?", desc: "Увидь все смерти в Triple Trouble" },
      dagarden: { title: "ЦЕНИТЕЛЬ МУЗЫКИ!", desc: "Заполни библиотеку песен в DA Garden" },
      parallax: { title: "По ту сторону кольца", desc: "Зайди в меню PARALLAX" },
      secondary: { title: "Что за черт происходит...", desc: "Найди все секретные коды" },
      sega: { title: "СООБЩЕНИЕ ПОЛУЧЕНО", desc: "Получи уведомление от SEGA Enterprise" },
      popup: { title: "НАВЕДИ ПОРЯДОК УЖЕ!", desc: "Пройди Fatality, не закрыв ни одного окна" },
      super: { title: "Супер Игрок!", desc: "Получи ранг A или выше в 5 песнях" },
      hyper: { title: "Гипер Игрок!!", desc: "Получи ранг P в любой песне" },
      die: { title: "Ты просто плох...", desc: "Собери каждый экран Game Over" },
      credits: { title: "Исследователь Источников", desc: "Загляни во вкладку «Авторы» в меню «Экстра»" },
      finale: { title: "Хочешь потрогать траву?", desc: "Пройди весь мод" }
    }
  },
  uk: {
    name: "Українська", flag: "🇺🇦",
    langScreen: { title: "ОБЕРІТЬ МОВУ", subtitle: "Оберіть мову для продовження" },
    warning: { title: "ПОПЕРЕДЖЕННЯ!", line1: "Цей мод не призначений для дітей або вразливих людей.", line2: "Цей мод містить миготіння світла та/або зображення, які можуть спричинити дискомфорт або судоми у людей із фотосенситивною епілепсією.", question: "ВИ БАЖАЄТЕ ПРОДОВЖИТИ?", yes: "ТАК", no: "НІ" },
    nav: { home: "ГОЛОВНА", about: "ПРО МОД", download: "ЗАВАНТАЖИТИ", achievements: "ДОСЯГНЕННЯ", updates: "ОНОВЛЕННЯ", credits: "АВТОРИ" },
    mobileMenu: { home: "ГОЛОВНА", about: "ПРО МОД", gallery: "ГАЛЕРЕЯ", download: "ЗАВАНТАЖИТИ", credits: "АВТОРИ" },
    hero: { sub: "ГОТОВИЙ ДО 3 РАУНДУ?", download: "ЗАВАНТАЖИТИ", achievements: "ДОСЯГНЕННЯ" },
    about: { title: "ПРО МОД", p1: "Готовий зіграти ще раз...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> — це фанатський проєкт, натхненний культовим модом 2021 року <span class=\"red\">Vs. Sonic.EXE</span>. Створений для того, щоб повернути похмуру атмосферу та відчуття ностальгії оригіналу, проєкт повертає частину скасованого контенту з абсолютно новим поглядом на сюжет, пісні та персонажів.", p3: "Завдяки моторошним сутичкам, оновленому візуалу та переосмисленим трекам, <strong>Vs Sonic.EXE (Unofficial)</strong> прагне подарувати фанатам оригінального мода як ностальгічний, так і абсолютно новий досвід.", f1: "50+ перероблених треків", f2: "20+ ігрових персонажів та супротивників", f3: "Повноцінна система досягнень із трофеями GameJolt", f4: "Унікальні арти та анімації для кожного персонажа", f5: "Підтримка кількох мов" },
    download: { title: "ЗАВАНТАЖИТИ", sub: "Доступно зараз", gjSpan: "Грай та здобувай трофеї", note: "Цей мод є фанатським проєктом і жодним чином не пов'язаний з компанією SEGA або оригінальною командою Sonic.EXE." },
    achievements: { title: "ДОСЯГНЕННЯ", gjSub: "Підключіть акаунт GameJolt, щоб зберігати прогрес", gjUserPlaceholder: "Ім'я користувача GameJolt", gjTokenPlaceholder: "Токен GameJolt", gjConnect: "ПІДКЛЮЧИТИ", gjHelp: "Токен можна отримати тут: <span class=\"red\">gamejolt.com → Меню профілю → Game Token</span>", gjDisconnect: "ВІДКЛЮЧИТИ", gjCan: "Чи зможеш розблокувати все?" },
    updates: { title: "ОНОВЛЕННЯ", sub: "ЩО БУДЕ ДАЛІ", u1: "Наше перше оновлення після релізу заплановане як <strong>Версія 1.5</strong>. У ньому до мода буде додано склад <strong>PARALLAX</strong>, а також треки <strong>Різдвяного спешлу</strong>. Ми дуже хочемо втілити це оновлення в життя і раді продовжувати розширювати гру новим контентом.", u2: "Зазираючи ще далі, <strong>Версія 2</strong> обіцяє стати нашим найбільшим та найамбітнішим оновленням. Вона продовжить кампанію <strong>Сюжетного режиму (Story Mode)</strong> другим розділом — <strong>Overthrow</strong>. У ньому ви гратимете за <strong>Герлфренд (Girlfriend)</strong> після її таємничого переміщення під час кат-сцени Triple Trouble. Слідкуйте за її подорожжю: вона зіткнеться з новими погрозами, відкриє приховані істини та переживе події сюжету з абсолютно іншого ракурсу. Також будуть додані решта учасників з <strong>Sound Test</strong> та <strong>File Extensions</strong>. З новими піснями, механіками та сюрпризами ми хочемо подарувати вам досвід, не схожий ні на що з того, що ми робили раніше." },
    comments: { title: "КОМЕНТАРІ", sub: "Залиште повідомлення — воно з'явиться на нашому Discord-сервері", namePlaceholder: "Ваше ім'я", msgPlaceholder: "Ваш коментар...", send: "НАДІСЛАТИ", sending: "Надсилання...", ok: "Коментар надіслано!", errFields: "Введіть ім'я та коментар.", errConn: "Помилка з'єднання. Спробуйте знову." },
    credits: { title: "АВТОРИ", sub: "Команда розробників" },
    footer: { legal1: "Фанатський FNF мод. Не пов'язаний з SEGA або оригінальною командою Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "ВБИВЦЯ БОГІВ", desc: "Пройди Головний тиждень" },
      lordx: { title: "НЕ ПОВЕРТАЙСЯ", desc: "Знайди і переможи Лорда Ікс" },
      majin: { title: "ВЕСЕЛОЩІ НЕСКІНЧЕННІ", desc: "Знайди і переможи Маджина та Мазина" },
      tailsdoll: { title: "Відчуваєш промені сонця?", desc: "Знайди і переможи Тейлз Долла" },
      fleetway: { title: "Хаос під контролем!", desc: "Знайди і переможи Флітвея" },
      exe: { title: "Ану назад у клітку!", desc: "Знайди і переможи EXE" },
      sanic: { title: "Пройшов би ти це знову?", desc: "Знайди і переможи Саніка" },
      needlemouse: { title: "Можеш повторити?", desc: "Знайди і переможи Нідлмаус" },
      chaotix: { title: "Це був не Тейлз...", desc: "Знайди і переможи Хаотікса" },
      scorched: { title: "Його замінили", desc: "Знайди і переможи Скорчеда" },
      demogri: { title: "Ой-ой!", desc: "Знайди і переможи Демогрі та Гріатоса" },
      bratwurst: { title: "А де бонусний бій?", desc: "Знайди і переможи Братвурста" },
      omw: { title: "Do You Know Da Wae?", desc: "Знайди і переможи OMW.EXE" },
      devoid: { title: "Їжак у ночі", desc: "Знайди і переможи Девоїда" },
      rerun: { title: "Прямо як у FNF моді?!", desc: "Знайди і переможи Re-Run" },
      soink: { title: "Adobe, будь ласка...", desc: "Знайди і переможи Soink.FLA" },
      ugly: { title: "Ем... Мяу?", desc: "Знайди і переможи Потворна Соніка" },
      sunky: { title: "Вліво, вгору, вниз... вправо?", desc: "Знайди і переможи Санкі" },
      fatal: { title: "ФАТАЛЬНИЙ досвід", desc: "Дай Fatal Error доступ до твоєї гри" },
      starved: { title: "Остання трапеза", desc: "Знайди і переможи Зголоднілого Еггмана" },
      crazy: { title: "ТИ НЕ СОНІК", desc: "Переможи Психо Тейлза" },
      coldsteel: { title: "Нічого особистого хлопче", desc: "Знайди і переможи Колдстіла" },
      genesys: { title: "БФ ПОМЕР", desc: "Знайди і переможи Генезис Еггмана" },
      educator: { title: "Ласкаво просимо до Школи!", desc: "Знайди і переможи Едукатора" },
      fileextensions: { title: "ЗАНАДТО БАГАТО СОНІКІВ", desc: "Переможи всіх персонажів File Extensions" },
      rings: { title: "Алергія на кільця", desc: "Пройди Triple Trouble, не зібравши жодного кільця" },
      norings: { title: "Я показую швидкість!", desc: "Пройди Manual Blast, не натиснувши на жодне кільце" },
      tripledeaths: { title: "Виникли труднощі?", desc: "Побач усі смерті в Triple Trouble" },
      dagarden: { title: "ЦІНИТЕЛЬ МУЗИКИ!", desc: "Заповни бібліотеку пісень у DA Garden" },
      parallax: { title: "По той бік кільця", desc: "Зайди в меню PARALLAX" },
      secondary: { title: "Що за чорт відбувається...", desc: "Знайди всі секретні коди" },
      sega: { title: "ПОВІДОМЛЕННЯ ОТРИМАНО", desc: "Отримай сповіщення від SEGA Enterprise" },
      popup: { title: "ДЕ ТВІЙ ЛАД?!", desc: "Пройди Fatality, не закривши жодного вікна" },
      super: { title: "Супер Гравець!", desc: "Отримай ранг A або вище в 5 піснях" },
      hyper: { title: "Гіпер Гравець!!", desc: "Отримай ранг P в будь-якій пісні" },
      die: { title: "Ти просто погано граєш...", desc: "Збери кожен екран Game Over" },
      credits: { title: "Дослідник Джерел", desc: "Заглянь у вкладку «Автори» в меню «Екстра»" },
      finale: { title: "Хочеш торкнутися трави?", desc: "Пройди весь мод" }
    }
  },
  de: {
    name: "Deutsch", flag: "🇩🇪",
    langScreen: { title: "SPRACHE WÄHLEN", subtitle: "Wähle deine Sprache, um fortzufahren" },
    warning: { title: "WARNUNG!", line1: "Dieser Mod ist nicht für Kinder oder schreckhafte Personen geeignet.", line2: "Dieser Mod enthält Blitzlichter und/oder Bilder, die bei Personen mit photosensitiver Epilepsie Unbehagen oder Anfälle verursachen können.", question: "MÖCHTEST DU TROTZDEM FORTFAHREN?", yes: "JA", no: "NEIN" },
    nav: { home: "START", about: "ÜBER", download: "HERUNTERLADEN", achievements: "ERFOLGE", updates: "UPDATES", credits: "CREDITS" },
    mobileMenu: { home: "START", about: "ÜBER", gallery: "GALERIE", download: "HERUNTERLADEN", credits: "CREDITS" },
    hero: { sub: "BEREIT FÜR RUNDE 3?", download: "HERUNTERLADEN", achievements: "ERFOLGE" },
    about: { title: "ÜBER DEN MOD", p1: "Bereit, wieder zu spielen...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> ist ein Fan-Revival-Projekt, inspiriert vom ikonischen <span class=\"red\">Vs. Sonic.EXE</span>-Mod aus 2021. Entwickelt, um die dunkle Atmosphäre und Nostalgie des Originals wiederzubeleben, bringt dieses Projekt Teile des verworfenen Inhalts mit neuen Interpretationen von Story, Songs und Charakteren zurück.", p3: "Mit unheimlichen Begegnungen, überarbeiteten Visuals und neu arrangierten Tracks möchte <strong>Vs Sonic.EXE (Unofficial)</strong> Fans des Originalmods eine nostalgische und zugleich frische Erfahrung bieten.", f1: "50+ neu erstellte Songs", f2: "20+ spielbare Charaktere / Gegner", f3: "Vollständiges Erfolgssystem mit GameJolt-Trophäen", f4: "Einzigartige Artworks & Animationen für jeden Charakter", f5: "Mehrsprachige Unterstützung" },
    download: { title: "HERUNTERLADEN", sub: "Jetzt verfügbar", gjSpan: "Spielen und Trophäen verdienen", note: "Dieser Mod ist ein Fan-Projekt und in keiner Weise mit SEGA oder dem originalen Sonic.EXE-Team verbunden." },
    achievements: { title: "ERFOLGE", gjSub: "Verbinde deinen GameJolt-Account, um deinen Fortschritt zu speichern", gjUserPlaceholder: "GameJolt Benutzername", gjTokenPlaceholder: "GameJolt Token", gjConnect: "VERBINDEN", gjHelp: "Hole deinen Token auf <span class=\"red\">gamejolt.com → Profilmenü → Game Token</span>", gjDisconnect: "TRENNEN", gjCan: "Kannst du alle freischalten?" },
    updates: { title: "UPDATES", sub: "WAS ALS NÄCHSTES KOMMT", u1: "Unser erstes Update nach dem Release ist als <strong>Version 1.5</strong> geplant und bringt den <strong>PARALLAX</strong>-Cast sowie die Songs des <strong>Weihnachts-Specials</strong> in den Mod. Wir möchten dieses Update unbedingt verwirklichen und freuen uns darauf, das Erlebnis mit noch mehr Inhalten zu erweitern.", u2: "Noch weiter in die Zukunft geblickt, entwickelt sich <strong>Version 2</strong> zu unserem bisher größten und ambitioniertesten Update. Es setzt die Kampagne des <strong>Story-Modus</strong> mit dem zweiten Kapitel <strong>Overthrow</strong> fort, in dem du als <strong>Girlfriend</strong> spielst, nachdem sie während der Triple Trouble-Cutscene mysteriös teleportiert wurde. Begleite ihre Reise, während sie neuen Bedrohungen begegnet, verborgene Wahrheiten enthüllt und die Geschichte aus einer völlig anderen Perspektive erlebt. Dieses Update wird auch die verbleibenden Mitglieder des <strong>Sound Test</strong>- und <strong>File Extensions</strong>-Casts vorstellen. Mit neuen Songs, Mechaniken und Überraschungen ist es unser Ziel, ein Erlebnis zu schaffen, wie wir es zuvor noch nie geliefert haben." },
    comments: { title: "KOMMENTARE", sub: "Hinterlass eine Nachricht — sie erscheint auf unserem Discord-Server", namePlaceholder: "Dein Name", msgPlaceholder: "Dein Kommentar...", send: "SENDEN", sending: "Wird gesendet...", ok: "Kommentar gesendet!", errFields: "Gib deinen Namen und einen Kommentar ein.", errConn: "Verbindung fehlgeschlagen. Versuche es erneut." },
    credits: { title: "CREDITS", sub: "Das Entwicklerteam" },
    footer: { legal1: "Fan-gemachter FNF Mod. Nicht verbunden mit SEGA oder dem originalen Sonic.exe-Team.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "GÖTTERTÖTER", desc: "Schließe die Hauptwoche ab" },
      lordx: { title: "KOMM NICHT ZURÜCK", desc: "Finde und besiege Lord X" },
      majin: { title: "DER SPASS WAR UNENDLICH", desc: "Finde und besiege Majin und Mazin" },
      tailsdoll: { title: "Hast du den Sonnenschein gespürt?", desc: "Finde und besiege Tails Doll" },
      fleetway: { title: "Chaos Kontrolliert!", desc: "Finde und besiege Fleetway" },
      exe: { title: "Zurück in den Käfig mit dir!", desc: "Finde und besiege EXE" },
      sanic: { title: "Würdest du das nochmal tun?", desc: "Finde und besiege Sanic" },
      needlemouse: { title: "Kannst du das wiederholen?", desc: "Finde und besiege Needlemouse" },
      chaotix: { title: "Das war nicht Tails...", desc: "Finde und besiege Chaotix" },
      scorched: { title: "Er wurde ersetzt", desc: "Finde und besiege Scorched" },
      demogri: { title: "Oh oh!", desc: "Finde und besiege Demogri & Griatos" },
      bratwurst: { title: "Wo ist der Bonus-Kampf?", desc: "Finde und besiege Bratwurst" },
      omw: { title: "Do You Know Da Wae?", desc: "Finde und besiege OMW.EXE" },
      devoid: { title: "Der Igel der Nacht.", desc: "Finde und besiege Devoid" },
      rerun: { title: "Wie der FNF Mod?!", desc: "Finde und besiege Re-Run" },
      soink: { title: "Adobe bitte...", desc: "Finde und besiege Soink.FLA" },
      ugly: { title: "Ähm... Miau?", desc: "Finde und besiege den Movie Sonic" },
      sunky: { title: "Links, oben, unten... rechts?", desc: "Finde und besiege Sunky" },
      fatal: { title: "Eine FATALE Erfahrung", desc: "Gewähre Fatal Error Zugriff auf dein Spiel" },
      starved: { title: "Eine letzte Mahlzeit", desc: "Finde und besiege Starved Eggman" },
      crazy: { title: "DU WARST NICHT SONIC", desc: "Besiege Psycho Tails" },
      coldsteel: { title: "nichts persönliches bürschchen", desc: "Finde und besiege Coldsteel" },
      genesys: { title: "BF HAT BESTANDEN", desc: "Finde und besiege Genesys Eggman" },
      educator: { title: "Willkommen in meiner Schule!", desc: "Finde und besiege Educator" },
      fileextensions: { title: "ZU VIELE SONICS", desc: "Besiege alle File Extensions Charaktere" },
      rings: { title: "Allergisch gegen Ringe", desc: "Schließe Triple Trouble ab, ohne einen Ring zu sammeln" },
      norings: { title: "Ich zeige Geschwindigkeit!", desc: "Schließe Manual Blast ab, ohne einen Ring zu drücken" },
      tripledeaths: { title: "Probleme beim Vorankommen?", desc: "Schau dir alle Tode in Triple Trouble an" },
      dagarden: { title: "MUSIKLIEBHABER!", desc: "Vervollständige die DA Garden Song-Bibliothek" },
      parallax: { title: "Die andere Seite des Rings", desc: "Geh ins PARALLAX Menü" },
      secondary: { title: "Was zur Hölle passiert da...", desc: "Finde alle Geheimcodes" },
      sega: { title: "NACHRICHT EMPFANGEN", desc: "Erhalte eine Benachrichtigung von SEGA Enterprise" },
      popup: { title: "BRING HIER ORDNUNG REIN!", desc: "Schließe Fatality ab, ohne ein Pop-up zu schließen" },
      super: { title: "Super Spieler!", desc: "Erreiche Rang A oder höher in 5 Songs" },
      hyper: { title: "Hyper Spieler!!", desc: "Erreiche den P-Rang in irgendeinem Song" },
      die: { title: "Du bist einfach schlecht...", desc: "Sammle jeden Game Over" },
      credits: { title: "Quellen-Ermittler", desc: "Schau dir die Mod-Credits an" },
      finale: { title: "Willst du mal Gras anfassen?", desc: "Spiele den gesamten Mod durch" }
    }
  },
  pirate: {
    name: "Pirate", flag: "🏴‍☠️",
    langScreen: { title: "CHOOSE YER TONGUE", subtitle: "Pick yer language to set sail" },
    warning: { title: "BLIMEY!", line1: "This mod be not fer young scalawags or landlubbers with weak constitutions.", line2: "This mod be containin' flashin' lights an' cursed imagery that may cause seizures in those afflicted with photosensitive epilepsy, arrr.", question: "DO YE WISH TO SAIL FORTH ANYWAY?", yes: "AYE!", no: "ABANDON SHIP" },
    nav: { home: "PORT", about: "THE TALE", download: "PLUNDER", achievements: "BOUNTIES", updates: "NEW HORIZONS", credits: "THE CREW" },
    mobileMenu: { home: "PORT", about: "THE TALE", gallery: "TREASURE", download: "PLUNDER", credits: "THE CREW" },
    hero: { sub: "READY FER ROUND 3, MATEY?", download: "PLUNDER", achievements: "BOUNTIES" },
    about: { title: "THE TALE OF THE MOD", p1: "Ready to sail these cursed seas once more...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> be a fan-made revival inspired by the legendary <span class=\"red\">Vs. Sonic.EXE</span> mod of 2021. Built to recapture the dark depths and nostalgia of the original, this voyage brings back the cancelled plunder with reimagined tales, shanties and scallywags.", p3: "With hair-raisin' encounters, revamped visuals and reimagined shanties, <strong>Vs Sonic.EXE (Unofficial)</strong> aims to deliver a voyage both nostalgic and fresh fer fans of the original mod.", f1: "50+ remade shanties", f2: "20+ playable scallywags / opponents", f3: "Full bounty system with GameJolt trophies", f4: "Unique art & animations fer every pirate", f5: "Multi-tongue support" },
    download: { title: "PLUNDER", sub: "Available to pillage NOW", gjSpan: "Play & earn yer bounty", note: "This mod be a fan-made voyage and be not affiliated with SEGA nor the original Sonic.EXE crew." },
    achievements: { title: "BOUNTIES", gjSub: "Connect yer GameJolt account to see yer plunder", gjUserPlaceholder: "GameJolt Pirate Name", gjTokenPlaceholder: "GameJolt Secret Code", gjConnect: "SET SAIL", gjHelp: "Get yer token at <span class=\"red\">gamejolt.com → Profile Menu → Game Token</span>", gjDisconnect: "ABANDON SHIP", gjCan: "Can ye unlock all the bounties, matey?" },
    updates: { title: "NEW HORIZONS", sub: "WHAT LIES AHEAD", u1: "Our first post-launch voyage is planned as <strong>Version 1.5</strong>, bringin' the <strong>PARALLAX</strong> crew aboard alongside the <strong>Christmas Special</strong> shanties. We'd love to make this voyage a reality, arrr, and we be excited to keep expandin' the treasure with even more content.", u2: "Lookin' even further on the horizon, <strong>Version 2</strong> be shapin' up to be our greatest and most ambitious voyage yet. It be continuin' the <strong>Story Mode</strong> campaign with its second chapter, <strong>Overthrow</strong>, where ye'll play as <strong>Girlfriend</strong> after she be mysteriously teleported during the Triple Trouble cutscene. Follow her voyage as she faces new threats, uncovers hidden truths, and experiences the story from an entirely different crow's nest. This voyage will also introduce the remaining crew of <strong>Sound Test</strong> and <strong>File Extensions</strong>. Alongside new shanties, mechanics, and surprises, our goal is to deliver a voyage unlike anything we've charted before, arrr." },
    comments: { title: "MESSAGES IN A BOTTLE", sub: "Leave a message, matey — it'll wash up in our Discord", namePlaceholder: "Yer pirate name", msgPlaceholder: "Yer message, arrr...", send: "SEND IT TO SEA", sending: "Settin' sail...", ok: "Message sent, arrr!", errFields: "Enter yer name and a message, scallywag.", errConn: "The seas be rough. Try again, matey." },
    credits: { title: "THE CREW", sub: "The scallywags behind the mod" },
    footer: { legal1: "Fan-made FNF mod. Not affiliated with SEGA nor the Original Sonic.exe Crew.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "GOD SCUTTLER", desc: "Survive th' Main Voyage" },
      lordx: { title: "STAY IN TH' DEPTHS", desc: "Find an' sink Lord X" },
      majin: { title: "THE GROG BE INFINITE", desc: "Find an' sink Majin and Mazin" },
      tailsdoll: { title: "Did ye feel th' sunshine?", desc: "Find an' sink Tails Doll" },
      fleetway: { title: "Mutiny Controlled!", desc: "Find an' sink Fleetway" },
      exe: { title: "Back in th' brig ye go!", desc: "Find an' sink EXE" },
      sanic: { title: "Would ye sail it all again?", desc: "Find an' sink Sanic" },
      needlemouse: { title: "Could ye echo that?", desc: "Find an' sink Needlemouse" },
      chaotix: { title: "It weren't Tails...", desc: "Find an' sink Chaotix" },
      scorched: { title: "He was marooned", desc: "Find an' sink Scorched" },
      demogri: { title: "Shiver me timbers!", desc: "Find an' sink Demogri & Griatos" },
      bratwurst: { title: "Where be th' extra brawl?", desc: "Find an' sink Bratwurst" },
      omw: { title: "Do Ye Know Da Wae?", desc: "Find an' sink OMW.EXE" },
      devoid: { title: "Th' urchin of the night.", desc: "Find an' sink Devoid" },
      rerun: { title: "Like th' FNF Mod?!", desc: "Find an' sink Re-Run" },
      soink: { title: "Adobe please...", desc: "Find an' sink Soink.FLA" },
      ugly: { title: "Uh... Meow?", desc: "Find an' sink Movie Sonic" },
      sunky: { title: "Port, aloft, alee... starboard?", desc: "Find an' sink Sunky" },
      fatal: { title: "A FATAL Curse", desc: "Grant Fatal Error access to yer vessel" },
      starved: { title: "One last feast", desc: "Find an' sink Starved Eggman" },
      crazy: { title: "YE WEREN'T SONIC", desc: "Sink Psycho Tails" },
      coldsteel: { title: "nothin' personal, cabin boy", desc: "Find an' sink Coldsteel" },
      genesys: { title: "BF HAS SAILED", desc: "Find an' sink Genesys Eggman" },
      educator: { title: "Welcome to me academy!", desc: "Find an' sink Educator" },
      fileextensions: { title: "TOO MANY SWABS", desc: "Send all File Extensions crew to Davy Jones" },
      rings: { title: "Allergic to Doubloons", desc: "Survive Triple Trouble without pillagin' any rings" },
      norings: { title: "I Show Speed!", desc: "Survive Manual Blast without pressin' any rings" },
      tripledeaths: { title: "Rough waters ahead?", desc: "Witness every watery grave in Triple Trouble" },
      dagarden: { title: "SHANTY LOVER!", desc: "Complete th' DA Garden Song Chest" },
      parallax: { title: "Th' other side of th' coin", desc: "Enter th' PARALLAX Menu" },
      secondary: { title: "What in Davy Jones...", desc: "Unearth all th' secret codes" },
      sega: { title: "BOTTLED MESSAGE RECEIVED", desc: "Get a missive from SEGA Enterprise" },
      popup: { title: "HAVE SOME MANNERS YER SCUM!", desc: "Survive Fatality without closin' any pop-ups" },
      super: { title: "Super Scallywag!", desc: "Earn A rank or higher in 5 shanties" },
      hyper: { title: "Hyper Scallywag!!", desc: "Earn a P rank in any shanty" },
      die: { title: "Ye just be terrible...", desc: "Walk th' plank on every game over" },
      credits: { title: "Map Inspector", desc: "Watch th' mod's parchment roll" },
      finale: { title: "Wanna touch some dry land?", desc: "Plunder th' entire mod" }
    }
  },
  it: {
    name: "Italiano", flag: "🇮🇹",
    langScreen: { title: "SELEZIONA LINGUA", subtitle: "Scegli la tua lingua per continuare" },
    warning: { title: "ATTENZIONE!", line1: "Questa mod non è adatta ai bambini o alle persone facilmente impressionabili.", line2: "Questa mod contiene luci lampeggianti e/o immagini che potrebbero causare disagio o convulsioni in persone affette da epilessia fotosensibile.", question: "VUOI CONTINUARE COMUNQUE?", yes: "SÌ", no: "NO" },
    nav: { home: "HOME", about: "INFO", download: "SCARICA", achievements: "OBIETTIVI", updates: "AGGIORNAMENTI", credits: "CREDITI" },
    mobileMenu: { home: "HOME", about: "INFO", gallery: "GALLERIA", download: "SCARICA", credits: "CREDITI" },
    hero: { sub: "PRONTO PER IL ROUND 3?", download: "SCARICA", achievements: "OBIETTIVI" },
    about: { title: "INFORMAZIONI SULLA MOD", p1: "Pronto a giocare ancora...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> è un progetto creato dai fan, ispirato all'iconica mod <span class=\"red\">Vs. Sonic.EXE</span> del 2021. Realizzato per catturare l'atmosfera oscura e la nostalgia dell'originale, questo progetto riporta parte del contenuto cancellato con nuove reinterpretazioni della storia, delle canzoni e dei personaggi.", p3: "Con incontri inquietanti, grafiche rinnovate e tracce reimmaginate, <strong>Vs Sonic.EXE (Unofficial)</strong> mira a offrire un'esperienza al contempo nostalgica e fresca ai fan della mod originale.", f1: "Oltre 50 canzoni ricreate", f2: "Oltre 20 personaggi giocabili e avversari", f3: "Sistema completo di obiettivi con trofei GameJolt", f4: "Arte e animazioni uniche per ogni personaggio", f5: "Supporto multilingue" },
    download: { title: "SCARICA", sub: "Disponibile ora", gjSpan: "Gioca e guadagna trofei", note: "Questa mod è un progetto creato dai fan e non è affiliata con SEGA o con il team originale di Sonic.EXE." },
    achievements: { title: "OBIETTIVI", gjSub: "Collega il tuo account GameJolt per salvare i tuoi progressi", gjUserPlaceholder: "Nome utente GameJolt", gjTokenPlaceholder: "Token GameJolt", gjConnect: "CONNETTI", gjHelp: "Ottieni il tuo token su <span class=\"red\">gamejolt.com → Menu Profilo → Game Token</span>", gjDisconnect: "DISCONNETTI", gjCan: "Riuscirai a sbloccarli tutti?" },
    updates: { title: "AGGIORNAMENTI", sub: "NOVITÀ IN ARRIVO", u1: "Il nostro primo aggiornamento post-lancio sarà la <strong>Versione 1.5</strong>, che porterà il cast di <strong>PARALLAX</strong> nella mod insieme alle canzoni dello <strong>Speciale Natalizio</strong>. Speriamo davvero di rendere realtà questo aggiornamento e siamo entusiasti di continuare ad espandere l'esperienza con ancora più contenuti.", u2: "Guardando più al futuro, la <strong>Versione 2</strong> si preannuncia come il nostro aggiornamento più grande e ambizioso di sempre. Continuerà la campagna della <strong>Modalità Storia (Story Mode)</strong> con il suo secondo capitolo, <strong>Overthrow</strong>, dove giocherai nei panni di <strong>Girlfriend</strong> dopo essere stata misteriosamente teletrasportata durante il filmato di Triple Trouble. Segui il suo viaggio mentre affronta nuove minacce, scopre verità nascoste e vive la storia da una prospettiva completamente diversa. Questo aggiornamento introdurrà anche i membri rimanenti del cast di <strong>Sound Test</strong> e <strong>File Extensions</strong>. Con nuove canzoni, meccaniche e sorprese, il nostro obiettivo è offrire un'esperienza diversa da qualsiasi cosa abbiamo creato in precedenza." },
    comments: { title: "COMMENTI", sub: "Lascia un messaggio — apparirà sul nostro server Discord", namePlaceholder: "Il tuo nome", msgPlaceholder: "Il tuo commento...", send: "INVIA", sending: "Invio in corso...", ok: "Commento inviato!", errFields: "Inserisci il tuo nome e un commento.", errConn: "Connessione fallita. Riprova." },
    credits: { title: "CREDITI", sub: "Il team di sviluppo" },
    footer: { legal1: "Mod FNF creata dai fan. Non affiliata con SEGA o con il team originale di Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "ASSASSINO DI DEI", desc: "Supera la Settimana Principale" },
      lordx: { title: "NON TORNARE", desc: "Trova e sconfiggi Lord X" },
      majin: { title: "IL DIVERTIMENTO ERA INFINITO", desc: "Trova e sconfiggi Majin e Mazin" },
      tailsdoll: { title: "Hai sentito la luce del sole?", desc: "Trova e sconfiggi Tails Doll" },
      fleetway: { title: "Caos Controllato!", desc: "Trova e sconfiggi Fleetway" },
      exe: { title: "Tornatene nella gabbia!", desc: "Trova e sconfiggi EXE" },
      sanic: { title: "Lo faresti di nuovo?", desc: "Trova e sconfiggi Sanic" },
      needlemouse: { title: "Potresti ripetere?", desc: "Trova e sconfiggi Needlemouse" },
      chaotix: { title: "Non era Tails...", desc: "Trova e sconfiggi Chaotix" },
      scorched: { title: "È stato rimpiazzato", desc: "Trova e sconfiggi Scorched" },
      demogri: { title: "Oh oh!", desc: "Trova e sconfiggi Demogri & Griatos" },
      bratwurst: { title: "Dov'è il combattimento bonus?", desc: "Trova e sconfiggi Bratwurst" },
      omw: { title: "Do You Know Da Wae?", desc: "Trova e sconfiggi OMW.EXE" },
      devoid: { title: "Il riccio della notte.", desc: "Trova e sconfiggi Devoid" },
      rerun: { title: "Come la mod di FNF?!", desc: "Trova e sconfiggi Re-Run" },
      soink: { title: "Adobe per favore...", desc: "Trova e sconfiggi Soink.FLA" },
      ugly: { title: "Uh... Miao?", desc: "Trova e sconfiggi Movie Sonic" },
      sunky: { title: "Sinistra, su, giù... destra?", desc: "Trova e sconfiggi Sunky" },
      fatal: { title: "Un'Esperienza FATALE", desc: "Concedi a Fatal Error l'accesso al tuo gioco" },
      starved: { title: "Un ultimo pasto", desc: "Trova e sconfiggi Starved Eggman" },
      crazy: { title: "TU NON ERI SONIC", desc: "Sconfiggi Psycho Tails" },
      coldsteel: { title: "niente di personale ragazzino", desc: "Trova e sconfiggi Coldsteel" },
      genesys: { title: "BF È PASSATO", desc: "Trova e sconfiggi Genesys Eggman" },
      educator: { title: "Benvenuti nella mia scuola!", desc: "Trova e sconfiggi Educator" },
      fileextensions: { title: "TROPPI SONIC", desc: "Sconfiggi tutti i personaggi di File Extensions" },
      rings: { title: "Allergico agli Anelli", desc: "Supera Triple Trouble senza raccogliere alcun anello" },
      norings: { title: "Io sono la Velocità!", desc: "Supera Manual Blast senza premere alcun anello" },
      tripledeaths: { title: "Problemi ad andare avanti?", desc: "Guarda tutti i Game Over in Triple Trouble" },
      dagarden: { title: "AMANTE DELLA MUSICA!", desc: "Completa la libreria musicale del DA Garden" },
      parallax: { title: "L'altro lato dell'anello", desc: "Entra nel menu PARALLAX" },
      secondary: { title: "Cosa diavolo sta succedendo...", desc: "Trova tutti i codici segreti" },
      sega: { title: "MESSAGGIO RICEVUTO", desc: "Ricevi una notifica da SEGA Enterprise" },
      popup: { title: "UN PO' DI ORGANIZZAZIONE!", desc: "Supera Fatality senza chiudere nessun pop-up" },
      super: { title: "Super Giocatore!", desc: "Ottieni Rank A o superiore in 5 canzoni" },
      hyper: { title: "Iper Giocatore!!", desc: "Ottieni Rank P in qualsiasi canzone" },
      die: { title: "Fai semplicemente pena...", desc: "Ottieni ogni singolo Game Over" },
      credits: { title: "Investigatore di Fonti", desc: "Guarda i crediti della mod" },
      finale: { title: "Vuoi toccare un po' d'erba?", desc: "Finisci l'intera mod" }
    }
  },
  ar: {
    name: "العربية", flag: "🇸🇦",
    langScreen: { title: "اختر اللغة", subtitle: "اختر لغتك للمتابعة" },
    warning: { title: "تحذير!", line1: "هذا المود غير مناسب للأطفال أو الأشخاص الحساسين.", line2: "يحتوي هذا المود على أضواء وامضة و/أو صور قد تسبب انزعاجاً أو نوبات لدى الأشخاص المصابين بالصرع الحساس للضوء.", question: "هل تريد المتابعة على أي حال؟", yes: "نعم", no: "لا" },
    nav: { home: "الرئيسية", about: "نبذة", download: "تنزيل", achievements: "الإنجازات", updates: "التحديثات", credits: "فريق العمل" },
    mobileMenu: { home: "الرئيسية", about: "نبذة", gallery: "المعرض", download: "تنزيل", achievements: "الإنجازات", updates: "التحديثات", credits: "فريق العمل" },
    hero: { sub: "هل أنت مستعد للجولة الثالثة؟", download: "تنزيل", achievements: "الإنجازات" },
    about: { title: "عن المود", p1: "هل أنت مستعد للعب مرة أخرى...؟", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> هو مشروع إحياء من صنع المعجبين، مستوحى من مود <span class=\"red\">Vs. Sonic.EXE</span> الشهير الصادر عام 2021. صُمّم ليستعيد الأجواء المظلمة والحنين اللذين تميّز بهما المود الأصلي، ويعيد جزءاً من المحتوى الملغى برؤية جديدة للقصة والأغاني والشخصيات.", p3: "بلقاءات مخيفة ورسوميات مُجدّدة وأغانٍ أُعيد تخيّلها، يهدف <strong>Vs Sonic.EXE (Unofficial)</strong> إلى تقديم تجربة تجمع بين الحنين والتجديد لمحبّي المود الأصلي.", f1: "أكثر من 50 أغنية مُعاد إنتاجها", f2: "أكثر من 20 شخصية وخصماً", f3: "نظام إنجازات كامل مع كؤوس GameJolt", f4: "رسوم وحركات فريدة لكل شخصية", f5: "دعم لغات متعددة" },
    download: { title: "تنزيل", sub: "متاح الآن", gjSpan: "العب واربح الكؤوس", note: "هذا المود مشروع من صنع المعجبين، ولا يرتبط بشركة SEGA ولا بفريق Sonic.EXE الأصلي." },
    achievements: { title: "الإنجازات", gjSub: "اربط حسابك في GameJolt لعرض تقدّمك", gjUserPlaceholder: "اسم المستخدم في GameJolt", gjTokenPlaceholder: "رمز GameJolt", gjConnect: "ربط", gjHelp: "احصل على الرمز من <span class=\"red\">gamejolt.com ← قائمة الملف الشخصي ← Game Token</span>", gjDisconnect: "قطع الاتصال", gjCan: "هل تستطيع فتحها كلها؟" },
    updates: { title: "التحديثات", sub: "ما القادم؟", u1: "أول تحديث لنا بعد الإطلاق سيكون <strong>الإصدار 1.5</strong>، وسيضيف شخصيات <strong>PARALLAX</strong> إلى المود مع أغاني <strong>حلقة عيد الميلاد الخاصة</strong>. نتمنى بشدة أن نحقق هذا التحديث، ونحن متحمسون لمواصلة توسيع التجربة بمزيد من المحتوى.", u2: "وبالنظر إلى أبعد من ذلك، يتشكّل <strong>الإصدار 2</strong> ليكون أكبر تحديثاتنا وأكثرها طموحاً. سيُكمل حملة <strong>وضع القصة</strong> بفصلها الثاني <strong>Overthrow</strong>، حيث ستلعب بشخصية <strong>Girlfriend</strong> بعد أن تُنقل بشكل غامض خلال المشهد السينمائي في Triple Trouble. تابع رحلتها وهي تواجه تهديدات جديدة وتكشف حقائق خفية وتعيش القصة من منظور مختلف تماماً. كما سيضيف هذا التحديث بقية شخصيات <strong>Sound Test</strong> و<strong>File Extensions</strong>. ومع أغانٍ وآليات لعب ومفاجآت جديدة، هدفنا أن نقدّم تجربة لم نصنع مثلها من قبل." },
    comments: { title: "التعليقات", sub: "اترك رسالة — ستظهر في سيرفر Discord الخاص بنا", namePlaceholder: "اسمك", msgPlaceholder: "تعليقك...", send: "إرسال", sending: "جارٍ الإرسال...", ok: "تم إرسال التعليق!", errFields: "أدخل اسمك وتعليقك.", errConn: "فشل الاتصال. حاول مرة أخرى." },
    credits: { title: "فريق العمل", sub: "الفريق الذي يقف وراء المود" },
    footer: { legal1: "مود FNF من صنع المعجبين، ولا يرتبط بشركة SEGA ولا بفريق Sonic.exe الأصلي.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementSecretDesc: "افتح هذا الإنجاز لترى وصفه.",
    achievementsList: {
      xeno: { title: "قاتل الآلهة", desc: "أكمل الأسبوع الرئيسي" },
      rings: { title: "حساسية من الحلقات", desc: "أكمل Triple Trouble دون جمع أي حلقة" },
      tripledeaths: { title: "هل تواجه صعوبة في التقدم؟", desc: "شاهد جميع مشاهد الموت في Triple Trouble" },
      lordx: { title: "لا تعد أبداً", desc: "اعثر على Lord X واهزمه" },
      byebye: { title: "قل باي باي!", desc: "اعثر على السر المخفي في Cycles" },
      majin: { title: "المتعة لا نهائية", desc: "اعثر على Majin وMazin واهزمهما" },
      tailsdoll: { title: "هل شعرت بأشعة الشمس؟", desc: "اعثر على Tails Doll واهزمه" },
      fleetway: { title: "تمت السيطرة على الفوضى!", desc: "اعثر على Fleetway واهزمه" },
      exe: { title: "عُد إلى قفصك!", desc: "اعثر على EXE واهزمه" },
      sunkyvalley: { title: "حليب وحبوب", desc: "اعثر على Sunky في The Valley" },
      pepe: { title: "Magos y Magas!", desc: "اعثر على Pepe el Mago في The Valley" },
      luigikid: { title: "إذن... هل ما زال تحدي Exe مستمراً؟", desc: "اعثر على Luigikid في The Valley" },
      sanic: { title: "هل ستعيد كل ذلك من جديد؟", desc: "اعثر على Sanic واهزمه" },
      needlemouse: { title: "هل يمكنك تكرار ذلك؟", desc: "اعثر على Needlemouse واهزمه" },
      lukas: { title: "LUKAS WORLD", desc: "اعثر على le luter في Her World" },
      chaotix: { title: "لم يكن Tails...", desc: "اعثر على Chaotix واهزمه" },
      scorched: { title: "لقد تم استبداله", desc: "اعثر على Scorched واهزمه" },
      norings: { title: "I Show Speed!", desc: "أكمل Manual Blast دون الضغط على أي حلقة" },
      demogri: { title: "أوه أوه!", desc: "اعثر على Demogri وGriatos واهزمهما" },
      bratwurst: { title: "أين القتال الإضافي؟", desc: "اعثر على Bratwurst واهزمه" },
      omw: { title: "Do You Know Da Wae?", desc: "اعثر على OMW.EXE واهزمه" },
      neck: { title: "رقبة طويلة", desc: "اعثر على السر المخفي في OMW" },
      devoid: { title: "قنفذ الليل.", desc: "اعثر على Devoid واهزمه" },
      void: { title: "Que void", desc: "اعثر على السر المخفي في Hollow" },
      rerun: { title: "مثل مود FNF؟!", desc: "اعثر على Re-Run واهزمه" },
      soink: { title: "أرجوك يا Adobe...", desc: "اعثر على Soink.FLA واهزمه" },
      ugly: { title: "إمم... مياو؟", desc: "اعثر على Movie Sonic واهزمه" },
      sunky: { title: "يسار، أعلى، أسفل... يمين؟", desc: "اعثر على Sunky واهزمه" },
      troll: { title: "SUNKYTASTIC!", desc: "اعثر على سر Sunky Troll المخفي" },
      fatal: { title: "تجربة قاتلة", desc: "اسمح لـ Fatal Error بالوصول إلى لعبتك" },
      tumbalacasamami: { title: "Tumba la casa mami", desc: "اعثر على السر المخفي في Fatality" },
      starved: { title: "وجبة أخيرة", desc: "اعثر على Starved Eggman واهزمه" },
      sega: { title: "تم استلام الرسالة", desc: "احصل على إشعار من SEGA Enterprise" },
      crazy: { title: "لم تكن سونيك", desc: "اهزم Psycho Tails" },
      coldsteel: { title: "لا شيء شخصي يا فتى", desc: "اعثر على Coldsteel واهزمه" },
      genesys: { title: "لقد رحل BF", desc: "اعثر على Genesys Eggman واهزمه" },
      educator: { title: "مرحباً بك في مدرستي!", desc: "اعثر على Educator واهزمه" },
      sonichu: { title: "صعقة إلى أقصى حد!", desc: "اعثر على Sonichu واهزمه" },
      shocks: { title: "يا له من Volt Tackle، صحيح؟!", desc: "مُت بصعقات Sonichu الكهربائية" },
      fileextensions: { title: "الكثير من السونيكات", desc: "اهزم جميع شخصيات File Extensions" },
      parallax: { title: "الجانب الآخر من الحلقة", desc: "ادخل إلى قائمة PARALLAX" },
      mattpro: { title: "Mattpro", desc: "Mattpro" },
      dagarden: { title: "عاشق الموسيقى!", desc: "أكمل مكتبة أغاني DA Garden" },
      secondary: { title: "ما الذي يحدث بحق الجحيم...", desc: "اعثر على جميع الرموز الثانوية" },
      credits: { title: "محقق المصادر", desc: "شاهد قائمة فريق عمل المود" },
      explotion: { title: "اخرج من رأسي يا رجل", desc: "فجّر رأس أحد المطورين في قائمة فريق العمل" },
      super: { title: "لاعب خارق!", desc: "احصل على تقييم A أو أعلى في 5 أغانٍ" },
      hyper: { title: "لاعب فائق!!", desc: "احصل على تقييم P في أي أغنية" },
      die: { title: "أنت سيئ فحسب…", desc: "شاهد جميع شاشات الخسارة" },
      finale: { title: "هل تريد أن تلمس بعض العشب؟", desc: "أكمل المود بالكامل" }
    }
  },
  pl: {
    name: "Polski", flag: "🇵🇱",
    langScreen: { title: "WYBIERZ JĘZYK", subtitle: "Wybierz język, aby kontynuować" },
    warning: { title: "OSTRZEŻENIE!", line1: "Ten mod nie jest przeznaczony dla dzieci ani osób o słabych nerwach.", line2: "Ten mod zawiera migające światła i/lub obrazy, które mogą powodować dyskomfort lub drgawki u osób z padaczką fotogenną.", question: "CZY CHCESZ KONTYNUOWAĆ?", yes: "TAK", no: "NIE" },
    nav: { home: "STRONA GŁÓWNA", about: "O MODZIE", download: "POBIERZ", achievements: "OSIĄGNIĘCIA", updates: "AKTUALIZACJE", credits: "TWÓRCY" },
    mobileMenu: { home: "STRONA GŁÓWNA", about: "O MODZIE", gallery: "GALERIA", download: "POBIERZ", credits: "TWÓRCY" },
    hero: { sub: "GOTOWY NA RUNDĘ 3?", download: "POBIERZ", achievements: "OSIĄGNIĘCIA" },
    about: { title: "O MODZIE", p1: "Gotowy zagrać jeszcze raz...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong> to fanowski projekt inspirowany kultowym modem <span class=\"red\">Vs. Sonic.EXE</span> z 2021 roku. Stworzony, aby odtworzyć mroczną atmosferę i nostalgię oryginału, projekt przywraca część anulowanej zawartości z zupełnie nowymi interpretacjami historii, piosenek i postaci.", p3: "Dzięki przerażającym spotkaniom, odświeżonej oprawie wizualnej i zremasterowanym utworom, <strong>Vs Sonic.EXE (Unofficial)</strong> ma na celu dostarczenie fanom oryginalnego moda zarówno nostalgicznych, jak i świeżych wrażeń.", f1: "50+ odtworzonych na nowo utworów", f2: "20+ grywalnych postaci i przeciwników", f3: "Pełny system osiągnięć z trofeami GameJolt", f4: "Unikalna grafika i animacje dla każdej postaci", f5: "Wsparcie dla wielu języków" },
    download: { title: "POBIERZ", sub: "Dostępne teraz", gjSpan: "Graj i zdobywaj trofea", note: "Ten mod jest projektem stworzonym przez fanów i nie jest powiązany z firmą SEGA ani oryginalnym zespołem Sonic.EXE." },
    achievements: { title: "OSIĄGNIĘCIA", gjSub: "Połącz konto GameJolt, aby zapisywać postępy", gjUserPlaceholder: "Nazwa użytkownika GameJolt", gjTokenPlaceholder: "Token GameJolt", gjConnect: "POŁĄCZ", gjHelp: "Zdobądź token tutaj: <span class=\"red\">gamejolt.com → Menu Profilu → Game Token</span>", gjDisconnect: "ROZŁĄCZ", gjCan: "Czy uda ci się odblokować je wszystkie?" },
    updates: { title: "AKTUALIZACJE", sub: "NADCHODZĄCE ZMIANY", u1: "Nasza pierwsza aktualizacja po premierze zaplanowana jest jako <strong>Wersja 1.5</strong>, która wprowadzi obsadę <strong>PARALLAX</strong> do moda wraz z piosenkami ze <strong>Świątecznego Specjału</strong>. Bardzo chcielibyśmy urzeczywistnić tę aktualizację i cieszymy się, że będziemy mogli rozszerzać grę o jeszcze więcej zawartości.", u2: "Patrząc dalej w przyszłość, <strong>Wersja 2</strong> zapowiada się jako nasza największa i najbardziej ambitna aktualizacja. Będzie kontynuować kampanię <strong>Trybu Fabularnego (Story Mode)</strong> z drugim rozdziałem — <strong>Overthrow</strong>, w którym zagrasz jako <strong>Girlfriend</strong> po tajemniczej teleportacji podczas przerywnika Triple Trouble. Śledź jej podróż, w której stawi czoła nowym zagrożeniom, odkryje ukryte prawdy i doświadczy historii z zupełnie innej perspektywy. Aktualizacja ta wprowadzi również pozostałych członków z <strong>Sound Test</strong> oraz <strong>File Extensions</strong>. Dzięki nowym piosenkom, mechanikom i niespodziankom naszym celem jest dostarczenie wrażeń, jakich nigdy wcześniej nie stworzyliśmy." },
    comments: { title: "KOMENTARZE", sub: "Zostaw wiadomość — pojawi się na naszym serwerze Discord", namePlaceholder: "Twoje imię", msgPlaceholder: "Twój komentarz...", send: "WYŚLIJ", sending: "Wysyłanie...", ok: "Komentarz wysłany!", errFields: "Wpisz swoje imię i komentarz.", errConn: "Błąd połączenia. Spróbuj ponownie." },
    credits: { title: "TWÓRCY", sub: "Zespół twórców" },
    footer: { legal1: "Fanowski mod FNF. Niezwiązany z SEGA ani oryginalnym zespołem Sonic.exe.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "ZABÓJCA BOGÓW", desc: "Przejdź Główny Tydzień" },
      lordx: { title: "NIE WRACAJ", desc: "Znajdź i pokonaj Lorda X" },
      majin: { title: "ZABAWA BYŁA NIESKOŃCZONA", desc: "Znajdź i pokonaj Majina oraz Mazina" },
      tailsdoll: { title: "Poczułeś blask słońca?", desc: "Znajdź i pokonaj Tails Dolla" },
      fleetway: { title: "Chaos opanowany!", desc: "Znajdź i pokonaj Fleetwaya" },
      exe: { title: "Z powrotem do klatki!", desc: "Znajdź i pokonaj EXE" },
      sanic: { title: "Zrobiłbyś to jeszcze raz?", desc: "Znajdź i pokonaj Sanica" },
      needlemouse: { title: "Możesz powtórzyć?", desc: "Znajdź i pokonaj Needlemouse" },
      chaotix: { title: "To nie był Tails...", desc: "Znajdź i pokonaj Chaotixa" },
      scorched: { title: "Został zastąpiony", desc: "Znajdź i pokonaj Scorched" },
      demogri: { title: "O-oł!", desc: "Znajdź i pokonaj Demogriego i Griatosa" },
      bratwurst: { title: "Gdzie ta dodatkowa walka?", desc: "Znajdź i pokonaj Bratwursta" },
      omw: { title: "Do You Know Da Wae?", desc: "Znajdź i pokonaj OMW.EXE" },
      devoid: { title: "Jeż nocy.", desc: "Znajdź i pokonaj Devoida" },
      rerun: { title: "Jak z moda FNF?!", desc: "Znajdź i pokonaj Re-Run" },
      soink: { title: "Adobe błagam...", desc: "Znajdź i pokonaj Soink.FLA" },
      ugly: { title: "Uh... Miau?", desc: "Znajdź i pokonaj Kinowego Sonica" },
      sunky: { title: "Lewo, góra, dół... prawo?", desc: "Znajdź i pokonaj Sunky'ego" },
      fatal: { title: "FATALNE doświadczenie", desc: "Daj Fatal Errorowi dostęp do swojej gry" },
      starved: { title: "Ostatni posiłek", desc: "Znajdź i pokonaj Starved Eggmana" },
      crazy: { title: "NIE BYŁEŚ SONIKIEM", desc: "Pokonaj Psycho Tailsa" },
      coldsteel: { title: "nic osobistego dzieciaku", desc: "Znajdź i pokonaj Coldsteela" },
      genesys: { title: "BF ZDAŁ", desc: "Znajdź i pokonaj Genesys Eggmana" },
      educator: { title: "Witaj w mojej szkole!", desc: "Znajdź i pokonaj Educator" },
      fileextensions: { title: "ZA DUŻO SONIKÓW", desc: "Pokonaj wszystkie postacie File Extensions" },
      rings: { title: "Alergia na pierścienie", desc: "Przejdź Triple Trouble nie zbierając żadnego pierścienia" },
      norings: { title: "Pokażę ci prędkość!", desc: "Przejdź Manual Blast nie wciskając żadnego pierścienia" },
      tripledeaths: { title: "Problemy z postępem?", desc: "Zobacz każdą śmierć w Triple Trouble" },
      dagarden: { title: "KONESER MUZYKI!", desc: "Skompletuj bibliotekę piosenek w DA Garden" },
      parallax: { title: "Druga strona pierścienia", desc: "Wejdź do menu PARALLAX" },
      secondary: { title: "Co tu się u diabła dzieje...", desc: "Znajdź wszystkie ukryte kody" },
      sega: { title: "WIADOMOŚĆ ODEBRANA", desc: "Odbierz powiadomienie od SEGA Enterprise" },
      popup: { title: "ZACHOWAJ JAKIŚ PORZĄDEK!", desc: "Przejdź Fatality nie zamykając żadnego pop-upu" },
      super: { title: "Super Gracz!", desc: "Zdobądź rangę A lub wyższą w 5 piosenkach" },
      hyper: { title: "Hyper Gracz!!", desc: "Zdobądź rangę P w dowolnej piosence" },
      die: { title: "Po prostu słabo grasz...", desc: "Zdobądź każdy ekran Game Over" },
      credits: { title: "Inspektor Źródeł", desc: "Obejrzyj napisy końcowe moda" },
      finale: { title: "Chcesz dotknąć trawy?", desc: "Przejdź całego moda" }
    }
  },
  tr: {
    name: "Türkçe", flag: "🇹🇷",
    langScreen: { title: "DİL SEÇ", subtitle: "Devam etmek için dilinizi seçin" },
    warning: { title: "UYARI!", line1: "Bu mod çocuklar veya hassas kişiler için uygun değildir.", line2: "Bu mod, ışığa duyarlı epilepsisi olan kişilerde rahatsızlığa veya nöbete yol açabilecek yanıp sönen ışıklar ve/veya görüntüler içermektedir.", question: "YİNE DE DEVAM ETMEK İSTİYOR MUSUNUZ?", yes: "EVET", no: "HAYIR" },
    nav: { home: "ANA SAYFA", about: "HAKKINDA", download: "İNDİR", achievements: "BAŞARILAR", updates: "GÜNCELLEMELER", credits: "YAPIMCILAR" },
    mobileMenu: { home: "ANA SAYFA", about: "HAKKINDA", gallery: "GALERİ", download: "İNDİR", credits: "YAPIMCILAR" },
    hero: { sub: "3. TUR İÇİN HAZIR MISIN?", download: "İNDİR", achievements: "BAŞARILAR" },
    about: { title: "MOD HAKKINDA", p1: "Yeniden oynamaya hazır mısın...?", p2: "<strong>Friday Night Funkin': Vs Sonic.EXE (Unofficial)</strong>, 2021'in ikonik <span class=\"red\">Vs. Sonic.EXE</span> modundan ilham alan hayran yapımı bir projedir. Orijinalin karanlık atmosferini ve nostaljisini yeniden yakalamak için oluşturulan bu proje, iptal edilen içeriğin bir kısmını hikaye, şarkı ve karakterlerin yepyeni yorumlarıyla geri getiriyor.", p3: "Ürkütücü karşılaşmalar, yenilenmiş görseller ve yeniden tasarlanan parçalarla <strong>Vs Sonic.EXE (Unofficial)</strong>, orijinal modun hayranlarına hem nostaljik hem de tamamen yeni bir deneyim sunmayı hedefliyor.", f1: "50'den fazla yeniden yapılmış şarkı", f2: "20'den fazla oynanabilir karakter ve rakip", f3: "GameJolt kupalarıyla tam başarı sistemi", f4: "Her karakter için özgün çizimler ve animasyonlar", f5: "Çoklu dil desteği" },
    download: { title: "İNDİR", sub: "Şimdi oynanabilir", gjSpan: "Oyna ve kupa kazan", note: "Bu mod, hayranlar tarafından yapılmış bir projedir ve SEGA ya da orijinal Sonic.EXE ekibiyle bağlantısı yoktur." },
    achievements: { title: "BAŞARILAR", gjSub: "İlerlemenizi kaydetmek için GameJolt hesabınızı bağlayın", gjUserPlaceholder: "GameJolt Kullanıcı Adı", gjTokenPlaceholder: "GameJolt Token", gjConnect: "BAĞLAN", gjHelp: "Token'ınızı <span class=\"red\">gamejolt.com → Profil Menüsü → Game Token</span> adresinden alın", gjDisconnect: "BAĞLANTIYI KES", gjCan: "Hepsinin kilidini açabilecek misin?" },
    updates: { title: "GÜNCELLEMELER", sub: "SIRADA NE VAR", u1: "İlk lansman sonrası güncellememiz <strong>Sürüm 1.5</strong> olarak planlanmaktadır ve <strong>Yılbaşı Özel</strong> şarkılarıyla birlikte <strong>PARALLAX</strong> kadrosunu moda getirecektir. Bu güncellemeyi gerçeğe dönüştürmek istiyoruz ve oyunu daha fazla içerikle genişletmeye devam etmekten heyecan duyuyoruz.", u2: "Daha da ileriye bakıldığında, <strong>Sürüm 2</strong> şimdiye kadarki en büyük ve en iddialı güncellememiz olmaya hazırlanıyor. <strong>Hikaye Modu (Story Mode)</strong> kampanyasını ikinci bölüm <strong>Overthrow</strong> ile sürdürecek; Triple Trouble sahnesinde gizemli bir şekilde ışınlanan <strong>Girlfriend</strong> olarak oynayacaksınız. Yeni tehditlerle yüzleşirken, gizli gerçekleri ortaya çıkarırken ve hikayeyi tamamen farklı bir perspektiften yaşarken onun yolculuğunu takip edin. Bu güncelleme aynı zamanda <strong>Sound Test</strong> ve <strong>File Extensions</strong> kadrosunun kalan üyelerini de tanıtacak. Yeni şarkılar, mekanikler ve sürprizlerle hedefimiz, daha önce yarattığımız hiçbir şeye benzemeyen bir deneyim sunmaktır." },
    comments: { title: "YORUMLAR", sub: "Mesaj bırakın — Discord sunucumuzda görünecek", namePlaceholder: "Adınız", msgPlaceholder: "Yorumunuz...", send: "GÖNDER", sending: "Gönderiliyor...", ok: "Yorum gönderildi!", errFields: "Adınızı ve yorumunuzu girin.", errConn: "Bağlantı hatası. Tekrar deneyin." },
    credits: { title: "YAPIMCILAR", sub: "Geliştirici ekip" },
    footer: { legal1: "Hayranlar tarafından yapılmış FNF modu. SEGA veya orijinal Sonic.exe ekibiyle bağlantısı yoktur.", legal2: "Sonic the Hedgehog © SEGA. Friday Night Funkin' © The Funkin' Crew." },
    achievementsList: {
      xeno: { title: "TANRI KATİLİ", desc: "Ana Haftayı tamamla" },
      lordx: { title: "GERİ DÖNME", desc: "Lord X'i bul ve yen" },
      majin: { title: "EĞLENCE SONSUZDU", desc: "Majin ve Mazin'i bul ve yen" },
      tailsdoll: { title: "Güneş ışığını hissettin mi?", desc: "Tails Doll'u bul ve yen" },
      fleetway: { title: "Kaos Kontrol Altında!", desc: "Fleetway'i bul ve yen" },
      exe: { title: "Kafesine geri dön!", desc: "EXE'yi bul ve yen" },
      sanic: { title: "Hepsini tekrar yapar mıydın?", desc: "Sanic'i bul ve yen" },
      needlemouse: { title: "Bunu tekrarlayabilir misin?", desc: "Needlemouse'u bul ve yen" },
      chaotix: { title: "O Tails değildi...", desc: "Chaotix'i bul ve yen" },
      scorched: { title: "O değiştirildi", desc: "Scorched'ı bul ve yen" },
      demogri: { title: "Oh oh!", desc: "Demogri & Griatos'u bul ve yen" },
      bratwurst: { title: "Bonus dövüş nerede?", desc: "Bratwurst'u bul ve yen" },
      omw: { title: "Do You Know Da Wae?", desc: "OMW.EXE'yi bul ve yen" },
      devoid: { title: "Gecenin kirpisi.", desc: "Devoid'i bul ve yen" },
      rerun: { title: "FNF Modundaki gibi?!", desc: "Re-Run'ı bul ve yen" },
      soink: { title: "Adobe lütfen...", desc: "Soink.FLA'yı bul ve yen" },
      ugly: { title: "Uh... Miyav?", desc: "Film Sonic'i bul ve yen" },
      sunky: { title: "Sol, yukarı, aşağı... sağ?", desc: "Sunky'yi bul ve yen" },
      fatal: { title: "ÖLÜMCÜL (FATAL) Bir Deneyim", desc: "Fatal Error'a oyununa erişim izni ver" },
      starved: { title: "Son bir yemek", desc: "Starved Eggman'i bul ve yen" },
      crazy: { title: "SEN SONIC DEĞİLDİN", desc: "Psycho Tails'i yen" },
      coldsteel: { title: "kisisel bir sey degil evlat", desc: "Coldsteel'i bul ve yen" },
      genesys: { title: "BF GEÇTİ", desc: "Genesys Eggman'i bul ve yen" },
      educator: { title: "Okuluma hoş geldin!", desc: "Educator'ı bul ve yen" },
      fileextensions: { title: "ÇOK FAZLA SONIC", desc: "Tüm File Extensions karakterlerini yen" },
      rings: { title: "Yüzüklere Alerjik", desc: "Triple Trouble'ı hiçbir yüzük toplamadan tamamla" },
      norings: { title: "Ben Hızım!", desc: "Manual Blast'ı hiçbir yüzüğe basmadan tamamla" },
      tripledeaths: { title: "İlerlemekte sorun mu yaşıyorsun?", desc: "Triple Trouble'daki tüm ölümleri gör" },
      dagarden: { title: "MÜZİK AŞIĞI!", desc: "DA Garden Şarkı Kütüphanesini tamamla" },
      parallax: { title: "Yüzüğün diğer tarafı", desc: "PARALLAX Menüsüne gir" },
      secondary: { title: "Neler oluyor böyle...", desc: "Tüm gizli kodları bul" },
      sega: { title: "MESAJ ALINDI", desc: "SEGA Enterprise'dan bir bildirim al" },
      popup: { title: "BİRAZ DÜZENLİ OL!", desc: "Fatality'yi hiçbir açılır pencereyi kapatmadan tamamla" },
      super: { title: "Süper Oyuncu!", desc: "5 şarkıda A veya daha yüksek derece al" },
      hyper: { title: "Hiper Oyuncu!!", desc: "Herhangi bir şarkıda P derecesi al" },
      die: { title: "Sadece kötüsün...", desc: "Tüm Game Over ekranlarını topla" },
      credits: { title: "Kaynak Araştırmacısı", desc: "Modun yapımcılarını izle" },
      finale: { title: "Çimene dokunmak ister misin?", desc: "Tüm modu tamamla" }
    }
  }
};

function applyLang(code) {
  const L = LANGS[code];
  if (!L) return;
  localStorage.setItem('exeLang', code);
  const htmlLang = { zh: 'zh-CN', pirate: 'en' };
  document.documentElement.lang = htmlLang[code] || code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';

  document.documentElement.setAttribute('dir', code === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', code);

  document.getElementById('warningTitle').textContent    = L.warning.title;
  document.getElementById('warningLine1').textContent    = L.warning.line1;
  document.getElementById('warningLine2').textContent    = L.warning.line2;
  document.getElementById('warningQuestion').textContent = L.warning.question;
  document.getElementById('warnYes').textContent         = L.warning.yes;
  document.getElementById('warnNo').textContent          = L.warning.no;

  const navText = {
    '#home': L.nav.home, '#about': L.nav.about, '#download': L.nav.download,
    '#gallery': L.nav.achievements, '#updates': L.nav.updates, '#credits': L.nav.credits,
    '#gallery-section': L.mobileMenu.gallery,
  };
  const mobileText = {
    '#home': L.mobileMenu.home, '#about': L.mobileMenu.about, '#download': L.mobileMenu.download,
    '#gallery': L.mobileMenu.achievements, '#updates': L.mobileMenu.updates, '#credits': L.mobileMenu.credits,
    '#gallery-section': L.mobileMenu.gallery,
  };
  document.querySelectorAll('.nav-links a').forEach(a => {
    const t = navText[a.getAttribute('href')];
    if (t) a.textContent = t;
  });
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    const t = mobileText[href] || navText[href];
    if (t) a.textContent = t;
  });

  document.querySelector('.hero-sub').textContent = L.hero.sub;
  const heroBtns = document.querySelectorAll('.hero-btns .btn');
  heroBtns[0].textContent = L.hero.download;
  heroBtns[1].textContent = L.hero.achievements;

  document.querySelector('#about .section-title').textContent = L.about.title;
  const ps = document.querySelectorAll('.about-text p');
  ps[0].textContent = L.about.p1;
  ps[1].innerHTML   = L.about.p2;
  ps[2].innerHTML   = L.about.p3;
  const fs = document.querySelectorAll('.about-features li');
  fs[0].textContent = L.about.f1;
  fs[1].textContent = L.about.f2;
  fs[2].textContent = L.about.f3;
  fs[3].textContent = L.about.f4;
  fs[4].textContent = L.about.f5;

  const dlTitle = document.querySelector('#download .section-title');
  const dlSub   = document.querySelector('#download .section-sub');
  const dlSpan  = document.querySelector('.dl-info span');
  const dlNote  = document.querySelector('.dl-note');
  if (dlTitle) dlTitle.textContent = L.download.title;
  if (dlSub)   dlSub.textContent   = L.download.sub;
  if (dlSpan)  dlSpan.textContent  = L.download.gjSpan;
  if (dlNote)  dlNote.textContent  = L.download.note;

  const achBtn = document.querySelector('#gallery .section-title');
  if (achBtn) achBtn.textContent = L.achievements.title;
  const gjSub = document.querySelector('#gjLogin .section-sub');
  if (gjSub) gjSub.textContent = L.achievements.gjSub;
  const gjUser = document.getElementById('gjUsername');
  if (gjUser) gjUser.placeholder = L.achievements.gjUserPlaceholder;
  const gjTok = document.getElementById('gjToken');
  if (gjTok) gjTok.placeholder = L.achievements.gjTokenPlaceholder;
  const gjSubmit = document.getElementById('gjSubmit');
  if (gjSubmit) gjSubmit.textContent = L.achievements.gjConnect;
  const gjHelp = document.getElementById('gjHelp');
  if (gjHelp) gjHelp.innerHTML = L.achievements.gjHelp;
  const gjLogout = document.getElementById('gjLogout');
  if (gjLogout) gjLogout.textContent = L.achievements.gjDisconnect;
  const gjCan = document.querySelector('#achieveBody .achieve-sub');
  if (gjCan) gjCan.textContent = L.achievements.gjCan;

  const updBtn = document.querySelector('#updates .section-title');
  if (updBtn) updBtn.textContent = L.updates.title;
  const updSub = document.querySelector('#updates .section-sub');
  if (updSub && L.updates.sub) updSub.textContent = L.updates.sub;
  const updBodies = document.querySelectorAll('.update-body p');
  if (updBodies[0]) updBodies[0].innerHTML = L.updates.u1;
  if (updBodies[1]) updBodies[1].innerHTML = L.updates.u2;

  const cmtBtn = document.querySelector('#comments .accordion-btn span:first-child');
  if (cmtBtn) cmtBtn.textContent = L.comments.title;
  const cmtSub = document.querySelector('#comments .section-sub');
  if (cmtSub) cmtSub.textContent = L.comments.sub;
  const cmtName = document.getElementById('cmtName');
  if (cmtName) cmtName.placeholder = L.comments.namePlaceholder;
  const cmtMsg = document.getElementById('cmtMsg');
  if (cmtMsg) cmtMsg.placeholder = L.comments.msgPlaceholder;
  const cmtSubmit = document.getElementById('cmtSubmit');
  if (cmtSubmit) cmtSubmit.textContent = L.comments.send;

  const credBtn = document.querySelector('#credits .section-title');
  if (credBtn) credBtn.textContent = L.credits.title;
  const galTitle = document.querySelector('#gallery-section .section-title');
  if (galTitle && L.mobileMenu.gallery) galTitle.textContent = L.mobileMenu.gallery;

  const credSub = document.querySelector('#creditsBody .section-sub');
  if (credSub) credSub.textContent = L.credits.sub;

  const fl = document.querySelectorAll('.footer-legal');
  if (fl[0]) fl[0].textContent = L.footer.legal1;
  if (fl[1]) fl[1].textContent = L.footer.legal2;

  window.currentLang = code;
  if (window.renderAchievements) window.renderAchievements();
}

function showLangScreen() {
  const saved = localStorage.getItem('exeLang');
  if (saved && LANGS[saved]) applyLang(saved);

  const screen = document.createElement('div');
  screen.id = 'langScreen';
  screen.innerHTML = `
    <div id="langBox">
      <div id="langTitle">SELECT LANGUAGE</div>
      <div id="langSubtitle">Choose your language to continue</div>
      <div id="langGrid">
        ${Object.entries(LANGS).map(([code, l]) => `
          <button class="lang-btn" data-code="${code}">${l.name}</button>
        `).join('')}
      </div>
    </div>
  `;
  document.body.prepend(screen);

  screen.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.code;
      applyLang(code);
      screen.style.opacity = '0';
      screen.style.transition = 'opacity 0.4s ease';
      setTimeout(() => screen.remove(), 400);
    });
  });
}

showLangScreen();
window.LANGS = LANGS;