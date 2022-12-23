import { useEffect, PropsWithChildren } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, useLocation, useHistory  } from 'react-router-dom';
import { getUser } from '../services/actions/auth';
import { LocationState } from '../types';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from "../services/reducers";
import { Props } from './types';

const NonAuthPage = ({children, ...rest} : Props) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, any>>();

  const state = location.state as LocationState;
  const { isAuth,isUserLoaded } = useSelector((state: RootState)=>({
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
