// Bible trivia questions database
const triviaQuestions = [
    {
        question: "Who was the first man created by God?",
        options: ["Noah", "Adam", "Abraham", "Moses"],
        correctIndex: 1
    },
    {
        question: "How many days did God take to create the world?",
        options: ["3 days", "5 days", "6 days", "7 days"],
        correctIndex: 2
    },
    {
        question: "Who built the ark?",
        options: ["Moses", "Noah", "Abraham", "David"],
        correctIndex: 1
    },
    {
        question: "Who led the Israelites out of Egypt?",
        options: ["Aaron", "Moses", "Joshua", "David"],
        correctIndex: 1
    },
    {
        question: "Who was thrown into the lions' den?",
        options: ["Daniel", "David", "Solomon", "Joseph"],
        correctIndex: 0
    },
    {
        question: "What was the name of Abraham's wife?",
        options: ["Rachel", "Sarah", "Rebecca", "Leah"],
        correctIndex: 1
    },
    {
        question: "Which apostle denied Jesus three times?",
        options: ["John", "Peter", "James", "Andrew"],
        correctIndex: 1
    },
    {
        question: "What was the first plague in Egypt?",
        options: ["Frogs", "Water turned to blood", "Darkness", "Locusts"],
        correctIndex: 1
    },
    {
        question: "Who killed Goliath?",
        options: ["Saul", "David", "Solomon", "Samuel"],
        correctIndex: 1
    },
    {
        question: "What was Jesus' first miracle?",
        options: ["Walking on water", "Feeding 5000", "Turning water into wine", "Healing a leper"],
        correctIndex: 2
    },
    {
        question: "Who was the mother of John the Baptist?",
        options: ["Elizabeth", "Mary", "Anna", "Martha"],
        correctIndex: 0
    },
    {
        question: "Which book comes first in the Bible?",
        options: ["Exodus", "Genesis", "Matthew", "Psalms"],
        correctIndex: 1
    },
    {
        question: "How many books are in the New Testament?",
        options: ["27", "39", "66", "12"],
        correctIndex: 0
    },
    {
        question: "Who wrote most of the Psalms?",
        options: ["Solomon", "Moses", "David", "Samuel"],
        correctIndex: 2
    },
    {
        question: "What was Paul's name before his conversion?",
        options: ["Simon", "Saul", "Stephen", "Silas"],
        correctIndex: 1
    },
    {
        question: "Which prophet was swallowed by a great fish?",
        options: ["Jonah", "Elijah", "Isaiah", "Jeremiah"],
        correctIndex: 0
    },
    {
        question: "What was the name of Moses' sister?",
        options: ["Miriam", "Ruth", "Rachel", "Rebecca"],
        correctIndex: 0
    },
    {
        question: "Who was known as the wisest king of Israel?",
        options: ["David", "Solomon", "Saul", "Rehoboam"],
        correctIndex: 1
    },
    {
        question: "What was the first plague of Egypt?",
        options: ["Locusts", "Darkness", "Blood", "Frogs"],
        correctIndex: 2
    },
    {
        question: "Who baptized Jesus?",
        options: ["Peter", "Paul", "John the Baptist", "Andrew"],
        correctIndex: 2
    },
    {
        question: "What was Matthew's profession before following Jesus?",
        options: ["Fisherman", "Tax Collector", "Carpenter", "Shepherd"],
        correctIndex: 1
    },
    {
        question: "Which disciple doubted Jesus' resurrection?",
        options: ["Thomas", "Peter", "John", "James"],
        correctIndex: 0
    },
    {
        question: "What was the name of Abraham's nephew?",
        options: ["Lot", "Ishmael", "Isaac", "Jacob"],
        correctIndex: 0
    },
    {
        question: "Who was the strongest man in the Bible?",
        options: ["David", "Goliath", "Samson", "Solomon"],
        correctIndex: 2
    },
    {
        question: "What was the name of Jesus' earthly father?",
        options: ["Joseph", "John", "James", "Jesse"],
        correctIndex: 0
    },
    {
        question: "Which city's walls fell after the Israelites marched around it?",
        options: ["Jerusalem", "Jericho", "Bethlehem", "Nazareth"],
        correctIndex: 1
    },
    {
        question: "Who was the first woman created by God?",
        options: ["Eve", "Sarah", "Rachel", "Mary"],
        correctIndex: 0
    },
    {
        question: "What was the name of the garden where Adam and Eve lived?",
        options: ["Paradise", "Eden", "Gethsemane", "Babylon"],
        correctIndex: 1
    }
];

