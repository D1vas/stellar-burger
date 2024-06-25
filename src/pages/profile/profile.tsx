<<<<<<< HEAD
import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';

export const Profile: FC = () => {
  /** TODO: взять переменную из стора */
  const user = {
    name: '',
    email: ''
  };

  const [formValue, setFormValue] = useState({
    name: user.name,
    email: user.email,
    password: ''
  });

  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState,
      name: user?.name || '',
      email: user?.email || ''
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;
=======
import { FC, SyntheticEvent } from 'react';

export const Profile: FC = () => {
  // const [formValue, setFormValue] = useState({
  //   name: user.name,
  //   email: user.email,
  //   password: ''
  // });

  // useEffect(() => {
  //   setFormValue((prevState) => ({
  //     ...prevState,
  //     name: user?.name || '',
  //     email: user?.email || ''
  //   }));
  // }, [user]);

  // const isFormChanged =
  //   formValue.name !== user?.name ||
  //   formValue.email !== user?.email ||
  //   !!formValue.password;
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    setFormValue({
      name: user.name,
      email: user.email,
      password: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={formValue}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );
=======
    // setFormValue({
    //   name: user.name,
    //   email: user.email,
    //   password: ''
    // });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormValue((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value
    // }));
  };

  // return (
  //   <ProfileUI
  //     formValue={formValue}
  //     isFormChanged={isFormChanged}
  //     handleCancel={handleCancel}
  //     handleSubmit={handleSubmit}
  //     handleInputChange={handleInputChange}
  //   />
  // );
>>>>>>> a54ca2fff2f821f840d691e8e4ed242be00ad31e

  return null;
};
