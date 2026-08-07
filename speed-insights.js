/**
 * Vercel Speed Insights Integration
 * This script initializes Vercel Speed Insights for tracking web vitals and performance metrics
 * 
 * This uses the recommended script injection method for static sites
 * Documentation: https://vercel.com/docs/speed-insights/quickstart
 */

(function() {
  // Initialize the Speed Insights queue
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
  
  // Create and inject the Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  // Append the script to the document head
  var firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
})();
