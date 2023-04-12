import {
  Badge,
  Button,
  Checkbox,
  Grid,
  Input,
  Modal,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react';
import { useState } from 'react';
import { handleRegister } from '../../helpers/handleRegister';

export const SignUpForm = ({ visible, closeHandler }) => {
  const [formError, setFormError] = useState('');

  const [formData, setformData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    fullName: '',
  });

  const [helperPassword, setHelperPassword] = useState({
    password: {
      text: 'Must contain uppercase, lowercase and numbers',
      color: 'default',
    },
    repeatPassword: {
      text: 'Must contain uppercase, lowercase and numbers',
      color: 'default',
    },
  });

  const handleChange = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
  };

  const validatePassword = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
    const password = event.target.value;
    const isValid = password.match(
      /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    );
    if (!isValid) {
      setHelperPassword({
        ...helperPassword,
        [event.target.name]: {
          text: 'Weak password...',
          color: 'warning',
        },
      });
    } else {
      setHelperPassword({
        ...helperPassword,
        [event.target.name]: {
          text: `That's a strong password 💪 `,
          color: 'success',
        },
      });
    }
  };

  const checkBothPasswords = () => {
    const { password, repeatPassword } = formData;
    if (password !== repeatPassword) {
      setHelperPassword({
        ...helperPassword,
        repeatPassword: {
          text: 'Passwords do not match, try again',
          color: 'error',
        },
      });

      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async () => {
    if (checkBothPasswords()) {
      const { email, password, fullName } = formData;
      const resp = await handleRegister(email, password, fullName);
      console.log(resp);
      if (resp?.statusCode === 400) {
        setFormError(resp.message);
      } else {
        setFormError('');
      }
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
          TicketApp - Register
        </Text>
      </Modal.Header>
      <Modal.Body css={{ height: 'fit-content', justifyContent: 'center' }}>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Full name"
          aria-labelledby="Email"
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          aria-labelledby="Email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <Input.Password
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          aria-labelledby="Password"
          type="password"
          value={formData.password}
          onChange={validatePassword}
          name="password"
          helperText={helperPassword.password.text}
          helperColor={helperPassword.password.color}
        />
        <Spacer y={0.2} />
        <Input.Password
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Repeat password"
          aria-labelledby="Password"
          type="password"
          value={formData.repeatPassword}
          name="repeatPassword"
          helperText={helperPassword.repeatPassword.text}
          helperColor={helperPassword.repeatPassword.color}
          onChange={validatePassword}
        />
        <Spacer y={0.2} />

        {formError && <Badge color="warning">{formError}</Badge>}
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={handleSubmit}>
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
