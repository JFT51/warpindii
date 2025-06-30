// Global variables
// Global variables
let currentLanguage = 'nl';
let currentWeek = new Date();
let defaultShiftDuration = parseInt(localStorage.getItem('defaultShiftDuration')) || 4; // Default to 4 hours
let useProfileIcon = JSON.parse(localStorage.getItem('useProfileIcon')) ?? true; // Default to true (icon)

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
        }
    } catch (error) {
        console.error('Error in showSection:', error);
    }
}

// Make sure showSection is globally available
window.showSection = showSection;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the main application
    initializeApp();
    
    // Load saved settings on page load
    // Load custom logo
    const customLogo = localStorage.getItem('customLogo');
    if (customLogo) {
        document.getElementById('logoImg').src = customLogo;
    }
    
    // Load color theme
    const colorTheme = localStorage.getItem('colorTheme');
    if (colorTheme) {
        const theme = JSON.parse(colorTheme);
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        document.documentElement.style.setProperty('--accent-color', theme.accent);
        
        document.getElementById('primaryColor').value = theme.primary;
        document.getElementById('secondaryColor').value = theme.secondary;
        document.getElementById('accentColor').value = theme.accent;
    }
    
    // Load default shift duration
    const savedShiftDuration = localStorage.getItem('defaultShiftDuration');
    if (savedShiftDuration !== null) {
        defaultShiftDuration = parseInt(savedShiftDuration);
    }

    // Load profile picture setting
    const savedProfilePictureSetting = localStorage.getItem('useProfileIcon');
    if (savedProfilePictureSetting !== null) {
        useProfileIcon = JSON.parse(savedProfilePictureSetting);
    }
});

