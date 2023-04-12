import React, { useState } from 'react';
import { Ticket } from './Ticket';
import { Container, Grid } from '@nextui-org/react';
import { TicketModal } from './TicketModal';

export const TicketGrid = ({ tickets = [] }) => {
  const [modalData, setModalData] = useState({
    content: {},
    visible: false,
  });

  const closeModalHandler = () => {
    setModalData({
      ...modalData,
      visible: false,
    });
  };

  return (
    <>
      <Grid.Container gap={2} justify="center">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} setModalData={setModalData} />
        ))}
      </Grid.Container>
      <TicketModal
        content={modalData.content}
        visible={modalData.visible}
        closeHandler={closeModalHandler}
      />
    </>
  );
};
