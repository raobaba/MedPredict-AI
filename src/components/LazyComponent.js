"use client";

import { Suspense, lazy } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

// Lazy load components with fallback
export const LazyVideoCall = lazy(() => import("./VideoCall"));
export const LazyVitalsMonitor = lazy(() => import("./VitalsMonitor"));
export const LazyNotificationPanel = lazy(() => import("./NotificationPanel"));

export function LazyWrapper({ children, fallback = <LoadingSkeleton /> }) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

// Higher-order component for lazy loading
export function withLazyLoading(Component, fallback = <LoadingSkeleton />) {
  return function LazyComponent(props) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    );
  };
}
