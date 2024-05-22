import { AddDataModal } from '../../../features';
import { TableWithData } from '../../../entities';
import { useState } from 'react';
import { Button } from '@mui/material';

export const TableData = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const AddDataButton = () => {
    return <Button onClick={() => setIsOpenModal(true)}>Добавить</Button>;
  };

  return (
    <>
      <TableWithData AddData={AddDataButton} />
      <AddDataModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
};
