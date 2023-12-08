import { useContext } from 'react';
import { AuthContext, AuthContextProps } from '../context/authProvider';

const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext);

    const updateAuth = (newAuth: AuthContextProps['auth']) => {
        setAuth((prevAuth) => {
            return { ...prevAuth, ...newAuth };
        });
    };
  
    return { auth, updateAuth };
}

export default useAuth;
