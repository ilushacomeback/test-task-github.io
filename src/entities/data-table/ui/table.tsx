import React from 'react';
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Table as BoxTable,
  Paper,
  TableCell,
} from '@mui/material';
import { useGetDataQuery } from '../api';
import { useAppSelector } from '../../../app/hooks';

interface Props {
  AddData: React.ComponentType;
}

export interface DataTable {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}

export const TableWithData = ({ AddData }: Props) => {
  const { data: response } = useGetDataQuery(undefined);
  const data = useAppSelector((state) => state.dataReducer.data);

  const namesRows = [
    'companySigDate',
    'companySignatureName',
    'documentName',
    'documentStatus',
    'documentType',
    'employeeNumber',
    'employeeSigDate',
    'employeeSignatureName',
  ];

  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: '64px' }}>
        <BoxTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {namesRows.map((name) => (
                <TableCell align="left" key={name}>
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {response &&
              data.map((item: DataTable) => (
                <TableRow key={item.companySigDate}>
                  <TableCell align="left">{item.companySigDate}</TableCell>
                  <TableCell align="left">
                    {item.companySignatureName}
                  </TableCell>
                  <TableCell align="left">{item.documentName}</TableCell>
                  <TableCell align="left">{item.documentStatus}</TableCell>
                  <TableCell align="left">{item.documentType}</TableCell>
                  <TableCell align="left">{item.employeeNumber}</TableCell>
                  <TableCell align="left">{item.employeeSigDate}</TableCell>
                  <TableCell align="left">
                    {item.employeeSignatureName}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </BoxTable>
      </TableContainer>
      <AddData />
    </>
  );
};
