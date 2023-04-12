import {
  Badge,
  Button,
  Checkbox,
  Input,
  Modal,
  Row,
  Text,
} from '@nextui-org/react';

import { useState } from 'react';
import { handleLogin } from '../../helpers/handleLogin';

export const LoginForm = ({ visible, closeHandler, setSignedIn }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const { email, password } = credentials;
    try {
      const resp = await handleLogin(email, password);
      localStorage.setItem('userData', JSON.stringify(resp));
      setSignedIn(true);
      location.href = '/tickets';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to TicketAPP
        </Text>
      </Modal.Header>
      <Modal.Body css={{ height: 'fit-content' }}>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          aria-labelledby="Email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />

        <Input.Password
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          aria-labelledby="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        {formError && <Badge color="warning">{formError}</Badge>}
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={handleSubmit}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