// Daily verses database
const dailyVerses = [
    {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16",
        study: "This foundational verse reveals the heart of God's love for humanity. It shows that God's love is sacrificial, universal, and purposeful. The word 'whoever' demonstrates that salvation is available to all who believe.",
        questions: [
            "How does this verse demonstrate God's love?",
            "What does it mean to 'believe in Him'?",
            "How can we apply this truth in our daily lives?"
        ]
    },
    {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13",
        study: "Written by Paul while in prison, this verse teaches us about finding strength in Christ during difficult times. It's not about superhuman abilities, but about Christ's power working through our weaknesses.",
        questions: [
            "What does this verse mean to you personally?",
            "How can we rely on Christ's strength in difficult times?",
            "What are some challenges where you need His strength?"
        ]
    },
    {
        text: "Trust in the LORD with all your heart and lean not on your own understanding.",
        reference: "Proverbs 3:5",
        study: "This verse encourages complete trust in God's wisdom over our limited human perspective. It's a call to faith even when we don't understand God's plan.",
        questions: [
            "What does it mean to trust with 'all your heart'?",
            "Why do we often lean on our own understanding?",
            "How can we practice this trust in daily decisions?"
        ]
    },
    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
        reference: "Joshua 1:9",
        study: "God spoke these words to Joshua as he was about to lead Israel into the Promised Land. It reminds us that God's presence gives us courage to face any challenge.",
        questions: [
            "What situations in your life require courage?",
            "How does God's presence help overcome fear?",
            "What promises can we claim from this verse?"
        ]
    },
    {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28",
        study: "This verse assures believers that God can bring good out of any situation. It doesn't mean all things are good, but that God can work them for good in His divine plan.",
        questions: [
            "How have you seen God work things for good in your life?",
            "What does it mean to be 'called according to his purpose'?",
            "How can this verse comfort us in difficult times?"
        ]
    },
    {
        text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
        reference: "Psalm 23:1-3",
        study: "This beloved psalm paints a picture of God as our caring shepherd. It speaks to His provision, protection, and personal care for each of us.",
        questions: [
            "How does seeing God as a shepherd change your perspective?",
            "What does it mean to 'lack nothing' in God?",
            "How has God 'refreshed your soul' recently?"
        ]
    },
    {
        text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
        reference: "Galatians 5:22-23",
        study: "These verses outline the characteristics that the Holy Spirit develops in believers. They represent the transformation that occurs in our lives through God's work.",
        questions: [
            "Which fruit of the Spirit do you see most in your life?",
            "Which one do you need to grow in?",
            "How can we cultivate these fruits in our daily walk?"
        ]
    },
    {
        text: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
        reference: "Psalm 51:10",
        study: "David's prayer for renewal shows us the importance of maintaining a pure heart and consistent faith. It's a model of repentance and restoration.",
        questions: [
            "What does it mean to have a 'pure heart'?",
            "Why is a 'steadfast spirit' important?",
            "How can we maintain spiritual renewal daily?"
        ]
    },
    {
        text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        reference: "Galatians 6:9",
        study: "This verse encourages persistence in faith and good works. It promises that our faithful service will eventually bear fruit.",
        questions: [
            "What makes us become weary in doing good?",
            "What 'harvest' might God be preparing in your life?",
            "How can we encourage others who are growing weary?"
        ]
    },
    {
        text: "Your word is a lamp for my feet, a light on my path.",
        reference: "Psalm 119:105",
        study: "This verse emphasizes the practical guidance that God's Word provides for our daily decisions and life direction.",
        questions: [
            "How does God's Word guide your decisions?",
            "What does it mean to have God's Word as a 'lamp' and 'light'?",
            "How can we better apply Scripture to our daily choices?"
        ]
    }
];

