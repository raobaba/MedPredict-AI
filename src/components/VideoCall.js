"use client";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";

export default function VideoCall({ patient, onClose, onStartCall }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const localStreamRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const intervalRef = useRef(null);

  // Mock WebRTC implementation
  useEffect(() => {
    initializeCall();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      cleanup();
    };
  }, []);

  const initializeCall = async () => {
    try {
      // In a real implementation, this would:
      // 1. Get user media (camera/microphone)
      // 2. Create peer connection
      // 3. Set up signaling via Socket.io
      // 4. Handle ICE candidates and offer/answer exchange
      
      setConnectionStatus("Setting up camera...");
      
      // Simulate camera setup
      setTimeout(() => {
        setConnectionStatus("Connecting to patient...");
        
        // Simulate connection
        setTimeout(() => {
          setIsConnected(true);
          setConnectionStatus("Connected");
          startCallTimer();
        }, 2000);
      }, 1000);
      
    } catch (error) {
      console.error("Error initializing call:", error);
      setConnectionStatus("Connection failed");
    }
  };

  const startCallTimer = () => {
    intervalRef.current = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // In real implementation: localStreamRef.current.getAudioTracks()[0].enabled = !isMuted;
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    // In real implementation: localStreamRef.current.getVideoTracks()[0].enabled = !isVideoOn;
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    // In real implementation: would use getDisplayMedia()
  };

  const endCall = () => {
    cleanup();
    onClose();
  };

  const cleanup = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (peerConnectionRef.current) {
      peerConnectionRef.current.close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col z-50">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              {patient?.name?.split(' ').map(n => n[0]).join('') || 'P'}
            </span>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              Video Call - {patient?.name || 'Patient'}
            </h3>
            <p className="text-gray-300 text-sm">
              {isConnected ? `Connected • ${formatTime(callDuration)}` : connectionStatus}
            </p>
          </div>
        </div>
        <button
          onClick={endCall}
          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Video Area */}
      <div className="flex-1 relative bg-gray-900">
        {/* Remote Video (Patient) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-xl mb-2">{patient?.name || 'Patient'}</p>
              <p className="text-gray-400">
                {isConnected ? 'Connected' : 'Waiting for patient to join...'}
              </p>
            </div>
          </div>
        </div>

        {/* Local Video (Doctor) - Picture in Picture */}
        <div className="absolute top-4 right-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden border-2 border-white">
          <div className="w-full h-full bg-gray-600 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-sm font-bold">Dr</span>
              </div>
              <p className="text-xs">You</p>
            </div>
          </div>
        </div>

        {/* Connection Status Overlay */}
        {!isConnected && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mb-4 mx-auto"></div>
              <p className="text-lg">{connectionStatus}</p>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-gray-800 p-6">
        <div className="flex items-center justify-center gap-4">
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className={`p-4 rounded-full transition-colors ${
              isMuted 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-gray-600 hover:bg-gray-500 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMuted ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              )}
            </svg>
          </button>

          {/* Video Toggle */}
          <button
            onClick={toggleVideo}
            className={`p-4 rounded-full transition-colors ${
              !isVideoOn 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-gray-600 hover:bg-gray-500 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isVideoOn ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              )}
            </svg>
          </button>

          {/* Screen Share */}
          <button
            onClick={toggleScreenShare}
            className={`p-4 rounded-full transition-colors ${
              isScreenSharing 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-600 hover:bg-gray-500 text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>

          {/* End Call */}
          <button
            onClick={endCall}
            className="p-4 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 3l6 6m0 0l4 4 7-7M9 9l4 4m0 0l4 4" />
            </svg>
          </button>
        </div>

        {/* Additional Controls */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="text-white text-sm">
            Call Duration: {formatTime(callDuration)}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-gray-300">
              {isConnected ? 'Connected' : 'Connecting...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
