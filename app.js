// Global variables and default settings
const defaultSettings = {
    notifications: {
        email: false,
        browser: false
    },
    colorTheme: {
        primary: '#007bff',
        secondary: '#6c757d',
        accent: '#28a745'
    },
    restaurantName: 'My Restaurant',
    defaultShiftDuration: 4,
    useProfileIcon: true,
    language: 'nl'
};

// Initialize global state with browser language detection
let currentLanguage = localStorage.getItem('language') || detectBrowserLanguage() || defaultSettings.language;

// Load FontAwesome job icons
let fontAwesomeJobs = {};

// Initialize FontAwesome jobs with fallback data immediately
fontAwesomeJobs = {
    "general": [
        { "name": "User", "icon": "fa-user" }
    ],
    "office_business": [
        { "name": "Manager", "icon": "fa-user-tie" },
        { "name": "General Office", "icon": "fa-briefcase" },
        { "name": "Administration", "icon": "fa-building" },
        { "name": "Project Manager", "icon": "fa-calendar-check" },
        { "name": "Secretary", "icon": "fa-clipboard" }
    ],
    "developer_it": [
        { "name": "Software Developer", "icon": "fa-laptop-code" },
        { "name": "Programmer", "icon": "fa-code" },
        { "name": "Network Engineer", "icon": "fa-network-wired" },
        { "name": "Database Administrator", "icon": "fa-database" },
        { "name": "Cybersecurity", "icon": "fa-shield-alt" }
    ],
    "healthcare": [
        { "name": "Nurse", "icon": "fa-user-nurse" },
        { "name": "Doctor", "icon": "fa-user-md" },
        { "name": "Paramedic", "icon": "fa-briefcase-medical" },
        { "name": "Healthcare", "icon": "fa-heartbeat" }
    ],
    "hospitality": [
        { "name": "Chef", "icon": "fa-utensils" },
        { "name": "Barista", "icon": "fa-mug-hot" },
        { "name": "Hotel Staff", "icon": "fa-concierge-bell" },
        { "name": "Waiter", "icon": "fa-wine-glass" }
    ],
    "retail_sales": [
        { "name": "Retail", "icon": "fa-store" },
        { "name": "Sales/Marketing", "icon": "fa-tags" },
        { "name": "Cashier", "icon": "fa-cash-register" },
        { "name": "Sales Representative", "icon": "fa-handshake" }
    ]
};

// Load additional FontAwesome jobs from file
loadFontAwesomeJobs();

// Language detection helper function
function detectBrowserLanguage() {
    try {
        // Get browser language preferences
        const browserLang = navigator.language || navigator.userLanguage;
        const lang = browserLang.toLowerCase().split('-')[0];
        
        // Only return if it's one of our supported languages
        return ['nl', 'fr'].includes(lang) ? lang : null;
    } catch (error) {
        console.error('Error detecting browser language:', error);
        return null;
    }
}
let currentWeek = new Date();
let defaultShiftDuration = parseInt(localStorage.getItem('defaultShiftDuration')) || defaultSettings.defaultShiftDuration;
let useProfileIcon = JSON.parse(localStorage.getItem('useProfileIcon') ?? String(defaultSettings.useProfileIcon));

// pc302Data is defined in data.js
let employees = JSON.parse(localStorage.getItem('employees')) || [
    {
        id: '3',
        firstName: 'Alice',
        lastName: 'Van Den Broeck',
        dateOfBirth: '1985-10-12',
        niss: '85081212345',
        address: 'Boulevard Anspach 1, 1000 Brussel',
        phone: '0477-998844',
        email: 'alice.vanbroeck@example.com',
        nationality: 'Belgian',
        placeOfBirth: 'Antwerp',
        civilStatus: 'Married',
        iban: 'BE68539007547062',
        contractType: 'full-time',
        jobCategory: '3',
        jobTitle: 'Room service employee',
        active: true
    },
    {
        id: '4',
        firstName: 'Marc',
        lastName: 'Peeters',
        dateOfBirth: '1978-04-30',
        niss: '78043054321',
        address: 'Rue de la Loi 16, 1040 Brussels',
        phone: '0468-332211',
        email: 'marc.peeters@example.com',
        nationality: 'Belgian',
        placeOfBirth: 'Leuven',
        civilStatus: 'Divorced',
        iban: 'BE46539007547063',
        contractType: 'part-time',
        jobCategory: '2',
        jobTitle: 'Doorman',
        active: true
    },
    {
        id: '5',
        firstName: 'Sophie',
        lastName: 'Dubois',
        dateOfBirth: '1988-12-03',
        niss: '88120387654',
        address: 'Chaussée de Charleroi 78, 1060 Saint-Gilles',
        phone: '0489-556677',
        email: 'sophie.dubois@example.com',
        nationality: 'Belgian',
        placeOfBirth: 'Charleroi',
        civilStatus: 'Single',
        iban: 'BE72539007547064',
        contractType: 'flexi-job',
        jobCategory: '4',
        jobTitle: 'Waiter',
        active: true
    },
    {
        id: '6',
        firstName: 'Ahmed',
        lastName: 'El Mansouri',
        dateOfBirth: '1995-03-20',
        niss: '95032012345',
        address: 'Rue des Foulons 32, 1000 Brussels',
        phone: '0476-123789',
        email: 'ahmed.elmansouri@example.com',
        nationality: 'Belgian',
        placeOfBirth: 'Brussels',
        civilStatus: 'Single',
        iban: 'BE19539007547065',
        contractType: 'student',
        jobCategory: '2',
        jobTitle: 'Kitchen help',
        active: true
    },
    {
        id: '7',
        firstName: 'Lotte',
        lastName: 'Janssens',
        dateOfBirth: '1983-09-15',
        niss: '83091565432',
        address: 'Kerkstraat 25, 2000 Antwerpen',
        phone: '0472-987654',
        email: 'lotte.janssens@example.com',
        nationality: 'Belgian',
        placeOfBirth: 'Antwerpen',
        civilStatus: 'Married',
        iban: 'BE33539007547066',
        contractType: 'full-time',
        jobCategory: '4',
        jobTitle: 'Receptionist',
        active: true
    },
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        niss: '1234567890',
        address: '123 Main St, Cityville',
        phone: '555-1234',
        email: 'johndoe@example.com',
        nationality: 'Belgian',
        placeOfBirth: 'Cityville',
        civilStatus: 'Single',
        iban: 'BE62510007547061',
        contractType: 'full-time',
        jobCategory: '0',
        jobTitle: 'Cleaner',
        active: true
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        dateOfBirth: '1992-06-15',
        niss: '0987654321',
        address: '456 Boulevard Ave, Townland',
        phone: '555-5678',
        email: 'janesmith@example.com',
        nationality: 'Belgian',
        placeOfBirth: 'Townland',
        civilStatus: 'Married',
        iban: 'BE68539007547061',
        contractType: 'part-time',
        jobCategory: '1',
        jobTitle: 'Porter',
        active: true
    }
];
let contracts = JSON.parse(localStorage.getItem('contracts')) || [
    {
        id: 'contract2',
        employeeId: '3',
        startDate: '2025-05-01',
        endDate: '2025-12-31',
        salary: '3500',
        terms: 'Standard full-time contract terms, including benefits.',
        signature: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'contract3',
        employeeId: '4',
        startDate: '2025-04-01',
        endDate: '2025-10-01',
        salary: '2500',
        terms: 'Standard part-time contract terms.',
        signature: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'contract4',
        employeeId: '5',
        startDate: '2025-06-01',
        endDate: '2025-08-31',
        salary: '2800',
        terms: 'Flexi-job contract terms, maximum 50 days per calendar year.',
        signature: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'contract5',
        employeeId: '6',
        startDate: '2025-03-01',
        endDate: '2025-06-30',
        salary: '1800',
        terms: 'Student contract, maximum 20 hours per week during academic year.',
        signature: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'contract6',
        employeeId: '7',
        startDate: '2025-02-01',
        endDate: '2026-01-31',
        salary: '4200',
        terms: 'Full-time permanent contract with standard Belgian benefits.',
        signature: null,
        createdAt: new Date().toISOString()
    },
    {
        id: 'contract1',
        employeeId: '1',
        startDate: '2025-01-01',
        endDate: '2025-12-31',
        salary: '3000',
        terms: 'Standard full-time contract terms.',
        signature: null,
        createdAt: new Date().toISOString()
    }
];
let absences = JSON.parse(localStorage.getItem('absences')) || [
    {
        id: 'absence2',
        employeeId: '3',
        type: 'sick',
        startDate: '2025-06-15',
        endDate: '2025-06-20',
        reason: 'Flu',
        approved: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 'absence3',
        employeeId: '4',
        type: 'maternity',
        startDate: '2025-07-01',
        endDate: '2025-09-30',
        reason: '',
        approved: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'absence4',
        employeeId: '5',
        type: 'personal',
        startDate: '2025-07-15',
        endDate: '2025-07-16',
        reason: 'Medical appointment',
        approved: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'absence5',
        employeeId: '6',
        type: 'vacation',
        startDate: '2025-08-01',
        endDate: '2025-08-07',
        reason: 'Family vacation',
        approved: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 'absence6',
        employeeId: '7',
        type: 'sick',
        startDate: '2025-06-25',
        endDate: '2025-06-26',
        reason: 'Migraine',
        approved: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'absence7',
        employeeId: '1',
        type: 'other',
        startDate: '2025-07-20',
        endDate: '2025-07-22',
        reason: 'Training course',
        approved: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'absence1',
        employeeId: '2',
        type: 'vacation',
        startDate: '2025-07-01',
        endDate: '2025-07-10',
        reason: 'Summer vacation',
        approved: true,
        createdAt: new Date().toISOString()
    }
];
let timeclockLogs = JSON.parse(localStorage.getItem('timeclockLogs')) || [];
let weeklyPlanning = JSON.parse(localStorage.getItem('weeklyPlanning')) || {};
let signaturePad;

// Shift copying functionality
let isPlusKeyPressed = false;
let copiedShift = null;
let shiftCopyMode = false;