// Bible study courses database
const bibleStudyCourses = [
    {
        title: "Understanding God's Love",
        verses: [
            {
                text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
                reference: "John 3:16",
                study: "This verse reveals the depth of God's love for humanity. The word 'so' emphasizes the magnitude of this love - it was so great that He gave His most precious gift, His Son. This sacrificial love demonstrates God's desire for a relationship with us and His plan for our salvation.",
                questions: [
                    "How does understanding God's sacrifice change your perspective on His love?",
                    "In what ways can you reflect God's sacrificial love in your own life?",
                    "What does 'eternal life' mean to you personally?"
                ]
            }
        ],
        lessons: [
            {
                title: "The Nature of God's Love",
                content: "God's love is unconditional, sacrificial, and eternal. Unlike human love, which can be conditional and changing, God's love remains constant regardless of our actions or feelings.",
                application: "Reflect on moments when you've experienced God's unconditional love in your life."
            }
        ]
    },
    {
        title: "Walking in Faith",
        verses: [
            {
                text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
                reference: "Hebrews 11:1",
                study: "This verse defines faith as both confidence and assurance. It's not blind trust, but rather a deep conviction based on God's character and promises. Faith allows us to move forward even when we can't see the full picture.",
                questions: [
                    "What role does faith play in your daily decisions?",
                    "How has your faith grown through challenging times?",
                    "What promises of God do you find most encouraging?"
                ]
            }
        ],
        lessons: [
            {
                title: "Building Strong Faith",
                content: "Faith grows through experience with God, studying His Word, and stepping out in trust. Like a muscle, faith strengthens with exercise and regular use.",
                application: "Identify one area where you need to exercise more faith this week."
            }
        ]
    },
    {
        title: "The Power of Prayer",
        verses: [
            {
                text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
                reference: "Philippians 4:6",
                study: "Prayer is our direct line of communication with God. This verse encourages us to replace anxiety with prayer, combining our requests with thanksgiving. It's a reminder that God cares about every aspect of our lives.",
                questions: [
                    "How does prayer help you deal with anxiety?",
                    "What role does thanksgiving play in your prayer life?",
                    "How has God answered your prayers in unexpected ways?"
                ]
            }
        ],
        lessons: [
            {
                title: "Developing a Prayer Life",
                content: "Prayer is both a privilege and a practice. It involves speaking and listening to God, bringing our concerns to Him while also being open to His guidance and wisdom.",
                application: "Start a prayer journal to track your conversations with God and His answers."
            }
        ]
    }
];

