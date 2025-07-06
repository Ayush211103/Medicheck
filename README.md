# Healthcare Management Platform

A comprehensive multi-role healthcare management platform built with React, Tailwind CSS, and modern web technologies.

## 🏥 Features

### 🧑‍⚕️ Patient Dashboard
- **Complete Health History**: View reports, prescriptions, diet plans, and doctor notes
- **Appointment Timeline**: Track appointments and checkup history
- **Medicine Management**: View prescribed medicines with reminders and duration
- **Diet Plans**: Access doctor-recommended diet plans
- **Checkup Reminders**: Get notified about upcoming checkups
- **Medical Store Search**: Find nearby stores with price comparison
- **Lab Test Search**: Compare lab test prices and availability
- **Doctor Recommendations**: Find nearby doctors with specialties and charges
- **Privacy Control**: Toggle doctor access to health reports

### 👨‍⚕️ Doctor Dashboard
- **Patient Management**: View patients who have allowed access
- **Health Reports**: Access and review patient health history
- **Prescription Management**: Upload and manage patient prescriptions
- **Diet Plans**: Create and assign diet recommendations
- **Lab Recommendations**: Advise required lab tests
- **Appointment Scheduling**: Set and manage patient appointments
- **Privacy Respect**: Cannot access patient data without permission

### 🏪 Medical Store Dashboard
- **Inventory Management**: Upload and manage medicine inventory
- **Price Management**: Set and update medicine prices
- **Stock Tracking**: Monitor stock levels and availability
- **Order Management**: Process patient orders
- **Sales Analytics**: Track sales performance and trends
- **Location Services**: Show store location to patients

### 🧪 Lab Dashboard
- **Test Management**: Upload available lab tests and prices
- **Order Processing**: Manage test orders and status
- **Report Generation**: Generate and manage test reports
- **Availability Tracking**: Monitor test availability
- **Location Services**: Show lab location to patients

## 🚀 Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-management-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Usage

### Login
1. Open the application
2. Select your role from the dropdown (Patient, Doctor, Store, Lab)
3. Enter any email and password (demo mode)
4. Click "Sign in"

### Role-Based Access
- **Patient**: Access health history, medicines, appointments, and search services
- **Doctor**: Manage patients, prescriptions, and appointments
- **Medical Store**: Manage inventory and process orders
- **Lab**: Manage tests and generate reports

## 📱 Responsive Design

The platform is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Security Features

- Role-based access control
- Protected routes
- Patient privacy controls
- Doctor access permissions

## 📊 Mock Data

The application uses comprehensive mock data including:
- Patient health records
- Doctor information
- Medical store inventory
- Lab test catalogs
- Appointment schedules
- Prescriptions and medicines

## 🎨 UI Components

Built with Tailwind CSS featuring:
- Modern card layouts
- Responsive grids
- Interactive buttons
- Form components
- Modal dialogs
- Navigation bars
- Status indicators

## 🔄 State Management

Uses React Context API for:
- User authentication
- Role management
- Session persistence
- Protected routing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── ProtectedRoute.jsx # Route protection
├── context/            # React Context
│   └── AuthContext.jsx # Authentication context
├── data/               # Mock data
│   └── mockData.js     # All mock data
├── pages/              # Page components
│   ├── Login.jsx       # Login page
│   ├── PatientDashboard.jsx
│   ├── DoctorDashboard.jsx
│   ├── StoreDashboard.jsx
│   └── LabDashboard.jsx
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🚧 Future Enhancements

- Backend API integration
- Real-time notifications
- File upload functionality
- Payment processing
- Advanced search filters
- Data visualization
- Mobile app development
- Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Note**: This is a frontend demo application. For production use, integrate with a backend API and implement proper authentication and data persistence. 