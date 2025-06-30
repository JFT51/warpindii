# Restaurant Management Dashboard

A comprehensive web application for managing restaurant operations, including employee management, scheduling, timeclock, contracts, and absence tracking.

## Features

- **Employee Management**: Add, edit, and manage restaurant staff
- **Planning System**: Interactive drag-and-drop shift scheduling
- **Timeclock**: QR code-based employee check-in/out system
- **Contract Management**: Create and manage employment contracts
- **Absence Tracking**: Monitor and approve employee time off
- **Multi-language Support**: Dutch and French language options
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Getting Started

### Online Access
Visit the live application: [Restaurant Management Dashboard](https://your-username.github.io/restaurant-management)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/restaurant-management.git
cd restaurant-management
```

2. Open `index.html` in your web browser or serve it using a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, Custom CSS Variables
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Montserrat)
- **Libraries**: 
  - QRCode.js for QR code generation
  - Signature Pad for digital signatures
- **Data Storage**: LocalStorage (client-side)

## Project Structure

```
├── index.html          # Main application page
├── styles.css          # Application styles
├── app.js             # Main application logic
├── data.js            # Data structures and sample data
├── translations.js    # Multi-language translations
├── pc302.json         # Belgian job categories data
├── logo.png           # Application logo
└── README.md          # Project documentation
```

## Features Overview

### Employee Management
- Complete employee profiles with personal and professional information
- Contract type classification (Full-time, Part-time, Student, Flexi-job, Extra)
- Active/Inactive status management
- Employee search and filtering

### Planning System
- Weekly calendar view with drag-and-drop functionality
- Visual shift management with color-coded contract types
- Overlapping shift detection and layout
- Template saving and loading
- Export functionality

### Timeclock System
- QR code generation for employee check-in/out
- Real-time logging with timestamps
- Filtering and export capabilities
- Mobile-friendly interface

### Contract Management
- Digital contract creation and preview
- Electronic signature capture
- Contract status tracking
- Belgian employment law compliance

### Absence Management
- Multiple absence types (Vacation, Sick leave, Personal, etc.)
- Approval workflow
- Calendar integration
- Reporting and analytics

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Data Storage

This application uses browser LocalStorage for data persistence. Data includes:
- Employee records
- Shift schedules
- Contracts
- Absence records
- Application settings

**Note**: Data is stored locally in your browser. For production use, consider implementing a backend database.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please open an issue in the GitHub repository.

## Roadmap

- [ ] Backend integration with database
- [ ] User authentication and authorization
- [ ] Advanced reporting and analytics
- [ ] Mobile application
- [ ] Integration with payroll systems
- [ ] Advanced scheduling algorithms
- [ ] Multi-location support
