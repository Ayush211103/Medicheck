// Mock data for the healthcare management platform

export const mockPatients = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    age: 35,
    phone: "+1-555-0123",
    bloodGroup: "O+",
    hasAllowedAccess: true,
    healthHistory: [
      {
        id: 1,
        date: "2024-01-15",
        type: "Blood Test",
        result: "Normal",
        doctor: "Dr. Smith",
        notes: "All parameters within normal range"
      },
      {
        id: 2,
        date: "2024-01-10",
        type: "X-Ray",
        result: "Clear",
        doctor: "Dr. Johnson",
        notes: "No abnormalities detected"
      }
    ],
    prescriptions: [
      {
        id: 1,
        medicine: "Paracetamol",
        dosage: "500mg",
        frequency: "Every 6 hours",
        duration: "5 days",
        startDate: "2024-01-20",
        endDate: "2024-01-25",
        reminder: true
      },
      {
        id: 2,
        medicine: "Vitamin D",
        dosage: "1000 IU",
        frequency: "Once daily",
        duration: "30 days",
        startDate: "2024-01-15",
        endDate: "2024-02-15",
        reminder: true
      }
    ],
    dietPlans: [
      {
        id: 1,
        date: "2024-01-20",
        doctor: "Dr. Smith",
        plan: "Low sodium diet with increased protein intake",
        restrictions: ["Salt", "Processed foods"],
        recommendations: ["Lean meats", "Vegetables", "Whole grains"]
      }
    ],
    appointments: [
      {
        id: 1,
        date: "2024-02-15",
        time: "10:00 AM",
        doctor: "Dr. Smith",
        type: "Follow-up",
        status: "Scheduled"
      },
      {
        id: 2,
        date: "2024-01-25",
        time: "2:00 PM",
        doctor: "Dr. Johnson",
        type: "Checkup",
        status: "Completed"
      }
    ],
    nextCheckup: "2024-02-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    age: 28,
    phone: "+1-555-0124",
    bloodGroup: "A+",
    hasAllowedAccess: false,
    healthHistory: [],
    prescriptions: [],
    dietPlans: [],
    appointments: [],
    nextCheckup: null
  }
];

export const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Smith",
    specialty: "Cardiology",
    experience: "15 years",
    rating: 4.8,
    charges: "$150",
    location: "Downtown Medical Center",
    available: true,
    patients: [1]
  },
  {
    id: 2,
    name: "Dr. Michael Johnson",
    specialty: "Orthopedics",
    experience: "12 years",
    rating: 4.6,
    charges: "$120",
    location: "City Hospital",
    available: true,
    patients: [1]
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialty: "Pediatrics",
    experience: "8 years",
    rating: 4.9,
    charges: "$100",
    location: "Children's Medical Center",
    available: false,
    patients: []
  }
];

export const mockMedicalStores = [
  {
    id: 1,
    name: "HealthCare Pharmacy",
    location: "123 Main St, Downtown",
    distance: "0.5 km",
    rating: 4.5,
    medicines: [
      {
        id: 1,
        name: "Paracetamol",
        brand: "Tylenol",
        strength: "500mg",
        price: "$5.99",
        stock: 50,
        type: "Pain Relief"
      },
      {
        id: 2,
        name: "Vitamin D",
        brand: "Nature Made",
        strength: "1000 IU",
        price: "$12.99",
        stock: 25,
        type: "Vitamin"
      },
      {
        id: 3,
        name: "Amoxicillin",
        brand: "Generic",
        strength: "250mg",
        price: "$8.99",
        stock: 15,
        type: "Antibiotic"
      }
    ]
  },
  {
    id: 2,
    name: "QuickCare Pharmacy",
    location: "456 Oak Ave, Midtown",
    distance: "1.2 km",
    rating: 4.2,
    medicines: [
      {
        id: 4,
        name: "Paracetamol",
        brand: "Generic",
        strength: "500mg",
        price: "$4.99",
        stock: 30,
        type: "Pain Relief"
      },
      {
        id: 5,
        name: "Ibuprofen",
        brand: "Advil",
        strength: "400mg",
        price: "$6.99",
        stock: 40,
        type: "Pain Relief"
      }
    ]
  }
];

export const mockLabs = [
  {
    id: 1,
    name: "City Diagnostic Center",
    location: "789 Health Blvd, Downtown",
    distance: "0.8 km",
    rating: 4.7,
    tests: [
      {
        id: 1,
        name: "Complete Blood Count (CBC)",
        price: "$45",
        duration: "24 hours",
        preparation: "Fasting required",
        available: true
      },
      {
        id: 2,
        name: "Blood Glucose Test",
        price: "$25",
        duration: "2 hours",
        preparation: "Fasting required",
        available: true
      },
      {
        id: 3,
        name: "Lipid Profile",
        price: "$35",
        duration: "24 hours",
        preparation: "Fasting required",
        available: true
      }
    ]
  },
  {
    id: 2,
    name: "Quick Lab Services",
    location: "321 Test St, Midtown",
    distance: "1.5 km",
    rating: 4.3,
    tests: [
      {
        id: 4,
        name: "Complete Blood Count (CBC)",
        price: "$40",
        duration: "24 hours",
        preparation: "Fasting required",
        available: true
      },
      {
        id: 5,
        name: "Thyroid Function Test",
        price: "$60",
        duration: "48 hours",
        preparation: "No special preparation",
        available: false
      }
    ]
  }
];

export const mockAppointments = [
  {
    id: 1,
    patientId: 1,
    patientName: "John Doe",
    doctorId: 1,
    doctorName: "Dr. Sarah Smith",
    date: "2024-02-15",
    time: "10:00 AM",
    type: "Follow-up",
    status: "Scheduled",
    notes: "Regular checkup after medication"
  },
  {
    id: 2,
    patientId: 1,
    patientName: "John Doe",
    doctorId: 2,
    doctorName: "Dr. Michael Johnson",
    date: "2024-01-25",
    time: "2:00 PM",
    type: "Checkup",
    status: "Completed",
    notes: "Annual physical examination"
  }
];

export const mockReports = [
  {
    id: 1,
    patientId: 1,
    type: "Blood Test",
    date: "2024-01-15",
    doctor: "Dr. Sarah Smith",
    result: "Normal",
    details: {
      hemoglobin: "14.2 g/dL",
      whiteBloodCells: "7,500/μL",
      platelets: "250,000/μL",
      glucose: "95 mg/dL"
    },
    notes: "All parameters within normal range. Patient is healthy."
  },
  {
    id: 2,
    patientId: 1,
    type: "X-Ray",
    date: "2024-01-10",
    doctor: "Dr. Michael Johnson",
    result: "Clear",
    details: {
      chest: "Normal cardiac silhouette",
      lungs: "Clear lung fields",
      bones: "No fractures detected"
    },
    notes: "No abnormalities detected in chest X-ray."
  }
];

export const mockNotifications = [
  {
    id: 1,
    type: "medicine_reminder",
    title: "Medicine Reminder",
    message: "Time to take Paracetamol (500mg)",
    time: "2024-01-20T10:00:00",
    read: false
  },
  {
    id: 2,
    type: "appointment_reminder",
    title: "Appointment Tomorrow",
    message: "You have an appointment with Dr. Smith tomorrow at 10:00 AM",
    time: "2024-02-14T09:00:00",
    read: false
  },
  {
    id: 3,
    type: "checkup_reminder",
    title: "Checkup Due",
    message: "Your next checkup is scheduled for February 15, 2024",
    time: "2024-02-14T08:00:00",
    read: true
  }
]; 