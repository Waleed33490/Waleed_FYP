// src/screens/DoctorsScreen.jsx
import React from "react";
import { ChevronRight, Star, Video, Calendar, Mail } from "lucide-react";

const DoctorsList = ({ onNavigate }) => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Pulmonologist",
      experience: "15+ years experience",
      availability: "Available Today",
      rating: 4.9,
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Respiratory Specialist",
      experience: "12+ years experience",
      availability: "Next Available: Tomorrow",
      rating: 4.8,
    },
    {
      name: "Dr. Emily Roberts",
      specialty: "Thoracic Surgeon",
      experience: "20+ years experience",
      availability: "Available Today",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate("dashboard")}
          className="flex items-center text-slate-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="ml-1">Back to Dashboard</span>
        </button>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Medical Experts</h2>
            <p className="text-slate-600 mt-2">
              Connect with leading lung health specialists
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-slate-600 bg-white rounded-lg border border-slate-200 hover:border-blue-500 transition-colors">
              Filter
            </button>
            <button className="px-4 py-2 text-slate-600 bg-white rounded-lg border border-slate-200 hover:border-blue-500 transition-colors">
              Sort
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={`https://via.placeholder.com/96.png?text=${
                      doctor.name.split(" ")[1][0]
                    }`}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-xl object-cover bg-blue-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600">{doctor.specialty}</p>
                      <p className="text-slate-600 text-sm mt-1">
                        {doctor.experience}
                      </p>
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm mt-2">
                        {doctor.availability}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-slate-800 font-medium">
                        {doctor.rating}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Video className="w-4 h-4 mr-2" />
                      Video Call
                    </button>
                    <button className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </button>
                    <button className="flex items-center px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:border-blue-500 transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add a bottom CTA section */}
        <div className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-4">Can't find the right specialist?</h3>
          <p className="text-blue-100 mb-6">
            Our team can help match you with the perfect doctor for your specific needs.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Request Assistance
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
