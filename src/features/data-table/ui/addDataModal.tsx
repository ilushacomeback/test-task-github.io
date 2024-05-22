import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { useAddDataMutation } from '../../../entities';
import React, { useState, Dispatch, SetStateAction } from 'react';
import { actions } from '../../../app/model';
import { useAppDispatch } from '../../../app/hooks';

interface Props {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const AddDataModal = ({ isOpenModal, setIsOpenModal }: Props) => {
  const dispatch = useAppDispatch()
  const [addData] = useAddDataMutation();
  const [companySignatureName, setCompanySignatureName] = useState<string>('');
  const [documentName, setDocumentName] = useState<string>('');
  const [documentStatus, setDocumentStatus] = useState<string>('');
  const [documentType, setDocumentType] = useState<string>('');
  const [employeeNumber, setEmployeeNumber] = useState<string>('');
  const [employeeSignatureName, setEmployeeSignatureName] =
    useState<string>('');

  const handleSetCompanySignatureName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCompanySignatureName(e.target.value);
  };
  const handleSetDocumentName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDocumentName(e.target.value);
  };
  const handleSetDocumentStatus = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDocumentStatus(e.target.value);
  };
  const handleSetDocumentType = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDocumentType(e.target.value);
  };
  const handleSetEmployeeNumber = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmployeeNumber(e.target.value);
  };
  const handleSetEmployeeSignatureName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmployeeSignatureName(e.target.value);
  };

  return (
    <Dialog
      open={isOpenModal}
      PaperProps={{
        component: 'form',
        onSubmit: async (e: React.FormEvent) => {
          e.preventDefault();
          const time = new Date().toISOString()
          const data = {
            companySigDate: time,
            companySignatureName,
            documentName,
            documentStatus,
            documentType,
            employeeNumber,
            employeeSigDate: time,
            employeeSignatureName,
          };
          const response = await addData(data);
          dispatch(actions.addData(response.data.data))
          setIsOpenModal(false)
        },
      }}
    >
      <DialogTitle>Добавить документ</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ marginTop: '10px' }}>
          <TextField
            type="text"
            autoFocus
            label="companySignatureName"
            value={companySignatureName}
            onChange={handleSetCompanySignatureName}
          />
          <TextField
            type="text"
            label="documentName"
            value={documentName}
            onChange={handleSetDocumentName}
          />
          <TextField
            type="text"
            label="documentStatus"
            value={documentStatus}
            onChange={handleSetDocumentStatus}
          />
          <TextField
            type="text"
            label="documentType"
            value={documentType}
            onChange={handleSetDocumentType}
          />
          <TextField
            type="text"
            label="employeeNumber"
            value={employeeNumber}
            onChange={handleSetEmployeeNumber}
          />
          <TextField
            type="text"
            label="employeeSignatureName"
            value={employeeSignatureName}
            onChange={handleSetEmployeeSignatureName}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpenModal(false)}>Отменить</Button>
        <Button type="submit">Отправить</Button>
      </DialogActions>
    </Dialog>
  );
};
