import React from 'react';
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Table as BoxTable,
  Paper,
  TableCell,
  Button,
} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useGetDataQuery } from '../api';
import { useAppSelector } from '../../../app/hooks';
import _ from 'lodash'

interface Props {
  AddData: React.ComponentType;
}

export interface DataTable {
  [index: string]: string;
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id: string;
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
                <TableRow key={item.id}>
                  {namesRows.map((name) => (
                    <TableCell
                      size="medium"
                      align="left"
                      key={_.uniqueId()}
                    >
                      {item[name]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </BoxTable>
      </TableContainer>
      <AddData />
    </>
  );
};


  /* <>
<TableRow key={item.companySigDate}>
  <TableCell size="medium" align="left">
    {item.companySigDate}
  </TableCell>
  <TableCell size="medium" align="left">
    {item.companySignatureName}
  </TableCell>
  <TableCell size="medium" align="left">
    {item.documentName}
  </TableCell>
  <TableCell size="medium" align="left">
    {item.documentStatus}
  </TableCell>
  <TableCell size="medium" align="left">
    {item.documentType}
  </TableCell>
  <TableCell size="medium" align="left">
    {item.employeeNumber}
  </TableCell>
  <TableCell size="medium" align="left">
    {item.employeeSigDate}
  </TableCell>
  <TableCell
    size="medium"
    align="left"
    sx={{ position: 'relative' }}
  >
    {item.employeeSignatureName}
  </TableCell>
</TableRow>
</> */

