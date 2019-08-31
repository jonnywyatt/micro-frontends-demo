
export const loadScript = ({ scriptUrl }) => {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.onload = () => resolve();
      document.head.appendChild(script);
    } catch (err) {
      reject(err);
    }
  });
};
