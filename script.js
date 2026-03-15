// script.js - Version CORRIGÉE avec affichage des personnages

// ==================== CLASSE PRINCIPALE ====================
class PromptGenerator {
    constructor() {
        this.userData = {};
        this.typeMapping = {
            'default': 'pirate',
            'fairy': 'fairy',
            'vampire': 'vampire',
            'elf': 'elf',
            'superman': 'superman',
            'cowgirl': 'cowgirl',
            'pirate': 'pirate',
            'princess': 'princess',
            'siren': 'siren',
            'cavewoman': 'cavewoman',
            'athena': 'athena',
            'avatar': 'avatar',
            'avatarwarrior': 'avatarwarrior',
            'avatarchief': 'avatarchief'
        };
    }

    getActionType(personnageKey) {
        const country = countries[personnageKey];
        if (!country) return 'default';
        
        let type = country.type || personnageKey;
        
        const actions = window.personnageActions || {};
        if (actions[type]) {
            return type;
        }
        
        if (this.typeMapping[type]) {
            return this.typeMapping[type];
        }
        
        return 'default';
    }

    getRandomDecor(personnageKey) {
        if (typeof window.getRandomDecor === 'function') {
            return window.getRandomDecor(personnageKey);
        }
        return "dans un studio de danse professionnel";
    }

    getRandomAction(personnageKey) {
        if (typeof window.getRandomAction === 'function') {
            return window.getRandomAction(personnageKey);
        }
        return "elle danse sensuellement face caméra";
    }

    getUnifiedDecor() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return "studio professionnel";
        
        const countryKey = selected.dataset.country;
        const country = countries[countryKey];
        
        const customDecorEnabled = document.getElementById('enableCustomDecor')?.checked || false;
        const customDecorText = document.getElementById('customDecorText')?.value || '';
        
        if (customDecorEnabled && customDecorText.trim() !== '') {
            return customDecorText.trim();
        }
        
        const actionType = this.getActionType(countryKey);
        const randomDecor = this.getRandomDecor(actionType);
        
        if (randomDecor && randomDecor !== "studio professionnel") {
            return randomDecor;
        }
        
        if (country && country.background) {
            return country.background;
        }
        
