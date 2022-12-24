import { ReactNode, useEffect } from 'react';
import { Route, Redirect, RouteProps  } from 'react-router-dom';
import { getUser } from '../services/actions/auth';
import { useThunkDispatch } from '../hooks/useThunkDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

const ProtectedPage = ({children, ...rest}: RouteProps & {children?: ReactNode}) => {

  const dispatch = useThunkDispatch();
  const { isAuth,isUserLoaded } = useAppSelector((state)=>({
    isAuth: state.auth.isAuth,
    isUserLoaded: state.auth.isUserLoaded
  }));

  useEffect(()=>{
    dispatch(getUser());
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
  <Route
    {...rest}
    render={({ location }) =>
      isAuth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location }
          }}
        />
      )
    }
  />
  )

}

export { ProtectedPage };
