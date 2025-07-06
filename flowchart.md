# Healthcare Management Platform - Flow Chart

## 🏥 System Architecture Flow

```mermaid
graph TD
    A[User Access] --> B{Authentication}
    B -->|Not Authenticated| C[Login Page]
    B -->|Authenticated| D[Role Check]
    
    C --> E[Select Role]
    E --> F[Enter Credentials]
    F --> G[Login Validation]
    G -->|Success| D
    G -->|Failure| C
    
    D -->|Patient| H[Patient Dashboard]
    D -->|Doctor| I[Doctor Dashboard]
    D -->|Store| J[Medical Store Dashboard]
    D -->|Lab| K[Lab Dashboard]
```

## 🧑‍⚕️ Patient Journey Flow

```mermaid
graph TD
    A[Patient Login] --> B[Patient Dashboard]
    B --> C{Select Tab}
    
    C -->|Overview| D[View Health Summary]
    D --> D1[Next Checkup Date]
    D --> D2[Active Medicines]
    D --> D3[Recent Reports]
    
    C -->|Health History| E[View Medical Records]
    E --> E1[Toggle Doctor Access]
    E --> E2[View Reports]
    E --> E3[Download Reports]
    
    C -->|Medicines| F[Prescription Management]
    F --> F1[View Active Medicines]
    F --> F2[Medicine Reminders]
    F --> F3[Dosage Information]
    
    C -->|Appointments| G[Appointment Timeline]
    G --> G1[Upcoming Appointments]
    G --> G2[Past Appointments]
    G --> G3[Appointment Reminders]
    
    C -->|Medical Stores| H[Store Search]
    H --> H1[Search by Medicine]
    H --> H2[Compare Prices]
    H --> H3[Check Stock]
    H --> H4[View Store Location]
    
    C -->|Labs| I[Lab Search]
    I --> I1[Search by Test]
    I --> I2[Compare Prices]
    I --> I3[Check Availability]
    I --> I4[View Lab Location]
    
    C -->|Doctors| J[Doctor Recommendations]
    J --> J1[Search by Specialty]
    J --> J2[View Ratings]
    J --> J3[Check Availability]
    J --> J4[Book Appointment]
    
    C -->|Notifications| K[Notification Center]
    K --> K1[Medicine Reminders]
    K --> K2[Appointment Alerts]
    K --> K3[Checkup Reminders]
```

## 👨‍⚕️ Doctor Journey Flow

```mermaid
graph TD
    A[Doctor Login] --> B[Doctor Dashboard]
    B --> C{Select Tab}
    
    C -->|My Patients| D[Patient Management]
    D --> D1[View Accessible Patients]
    D --> D2[Search Patients]
    D --> D3[Patient Details]
    
    C -->|Patient Reports| E[Report Management]
    E --> E1[Select Patient]
    E --> E2[View Health History]
    E --> E3[Upload New Report]
    E --> E4[Add Notes]
    
    C -->|Prescriptions| F[Prescription Management]
    F --> F1[Select Patient]
    F --> F2[View Current Prescriptions]
    F --> F3[Add New Prescription]
    F --> F4[Edit Prescriptions]
    
    C -->|Appointments| G[Appointment Management]
    G --> G1[View Today's Appointments]
    G --> G2[Schedule New Appointment]
    G --> G3[Manage Patient Appointments]
    G --> G4[Appointment History]
```

## 🏪 Medical Store Journey Flow

```mermaid
graph TD
    A[Store Login] --> B[Store Dashboard]
    B --> C{Select Tab}
    
    C -->|Inventory| D[Medicine Management]
    D --> D1[View All Medicines]
    D --> D2[Add New Medicine]
    D --> D3[Edit Medicine Details]
    D --> D4[Update Stock Levels]
    D --> D5[Set Prices]
    
    C -->|Sales| E[Sales Analytics]
    E --> E1[Daily Sales]
    E --> E2[Weekly Sales]
    E --> E3[Monthly Sales]
    E --> E4[Sales Reports]
    
    C -->|Orders| F[Order Management]
    F --> F1[Pending Orders]
    F --> F2[Processing Orders]
    F --> F3[Completed Orders]
    F --> F4[Order History]
```

## 🧪 Lab Journey Flow

```mermaid
graph TD
    A[Lab Login] --> B[Lab Dashboard]
    B --> C{Select Tab}
    
    C -->|Lab Tests| D[Test Management]
    D --> D1[View All Tests]
    D --> D2[Add New Test]
    D --> D3[Update Test Prices]
    D --> D4[Set Availability]
    
    C -->|Orders| E[Order Processing]
    E --> E1[Pending Orders]
    E --> E2[In Progress Orders]
    E --> E3[Completed Orders]
    E --> E4[Order Status Updates]
    
    C -->|Reports| F[Report Generation]
    F --> F1[Generate Reports]
    F --> F2[View Report History]
    F --> F3[Download Reports]
    F --> F4[Report Analytics]
```

