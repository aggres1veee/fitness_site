// EASY FIT - Core Interactive Script (Bilingual, Coach Chat, @aggres1veee Telegram)

const COACH_TG_USERNAME = "aggres1veee";

// Global Chat Functions (Exposed immediately for inline handlers)
window.toggleCoachChat = function() {
    const chatWindow = document.getElementById('chatWindow');
    if (!chatWindow) return;

    const isVisible = chatWindow.style.display === 'flex';
    if (isVisible) {
        chatWindow.style.display = 'none';
    } else {
        chatWindow.style.display = 'flex';
        const badge = document.getElementById('chatBadge');
        if (badge) badge.style.display = 'none';
        const teaser = document.getElementById('chatTeaserPill');
        if (teaser) teaser.style.display = 'none';
        const input = document.getElementById('chatInput');
        if (input) setTimeout(() => input.focus(), 80);
    }
};

const quickAnswers = {
    burger: {
        question: "Как есть бургеры и худеть?",
        answer: "Все держится на гибкой диете IIFYM и общем дефиците калорий. Ешь любимый бургер, держи норму белка и жир сгорает. Хочешь я посчитаю твою норму лично в Telegram?",
        tgText: "Йоу, тренер! Вопрос из чата: Как есть бургеры и худеть? Посчитай мне калории"
    },
    split: {
        question: "Что выбрать: Сплит или Full Body?",
        answer: "Если есть 3 дня в неделю по 40 минут - бери Full Body, это самый быстрый отклик. Если хочешь упор на плечи и руки - бери Сплит. Напиши мне в Telegram, подберем под твой график!",
        tgText: "Привет, тренер! Вопрос из чата: Что мне лучше выбрать - Сплит или Full Body?"
    },
    vip: {
        question: "Хочу на личное ведение",
        answer: "Красава! В ведение входит чат 1-на-1 со мной 24/7, созвон, видео разборы твоей техники и 100% гарантия результата. Осталось 3 места, давай сразу в Telegram!",
        tgText: "Привет, тренер! Хочу занять место на Личное ведение (VIP). Расскажи детали!"
    }
};

window.handleChatChip = function(key) {
    const data = quickAnswers[key];
    if (!data) return;
    appendUserBubble(data.question);
    setTimeout(() => {
        appendCoachBubble(data.answer, data.tgText);
    }, 350);
};

window.handleChatSubmit = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const chatInput = document.getElementById('chatInput');
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;

    appendUserBubble(text);
    chatInput.value = '';

    const coachReply = (currentLang === 'en')
        ? "Got your question! Let me answer you personally in Telegram via voice note right now:"
        : "Отличный вопрос! Я сейчас на связи, давай отвечу тебе лично в Telegram голосовым сообщением:";

    const tgMessage = `Йоу, тренер! Вопрос с сайта от клиента: "${text}". Жду ответа!`;

    setTimeout(() => {
        appendCoachBubble(coachReply, tgMessage);
    }, 400);
};

function appendUserBubble(text) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble-user p-3 max-w-[85%] self-end text-xs text-black leading-relaxed shadow-sm animate-scale-up';
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendCoachBubble(text, tgCustomText) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-2 max-w-[90%] self-start animate-scale-up';

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble-coach p-3.5 text-xs text-slate-200 leading-relaxed';
    bubble.textContent = text;
    wrapper.appendChild(bubble);

    const tgBtn = document.createElement('a');
    tgBtn.href = `https://t.me/${COACH_TG_USERNAME}?text=${encodeURIComponent(tgCustomText)}`;
    tgBtn.target = '_blank';
    tgBtn.className = 'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-display font-black text-[11px] uppercase tracking-wider text-white social-tg hover:scale-105 transition';
    tgBtn.innerHTML = `<span>Открыть в Telegram @${COACH_TG_USERNAME}</span> <svg class="w-3.5 h-3.5 fill-white shrink-0" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.946z"/></svg>`;
    wrapper.appendChild(tgBtn);

    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

