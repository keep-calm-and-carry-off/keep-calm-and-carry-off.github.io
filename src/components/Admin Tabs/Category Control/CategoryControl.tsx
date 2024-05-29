import React, { FC, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategoriesRequest, getCategories } from '../../../stores/sagaStore/slices/products';
import { ICategory } from '../../../api/types';
import ButtonOtus from '../../ButtonOtus';

export const CategoryControl: FC = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(getCategories);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const linkCreate = `?showModal=true&content=createCategory`;

  useEffect(() => {
    if (selectedCategories.length === 0) {
      dispatch(fetchCategoriesRequest());
    }
  }, [dispatch, selectedCategories]);

  useEffect(() => {
    setCategories(selectedCategories);
  }, [selectedCategories]);

  return (
    <div>
      <Typography variant="h6">Список доступных категорий</Typography>
      <Link to={linkCreate}>
        <ButtonOtus>Создать новую категорию</ButtonOtus>
      </Link>
      {categories.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Наименование</TableCell>
                <TableCell align="right">Изображение</TableCell>
                <TableCell align="right">Создано</TableCell>
                <TableCell align="right">Изменено</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row: ICategory) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right" style={{ width: '10%' }}>
                    {row.photo ? <img src={row.photo} alt={row.name} style={{ width: '100%' }} /> : null}
                  </TableCell>
                  <TableCell align="right">{new Date(row.createdAt).toDateString()}</TableCell>
                  <TableCell align="right">{new Date(row.updatedAt).toDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