// Navigation functions - Define early to ensure availability
function showSection(sectionId) {
    console.log('showSection called with:', sectionId);
    
    try {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('Section switched to:', sectionId);
        } else {
            console.error('Section not found:', sectionId);
        }
        
        // Add active class to clicked nav button
        const targetButton = document.querySelector(`[data-section="${sectionId}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }
        
        // Special handling for different sections
        if (sectionId === 'planning') {
            if (typeof initializeWeekPlanning === 'function') {
                initializeWeekPlanning();
            }
        } else if (sectionId === 'table-planning') {
            if (typeof loadTablePlanning === 'function') {
                loadTablePlanning();
            }
        } else if (sectionId === 'employees') {
            // Ensure employees are displayed when switching to employees section
            if (typeof loadEmployees === 'function') {
                loadEmployees();
            }
        } else if (sectionId === 'dashboard') {
            // Ensure dashboard data is loaded when switching to dashboard
            if (typeof updateDashboardStats === 'function') {
                updateDashboardStats();
            }
            if (typeof updateRecentActivity === 'function') {
                updateRecentActivity();
            }
            if (typeof updateUpcomingEvents === 'function') {
                updateUpcomingEvents();
            }
        } else if (sectionId === 'settings') {
            // Load saved settings and show the first tab
            loadSettings();
            
            // Ensure general tab is active by default
            document.querySelectorAll('[data-settings-tab]').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.settings-tab-content').forEach(c => c.classList.remove('active'));
            
            const generalTab = document.querySelector('[data-settings-tab="general"]');
            const generalContent = document.querySelector('.settings-tab-content[data-settings-tab="general"]');
            
            if (generalTab) generalTab.classList.add('active');
            if (generalContent) generalContent.classList.add('active');
            
            // Load notification settings
            const notifications = JSON.parse(localStorage.getItem('notifications') || '{}');
            if (document.getElementById('emailNotifications')) {
                document.getElementById('emailNotifications').checked = notifications.email || false;
            }
            if (document.getElementById('browserNotifications')) {
                document.getElementById('browserNotifications').checked = notifications.browser || false;
            }
            
            // Load restaurant name
            const restaurantName = localStorage.getItem('restaurantName');
            if (restaurantName && document.getElementById('restaurantName')) {
                document.getElementById('restaurantName').value = restaurantName;
            }
        }
    } catch (error) {
        console.error('Error in showSection:', error);
    }
}

// Make sure showSection is globally available
window.showSection = showSection;

function initializeJobIconMapping() {
    const container = document.getElementById('jobIconMappingContainer');
    if (!container) {
        console.warn('jobIconMappingContainer not found');
        return;
    }

    // Check if fontAwesome jobs data is available
    if (!fontAwesomeJobs || Object.keys(fontAwesomeJobs).length === 0) {
        console.warn('FontAwesome jobs data not available');
        container.innerHTML = '<p style="text-align: center; color: var(--light-text);">Loading icons...</p>';
        return;
    }

    container.innerHTML = '';
    
    // Add a header explaining how to use the icon mapping
    const instructionDiv = document.createElement('div');
    instructionDiv.style.cssText = `
        padding: 12px;
        background: var(--light-bg);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        margin-bottom: 16px;
        font-size: 13px;
        color: var(--light-text);
        text-align: center;
    `;
    instructionDiv.innerHTML = `
        <i class="fas fa-info-circle" style="color: var(--info-color); margin-right: 8px;"></i>
        Click an icon to map it to a specific job title
    `;
    container.appendChild(instructionDiv);
    
    // Create a container for all icons organized by category
    Object.keys(fontAwesomeJobs).forEach(categoryKey => {
        if (!fontAwesomeJobs[categoryKey] || !Array.isArray(fontAwesomeJobs[categoryKey])) {
            return; // Skip invalid categories
        }
        
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'icon-category';
        
        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = categoryKey.replace(/_/g, ' ').toUpperCase();
        categoryTitle.style.cssText = `
            margin: 12px 0 8px 0;
            font-size: 12px;
            color: var(--primary-color);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 4px;
        `;
        categoryDiv.appendChild(categoryTitle);
        
        const iconsContainer = document.createElement('div');
        iconsContainer.className = 'icons-container';
        iconsContainer.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 16px;
        `;
        
        fontAwesomeJobs[categoryKey].forEach(job => {
            if (!job || !job.icon || !job.name) {
                return; // Skip invalid job entries
            }
            
            const button = document.createElement('button');
            button.className = 'icon-button';
            button.type = 'button';
            button.innerHTML = `<i class="fas ${job.icon}"></i>`;
            button.title = job.name;
            button.dataset.icon = job.icon;
            button.style.cssText = `
                width: 36px;
                height: 36px;
                border: 1px solid var(--border-color);
                background: white;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 14px;
                color: var(--primary-color);
            `;
            
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = 'var(--primary-color)';
                button.style.color = 'white';
                button.style.transform = 'scale(1.1)';
            });
            
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = 'white';
                button.style.color = 'var(--primary-color)';
                button.style.transform = 'scale(1)';
            });
            
            button.onclick = (e) => {
                e.preventDefault();
                showJobIconMappingModal(job.icon, job.name);
            };
            
            iconsContainer.appendChild(button);
        });
        
        if (iconsContainer.children.length > 0) {
            categoryDiv.appendChild(iconsContainer);
            container.appendChild(categoryDiv);
        }
    });
    
    console.log('Job icon mapping initialized with', Object.keys(fontAwesomeJobs).length, 'categories');
}

function showJobIconMappingModal(iconClass, iconName) {
    // Get all unique job titles from current employees
    const jobTitles = [...new Set(employees.map(emp => emp.jobTitle))].filter(title => title && title.trim());
    
    if (jobTitles.length === 0) {
        showNotification('No employees found to map icons to. Add some employees first.', 'warning');
        return;
    }
    
    // Create a more user-friendly modal instead of a simple prompt
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 24px;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        max-height: 500px;
        overflow-y: auto;
    `;
    
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <i class="fas ${iconClass}" style="font-size: 32px; color: var(--primary-color); margin-bottom: 12px;"></i>
            <h3 style="margin: 0 0 8px 0; color: var(--primary-color);">Map ${iconName} Icon</h3>
            <p style="margin: 0; color: var(--light-text); font-size: 14px;">Select a job title to assign this icon to:</p>
        </div>
        <div id="jobTitleList" style="max-height: 300px; overflow-y: auto;"></div>
        <div style="text-align: center; margin-top: 20px;">
            <button id="cancelMapping" style="margin-right: 12px; padding: 8px 16px; border: 1px solid var(--border-color); background: white; border-radius: 6px; cursor: pointer;">Cancel</button>
        </div>
    `;
    
    const jobTitleList = modalContent.querySelector('#jobTitleList');
    jobTitles.forEach((title, index) => {
        const button = document.createElement('button');
        button.style.cssText = `
            width: 100%;
            padding: 12px;
            margin-bottom: 8px;
            border: 1px solid var(--border-color);
            background: white;
            border-radius: 6px;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s ease;
        `;
        button.textContent = title;
        
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'var(--light-bg)';
            button.style.borderColor = 'var(--primary-color)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'white';
            button.style.borderColor = 'var(--border-color)';
        });
        
        button.onclick = () => {
            // Save the mapping
            const customIconMappings = JSON.parse(localStorage.getItem('jobFunctionIcons') || '{}');
            customIconMappings[title] = iconClass;
            localStorage.setItem('jobFunctionIcons', JSON.stringify(customIconMappings));
            
            showNotification(`${iconName} icon mapped to ${title}`, 'success');
            loadEmployees(); // Refresh to apply new icons
            document.body.removeChild(modal);
        };
        
        jobTitleList.appendChild(button);
    });
    
    modalContent.querySelector('#cancelMapping').onclick = () => {
        document.body.removeChild(modal);
    };
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    };
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the entire application
    initializeApp();

    // Add keyboard shortcut for language switching
    document.addEventListener('keydown', function(e) {
        // Alt + L for language toggle
        if (e.altKey && e.key.toLowerCase() === 'l') {
            e.preventDefault();
            toggleLanguage();
        }
    });
    
    // Add window resize listener to update calendar grid
    window.addEventListener('resize', function() {
        // Debounce the resize event
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(function() {
            // Re-generate calendar grid with new height calculations
            if (document.getElementById('calendarBody') && document.querySelector('.content-section.active[id="planning"]')) {
                generateCalendarGrid();
                loadWeekPlanning(); // Reload shifts with new dimensions
            }
        }, 250);
    });
    
    // Add keyboard event listeners for shift copying
    document.addEventListener('keydown', function(e) {
        if (e.key === '+' || e.key === '=' && e.shiftKey) {
            isPlusKeyPressed = true;
            document.body.style.cursor = 'copy';
            
            // Show visual feedback for copy mode
            document.querySelectorAll('.shift-bar').forEach(bar => {
                bar.style.boxShadow = '0 0 0 2px #007bff';
            });
        }
    });
    
    document.addEventListener('keyup', function(e) {
        if (e.key === '+' || (e.key === '=' && !e.shiftKey)) {
            isPlusKeyPressed = false;
            shiftCopyMode = false;
            document.body.style.cursor = 'default';
            
            // Remove visual feedback
            document.querySelectorAll('.shift-bar').forEach(bar => {
                bar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            });
            
            // If we have a copied shift but user released key, show notification
            if (copiedShift) {
                showNotification('Copy mode deactivated. Click on a day to paste the shift.', 'info');
            }
        }
    });
});

// Add keyboard shortcut info to language toggle button
function initializeLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'nl' ? 'FR' : 'NL';
        langToggle.setAttribute('title', `${currentLanguage === 'nl' ? 'Changer en français' : 'Wijzigen naar Nederlands'} (Alt + L)`);
        langToggle.setAttribute('aria-label', `${currentLanguage === 'nl' ? 'Changer la langue en français' : 'Taal wijzigen naar Nederlands'} (Alt + L)`);
    }
}

async function initializeApp() {
    try {
        // Load PC302 data first (but don't block navigation if it fails)
        await loadPC302Data();
        
        // Initialize language toggle button
        initializeLanguageToggle();
        
        // Load all settings using the global defaultSettings
        const settings = {
            notifications: JSON.parse(localStorage.getItem('notifications') || JSON.stringify(defaultSettings.notifications)),
            colorTheme: JSON.parse(localStorage.getItem('colorTheme') || JSON.stringify(defaultSettings.colorTheme)),
            restaurantName: localStorage.getItem('restaurantName') || defaultSettings.restaurantName,
            defaultShiftDuration: parseInt(localStorage.getItem('defaultShiftDuration')) || defaultSettings.defaultShiftDuration,
            useProfileIcon: JSON.parse(localStorage.getItem('useProfileIcon') ?? String(defaultSettings.useProfileIcon)),
            language: localStorage.getItem('language') || defaultSettings.language,
            customLogo: localStorage.getItem('customLogo')
        };

        // Update global variables with loaded settings
        currentLanguage = settings.language;
        defaultShiftDuration = settings.defaultShiftDuration;
        useProfileIcon = settings.useProfileIcon;

        // Apply color theme
        document.documentElement.style.setProperty('--primary-color', settings.colorTheme.primary);
        document.documentElement.style.setProperty('--secondary-color', settings.colorTheme.secondary);
        document.documentElement.style.setProperty('--accent-color', settings.colorTheme.accent);
        
        // Initialize color pickers
        ['primaryColor', 'secondaryColor', 'accentColor'].forEach(colorId => {
            const colorPicker = document.getElementById(colorId);
            if (colorPicker) {
                const color = colorId.replace('Color', '');
                colorPicker.value = settings.colorTheme[color];
            }
        });
        
        // Load and apply logo if exists
        if (settings.customLogo) {
            const logoImg = document.getElementById('logoImg');
            if (logoImg) {
                logoImg.src = settings.customLogo;
            }
        }
        
        // Initialize all settings tabs
        document.querySelectorAll('[data-settings-tab]').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('[data-settings-tab]').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.settings-tab-content').forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                const contentId = tab.dataset.settingsTab;
                document.querySelector(`.settings-tab-content[data-settings-tab="${contentId}"]`).classList.add('active');
            });
        });
        
        // Initialize shift settings
        defaultShiftDuration = parseInt(localStorage.getItem('defaultShiftDuration')) || 4;
        useProfileIcon = JSON.parse(localStorage.getItem('useProfileIcon') ?? 'true');
        
        // Set up color pickers and their event listeners
        ['primaryColor', 'secondaryColor', 'accentColor'].forEach(colorId => {
            const colorPicker = document.getElementById(colorId);
            if (colorPicker) {
                colorPicker.addEventListener('input', (e) => {
                    document.documentElement.style.setProperty(`--${colorId.replace('Color', '')}-color`, e.target.value);
                });
                colorPicker.addEventListener('change', () => {
                    const colors = {
                        primary: document.getElementById('primaryColor').value,
                        secondary: document.getElementById('secondaryColor').value,
                        accent: document.getElementById('accentColor').value
                    };
                    localStorage.setItem('colorTheme', JSON.stringify(colors));
                });
            }
        });
        
        // Set up profile picture toggle
        const profilePictureToggle = document.getElementById('profilePictureToggle');
        if (profilePictureToggle) {
            profilePictureToggle.checked = useProfileIcon;
            profilePictureToggle.addEventListener('change', () => {
                useProfileIcon = profilePictureToggle.checked;
                updateProfilePictureToggleLabel();
                localStorage.setItem('useProfileIcon', JSON.stringify(useProfileIcon));
                
                // Show/hide job icon mapping based on toggle
                const jobIconGroup = document.getElementById('jobIconMappingGroup');
                if (jobIconGroup) {
                    jobIconGroup.style.display = useProfileIcon ? 'block' : 'none';
                }
                
                // Initialize job icon mapping if showing icons
                if (useProfileIcon) {
                    initializeJobIconMapping();
                }
                
                loadEmployees(); // Refresh employee cards
            });
            
            // Initial setup
            const jobIconGroup = document.getElementById('jobIconMappingGroup');
            if (jobIconGroup) {
                jobIconGroup.style.display = useProfileIcon ? 'block' : 'none';
            }
            
            if (useProfileIcon) {
                initializeJobIconMapping();
            }
        }
        
        // Initialize all other components
        populateJobCategories();
        generateQRCode();
        loadEmployees();
        loadContracts();
        loadAbsences();
        loadTimeclockLogs();
        initializeWeekPlanning();
        updateLanguage();
        
        // Set up signature pad
        const canvas = document.getElementById('signaturePad');
        if (canvas) {
            signaturePad = new SignaturePad(canvas);
        }
        
        // Ensure the dashboard section is properly initialized and visible as homepage
        showSection('dashboard');
        
        // Initialize dashboard data immediately
        setTimeout(() => {
            try {
                console.log('Initializing dashboard data...');
                updateDashboardStats();
                updateRecentActivity();
                updateUpcomingEvents();
                loadWeather();
                console.log('Dashboard initialization complete');
            } catch (error) {
                console.error('Dashboard initialization error:', error);
            }
        }, 200);
    } catch (error) {
        console.error('Initialization error:', error);
        // Still try to show basic navigation even if initialization fails
        showSection('employees');
    }
}

