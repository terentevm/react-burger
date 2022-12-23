import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect  } from 'react-router-dom';
import { getUser } from '../services/actions/auth';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from "../services/reducers";
import { Props } from './types';

const ProtectedPage = ({children, ...rest}: Props) => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, any>>();
  const { isAuth,isUserLoaded } = useSelector((state: RootState)=>({
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
