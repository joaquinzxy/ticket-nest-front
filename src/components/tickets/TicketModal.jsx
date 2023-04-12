import { Badge, Button, Grid, Modal, Text } from '@nextui-org/react';
import dayjs from 'dayjs';
import React from 'react';
import { EditSquare } from 'react-iconly';

export const TicketModal = ({ visible, closeHandler, content }) => {
  const {
    title = '',
    ticketNumber = '',
    issue = '',
    category = '',
    isClosed = '',
    createdAt = '',
    user = {
      user: '',
      fullName: '',
    },
  } = content;
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      blur
      width="80vh"
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Badge color={'primary'}>#{ticketNumber}</Badge> | {title}
        </Text>
      </Modal.Header>
      <Modal.Body css={{ height: 'fit-content' }}>
        <Grid.Container gap={1}>
          <Grid xs={4} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              Date:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              {dayjs(new Date(createdAt)).format('DD/MM/YYYY')}
            </Text>
          </Grid>
          <Grid xs={4} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              Category:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              {category.toUpperCase()}
            </Text>
          </Grid>
          <Grid xs={4} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              Status:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              {isClosed ? 'CLOSED' : 'OPEN'}
            </Text>
          </Grid>
          <Grid xs={12} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              Description:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              {issue}
            </Text>
          </Grid>
          <Grid xs={4} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              #Order:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              A675
            </Text>
          </Grid>
          <Grid xs={4} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              Product code:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              3453
            </Text>
          </Grid>
          <Grid xs={4} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              Order date:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              12/12/23
            </Text>
          </Grid>
          <Grid xs={5} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              User full name:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              {user.fullName}
            </Text>
          </Grid>
          <Grid xs={7} direction="column">
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              css={{ marginBottom: '0' }}
            >
              User email:
            </Text>
            <Text blockquote css={{ marginTop: '5px' }}>
              {user.email}
            </Text>
          </Grid>
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer justify="space-between">
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto icon={<EditSquare set="light" primaryColor="white" />}>
          Modify
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