async function loadPC302Data() {
    try {
        const response = await fetch('pc302.json');
        // pc302Data is already defined in data.js, no need to reassign
        console.log('PC302 data from external file loaded successfully');
    } catch (error) {
        console.error('Failed to load PC302 data:', error);
        // pc302Data is already defined in data.js with complete data
        console.log('Using pc302Data from data.js file');
    }
}

async function loadFontAwesomeJobs() {
    try {
        const response = await fetch('fontawesomejobs.json');
        const additionalJobs = await response.json();
        // Merge with existing fallback data
        fontAwesomeJobs = { ...fontAwesomeJobs, ...additionalJobs };
        console.log('FontAwesome jobs data loaded successfully');
        
        // Re-initialize icon mapping if profile icons are enabled
        if (useProfileIcon) {
            setTimeout(() => {
                initializeJobIconMapping();
            }, 100);
        }
    } catch (error) {
        console.error('Failed to load FontAwesome jobs data:', error);
        console.log('Using fallback FontAwesome jobs data');
    }
}


// Employee management functions
function openEmployeeModal(employeeId = null) {
    const modal = document.getElementById('employeeModal');
    const form = document.getElementById('employeeForm');
    const modalTitle = modal.querySelector('.modal-header h3');
    
    if (employeeId) {
        // Edit mode
        const employee = employees.find(emp => emp.id === employeeId);
        if (employee) {
            fillEmployeeForm(employee);
            form.dataset.editingId = employeeId;
            modalTitle.textContent = `${employee.firstName} ${employee.lastName} - ${translations[currentLanguage].edit}`;
        }
    } else {
        // Add mode
        form.reset();
        delete form.dataset.editingId;
        modalTitle.textContent = translations[currentLanguage].addEmployeeTitle;
        populateJobCategories();
    }
    
    modal.style.display = 'block';
}

function closeEmployeeModal() {
    document.getElementById('employeeModal').style.display = 'none';
}

function fillEmployeeForm(employee) {
    Object.keys(employee).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.value = employee[key];
        }
    });
    
    // Update job titles based on category
    updateJobTitles();
}

function populateJobCategories() {
    const categorySelect = document.getElementById('jobCategory');
    if (!categorySelect) return;
    
    categorySelect.innerHTML = '';
    
    // Check if PC302 data is loaded
    if (!pc302Data || !pc302Data.categories) {
        console.log('PC302 data not loaded yet, using fallback categories');
        // Add basic fallback categories
        const fallbackCategories = [
            { name: { nl: 'Categorie I', fr: 'Catégorie I' } },
            { name: { nl: 'Categorie II', fr: 'Catégorie II' } },
            { name: { nl: 'Categorie III', fr: 'Catégorie III' } }
        ];
        
        fallbackCategories.forEach((category, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = category.name[currentLanguage] || category.name.nl;
            categorySelect.appendChild(option);
        });
        return;
    }
    
    pc302Data.categories.forEach((category, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = category.name[currentLanguage];
        categorySelect.appendChild(option);
    });
    
    categorySelect.addEventListener('change', updateJobTitles);
}

function updateJobTitles() {
    const categorySelect = document.getElementById('jobCategory');
    const titleSelect = document.getElementById('jobTitle');
    const selectedCategoryIndex = categorySelect.value;
    
    titleSelect.innerHTML = '';
    
    if (selectedCategoryIndex !== '') {
        const category = pc302Data.categories[selectedCategoryIndex];
        category.job_titles.forEach(jobTitle => {
            const option = document.createElement('option');
            option.value = jobTitle[currentLanguage];
            option.textContent = jobTitle[currentLanguage];
            titleSelect.appendChild(option);
        });
    }
}

// Form submission handler
document.getElementById('employeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const existingEmployeeId = document.getElementById('employeeForm').dataset.editingId;
    
    const employee = {
        id: existingEmployeeId || Date.now().toString(),
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        niss: document.getElementById('niss').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        nationality: document.getElementById('nationality').value,
        placeOfBirth: document.getElementById('placeOfBirth').value,
        civilStatus: document.getElementById('civilStatus').value,
        iban: document.getElementById('iban').value,
        contractType: document.getElementById('contractType').value,
        jobCategory: document.getElementById('jobCategory').value,
        jobTitle: document.getElementById('jobTitle').value,
        active: existingEmployeeId ? (employees.find(emp => emp.id === existingEmployeeId)?.active ?? true) : true
    };
    
    if (existingEmployeeId) {
        // Update existing employee
        const index = employees.findIndex(emp => emp.id === existingEmployeeId);
        if (index !== -1) {
            employees[index] = employee;
        }
        delete document.getElementById('employeeForm').dataset.editingId;
    } else {
        // Add new employee
        employees.push(employee);
    }
    
    localStorage.setItem('employees', JSON.stringify(employees));
    loadEmployees();
    closeEmployeeModal();
});

function loadEmployees() {
    const grid = document.getElementById('employeesGrid');
    grid.innerHTML = '';
    
    // Sort employees: active first, then inactive
    const sortedEmployees = employees.sort((a, b) => {
        if (a.active && !b.active) return -1;
        if (!a.active && b.active) return 1;
        return 0;
    });
    
    sortedEmployees.forEach(employee => {
        const card = createEmployeeCard(employee);
        grid.appendChild(card);
    });
    
    // Update employee dropdowns in other forms
    updateEmployeeDropdowns();
}

function createEmployeeCard(employee) {
    const card = document.createElement('div');
    card.className = `employee-card ${employee.active ? 'active' : 'inactive'} ${employee.contractType}`;
    card.draggable = true;
    card.dataset.employeeId = employee.id;
    
    // Add drag event listeners
    card.addEventListener('dragstart', handleDragStart);
    
    const contractTypeClass = `contract-${employee.contractType}`;
    const localizedJobTitle = getLocalizedJobTitle(employee.jobTitle);
    
    // Get contract type colors
    const contractTypeColors = {
        'full-time': '#4CAF50',
        'part-time': '#2196F3', 
        'flexi-job': '#FFEB3B',
        'student': '#FF5722',
        'extra': '#9E9E9E'
    };
    
    const avatarColor = contractTypeColors[employee.contractType] || '#6b9d6b';
    
    // Get job function icon
    const jobIcon = getJobFunctionIcon(employee.jobTitle);
    
    card.innerHTML = `
        <div class="employee-card-content">
            <div class="employee-main-info">
                <div class="employee-avatar">
                    ${useProfileIcon ? 
                        `<span style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            background-color: ${avatarColor};
                            color: white;
                            font-size: 24px;
                        "><i class="fas ${jobIcon}"></i></span>` : 
                        `<span style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            background-color: ${avatarColor};
                            color: white;
                            font-size: 1.2rem;
                            font-weight: 600;
                            text-transform: uppercase;
                        ">${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}</span>`
                    }
                </div>
                <div class="employee-details">
                    <h4 class="employee-name">${employee.firstName} ${employee.lastName}</h4>
                    <p class="employee-job">${localizedJobTitle}</p>
                    <span class="contract-type ${contractTypeClass}">
                        <i class="fas fa-id-badge"></i> ${getContractTypeLabel(employee.contractType)}
                    </span>
                </div>
            </div>
            <div class="employee-controls">
                <div class="card-actions">
                    <button class="btn-icon-secondary" onclick="editEmployee('${employee.id}')" title="${translations[currentLanguage].edit || 'Bewerken'}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon-secondary" onclick="copyEmployee('${employee.id}')" title="${translations[currentLanguage].copy || 'Kopiëren'}">
                        <i class="fas fa-copy"></i>
                    </button>
                    <button class="btn-icon-${employee.active ? 'warning' : 'success'}" onclick="toggleEmployeeStatus('${employee.id}')" title="${employee.active ? (translations[currentLanguage].deactivate || 'Deactiveren') : (translations[currentLanguage].activate || 'Activeren')}">
                        <i class="fas fa-${employee.active ? 'pause' : 'play'}"></i>
                    </button>
                    <button class="btn-icon-danger" onclick="deleteEmployee('${employee.id}')" title="${translations[currentLanguage].delete || 'Verwijderen'}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function getLocalizedJobTitle(jobTitle) {
    // Return original job title if PC302 data is not loaded yet
    if (!pc302Data || !pc302Data.categories) {
        return jobTitle;
    }
    
    // Search through all categories to find the matching job title
    for (const category of pc302Data.categories) {
        for (const jobTitleData of category.job_titles) {
            // Check if the job title matches in any language
            if (jobTitleData.en === jobTitle || 
                jobTitleData.nl === jobTitle || 
                jobTitleData.fr === jobTitle) {
                return jobTitleData[currentLanguage] || jobTitle;
            }
        }
    }
    return jobTitle; // Return original if not found
}

function getContractTypeLabel(type) {
    const labels = {
        'full-time': translations[currentLanguage].fullTime,
        'part-time': translations[currentLanguage].partTime,
        'flexi-job': translations[currentLanguage].flexiJob,
        'student': translations[currentLanguage].student,
        'extra': translations[currentLanguage].extra
    };
    return labels[type] || type;
}

function getCivilStatusLabel(status) {
    const labels = {
        'single': translations[currentLanguage].single,
        'married': translations[currentLanguage].married,
        'divorced': translations[currentLanguage].divorced,
        'widowed': translations[currentLanguage].widowed
    };
    return labels[status] || status;
}

function getJobFunctionIcon(jobTitle) {
    // Get custom icon mapping from localStorage if available
    const customIconMappings = JSON.parse(localStorage.getItem('jobFunctionIcons') || '{}');
    
    // Check if there's a custom mapping for this job title
    if (customIconMappings[jobTitle]) {
        return customIconMappings[jobTitle];
    }
    
    // Default mapping based on job title keywords
    const titleLower = jobTitle.toLowerCase();
    
    // Check for specific job titles in our FontAwesome jobs data
    if (fontAwesomeJobs && Object.keys(fontAwesomeJobs).length > 0) {
        for (const category in fontAwesomeJobs) {
            if (fontAwesomeJobs[category] && Array.isArray(fontAwesomeJobs[category])) {
                for (const job of fontAwesomeJobs[category]) {
                    if (job && job.name && job.icon) {
                        const jobNameLower = job.name.toLowerCase();
                        if (jobNameLower.includes(titleLower) || titleLower.includes(jobNameLower)) {
                            return job.icon;
                        }
                    }
                }
            }
        }
    }
    
    // Fallback to general keyword matching
    if (titleLower.includes('chef') || titleLower.includes('cook')) return 'fa-utensils';
    if (titleLower.includes('waiter') || titleLower.includes('server')) return 'fa-wine-glass';
    if (titleLower.includes('manager')) return 'fa-user-tie';
    if (titleLower.includes('cleaner') || titleLower.includes('cleaning')) return 'fa-broom';
    if (titleLower.includes('reception') || titleLower.includes('front desk')) return 'fa-concierge-bell';
    if (titleLower.includes('kitchen')) return 'fa-utensils';
    if (titleLower.includes('bar')) return 'fa-wine-bottle';
    
    // Default icon
    return 'fa-user';
}

function editEmployee(employeeId) {
    openEmployeeModal(employeeId);
}

function copyEmployee(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
        // Create a copy with new ID and modified name
        const employeeCopy = {
            ...employee,
            id: Date.now().toString(),
            firstName: employee.firstName + ' (Copy)',
            email: employee.email.replace('@', '+copy@'),
            niss: employee.niss + '1' // Modify NISS to make it unique
        };
        
        employees.push(employeeCopy);
        localStorage.setItem('employees', JSON.stringify(employees));
        loadEmployees();
        
        // Show success message
        showNotification('Employee copied successfully!', 'success');
    }
}

function toggleEmployeeStatus(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
        employee.active = !employee.active;
        
        // If employee is being deactivated, remove all their shifts from planning
        if (!employee.active) {
            removeEmployeeFromPlanning(employeeId);
        }
        
        localStorage.setItem('employees', JSON.stringify(employees));
        loadEmployees();
        loadEmployeePool(); // Refresh employee pool to show/hide based on active status
        
        // Show success message
        const status = employee.active ? 'activated' : 'deactivated';
        showNotification(`Employee ${status} successfully!`, 'success');
    }
}

function removeEmployeeFromPlanning(employeeId) {
    // Remove all shift bars for this employee from the current view
    document.querySelectorAll(`.shift-bar[data-employee-id="${employeeId}"]`).forEach(shiftBar => {
        shiftBar.remove();
    });
    
    // Remove from all saved weekly planning data
    Object.keys(weeklyPlanning).forEach(weekKey => {
        weeklyPlanning[weekKey] = weeklyPlanning[weekKey].filter(shift => 
            shift.employeeId !== employeeId
        );
    });
    
    // Save updated planning
    localStorage.setItem('weeklyPlanning', JSON.stringify(weeklyPlanning));
    
    // Update overlapping shifts layout after removal
    updateOverlappingShiftsLayout();
}

