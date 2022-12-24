import { useEffect, ReactNode } from 'react';
import { Route, Redirect, useLocation, useHistory, RouteProps  } from 'react-router-dom';
import { getUser } from '../services/actions/auth';
import { LocationState } from '../types';
import { useAppSelector } from '../hooks/useAppSelector';
import { useThunkDispatch } from '../hooks/useThunkDispatch';

const NonAuthPage = ({children, ...rest}: RouteProps & {children?: ReactNode}) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useThunkDispatch();

  const state = location.state as LocationState;
  const { isAuth,isUserLoaded } = useAppSelector((state)=>({
    isAuth: state.auth.isAuth,
    isUserLoaded: state.auth.isUserLoaded
  }));

  useEffect(()=>{
    dispatch(getUser());
  }, []);

   useEffect(()=>{
    if (isAuth) {

      const target = state?.from?.pathname || '/';
      history.push(target);
    }
  }, [isAuth])

  if (!isUserLoaded) {
    return null;
  }

  return (
  <Route
    {...rest}
    render={({ location }) =>
      !isAuth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: state?.from?.pathname || '/'
          }}
        />
      )
    }
  />
  )

}

export { NonAuthPage };
