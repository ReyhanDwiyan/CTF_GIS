// Game State
let gameState = {
    score: 0,
    flagsFound: 0,
    totalFlags: 5,
    startTime: null,
    timerInterval: null,
    foundFlagsArray: []
};

// All CTF Challenges - Pool lengkap dengan berbagai tingkat kesulitan
const allChallenges = [
    // EASY - 80-120 points
    {
        id: 1,
        name: "Monas Challenge",
        location: [-6.1754, 106.8272],
        flag: "CTF{Monas_Jakarta}",
        points: 100,
        difficulty: "Easy",
        hint: "Ikon Jakarta yang menjulang tinggi di pusat kota",
        description: "Decode this: Base64 -> Q1RGe01vbmFzX0pha2FydGF9",
        markerColor: "green"
    },
    {
        id: 2,
        name: "Toba Lake View",
        location: [2.6845, 98.8756],
        flag: "CTF{Toba_Lake_View}",
        points: 90,
        difficulty: "Easy",
        hint: "Danau vulkanik terbesar di Indonesia",
        description: "Simple Caesar Cipher (shift 3): FWI{Wred_Odnh_Ylhz}",
        markerColor: "green"
    },
    {
        id: 3,
        name: "Prambanan Temple",
        location: [-7.7520, 110.4915],
        flag: "CTF{Prambanan_Temple}",
        points: 110,
        difficulty: "Easy",
        hint: "Candi Hindu terbesar di Indonesia",
        description: "Flag tersembunyi: CTF{Prambanan_Temple}",
        markerColor: "green"
    },
    // MEDIUM - 130-180 points
    {
        id: 4,
        name: "Borobudur Mystery",
        location: [-7.6079, 110.2038],
        flag: "CTF{Borobudur_Temple}",
        points: 150,
        difficulty: "Medium",
        hint: "Candi Buddha terbesar di dunia",
        description: "ROT13: PGS{Obebnohqhe_Grzcyr}",
        markerColor: "blue"
    },
    {
        id: 5,
        name: "Komodo Dragon Quest",
        location: [-8.5594, 119.4883],
        flag: "CTF{Komodo_Dragon}",
        points: 140,
        difficulty: "Medium",
        hint: "Habitat kadal raksasa purba",
        description: "Hex to ASCII: 4354467B4B6F6D6F646F5F44726167F6E7D",
        markerColor: "blue"
    },
    {
        id: 6,
        name: "Bunaken Waters",
        location: [1.6173, 124.7631],
        flag: "CTF{Bunaken_Dive}",
        points: 160,
        difficulty: "Medium",
        hint: "Surga diving di Sulawesi Utara",
        description: "Binary: 01000011 01010100 01000110 01111011 01000010 01110101 01101110 01100001 01101011 01100101 01101110 01011111 01000100 01101001 01110110 01100101 01111101",
        markerColor: "blue"
    },
    {
        id: 7,
        name: "Tanah Lot Secret",
        location: [-8.6211, 115.0869],
        flag: "CTF{Tanah_Lot_Sea}",
        points: 135,
        difficulty: "Medium",
        hint: "Pura di atas batu karang tepi laut",
        description: "Reverse each word: FTC{hanaT_toL_aeS}",
        markerColor: "blue"
    },
    // HARD - 200-250 points
    {
        id: 8,
        name: "Bromo Sunrise",
        location: [-7.9425, 112.9531],
        flag: "CTF{Bromo_Volcano}",
        points: 210,
        difficulty: "Hard",
        hint: "Gunung berapi aktif dengan pemandangan sunrise terbaik",
        description: "Atbash Cipher: XGU{Yilnl_Eloxzml}",
        markerColor: "orange"
    },
    {
        id: 9,
        name: "Raja Ampat Paradise",
        location: [-0.2315, 130.5256],
        flag: "CTF{Raja_Ampat_Paradise}",
        points: 250,
        difficulty: "Hard",
        hint: "Surga bawah laut di ujung timur Indonesia",
        description: "Reverse the string: }esidaraP_tapmA_ajaR{FTC",
        markerColor: "orange"
    },
    {
        id: 10,
        name: "Krakatau Power",
        location: [-6.1020, 105.4230],
        flag: "CTF{Krakatau_Power}",
        points: 220,
        difficulty: "Hard",
        hint: "Gunung berapi legendaris yang mengubah dunia",
        description: "Vigenere (key: FIRE): KXZ{Ovekexey_Tswiv}",
        markerColor: "orange"
    },
    // EXPERT - 260-300 points
    {
        id: 11,
        name: "Derawan Islands",
        location: [2.2875, 118.2439],
        flag: "CTF{Derawan_Islands}",
        points: 270,
        difficulty: "Expert",
        hint: "Pulau dengan penyu hijau dan ubur-ubur tak menyengat",
        description: "Base32: INUGSZDPNZSXG43TMFWGKIDPNY======",
        markerColor: "red"
    },
    {
        id: 12,
        name: "Tanjung Puting Quest",
        location: [-2.7464, 111.6823],
        flag: "CTF{Orang_Utan_Home}",
        points: 280,
        difficulty: "Expert",
        hint: "Rumah orangutan di Kalimantan",
        description: "Plaintext clue: Name of the great ape in Bahasa + their dwelling in English. Format: CTF{Orang_Utan_Home}",
        markerColor: "red"
    },
    {
        id: 13,
        name: "Wakatobi Reef",
        location: [-5.4781, 123.5979],
        flag: "CTF{Wakatobi_Reef}",
        points: 290,
        difficulty: "Expert",
        hint: "Taman laut dengan biodiversitas tertinggi",
        description: "Base64 double encoding: UTFSMlYzSnBNVlZrWVd0dmRHSnBYMUpsWldaOU1RPT0=",
        markerColor: "red"
    },
    {
        id: 14,
        name: "Baliem Valley",
        location: [-3.9667, 138.9500],
        flag: "CTF{Baliem_Valley_PNG}",
        points: 300,
        difficulty: "Expert",
        hint: "Lembah tersembunyi di Papua",
        description: "Combination cipher - solve: Q1RGe0JhbGllbV9WYWxsZXlfUE5HfQ== (base64) then apply ROT13",
        markerColor: "red"
    },
    {
        id: 15,
        name: "Ijen Blue Fire",
        location: [-8.0582, 114.2425],
        flag: "CTF{Ijen_Blue_Fire}",
        points: 260,
        difficulty: "Expert",
        hint: "Fenomena api biru yang langka",
        description: "Morse code: -.-. - ..-. {.. .--- . -. ..--.- -... .-.. ..- . ..--.- ..-. .. .-. .}",
        markerColor: "red"
    }
];