function deleteEmployee(employeeId) {
    if (confirm(translations[currentLanguage].confirmDelete)) {
        employees = employees.filter(emp => emp.id !== employeeId);
        localStorage.setItem('employees', JSON.stringify(employees));
        loadEmployees();
        
        // Show success message
        showNotification('Employee deleted successfully!', 'success');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#333';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Employee filtering functions
function filterEmployees() {
    const searchTerm = document.getElementById('employeeSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.employee-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterByContract(contractType) {
    const cards = document.querySelectorAll('.employee-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${contractType}"]`).classList.add('active');
    
    cards.forEach(card => {
        const employeeId = card.dataset.employeeId;
        const employee = employees.find(emp => emp.id === employeeId);
        
        if (contractType === 'all' || employee.contractType === contractType) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Week planning functions
function initializeWeekPlanning() {
    generateCalendarGrid();
    loadEmployeePool();
    updateWeekDisplay();
}

function generateCalendarGrid() {
    const calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';
    
    // Generate 48 time slots (30-minute intervals) x 7 days grid
    for (let timeSlot = 0; timeSlot < 48; timeSlot++) {
        const hour = Math.floor(timeSlot / 2);
        const minute = (timeSlot % 2) * 30;
        
        // Time column - only show hourly markers (when minute = 0)
        const timeCell = document.createElement('div');
        timeCell.className = 'time-cell';
        if (minute === 0) {
            timeCell.textContent = `${hour.toString().padStart(2, '0')}:00`;
        } else {
            timeCell.textContent = ''; // Empty for 30-minute intervals
            timeCell.style.borderTop = 'none';
        }
        calendarBody.appendChild(timeCell);
        
        // Day columns
        for (let day = 0; day < 7; day++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell';
            cell.dataset.day = day;
            cell.dataset.timeSlot = timeSlot;
            cell.dataset.hour = hour;
            cell.dataset.minute = minute;
            
            // Visual distinction for 30-minute intervals
            if (minute === 30) {
                cell.style.borderTop = '1px dashed #e0e0e0';
            }
            
            // Add drop event listeners
            cell.addEventListener('dragover', handleDragOver);
            cell.addEventListener('drop', handleDrop);
            
            // Add click handler for shift pasting
            cell.addEventListener('click', handleCellClick);
            
            calendarBody.appendChild(cell);
        }
    }
    
    // Calculate and store row height after the grid is rendered
    setTimeout(() => {
        const firstCell = document.querySelector('.calendar-cell');
        if (firstCell) {
            window.currentRowHeight = firstCell.offsetHeight;
        }
    }, 100);
}

function loadEmployeePool() {
    const pool = document.getElementById('employeePool');
    pool.innerHTML = '';
    
    // Only show active employees in the planning pool
    employees.filter(employee => employee.active).forEach(employee => {
        const card = createEmployeePoolCard(employee);
        pool.appendChild(card);
    });
}

function createEmployeePoolCard(employee) {
    const card = document.createElement('div');
    card.className = 'employee-pool-card';
    card.draggable = true;
    card.dataset.employeeId = employee.id;
    
    const contractTypeClass = `contract-${employee.contractType}`;
    const localizedJobTitle = getLocalizedJobTitle(employee.jobTitle);
    
    card.style.cssText = `
        padding: 10px;
        background-color: #efffe9;
        border: 2px solid;
        border-radius: 6px;
        cursor: move;
        margin-bottom: 5px;
    `;
    
    // Set border color based on contract type
    const borderColors = {
        'full-time': '#4CAF50',
        'part-time': '#2196F3',
        'flexi-job': '#FFEB3B',
        'student': '#FF5722',
        'extra': '#9E9E9E'
    };
    card.style.borderColor = borderColors[employee.contractType] || '#ddd';
    
    card.innerHTML = `
        <strong>${employee.firstName} ${employee.lastName}</strong><br>
        <small>${localizedJobTitle}</small>
    `;
    
    card.addEventListener('dragstart', handleDragStart);
    
    return card;
}

// Drag and drop functionality
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.employeeId);
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const cell = e.target.closest('.calendar-cell');
    
    if (cell) {
        if (data === 'shift') {
            // Handle existing shift being moved
            handleShiftDrop(e);
        } else {
            // Handle new employee being added
            const employeeId = data;
            if (employeeId) {
                const day = parseInt(cell.dataset.day);
                const hour = parseInt(cell.dataset.hour);
                
                // Check if this employee already has a shift at this exact time and day
                const existingShiftForEmployee = document.querySelector(
                    `.shift-bar[data-employee-id="${employeeId}"][data-day="${day}"]`
                );
                
                // If employee already has a shift on this day, remove it first
                if (existingShiftForEmployee) {
                    existingShiftForEmployee.remove();
                }
                
                // Create new shift bar
                createShiftBar(employeeId, day, hour, cell);
            }
        }
    }
}

function createShiftBar(employeeId, day, hour, cell) {
    const employee = employees.find(emp => emp.id === employeeId);
    if (!employee) return;
    
    // Check if this employee already has a shift at this time - only remove that specific one
    const existingShift = cell.querySelector(`.shift-bar[data-employee-id="${employeeId}"]`);
    if (existingShift) {
        existingShift.remove();
    }
    
    const shiftBar = document.createElement('div');
    shiftBar.className = 'shift-bar';
    shiftBar.dataset.employeeId = employeeId;
    shiftBar.dataset.day = day;
    shiftBar.dataset.startHour = hour;
    shiftBar.dataset.endHour = hour + defaultShiftDuration; /* Use defaultShiftDuration */
    
    const borderColors = {
        'full-time': '#4CAF50',
        'part-time': '#2196F3',
        'flexi-job': '#FFEB3B',
        'student': '#FF5722',
        'extra': '#9E9E9E'
    };
    
    // Create the main shift bar container
    shiftBar.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        background-color: ${borderColors[employee.contractType]}40;
        border: 2px solid ${borderColors[employee.contractType]};
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        cursor: move;
        z-index: 10;
        user-select: none;
    `;
    
    // Create resize handles
    const topHandle = document.createElement('div');
    topHandle.className = 'resize-handle resize-handle-top';
    topHandle.style.cssText = `
        position: absolute;
        top: -3px;
        left: 0;
        right: 0;
        height: 6px;
        background-color: ${borderColors[employee.contractType]};
        cursor: n-resize;
        border-radius: 3px 3px 0 0;
        opacity: 0;
        transition: opacity 0.2s ease;
    `;
    
    const bottomHandle = document.createElement('div');
    bottomHandle.className = 'resize-handle resize-handle-bottom';
    bottomHandle.style.cssText = `
        position: absolute;
        bottom: -3px;
        left: 0;
        right: 0;
        height: 6px;
        background-color: ${borderColors[employee.contractType]};
        cursor: s-resize;
        border-radius: 0 0 3px 3px;
        opacity: 0;
        transition: opacity 0.2s ease;
    `;
    
    // Create time display
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'shift-time-display';
    timeDisplay.style.cssText = `
        position: absolute;
        top: 2px;
        left: 4px;
        font-size: 10px;
        font-weight: bold;
        color: ${borderColors[employee.contractType]};
        background-color: rgba(255, 255, 255, 0.9);
        padding: 1px 3px;
        border-radius: 2px;
    `;
    
    // Create content container
    const content = document.createElement('div');
    content.className = 'shift-content';
    content.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    `;
    
    const employeeName = document.createElement('span');
    employeeName.textContent = `${employee.firstName} ${employee.lastName}`;
    employeeName.style.cssText = `
        font-weight: 600;
        text-align: center;
        line-height: 1.2;
        word-wrap: break-word;
    `;
    
    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '×';
    removeButton.onclick = () => removeShift(removeButton);
    removeButton.style.cssText = `
        position: absolute;
        top: -8px;
        right: -8px;
        background: #dc3545;
        color: white;
        border: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 15;
        opacity: 0;
        transition: opacity 0.2s ease;
    `;
    
    // Assemble the shift bar
    content.appendChild(employeeName);
    shiftBar.appendChild(topHandle);
    shiftBar.appendChild(bottomHandle);
    shiftBar.appendChild(timeDisplay);
    shiftBar.appendChild(content);
    shiftBar.appendChild(removeButton);
    
    // Update time display
    function updateTimeDisplay() {
        const start = parseInt(shiftBar.dataset.startHour);
        const end = parseInt(shiftBar.dataset.endHour);
        timeDisplay.textContent = `${start.toString().padStart(2, '0')}:00 - ${end.toString().padStart(2, '0')}:00`;
    }
    
    updateTimeDisplay();
    
    // Show/hide handles and remove button on hover
    shiftBar.addEventListener('mouseenter', () => {
        topHandle.style.opacity = '0.8';
        bottomHandle.style.opacity = '0.8';
        removeButton.style.opacity = '1';
    });
    
    shiftBar.addEventListener('mouseleave', () => {
        if (!shiftBar.classList.contains('resizing')) {
            topHandle.style.opacity = '0';
            bottomHandle.style.opacity = '0';
            removeButton.style.opacity = '0';
        }
    });
    
    // Handle dragging for moving the entire shift
    shiftBar.draggable = true;
    shiftBar.addEventListener('dragstart', handleShiftDragStart);
    
    // Add click handler for shift copying
    shiftBar.addEventListener('click', handleShiftClick);
    
    // Prevent dragging when interacting with resize handles
    topHandle.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        shiftBar.draggable = false;
        startResize(e, 'top', shiftBar, updateTimeDisplay);
    });
    
    bottomHandle.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        shiftBar.draggable = false;
        startResize(e, 'bottom', shiftBar, updateTimeDisplay);
    });
    
    // Re-enable dragging after resize
    document.addEventListener('mouseup', () => {
        shiftBar.draggable = true;
        shiftBar.classList.remove('resizing');
    });
    
    cell.appendChild(shiftBar);
    
    // Update shift bar height and position based on duration
    updateShiftBarDisplay(shiftBar);
    
    // Update all overlapping shifts layout
    updateOverlappingShiftsLayout();
    
    // Save to weekly planning
    saveWeeklyPlanning();
    
    return shiftBar;
}


function removeShift(button) {
    const shiftBar = button.parentElement;
    shiftBar.remove();
    
    // Update overlapping shifts layout after removal
    updateOverlappingShiftsLayout();
    
    saveWeeklyPlanning();
}

function saveWeeklyPlanning() {
    const weekKey = getWeekKey(currentWeek);
    const shifts = [];
    
    document.querySelectorAll('.shift-bar').forEach(bar => {
        shifts.push({
            employeeId: bar.dataset.employeeId,
            day: parseInt(bar.dataset.day),
            startHour: parseInt(bar.dataset.startHour),
            endHour: parseInt(bar.dataset.endHour)
        });
    });
    
    weeklyPlanning[weekKey] = shifts;
    localStorage.setItem('weeklyPlanning', JSON.stringify(weeklyPlanning));
}

function getWeekKey(date) {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Monday
    return startOfWeek.toISOString().split('T')[0];
}

function changeWeek(direction) {
    currentWeek.setDate(currentWeek.getDate() + (direction * 7));
    updateWeekDisplay();
    loadWeekPlanning();
}

function updateWeekDisplay() {
    const startOfWeek = new Date(currentWeek);
    startOfWeek.setDate(currentWeek.getDate() - currentWeek.getDay() + 1);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    document.getElementById('currentWeek').textContent = 
        `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
}

function loadWeekPlanning() {
    // Clear existing shifts
    document.querySelectorAll('.shift-bar').forEach(bar => bar.remove());
    
    const weekKey = getWeekKey(currentWeek);
    const shifts = weeklyPlanning[weekKey] || [];
    
    shifts.forEach(shift => {
        // Find cell using only hour (not minute) since we're working with hourly slots for now
        const cell = document.querySelector(
            `.calendar-cell[data-day="${shift.day}"][data-hour="${shift.startHour}"][data-minute="0"]`
        );
        if (cell) {
            // Recreate shift with saved data
            const shiftBar = createShiftBar(shift.employeeId, shift.day, shift.startHour, cell);
            if (shiftBar && shift.endHour) {
                shiftBar.dataset.endHour = shift.endHour;
                updateShiftBarDisplay(shiftBar);
                
                // Update time display
                const timeDisplay = shiftBar.querySelector('.shift-time-display');
                if (timeDisplay) {
                    timeDisplay.textContent = `${shift.startHour.toString().padStart(2, '0')}:00 - ${shift.endHour.toString().padStart(2, '0')}:00`;
                }
            }
        }
    });
    
    // Update overlapping shifts layout after all shifts are loaded
    setTimeout(() => {
        updateOverlappingShiftsLayout();
    }, 100);
}

// Table planning functions
function loadTablePlanning() {
    const tableBody = document.getElementById('planningTableBody');
    tableBody.innerHTML = '';
    
    employees.forEach(employee => {
        const row = document.createElement('tr');
        
        // Employee name column
        const nameCell = document.createElement('td');
        nameCell.textContent = `${employee.firstName} ${employee.lastName}`;
        row.appendChild(nameCell);
        
        // Day columns (7 days)
        for (let day = 0; day < 7; day++) {
            const dayCell = document.createElement('td');
            dayCell.contentEditable = true;
            dayCell.style.cssText = `
                min-height: 40px;
                border: 1px solid #ddd;
                padding: 5px;
            `;
            
            // Attach input event to update week planner
            dayCell.addEventListener('input', (e) => {
                // Clear existing shifts for this employee on this day first
                document.querySelectorAll(`.shift-bar[data-employee-id="${employee.id}"][data-day="${day}"]`).forEach(shift => {
                    shift.remove();
                });
                
                const inputText = e.target.textContent.trim();
                if (!inputText) return;
                
                // Parse time ranges from input (supports formats like "8-12", "8:00-12:00", "8-12, 14-18")
                const timeRanges = inputText.split(/[;,]/).map(time => time.trim()).map(timespan => {
                    // Handle different formats: "8-12", "8:00-12:00", "08:00-12:00"
                    const match = timespan.match(/(\d{1,2})(?::(\d{2}))?\s*-\s*(\d{1,2})(?::(\d{2}))?/);
                    if (match) {
                        const startHour = parseInt(match[1], 10);
                        const endHour = parseInt(match[3], 10);
                        return { startHour, endHour };
                    }
                    return null;
                }).filter(t => t && !isNaN(t.startHour) && !isNaN(t.endHour) && t.startHour < t.endHour && t.startHour >= 0 && t.endHour <= 24);
                
                // Create shift bars for each time range
                timeRanges.forEach(({ startHour, endHour }) => {
                    const startCell = document.querySelector(`.calendar-cell[data-day="${day}"][data-hour="${startHour}"]`);
                    if (startCell) {
                        const shiftBar = createShiftBar(employee.id, day, startHour, startCell);
                        if (shiftBar) {
                            shiftBar.dataset.endHour = endHour;
                            updateShiftBarDisplay(shiftBar);
                            
                            // Update time display
                            const timeDisplay = shiftBar.querySelector('.shift-time-display');
                            if (timeDisplay) {
                                timeDisplay.textContent = `${startHour.toString().padStart(2, '0')}:00 - ${endHour.toString().padStart(2, '0')}:00`;
                            }
                        }
                    }
                });
                
                // Update overlapping layout
                updateOverlappingShiftsLayout();
                
                // Save weekly planning
                saveWeeklyPlanning();
                
                // Show feedback
                if (timeRanges.length > 0) {
                    showNotification(`Updated shifts for ${employee.firstName} ${employee.lastName}`, 'success');
                }
            });
            
            // Find shifts for this employee and day
            const weekKey = getWeekKey(currentWeek);
            const shifts = weeklyPlanning[weekKey] || [];
            const employeeShifts = shifts.filter(shift => 
                shift.employeeId === employee.id && shift.day === day
            );
            
            if (employeeShifts.length > 0) {
                dayCell.textContent = employeeShifts.map(shift => 
                    `${shift.startHour}:00-${shift.endHour}:00`
                ).join(', ');
            }
            
            row.appendChild(dayCell);
        }
        
        tableBody.appendChild(row);
    });
}

function exportTablePlanning() {
    // Simple CSV export
    let csv = 'Employee,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday\n';
    
    const table = document.getElementById('planningTable');
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = Array.from(cells).map(cell => `"${cell.textContent}"`).join(',');
        csv += rowData + '\n';
    });
    
    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `planning-${getWeekKey(currentWeek)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

// QR Code and timeclock functions
function generateQRCode() {
    const qrCodeElement = document.getElementById('qrCode');
    const timeclockUrl = `${window.location.origin}/timeclock?restaurant=${btoa('restaurant-id')}`;
    
    QRCode.toCanvas(qrCodeElement, timeclockUrl, {
        width: 200,
        height: 200
    }, function (error) {
        if (error) console.error(error);
    });
}

function loadTimeclockLogs() {
    const logsList = document.getElementById('timeclockLogsList');
    logsList.innerHTML = '';
    
    timeclockLogs.slice(-20).reverse().forEach(log => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        logItem.style.cssText = `
            padding: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
        `;
        
        const employee = employees.find(emp => emp.id === log.employeeId);
        const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
        
        logItem.innerHTML = `
            <span>${employeeName}</span>
            <span>${log.action === 'in' ? 'Clock In' : 'Clock Out'}</span>
            <span>${new Date(log.timestamp).toLocaleString()}</span>
        `;
        
        logsList.appendChild(logItem);
    });
}

// Contract functions
function openContractModal() {
    const modal = document.getElementById('contractModal');
    populateContractEmployeeDropdown();
    modal.style.display = 'block';
}

function closeContractModal() {
    document.getElementById('contractModal').style.display = 'none';
    document.getElementById('contractPreview').innerHTML = '';
    document.getElementById('signatureSection').style.display = 'none';
}

function populateContractEmployeeDropdown() {
    const select = document.getElementById('contractEmployee');
    select.innerHTML = '<option value="">Select Employee</option>';
    
    employees.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.id;
        option.textContent = `${employee.firstName} ${employee.lastName}`;
        select.appendChild(option);
    });
}

