const STORAGE_KEY = 'lastVisitTime';
const TEN_MINUTES = 10 * 60 * 1000; // 10 minutes in milliseconds

export const shouldShowLoading = () => {
//   const lastVisit = localStorage.getItem(STORAGE_KEY);
  
//   if (!lastVisit) {
//     return true; // First visit
//   }
  
//   const timeDiff = Date.now() - parseInt(lastVisit);
//   return timeDiff > TEN_MINUTES;
return true;
};

export const setLastVisit = () => {
  localStorage.setItem(STORAGE_KEY, Date.now().toString());
};
