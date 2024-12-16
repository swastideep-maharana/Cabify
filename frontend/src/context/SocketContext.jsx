import React, { createContext, useEffect } from "react";
import { io } from "socket.io-client";

// Create context
export const SocketContext = createContext();

// Initialize socket connection
const socket = io(`${import.meta.env.VITE_BASE_URL}`); // Ensure VITE_BASE_URL is defined in .env

const SocketProvider = ({ children }) => {
  useEffect(() => {
    // Handle connection and disconnection events
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect(); // Clean up on unmount
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