document.getElementById('contractForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generateContractPreview();
});

function generateContractPreview() {
    const employeeId = document.getElementById('contractEmployee').value;
    const employee = employees.find(emp => emp.id === employeeId);
    
    if (!employee) return;
    
    const startDate = document.getElementById('contractStartDate').value;
    const endDate = document.getElementById('contractEndDate').value;
    const salary = document.getElementById('salary').value;
    const terms = document.getElementById('contractTerms').value;
    
    const contractHTML = `
        <div class="contract-document">
            <h3>ARBEIDSOVEREENKOMST</h3>
            <p><strong>Tussen:</strong></p>
            <p>Werkgever: [Restaurant Name]<br>
            Adres: [Restaurant Address]<br>
            BTW: [VAT Number]</p>
            
            <p><strong>En:</strong></p>
            <p>Werknemer: ${employee.firstName} ${employee.lastName}<br>
            Geboortedatum: ${employee.dateOfBirth}<br>
            Adres: ${employee.address}<br>
            NISS: ${employee.niss}</p>
            
            <p><strong>Functie:</strong> ${employee.jobTitle}</p>
            <p><strong>Contract Type:</strong> ${getContractTypeLabel(employee.contractType)}</p>
            <p><strong>Startdatum:</strong> ${startDate}</p>
            ${endDate ? `<p><strong>Einddatum:</strong> ${endDate}</p>` : ''}
            <p><strong>Salaris:</strong> €${salary} (bruto)</p>
            
            <div class="contract-terms">
                <h4>Voorwaarden:</h4>
                <p>${terms || 'Standaard arbeidsvoorwaarden volgens PC 302.'}</p>
            </div>
        </div>
    `;
    
    document.getElementById('contractPreview').innerHTML = contractHTML;
    document.getElementById('signatureSection').style.display = 'block';
}

function clearSignature() {
    if (signaturePad) {
        signaturePad.clear();
    }
}

function saveContract() {
    if (signaturePad && signaturePad.isEmpty()) {
        alert('Please provide a signature');
        return;
    }
    
    const contract = {
        id: Date.now().toString(),
        employeeId: document.getElementById('contractEmployee').value,
        startDate: document.getElementById('contractStartDate').value,
        endDate: document.getElementById('contractEndDate').value,
        salary: document.getElementById('salary').value,
        terms: document.getElementById('contractTerms').value,
        signature: signaturePad ? signaturePad.toDataURL() : null,
        createdAt: new Date().toISOString()
    };
    
    contracts.push(contract);
    localStorage.setItem('contracts', JSON.stringify(contracts));
    loadContracts();
    closeContractModal();
}

function loadContracts() {
    const grid = document.getElementById('contractsGrid');
    grid.innerHTML = '';
    
    contracts.forEach(contract => {
        const card = createContractCard(contract);
        grid.appendChild(card);
    });
}

function createContractCard(contract) {
    const employee = employees.find(emp => emp.id === contract.employeeId);
    const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
    
    const card = document.createElement('div');
    card.className = 'contract-card';
    card.style.cssText = `
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 10px;
    `;
    
    card.innerHTML = `
        <h4>${employeeName}</h4>
        <p><strong>Start:</strong> ${contract.startDate}</p>
        ${contract.endDate ? `<p><strong>End:</strong> ${contract.endDate}</p>` : ''}
        <p><strong>Salary:</strong> €${contract.salary}</p>
        <p><strong>Created:</strong> ${new Date(contract.createdAt).toLocaleDateString()}</p>
        <button class="btn-secondary" onclick="viewContract('${contract.id}')">
            <i class="fas fa-eye"></i> View
        </button>
    `;
    
    return card;
}

function viewContract(contractId) {
    const contract = contracts.find(c => c.id === contractId);
    if (contract) {
        // Open contract in new window or modal
        const newWindow = window.open('', '_blank');
        const employee = employees.find(emp => emp.id === contract.employeeId);
        
        newWindow.document.write(`
            <html>
                <head><title>Contract - ${employee ? employee.firstName + ' ' + employee.lastName : 'Unknown'}</title></head>
                <body style="font-family: Arial, sans-serif; padding: 20px;">
                    ${generateContractHTML(contract, employee)}
                    ${contract.signature ? `<div><h4>Signature:</h4><img src="${contract.signature}" style="border: 1px solid #ccc;"></div>` : ''}
                </body>
            </html>
        `);
        newWindow.document.close();
    }
}

function generateContractHTML(contract, employee) {
    return `
        <h2>ARBEIDSOVEREENKOMST</h2>
        <p><strong>Werknemer:</strong> ${employee ? employee.firstName + ' ' + employee.lastName : 'Unknown'}</p>
        <p><strong>Startdatum:</strong> ${contract.startDate}</p>
        ${contract.endDate ? `<p><strong>Einddatum:</strong> ${contract.endDate}</p>` : ''}
        <p><strong>Salaris:</strong> €${contract.salary}</p>
        <div><strong>Voorwaarden:</strong><br>${contract.terms}</div>
    `;
}

// Absence functions
function openAbsenceModal() {
    const modal = document.getElementById('absenceModal');
    populateAbsenceEmployeeDropdown();
    modal.style.display = 'block';
}

function closeAbsenceModal() {
    document.getElementById('absenceModal').style.display = 'none';
}

function populateAbsenceEmployeeDropdown() {
    const select = document.getElementById('absenceEmployee');
    select.innerHTML = '<option value="">Select Employee</option>';
    
    employees.forEach(employee => {
        const option = document.createElement('option');
        option.value = employee.id;
        option.textContent = `${employee.firstName} ${employee.lastName}`;
        select.appendChild(option);
    });
}

document.getElementById('absenceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const absence = {
        id: Date.now().toString(),
        employeeId: document.getElementById('absenceEmployee').value,
        type: document.getElementById('absenceType').value,
        startDate: document.getElementById('absenceStartDate').value,
        endDate: document.getElementById('absenceEndDate').value,
        reason: document.getElementById('absenceReason').value,
        approved: document.getElementById('absenceApproved').checked,
        createdAt: new Date().toISOString()
    };
    
    absences.push(absence);
    localStorage.setItem('absences', JSON.stringify(absences));
    loadAbsences();
    closeAbsenceModal();
});

function loadAbsences() {
    const grid = document.getElementById('absencesGrid');
    grid.innerHTML = '';
    
    absences.forEach(absence => {
        const card = createAbsenceCard(absence);
        grid.appendChild(card);
    });
}