const translations = {
    ru: {
        topBarBadge: "МЕСТА ОГРАНИЧЕНЫ",
        topBarText: "На личное ведение в этом месяце осталось всего 3 места из 10.",
        topBarLink: "Занять место",
        navMethod: "В чем фишка",
        navPrograms: "Программы",
        navTestDrive: "Тест-драйв",
        navCalc: "Калькулятор",
        navReviews: "Отзывы",
        navTariffs: "Тарифы",
        navFaq: "Вопросы",
        btnJoinHeader: "Ворваться ⚡",

        heroBadge: "Взлом системы - форма без страданий и диет",
        heroTitle1: "Делай форму в кайф.",
        heroTitle2: "Жри что хочешь.",
        heroTitle3: "Забудь про кардио.",
        heroSub: "Фастовые тренировки по 40 минут. Без унылых дорожек, вареной грудки без соли и голодных обмороков. Точная биомеханика, кайфовый режим и кубики пресса на чистом расслабоне.",
        heroBtnTariff: "Выбрать тариф (Имба внутри)",
        heroBtnCalc: "Рассчитать форму за 30 сек",
        stat1Num: "40 мин",
        stat1Label: "Длительность трели",
        stat2Num: "0 мин",
        stat2Label: "Долбаного кардио",
        stat3Num: "100%",
        stat3Label: "Любимой еды (IIFYM)",
        stat4Num: "540+",
        stat4Label: "Челов уже в форме",

        methodBadge: "Хватит страдать",
        methodTitle: "Почему 95% сливаются в зале, а с нами - все изи?",
        methodSub: "Тебе годами вешали лапшу про сухую курицу, запрет углеводов после шести и бесконечные часы на беговой дорожке. Пора с этим завязывать.",
        badTitle: "Обычный фитнес ад",
        badSub: "Как тебя мучают другие тренеры",
        bad1: "Часовое унылое кардио на степпере или дорожке, от которого тошнит уже на десятой минуте.",
        bad2: "Пресная еда из контейнеров, гречка, сухая грудка без соли, брокколи и вечный голод.",
        bad3: "Торчишь в зале по два часа 5 дней в неделю, забивая на личную жизнь, работу и друзей.",
        bad4: "Итог - срыв через три недели, зажор, ненависть к зеркалу и потерянные деньги.",

        goodTitle: "Система EASY FIT",
        goodSub: "Халява, наука и чистый кайф",
        goodBadge: "ЧИТ-КОД",
        good1: "Фастовые тренировки по 40 минут три раза в неделю. Пришел, четко сделал базу, ушел довольный.",
        good2: "Жри что по кайфу, пицца, бургеры, шаурма вписываются в гибкий КБЖУ. Пресс виден, пока ты сыт.",
        good3: "Никакого бессмысленного кардио, жир горит за счет правильного метаболического отклика и дефицита.",
        good4: "Итог - рельефные мышцы, бодрость и постоянный прогресс без выгорания.",

        calcBadge: "Интерактивный расчет",
        calcTitle: "Калькулятор твоей формы",
        calcSub: "Укажи свои параметры и любимый читмил - узнай сколько калорий и недель нужно до кубиков.",
        calcGenderLabel: "Твой пол",
        calcMale: "Парень ⚡",
        calcFemale: "Девушка 🌸",
        calcWeightLabel: "Текущий вес",
        calcGoalLabel: "Главная цель",
        calcGoal1: "Сжечь жир до пресса (сушка без голода)",
        calcGoal2: "Рекомпозиция (сжечь сало плюс добавить мышц)",
        calcGoal3: "Набрать чистую массу без пуза",
        calcCheatLabel: "Твой любимый читмил",
        calcCaloriesTitle: "Дневной калораж в кайф",
        calcTrainingsTitle: "Тренировок в неделю",
        calcWeeksTitle: "Срок до первых кубиков",
        calcVerdict: "Вердикт - твой читмил на 100% влезает в калории, кардио делать не надо!",
        calcBtn: "Подобрать программу под эти цифры ⚡",

        tdBadge: "Бесплатный тест-драйв",
        tdTitle: "Попробуй одну тренировку прямо сейчас",
        tdSub: "Вот как выглядит типичный день по нашей системе. 4 базовых движения, таймер отдыха между подходами и ноль духоты.",
        tdTimerTitle: "Таймер отдыха между подходами",
        tdStartTimer: "Старт 90 сек",
        tdStopTimer: "Сброс",
        tdEx1: "Жим гантелей на наклонной скамье",
        tdEx1Sub: "3 подхода по 8-10 повторов • отдых 90 сек",
        tdEx2: "Тяга верхнего блока к груди",
        tdEx2Sub: "3 подхода по 10-12 повторов • отдых 90 сек",
        tdEx3: "Болгарские сплит-приседы с гантелями",
        tdEx3Sub: "3 подхода по 10 повторов на ногу • отдых 90 сек",
        tdEx4: "Подъемы гантелей через стороны (плечи)",
        tdEx4Sub: "3 подхода по 12-15 повторов • отдых 60 сек",
        tdDoneNote: "Всего 40 минут. Занимайся так 3 раза в неделю и забудь про беговые дорожки.",

        tariffsBadge: "Скидка 40% сгорает через",
        tariffsTitle: "Выбери свой уровень входа",
        tariffsSub: "Хочешь - делай сам по инструкции. Хочешь - заходи в движ. А хочешь гарантированный результат за руку со мной - забирай Личное ведение.",

        t1Badge: "Базовый соло",
        t1Title: "СОЛО СТАРТ",
        t1Sub: "Чисто база для тех, кто все умеет сам и не нуждается в пинках.",
        t1Price: "1 990 ₽",
        t1Period: "разово",
        t1Btn: "Забрать базу за 1 990 ₽",

        t2Badge: "Комьюнити",
        t2Title: "ДВИЖ + ТЕЛЕГА",
        t2Sub: "Для нормальных челов: программа плюс доступ в Telegram с ответами на вопросы.",
        t2Price: "4 990 ₽",
        t2Period: "разово",
        t2Btn: "Вступить в движ за 4 990 ₽",

        t3BadgeTop: "САМАЯ ИМБА • ВЫБОР 84%",
        t3BadgeInner: "All-Inclusive VIP",
        t3Seats: "Осталось 3 места",
        t3Title: "ЛИЧНОЕ ВЕДЕНИЕ",
        t3Sub: "Я лично беру тебя за шкирку и довожу до идеальной формы. Общаемся в ЛС Telegram 24/7.",
        t3Price: "12 990 ₽",
        t3Period: "/ месяц",
        t3Guarantee: "100% Гарантия результата или манибэк!",
        t3Btn: "Забрать Личное Ведение (Имба) 👑",

        reviewsBadge: "Живые отзывы в телеге",
        reviewsTitle: "Что пишут челы в закрытом чате",
        reviewsSub: "Без купюр, без цензуры. Листай отзывы парней, которые уже сделали форму.",

        socialsTitle: "Мои соцсети и лайфстайл",
        socialsSub: "Подписывайся, там выкладываю разборы тарелок, биомеханику и угарные рилсы.",
        ctaBannerTitle: "Хватит откладывать до понедельника. Делай форму уже на этой неделе!",
        ctaBannerSub: "Никаких страданий, голода и уныния. Только сочные тренировки, вкусная еда и тело, от которого ты сам будешь кайфовать в зеркале.",

        chatTitle: "Тренер @aggres1veee",
        chatStatus: "Отвечаю лично за пару минут",
        chatGreeting: "Йоу! Я на связи. Есть вопрос по программе или питанию? Выбирай частый вопрос ниже или пиши свой, я сразу разберу:",
        chatPlaceholder: "Напиши вопрос тренеру..."
    },

    en: {
        topBarBadge: "LIMITED SPOTS",
        topBarText: "Only 3 out of 10 personal coaching spots left this month.",
        topBarLink: "Claim your spot",
        navMethod: "The Method",
        navPrograms: "Programs",
        navTestDrive: "Test-Drive",
        navCalc: "Calculator",
        navReviews: "Reviews",
        navTariffs: "Pricing",
        navFaq: "FAQ",
        btnJoinHeader: "Join Now ⚡",

        heroBadge: "System Hack - Get Shredded Without Pain or Diets",
        heroTitle1: "Build muscle with ease.",
        heroTitle2: "Eat what you love.",
        heroTitle3: "Forget boring cardio.",
        heroSub: "Fast 40-minute workouts. No soul-crushing treadmills, no dry boiled chicken, no starving. Pure biomechanics, great vibes and visible abs on your own terms.",
        heroBtnTariff: "Choose Program (VIP Inside)",
        heroBtnCalc: "Calculate Results in 30s",
        stat1Num: "40 min",
        stat1Label: "Per workout",
        stat2Num: "0 min",
        stat2Label: "Boring cardio",
        stat3Num: "100%",
        stat3Label: "Favorite foods (IIFYM)",
        stat4Num: "540+",
        stat4Label: "Guys transformed",

        methodBadge: "Stop Suffering",
        methodTitle: "Why 95% quit the gym, while with us it is effortless?",
        methodSub: "For years you were fed lies about bland chicken, cutting carbs after 6 PM and hours on treadmills. It is time to end this nonsense.",
        badTitle: "Traditional Fitness Hell",
        badSub: "How typical coaches burn you out",
        bad1: "Endless boring cardio on treadmills that makes you quit by minute ten.",
        bad2: "Bland meal prep containers, dry boiled chicken with no salt and permanent hunger.",
        bad3: "Living in the gym 2 hours a day, 5 days a week, sacrificing your job and social life.",
        bad4: "Result - binge eating in 3 weeks, ruined mood and wasted money.",

        goodTitle: "The EASY FIT System",
        goodSub: "Pure science, smart shortcuts and good vibes",
        goodBadge: "CHEAT CODE",
        good1: "Fast 40-minute sessions 3 times a week. Get in, hit the compound lifts, get out feeling awesome.",
        good2: "Eat your favorites like burgers and pizza within flexible macros. Six-pack abs while staying full.",
        good3: "Zero useless cardio. Fat burns through resistance training and smart deficit.",
        good4: "Result - dense muscle, high energy and consistent progress without burnout.",

        calcBadge: "Interactive Simulator",
        calcTitle: "Calculate Your Ideal Shape",
        calcSub: "Choose your stats and favorite cheat meal to see exact calories and weeks needed.",
        calcGenderLabel: "Gender",
        calcMale: "Male ⚡",
        calcFemale: "Female 🌸",
        calcWeightLabel: "Current Weight",
        calcGoalLabel: "Main Goal",
        calcGoal1: "Cut fat for shredded abs (no starvation)",
        calcGoal2: "Body recomposition (burn fat + build muscle)",
        calcGoal3: "Lean bulk with zero beer belly",
        calcCheatLabel: "Favorite Cheat Meal",
        calcCaloriesTitle: "Daily Calorie Target",
        calcTrainingsTitle: "Workouts Per Week",
        calcWeeksTitle: "Estimated Time to Abs",
        calcVerdict: "System verdict - your favorite cheat meal fits 100%, zero cardio required!",
        calcBtn: "Pick program for these numbers ⚡",

        tdBadge: "Free Test Drive",
        tdTitle: "Try One Workout Right Now",
        tdSub: "Here is what a typical day looks like. 4 compound exercises, a rest timer between sets and zero complexity.",
        tdTimerTitle: "Rest Timer Between Sets",
        tdStartTimer: "Start 90s",
        tdStopTimer: "Reset",
        tdEx1: "Incline Dumbbell Bench Press",
        tdEx1Sub: "3 sets of 8-10 reps • 90s rest",
        tdEx2: "Lat Pulldown to Chest",
        tdEx2Sub: "3 sets of 10-12 reps • 90s rest",
        tdEx3: "Bulgarian Split Squats",
        tdEx3Sub: "3 sets of 10 reps per leg • 90s rest",
        tdEx4: "Dumbbell Lateral Raises (Shoulders)",
        tdEx4Sub: "3 sets of 12-15 reps • 60s rest",
        tdDoneNote: "Only 40 minutes total. Do this 3 times a week and forget about running machines.",

        tariffsBadge: "40% discount expires in",
        tariffsTitle: "Choose Your Level",
        tariffsSub: "Go solo with our blueprint, join the community chat, or get guaranteed 1-on-1 coaching directly with me.",

        t1Badge: "Solo Blueprint",
        t1Title: "SOLO START",
        t1Sub: "The pure blueprint for guys who know what to do and need no hand-holding.",
        t1Price: "$29",
        t1Period: "one-time",
        t1Btn: "Get Solo Blueprint for $29",

        t2Badge: "Community",
        t2Title: "SQUAD + TELEGRAM",
        t2Sub: "For the regulars: full workout protocols plus Telegram group with coach Q&A.",
        t2Price: "$69",
        t2Period: "one-time",
        t2Btn: "Join Squad for $69",

        t3BadgeTop: "MOST POPULAR • 84% CHOOSE THIS",
        t3BadgeInner: "All-Inclusive VIP",
        t3Seats: "3 spots left",
        t3Title: "1-ON-1 COACHING",
        t3Sub: "I personally take you by the hand and guide you to your dream physique. 24/7 Telegram direct messages.",
        t3Price: "$169",
        t3Period: "/ month",
        t3Guarantee: "100% Results Guarantee or full refund!",
        t3Btn: "Claim 1-on-1 Coaching (VIP) 👑",

        reviewsBadge: "Real Telegram Chats",
        reviewsTitle: "What the guys are saying",
        reviewsSub: "Unfiltered proof. Swipe through genuine feedback from clients already rocking abs.",

        socialsTitle: "Follow Me & Lifestyle",
        socialsSub: "Follow along for flexible meal breakdowns, lifting mechanics and entertaining reels.",
        ctaBannerTitle: "Stop waiting for Monday. Build your physique starting this week!",
        ctaBannerSub: "No misery, no starving and no burnout. Just fast workouts, tasty food and a body you love seeing in the mirror.",

        chatTitle: "Coach @aggres1veee",
        chatStatus: "Replies personally within 2 mins",
        chatGreeting: "Hey! Coach is online. Any questions on workouts or nutrition? Pick a quick question below or type anything:",
        chatPlaceholder: "Ask coach a question..."
    }
};

