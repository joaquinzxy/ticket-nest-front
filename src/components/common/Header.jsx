import { Button, Input, Modal, Navbar, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';
import { Context } from '../../App';
import { SearchIcon } from '../../assets/searchIcon';

export const Header = ({ activePage = '' }) => {
  const [signedIn, setSignedIn] = useContext(Context);
  const [loginVisible, setLoginVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const handlerLogin = () => setLoginVisible(true);
  const handlerSignUp = () => setSignUpVisible(true);
  const handlerLogout = () => {
    localStorage.clear();
    location.reload();
  };

  const closeHandler = () => {
    setLoginVisible(false);
    setSignUpVisible(false);
  };

  const routes = [
    {
      pageName: 'Home',
      path: '/',
    },
    {
      pageName: 'Tickets',
      path: '/tickets',
    },
    {
      pageName: 'Users',
      path: '/users',
    },
    {
      pageName: 'Profile',
      path: '/my-profile',
    },
  ];

  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            TicketsApp
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant={'underline'}>
          {routes.map((page) => (
            <Navbar.Link
              href={page.path}
              isActive={activePage === page.pageName}
              key={page.pageName}
            >
              {page.pageName}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        {!signedIn ? (
          <Navbar.Content>
            <Navbar.Item>
              <Button auto as={Link} onPress={handlerLogin}>
                Login
              </Button>
            </Navbar.Item>

            <Navbar.Item>
              <Button auto flat as={Link} onPress={handlerSignUp}>
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        ) : (
          <Navbar.Content>
            <Navbar.Item>
              <Button auto flat as={Link} onPress={handlerLogout}>
                Logout
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        )}
      </Navbar>
      <LoginForm
        visible={loginVisible}
        closeHandler={closeHandler}
        setSignedIn={setSignedIn}
      />
      <SignUpForm visible={signUpVisible} closeHandler={closeHandler} />
    </>
  );
};