function createAbsenceCard(absence) {
    const employee = employees.find(emp => emp.id === absence.employeeId);
    const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
    
    const card = document.createElement('div');
    card.className = 'absence-card';
    card.style.cssText = `
        background-color: ${absence.approved ? '#e8f5e8' : '#fff3cd'};
        border: 1px solid ${absence.approved ? '#28a745' : '#ffc107'};
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 10px;
    `;
    
    const typeLabels = {
        vacation: 'Vakantie',
        sick: 'Ziekte',
        personal: 'Persoonlijk',
        maternity: 'Zwangerschapsverlof',
        other: 'Andere'
    };
    
    card.innerHTML = `
        <h4>${employeeName}</h4>
        <p><strong>Type:</strong> ${typeLabels[absence.type] || absence.type}</p>
        <p><strong>Period:</strong> ${absence.startDate} to ${absence.endDate}</p>
        ${absence.reason ? `<p><strong>Reason:</strong> ${absence.reason}</p>` : ''}
        <p><strong>Status:</strong> ${absence.approved ? 'Approved' : 'Pending'}</p>
        <div class="absence-actions">
            ${!absence.approved ? `<button class="btn-primary" onclick="approveAbsence('${absence.id}')">Approve</button>` : ''}
            <button class="btn-secondary" onclick="deleteAbsence('${absence.id}')" style="background-color: #f44336;">Delete</button>
        </div>
    `;
    
    return card;
}

function approveAbsence(absenceId) {
    const absence = absences.find(abs => abs.id === absenceId);
    if (absence) {
        absence.approved = true;
        localStorage.setItem('absences', JSON.stringify(absences));
        loadAbsences();
    }
}

function deleteAbsence(absenceId) {
    if (confirm('Are you sure you want to delete this absence?')) {
        absences = absences.filter(abs => abs.id !== absenceId);
        localStorage.setItem('absences', JSON.stringify(absences));
        loadAbsences();
    }
}

// Settings functions
// Settings functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize settings tabs
    document.querySelectorAll('[data-settings-tab]').forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            document.querySelectorAll('[data-settings-tab]').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.settings-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const contentId = tab.dataset.settingsTab;
            document.querySelector(`.settings-tab-content[data-settings-tab="${contentId}"]`).classList.add('active');
        });
    });

    // Load settings when settings section is shown
    loadSettings();
});

function loadSettings() {
    const defaultShiftDurationInput = document.getElementById('defaultShiftDuration');
    const profilePictureToggle = document.getElementById('profilePictureToggle');
    const languageSelect = document.getElementById('languageSelect');
    
    if (defaultShiftDurationInput) {
        defaultShiftDurationInput.value = defaultShiftDuration;
    }
    if (profilePictureToggle) {
        profilePictureToggle.checked = useProfileIcon;
        updateProfilePictureToggleLabel();
    }
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', () => {
            const newLang = languageSelect.value;
            if (newLang !== currentLanguage) {
                currentLanguage = newLang;
                localStorage.setItem('language', newLang);
                updateLanguage();
                
                // Update language toggle button
                const langToggle = document.getElementById('langToggle');
                if (langToggle) {
                    langToggle.textContent = currentLanguage === 'nl' ? 'FR' : 'NL';
                    langToggle.setAttribute('title', currentLanguage === 'nl' ? 'Changer en français' : 'Wijzigen naar Nederlands');
                }
                
                // Show confirmation message
                const message = currentLanguage === 'nl' ? 'Taal gewijzigd naar Nederlands' : 'Langue changée en français';
                showNotification(message, 'success');
            }
        });
    }
}

