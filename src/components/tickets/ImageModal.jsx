import { Badge, Button, Grid, Image, Modal, Text } from '@nextui-org/react';
import dayjs from 'dayjs';
import React from 'react';

export const ImageModal = ({ visible, closeHandler, imageUrl }) => {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      blur
      width="80vh"
    >
      <Modal.Header></Modal.Header>
      <Modal.Body css={{ height: 'fit-content' }}>
        <Image showSkeleton src={imageUrl} width={400} height={490} />
      </Modal.Body>
      <Modal.Footer justify="flex-end">
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