async function initializeApp() {
    try {
        // Load PC302 data first (but don't block navigation if it fails)
        await loadPC302Data();
        
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
        
        // Ensure the employees section is properly initialized and visible
        showSection('employees');
        
        // Force reload employees to ensure they're displayed
        setTimeout(() => {
            loadEmployees();
        }, 100);
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
    
    card.innerHTML = `
        <div class="employee-card-content">
            <div class="employee-main-info">
                <div class="employee-avatar">
                    ${useProfileIcon ? 
                        `<i class="fas fa-user-circle"></i>` : 
                        `<span style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            background-color: var(--accent-color);
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
                <div class="employee-controls">
                    <div class="status-toggle">
                        <label class="toggle-switch">
                            <input type="checkbox" ${employee.active ? 'checked' : ''} onchange="toggleEmployeeStatus('${employee.id}')">
                            <span class="toggle-slider"></span>
                        </label>
                        <span class="status-label ${employee.active ? 'active' : 'inactive'}">
                            ${employee.active ? translations[currentLanguage].active || 'Active' : translations[currentLanguage].inactive || 'Inactive'}
                        </span>
                    </div>
                    
                    <div class="card-actions">
                        <button class="btn-icon-secondary" onclick="editEmployee('${employee.id}')" title="${translations[currentLanguage].edit || 'Bewerken'}">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon-secondary" onclick="copyEmployee('${employee.id}')" title="${translations[currentLanguage].copy || 'Kopiëren'}">
                            <i class="fas fa-copy"></i>
                        </button>
                        <button class="btn-icon-danger" onclick="deleteEmployee('${employee.id}')" title="${translations[currentLanguage].delete || 'Verwijderen'}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
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
    
    // Generate 24 hours x 7 days grid
    for (let hour = 0; hour < 24; hour++) {
        // Time column
        const timeCell = document.createElement('div');
        timeCell.className = 'time-cell';
        timeCell.textContent = `${hour.toString().padStart(2, '0')}:00`;
        timeCell.style.cssText = `
            padding: 10px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
            font-weight: bold;
        `;
        calendarBody.appendChild(timeCell);
        
        // Day columns
        for (let day = 0; day < 7; day++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-cell';
            cell.dataset.day = day;
            cell.dataset.hour = hour;
            cell.style.cssText = `
                min-height: 40px;
                border: 1px solid #ddd;
                position: relative;
            `;
            
            // Add drop event listeners
            cell.addEventListener('dragover', handleDragOver);
            cell.addEventListener('drop', handleDrop);
            
            calendarBody.appendChild(cell);
        }
    }
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
        <small>${employee.jobTitle}</small>
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
        const cell = document.querySelector(
            `.calendar-cell[data-day="${shift.day}"][data-hour="${shift.startHour}"]`
        );
        if (cell) {
            // Recreate shift with saved data
            const shiftBar = createShiftBar(shift.employeeId, shift.day, shift.startHour, cell);
            if (shiftBar && shift.endHour) {
                shiftBar.dataset.endHour = shift.endHour;
            }
        }
    });
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
function showSettingsCategory(categoryId) {
    // Hide all settings categories
    document.querySelectorAll('.settings-category').forEach(category => {
        category.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.settings-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected category
    const targetCategory = document.getElementById(`${categoryId}-settings`);
    if (targetCategory) {
        targetCategory.classList.add('active');
    }
    
    // Add active class to clicked nav button
    const targetButton = document.querySelector(`[data-setting-category="${categoryId}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}

// Settings initialization and navigation
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for settings navigation
    document.querySelectorAll('.settings-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.settingCategory;
            showSettingsCategory(category);
        });
    });
});

// Handle settings menu click from header
function openSettings() {
    showSection('settings');
    
    // Initialize settings values
    const defaultShiftDurationInput = document.getElementById('defaultShiftDuration');
    const profilePictureToggle = document.getElementById('profilePictureToggle');
    const workdayStart = document.getElementById('workdayStart');
    const workdayEnd = document.getElementById('workdayEnd');
    const autoSchedule = document.getElementById('autoSchedule');
    
    // Business settings elements
    const businessName = document.getElementById('businessName');
    const vatNumber = document.getElementById('vatNumber');
    const businessAddress = document.getElementById('businessAddress');
    const businessEmail = document.getElementById('businessEmail');
    const businessPhone = document.getElementById('businessPhone');
    
    // Load saved values from localStorage
    if (defaultShiftDurationInput) {
        defaultShiftDurationInput.value = defaultShiftDuration;
    }
    if (profilePictureToggle) {
        profilePictureToggle.checked = useProfileIcon;
    }
    
    // Load working hours
    if (workdayStart) {
        workdayStart.value = localStorage.getItem('workdayStart') || '09:00';
    }
    if (workdayEnd) {
        workdayEnd.value = localStorage.getItem('workdayEnd') || '22:00';
    }
    if (autoSchedule) {
        autoSchedule.checked = JSON.parse(localStorage.getItem('autoSchedule') || 'false');
    }
    
    // Load business details
    if (businessName) {
        businessName.value = localStorage.getItem('businessName') || '';
    }
    if (vatNumber) {
        vatNumber.value = localStorage.getItem('vatNumber') || '';
    }
    if (businessAddress) {
        businessAddress.value = localStorage.getItem('businessAddress') || '';
    }
    if (businessEmail) {
        businessEmail.value = localStorage.getItem('businessEmail') || '';
    }
    if (businessPhone) {
        businessPhone.value = localStorage.getItem('businessPhone') || '';
    }
    
    // Load color theme values if they exist
    const colorTheme = localStorage.getItem('colorTheme');
    if (colorTheme) {
        const theme = JSON.parse(colorTheme);
        document.getElementById('primaryColor').value = theme.primary;
        document.getElementById('secondaryColor').value = theme.secondary;
        document.getElementById('accentColor').value = theme.accent;
    }
    
    // Ensure first category is active
    showSettingsCategory('personalization');
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
    // Theme settings
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const accentColor = document.getElementById('accentColor').value;
    
    // Employee settings
    const defaultShiftDurationInput = document.getElementById('defaultShiftDuration');
    const profilePictureToggle = document.getElementById('profilePictureToggle');
    
    // Planning settings
    const workdayStart = document.getElementById('workdayStart');
    const workdayEnd = document.getElementById('workdayEnd');
    const autoSchedule = document.getElementById('autoSchedule');
    
    // Business settings
    const businessName = document.getElementById('businessName');
    const vatNumber = document.getElementById('vatNumber');
    const businessAddress = document.getElementById('businessAddress');
    const businessEmail = document.getElementById('businessEmail');
    const businessPhone = document.getElementById('businessPhone');
    
    // Apply and save theme settings
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
    
    localStorage.setItem('colorTheme', JSON.stringify({
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor
    }));

    // Save employee settings
    if (defaultShiftDurationInput) {
        defaultShiftDuration = parseInt(defaultShiftDurationInput.value);
        localStorage.setItem('defaultShiftDuration', defaultShiftDuration);
    }
    if (profilePictureToggle) {
        useProfileIcon = profilePictureToggle.checked;
        localStorage.setItem('useProfileIcon', JSON.stringify(useProfileIcon));
        loadEmployees(); // Reload employees to apply new avatar setting
    }
    
    // Save planning settings
    if (workdayStart) {
        localStorage.setItem('workdayStart', workdayStart.value);
    }
    if (workdayEnd) {
        localStorage.setItem('workdayEnd', workdayEnd.value);
    }
    if (autoSchedule) {
        localStorage.setItem('autoSchedule', autoSchedule.checked);
    }
    
    // Save business settings
    if (businessName) localStorage.setItem('businessName', businessName.value);
    if (vatNumber) localStorage.setItem('vatNumber', vatNumber.value);
    if (businessAddress) localStorage.setItem('businessAddress', businessAddress.value);
    if (businessEmail) localStorage.setItem('businessEmail', businessEmail.value);
    if (businessPhone) localStorage.setItem('businessPhone', businessPhone.value);
    
    showNotification('Settings saved successfully!', 'success');
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
    currentLanguage = currentLanguage === 'nl' ? 'fr' : 'nl';
    updateLanguage();
    document.getElementById('langToggle').textContent = currentLanguage === 'nl' ? 'FR' : 'NL';
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
    const cellHeight = 50; // Height of each hour cell
    
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
    const cellHeight = 50;
    
    // Update height based on duration
    shiftBar.style.height = `${duration * cellHeight}px`;
    
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
