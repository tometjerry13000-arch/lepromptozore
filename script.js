// script.js - Version ULTIME CORRIGÉE

// ==================== EXPOSITION GLOBALE ====================
console.log("🚀 Chargement de script.js...");

// Exposer les fonctions de actions.js si elles existent
if (typeof personnageActions !== 'undefined' && !window.personnageActions) {
    window.personnageActions = personnageActions;
    console.log("✅ personnageActions exposé globalement");
}

if (typeof getRandomDecor === 'function' && !window.getRandomDecor) {
    window.getRandomDecor = getRandomDecor;
}

if (typeof getRandomAction === 'function' && !window.getRandomAction) {
    window.getRandomAction = getRandomAction;
}

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
        if (!countries || !countries[personnageKey]) return 'default';
        
        let type = countries[personnageKey].type || personnageKey;
        
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
        
        return "dans un studio de danse professionnel";
    }

    getFinaleGesture() {
        const finaleGestures = [];
        
        if (document.getElementById('finalBisou')?.checked) 
            finaleGestures.push('elle envoie un dernier bisou langoureux');
        
        if (document.getElementById('finalCiao')?.checked) 
            finaleGestures.push('elle fait un ciao sensuel de la main');
        
        if (document.getElementById('finalCoeur')?.checked) 
            finaleGestures.push('elle forme un cœur avec ses mains');
        
        if (document.getElementById('finalClignement')?.checked) 
            finaleGestures.push('elle fait un long clin d\'œil appuyé');
        
        if (document.getElementById('finalRegard')?.checked) 
            finaleGestures.push('elle fixe la caméra intensément');
        
        if (document.getElementById('finalViens')?.checked) 
            finaleGestures.push('elle fait un dernier geste "viens vers moi"');
        
        if (finaleGestures.length === 0) {
            return 'elle envoie un dernier bisou';
        }
        
        return finaleGestures.join(' puis ');
    }

    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const options = {
            'freeze': 'l\'image se fige sur ce moment',
            'fondu': 'un fondu au noir progressif',
            'zoom': 'un zoom lent sur son visage'
        };
        return options[option] || options['freeze'];
    }

    getPublicInteraction() {
        const interaction = document.getElementById('finalInteraction')?.value || 'regard';
        const interactions = {
            'regard': 'elle plonge son regard dans les yeux du spectateur',
            'sourire': 'elle offre un sourire éclatant',
            'clin': 'elle fait un clin d\'œil complice'
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
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                regards: document.getElementById('gesteRegards')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            musicStyle: document.getElementById('musicStyle')?.value || 'traditionnelle',
            soundEffects: document.getElementById('soundEffects')?.checked || false,
            alienMode: document.getElementById('enableAlienMode')?.checked || false,
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || ''
            },
            finale: {
                option: document.getElementById('finalOption')?.value || 'freeze',
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
        if (level <= 3) return 'subtile';
        if (level <= 6) return 'charmeuse';
        return 'ultra-séductrice';
    }

    generateMusicText() {
        let musicText = '';
        
        switch(this.userData.musicStyle) {
            case 'traditionnelle': musicText = 'Musique traditionnelle'; break;
            case 'moderne': musicText = 'Remix moderne'; break;
            case 'epique': musicText = 'Musique épique'; break;
            case 'silence': musicText = 'Silence'; break;
            default: musicText = 'Musique d\'ambiance';
        }
        
        if (this.userData.soundEffects) {
            musicText += ' avec effets sonores';
        }
        
        return musicText;
    }

    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let bisousText = this.userData.gestures.bisous ? `Elle envoie ${this.userData.gestures.bisousCount} baisers. ` : '';
        let viensText = this.userData.gestures.viens ? `Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois. ` : '';

        return `PREMIÈRE PARTIE - Danse ${country.dance} ${seductionPhrase}

La personne danse avec des mouvements sensuels. 
Elle porte ${this.userData.startingOutfit.top}, ${this.userData.startingOutfit.bottom}, ${this.userData.startingOutfit.details}.
Ses paumes sont peintes en ${this.userData.leftPalmColorName} (gauche) et ${this.userData.rightPalmColorName} (droite).
${bisousText}${viensText}
À la fin, elle cache la caméra avec ses mains.`;
    }

    generatePart2() {
        const country = countries[this.userData.country];
        const decorText = this.getUnifiedDecor();
        const actionText = this.getRandomAction(this.getActionType(this.userData.country));
        const finaleGestures = this.getFinaleGesture();
        const finalOption = this.getFinalOption();
        const publicText = this.getPublicInteraction();
        
        let fluoText = this.userData.enableFluo ? ` avec les cheveux ${this.userData.fluoColor}` : '';

        return `DEUXIÈME PARTIE - Révélation

La même personne (visage strictement identique) apparaît.
Nouvelle tenue : ${this.userData.finalOutfit}${fluoText}
Décor : ${decorText}
Action spéciale : ${actionText}
${publicText}

FINALE : ${finaleGestures} puis ${finalOption}`;
    }

    generateConsignes() {
        return `CONSIGNES :
- Visage identique entre partie 1 et 2
- Transformation hors caméra (pendant que les mains cachent)
- Rendu réaliste, pas de morphing
- La personne ne parle pas`;
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

// ==================== INITIALISATION ====================

function initCharacters() {
    console.log("🎭 Initialisation des personnages...");
    const grid = document.getElementById('countryGrid');
    if (!grid) {
        console.error("❌ Grille non trouvée");
        return;
    }
    
    if (!countries || Object.keys(countries).length === 0) {
        console.error("❌ Aucun personnage chargé");
        grid.innerHTML = '<div style="color: red; padding: 20px;">Erreur: Personnages non chargés</div>';
        return;
    }
    
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    
    console.log(`✅ ${Object.keys(countries).length} personnages affichés`);
    
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
                card.style.display = card.textContent.toLowerCase().includes(search) ? 'block' : 'none';
            });
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
    
    uploadArea.addEventListener('click', () => imageInput.click());
    
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
    if (!selected || !countries) return;
    
    const country = countries[selected.dataset.country];
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) {
        recapDiv.innerHTML = `🌍 ${country.name} - ${country.dance}`;
    }
}

// ==================== ATTACHEMENT DES ÉVÉNEMENTS ====================

function attachEvents() {
    console.log("🔗 Attachement des événements...");
    
    const generator = new PromptGenerator();
    
    document.getElementById('generatePrompt')?.addEventListener('click', function() {
        console.log("🎬 Génération du prompt...");
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            displayPrompt(prompts, activeTab.id);
        }
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
    
    document.getElementById('copyPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => alert('✅ Copié!'));
    });
    
    document.getElementById('clearPrompt')?.addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    
    document.getElementById('suggestColors')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    
    document.getElementById('generateOutfit')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) {
            alert('Sélectionnez un personnage');
            return;
        }
        const country = countries[selected.dataset.country];
        document.getElementById('finalOutfitDescription').value = 
            `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}`;
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
    document.getElementById('fluoIntensity')?.addEventListener('input', function() {
        const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
        document.getElementById('intensityValue').textContent = labels[this.value-1] || 'Éclatant';
    });
    
    document.getElementById('seductionLevel')?.addEventListener('input', function() {
        document.getElementById('seductionValue').textContent = this.value + '/10';
    });
    
    // Checkbox dépendantes
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
}

// ==================== DÉMARRAGE ====================

function startApp() {
    console.log("🚀 Démarrage de l'application...");
    initCharacters();
    initImageUpload();
    attachEvents();
    console.log("✅ Application prête!");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

console.log("📦 script.js chargé avec succès");