let currentLang = localStorage.getItem('easyfit_lang') || 'ru';

document.addEventListener('DOMContentLoaded', () => {
    try { if (window.lucide) lucide.createIcons(); } catch(e) { console.warn(e); }
    try { initLanguageSwitcher(); } catch(e) { console.warn(e); }
    try { initCalculator(); } catch(e) { console.warn(e); }
    try { initTariffModal(); } catch(e) { console.warn(e); }
    try { initFAQ(); } catch(e) { console.warn(e); }
    try { initDealTimer(); } catch(e) { console.warn(e); }
    try { initMobileMenu(); } catch(e) { console.warn(e); }
    try { initTestDriveTimer(); } catch(e) { console.warn(e); }
    try { initReviewsSlider(); } catch(e) { console.warn(e); }

    // Teaser pill appearance after 3 seconds
    setTimeout(() => {
        const teaser = document.getElementById('chatTeaserPill');
        const chatWindow = document.getElementById('chatWindow');
        if (teaser && chatWindow && chatWindow.style.display !== 'flex') {
            teaser.style.display = 'flex';
        }
    }, 3000);
});

/* -------------------------------------------------------------
   0. LANGUAGE SWITCHER
------------------------------------------------------------- */
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    applyLanguage(currentLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.dataset.lang;
            applyLanguage(selectedLang);
        });
    });
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('easyfit_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('bg-brand-neon', 'text-black', 'font-black');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('bg-brand-neon', 'text-black', 'font-black');
            btn.classList.add('text-slate-400');
        }
    });

    const dict = translations[lang] || translations.ru;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    const chatInput = document.getElementById('chatInput');
    if (chatInput && dict.chatPlaceholder) {
        chatInput.placeholder = dict.chatPlaceholder;
    }

    try { if (window.lucide) lucide.createIcons(); } catch(e) {}
}