function saveSettings() {
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const accentColor = document.getElementById('accentColor').value;
    const defaultShiftDurationInput = document.getElementById('defaultShiftDuration');
    const profilePictureToggle = document.getElementById('profilePictureToggle');
    const restaurantName = document.getElementById('restaurantName').value;
    const emailNotifications = document.getElementById('emailNotifications').checked;
    const browserNotifications = document.getElementById('browserNotifications').checked;

    // Apply and save colors
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
    localStorage.setItem('colorTheme', JSON.stringify({
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    }));

    // Save restaurant info
    if (restaurantName) {
        localStorage.setItem('restaurantName', restaurantName);
    }

    // Save shift settings
    if (defaultShiftDurationInput) {
        defaultShiftDuration = parseInt(defaultShiftDurationInput.value);
        localStorage.setItem('defaultShiftDuration', defaultShiftDuration);
    }

    // Save profile picture setting
    if (profilePictureToggle) {
        useProfileIcon = profilePictureToggle.checked;
        localStorage.setItem('useProfileIcon', JSON.stringify(useProfileIcon));
        loadEmployees();
    }

    // Save notification settings
    localStorage.setItem('notifications', JSON.stringify({
        email: emailNotifications,
        browser: browserNotifications
    }));

    showNotification('Settings saved successfully!', 'success');
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('logoImg').src = e.target.result;
            localStorage.setItem('customLogo', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function applySettings() {
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const accentColor = document.getElementById('accentColor').value;
    const defaultShiftDurationInput = document.getElementById('defaultShiftDuration');
    const profilePictureToggle = document.getElementById('profilePictureToggle');
    
    // Apply colors to CSS custom properties
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
    
    // Save to localStorage
    localStorage.setItem('colorTheme', JSON.stringify({
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    }));

    // Save default shift duration
    if (defaultShiftDurationInput) {
        defaultShiftDuration = parseInt(defaultShiftDurationInput.value);
        localStorage.setItem('defaultShiftDuration', defaultShiftDuration);
    }

    // Save profile picture setting
    if (profilePictureToggle) {
        useProfileIcon = profilePictureToggle.checked;
        localStorage.setItem('useProfileIcon', JSON.stringify(useProfileIcon));
        loadEmployees(); // Reload employees to apply new avatar setting
    }
    
    closeSettings();
}

function updateProfilePictureToggleLabel() {
    const labelElement = document.getElementById('profilePictureLabel');
    if (labelElement) {
        labelElement.textContent = useProfileIcon ? translations[currentLanguage].profileIcon : translations[currentLanguage].initials;
    }
}

// Add event listener for the toggle
document.addEventListener('DOMContentLoaded', () => {
    const profilePictureToggle = document.getElementById('profilePictureToggle');
    if (profilePictureToggle) {
        profilePictureToggle.addEventListener('change', updateProfilePictureToggleLabel);
    }
});

// Language functions
function toggleLanguage() {
    // Toggle between Dutch and French
    currentLanguage = currentLanguage === 'nl' ? 'fr' : 'nl';
    
    // Save the new language preference
    localStorage.setItem('language', currentLanguage);
    
    // Update the language toggle button with keyboard shortcut info
    initializeLanguageToggle();
    
    // Update all translations and UI elements
    updateLanguage();
    
    // Show confirmation message in the new language
    const message = currentLanguage === 'nl' ? 'Taal gewijzigd naar Nederlands' : 'Langue changée en français';
    showNotification(message, 'success');
}

function updateLanguage() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update job categories and titles
    populateJobCategories();
    
    // Reload employee cards to show job titles in the new language
    loadEmployees();
    
    // Update employee pool if on planning section
    loadEmployeePool();
    
    // Update language toggle button and dropdown
    initializeLanguageToggle();
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    // Update keyboard shortcut hint in language settings
    const languageShortcutHint = document.getElementById('languageShortcutHint');
    if (languageShortcutHint) {
        languageShortcutHint.textContent = currentLanguage === 'nl' ? 
            'Gebruik Alt + L om snel te wisselen tussen talen' : 
            'Utilisez Alt + L pour basculer rapidement entre les langues';
    }
}

// Utility functions
function updateEmployeeDropdowns() {
    // Update contract employee dropdown
    const contractSelect = document.getElementById('contractEmployee');
    if (contractSelect) {
        populateContractEmployeeDropdown();
    }
    
    // Update absence employee dropdown
    const absenceSelect = document.getElementById('absenceEmployee');
    if (absenceSelect) {
        populateAbsenceEmployeeDropdown();
    }
}

// Resize functionality for shift bars
function startResize(e, direction, shiftBar, updateTimeDisplay) {
    e.preventDefault();
    shiftBar.classList.add('resizing');
    
    const startY = e.clientY;
    const originalStartHour = parseInt(shiftBar.dataset.startHour);
    const originalEndHour = parseInt(shiftBar.dataset.endHour);
    // Get the actual cell height from the DOM
    const firstCell = document.querySelector('.calendar-cell');
    const cellHeight = firstCell ? firstCell.offsetHeight : 30;
    
    function onMouseMove(e) {
        const deltaY = e.clientY - startY;
        const hourChange = Math.round(deltaY / cellHeight);
        
        if (direction === 'top') {
            // Resize from top (change start hour)
            const newStartHour = Math.max(0, Math.min(23, originalStartHour + hourChange));
            const endHour = parseInt(shiftBar.dataset.endHour);
            
            // Ensure start hour is before end hour
            if (newStartHour < endHour) {
                shiftBar.dataset.startHour = newStartHour;
                updateShiftBarDisplay(shiftBar);
                updateTimeDisplay();
                
                // Move shift bar to new position if needed
                moveShiftBarToCell(shiftBar, parseInt(shiftBar.dataset.day), newStartHour);
            }
        } else if (direction === 'bottom') {
            // Resize from bottom (change end hour)
            const newEndHour = Math.max(1, Math.min(24, originalEndHour + hourChange));
            const startHour = parseInt(shiftBar.dataset.startHour);
            
            // Ensure end hour is after start hour
            if (newEndHour > startHour) {
                shiftBar.dataset.endHour = newEndHour;
                updateShiftBarDisplay(shiftBar);
                updateTimeDisplay();
            }
        }
        
        // Update overlapping layout during resize
        updateOverlappingShiftsLayout();
    }
    
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        shiftBar.classList.remove('resizing');
        
        // Hide resize handles
        const topHandle = shiftBar.querySelector('.resize-handle-top');
        const bottomHandle = shiftBar.querySelector('.resize-handle-bottom');
        const removeButton = shiftBar.querySelector('button');
        
        if (topHandle) topHandle.style.opacity = '0';
        if (bottomHandle) bottomHandle.style.opacity = '0';
        if (removeButton) removeButton.style.opacity = '0';
        
        // Final update of overlapping layout
        updateOverlappingShiftsLayout();
        
        // Save changes
        saveWeeklyPlanning();
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

function updateShiftBarDisplay(shiftBar) {
    const startHour = parseInt(shiftBar.dataset.startHour);
    const endHour = parseInt(shiftBar.dataset.endHour);
    const duration = endHour - startHour;
    
    // Get the actual cell height from the DOM
    const firstCell = document.querySelector('.calendar-cell');
    const cellHeight = firstCell ? firstCell.offsetHeight : 30;
    
    // Update height based on duration
    shiftBar.style.height = `${duration * cellHeight - 2}px`; // Subtract 2px for border
    
    // Update z-index to ensure it appears above cells
    shiftBar.style.zIndex = '15';
}

function updateOverlappingShiftsLayout() {
    // Clear all overlapping classes first
    document.querySelectorAll('.shift-bar').forEach(shiftBar => {
        shiftBar.classList.remove('overlapping');
        shiftBar.style.left = '2px';
        shiftBar.style.right = '2px';
        shiftBar.style.width = 'auto';
        delete shiftBar.dataset.overlapIndex;
        delete shiftBar.dataset.overlapTotal;
    });
    
    // Get all shift bars grouped by day and time overlap
    const overlapGroups = getOverlapGroups();
    
    // Apply layout to each overlap group
    overlapGroups.forEach(group => {
        if (group.length > 1) {
            const shiftsCount = group.length;
            const cellWidth = group[0].parentElement.clientWidth || 100;
            const widthPerShift = (cellWidth - 4) / shiftsCount; // Account for 2px padding on each side
            
            group.forEach((shiftBar, index) => {
                const leftPosition = 2 + (index * widthPerShift);
                
                // Apply positioning
                shiftBar.style.left = `${leftPosition}px`;
                shiftBar.style.width = `${widthPerShift}px`;
                shiftBar.style.right = 'auto';
                
                // Add overlap indicator class
                shiftBar.classList.add('overlapping');
                shiftBar.dataset.overlapIndex = index;
                shiftBar.dataset.overlapTotal = shiftsCount;
            });
        }
    });
}

function getOverlapGroups() {
    const allShifts = document.querySelectorAll('.shift-bar');
    const groups = [];
    const processed = new Set();
    
    allShifts.forEach(shiftBar => {
        if (processed.has(shiftBar)) return;
        
        const overlappingShifts = findOverlappingShifts(shiftBar, allShifts);
        
        if (overlappingShifts.length > 1) {
            // Sort by employee name for consistent ordering
            overlappingShifts.sort((a, b) => {
                const employeeA = employees.find(emp => emp.id === a.dataset.employeeId);
                const employeeB = employees.find(emp => emp.id === b.dataset.employeeId);
                const nameA = employeeA ? `${employeeA.firstName} ${employeeA.lastName}` : '';
                const nameB = employeeB ? `${employeeB.firstName} ${employeeB.lastName}` : '';
                return nameA.localeCompare(nameB);
            });
            
            groups.push(overlappingShifts);
            overlappingShifts.forEach(shift => {
                processed.add(shift);
                shift.classList.remove('overlapping'); // Reset before reapplying
            });
        } else {
            processed.add(shiftBar);
            shiftBar.classList.remove('overlapping');
        }
    });
    
    return groups;
}

function findOverlappingShifts(targetShift, allShifts) {
    const targetDay = parseInt(targetShift.dataset.day);
    const targetStart = parseInt(targetShift.dataset.startHour);
    const targetEnd = parseInt(targetShift.dataset.endHour);
    
    const overlapping = [];
    
    allShifts.forEach(shift => {
        const day = parseInt(shift.dataset.day);
        const start = parseInt(shift.dataset.startHour);
        const end = parseInt(shift.dataset.endHour);
        
        // Check if shifts are on the same day and have time overlap
        if (day === targetDay && !(end <= targetStart || start >= targetEnd)) {
            overlapping.push(shift);
        }
    });
    
    return overlapping;
}

function getShiftTimeRange(shiftBar) {
    const start = parseInt(shiftBar.dataset.startHour);
    const end = parseInt(shiftBar.dataset.endHour);
    const hours = [];
    
    for (let hour = start; hour < end; hour++) {
        hours.push(hour);
    }
    
    return hours;
}

function moveShiftBarToCell(shiftBar, day, hour) {
    const newCell = document.querySelector(
        `.calendar-cell[data-day="${day}"][data-hour="${hour}"]`
    );
    
    if (newCell && newCell !== shiftBar.parentElement) {
        // Remove from current cell
        shiftBar.remove();
        
        // Add to new cell
        newCell.appendChild(shiftBar);
    }
}

// Enhanced shift drag functionality
function handleShiftDragStart(e) {
    // Only allow dragging if not resizing
    if (e.target.closest('.resize-handle')) {
        e.preventDefault();
        return;
    }
    
    const shiftBar = e.target.closest('.shift-bar');
    if (!shiftBar) return;
    
    e.dataTransfer.setData('text/plain', 'shift');
    e.dataTransfer.setData('employeeId', shiftBar.dataset.employeeId);
    e.dataTransfer.setData('originalDay', shiftBar.dataset.day);
    e.dataTransfer.setData('originalHour', shiftBar.dataset.startHour);
    e.dataTransfer.setData('originalEndHour', shiftBar.dataset.endHour);
    e.dataTransfer.setData('duration', shiftBar.dataset.endHour - shiftBar.dataset.startHour);
    
    // Mark the shift bar as being dragged
    shiftBar.classList.add('dragging');
}

// Enhanced drop handler for shifts
function handleShiftDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    
    if (data === 'shift') {
        const employeeId = e.dataTransfer.getData('employeeId');
        const originalDay = parseInt(e.dataTransfer.getData('originalDay'));
        const originalHour = parseInt(e.dataTransfer.getData('originalHour'));
        const duration = parseInt(e.dataTransfer.getData('duration')) || 1;
        const cell = e.target.closest('.calendar-cell');
        
        if (cell && employeeId) {
            const newDay = parseInt(cell.dataset.day);
            const newHour = parseInt(cell.dataset.hour);
            
            // Find and remove the original shift bar being dragged
            const originalShift = document.querySelector(
                `.shift-bar[data-employee-id="${employeeId}"][data-day="${originalDay}"][data-start-hour="${originalHour}"]`
            );
            
            if (originalShift) {
                originalShift.remove();
            }
            
            // Remove any existing shift for this specific employee only
            document.querySelectorAll('.shift-bar').forEach(bar => {
                if (bar.dataset.employeeId === employeeId && 
                    parseInt(bar.dataset.day) === newDay &&
                    bar !== originalShift) {
                    bar.remove();
                }
            });
            
            // Create new shift with preserved duration
            const newShiftBar = createShiftBar(employeeId, newDay, newHour, cell);
            if (newShiftBar) {
                newShiftBar.dataset.endHour = newHour + duration;
                updateShiftBarDisplay(newShiftBar);
                
                // Update time display
                const timeDisplay = newShiftBar.querySelector('.shift-time-display');
                if (timeDisplay) {
                    timeDisplay.textContent = `${newHour.toString().padStart(2, '0')}:00 - ${(newHour + duration).toString().padStart(2, '0')}:00`;
                }
                
                // Update overlapping shifts layout
                updateOverlappingShiftsLayout();
            }
        }
    }
    
    // Remove dragging class from all shift bars
    document.querySelectorAll('.shift-bar.dragging').forEach(bar => {
        bar.classList.remove('dragging');
    });
}

// Shift copying functionality
function handleShiftClick(e) {
    if (isPlusKeyPressed) {
        e.preventDefault();
        e.stopPropagation();
        
        const shiftBar = e.target.closest('.shift-bar');
        if (!shiftBar) return;
        
        // Copy shift data
        copiedShift = {
            employeeId: shiftBar.dataset.employeeId,
            startHour: parseInt(shiftBar.dataset.startHour),
            endHour: parseInt(shiftBar.dataset.endHour),
            duration: parseInt(shiftBar.dataset.endHour) - parseInt(shiftBar.dataset.startHour)
        };
        
        shiftCopyMode = true;
        
        // Visual feedback
        shiftBar.style.boxShadow = '0 0 0 3px #28a745';
        setTimeout(() => {
            if (shiftBar.parentNode) {
                shiftBar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            }
        }, 500);
        
        const employee = employees.find(emp => emp.id === copiedShift.employeeId);
        const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
        
        showNotification(`Shift copied for ${employeeName} (${copiedShift.startHour}:00-${copiedShift.endHour}:00). Click on another day to paste.`, 'success');
    }
}

function handleCellClick(e) {
    if (!isPlusKeyPressed && !shiftCopyMode) {
        const cell = e.target.closest('.calendar-cell');
        if (!cell) return;
        
        // Create a modal for employee selection instead of prompt
        showEmployeeSelectionModal(cell);
        return;
    }
    if (copiedShift && (isPlusKeyPressed || shiftCopyMode)) {
        e.preventDefault();
        e.stopPropagation();
        
        const cell = e.target.closest('.calendar-cell');
        if (!cell) return;
        
        const day = parseInt(cell.dataset.day);
        const hour = parseInt(cell.dataset.hour);
        
        // Check if the copied shift would fit (not exceed 24:00)
        if (hour + copiedShift.duration > 24) {
            showNotification('Cannot paste shift here - it would exceed 24:00', 'warning');
            return;
        }
        
        // Remove any existing shift for this employee on this day
        const existingShiftForEmployee = document.querySelector(
            `.shift-bar[data-employee-id="${copiedShift.employeeId}"][data-day="${day}"]`
        );
        
        if (existingShiftForEmployee) {
            existingShiftForEmployee.remove();
        }
        
        // Create the new shift at the clicked location
        const targetCell = document.querySelector(
            `.calendar-cell[data-day="${day}"][data-hour="${hour}"]`
        );
        
        if (targetCell) {
            const newShiftBar = createShiftBar(copiedShift.employeeId, day, hour, targetCell);
            if (newShiftBar) {
                // Set the copied duration
                newShiftBar.dataset.endHour = hour + copiedShift.duration;
                updateShiftBarDisplay(newShiftBar);
                
                // Update time display
                const timeDisplay = newShiftBar.querySelector('.shift-time-display');
                if (timeDisplay) {
                    timeDisplay.textContent = `${hour.toString().padStart(2, '0')}:00 - ${(hour + copiedShift.duration).toString().padStart(2, '0')}:00`;
                }
                
                // Update overlapping shifts layout
                updateOverlappingShiftsLayout();
                
                const employee = employees.find(emp => emp.id === copiedShift.employeeId);
                const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
                
                showNotification(`Shift pasted for ${employeeName} on ${getDayName(day)}`, 'success');
                
                // Don't clear the copied shift so user can paste multiple times
                // copiedShift = null;
                // shiftCopyMode = false;
            }
        }
    }
}

function getDayName(dayIndex) {
    const days = {
        nl: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
        fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    };
    return days[currentLanguage][dayIndex] || `Day ${dayIndex + 1}`;
}

function showEmployeeSelectionModal(cell) {
    const day = parseInt(cell.dataset.day);
    const startHour = parseInt(cell.dataset.hour);
    const startMinute = parseInt(cell.dataset.minute);
    
    const employeeSelectionPanel = createEmployeeSelectionPanel(day, startHour, startMinute);

    document.body.appendChild(employeeSelectionPanel);

    employeeSelectionPanel.onclick = (e) => {
        if (e.target === employeeSelectionPanel) {
            document.body.removeChild(employeeSelectionPanel);
        }
    };
}


function createEmployeeSelectionPanel(day, startHour, startMinute) {
    const activeEmployees = employees.filter(emp => emp.active);
    if (activeEmployees.length === 0) {
        showNotification('No active employees available', 'warning');
        return;
    }

    const panel = document.createElement('div');
    panel.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

    const panelContent = document.createElement('div');
    panelContent.style.cssText = `
        background: white;
        padding: 24px;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        max-height: 500px;
        overflow-y: auto;
    `;

    panelContent.innerHTML = `
         3cdiv style="text-align: center; margin-bottom: 20px;" 3e
             3ch3 style="margin: 0 0 8px 0; color: var(--primary-color);" 3eAdd Employee Shift 3c/h3 3e
             3cdiv style="margin-bottom: 12px;" 3e
                Start:  3cinput type="time" id="startTimeInput" value="${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}" / 3e
                End:  3cinput type="time" id="endTimeInput" min="${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}" / 3e
             3c/div 3e
             3cdiv id="employeeList" style="max-height: 300px; overflow-y: auto;" 3e 3c/div 3e
             3cdiv style="text-align: center; margin-top: 20px;" 3e
                 3cbutton id="cancelSelection" style="padding: 8px 16px; border: 1px solid var(--border-color); background: white; border-radius: 6px; cursor: pointer;" 3eCancel 3c/button 3e
             3c/div 3e
         3c/div 3e
    `;

    const employeeList = panelContent.querySelector('#employeeList');

    activeEmployees.forEach(employee => {
        const button = document.createElement('button');
        button.style.cssText = `
            width: 100%;
            padding: 12px;
            margin-bottom: 8px;
            border: 1px solid var(--border-color);
            background: white;
            border-radius: 6px;
            cursor: pointer;
            text-align: left;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 12px;
        `;

        const contractTypeColors = {
            'full-time': '#4CAF50',
            'part-time': '#2196F3', 
            'flexi-job': '#FFEB3B',
            'student': '#FF5722',
            'extra': '#9E9E9E'
        };

        const avatarColor = contractTypeColors[employee.contractType] || '#6b9d6b';
        const jobIcon = getJobFunctionIcon(employee.jobTitle);

        button.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-color: ${avatarColor};
                color: white;
                font-size: 16px;
                flex-shrink: 0;
            ">
                ${useProfileIcon ? 
                    `<i class="fas ${jobIcon}"></i>` : 
                    `${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}`
                }
            </div>
            <div>
                <div style="font-weight: 600;">${employee.firstName} ${employee.lastName}</div>
                <div style="font-size: 12px; color: var(--light-text);">${getLocalizedJobTitle(employee.jobTitle)}</div>
            </div>
        `;

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'var(--light-bg)';
            button.style.borderColor = 'var(--primary-color)';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'white';
            button.style.borderColor = 'var(--border-color)';
        });

        button.onclick = () => {
            const startInput = panelContent.querySelector('#startTimeInput').value;
            const endInput = panelContent.querySelector('#endTimeInput').value;

            if (startInput && endInput && startInput < endInput) {
                const [startHour, startMinute] = startInput.split(':').map(num => parseInt(num));
                const [endHour, endMinute] = endInput.split(':').map(num => parseInt(num));

                const startTimeSlot = startHour * 2 + (startMinute >= 30 ? 1 : 0);
                const endTimeSlot = endHour * 2 + (endMinute >= 30 ? 1 : 0);

                // Find the correct cell for the start time slot
                // For 30-minute intervals, we need to find the cell that matches the time
                // Round minutes to nearest 30-minute interval (0 or 30)
                const roundedMinute = startMinute >= 30 ? 30 : 0;
                const startCell = document.querySelector(`.calendar-cell[data-hour="${startHour}"][data-minute="${roundedMinute}"][data-day="${day}"]`);
                console.log('Looking for cell:', `data-hour="${startHour}" data-minute="${startMinute}" data-day="${day}"`);
                console.log('Found cell:', startCell);
                if (startCell) {
                    const shiftBar = createShiftBar(employee.id, day, startHour, startCell);
                    if (shiftBar) {
                        // Update the shift bar with the correct end time
                        shiftBar.dataset.endHour = endHour;
                        shiftBar.dataset.startHour = startHour;
                        
                        // Update time display
                        const timeDisplay = shiftBar.querySelector('.shift-time-display');
                        if (timeDisplay) {
                            timeDisplay.textContent = `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')} - ${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
                        }
                        
                        // Update shift bar display to reflect the correct duration
                        updateShiftBarDisplay(shiftBar);
                    }
                }
                loadTablePlanning();
                showNotification(`Shift added for ${employee.firstName} ${employee.lastName}`, 'success');
                document.body.removeChild(panel);
            } else {
                showNotification('End time must be after start time', 'warning');
            }
        };

        employeeList.appendChild(button);
    });

    panelContent.querySelector('#cancelSelection').onclick = () => {
        document.body.removeChild(panel);
    };

    panel.appendChild(panelContent);
    return panel;
}

