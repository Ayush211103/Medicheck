import React, { useState } from 'react';
import { 
  User, 
  FileText, 
  Pill, 
  Calendar, 
  Search, 
  Plus, 
  Eye, 
  Edit,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Phone,
  Mail
} from 'lucide-react';
import { mockPatients, mockDoctors, mockReports } from '../data/mockData';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get current doctor data (assuming doctor ID 1 for demo)
  const doctor = mockDoctors[0];
  const accessiblePatients = mockPatients.filter(patient => patient.hasAllowedAccess);

  const tabs = [
    { id: 'patients', label: 'My Patients', icon: User },
    { id: 'reports', label: 'Patient Reports', icon: FileText },
    { id: 'prescriptions', label: 'Prescriptions', icon: Pill },
    { id: 'appointments', label: 'Appointments', icon: Calendar }
  ];

  const renderPatients = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900">My Patients</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessiblePatients
          .filter(patient => 
            searchQuery === '' || patient.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(patient => (
            <div key={patient.id} className="card cursor-pointer hover:shadow-lg transition-shadow" 
                 onClick={() => setSelectedPatient(patient)}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-gray-600">{patient.email}</p>
                    <p className="text-sm text-gray-500">Age: {patient.age} • {patient.bloodGroup}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600">Access Allowed</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Reports</p>
                    <p className="font-medium">{patient.healthHistory.length}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Active Meds</p>
                    <p className="font-medium">{patient.prescriptions.filter(p => new Date(p.endDate) >= new Date()).length}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary text-sm py-2">
                    View Details
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {accessiblePatients.length === 0 && (
        <div className="text-center py-12">
          <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No patients yet</h3>
          <p className="text-gray-600">Patients will appear here once they allow access to their reports.</p>
        </div>
      )}
    </div>
  );

  const renderPatientReports = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Patient Reports</h2>
      
      {selectedPatient ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{selectedPatient.name}'s Reports</h3>
              <p className="text-sm text-gray-600">View and manage patient health reports</p>
            </div>
            <button 
              onClick={() => setSelectedPatient(null)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to all patients
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {selectedPatient.healthHistory.map(report => (
              <div key={report.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{report.type}</h4>
                    <p className="text-sm text-gray-600">{report.date}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    report.result === 'Normal' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.result}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">{report.notes}</p>
                  
                  <div className="flex space-x-2">
                    <button className="btn-primary text-sm py-2 px-4">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    <button className="btn-secondary text-sm py-2 px-4">
                      <Edit className="w-4 h-4 mr-2" />
                      Add Notes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Upload New Report</h4>
              <Plus className="w-5 h-5 text-primary-600" />
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                  <select className="input-field">
                    <option>Blood Test</option>
                    <option>X-Ray</option>
                    <option>MRI</option>
                    <option>ECG</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input type="date" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea className="input-field" rows="3" placeholder="Enter report notes..."></textarea>
              </div>
              <button className="btn-primary">Upload Report</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select a patient</h3>
          <p className="text-gray-600">Choose a patient from the "My Patients" tab to view their reports.</p>
        </div>
      )}
    </div>
  );

  const renderPrescriptions = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Manage Prescriptions</h2>
      
      {selectedPatient ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{selectedPatient.name}'s Prescriptions</h3>
              <p className="text-sm text-gray-600">Current and past prescriptions</p>
            </div>
            <button 
              onClick={() => setSelectedPatient(null)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to all patients
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedPatient.prescriptions.map(prescription => (
              <div key={prescription.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{prescription.medicine}</h4>
                    <p className="text-sm text-gray-600">{prescription.dosage}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    new Date(prescription.endDate) >= new Date() ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {new Date(prescription.endDate) >= new Date() ? 'Active' : 'Completed'}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Frequency</p>
                      <p className="font-medium">{prescription.frequency}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Duration</p>
                      <p className="font-medium">{prescription.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Start Date</p>
                      <p className="font-medium">{prescription.startDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">End Date</p>
                      <p className="font-medium">{prescription.endDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="btn-primary text-sm py-2 px-4">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                    <button className="btn-secondary text-sm py-2 px-4">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Add New Prescription</h4>
              <Plus className="w-5 h-5 text-primary-600" />
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medicine Name</label>
                  <input type="text" className="input-field" placeholder="Enter medicine name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dosage</label>
                  <input type="text" className="input-field" placeholder="e.g., 500mg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                  <input type="text" className="input-field" placeholder="e.g., Every 6 hours" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input type="text" className="input-field" placeholder="e.g., 5 days" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input type="date" className="input-field" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="reminder" className="rounded border-gray-300" />
                <label htmlFor="reminder" className="text-sm text-gray-700">Enable medicine reminders</label>
              </div>
              <button className="btn-primary">Add Prescription</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Pill className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select a patient</h3>
          <p className="text-gray-600">Choose a patient from the "My Patients" tab to manage prescriptions.</p>
        </div>
      )}
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Appointments</h2>
        <button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Today</h3>
            <Clock className="w-5 h-5 text-primary-600" />
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-medium text-gray-900">John Doe</p>
              <p className="text-sm text-gray-600">10:00 AM - Follow-up</p>
              <p className="text-sm text-blue-600">Cardiology</p>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming</h3>
            <Calendar className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">Jane Smith</p>
              <p className="text-sm text-gray-600">Feb 20, 2:00 PM - Checkup</p>
              <p className="text-sm text-gray-500">Orthopedics</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">Mike Johnson</p>
              <p className="text-sm text-gray-600">Feb 22, 11:00 AM - Consultation</p>
              <p className="text-sm text-gray-500">Cardiology</p>
            </div>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent</h3>
            <CheckCircle className="w-5 h-5 text-gray-600" />
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">Sarah Wilson</p>
              <p className="text-sm text-gray-600">Jan 25, 3:00 PM - Completed</p>
              <p className="text-sm text-gray-500">Annual Checkup</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule New Appointment */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule New Appointment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
            <select className="input-field">
              <option>Select Patient</option>
              {accessiblePatients.map(patient => (
                <option key={patient.id}>{patient.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input type="date" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <input type="time" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select className="input-field">
              <option>Checkup</option>
              <option>Follow-up</option>
              <option>Consultation</option>
              <option>Emergency</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <select className="input-field">
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>1.5 hours</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary w-full">Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'patients':
        return renderPatients();
      case 'reports':
        return renderPatientReports();
      case 'prescriptions':
        return renderPrescriptions();
      case 'appointments':
        return renderAppointments();
      default:
        return renderPatients();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {doctor.name}</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard; 