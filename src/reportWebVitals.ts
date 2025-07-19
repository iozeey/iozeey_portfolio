// Simple web vitals reporting - compatible with web-vitals v5
const reportWebVitals = (onPerfEntry?: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitals) => {
      // Use the default export or available functions
      if (webVitals.onCLS) webVitals.onCLS(onPerfEntry);
      if (webVitals.onFCP) webVitals.onFCP(onPerfEntry);
      if (webVitals.onLCP) webVitals.onLCP(onPerfEntry);
      if (webVitals.onTTFB) webVitals.onTTFB(onPerfEntry);
      if (webVitals.onINP) webVitals.onINP(onPerfEntry);
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });
  }
};

export default reportWebVitals;