/* -------------------------------------------------------------
   1. INTERACTIVE CALORIE & SHAPE CALCULATOR
------------------------------------------------------------- */
function initCalculator() {
    let currentGender = 'male';
    let currentWeight = 82;
    let currentGoal = 'recomp';

    const genderBtns = document.querySelectorAll('.calc-gender-btn');
    const weightSlider = document.getElementById('weightSlider');
    const weightVal = document.getElementById('weightVal');
    const goalSelect = document.getElementById('goalSelect');
    const cheatBtns = document.querySelectorAll('.cheat-meal-btn');

    const calcCaloriesEl = document.getElementById('calcCalories');
    const calcWeeksEl = document.getElementById('calcWeeks');

    function updateCalculations() {
        let bmr = currentGender === 'male' 
            ? (currentWeight * 24 * 1.1) 
            : (currentWeight * 22 * 1.05);

        let targetCalories = Math.round(bmr);
        let weeksEstimate = currentLang === 'en' ? '6-8 weeks' : '6-8 недель';

        if (currentGoal === 'cut') {
            targetCalories = Math.round(bmr * 0.85);
            weeksEstimate = currentWeight > 85 
                ? (currentLang === 'en' ? '7-9 weeks' : '7-9 недель') 
                : (currentLang === 'en' ? '4-6 weeks' : '4-6 недель');
        } else if (currentGoal === 'recomp') {
            targetCalories = Math.round(bmr * 0.98);
            weeksEstimate = currentLang === 'en' ? '6-8 weeks' : '6-8 недель';
        } else if (currentGoal === 'bulk') {
            targetCalories = Math.round(bmr * 1.15);
            weeksEstimate = currentLang === 'en' ? '8-10 weeks' : '8-10 недель';
        }

        if (calcCaloriesEl) {
            calcCaloriesEl.textContent = `${targetCalories.toLocaleString()} ${currentLang === 'en' ? 'kcal' : 'ккал'}`;
        }
        if (calcWeeksEl) {
            calcWeeksEl.textContent = weeksEstimate;
        }
    }

    genderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            genderBtns.forEach(b => {
                b.classList.remove('active', 'border-brand-neon', 'bg-brand-neon/10', 'text-brand-neon');
                b.classList.add('border-brand-border', 'bg-white/[0.02]', 'text-slate-400');
            });
            btn.classList.add('active', 'border-brand-neon', 'bg-brand-neon/10', 'text-brand-neon');
            btn.classList.remove('border-brand-border', 'bg-white/[0.02]', 'text-slate-400');
            currentGender = btn.dataset.gender;
            updateCalculations();
        });
    });

    if (weightSlider && weightVal) {
        weightSlider.addEventListener('input', (e) => {
            currentWeight = parseInt(e.target.value);
            weightVal.textContent = `${currentWeight} ${currentLang === 'en' ? 'kg' : 'кг'}`;
            updateCalculations();
        });
    }

    if (goalSelect) {
        goalSelect.addEventListener('change', (e) => {
            currentGoal = e.target.value;
            updateCalculations();
        });
    }

    cheatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cheatBtns.forEach(b => {
                b.classList.remove('active', 'border-brand-gold', 'bg-brand-gold/10', 'text-brand-gold');
                b.classList.add('border-brand-border', 'bg-white/[0.02]', 'text-slate-400');
            });
            btn.classList.add('active', 'border-brand-gold', 'bg-brand-gold/10', 'text-brand-gold');
            btn.classList.remove('border-brand-border', 'bg-white/[0.02]', 'text-slate-400');
            updateCalculations();
        });
    });

    updateCalculations();
}

