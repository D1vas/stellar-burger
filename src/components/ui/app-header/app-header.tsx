import React, { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
  const navigationClasses = 'text text_type_main-default ml-2 mr-10';
  const profileClasses = 'text text_type_main-default ml-2';

  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          <>
            <BurgerIcon type={'primary'} />
            <NavLink
              to='/'
              className={({ isActive }) => {
                const linkClass = isActive ? styles.link_active : styles.link;
                return linkClass + ' ' + navigationClasses;
              }}
            >
              Конструктор
            </NavLink>
          </>
          <>
            <ListIcon type={'primary'} />
            <NavLink
              to='/feed'
              className={({ isActive }) => {
                const linkClass = isActive ? styles.link_active : styles.link;
                return linkClass + ' ' + navigationClasses;
              }}
            >
              Лента заказов
            </NavLink>
          </>
        </div>
        <div className={styles.logo}>
          <Logo className='' />
        </div>
        <div className={styles.link_position_last}>
          <ProfileIcon type={'primary'} />
          <NavLink
            to='/profile'
            className={({ isActive }) => {
              const linkClass = isActive ? styles.link_active : styles.link;
              return linkClass + ' ' + profileClasses;
            }}
          >
            {userName || 'Личный кабинет'}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
