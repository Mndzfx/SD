import React from 'react';

const TabBar = ({ tabs, activeTabId, switchTab, closeTab, addNewTab }) => {
  return (
    <div className="px-4 pb-2" style={{ backgroundColor: '#002631' }}>
      <div
        className="flex items-center space-x-2 overflow-x-auto pb-2 tab-container"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .tab-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`relative flex items-center space-x-2 px-3 py-2 rounded-t-lg cursor-pointer transition-all duration-200 min-w-[120px] max-w-[180px] ${
                tab.id === activeTabId
                  ? 'bg-gray-800 border-b-2'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              style={{
                borderBottomColor: tab.id === activeTabId ? '#59e094' : 'transparent'
              }}
            >
              <i className={`${tab.favicon} text-xs text-gray-400`}></i>
              <span className="text-xs text-white truncate flex-grow">
                {tab.title}
              </span>
              {tabs.length > 1 && (
                <button
                  onClick={(e) => closeTab(tab.id, e)}
                  className="ml-1 w-4 h-4 rounded-full hover:bg-gray-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-times text-xs"></i>
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={addNewTab}
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-700 transition-colors"
          style={{ color: '#59e094' }}
          title="Tab Baru"
        >
          <i className="fas fa-plus text-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default TabBar;
