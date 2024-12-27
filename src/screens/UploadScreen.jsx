import React from 'react';
import { ChevronRight, Upload } from 'lucide-react';

const UploadScreen = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center text-slate-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span className="ml-1">Back to Dashboard</span>
        </button>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Upload Lung Scan</h2>
          
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center">
            <div className="max-w-sm mx-auto">
              <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Drop your files here</h3>
              <p className="text-slate-600 text-sm mb-4">
                Support for DICOM, X-ray images, and CT scans
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Select Files
                </button>
                <p className="text-sm text-slate-500">
                  Maximum file size: 50MB
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-slate-800 mb-2">Supported File Types</h4>
            <div className="flex flex-wrap gap-2">
              {['DICOM', 'JPG', 'PNG', 'TIFF'].map((type) => (
                <span key={type} className="px-3 py-1 bg-white rounded-full text-sm text-slate-600">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadScreen;