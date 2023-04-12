import { Badge, Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import dayjs from 'dayjs';
import React from 'react';
import { ArrowRight } from 'react-iconly';

export const Ticket = ({ ticket, setModalData }) => {
  const handleViewMore = () => {
    setModalData({
      content: ticket,
      visible: true,
    });
  };

  return (
    <Grid sm={12} md={4} justify="center">
      <Card css={{ mw: '530px' }}>
        <Card.Header>
          <Text b>
            <Badge color={'primary'}>#{ticket.ticketNumber}</Badge> |{' '}
            {ticket.title}
          </Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: '$10' }}>
          <Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="space-between">
            <Col>
              <Badge color="secondary" variant={'flat'}>
                {ticket.category.toLocaleUpperCase()}
              </Badge>
              <Badge
                color={ticket.isClosed ? 'success' : 'warning'}
                variant={'flat'}
              >
                {ticket.isClosed ? 'CLOSED' : 'OPEN'}
              </Badge>
              <Badge color="primary" variant={'flat'}>
                {dayjs(new Date(ticket.createdAt)).format('DD/MM/YYYY')}
              </Badge>
            </Col>
            <Button
              size={'sm'}
              auto
              color={'primary'}
              onPress={handleViewMore}
              iconRight={<ArrowRight set="curved" primaryColor="white" />}
            >
              View more
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