## 🔐 Authentication & Authorization Flow

```mermaid
graph TD
    A[User Request] --> B{Is Authenticated?}
    B -->|No| C[Redirect to Login]
    B -->|Yes| D{Check Role}
    
    C --> E[Login Form]
    E --> F[Role Selection]
    F --> G[Credentials Input]
    G --> H[Authentication]
    H -->|Success| I[Set User Context]
    H -->|Failure| E
    
    I --> J[Redirect to Dashboard]
    J --> D
    
    D -->|Patient| K[Patient Routes]
    D -->|Doctor| L[Doctor Routes]
    D -->|Store| M[Store Routes]
    D -->|Lab| N[Lab Routes]
    
    K --> O{Authorized Route?}
    L --> O
    M --> O
    N --> O
    
    O -->|Yes| P[Access Granted]
    O -->|No| Q[Access Denied]
    
    P --> R[Render Component]
    Q --> S[Show Error/Redirect]
```

## 📱 Data Flow Architecture

```mermaid
graph TD
    A[User Interface] --> B[React Components]
    B --> C[Context API]
    C --> D[State Management]
    
    D --> E[Authentication State]
    D --> F[User Role State]
    D --> G[Application Data]
    
    G --> H[Mock Data Store]
    H --> I[Patient Data]
    H --> J[Doctor Data]
    H --> K[Store Data]
    H --> L[Lab Data]
    
    B --> M[Protected Routes]
    M --> N[Role-Based Access]
    N --> O[Component Rendering]
    
    O --> P[UI Updates]
    P --> Q[User Interaction]
    Q --> B
```

## 🔄 Patient-Doctor Interaction Flow

```mermaid
graph TD
    A[Patient] --> B[Allow Doctor Access]
    B --> C[Doctor Can View Patient]
    C --> D[Doctor Reviews Health Data]
    D --> E[Doctor Creates Prescription]
    E --> F[Patient Receives Prescription]
    F --> G[Patient Takes Medicine]
    G --> H[Patient Updates Health]
    H --> I[Doctor Reviews Progress]
    I --> J[Doctor Adjusts Treatment]
    J --> F
```

## 🛒 Patient-Store Interaction Flow

```mermaid
graph TD
    A[Patient] --> B[Search for Medicine]
    B --> C[View Available Stores]
    C --> D[Compare Prices]
    D --> E[Select Store]
    E --> F[Check Stock Availability]
    F --> G[Place Order]
    G --> H[Store Processes Order]
    H --> I[Patient Receives Medicine]
```

## 🧪 Patient-Lab Interaction Flow

```mermaid
graph TD
    A[Patient] --> B[Search for Lab Test]
    B --> C[View Available Labs]
    C --> D[Compare Test Prices]
    D --> E[Select Lab]
    E --> F[Check Test Availability]
    F --> G[Book Test Appointment]
    G --> H[Lab Conducts Test]
    H --> I[Lab Generates Report]
    I --> J[Patient Receives Report]
```

## 📊 Notification System Flow

```mermaid
graph TD
    A[System Events] --> B{Event Type}
    
    B -->|Medicine Reminder| C[Medicine Notification]
    B -->|Appointment Reminder| D[Appointment Notification]
    B -->|Checkup Due| E[Checkup Notification]
    B -->|Report Ready| F[Report Notification]
    
    C --> G[Send to Patient]
    D --> G
    E --> G
    F --> G
    
    G --> H[Display in Dashboard]
    H --> I[User Acknowledges]
    I --> J[Mark as Read]
```

## 🔒 Privacy & Security Flow

```mermaid
graph TD
    A[Patient Data] --> B{Access Request}
    B -->|Doctor Request| C{Patient Permission?}
    B -->|Store Request| D[Public Information Only]
    B -->|Lab Request| E[Test Results Only]
    
    C -->|Allowed| F[Grant Access]
    C -->|Denied| G[Block Access]
    
    F --> H[Doctor Can View]
    G --> I[Access Denied]
    
    H --> J[Patient Health Records]
    I --> K[No Data Available]
    
    D --> L[Medicine Prices]
    D --> M[Store Locations]
    
    E --> N[Test Results]
    E --> O[Test Availability]
```

## 🎯 Key Features Summary

### Patient Features:
- Health history management
- Medicine tracking with reminders
- Appointment scheduling
- Store and lab search
- Doctor recommendations
- Privacy controls

### Doctor Features:
- Patient management
- Prescription creation
- Report review
- Appointment scheduling
- Treatment planning

### Store Features:
- Inventory management
- Order processing
- Sales analytics
- Price management

### Lab Features:
- Test management
- Order processing
- Report generation
- Availability tracking

This flow chart demonstrates the comprehensive nature of the healthcare platform, showing how different user roles interact with each other and the system to provide a complete healthcare management solution. 