        return "dans un studio de danse professionnel avec éclairages tamisés";
    }

    getFinaleGesture() {
        const finaleGestures = [];
        
        if (document.getElementById('finalBisou')?.checked) 
            finaleGestures.push('elle envoie UN DERNIER BISOU LANGOUREUX à la caméra, ses doigts effleurant ses lèvres avant de s\'ouvrir lentement vers le spectateur, les yeux mi-clos dans un regard de désir');
        
        if (document.getElementById('finalCiao')?.checked) 
            finaleGestures.push('elle fait un "CIAO" SENSUEL de la main, ses doigts bougeant gracieusement comme des vagues, un sourire complice aux lèvres, regardant le spectateur droit dans les yeux');
        
        if (document.getElementById('finalMasque')?.checked) 
            finaleGestures.push('elle RAPPROCHE SES MAINS DE L\'OBJECTIF pour masquer l\'écran, laissant deviner un sourire mystérieux derrière, comme une promesse de revenir, ses doigts caressant presque la caméra');
        
        if (document.getElementById('finalCoeur')?.checked) 
            finaleGestures.push('elle forme un CŒUR AVEC SES MAINS au-dessus de sa tête, puis le porte lentement à sa poitrine en fermant les yeux, offrant son cœur au spectateur');
        
        if (document.getElementById('finalClignement')?.checked) 
            finaleGestures.push('elle fait un LONG CLIN D\'ŒIL APPUYÉ, presque un slow blink, sa paupière s\'abaissant très lentement, accompagné d\'un sourire en coin terriblement charmeur');
        
        if (document.getElementById('finalCascade')?.checked) 
            finaleGestures.push('elle envoie une CASCADE DE BISOUS du bout des doigts, comme une pluie de baisers magiques qui flottent vers le spectateur, ses mains dessinant des cœurs dans l\'air');
        
        if (document.getElementById('finalRevelation')?.checked) 
            finaleGestures.push('elle ÉCARTE LES BRAS dans un geste théâtral de révélation, offrant son corps comme un cadeau au spectateur, la tête légèrement inclinée, regard intense');
        
        if (document.getElementById('finalSalut')?.checked) 
            finaleGestures.push('elle exécute une RÉVÉRENCE GRACIEUSE, son corps s\'abaissant lentement tout en gardant le regard levé vers la caméra, un salut royal digne d\'une reine');
        
        if (document.getElementById('finalRegard')?.checked) 
            finaleGestures.push('elle FIXE LA CAMÉRA INTENSÉMENT pendant 2 secondes, ses yeux plongeant dans ceux du spectateur, puis un sourire lent naît sur ses lèvres, d\'abord timide puis éclatant');
        
        if (document.getElementById('finalViens')?.checked) 
            finaleGestures.push('elle fait un DERNIER GESTE "VIENS VERS MOI" avec l\'index, exécuté très lentement de haut en bas, sa main invitant le spectateur à la rejoindre dans une danse éternelle');
        
        if (document.getElementById('finalSouffle')?.checked) 
            finaleGestures.push('elle ENVOIE UN SOUFFLE SENSUEL vers la caméra, comme un baiser volé, ses lèvres formant une moue parfaite, la buée imaginaire embuant l\'objectif');
        
        if (document.getElementById('finalEpaule')?.checked) 
            finaleGestures.push('elle DÉCOUVRE LENTEMENT SON ÉPAULE en faisant glisser le tissu, regardant la caméra avec un air de défi sensuel, puis la recouvre tout aussi lentement');
        
        if (document.getElementById('finalCheveux')?.checked) 
            finaleGestures.push('elle REJETTE SES CHEVEUX EN ARRIÈRE d\'un geste lent et sensuel, sa main glissant à travers les mèches, le cou offert au regard du spectateur');
        
        if (finaleGestures.length === 0) {
            return 'elle envoie un dernier bisou du bout des doigts, suivit d\'un clin d\'œil complice';
        }
        
        if (finaleGestures.length === 1) {
            return finaleGestures[0];
        } else {
            const lastGesture = finaleGestures.pop();
            if (finaleGestures.length === 1) {
                return finaleGestures[0] + ' puis ' + lastGesture;
            } else {
                return finaleGestures.join(', ') + ', puis enfin ' + lastGesture;
            }
        }
    }

    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const duree = document.getElementById('finalMaintien')?.value || '2';
        const emotion = document.getElementById('finalEmotion')?.value || 'satisfaite';
        
        const options = {
            'freeze': `l'image se fige sur CE MOMENT PRÉCIS, ses yeux continuant de vivre, un léger sourire ${emotion} aux lèvres, comme une photographie sensuelle qui dure ${duree} secondes`,
            'fondu': `un FONDU AU NOIR PROGRESSIF enveloppe l'image, partant des bords pour terminer sur son regard, comme une porte qui se ferme doucement sur ${duree} secondes`,
            'fonduBlanc': `un FONDU AU BLANC LUMINEUX l'illumine, comme un flash d'appareil photo qui révélerait sa silhouette de déesse, pendant ${duree} secondes`,
            'zoom': `un ZOOM LENT ET DOUX sur son visage, capturant l'émotion ${emotion} de son regard, ses yeux devenant plus grands à l'écran pendant ${duree} secondes`,
            'flou': `un FLOU ARTISTIQUE PROGRESSIF, ses traits devenant de plus en plus éthérés comme un rêve qui s'achève, ne laissant que son sourire visible pendant ${duree} secondes`
        };
        
        return options[option] || options['freeze'];
    }

    getPublicInteraction() {
        const interaction = document.getElementById('finalInteraction')?.value || 'regard';
        
        const interactions = {
            'regard': 'elle plonge son regard DROIT DANS LES YEUX DU SPECTATEUR, créant une connexion intime et personnelle',
            'sourire': 'elle offre un SOURIRE ÉCLATANT ET PERSONNEL, comme si elle ne dansait que pour LUI, pour ELLE',
            'clin': 'elle fait un CLIN D\'ŒIL COMPLICE, comme un secret partagé entre elle et chaque spectateur',
            'main': 'elle TEND LA MAIN vers l\'écran, comme pour toucher le spectateur à travers la vitre',
            'tous': 'elle ALTERNATE REGARD, SOURIRE ET CLIN D\'ŒIL, s\'adressant personnellement à chaque personne derrière l\'écran'
        };
        
        return interactions[interaction] || interactions['regard'];
    }

    collectUserData() {
        const selectedCard = document.querySelector('.character-card.selected');
        const countryKey = selectedCard ? selectedCard.dataset.country : 'spain';
        
        this.userData = {
            country: countryKey,
            leftPalmColor: document.getElementById('leftPalmColor').value,
            rightPalmColor: document.getElementById('rightPalmColor').value,
            leftPalmColorName: this.getColorName(document.getElementById('leftPalmColor').value),
            rightPalmColorName: this.getColorName(document.getElementById('rightPalmColor').value),
            startingOutfit: {
                top: document.getElementById('startingTop').value,
                bottom: document.getElementById('startingBottom').value,
                details: document.getElementById('startingDetails').value
            },
            finalOutfit: document.getElementById('finalOutfitDescription').value,
            naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
            enableFluo: document.getElementById('enableFluo')?.checked || false,
            fluoColor: document.getElementById('fluoColor')?.value || 'rose fluo',
            fluoIntensity: document.getElementById('fluoIntensity')?.value || 9,
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                regards: document.getElementById('gesteRegards')?.checked || false,
                sourires: document.getElementById('gesteSourires')?.checked || false,
                clins: document.getElementById('gesteClins')?.checked || false,
                levres: document.getElementById('gesteLevres')?.checked || false,
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            effects: {
                confettis: document.getElementById('effectConfettis')?.checked || false,
                poudre: document.getElementById('effectPoudre')?.checked || false,
                petales: document.getElementById('effectPétales')?.checked || false,
                fumee: document.getElementById('effectFumee')?.checked || false,
                lumieres: document.getElementById('effectLumières')?.checked || false,
                paillettes: document.getElementById('effectPaillettes')?.checked || false
            },
            musicStyle: document.getElementById('musicStyle')?.value || 'traditionnelle',
            soundEffects: document.getElementById('soundEffects')?.checked || false,
            
            alienMode: document.getElementById('enableAlienMode')?.checked || false,
            
            floatingWords: {
                enabled: document.getElementById('enableMagicTexts')?.checked || false
            },
            
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || ''
            },
            
            finale: {
                bisou: document.getElementById('finalBisou')?.checked || false,
                ciao: document.getElementById('finalCiao')?.checked || false,
                masque: document.getElementById('finalMasque')?.checked || false,
                coeur: document.getElementById('finalCoeur')?.checked || false,
                clignement: document.getElementById('finalClignement')?.checked || false,
                cascade: document.getElementById('finalCascade')?.checked || false,
                revelation: document.getElementById('finalRevelation')?.checked || false,
                salut: document.getElementById('finalSalut')?.checked || false,
                regard: document.getElementById('finalRegard')?.checked || false,
                viens: document.getElementById('finalViens')?.checked || false,
                souffle: document.getElementById('finalSouffle')?.checked || false,
                epaule: document.getElementById('finalEpaule')?.checked || false,
                cheveux: document.getElementById('finalCheveux')?.checked || false,
                option: document.getElementById('finalOption')?.value || 'freeze',
                maintien: document.getElementById('finalMaintien')?.value || '2',
                emotion: document.getElementById('finalEmotion')?.value || 'satisfaite',
                interaction: document.getElementById('finalInteraction')?.value || 'regard'
            }
        };
    }

    getColorName(hex) {
        const colors = {
            '#ff0000': 'rouge passion',
            '#ff4500': 'orange brûlé',
            '#ff00ff': 'rose fuchsia',
            '#00ff00': 'vert émeraude',
            '#0000ff': 'bleu Majorelle',
            '#ffff00': 'jaune soleil',
            '#ffd700': 'or étincelant',
            '#c0c0c0': 'argent métallique',
            '#000000': 'noir profond',
            '#ffffff': 'blanc pur'
        };
        return colors[hex.toLowerCase()] || 'couleur personnalisée';
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'subtile, charmeuse légère';
        if (level <= 6) return 'charmeuse, coquine';
        return 'ultra-séductrice, magnétique, explosive';
    }

    generateMusicText() {
        let musicText = '';
        
        switch(this.userData.musicStyle) {
            case 'traditionnelle':
                musicText = 'Musique traditionnelle authentique du pays';
                break;
            case 'moderne':
                musicText = 'Remix moderne et électro de la musique traditionnelle';
                break;
            case 'epique':
                musicText = 'Musique épique de film, orchestrale et puissante';
                break;
            case 'silence':
                musicText = 'Silence absolu, seulement les bruits de ses pas et de sa respiration';
                break;
            default:
                musicText = 'Musique d\'ambiance adaptée';
        }
        
        if (this.userData.soundEffects) {
            musicText += ', avec effets sonores (baisers, claquements de doigts, froissements de tissu)';
        }
        
        return musicText;
    }

    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
        if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
        }

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part1) ? 
            danceMoves[this.userData.country].part1.join('\n    - ') : 
            'mouvements sensuels';

        return `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence

👇 INSTRUCTIONS ULTRA-RÉALISTES POUR UN VISAGE HUMAIN AUTHENTIQUE 👇
- Rendu hyper réaliste style photo professionnelle (PAS DE RENDU IA LISSE)
- Peau avec texture naturelle : pores visibles, relief cutané
- Cils : chaque cil est individuel, courbé naturellement
- 👁️ YEUX 8K NATURELS : iris hyper détaillés, vaisseaux sanguins visibles

Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit

LES MAINS PEINTES :
- Paume gauche : peinture ${this.userData.leftPalmColorName}
- Paume droite : peinture ${this.userData.rightPalmColorName}
- Ces deux couleurs annoncent les teintes dominantes de sa future tenue

TENUE DE DÉPART :
- Haut : ${this.userData.startingOutfit.top}
- Bas : ${this.userData.startingOutfit.bottom}
- Détails : ${this.userData.startingOutfit.details}
- Cheveux naturels : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION :
La personne exécute une danse ${country.dance} sensuelle :
    - ${danceMovesText}

GESTES DE SÉDUCTION :
${gesturesText}

TRANSITION :
Au moment le plus intense de sa danse, elle rapproche ses mains peintes de l'objectif dans un geste théâtral, les plaquant contre la caméra pour masquer entièrement l'image.

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant que les mains cachent l'objectif, elle aura le temps de SE CHANGER COMPLÈTEMENT
- La transformation aura lieu HORS CAMÉRA
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;
    }

    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';

        let gesturesText = '';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers à la caméra\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois\n`;
        }

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part2) ? 
            danceMoves[this.userData.country].part2.join('\n    - ') : 
            'mouvements encore plus intenses';

        const musicText = this.generateMusicText();
        const actionType = this.getActionType(this.userData.country);
        const decorText = this.getUnifiedDecor();
        const actionAleatoire = this.getRandomAction(actionType);
        const finale = this.getFinaleGesture();
        const finalOption = this.getFinalOption();
        const publicInteraction = this.getPublicInteraction();

        return `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE - ABSOLUMENT CRUCIAL :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- MÊMES TRAITS, MÊME VISAGE
- La transformation ne concerne QUE les vêtements, PAS le visage

👇 INSTRUCTIONS ULTRA-RÉALISTES RENFORCÉES :
- Même peau : pores visibles, grains de beauté, rougeurs légères
- Mêmes cils individuels, mêmes sourcils avec poils distincts
- 👁️ YEUX 8K NATURELS conservés

⚠️ TRANSITION NATURELLE - INSTRUCTION CAPITALE ⚠️ :
- Pendant que les mains masquaient l'objectif, elle a eu le temps de SE CHANGER COMPLÈTEMENT
- La transformation a eu lieu HORS CAMÉRA - RIEN de magique
- Dès que les mains s'écartent, le résultat FINAL est déjà visible
- AUCUN changement visible pendant cette PARTIE 2

🎵 AMBIANCE SONORE :
${musicText}

NOUVELLE TENUE (DÉJÀ PORTÉE) :
${this.userData.finalOutfit}

CHEVEUX TRANSFORMÉS :
${this.userData.enableFluo ? 
`- Cheveux DÉJÀ colorés en ${this.userData.fluoColor} ${fluoIntensityText}
- Style : ${this.userData.hairStyle}` : 
`- Les cheveux conservent leur couleur naturelle (${this.userData.naturalHair})`}

DANSE APRÈS TRANSFORMATION :
Elle reprend sa danse ${country.dance} :
    - ${danceMovesText}

⚡ ACTION SPÉCIALE ⚡
- ${actionAleatoire}

GESTES DE SÉDUCTION :
${gesturesText}

ARRIÈRE-PLAN :
${decorText}

🎬 FINALE SPECTACULAIRE :
⏱️ CHRONOLOGIE :
- SECONDES 1-4 : Danse intense
- SECONDE 4 : Elle se tourne vers le spectateur
- SECONDE 4.5-5.5 : Geste final
- SECONDES 5.5-6.5 : Maintien de la pose

💋 GESTE FINAL :
${finale}

🎯 INTERACTION :
${publicInteraction}

📸 FIN : ${finalOption}`;
    }

    generateConsignes() {
        const country = countries[this.userData.country];
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : Le sujet de la PARTIE 2 a EXACTEMENT le même visage que la PARTIE 1
2. TRANSITION NATURELLE : La transformation a eu lieu HORS CAMÉRA
3. RENDU ULTRA-RÉALISTE : Peau avec pores, imperfections - PAS DE PEAU LISSE IA
4. YEUX 8K : Iris hyper détaillés, vaisseaux visibles
5. SILENCE TOTAL : Pas un mot - elle danse uniquement
6. GESTES DE SÉDUCTION : ${this.userData.gestures.bisous ? 'BISOUS' : ''} ${this.userData.gestures.viens ? 'et VIENS' : ''}
7. TENUE DE DÉPART COMPLÈTEMENT REMPLACÉE
8. CHEVEUX ${this.userData.enableFluo ? 'FLUO' : 'NATURELS'}
9. INSPIRATION : ${country.name} - ${country.dance}
10. FINALE : À la 4ème seconde, geste final puis maintien de pose`;
    }

    generateFullPrompt() {
        this.collectUserData();
        
        let part1 = this.generatePart1();
        let part2 = this.generatePart2();
        let consignes = this.generateConsignes();
        
        return {
            part1: part1,
            part2: part2,
            consignes: consignes,
            full: part1 + '\n\n' + part2 + '\n\n' + consignes
        };
    }
}

// ==================== FONCTIONS D'INITIALISATION ====================

function initCharacters() {
    console.log("🎭 Initialisation des personnages...");
    const grid = document.getElementById('countryGrid');
    if (!grid) {
        console.error("❌ Grille des personnages non trouvée!");
        return;
    }
    
    if (typeof countries === 'undefined') {
        console.error("❌ countries n'est pas défini!");
        return;
    }
    
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    
    console.log(`✅ ${Object.keys(countries).length} personnages chargés`);
    
    const firstCard = document.querySelector('.character-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        const selectedSpan = document.querySelector('#selectedCountry span');
        if (selectedSpan) {
            selectedSpan.textContent = countries[firstCard.dataset.country].name;
        }
    }
    
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const selectedSpan = document.querySelector('#selectedCountry span');
            if (selectedSpan) {
                selectedSpan.textContent = countries[this.dataset.country].name;
            }
        });
    });
    
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const search = e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(search) ? 'block' : 'none';
            });
        });
    }
}

function initEvents() {
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.addEventListener('click', () => {
            document.getElementById('imageInput').click();
        });
    }
}

function initImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeBtn = document.getElementById('removeImage');
    
    if (!uploadArea || !imageInput || !imagePreview || !previewImg || !removeBtn) return;
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#00f3ff';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) handleImage(file);
    });
    
    imageInput.addEventListener('change', (e) => {
        if (e.target.files[0]) handleImage(e.target.files[0]);
    });
    
    removeBtn.addEventListener('click', () => {
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'flex';
        imageInput.value = '';
        previewImg.src = '#';
    });
    
    function handleImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function displayPrompt(prompts, tabId) {
    const display = document.getElementById('promptDisplay');
    if (!display) return;
    
    let text = '';
    switch(tabId) {
        case 'tabFull': text = prompts.full || ''; break;
        case 'tabPart1': text = prompts.part1 || ''; break;
        case 'tabPart2': text = prompts.part2 || ''; break;
        case 'tabConsignes': text = prompts.consignes || ''; break;
    }
    
    display.innerHTML = text.replace(/\n/g, '<br>');
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected) return;
    
    const country = countries[selected.dataset.country];
    const fluoActive = document.getElementById('enableFluo')?.checked ? 'OUI' : 'NON';
    
    const recap = `
🌍 Personnage : ${country.name}
💃 Danse : ${country.dance}
💇 Cheveux fluo : ${fluoActive}
    `;
    
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) recapDiv.innerHTML = recap.replace(/\n/g, '<br>');
}

// ==================== ATTACHEMENT DES ÉVÉNEMENTS ====================

function attachEvents() {
    console.log("🔗 Attachement des événements...");
    
    const generateBtn = document.getElementById('generatePrompt');
    if (generateBtn) {
        const generator = new PromptGenerator();
        
        generateBtn.addEventListener('click', function() {
            console.log("🎬 Génération du prompt...");
            const prompts = generator.generateFullPrompt();
            window.lastPrompts = prompts;
            const activeTab = document.querySelector('.tab-btn.active');
            if (activeTab) {
                displayPrompt(prompts, activeTab.id);
            }
            updateRecap();
        });
    }
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    document.getElementById('copyPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => alert('✅ Prompt copié!'));
    });
    
    document.getElementById('suggestColors')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez d\'abord un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    
    document.getElementById('generateOutfit')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez d\'abord un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        const outfitDesc = `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}.`;
        document.getElementById('finalOutfitDescription').value = outfitDesc;
    });
    
    // Toggles
    document.getElementById('enableMagicTexts')?.addEventListener('change', function() {
        const options = document.getElementById('magicTextsOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() {
        const options = document.getElementById('customDecorOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('enableAlienMode')?.addEventListener('change', function() {
        const options = document.getElementById('alienOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
    
    // Sliders
    const fluoIntensity = document.getElementById('fluoIntensity');
    if (fluoIntensity) {
        fluoIntensity.addEventListener('input', function() {
            const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
            document.getElementById('intensityValue').textContent = labels[this.value-1] || 'Éclatant';
        });
    }
    
    const seductionLevel = document.getElementById('seductionLevel');
    if (seductionLevel) {
        seductionLevel.addEventListener('input', function() {
            document.getElementById('seductionValue').textContent = this.value + '/10';
        });
    }
}

// ==================== DÉMARRAGE ====================

function startApp() {
    console.log("🚀 Démarrage de l'application...");
    
    initCharacters();
    initEvents();
    initImageUpload();
    attachEvents();
    
    console.log("✅ Application prête!");
}

// Attendre que la page soit chargée
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

// Exposer les fonctions globalement
window.PromptGenerator = PromptGenerator;
window.initCharacters = initCharacters;
window.displayPrompt = displayPrompt;
window.updateRecap = updateRecap;

console.log("📦 script.js chargé");
