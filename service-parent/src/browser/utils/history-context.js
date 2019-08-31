export const pushToHistory = browserHistoryInstance => e => {
  const link = e.target;
  browserHistoryInstance.push(link.pathname);
  window.scrollTo(0, 0);
  e.preventDefault();
};
