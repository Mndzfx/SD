import React from 'react';

const DownloadsPage = () => {
  // Data download simulasi
  const downloads = [
    { id: 1, name: 'Fluxo_Installer_v1.0.exe', size: '25.3 MB', status: 'Selesai', progress: 100, icon: 'fas fa-file-download', date: '2024-05-30' },
    { id: 2, name: 'Web3_Security_Guide.pdf', size: '5.8 MB', status: 'Selesai', progress: 100, icon: 'fas fa-file-pdf', date: '2024-05-28' },
    { id: 3, name: 'Fluxo_Browser_Update.zip', size: '12.1 MB', status: 'Selesai', progress: 100, icon: 'fas fa-file-archive', date: '2024-05-25' },
    { id: 4, name: 'Latest_Crypto_Report.pdf', size: '15.0 MB', status: 'Gagal', progress: 0, icon: 'fas fa-file-pdf', date: '2024-05-22' },
    { id: 5, name: 'Image_Pack.zip', size: '30.5 MB', status: 'Selesai', progress: 100, icon: 'fas fa-file-image', date: '2024-05-20' },
  ];

  return (
    <div className="flex-grow mx-4 mt-4 overflow-y-auto custom-scrollbar">
      <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Unduhan</h2>

        {downloads.length > 0 ? (
          <div className="space-y-4">
            {downloads.map(file => (
              <div key={file.id} className="flex items-center p-3 bg-gray-800 rounded-lg shadow-sm">
                <i className={`${file.icon} text-2xl mr-4`} style={{ color: '#59e094' }}></i>
                <div className="flex-grow">
                  <p className="text-white font-medium">{file.name}</p>
                  <p className="text-gray-400 text-sm">{file.size} - {file.status}</p>
                  {file.status === 'Sedang Berjalan' && (
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: `${file.progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                <button className="ml-4 text-gray-400 hover:text-white">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center py-10">Tidak ada unduhan.</p>
        )}
      </div>
    </div>
  );
};

export default DownloadsPage;