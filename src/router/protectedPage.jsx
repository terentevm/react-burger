import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect  } from 'react-router-dom';
import { getUser } from '../services/actions/auth';
const ProtectedPage = ({children, ...rest}) => {

  const dispatch = useDispatch();
  const { isAuth,isUserLoaded } = useSelector(state=>({
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