// Achievements system
const achievements = [
    {
        id: 'first_correct',
        title: 'First Step',
        description: 'Answer your first question correctly',
        icon: '🎯'
    },
    {
        id: 'streak_3',
        title: 'On Fire',
        description: 'Get a streak of 3 correct answers',
        icon: '🔥'
    },
    {
        id: 'streak_5',
        title: 'Unstoppable',
        description: 'Get a streak of 5 correct answers',
        icon: '⚡'
    },
    {
        id: 'daily_complete',
        title: 'Daily Devotion',
        description: 'Complete all daily questions',
        icon: '📖'
    },
    {
        id: 'high_score',
        title: 'High Achiever',
        description: 'Score over 100 points',
        icon: '🏆'
    }
];

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Progress bar
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const questionCounter = document.getElementById('question-counter');
    
    if (!progressBar || !questionCounter || !todayContent || !todayContent.questions) {
        console.error('Missing elements for progress update');
        return;
    }
    
    const progress = ((currentQuestion + 1) / todayContent.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${todayContent.questions.length}`;
}

// Subscribe form handling
function initSubscribe() {
    document.getElementById('subscribe-form').addEventListener('submit', handleSubscribe);
}

// Subscription handling
function handleSubscribe(event) {
    event.preventDefault();
    const email = document.getElementById('subscribe-email').value;
    
    // Add to subscribers list
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    if (!subscribers.some(s => s.email === email)) {
        subscribers.push({
            email,
            joinDate: new Date().toISOString(),
            lastActive: Date.now()
        });
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        
        // Show success message
        showNotification('Subscribed!', 'You will now receive daily Bible verses and updates.');
        document.getElementById('subscribe-email').value = '';
    } else {
        showNotification('Already Subscribed', 'This email is already subscribed to updates.');
    }
}

// Achievement handling
function checkAchievements() {
    const unlockedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    
    // Check for first correct answer
    if (!unlockedAchievements.includes('first_correct') && score > 0) {
        unlockAchievement('first_correct');
    }
    
    // Check for streaks
    if (!unlockedAchievements.includes('streak_3') && streak >= 3) {
        unlockAchievement('streak_3');
    }
    
    if (!unlockedAchievements.includes('streak_5') && streak >= 5) {
        unlockAchievement('streak_5');
    }
    
    // Check for high score
    if (!unlockedAchievements.includes('high_score') && score >= 100) {
        unlockAchievement('high_score');
    }
    
    // Check for daily completion
    if (!unlockedAchievements.includes('daily_complete') && 
        currentQuestion === todayContent.questions.length - 1) {
        unlockAchievement('daily_complete');
    }
}

function unlockAchievement(achievementId) {
    const unlockedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    if (!unlockedAchievements.includes(achievementId)) {
        unlockedAchievements.push(achievementId);
        localStorage.setItem('achievements', JSON.stringify(unlockedAchievements));
        
        const achievement = achievements.find(a => a.id === achievementId);
        showNotification('Achievement Unlocked!', `${achievement.title}: ${achievement.description}`);
        
        // Update achievements display
        displayAchievements();
    }
}

function displayAchievements() {
    let achievementsGrid = document.getElementById('achievements-list');
    if (!achievementsGrid) {
        console.log('Creating achievements grid...');
        achievementsGrid = document.createElement('div');
        achievementsGrid.id = 'achievements-list';
        document.body.appendChild(achievementsGrid);
    }
    
    const unlockedAchievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    
    achievementsGrid.innerHTML = achievements.map(achievement => `
        <div class="achievement-item ${unlockedAchievements.includes(achievement.id) ? 'unlocked' : ''}">
            <div class="achievement-icon">${achievement.icon}</div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `).join('');
}

// Initialize game
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing game...');
    initGame();
    // Check for new content every minute
    setInterval(checkAndRefreshContent, 60000);
});

// Subscribe button and modal handling
document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.getElementById('subscribe-btn');
    const subscribeModal = document.getElementById('subscribe-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Show modal when subscribe button is clicked
    subscribeBtn.addEventListener('click', () => {
        subscribeModal.style.display = 'block';
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', () => {
        subscribeModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === subscribeModal) {
            subscribeModal.style.display = 'none';
        }
    });
});

// Handle subscription form submission
function handleSubscribe(event) {
    event.preventDefault();
    
    const email = document.getElementById('subscribe-email').value;
    const preferences = {
        verses: document.getElementById('subscribe-preferences-verses').checked,
        trivia: document.getElementById('subscribe-preferences-trivia').checked,
        study: document.getElementById('subscribe-preferences-study').checked
    };
    
    // Get existing subscribers or initialize empty array
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    
    // Check if email already exists
    const existingSubscriber = subscribers.find(s => s.email === email);
    
    if (existingSubscriber) {
        // Update preferences if already subscribed
        existingSubscriber.preferences = preferences;
        existingSubscriber.lastActive = Date.now();
        showNotification('Preferences Updated', 'Your subscription preferences have been updated!');
    } else {
        // Add new subscriber
        subscribers.push({
            email,
            preferences,
            joinDate: new Date().toISOString(),
            lastActive: Date.now()
        });
        showNotification('Successfully Subscribed!', 'Welcome to our daily Bible content!');
    }
    
    // Save updated subscribers list
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    
    // Close modal and reset form
    document.getElementById('subscribe-modal').style.display = 'none';
    document.getElementById('subscribe-form').reset();
}

// DOM Elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-question');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const verseTextElement = document.getElementById('verse-text');
const verseReferenceElement = document.getElementById('verse-reference');
const studyContentElement = document.getElementById('study-text');
const reflectionQuestionsElement = document.getElementById('reflection-questions');
const progressBar = document.getElementById('progress-bar');

// Game state
let todayContent = null;
let currentQuestion = 0;
let score = 0;
let streak = 0;

// Initialize game state
function initGame() {
    // Force a content refresh on initialization
    forceContentRefresh();
    
    // Add event listeners
    nextButton.addEventListener('click', nextQuestion);
    
    // Check for new content every minute
    setInterval(checkAndRefreshContent, 60000);
}

// Force a content refresh
function forceContentRefresh() {
    console.log('Forcing content refresh...');
    
    // Clear previous game state
    currentQuestion = 0;
    score = 0;
    streak = 0;
    
    // Clear localStorage
    localStorage.removeItem('lastUpdate');
    
    // Get new content
    todayContent = getTodayContent();
    
    // Save current time
    localStorage.setItem('lastUpdate', new Date().toISOString());
    
    // Update all displays
    displayQuestion();
    displayDailyVerse();
    updateProgress();
    updateScoreDisplay();
}

// Update score display
function updateScoreDisplay() {
    scoreElement.textContent = score;
    streakElement.textContent = streak;
}

// Check if it's a new day and refresh content if needed
function checkAndRefreshContent() {
    const now = new Date();
    const lastUpdate = localStorage.getItem('lastUpdate');
    
    if (!lastUpdate) {
        console.log('No last update found, refreshing content...');
        forceContentRefresh();
        return;
    }
    
    const lastUpdateDate = new Date(lastUpdate);
    if (!isSameDay(lastUpdateDate, now)) {
        console.log('New day detected, refreshing content...');
        forceContentRefresh();
    } else {
        console.log('Same day, keeping current content...');
    }
}

// Helper function to check if two dates are the same day
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

// Display current question
function displayQuestion() {
    if (!todayContent || !todayContent.questions) {
        console.error('No questions available');
        return;
    }

    // Hide next button until answer is selected
    nextButton.style.display = 'none';
    
    if (currentQuestion >= todayContent.questions.length) {
        // Game is complete
        questionElement.textContent = 'Game Complete!';
        optionsElement.innerHTML = `
            <div class="game-complete">
                <p>Final Score: ${score}</p>
                <p>Longest Streak: ${streak}</p>
                <button onclick="restartGame()" class="btn restart-btn">Play Again</button>
            </div>
        `;
        return;
    }

    const question = todayContent.questions[currentQuestion];
    questionElement.textContent = question.question;

    // Clear previous options
    optionsElement.innerHTML = '';

    // Create and add new option buttons
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    // Update progress
    updateProgress();
}

// Check the selected answer
function checkAnswer(selectedIndex) {
    const question = todayContent.questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    // Disable all options after selection
    options.forEach(option => option.disabled = true);
    
    if (selectedIndex === question.correctIndex) {
        // Correct answer
        options[selectedIndex].classList.add('correct');
        score += 10;
        streak++;
        if (streak > 0) score += streak * 2; // Bonus points for streak
    } else {
        // Wrong answer
        options[selectedIndex].classList.add('wrong');
        options[question.correctIndex].classList.add('correct');
        streak = 0;
    }
    
    // Update score and streak display
    updateScoreDisplay();
    
    // Show next button
    nextButton.style.display = 'block';
    
    // Check achievements
    checkAchievements();
}

// Move to next question
function nextQuestion() {
    currentQuestion++;
    displayQuestion();
}

// Restart the game
function restartGame() {
    currentQuestion = 0;
    score = 0;
    streak = 0;
    updateScoreDisplay();
    todayContent = getTodayContent();
    displayQuestion();
}

// Share functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this amazing Bible Trivia game!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Growing in faith through this amazing Bible Trivia game! 🙏');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareVerse() {
    if (todayContent && todayContent.verse) {
        const text = encodeURIComponent(`${todayContent.verse.text} - ${todayContent.verse.reference}`);
        if (navigator.share) {
            navigator.share({
                title: 'Daily Bible Verse',
                text: `${todayContent.verse.text} - ${todayContent.verse.reference}`,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support Web Share API
            const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`;
            window.open(twitterUrl, '_blank');
        }
    }
}

