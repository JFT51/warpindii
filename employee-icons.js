// Employee Avatar Icons - Simple icon list for avatar selection
const EMPLOYEE_ICONS = [
    // General/Office
    { name: "User", icon: "fa-user", category: "General" },
    { name: "Manager", icon: "fa-user-tie", category: "General" },
    { name: "Admin", icon: "fa-user-cog", category: "General" },
    { name: "Team Leader", icon: "fa-users", category: "General" },
    
    // Kitchen & Food Service
    { name: "Chef", icon: "fa-utensils", category: "Kitchen" },
    { name: "Cook", icon: "fa-fire", category: "Kitchen" },
    { name: "Baker", icon: "fa-bread-slice", category: "Kitchen" },
    { name: "Kitchen Helper", icon: "fa-kitchen-set", category: "Kitchen" },
    
    // Service & Hospitality
    { name: "Waiter", icon: "fa-wine-glass", category: "Service" },
    { name: "Bartender", icon: "fa-martini-glass", category: "Service" },
    { name: "Host/Hostess", icon: "fa-concierge-bell", category: "Service" },
    { name: "Cashier", icon: "fa-cash-register", category: "Service" },
    
    // Cleaning & Maintenance
    { name: "Cleaner", icon: "fa-broom", category: "Maintenance" },
    { name: "Dishwasher", icon: "fa-sink", category: "Maintenance" },
    { name: "Maintenance", icon: "fa-tools", category: "Maintenance" },
    { name: "Janitor", icon: "fa-spray-can", category: "Maintenance" },
    
    // Security & Safety
    { name: "Security", icon: "fa-shield-alt", category: "Security" },
    { name: "Guard", icon: "fa-user-shield", category: "Security" },
    { name: "Safety Officer", icon: "fa-hard-hat", category: "Security" },
    
    // Transport & Delivery
    { name: "Driver", icon: "fa-car", category: "Transport" },
    { name: "Delivery", icon: "fa-truck", category: "Transport" },
    { name: "Courier", icon: "fa-shipping-fast", category: "Transport" },
    
    // Additional Icons
    { name: "Student", icon: "fa-graduation-cap", category: "General" },
    { name: "Trainee", icon: "fa-book-open", category: "General" },
    { name: "Supervisor", icon: "fa-clipboard-check", category: "General" },
    { name: "Assistant", icon: "fa-hands-helping", category: "General" },
    { name: "Specialist", icon: "fa-star", category: "General" },
    { name: "Coordinator", icon: "fa-project-diagram", category: "General" }
];

// Function to get icons by category
function getIconsByCategory() {
    const categories = {};
    EMPLOYEE_ICONS.forEach(icon => {
        if (!categories[icon.category]) {
            categories[icon.category] = [];
        }
        categories[icon.category].push(icon);
    });
    return categories;
}

// Function to get all icons
function getAllIcons() {
    return EMPLOYEE_ICONS;
}

// Make functions globally available
window.EMPLOYEE_ICONS = EMPLOYEE_ICONS;
window.getIconsByCategory = getIconsByCategory;
window.getAllIcons = getAllIcons;