/* -------------------------------------------------------------
   2. REVIEWS SLIDER
------------------------------------------------------------- */
function initReviewsSlider() {
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.getElementById('reviewsPrevBtn');
    const nextBtn = document.getElementById('reviewsNextBtn');
    const dotsContainer = document.getElementById('reviewsDots');

    if (!track) return;

    const cards = track.querySelectorAll('.review-card');
    if (!cards || cards.length === 0) return;

    let currentIndex = 0;
    const totalCards = cards.length;

    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        cards.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-brand-neon w-6' : 'bg-slate-700'}`;
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    function updateSlider() {
        if (!cards[0]) return;
        const cardWidth = cards[0].offsetWidth + 24;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('button');
            dots.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.className = 'w-6 h-2.5 rounded-full bg-brand-neon transition-all duration-300';
                } else {
                    dot.className = 'w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-500 transition-all duration-300';
                }
            });
        }
    }

    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, totalCards - 1));
        updateSlider();
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : totalCards - 1;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = currentIndex < totalCards - 1 ? currentIndex + 1 : 0;
            updateSlider();
        });
    }

    window.addEventListener('resize', updateSlider);
}

/* -------------------------------------------------------------
   3. TEST DRIVE REST TIMER
------------------------------------------------------------- */
function initTestDriveTimer() {
    const timerDisplay = document.getElementById('restTimerDisplay');
    const startBtn = document.getElementById('startRestTimerBtn');
    const resetBtn = document.getElementById('resetRestTimerBtn');

    if (!timerDisplay || !startBtn || !resetBtn) return;

    let countdown = null;
    let secondsLeft = 90;
    let isRunning = false;

    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    startBtn.addEventListener('click', () => {
        if (isRunning) return;
        isRunning = true;
        startBtn.classList.add('opacity-50', 'pointer-events-none');

        countdown = setInterval(() => {
            secondsLeft--;
            timerDisplay.textContent = formatTime(secondsLeft);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                isRunning = false;
                timerDisplay.textContent = currentLang === 'en' ? 'DONE!' : 'ГОТОВО!';
                startBtn.classList.remove('opacity-50', 'pointer-events-none');
            }
        }, 1000);
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(countdown);
        isRunning = false;
        secondsLeft = 90;
        timerDisplay.textContent = '1:30';
        startBtn.classList.remove('opacity-50', 'pointer-events-none');
    });

    const checkboxes = document.querySelectorAll('.exercise-check');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const item = cb.closest('.exercise-item');
            if (!item) return;
            if (cb.checked) {
                item.classList.add('border-brand-neon', 'bg-brand-neon/5');
            } else {
                item.classList.remove('border-brand-neon', 'bg-brand-neon/5');
            }
        });
    });
}