// Add share verse event listener
document.getElementById('share-verse').addEventListener('click', shareVerse);

// Shuffle array consistently based on day
function shuffleArrayByDay(array, seed) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    
    // Seeded random number generator
    const random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
    
    // Fisher-Yates shuffle with seeded random
    while (currentIndex !== 0) {
        // Get random index using the seeded random number generator
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex -= 1;
        
        // Swap elements
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

// Get today's content based on the date
function getTodayContent() {
    // Calculate day of year (1-365)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Create a seed that changes daily
    const seed = dayOfYear + (now.getFullYear() * 365);
    
    // Get today's questions using the seed
    const shuffledQuestions = shuffleArrayByDay(triviaQuestions.slice(), seed);
    const todaysQuestions = shuffledQuestions.slice(0, 5);
    
    // Get today's verse using the day of year
    const verseIndex = dayOfYear % dailyVerses.length;
    const todayVerse = dailyVerses[verseIndex];
    
    // Get today's Bible study course
    const courseIndex = dayOfYear % bibleStudyCourses.length;
    const todayCourse = bibleStudyCourses[courseIndex];
    
    console.log('Generated new content for day:', dayOfYear);
    console.log('Using verse index:', verseIndex);
    console.log('Using course index:', courseIndex);
    
    return {
        questions: todaysQuestions,
        verse: todayVerse,
        course: todayCourse
    };
}

// Display daily verse and study content
function displayDailyVerse() {
    if (!todayContent || !todayContent.verse || !todayContent.course) {
        console.error('Missing content:', todayContent);
        return;
    }

    const verse = todayContent.verse;
    const course = todayContent.course;
    
    console.log('Displaying verse:', verse.reference);
    console.log('Displaying course:', course.title);
    
    // Display verse
    verseTextElement.textContent = verse.text;
    verseReferenceElement.textContent = verse.reference;
    
    // Display study content with proper formatting
    studyContentElement.innerHTML = `
        <div class="study-section">
            <h3 class="study-title">${course.title}</h3>
            <p class="verse-study">${verse.study}</p>
            <div class="course-lesson">
                <h4>${course.lessons[0].title}</h4>
                <p>${course.lessons[0].content}</p>
                <p class="application"><strong>Today's Application:</strong> ${course.lessons[0].application}</p>
            </div>
        </div>
    `;
    
    // Display reflection questions with proper styling
    reflectionQuestionsElement.innerHTML = `
        <h3>Today's Reflection Questions:</h3>
        ${verse.questions.map(q => `
            <p class="reflection-question">🤔 ${q}</p>
        `).join('')}
    `;
}

// Save high scores locally
function saveHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
    highScores.push({
        score: score,
        date: new Date().toISOString(),
        streak: streak
    });
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores.slice(0, 10))); // Keep top 10
}

// Display high scores
function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
    const highScoresList = document.getElementById('high-scores-list');
    if (highScoresList) {
        highScoresList.innerHTML = highScores
            .map((score, index) => `
                <li class="high-score-item">
                    <span class="rank">#${index + 1}</span>
                    <span class="score">${score.score}</span>
                    <span class="date">${new Date(score.date).toLocaleDateString()}</span>
                </li>
            `)
            .join('');
    }
}

// Add notification for new content
function checkForNewContent() {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
        showNotification('New content available!', 'Check out today\'s verse and questions!');
        localStorage.setItem('lastVisit', today);
    }
}

// Show notification
function showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <h3>${title}</h3>
        <p>${message}</p>
    `;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
