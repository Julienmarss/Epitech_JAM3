var targetDate = new Date("July 26, 2024 00:00:00").getTime();
function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = targetDate - now;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " jours " + hours + " heures "
        + minutes + " minutes " + seconds + " secondes ";
    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Les Jeux Olympiques ont commencé!";
    }
}
var x = setInterval(updateCountdown, 1000);
updateCountdown();

const translations = {
    en: {
        welcome: "Paris 2024 Olympic Games",
        torch_route: "Torch Relay Route",
        stages: "Stages",
        team_france: "Team France",
        olympic: "Olympic",
        paralympic: "Paralympic",
        countdown_title: "Countdown to the Paris 2024 Olympic Games"
    },
    es: {
        welcome: "Juegos Olímpicos París 2024",
        torch_route: "Ruta del Relevo de la Antorcha",
        stages: "Etapas",
        team_france: "Equipo de Francia",
        olympic: "Olímpico",
        paralympic: "Paralímpico",
        countdown_title: "Cuenta atrás para los Juegos Olímpicos de París 2024"
    },
    fr: {
        welcome: "Jeux Olympiques Paris 2024",
        torch_route: "Parcours de la flamme",
        stages: "Etapes",
        team_france: "L'équipe de France",
        olympic: "Olympique",
        paralympic: "Paralympique",
        countdown_title: "Compte à Rebours jusqu'aux Jeux Olympiques de Paris 2024"
    },
    zh: {
        welcome: "巴黎2024年奥运会",
        torch_route: "火炬接力路线",
        stages: "阶段",
        team_france: "法国队",
        olympic: "奥运会",
        paralympic: "残奥会",
        countdown_title: "巴黎2024年奥运会倒计时"
    },
    ko: {
        welcome: "파리 2024 올림픽 경기",
        torch_route: "성화 봉송 경로",
        stages: "단계",
        team_france: "프랑스 팀",
        olympic: "올림픽",
        paralympic: "패럴림픽",
        countdown_title: "파리 2024 올림픽 경기까지 카운트다운"
    },
    th: {
        welcome: "การแข่งขันกีฬาโอลิมปิกปารีส 2024",
        torch_route: "เส้นทางวิ่งคบเพลิง",
        stages: "ขั้นตอน",
        team_france: "ทีมฝรั่งเศส",
        olympic: "โอลิมปิก",
        paralympic: "พาราลิมปิก",
        countdown_title: "นับถอยหลังสู่การแข่งขันกีฬาโอลิมปิกปารีส 2024"
    },
    ar: {
        welcome: "ألعاب باريس الأولمبية 2024",
        torch_route: "مسار تتابع الشعلة",
        stages: "المراحل",
        team_france: "فريق فرنسا",
        olympic: "أولمبي",
        paralympic: "البارالمبية",
        countdown_title: "العد التنازلي لألعاب باريس الأولمبية 2024"
    },
    pt: {
        welcome: "Jogos Olímpicos de Paris 2024",
        torch_route: "Rota do Revezamento da Tocha",
        stages: "Etapas",
        team_france: "Equipe da França",
        olympic: "Olímpico",
        paralympic: "Paralímpico",
        countdown_title: "Contagem regressiva para os Jogos Olímpicos de Paris 2024"
    },
    hi: {
        welcome: "पेरिस 2024 ओलंपिक खेल",
        torch_route: "मशाल रिले मार्ग",
        stages: "चरण",
        team_france: "फ्रांस की टीम",
        olympic: "ओलिंपिक",
        paralympic: "पैरा-ओलंपिक",
        countdown_title: "पेरिस 2024 ओलंपिक खेलों की उलटी गिनती"
    }
};

function translatePage() {
    const language = document.getElementById('language').value;
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        element.textContent = translations[language][key];
    });
}

const canvas = document.getElementById('flameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

let torchX = canvas.width / 2;
let torchY = canvas.height - 210; // Adjusted position

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10;
        this.speedY = Math.random() + 3;
        this.speedX = (Math.random() * 2 - 1) * 0.5;
        this.color = this.getColor();
    }

    getColor() {
        const colors = [
            'rgba(255, 69, 0, 0.8)',
            'rgba(255, 140, 0, 0.8)',
            'rgba(255, 215, 0, 0.8)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particlesArray = [];

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function createFlame() {
    const startPositions = [
        { x: torchX, y: torchY },
        { x: torchX + 10, y: torchY },
        { x: torchX - 10, y: torchY },
        { x: torchX, y: torchY - 10 }
    ];

    startPositions.forEach(pos => {
        for (let i = 0; i < 5; i++) {
            particlesArray.push(new Particle(pos.x, pos.y));
        }
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createFlame();
    handleParticles();
    requestAnimationFrame(animate);
}

window.onload = function() {
    animate();
};

window.addEventListener('resize', function() {
    resizeCanvas();
    torchX = canvas.width / 2;
    torchY = canvas.height - 200; // Adjusted position
});