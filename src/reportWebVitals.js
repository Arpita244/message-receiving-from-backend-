import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

// Example usage:
onCLS((metric) => {
  console.log('CLS:', metric);
});
onFCP((metric) => {
  console.log('FCP:', metric);
});
onFID((metric) => {
  console.log('FID:', metric);
});
onLCP((metric) => {
  console.log('LCP:', metric);
});
onTTFB((metric) => {
  console.log('TTFB:', metric);
});
