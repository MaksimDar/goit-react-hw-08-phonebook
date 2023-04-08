import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getUserName,
  getIsRefreshing,
} from 'redux/auth/auth-selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
  const isRefreshing = useSelector(getIsRefreshing);

  return {
    isLoggedIn,
    userName,
    isRefreshing,
  };
};