/* -------------------------------------------------------------
   4. TARIFF CHECKOUT & LEAD MODAL -> @aggres1veee
------------------------------------------------------------- */
const checkoutModal = document.getElementById('checkoutModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTariffName = document.getElementById('modalTariffName');
const modalTariffPrice = document.getElementById('modalTariffPrice');
const modalBadge = document.getElementById('modalBadge');
const formTariffField = document.getElementById('formTariffField');
const orderForm = document.getElementById('orderForm');
const modalSuccess = document.getElementById('modalSuccess');
const telegramDirectBtn = document.getElementById('telegramDirectBtn');

function openModal(tariffKey, price, name) {
    if (!checkoutModal) return;

    modalTariffName.textContent = name;
    modalTariffPrice.textContent = price;
    formTariffField.value = tariffKey;

    if (tariffKey === 'vip') {
        modalBadge.textContent = currentLang === 'en' ? '👑 VIP 1-ON-1 COACHING' : '👑 САМАЯ ИМБА - ЛИЧНОЕ ВЕДЕНИЕ';
        modalBadge.className = 'px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-brand-gold/20 text-brand-gold border border-brand-gold/30 inline-block mb-2';
    } else if (tariffKey === 'community') {
        modalBadge.textContent = currentLang === 'en' ? '⚡ COMMUNITY SQUAD' : '⚡ ДВИЖ В ТЕЛЕГРАМ';
        modalBadge.className = 'px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-brand-neon/20 text-brand-neon border border-brand-neon/30 inline-block mb-2';
    } else {
        modalBadge.textContent = currentLang === 'en' ? '📦 SOLO BLUEPRINT' : '📦 БАЗОВЫЙ ПАКЕТ';
        modalBadge.className = 'px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-slate-800 text-slate-300 border border-slate-700 inline-block mb-2';
    }

    orderForm.classList.remove('hidden');
    modalSuccess.classList.add('hidden');

    checkoutModal.classList.remove('hidden');
    checkoutModal.classList.add('flex');
}

function closeModal() {
    if (!checkoutModal) return;
    checkoutModal.classList.add('hidden');
    checkoutModal.classList.remove('flex');
}

function initTariffModal() {
    const tariffButtons = document.querySelectorAll('.tariff-select-btn');
    tariffButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tariffKey = btn.dataset.tariff;
            const price = btn.dataset.price;
            const name = btn.dataset.name;
            openModal(tariffKey, price, name);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    if (checkoutModal) {
        checkoutModal.addEventListener('click', (e) => {
            if (e.target === checkoutModal) closeModal();
        });
    }

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('userName').value.trim();
            const contact = document.getElementById('userContact').value.trim();

            const msgRu = `Привет, тренер! Я хочу на курс. Выбран тариф: "${modalTariffName.textContent}". Мое имя: ${name}, контакт: ${contact}. Готов начинать!`;
            const msgEn = `Hey coach! I want to join. Selected tier: "${modalTariffName.textContent}". My name: ${name}, contact: ${contact}. Ready to start!`;

            const message = currentLang === 'en' ? msgEn : msgRu;
            telegramDirectBtn.href = `https://t.me/${COACH_TG_USERNAME}?text=${encodeURIComponent(message)}`;

            orderForm.classList.add('hidden');
            modalSuccess.classList.remove('hidden');
        });
    }
}

/* -------------------------------------------------------------
   5. FAQ ACCORDION
------------------------------------------------------------- */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const answer = item.querySelector('.faq-answer');

        btn.addEventListener('click', () => {
            const isOpen = !answer.classList.contains('hidden');

            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-btn svg, .faq-btn i');
                otherAnswer.classList.add('hidden');
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                otherItem.classList.remove('border-brand-neon');
            });

            if (!isOpen) {
                const icon = btn.querySelector('svg, i');
                answer.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
                item.classList.add('border-brand-neon');
            }
        });
    });
}

/* -------------------------------------------------------------
   6. DEAL COUNTDOWN TIMER
------------------------------------------------------------- */
function initDealTimer() {
    const timerEl = document.getElementById('dealTimer');
    if (!timerEl) return;

    let totalSeconds = 3 * 3600 + 42 * 60 + 18;

    setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            totalSeconds = 4 * 3600;
        }

        const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');

        timerEl.textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

/* -------------------------------------------------------------
   7. MOBILE MENU
------------------------------------------------------------- */
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}
