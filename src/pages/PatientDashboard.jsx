import React, { useState } from 'react';
import { 
  Calendar, 
  Pill, 
  FileText, 
  MapPin, 
  Search, 
  Bell, 
  Clock, 
  User,
  Heart,
  Activity,
  Shield,
  Star,
  Phone,
  Mail
} from 'lucide-react';
import { mockPatients, mockDoctors, mockMedicalStores, mockLabs, mockNotifications } from '../data/mockData';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [doctorAccess, setDoctorAccess] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Get current patient data (assuming patient ID 1 for demo)
  const patient = mockPatients[0];
  const notifications = mockNotifications;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'health', label: 'Health History', icon: Heart },
    { id: 'medicines', label: 'Medicines', icon: Pill },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'stores', label: 'Medical Stores', icon: MapPin },
    { id: 'labs', label: 'Labs', icon: FileText },
    { id: 'doctors', label: 'Doctors', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Next Checkup */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Next Checkup</h3>
          <Calendar className="w-5 h-5 text-primary-600" />
        </div>
        {patient.nextCheckup ? (
          <div>
            <p className="text-2xl font-bold text-primary-600 mb-2">
              {new Date(patient.nextCheckup).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">With Dr. Sarah Smith</p>
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⏰ Reminder set for 1 day before
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No upcoming checkups</p>
        )}
      </div>

      {/* Current Medicines */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Medicines</h3>
          <Pill className="w-5 h-5 text-green-600" />
        </div>
        <div className="space-y-3">
          {patient.prescriptions.filter(p => new Date(p.endDate) >= new Date()).map(medicine => (
            <div key={medicine.id} className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">{medicine.medicine}</p>
              <p className="text-sm text-gray-600">{medicine.dosage} - {medicine.frequency}</p>
              {medicine.reminder && (
                <div className="flex items-center mt-1">
                  <Bell className="w-3 h-3 text-blue-600 mr-1" />
                  <span className="text-xs text-blue-600">Reminder active</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <div className="space-y-3">
          {patient.healthHistory.slice(0, 3).map(report => (
            <div key={report.id} className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900">{report.type}</p>
              <p className="text-sm text-gray-600">{report.date}</p>
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                report.result === 'Normal' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {report.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHealthHistory = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Health History</h2>
        <div className="flex items-center space-x-2">
          <Shield className="w-5 h-5 text-gray-600" />
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={doctorAccess}
              onChange={(e) => setDoctorAccess(e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Allow doctor access to reports</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {patient.healthHistory.map(report => (
          <div key={report.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{report.type}</h3>
                <p className="text-sm text-gray-600">{report.date}</p>
              </div>
              <span className={`px-3 py-1 text-sm rounded-full ${
                report.result === 'Normal' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {report.result}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Doctor:</span> {report.doctor}
              </p>
              <p className="text-sm text-gray-700">{report.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMedicines = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Prescribed Medicines</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patient.prescriptions.map(medicine => (
          <div key={medicine.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{medicine.medicine}</h3>
                <p className="text-sm text-gray-600">{medicine.dosage}</p>
              </div>
              {medicine.reminder && (
                <Bell className="w-5 h-5 text-blue-600" />
              )}
            </div>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Frequency</p>
                  <p className="font-medium">{medicine.frequency}</p>
                </div>
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="font-medium">{medicine.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600">Start Date</p>
                  <p className="font-medium">{medicine.startDate}</p>
                </div>
                <div>
                  <p className="text-gray-600">End Date</p>
                  <p className="font-medium">{medicine.endDate}</p>
                </div>
              </div>
              
              {new Date(medicine.endDate) >= new Date() && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    ⏰ Next dose: {medicine.frequency}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Appointments & Timeline</h2>
      
      <div className="space-y-4">
        {patient.appointments.map(appointment => (
          <div key={appointment.id} className="card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                  <p className="text-sm text-gray-500">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 text-sm rounded-full ${
                appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {appointment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMedicalStores = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Nearby Medical Stores</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Types</option>
            <option value="Pain Relief">Pain Relief</option>
            <option value="Vitamin">Vitamin</option>
            <option value="Antibiotic">Antibiotic</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockMedicalStores.map(store => (
          <div key={store.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                <p className="text-sm text-gray-600">{store.location}</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{store.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">• {store.distance}</span>
                </div>
              </div>
              <MapPin className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Available Medicines:</h4>
              {store.medicines
                .filter(medicine => 
                  (filterType === 'all' || medicine.type === filterType) &&
                  (searchQuery === '' || medicine.name.toLowerCase().includes(searchQuery.toLowerCase()))
                )
                .map(medicine => (
                  <div key={medicine.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{medicine.name}</p>
                        <p className="text-sm text-gray-600">{medicine.brand} - {medicine.strength}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{medicine.price}</p>
                        <p className="text-sm text-gray-600">Stock: {medicine.stock}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLabs = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900">Nearby Labs</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockLabs.map(lab => (
          <div key={lab.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{lab.name}</h3>
                <p className="text-sm text-gray-600">{lab.location}</p>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{lab.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">• {lab.distance}</span>
                </div>
              </div>
              <FileText className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Available Tests:</h4>
              {lab.tests
                .filter(test => 
                  searchQuery === '' || test.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(test => (
                  <div key={test.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{test.name}</p>
                        <p className="text-sm text-gray-600">{test.preparation}</p>
                        <p className="text-sm text-gray-600">Duration: {test.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{test.price}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          test.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {test.available ? 'Available' : 'Unavailable'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDoctors = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Suggested Doctors Nearby</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDoctors.map(doctor => (
          <div key={doctor.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                doctor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {doctor.available ? 'Available' : 'Unavailable'}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Experience</span>
                <span className="font-medium">{doctor.experience}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Rating</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{doctor.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Charges</span>
                <span className="font-medium">{doctor.charges}</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>{doctor.location}</p>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 btn-primary text-sm py-2">
                  Book Appointment
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Phone className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
      
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className={`card ${!notification.read ? 'border-l-4 border-l-blue-500' : ''}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(notification.time).toLocaleString()}
                  </p>
                </div>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'health':
        return renderHealthHistory();
      case 'medicines':
        return renderMedicines();
      case 'appointments':
        return renderAppointments();
      case 'stores':
        return renderMedicalStores();
      case 'labs':
        return renderLabs();
      case 'doctors':
        return renderDoctors();
      case 'notifications':
        return renderNotifications();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {patient.name}</p>
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

export default PatientDashboard; 