// Selected challenges untuk game saat ini
let selectedChallenges = [];

// Fungsi untuk random select 5 challenges
function selectRandomChallenges() {
    const shuffled = [...allChallenges].sort(() => Math.random() - 0.5);
    selectedChallenges = shuffled.slice(0, 5);
    // Re-assign IDs untuk konsistensi
    selectedChallenges.forEach((challenge, index) => {
        challenge.gameId = index + 1;
    });
    return selectedChallenges;
}

// Initialize Map
let map;
let markers = [];

function initMap() {
    // Batas wilayah Indonesia
    const indonesiaBounds = [
        [-11.5, 94.5],  // Southwest (Pulau Rote bagian selatan)
        [6.5, 141.5]    // Northeast (Papua bagian utara)
    ];

    // Jika map belum ada, create new map
    if (!map) {
        map = L.map('map', {
            center: [-2.5, 118],
            zoom: 5,
            minZoom: 5,
            maxZoom: 18,
            maxBounds: indonesiaBounds,
            maxBoundsViscosity: 1.0
        });

        L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.jpg', {
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://stamen.com/">Stamen Design</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
    }

    // Clear existing markers
    clearMarkers();

    // Select random challenges jika belum ada
    if (selectedChallenges.length === 0) {
        selectRandomChallenges();
    }

    // Add markers for selected challenges
    selectedChallenges.forEach(challenge => {
        addMarker(challenge);
    });
}

function clearMarkers() {
    markers.forEach(markerObj => {
        map.removeLayer(markerObj.marker);
    });
    markers = [];
}

