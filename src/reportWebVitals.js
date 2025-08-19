const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const wrap = (metric) => {
        console.log(`[WebVital] ${metric.name}: ${metric.value.toFixed(2)} (${metric.id})`);
        onPerfEntry(metric);
      };
      getCLS(wrap);
      getFID(wrap);
      getFCP(wrap);
      getLCP(wrap);
      getTTFB(wrap);
    });
  }
};

export default reportWebVitals;
