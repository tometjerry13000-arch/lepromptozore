// script.js - Version ULTIME avec FINALE SPECTACULAIRE SENSUEL

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
        if (!country) return 'pirate';
        
        let type = country.type || personnageKey;
        
        if (typeof personnageActions !== 'undefined' && personnageActions[type]) {
            return type;
        }
        
        if (this.typeMapping[type]) {
            return this.typeMapping[type];
        }
        
        console.warn(`Type "${type}" non trouvé, utilisation de "pirate" comme fallback`);
        return 'pirate';
    }

    // ===== NOUVELLE MÉTHODE POUR LE FINALE SENSUEL =====
    getFinaleGesture() {
        const finaleGestures = [];
        
        // Collection de gestes finaux sensuels et interactifs avec le public
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
        
        // Si aucun geste sélectionné, retourner un geste par défaut sensuel
        if (finaleGestures.length === 0) {
            return 'elle envoie un dernier bisou du bout des doigts, suivit d\'un clin d\'œil complice, puis caresse lentement son épaule en fixant la caméra';
        }
        
        // Combiner tous les gestes sélectionnés de façon fluide
        if (finaleGestures.length === 1) {
            return finaleGestures[0];
        } else {
            // Combiner avec "puis" et "enfin" pour une narration fluide
            const lastGesture = finaleGestures.pop();
            if (finaleGestures.length === 1) {
                return finaleGestures[0] + ' puis ' + lastGesture;
            } else {
                return finaleGestures.join(', ') + ', puis enfin ' + lastGesture;
            }
        }
    }

    // ===== NOUVELLE MÉTHODE POUR LES OPTIONS DE FIN =====
    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const duree = document.getElementById('finalMaintien')?.value || '2';
        const emotion = document.getElementById('finalEmotion')?.value || 'satisfaite';
        
        const options = {
            'freeze': {
                description: `l'image se fige sur CE MOMENT PRÉCIS, ses yeux continuant de vivre, un léger sourire ${emotion} aux lèvres, comme une photographie sensuelle qui dure ${duree} secondes`,
                technique: 'freeze frame avec maintien de l’expression faciale'
            },
            'fondu': {
                description: `un FONDU AU NOIR PROGRESSIF enveloppe l'image, partant des bords pour terminer sur son regard, comme une porte qui se ferme doucement sur ${duree} secondes`,
                technique: 'fondu au noir cinématographique'
            },
            'fonduBlanc': {
                description: `un FONDU AU BLANC LUMINEUX l'illumine, comme un flash d'appareil photo qui révélerait sa silhouette de déesse, pendant ${duree} secondes`,
                technique: 'éblouissement progressif'
            },
            'zoom': {
                description: `un ZOOM LENT ET DOUX sur son visage, capturant l'émotion ${emotion} de son regard, ses yeux devenant plus grands à l'écran pendant ${duree} secondes`,
                technique: 'zoom avant intime'
            },
            'flou': {
                description: `un FLOU ARTISTIQUE PROGRESSIF, ses traits devenant de plus en plus éthérés comme un rêve qui s'achève, ne laissant que son sourire visible pendant ${duree} secondes`,
                technique: 'flou de rêve'
            },
            'iris': {
                description: `un EFFET IRIS CINÉMATOGRAPHIQUE, le cercle se refermant lentement sur son visage comme dans les films muets, sur ${duree} secondes`,
                technique: 'fermeture à l’iris'
            }
        };
        
        return {
            description: options[option]?.description || options['freeze'].description,
            technique: options[option]?.technique || options['freeze'].technique,
            duree: duree,
            emotion: emotion
        };
    }

    // ===== MÉTHODE POUR L'INTERACTION AVEC LE PUBLIC =====
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
        
        const bisousCheckbox = document.getElementById('gesteBisous');
        const viensCheckbox = document.getElementById('gesteViens');
        
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
                bisous: bisousCheckbox ? bisousCheckbox.checked : false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: viensCheckbox ? viensCheckbox.checked : false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            background: document.getElementById('backgroundStyle')?.value || 'auto',
            customBackground: document.getElementById('customBackgroundDesc')?.value || '',
            effects: {
                confettis: document.getElementById('effectConfettis')?.checked || false,
                poudre: document.getElementById('effectPoudre')?.checked || false,
                petales: document.getElementById('effectPétales')?.checked || false,
                fumee: document.getElementById('effectFumee')?.checked || false,
                lumieres: document.getElementById('effectLumières')?.checked || false,
                paillettes: document.getElementById('effectPaillettes')?.checked || false
            },
            effectExplosion: document.getElementById('effectExplosion')?.checked || false,
            effectTeleportation: document.getElementById('effectTeleportation')?.checked || false,
            effectMirror: document.getElementById('effectMirror')?.checked || false,
            effectTimeLapse: document.getElementById('effectTimeLapse')?.checked || false,
            effectHologram: document.getElementById('effectHologram')?.checked || false,
            effectClone: document.getElementById('effectClone')?.checked || false,
            surpriseLevel: document.getElementById('surpriseLevel')?.value || 7,
            
            fireEffect: document.getElementById('effectFeu')?.checked || false,
            waterEffect: document.getElementById('effectEau')?.checked || false,
            iceEffect: document.getElementById('effectGlace')?.checked || false,
            lightningEffect: document.getElementById('effectEclairs')?.checked || false,
            butterflyEffect: document.getElementById('effectPapillons')?.checked || false,
            featherEffect: document.getElementById('effectPlumes')?.checked || false,
            laserEffect: document.getElementById('effectLaser')?.checked || false,
            bubbleEffect: document.getElementById('effectBulles')?.checked || false,
            
            musicStyle: document.getElementById('musicStyle')?.value || 'traditionnelle',
            soundEffects: document.getElementById('soundEffects')?.checked || false,
            
            alienMode: document.getElementById('enableAlienMode')?.checked || false,
            alienSkin: document.getElementById('alienSkin')?.checked || false,
            alienSkinColor: document.getElementById('alienSkinColor')?.value || 'argent',
            alienEyes: document.getElementById('alienEyes')?.checked || false,
            alienEyesColor: document.getElementById('alienEyesColor')?.value || 'rouge',
            alienAntenna: document.getElementById('alienAntenna')?.checked || false,
            antennaStyle: document.getElementById('antennaStyle')?.value || 'antennes',
            alienGlow: document.getElementById('alienGlow')?.checked || false,
            glowColor: document.getElementById('glowColor')?.value || 'bleu',
            alienTattoos: document.getElementById('alienTattoos')?.checked || false,
            tattooStyle: document.getElementById('tattooStyle')?.value || 'symboles',
            alienHolograms: document.getElementById('alienHolograms')?.checked || false,
            hologramType: document.getElementById('hologramType')?.value || 'etoiles',
            alienVoice: document.getElementById('alienVoice')?.checked || false,
            alienGravity: document.getElementById('alienGravity')?.checked || false,
            alienTeleportation: document.getElementById('alienTeleportation')?.checked || false,
            
            floatingWords: {
                enabled: document.getElementById('enableMagicTexts')?.checked || false,
                words: {
                    follow: document.getElementById('textFollow')?.checked || false,
                    like: document.getElementById('textLike')?.checked || false,
                    subscribe: document.getElementById('textSubscribe')?.checked || false,
                    love: document.getElementById('textLove')?.checked || false,
                    watch: document.getElementById('textWatch')?.checked || false,
                    share: document.getElementById('textShare')?.checked || false,
                    heart: document.getElementById('textHeart')?.checked || false,
                    star: document.getElementById('textStar')?.checked || false
                },
                effect: document.getElementById('textEffect')?.value || 'neon',
                movement: document.getElementById('textMovement')?.value || 'float',
                color: document.getElementById('textColor')?.value || '#ff6b6b',
                color2: document.getElementById('textColor2')?.value || '#4ecdc4',
                size: document.getElementById('textSize')?.value || 'medium',
                quantity: document.getElementById('textQuantity')?.value || 'medium',
                position: document.getElementById('textPosition')?.value || 'around',
                timing: document.getElementById('textTiming')?.value || 'whole',
                effects: {
                    sparkle: document.getElementById('effectSparkle')?.checked || false,
                    pulse: document.getElementById('effectPulse')?.checked || false,
                    fade: document.getElementById('effectFade')?.checked || false,
                    trail: document.getElementById('effectTrail')?.checked || false,
                    shadow: document.getElementById('effectShadow')?.checked || false,
                    effect3d: document.getElementById('effect3d')?.checked || false
                },
                customText: document.getElementById('customText')?.value || ''
            },
            
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || '',
                ambiance: document.getElementById('decorAmbiance')?.value || 'lumineux',
                effets: {
                    lumieres: document.getElementById('decorEffetLumieres')?.checked || false,
                    particules: document.getElementById('decorEffetParticules')?.checked || false,
                    reflets: document.getElementById('decorEffetReflets')?.checked || false,
                    profondeur: document.getElementById('decorEffetProfondeur')?.checked || false
                }
            },
            
            // ===== NOUVELLES DONNÉES POUR LE FINALE =====
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
            '#ff6600': 'orange vif',
            '#ff00ff': 'rose fuchsia',
            '#ff69b4': 'rose bonbon',
            '#00ff00': 'vert émeraude',
            '#00ced1': 'turquoise',
            '#0000ff': 'bleu Majorelle',
            '#4169e1': 'bleu royal',
            '#ffff00': 'jaune soleil',
            '#ffd700': 'or étincelant',
            '#c0c0c0': 'argent métallique',
            '#000000': 'noir profond',
            '#ffffff': 'blanc pur',
            '#8b4513': 'marron cuir',
            '#800080': 'violet profond',
            '#4b0082': 'indigo',
            '#2e8b57': 'vert forêt',
            '#ff8c00': 'orange foncé',
            '#dc143c': 'rouge cramoisi'
        };
        return colors[hex.toLowerCase()] || 'couleur personnalisée';
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'subtile, charmeuse légère';
        if (level <= 6) return 'charmeuse, coquine';
        return 'ultra-séductrice, magnétique, explosive';
    }

    getSurprisePhrase(level) {
        if (level <= 3) return 'surprise subtile';
        if (level <= 6) return 'effet wow';
        if (level <= 8) return 'explosion visuelle';
        return 'EXPÉRIENCE HALLUCINANTE';
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

    generateAdvancedEffects() {
        let effects = [];
        
        if (this.userData.effectExplosion) effects.push('explosion de couleurs aveuglante');
        if (this.userData.effectTeleportation) effects.push('effet de téléportation avec distorsion de l\'espace');
        if (this.userData.effectMirror) effects.push('effet miroir avec double d\'elle-même');
        if (this.userData.effectTimeLapse) effects.push('accéléré puis ralenti au moment de la révélation');
        if (this.userData.effectHologram) effects.push('hologrammes flottants autour d\'elle');
        if (this.userData.effectClone) effects.push('duplication en plusieurs clones qui dansent ensemble');
        
        if (this.userData.fireEffect) effects.push('flammes tourbillonnantes');
        if (this.userData.waterEffect) effects.push('vagues d\'eau cristalline');
        if (this.userData.iceEffect) effects.push('cristaux de glace étincelants');
        if (this.userData.lightningEffect) effects.push('éclairs zébrant le ciel');
        if (this.userData.butterflyEffect) effects.push('papillons magiques multicolores');
        if (this.userData.featherEffect) effects.push('plumes légères dansantes');
        if (this.userData.laserEffect) effects.push('lasers colorés synchronisés');
        if (this.userData.bubbleEffect) effects.push('bulles scintillantes irisées');
        
        if (effects.length > 0) {
            const surpriseWord = this.getSurprisePhrase(this.userData.surpriseLevel);
            return `\nEFFETS SPECTACULAIRES AVANCÉS (${surpriseWord}) : ${effects.join(', ')}.`;
        }
        return '';
    }

    generateAlienTransformations() {
        if (!this.userData.alienMode) return '';
        
        let alienText = '\n\nTRANSFORMATIONS EXTRA-TERRESTRES (DÉJÀ ACCOMPLIES) :\n';
        
        if (this.userData.alienSkin) {
            alienText += `- Peau transformée : texture ${this.userData.alienSkinColor} irisée, effet métal liquide, reflets holographiques (DÉJÀ VISIBLE)\n`;
        }
        
        if (this.userData.alienEyes) {
            alienText += `- Yeux : devenus lumineux, couleur ${this.userData.alienEyesColor}, avec un éclat surnaturel (DÉJÀ VISIBLE)\n`;
        }
        
        if (this.userData.alienAntenna) {
            const antennaText = this.userData.antennaStyle === 'antennes' ? 'Antennes' : 
                this.userData.antennaStyle === 'cornes' ? 'Cornes' : 
                this.userData.antennaStyle === 'couronne' ? 'Couronne lumineuse' : 'Halo de lumière';
            alienText += `- ${antennaText} sur la tête, qui pulsent en rythme (DÉJÀ PRÉSENTES)\n`;
        }
        
        if (this.userData.alienGlow) {
            alienText += `- Corps phosphorescent : lueur ${this.userData.glowColor} qui émane de sa peau (DÉJÀ VISIBLE)\n`;
        }
        
        if (this.userData.alienTattoos) {
            const tattooText = this.userData.tattooStyle === 'symboles' ? 'Symboles aliens' :
                this.userData.tattooStyle === 'runes' ? 'Runes anciennes' :
                this.userData.tattooStyle === 'galaxie' ? 'Motifs galactiques' : 'Circuits imprimés';
            alienText += `- Tatouages lumineux : motifs ${tattooText} qui s'allument et s'éteignent sur tout son corps (DÉJÀ PRÉSENTS)\n`;
        }
        
        if (this.userData.alienHolograms) {
            const hologramText = this.userData.hologramType === 'etoiles' ? 'Étoiles filantes' :
                this.userData.hologramType === 'planetes' ? 'Planètes miniatures' :
                this.userData.hologramType === 'symboles' ? 'Symboles mystiques' : 'Sphères d\'énergie';
            alienText += `- Hologrammes flottants : des ${hologramText} apparaissent et dansent autour d'elle (DÉJÀ PRÉSENTS)\n`;
        }
        
        if (this.userData.alienVoice) {
            alienText += `- Voix modulée : sons extraterrestres, vibrations cosmiques\n`;
        }
        
        if (this.userData.alienGravity) {
            alienText += `- Effet apesanteur : ses mouvements semblent défier la gravité, elle flotte légèrement\n`;
        }
        
        if (this.userData.alienTeleportation) {
            alienText += `- Effet téléportation : des scintillements lumineux créent une illusion de déplacement instantané\n`;
        }
        
        return alienText;
    }

    generateFloatingWordsForVideo(partie = "part2") {
        if (!this.userData.floatingWords?.enabled) return '';
        
        let wordsList = [];
        if (this.userData.floatingWords.words.follow) wordsList.push('"Follow Me"');
        if (this.userData.floatingWords.words.like) wordsList.push('"Like Me"');
        if (this.userData.floatingWords.words.subscribe) wordsList.push('"Subscribe"');
        if (this.userData.floatingWords.words.love) wordsList.push('"Love Me"');
        if (this.userData.floatingWords.words.watch) wordsList.push('"Watch Me"');
        if (this.userData.floatingWords.words.share) wordsList.push('"Share Me"');
        if (this.userData.floatingWords.words.heart) wordsList.push('❤️ (cœurs)');
        if (this.userData.floatingWords.words.star) wordsList.push('✨ (étoiles)');
        
        if (this.userData.floatingWords.customText) {
            wordsList.push(`"${this.userData.floatingWords.customText}"`);
        }
        
        if (wordsList.length === 0) return '';
        
        let countText = '';
        switch(this.userData.floatingWords.quantity) {
            case 'few': countText = '3-4 textes'; break;
            case 'medium': countText = '5-7 textes'; break;
            case 'many': countText = '8-10 textes'; break;
        }
        
        let sizeText = '';
        switch(this.userData.floatingWords.size) {
            case 'small': sizeText = 'petits'; break;
            case 'medium': sizeText = 'moyens'; break;
            case 'large': sizeText = 'grands'; break;
            case 'xlarge': sizeText = 'très grands'; break;
        }
        
        let effectText = '';
        let specialEffects = [];
        if (this.userData.floatingWords.effects.sparkle) specialEffects.push('scintillement');
        if (this.userData.floatingWords.effects.pulse) specialEffects.push('pulsation lumineuse');
        if (this.userData.floatingWords.effects.fade) specialEffects.push('apparition/disparition progressive');
        if (this.userData.floatingWords.effects.trail) specialEffects.push('traînée lumineuse');
        if (this.userData.floatingWords.effects.shadow) specialEffects.push('ombre portée');
        if (this.userData.floatingWords.effects.effect3d) specialEffects.push('effet 3D');
        
        if (specialEffects.length > 0) {
            effectText = `- Effets supplémentaires : ${specialEffects.join(', ')}`;
        }
        
        let timingText = '';
        if (partie === "part1") {
            timingText = "PENDANT LA PREMIÈRE PARTIE";
        } else {
            timingText = "PENDANT LA DEUXIÈME PARTIE";
        }
        
        return `
✨ EFFETS TEXTES MAGIQUES ${timingText} ✨
- Des textes ${wordsList.join(', ')} apparaissent et flottent dans l'air autour d'elle
- Style d'affichage : ${this.userData.floatingWords.effect}
- Mouvement : ${this.userData.floatingWords.movement}
- Couleurs : ${this.userData.floatingWords.color} (principal) et ${this.userData.floatingWords.color2} (secondaire)
- Taille des textes : ${sizeText}
- Quantité : ${countText}
- Position : ${this.userData.floatingWords.position}
- Les textes réagissent à ses mouvements et la suivent
${effectText}
- Ils apparaissent de façon magique et créent une ambiance immersive
- Parfait pour les réseaux sociaux et l'interaction avec le spectateur`;
    }

    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
        if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
        if (this.userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches)\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
        }

        const danceMoves = country.danceMoves?.part1?.join('\n    - ') || 'mouvements sensuels';
        
        const floatingTextsPart1 = this.generateFloatingWordsForVideo("part1");

        const prompt = `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence - traits reconnaissables, conservés avec précision

👇 INSTRUCTIONS ULTRA-RÉALISTES POUR UN VISAGE HUMAIN AUTHENTIQUE 👇
- Rendu hyper réaliste style photo professionnelle (PAS DE RENDU IA LISSE)
- Peau avec texture naturelle : pores visibles à différentes échelles, relief cutané
- Imperfections subtiles conservées : petits grains de beauté, rougeurs légères, variations de teinte
- Poils de duvet très fins visibles sur les joues et le contour du visage
- Cils : chaque cil est individuel, courbé naturellement, pas en paquets
- Sourcils : poils dessinés un par un, avec différentes directions et épaisseurs
- Lèvres : texture naturelle avec de minuscules ridules, reflets humides

👁️ YEUX ULTRA-RÉALISTES 8K :
- Iris hyper détaillés avec motifs complexes (comme une photo macro)
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Reflets multiples dans les yeux (catchlights) nets et naturels
- Pupilles qui réagissent à la lumière
- Netteté maximale sur les yeux (point focal de l'image)

ÉCLAIRAGE CINÉMATOGRAPHIQUE NATUREL :
- Éclairage de type Rembrandt doux : triangle de lumière sur la joue
- Source principale à 45°, ombres naturelles qui sculptent les volumes
- Reflets naturels dans les yeux qui donnent de la vie au regard
- La lumière révèle la texture de la peau, ne la gomme pas

RENDU PHOTOGRAPHIQUE AUTHENTIQUE :
- Grain de film léger pour éviter l'aspect "plastique" des IA
- Pas de filtre beauté, pas de lissage excessif
- Le visage doit être indiscernable d'une vraie photo professionnelle
- Asymétries naturelles du visage conservées (pas de symétrie parfaite)

Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit
Regards complices et coquins

LES MAINS PEINTES (COULEURS ANNONÇATRICES) :
- Paume gauche : peinture ${this.userData.leftPalmColorName}
- Paume droite : peinture ${this.userData.rightPalmColorName}
- Poudre scintillante sur les doigts
- Les deux couleurs restent parfaitement distinctes et ne se mélangent pas
- Elle joue avec ses mains face caméra, les tourne, les admire
- Ces deux couleurs annoncent les teintes dominantes de sa future tenue

TENUE DE DÉPART (SERA COMPLÈTEMENT REMPLACÉE) :
- Haut : ${this.userData.startingOutfit.top}
- Bas : ${this.userData.startingOutfit.bottom}
- Détails : ${this.userData.startingOutfit.details}
- Cheveux dans leur couleur naturelle : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION - MOUVEMENTS PRÉCIS :
La personne exécute une danse ${country.dance} sensuelle et ${seductionPhrase} :
    - ${danceMoves}

GESTES DE SÉDUCTION :
${gesturesText}

JEUX DE REGARDS :
- Elle fixe la caméra droit dans les yeux
- Elle bat des cils lentement
- Elle suit les mouvements du spectateur
- Elle regarde de bas en haut sensuellement

${floatingTextsPart1}

TRANSITION :
Au moment le plus intense de sa danse, elle rapproche ses mains peintes de l'objectif dans un geste théâtral et sensuel, les plaquant contre la caméra pour masquer entièrement l'image, cachant complètement la vue pendant la fin de cette première partie. Elle laisse deviner un sourire mystérieux juste avant que ses mains ne couvrent l'objectif.

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant que les mains cachent l'objectif (fin de cette partie), elle aura le temps de SE CHANGER COMPLÈTEMENT
- La transformation (nouvelle tenue, nouveaux cheveux, nouveau maquillage, effets) aura lieu HORS CAMÉRA
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;

        return prompt;
    }

    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';

        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs et victorieux\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés et complices\n';
        if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
        if (this.userData.gestures.mains) gesturesText += '- Caresses plus appuyées sur tout le corps\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers à la caméra pendant la danse\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois, de plus en plus charmeur\n`;
        }

        const danceMoves = country.danceMoves?.part2?.join('\n    - ') || 'mouvements encore plus intenses';

        let baseEffects = [];
        if (this.userData.effects.confettis) baseEffects.push('confettis aux couleurs de la tenue');
        if (this.userData.effects.poudre) baseEffects.push('poudre scintillante');
        if (this.userData.effects.petales) baseEffects.push('pluie de pétales');
        if (this.userData.effects.fumee) baseEffects.push('fumée légère');
        if (this.userData.effects.lumieres) baseEffects.push('lumières colorées');
        if (this.userData.effects.paillettes) baseEffects.push('paillettes dans l\'air');
        
        const baseEffectsText = baseEffects.join(', ');

        const advancedEffects = this.generateAdvancedEffects();
        const alienTransformations = this.generateAlienTransformations();
        const musicText = this.generateMusicText();
        
        const floatingTextsPart2 = this.generateFloatingWordsForVideo("part2");

        const actionType = this.getActionType(this.userData.country);
        
        const decorAleatoire = (typeof getRandomDecor === 'function') ? 
            getRandomDecor(actionType) : (country.background || 'studio professionnel');
        
        const actionAleatoire = (typeof getRandomAction === 'function') ? 
            getRandomAction(actionType) : 'elle danse sensuellement';

        // GESTION DU DÉCOR PERSONNALISÉ
        let decorText = '';
        if (this.userData.customDecor?.enabled && this.userData.customDecor.text) {
            decorText = this.userData.customDecor.text;
            
            let ambianceText = '';
            switch(this.userData.customDecor.ambiance) {
                case 'lumineux': ambianceText = 'lumineuse et chatoyante'; break;
                case 'sombre': ambianceText = 'sombre et mystérieuse'; break;
                case 'romantique': ambianceText = 'romantique et douce'; break;
                case 'épique': ambianceText = 'épique et grandiose'; break;
                case 'féerique': ambianceText = 'féerique et magique'; break;
                case 'apocalyptique': ambianceText = 'apocalyptique et dramatique'; break;
                default: ambianceText = 'lumineuse';
            }
            
            let effetsList = [];
            if (this.userData.customDecor.effets.lumieres) effetsList.push('lumières dynamiques');
            if (this.userData.customDecor.effets.particules) effetsList.push('particules magiques');
            if (this.userData.customDecor.effets.reflets) effetsList.push('reflets miroir');
            if (this.userData.customDecor.effets.profondeur) effetsList.push('profondeur de champ cinématographique');
            
            if (effetsList.length > 0) {
                decorText += `, ambiance ${ambianceText} avec ${effetsList.join(', ')}`;
            } else {
                decorText += `, ambiance ${ambianceText}`;
            }
        } else {
            decorText = this.userData.background === 'custom' ? 
                this.userData.customBackground : 
                decorAleatoire;
        }

        // ===== GÉNÉRATION DU FINALE SPECTACULAIRE =====
        const finale = this.getFinaleGesture();
        const finalOption = this.getFinalOption();
        const publicInteraction = this.getPublicInteraction();

        const finaleText = `

🎬 FINALE SPECTACULAIRE - CONNEXION AVEC LE PUBLIC (TIMING PRÉCIS À LA 4ÈME SECONDE) :

⏱️ CHRONOLOGIE DE LA FIN (6 secondes totales) :
- SECONDES 1 à 4 : Danse intense et sensuelle comme décrite ci-dessus
- SECONDE 4 (EXACTEMENT) : Elle arrête sa chorégraphie et se tourne PLEINEMENT vers le spectateur
- SECONDE 4.5 à 5.5 : Elle exécute SON GESTE FINAL (1 seconde)
- SECONDES 5.5 à 6.5 : Elle MAINTIENT LA POSE FINALE (${finalOption.duree} secondes)
- FIN : ${finalOption.description}

🎯 INTERACTION DIRECTE AVEC LE PUBLIC :
- Pendant TOUTE cette séquence finale, ${publicInteraction}
- Elle danse POUR le spectateur, PAS pour elle-même
- Chaque geste est une OFFANDE au public, une invitation à la désirer
- Ses expressions faciales sont EXAGÉRÉMENT SENSUELLES, comme si elle voulait séduire chaque personne derrière l'écran

💋 GESTE FINAL EXÉCUTÉ À LA SECONDE 4 :
${finale}

📸 MAINTIEN DE POSE SENSUEL (${finalOption.duree} secondes) :
- Pendant le maintien, son corps reste figé mais SON VISAGE CONTINUE DE VIVRE
- Ses yeux parcourent lentement l'écran, s'attardant sur chaque spectateur imaginaire
- Sa respiration est AMPLE, sa poitrine se soulève et s'abaisse visiblement
- Un léger sourire ${finalOption.emotion} flotte sur ses lèvres
- Elle semble retenir son souffle, créant une tension sensuelle

💫 INTENTION DE LA FINALE :
- Cette séquence finale est CONÇUE POUR ÊTRE PARTAGÉE SUR LES RÉSEAUX SOCIAUX
- Le geste final est le "MOMENT VIRAL" de la vidéo
- Le spectateur doit avoir ENVIE DE REVENIR, DE REGARDER ENCORE
- La dernière image doit rester GRAVÉE DANS LA MÉMOIRE

🔥 RAPPEL SENSUEL :
- Son corps est mis en valeur par l'éclairage
- Ses courbes sont accentuées par sa pose
- Son regard transperce l'écran
- Elle est IRRÉSISTIBLE, INOUBLIABLE
`;

        const prompt = `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- Mêmes traits, même visage, expression encore plus intense
- Reconnaissable au premier coup d'œil

👇 INSTRUCTIONS ULTRA-RÉALISTES (VISAGE INCHANGÉ) 👇
- Le visage est STRICTEMENT IDENTIQUE à la PARTIE 1 avec la même texture microscopique
- Même peau : pores visibles à différentes échelles, grains de beauté, rougeurs légères
- Mêmes cils individuels, mêmes sourcils avec poils distincts
- 👁️ YEUX 8K NATURELS conservés : iris détaillés, vaisseaux visibles, reflets nets
- Même éclairage Rembrandt qui sculpte les volumes
- Même grain de film léger, pas de lissage artificiel
- La transformation ne concerne QUE les vêtements, pas le visage
- Aucun filtre beauté - rendu 100% naturel et humain

⚠️ ATTENTION - TRANSFORMATION DÉJÀ ACCOMPLIE ⚠️ :
- Pendant le court instant où les mains masquaient l'objectif (fin de la PARTIE 1), elle a eu le temps de SE CHANGER COMPLÈTEMENT
- La transformation a eu lieu HORS CAMÉRA
- Dès que les mains s'écartent, le résultat FINAL est déjà visible
- AUCUN changement ne doit être visible pendant cette PARTIE 2 (cheveux déjà colorés, tenue déjà portée, maquillage déjà appliqué)

GESTES DE SÉDUCTION IMMÉDIATS DÈS LE RETRAIT DES MAINS :
${this.userData.gestures.bisous ? '- Elle envoie UN BISOUD À LA CAMÉRA dès que ses mains se retirent' : ''}
${this.userData.gestures.viens ? '- Elle fait le geste "VIENS VERS MOI" avec son doigt, lentement, en vous fixant' : ''}
- Sourire victorieux et charmeur

🎵 AMBIANCE SONORE :
${musicText}

NOUVELLE TENUE (TOTALEMENT REMPLACÉE - DÉJÀ PORTÉE) :
Elle porte maintenant une tenue spectaculaire (déjà enfilée pendant la transition) :
${this.userData.finalOutfit}

CHEVEUX TRANSFORMÉS - COULEURS FLUO (DÉJÀ COLORÉS) :
${this.userData.enableFluo ? 
`- CHANGEMENT COMPLET - Cheveux DÉJÀ colorés en ${this.userData.fluoColor} ${fluoIntensityText}
- Intensité fluo maximale - ils brillent littéralement sous la lumière
- Style : ${this.userData.hairStyle}
- Cascade de couleur fluo qui scintille à chaque mouvement (DÈS LA PREMIÈRE IMAGE)
- Reflets néon qui attirent le regard` : 
`- Les cheveux conservent leur couleur naturelle (${this.userData.naturalHair})
- Coiffés élégamment (déjà fait)`}
${alienTransformations}

MAQUILLAGE APPLIQUÉ (DÉJÀ FAIT) :
- Teint parfait et lumineux (déjà appliqué)
- Yeux intensifiés (déjà maquillés)
- Lèvres brillantes (déjà fait)
- Paillettes subtiles (déjà présentes)
- Peau légèrement huilée pour faire scintiller la lumière (déjà préparée)

DANSE APRÈS TRANSFORMATION - MOUVEMENTS ENCORE PLUS INTENSES :
Elle reprend sa danse ${country.dance} avec une énergie décuplée :
    - ${danceMoves}

⚡ ACTION SPÉCIALE ⚡
- ${actionAleatoire}
- Elle exécute cette action TOUT EN DANSANT DE FAÇON SENSUELLE
- Ses mouvements de danse s'intègrent parfaitement à l'action

JEUX DE SÉDUCTION ACCRUS :
${gesturesText}

JEUX AVEC LA NOUVELLE TENUE (DÉJÀ PORTÉE) :
- Jeux avec les éléments de la tenue
- Mise en valeur des atouts
- Découvertes subtiles

JEUX AVEC LES CHEVEUX FLUO (DÉJÀ COLORÉS) :
- Elle passe ses mains dans ses cheveux fluo (déjà colorés)
- Les fait virevolter en tournant
- Joue avec les mèches colorées
- Les cheveux fluo deviennent un élément central de la séduction

${floatingTextsPart2}

ARRIÈRE-PLAN :
${decorText}

${advancedEffects ? advancedEffects + '\n' : ''}
EFFETS SPECTACULAIRES DE BASE :
Au moment où ses mains révèlent la transformation, explosion de ${baseEffectsText}

${finaleText}

CAMÉRA ET ÉCLAIRAGE :
- Caméra statique - elle danse POUR le spectateur, face à lui
- Éclairage cinématographique chaleureux et enveloppant
- Lumières spécifiques pour faire ressortir les cheveux fluo et les effets spéciaux
- Pendant le finale, la lumière se resserre sur elle (spotlight) pour accentuer le moment
- Ambiance intimiste et professionnelle

RAPPEL IMPORTANT :
- La transformation est DÉJÀ TERMINÉE au début de cette partie
- AUCUNE métamorphose visible pendant ces 6 secondes
- Tout a eu lieu PENDANT que les mains cachaient l'objectif dans la PARTIE 1
- La FINALE est le MOMENT CLÉ à retenir - elle doit être PARFAITE`;

        return prompt;
    }

    generateConsignes() {
        const country = countries[this.userData.country];
        
        let alienLine = '';
        if (this.userData.alienMode) {
            alienLine = '\n15. MODE EXTRA-TERRESTRE ACTIVÉ : Transformations spectaculaires incluses (peau, yeux, antennes, etc.)';
        }
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : Le sujet de la PARTIE 2 a EXACTEMENT le même visage que la PARTIE 1
2. SILENCE TOTAL : Pas un mot - elle communique par sa danse, ses regards et ses sourires
3. SÉDUCTION MAGNÉTIQUE : Elle est charmeuse, captivante, elle joue avec le spectateur
4. GESTES DE SÉDUCTION DIRECTE : ${this.userData.gestures.bisous ? 'BISOUS à la caméra' : ''} ${this.userData.gestures.viens ? 'et gestes "VIENS"' : ''}
5. TENUE DE DÉPART COMPLÈTEMENT REMPLACÉE : Plus rien de la tenue initiale
6. CHEVEUX ${this.userData.enableFluo ? 'TRANSFORMÉS EN COULEURS FLUO' : 'CONSERVÉS NATURELS'}
7. TRANSITION NATURELLE : Changement réaliste hors caméra
8. TRANSITION IMMÉDIATE : Dès que les mains s'écartent, la nouvelle tenue est visible
9. COULEURS ANNONÇATRICES : ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName} des paumes = couleurs dominantes de la tenue finale
10. MOUVEMENTS PRÉCIS : Chorégraphie technique et sensuelle
11. INSPIRATION CULTURELLE : ${country.name} - ${country.dance}
12. ⚠️ TRANSFORMATION DÉJÀ ACCOMPLIE : AUCUN changement visible pendant la PARTIE 2 - tout a eu lieu PENDANT que les mains cachaient l'objectif
13. RENDU ULTRA-RÉALISTE : Visage avec pores, défauts, imperfections - PAS DE PEAU LISSE IA
14. YEUX 8K NATURELS : Iris détaillés, vaisseaux visibles, reflets nets
15. FINALE SPECTACULAIRE : À la 4ème seconde, elle exécute son geste final face au public, maintient la pose, puis effet de fin choisi${alienLine}`;
    }

    generateFullPrompt() {
        this.collectUserData();
        
        let part1 = this.generatePart1();
        let part2 = this.generatePart2();
        
        const consignes = this.generateConsignes();
        
        return {
            part1: part1,
            part2: part2,
            consignes: consignes,
            full: part1 + '\n\n' + part2 + '\n\n' + consignes
        };
    }
}

// ==================== INITIALISATION ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Application ULTIME démarrée avec FINALE SPECTACULAIRE");
    
    initCharacters();
    initEvents();
    
    const generator = new PromptGenerator();
    
    document.getElementById('generatePrompt').addEventListener('click', function() {
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const activeTab = document.querySelector('.tab-btn.active').id;
        displayPrompt(prompts, activeTab);
        updateRecap();
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    document.getElementById('copyPrompt').addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Prompt copié dans le presse-papiers !');
        }).catch(() => {
            alert('❌ Erreur lors de la copie');
        });
    });
    
    document.getElementById('exportPrompt').addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prompt_transition.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    document.getElementById('clearPrompt').addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    
    document.getElementById('suggestColors').addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez d\'abord un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    
    document.getElementById('generateOutfit').addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez d\'abord un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        
        let outfitDesc = `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}. `;
        outfitDesc += `Éléments : ${country.finalOutfit.elements.join(', ')}. `;
        outfitDesc += `Accessoires : ${country.finalOutfit.accessories.join(', ')}.`;
        
        document.getElementById('finalOutfitDescription').value = outfitDesc;
    });
    
    const fluoIntensity = document.getElementById('fluoIntensity');
    if (fluoIntensity) {
        fluoIntensity.addEventListener('input', function() {
            const val = parseInt(this.value);
            const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
            document.getElementById('intensityValue').textContent = labels[val-1] || 'Éclatant';
        });
    }
    
    initImageUpload();
    
    // Toggle pour les options de texte magique
    const enableMagicTexts = document.getElementById('enableMagicTexts');
    if (enableMagicTexts) {
        enableMagicTexts.addEventListener('change', function() {
            const options = document.getElementById('magicTextsOptions');
            if (options) {
                options.style.display = this.checked ? 'block' : 'none';
            }
        });
    }
    
    // Toggle pour l'arrière-plan personnalisé
    const backgroundStyle = document.getElementById('backgroundStyle');
    if (backgroundStyle) {
        backgroundStyle.addEventListener('change', function() {
            const customBg = document.getElementById('customBackground');
            if (customBg) {
                customBg.style.display = this.value === 'custom' ? 'block' : 'none';
            }
        });
    }
    
    // Toggle pour le décor personnalisé
    const enableCustomDecor = document.getElementById('enableCustomDecor');
    if (enableCustomDecor) {
        enableCustomDecor.addEventListener('change', function() {
            const options = document.getElementById('customDecorOptions');
            if (options) {
                options.style.display = this.checked ? 'block' : 'none';
            }
        });
    }
    
    // Gestionnaire pour l'intensité de séduction
    const seductionLevel = document.getElementById('seductionLevel');
    const seductionValue = document.getElementById('seductionValue');
    if (seductionLevel && seductionValue) {
        seductionValue.textContent = seductionLevel.value + '/10';
        seductionLevel.addEventListener('input', function() {
            seductionValue.textContent = this.value + '/10';
        });
    }
    
    // Gestionnaire pour les gestes (bisous et viens)
    const bisousCheckbox = document.getElementById('gesteBisous');
    const bisousCount = document.getElementById('bisousCount');
    if (bisousCheckbox && bisousCount) {
        bisousCount.disabled = !bisousCheckbox.checked;
        bisousCheckbox.addEventListener('change', function() {
            bisousCount.disabled = !this.checked;
        });
    }
    
    const viensCheckbox = document.getElementById('gesteViens');
    const viensCount = document.getElementById('viensCount');
    if (viensCheckbox && viensCount) {
        viensCount.disabled = !viensCheckbox.checked;
        viensCheckbox.addEventListener('change', function() {
            viensCount.disabled = !this.checked;
        });
    }
});

// ==================== FONCTIONS ====================

function initCharacters() {
    const grid = document.getElementById('countryGrid');
    if (!grid) return;
    
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    
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
        uploadArea.style.backgroundColor = 'rgba(0, 243, 255, 0.1)';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
        uploadArea.style.backgroundColor = '';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.backgroundColor = '';
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
        case 'tabFull':
            text = prompts.full || '';
            break;
        case 'tabPart1':
            text = prompts.part1 || '';
            break;
        case 'tabPart2':
            text = prompts.part2 || '';
            break;
        case 'tabConsignes':
            text = prompts.consignes || '';
            break;
    }
    
    display.innerHTML = text.replace(/\n/g, '<br>');
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected) return;
    
    const country = countries[selected.dataset.country];
    const fluoActive = document.getElementById('enableFluo')?.checked ? 'OUI' : 'NON';
    const fluoColor = document.getElementById('fluoColor')?.value || '';
    const alienMode = document.getElementById('enableAlienMode')?.checked ? '👽 ACTIVÉ' : 'Désactivé';
    const textsActive = document.getElementById('enableMagicTexts')?.checked ? '✨ ACTIVÉS' : 'Désactivés';
    const decorActif = document.getElementById('enableCustomDecor')?.checked ? '✅ PERSONNALISÉ' : 'Auto';
    
    // Récupération des gestes finaux pour le récap
    const finaleActif = 
        (document.getElementById('finalBisou')?.checked ? '💋' : '') +
        (document.getElementById('finalCiao')?.checked ? '👋' : '') +
        (document.getElementById('finalMasque')?.checked ? '🖐️' : '') +
        (document.getElementById('finalCoeur')?.checked ? '💖' : '') +
        (document.getElementById('finalClignement')?.checked ? '😉' : '') +
        (document.getElementById('finalCascade')?.checked ? '💋💋' : '') +
        (document.getElementById('finalRevelation')?.checked ? '✨' : '') +
        (document.getElementById('finalSalut')?.checked ? '👑' : '') +
        (document.getElementById('finalRegard')?.checked ? '👁️' : '') +
        (document.getElementById('finalViens')?.checked ? '👉' : '') +
        (document.getElementById('finalSouffle')?.checked ? '💨' : '') +
        (document.getElementById('finalEpaule')?.checked ? '🔥' : '') +
        (document.getElementById('finalCheveux')?.checked ? '💇' : '');
    
    const finaleText = finaleActif ? finaleActif : 'Geste par défaut';
    
    const bisousCheckbox = document.getElementById('gesteBisous');
    const viensCheckbox = document.getElementById('gesteViens');
    const bisousCount = document.getElementById('bisousCount')?.value || '0';
    const viensCount = document.getElementById('viensCount')?.value || '0';
    
    const bisousText = bisousCheckbox && bisousCheckbox.checked ? bisousCount : '0';
    const viensText = viensCheckbox && viensCheckbox.checked ? viensCount : '0';
    
    const recap = `
🌍 Personnage : ${country.name}
💃 Danse : ${country.dance}
👽 Mode Alien : ${alienMode}
✨ Textes magiques : ${textsActive}
🎨 Couleurs : ${document.getElementById('leftPalmColor')?.value || '#ff0000'} / ${document.getElementById('rightPalmColor')?.value || '#000000'}
💇 Cheveux fluo : ${fluoActive} ${fluoActive === 'OUI' ? '- ' + fluoColor : ''}
🎬 Décor : ${decorActif}
💋 Bisous : ${bisousText}
👉 Geste "viens" : ${viensText}
🎬 FINALE : ${finaleText}
    `;
    
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) recapDiv.innerHTML = recap.replace(/\n/g, '<br>');
}

if (typeof personnageActions === 'undefined') {
    console.warn("⚠️ personnageActions n'est pas défini - vérifiez que actions.js est chargé");
}