function addMarker(challenge) {
    // Color mapping untuk earth tone
    const colorMap = {
        'red': '#C4A381',
        'blue': '#7D9D7C',
        'green': '#A0826D',
        'orange': '#D4A574',
        'purple': '#8B7355'
    };

    const markerColor = colorMap[challenge.markerColor] || '#A0826D';

    // Custom DivIcon dengan styling modern
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="marker-pin" style="background-color: ${markerColor};">
                <div class="marker-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F5F1ED" stroke="#F5F1ED" stroke-width="1.5"/>
                    </svg>
                </div>
                <div class="marker-pulse" style="background-color: ${markerColor};"></div>
            </div>
        `,
        iconSize: [40, 50],
        iconAnchor: [20, 50],
        popupAnchor: [0, -50]
    });

    const marker = L.marker(challenge.location, { icon: customIcon })
        .addTo(map)
        .bindPopup(`
            <div style="text-align: center; font-family: 'Inter', sans-serif;">
                <strong style="font-size: 17px; color: #8B7355; font-weight: 700; letter-spacing: 0.5px;">${challenge.name}</strong><br>
                <div style="display: inline-block; margin: 8px 0; padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; background: ${challenge.difficulty === 'Easy' ? 'rgba(125, 157, 124, 0.2)' : challenge.difficulty === 'Medium' ? 'rgba(212, 165, 116, 0.2)' : challenge.difficulty === 'Hard' ? 'rgba(196, 163, 129, 0.2)' : 'rgba(139, 115, 85, 0.3)'}; color: ${challenge.difficulty === 'Easy' ? '#6B8E6A' : challenge.difficulty === 'Medium' ? '#B89267' : challenge.difficulty === 'Hard' ? '#A0826D' : '#8B7355'};">
                    ${challenge.difficulty.toUpperCase()}
                </div>
                <p style="margin: 12px 0; color: #4A4238; line-height: 1.6; font-size: 13px;">${challenge.hint}</p>
                <div style="display: inline-block; background: linear-gradient(135deg, rgba(160, 130, 109, 0.15) 0%, rgba(184, 149, 106, 0.15) 100%); padding: 6px 12px; border-radius: 6px; margin: 8px 0; border: 1px solid rgba(160, 130, 109, 0.3);">
                    <strong style="color: #8B7355; font-size: 14px;">${challenge.points} POINTS</strong>
                </div><br>
                <button onclick="openChallenge(${challenge.id})" style="
                    background: linear-gradient(135deg, #A0826D 0%, #8B7355 100%);
                    color: #F5F1ED;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                    margin-top: 8px;
                    box-shadow: 0 4px 12px rgba(139, 115, 85, 0.3);
                    transition: all 0.3s ease;
                ">START CHALLENGE</button>
            </div>
        `);

    markers.push({ id: challenge.id, marker: marker });
}

// Open Challenge Modal
let currentChallenge = null;

function openChallenge(challengeId) {
    currentChallenge = selectedChallenges.find(c => c.id === challengeId);

    if (!currentChallenge) return;

    // Check if already found
    if (gameState.foundFlagsArray.some(f => f.id === challengeId)) {
        alert('Challenge sudah selesai!');
        return;
    }

    // Difficulty color
    const difficultyColor = currentChallenge.difficulty === 'Easy' ? '#6B8E6A' :
        currentChallenge.difficulty === 'Medium' ? '#B89267' :
            currentChallenge.difficulty === 'Hard' ? '#A0826D' : '#8B7355';

    document.getElementById('challengeTitle').textContent = currentChallenge.name;
    document.getElementById('challengeDescription').innerHTML = `
        <div style="display: inline-block; margin-bottom: 15px; padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; background: rgba(160, 130, 109, 0.15); color: ${difficultyColor}; border: 1px solid ${difficultyColor};">
            ${currentChallenge.difficulty.toUpperCase()} - ${currentChallenge.points} POINTS
        </div>
        <p><strong>CHALLENGE DESCRIPTION:</strong></p>
        <p style="margin-top: 10px;">${currentChallenge.description}</p>
        <p style="margin-top: 18px; padding-top: 15px; border-top: 1px solid rgba(160, 130, 109, 0.2);"><strong>HINT:</strong> ${currentChallenge.hint}</p>
    `;

    document.getElementById('flagInput').value = '';
    document.getElementById('challengeResult').innerHTML = '';
    document.getElementById('challengeResult').className = '';

    document.getElementById('challengeModal').style.display = 'block';
}

// Close Modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('challengeModal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('challengeModal')) {
        document.getElementById('challengeModal').style.display = 'none';
    }
    if (event.target == document.getElementById('victoryModal')) {
        document.getElementById('victoryModal').style.display = 'none';
    }
});

// Submit Flag
document.getElementById('submitFlag').addEventListener('click', submitFlag);
document.getElementById('flagInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') submitFlag();
});

function submitFlag() {
    const userFlag = document.getElementById('flagInput').value.trim();
    const resultDiv = document.getElementById('challengeResult');

    if (!userFlag) {
        resultDiv.textContent = 'Masukkan flag terlebih dahulu!';
        resultDiv.className = 'error';
        return;
    }

    if (userFlag === currentChallenge.flag) {
        // Correct flag!
        gameState.score += currentChallenge.points;
        gameState.flagsFound++;
        gameState.foundFlagsArray.push(currentChallenge);

        resultDiv.textContent = `CORRECT! +${currentChallenge.points} points`;
        resultDiv.className = 'success';

        updateUI();
        addFoundFlag(currentChallenge);

        // Remove marker or change its color
        const markerObj = markers.find(m => m.id === currentChallenge.id);
        if (markerObj) {
            markerObj.marker.setOpacity(0.5);
        }

        setTimeout(() => {
            document.getElementById('challengeModal').style.display = 'none';

            // Check if all flags found
            if (gameState.flagsFound === gameState.totalFlags) {
                showVictory();
            }
        }, 1500);

    } else {
        resultDiv.textContent = 'INCORRECT FLAG! Try again.';
        resultDiv.className = 'error';
    }
}

// Update UI
function updateUI() {
    document.getElementById('flagsFound').textContent = gameState.flagsFound;
    document.getElementById('totalFlags').textContent = gameState.totalFlags;
    document.getElementById('score').textContent = gameState.score;
}

// Add Found Flag to List
function addFoundFlag(challenge) {
    const foundFlagsDiv = document.getElementById('foundFlags');

    if (gameState.flagsFound === 1) {
        foundFlagsDiv.innerHTML = '';
    }

    const difficultyColor = challenge.difficulty === 'Easy' ? '#6B8E6A' :
        challenge.difficulty === 'Medium' ? '#B89267' :
            challenge.difficulty === 'Hard' ? '#A0826D' : '#8B7355';

    const flagItem = document.createElement('div');
    flagItem.className = 'flag-item';
    flagItem.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong>${challenge.name}</strong>
            <span style="font-size: 10px; padding: 3px 8px; border-radius: 4px; background: ${difficultyColor}; color: #F5F1ED; font-weight: 700;">${challenge.difficulty.toUpperCase()}</span>
        </div>
        <code>${challenge.flag}</code><br>
        <small>+${challenge.points} points</small>
    `;

    foundFlagsDiv.appendChild(flagItem);
}

// Timer
function startTimer() {
    gameState.startTime = Date.now();
    gameState.timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    document.getElementById('timer').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Show Victory
function showVictory() {
    clearInterval(gameState.timerInterval);

    const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    document.getElementById('finalStats').innerHTML = `
        <p style="font-size: 1.3em; margin: 15px 0;"><strong>TOTAL SCORE: ${gameState.score}</strong></p>
        <p style="margin: 10px 0;">TIME: ${minutes}m ${seconds}s</p>
        <p style="margin: 10px 0;">FLAGS CAPTURED: ${gameState.flagsFound}/${gameState.totalFlags}</p>
    `;

    document.getElementById('victoryModal').style.display = 'block';
}

// Reset Game
document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('playAgainBtn').addEventListener('click', () => {
    document.getElementById('victoryModal').style.display = 'none';
    resetGame();
});

function resetGame() {
    // Reset game state
    gameState = {
        score: 0,
        flagsFound: 0,
        totalFlags: 5,
        startTime: null,
        timerInterval: null,
        foundFlagsArray: []
    };

    // Select new random challenges
    selectRandomChallenges();

    // Clear and regenerate markers
    clearMarkers();
    selectedChallenges.forEach(challenge => {
        addMarker(challenge);
    });

    // Reset UI
    updateUI();
    document.getElementById('timer').textContent = '00:00';
    document.getElementById('foundFlags').innerHTML = '<p class="empty-message">Belum ada flag yang ditemukan...</p>';

    // Restart timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    startTimer();

    // Reset map view
    map.setView([-2.5, 118], 5);
}

// Initialize Game on Load
window.addEventListener('load', () => {
    initMap();
    updateUI();
    startTimer();
});

// Make openChallenge global
window.openChallenge = openChallenge;
