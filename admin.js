// Admin Portal JavaScript

// Initialize content from localStorage
let triviaQuestions = JSON.parse(localStorage.getItem('triviaQuestions')) || [];
let dailyVerses = JSON.parse(localStorage.getItem('dailyVerses')) || [];
let bibleStudyCourses = JSON.parse(localStorage.getItem('bibleStudyCourses')) || [];
let subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];

// Tab Navigation
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
        
        // Load content for the active tab
        loadTabContent(button.dataset.tab);
    });
});

// Load content for each tab
function loadTabContent(tab) {
    switch(tab) {
        case 'trivia':
            loadTriviaQuestions();
            break;
        case 'verses':
            loadDailyVerses();
            break;
        case 'courses':
            loadBibleCourses();
            break;
        case 'subscribers':
            loadSubscribers();
            break;
    }
}

// Modal Functions
function showModal(content) {
    const modal = document.getElementById('modal');
    const modalForm = document.getElementById('modal-form');
    modalForm.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

document.querySelector('.close').addEventListener('click', closeModal);

// Trivia Questions Functions
function loadTriviaQuestions() {
    const list = document.getElementById('questions-list');
    list.innerHTML = triviaQuestions.map((q, index) => `
        <div class="content-item">
            <div>
                <strong>Q: ${q.question}</strong>
                <p>Correct Answer: ${q.correctAnswer}</p>
            </div>
            <div class="actions">
                <button class="edit-btn" onclick="editQuestion(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteQuestion(${index})">Delete</button>
            </div>
        </div>
    `).join('');
}

function showAddQuestionForm() {
    showModal(`
        <h2>Add New Question</h2>
        <form onsubmit="addQuestion(event)">
            <div class="form-group">
                <label>Question:</label>
                <input type="text" id="question" required>
            </div>
            <div class="form-group">
                <label>Correct Answer:</label>
                <input type="text" id="correctAnswer" required>
            </div>
            <div class="form-group">
                <label>Options (comma-separated):</label>
                <input type="text" id="options" required>
            </div>
            <button type="submit" class="add-btn">Add Question</button>
        </form>
    `);
}

function addQuestion(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    const correctAnswer = document.getElementById('correctAnswer').value;
    const options = document.getElementById('options').value.split(',').map(opt => opt.trim());
    
    triviaQuestions.push({
        question,
        correctAnswer,
        options
    });
    
    localStorage.setItem('triviaQuestions', JSON.stringify(triviaQuestions));
    loadTriviaQuestions();
    closeModal();
}

// Daily Verses Functions
function loadDailyVerses() {
    const list = document.getElementById('verses-list');
    list.innerHTML = dailyVerses.map((verse, index) => `
        <div class="content-item">
            <div>
                <strong>${verse.reference}</strong>
                <p>${verse.text}</p>
            </div>
            <div class="actions">
                <button class="edit-btn" onclick="editVerse(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteVerse(${index})">Delete</button>
            </div>
        </div>
    `).join('');
}

function showAddVerseForm() {
    showModal(`
        <h2>Add New Verse</h2>
        <form onsubmit="addVerse(event)">
            <div class="form-group">
                <label>Reference:</label>
                <input type="text" id="reference" required>
            </div>
            <div class="form-group">
                <label>Text:</label>
                <textarea id="verseText" required></textarea>
            </div>
            <div class="form-group">
                <label>Study Note:</label>
                <textarea id="study" required></textarea>
            </div>
            <button type="submit" class="add-btn">Add Verse</button>
        </form>
    `);
}

function addVerse(event) {
    event.preventDefault();
    const reference = document.getElementById('reference').value;
    const text = document.getElementById('verseText').value;
    const study = document.getElementById('study').value;
    
    dailyVerses.push({
        reference,
        text,
        study
    });
    
    localStorage.setItem('dailyVerses', JSON.stringify(dailyVerses));
    loadDailyVerses();
    closeModal();
}

// Bible Courses Functions
function loadBibleCourses() {
    const list = document.getElementById('courses-list');
    list.innerHTML = bibleStudyCourses.map((course, index) => `
        <div class="content-item">
            <div>
                <strong>${course.title}</strong>
                <p>${course.description}</p>
            </div>
            <div class="actions">
                <button class="edit-btn" onclick="editCourse(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteCourse(${index})">Delete</button>
            </div>
        </div>
    `).join('');
}

function showAddCourseForm() {
    showModal(`
        <h2>Add New Course</h2>
        <form onsubmit="addCourse(event)">
            <div class="form-group">
                <label>Title:</label>
                <input type="text" id="title" required>
            </div>
            <div class="form-group">
                <label>Description:</label>
                <textarea id="description" required></textarea>
            </div>
            <div class="form-group">
                <label>Content:</label>
                <textarea id="content" required></textarea>
            </div>
            <button type="submit" class="add-btn">Add Course</button>
        </form>
    `);
}

function addCourse(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const content = document.getElementById('content').value;
    
    bibleStudyCourses.push({
        title,
        description,
        content,
        lessons: []
    });
    
    localStorage.setItem('bibleStudyCourses', JSON.stringify(bibleStudyCourses));
    loadBibleCourses();
    closeModal();
}

// Subscribers Functions
function loadSubscribers() {
    const totalSubscribers = document.getElementById('total-subscribers');
    const activeSubscribers = document.getElementById('active-subscribers');
    const list = document.getElementById('subscribers-list');
    
    totalSubscribers.textContent = subscribers.length;
    activeSubscribers.textContent = subscribers.filter(s => s.lastActive > Date.now() - 7 * 24 * 60 * 60 * 1000).length;
    
    list.innerHTML = subscribers.map((sub, index) => `
        <div class="content-item">
            <div>
                <strong>${sub.email}</strong>
                <p>Joined: ${new Date(sub.joinDate).toLocaleDateString()}</p>
            </div>
            <div class="actions">
                <button class="delete-btn" onclick="deleteSubscriber(${index})">Remove</button>
            </div>
        </div>
    `).join('');
}

// Initialize the first tab
document.querySelector('.tab-btn.active').click();
