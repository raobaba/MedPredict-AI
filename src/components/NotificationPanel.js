"use client";
import { useState, useEffect } from "react";
import { useNotifications } from "./NotificationContext";
import { useAuth } from "./AuthContext";

export default function NotificationPanel() {
  const { user } = useAuth();
  const {
    notifications,
    healthTip,
    showNotificationPanel,
    setShowNotificationPanel,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAllNotifications,
    dismissHealthTip,
    getUnreadCount,
    getNotificationIcon,
    getPriorityColor
  } = useNotifications();

  const [isVisible, setIsVisible] = useState(false);

  // Show notification panel when there are unread notifications
  useEffect(() => {
    if (getUnreadCount() > 0 || healthTip) {
      setIsVisible(true);
    }
  }, [getUnreadCount, healthTip]);

  // Auto-hide health tip after 10 seconds
  useEffect(() => {
    if (healthTip) {
      const timer = setTimeout(() => {
        dismissHealthTip();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [healthTip, dismissHealthTip]);

  if (!user || (!isVisible && !showNotificationPanel)) {
    return null;
  }

  const unreadCount = getUnreadCount();

  return (
    <>
      {/* Notification Bell - Fixed Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowNotificationPanel(!showNotificationPanel)}
          className="relative p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5a15 15 0 01-1.44-7.5 15 15 0 011.44-7.5M4.5 19.5L9 15l-4.5-4.5M4.5 19.5L12 12l-7.5-7.5" />
          </svg>
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </div>
          )}
        </button>
      </div>

      {/* Health Tip Toast - Bottom Right */}
      {healthTip && (
        <div className="fixed bottom-20 right-6 z-50 max-w-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-slide-up">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                {getNotificationIcon(healthTip.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {healthTip.title}
                    {healthTip.isAI && (
                      <span className="ml-2 px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full">
                        AI
                      </span>
                    )}
                  </h4>
                  <button
                    onClick={dismissHealthTip}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {healthTip.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  {healthTip.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Panel - Bottom Right */}
      {showNotificationPanel && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-h-96">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col max-h-96">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Notifications
                  {unreadCount > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {unreadCount}
                    </span>
                  )}
                </h3>
                <div className="flex gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setShowNotificationPanel(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto min-h-0">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5a15 15 0 01-1.44-7.5 15 15 0 011.44-7.5M4.5 19.5L9 15l-4.5-4.5M4.5 19.5L12 12l-7.5-7.5" />
                  </svg>
                  <p>No notifications</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-l-4 ${getPriorityColor(notification.priority)} ${
                        !notification.read ? 'bg-opacity-100' : 'bg-opacity-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-sm font-medium ${
                              !notification.read 
                                ? 'text-gray-900 dark:text-white' 
                                : 'text-gray-600 dark:text-gray-400'
                            }`}>
                              {notification.title}
                            </h4>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 dark:text-gray-500">
                                {notification.timestamp.toLocaleTimeString()}
                              </span>
                              <button
                                onClick={() => removeNotification(notification.id)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <p className={`text-sm mt-1 ${
                            !notification.read 
                              ? 'text-gray-700 dark:text-gray-300' 
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {notification.message}
                          </p>
                          {notification.action && (
                            <div className="mt-2">
                              <button
                                onClick={() => {
                                  markAsRead(notification.id);
                                  // Handle action based on type
                                  console.log(`Action: ${notification.action}`);
                                }}
                                className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-900/70"
                              >
                                {notification.action === 'mark_taken' ? 'Mark as Taken' : 'View Details'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                <button
                  onClick={clearAllNotifications}
                  className="w-full text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Clear all notifications
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
