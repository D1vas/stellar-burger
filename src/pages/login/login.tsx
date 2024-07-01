import { FC, SyntheticEvent, useState } from 'react';
import { LoginUI } from '@ui-pages';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from '@store';
import { login } from '@slices';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { from } = location.state || { from: { pathname: '/' } };
  const { loginError } = useSelector((state) => state.user);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await dispatch(login({ email, password })).unwrap();

      navigate(from.pathname, { replace: true });
    } catch (_) {}
  };

  return (
    <LoginUI
      errorText=''
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