// Dashboard Functions
function refreshDashboard() {
    console.log('Refreshing dashboard...');
    updateDashboardStats();
    updateRecentActivity();
    updateUpcomingEvents();
    loadWeather();
    showNotification('Dashboard refreshed', 'success');
}

function updateDashboardStats() {
    // Update total employees
    const totalEmployeesEl = document.getElementById('totalEmployees');
    if (totalEmployeesEl) {
        totalEmployeesEl.textContent = employees.length;
    }
    
    // Update active employees
    const activeEmployeesEl = document.getElementById('activeEmployees');
    if (activeEmployeesEl) {
        const activeCount = employees.filter(emp => emp.active).length;
        activeEmployeesEl.textContent = activeCount;
    }
    
    // Update weekly shifts
    const weeklyShiftsEl = document.getElementById('weeklyShifts');
    if (weeklyShiftsEl) {
        const weekKey = getWeekKey(currentWeek);
        const shifts = weeklyPlanning[weekKey] || [];
        weeklyShiftsEl.textContent = shifts.length;
    }
    
    // Update total contracts
    const totalContractsEl = document.getElementById('totalContracts');
    if (totalContractsEl) {
        totalContractsEl.textContent = contracts.length;
    }
    
    // Update contracts stats if elements exist
    const signedContractsEl = document.getElementById('signedContractsCount');
    const pendingContractsEl = document.getElementById('pendingContractsCount');
    const expiringContractsEl = document.getElementById('expiringContractsCount');
    
    if (signedContractsEl) {
        const signedCount = contracts.filter(contract => contract.signature).length;
        signedContractsEl.textContent = signedCount;
    }
    
    if (pendingContractsEl) {
        const pendingCount = contracts.filter(contract => !contract.signature).length;
        pendingContractsEl.textContent = pendingCount;
    }
    
    if (expiringContractsEl) {
        // Count contracts expiring in the next 30 days
        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
        
        const expiringCount = contracts.filter(contract => {
            if (!contract.endDate) return false;
            const endDate = new Date(contract.endDate);
            return endDate <= thirtyDaysFromNow && endDate >= new Date();
        }).length;
        
        expiringContractsEl.textContent = expiringCount;
    }
}

function updateRecentActivity() {
    const activityList = document.getElementById('recentActivityList');
    if (!activityList) return;
    
    activityList.innerHTML = '';
    
    // Collect recent activities from various sources
    const activities = [];
    
    // Recent employee additions (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    employees.forEach(employee => {
        // For demo purposes, we'll create some mock recent activity
        activities.push({
            type: 'employee',
            message: `${employee.firstName} ${employee.lastName} added to system`,
            timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
            icon: 'fa-user-plus',
            color: '#28a745'
        });
    });
    
    // Recent contract signings
    contracts.filter(contract => contract.signature).forEach(contract => {
        const employee = employees.find(emp => emp.id === contract.employeeId);
        const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
        
        activities.push({
            type: 'contract',
            message: `Contract signed by ${employeeName}`,
            timestamp: new Date(contract.createdAt),
            icon: 'fa-file-signature',
            color: '#007bff'
        });
    });
    
    // Recent absences
    absences.slice(-5).forEach(absence => {
        const employee = employees.find(emp => emp.id === absence.employeeId);
        const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
        
        activities.push({
            type: 'absence',
            message: `${absence.approved ? 'Approved' : 'Pending'} absence for ${employeeName}`,
            timestamp: new Date(absence.createdAt),
            icon: 'fa-calendar-times',
            color: absence.approved ? '#28a745' : '#ffc107'
        });
    });
    
    // Sort by timestamp and take the most recent 10
    activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const recentActivities = activities.slice(0, 10);
    
    if (recentActivities.length === 0) {
        activityList.innerHTML = '<p style="text-align: center; color: var(--light-text); margin: 20px 0;">No recent activity</p>';
        return;
    }
    
    recentActivities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.style.cssText = `
            display: flex;
            align-items: center;
            padding: 12px;
            border-bottom: 1px solid var(--border-color);
            transition: background-color 0.2s ease;
        `;
        
        activityItem.innerHTML = `
            <div style="
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-color: ${activity.color};
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                color: white;
                font-size: 14px;
            ">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 500; margin-bottom: 4px;">${activity.message}</div>
                <div style="font-size: 12px; color: var(--light-text);">${formatRelativeTime(activity.timestamp)}</div>
            </div>
        `;
        
        activityItem.addEventListener('mouseenter', () => {
            activityItem.style.backgroundColor = 'var(--light-bg)';
        });
        
        activityItem.addEventListener('mouseleave', () => {
            activityItem.style.backgroundColor = 'transparent';
        });
        
        activityList.appendChild(activityItem);
    });
}

function updateUpcomingEvents() {
    const eventsList = document.getElementById('upcomingEventsList');
    if (!eventsList) return;
    
    eventsList.innerHTML = '';
    
    const events = [];
    const now = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    
    // Upcoming absences
    absences.filter(absence => {
        const startDate = new Date(absence.startDate);
        return startDate >= now && startDate <= thirtyDaysFromNow && absence.approved;
    }).forEach(absence => {
        const employee = employees.find(emp => emp.id === absence.employeeId);
        const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
        
        events.push({
            type: 'absence',
            title: `${employeeName} - ${getAbsenceTypeLabel(absence.type)}`,
            date: new Date(absence.startDate),
            icon: 'fa-calendar-times',
            color: '#ffc107'
        });
    });
    
    // Contract end dates
    contracts.filter(contract => {
        if (!contract.endDate) return false;
        const endDate = new Date(contract.endDate);
        return endDate >= now && endDate <= thirtyDaysFromNow;
    }).forEach(contract => {
        const employee = employees.find(emp => emp.id === contract.employeeId);
        const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
        
        events.push({
            type: 'contract',
            title: `Contract expires - ${employeeName}`,
            date: new Date(contract.endDate),
            icon: 'fa-file-contract',
            color: '#dc3545'
        });
    });
    
    // Sort by date
    events.sort((a, b) => a.date - b.date);
    
    if (events.length === 0) {
        eventsList.innerHTML = '<p style="text-align: center; color: var(--light-text); margin: 20px 0;">No upcoming events</p>';
        return;
    }
    
    events.slice(0, 10).forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.style.cssText = `
            display: flex;
            align-items: center;
            padding: 12px;
            border-bottom: 1px solid var(--border-color);
            transition: background-color 0.2s ease;
        `;
        
        eventItem.innerHTML = `
            <div style="
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-color: ${event.color};
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                color: white;
                font-size: 14px;
            ">
                <i class="fas ${event.icon}"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 500; margin-bottom: 4px;">${event.title}</div>
                <div style="font-size: 12px; color: var(--light-text);">${event.date.toLocaleDateString()}</div>
            </div>
        `;
        
        eventItem.addEventListener('mouseenter', () => {
            eventItem.style.backgroundColor = 'var(--light-bg)';
        });
        
        eventItem.addEventListener('mouseleave', () => {
            eventItem.style.backgroundColor = 'transparent';
        });
        
        eventsList.appendChild(eventItem);
    });
}

// Weather Functions
function loadWeather() {
    const weatherLoading = document.getElementById('weatherLoading');
    const weatherData = document.getElementById('weatherData');
    const weatherError = document.getElementById('weatherError');
    
    if (!weatherLoading || !weatherData || !weatherError) return;
    
    // Show loading state
    weatherLoading.style.display = 'flex';
    weatherData.style.display = 'none';
    weatherError.style.display = 'none';
    
    // For demo purposes, we'll simulate weather data
    // In a real application, you would make an API call to a weather service
    setTimeout(() => {
        try {
            const mockWeatherData = generateMockWeatherData();
            displayWeatherData(mockWeatherData);
            
            weatherLoading.style.display = 'none';
            weatherData.style.display = 'block';
            weatherError.style.display = 'none';
        } catch (error) {
            console.error('Weather loading error:', error);
            weatherLoading.style.display = 'none';
            weatherData.style.display = 'none';
            weatherError.style.display = 'block';
        }
    }, 1000);
}

function refreshWeather() {
    loadWeather();
    showNotification('Weather refreshed', 'success');
}

function generateMockWeatherData() {
    const conditions = ['sunny', 'cloudy', 'partly-cloudy', 'rainy'];
    const currentCondition = conditions[Math.floor(Math.random() * conditions.length)];
    
    return {
        current: {
            temperature: Math.floor(Math.random() * 20) + 10, // 10-30°C
            condition: currentCondition,
            humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
            windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
            visibility: Math.floor(Math.random() * 10) + 10, // 10-20 km
            feelsLike: Math.floor(Math.random() * 20) + 10
        },
        forecast: Array.from({length: 5}, (_, i) => ({
            day: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {weekday: 'short'}),
            condition: conditions[Math.floor(Math.random() * conditions.length)],
            high: Math.floor(Math.random() * 20) + 15,
            low: Math.floor(Math.random() * 15) + 5
        }))
    };
}

function displayWeatherData(data) {
    // Update current weather
    const currentTemp = document.getElementById('currentTemp');
    const weatherIcon = document.getElementById('weatherIcon');
    const visibility = document.getElementById('visibility');
    const windSpeed = document.getElementById('windSpeed');
    const humidity = document.getElementById('humidity');
    const feelsLike = document.getElementById('feelsLike');
    
    if (currentTemp) currentTemp.textContent = data.current.temperature;
    if (visibility) visibility.textContent = data.current.visibility;
    if (windSpeed) windSpeed.textContent = data.current.windSpeed;
    if (humidity) humidity.textContent = data.current.humidity;
    if (feelsLike) feelsLike.textContent = data.current.feelsLike;
    
    // Update weather icon based on condition
    if (weatherIcon) {
        const iconMap = {
            'sunny': 'fa-sun',
            'cloudy': 'fa-cloud',
            'partly-cloudy': 'fa-cloud-sun',
            'rainy': 'fa-cloud-rain'
        };
        
        weatherIcon.className = `fas ${iconMap[data.current.condition] || 'fa-sun'}`;
    }
    
    // Update 5-day forecast
    const forecastDays = document.getElementById('forecastDays');
    if (forecastDays && data.forecast) {
        forecastDays.innerHTML = '';
        
        data.forecast.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'forecast-day';
            dayElement.style.cssText = `
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 8px;
                border-radius: 6px;
                background: rgba(255, 255, 255, 0.5);
                margin-right: 8px;
                min-width: 60px;
            `;
            
            const iconMap = {
                'sunny': 'fa-sun',
                'cloudy': 'fa-cloud',
                'partly-cloudy': 'fa-cloud-sun',
                'rainy': 'fa-cloud-rain'
            };
            
            dayElement.innerHTML = `
                <div style="font-size: 12px; font-weight: 600; margin-bottom: 4px;">${day.day}</div>
                <i class="fas ${iconMap[day.condition] || 'fa-sun'}" style="font-size: 16px; margin: 4px 0; color: var(--primary-color);"></i>
                <div style="font-size: 11px;">
                    <div style="font-weight: 600;">${day.high}°</div>
                    <div style="color: var(--light-text);">${day.low}°</div>
                </div>
            `;
            
            forecastDays.appendChild(dayElement);
        });
        
        // Make forecast scrollable horizontally
        forecastDays.style.cssText = `
            display: flex;
            overflow-x: auto;
            padding: 8px 0;
            gap: 8px;
        `;
    }
}

// Utility functions for dashboard
function formatRelativeTime(date) {
    const now = new Date();
    const diffMs = now - new Date(date);
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMinutes < 1) {
        return 'Just now';
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
}

function getAbsenceTypeLabel(type) {
    const labels = {
        vacation: translations[currentLanguage].vacation || 'Vacation',
        sick: translations[currentLanguage].sick || 'Sick',
        personal: translations[currentLanguage].personal || 'Personal',
        maternity: translations[currentLanguage].maternity || 'Maternity',
        other: translations[currentLanguage].other || 'Other'
    };
    return labels[type] || type;
}
