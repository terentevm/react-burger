import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect, useLocation, useHistory  } from 'react-router-dom';
import { getUser } from '../services/actions/auth';
const NonAuthPage = ({children, ...rest}) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuth,isUserLoaded } = useSelector(state=>({
    isAuth: state.auth.isAuth,
    isUserLoaded: state.auth.isUserLoaded
  }));

  useEffect(()=>{
    dispatch(getUser());
  }, []);

   useEffect(()=>{
    if (isAuth) {

      const target = location.state?.from?.pathname || '/';
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
            pathname: location.state?.from?.pathname || '/'
          }}
        />
      )
    }
  />
  )

}

export { NonAuthPage };
