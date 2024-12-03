import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, Pagination, TextField, InputAdornment } from '@mui/material';
import CACAO from '../../assets/img/cacao1.png';
import { ProjeTypes } from '../../types'; // Import de l'interface
import SearchIcon from '@mui/icons-material/Search';
const Projets = () => {
  const [data, setData] = useState<ProjeTypes[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:5000/projets')
      .then(response => response.json())
      .then((data: ProjeTypes[]) => {
        console.log("Données brutes récupérées : ", data); // Afficher les données brutes
        setData(data); // Les données sont directement un tableau de projets
      }).catch(error =>
        console.error('Erreur:', error));
  }, []);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => { if (event.key === 'Enter') { event.preventDefault(); } };
  const filteredData = data.filter(item =>
    item.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ville.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 4,
          alignItems: 'center',
          width: '100%',
          pr: 15
        }} >
        <TextField
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          placeholder="Chercher Ici..."
          sx={{
            width: 371,
            height: 47,
            borderRadius: '30px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px'
            },
            '& .MuiInputBase-root': {
              paddingRight: '16px'
            },
          }} InputProps=
          {{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>),
          }} variant="outlined" /> </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10
        }}>
        {paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <React.Fragment key={index}>
              <Card sx={{ width: 575, height: 349, m: 2, borderRadius: '18px' }}>
                <CardMedia
                  component="img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  image={CACAO}
                  title={item.titre}
                />
              </Card>
              <Card sx={{ width: 575, height: 349, m: 2, color: '#0F0B60' }}>
                <CardContent>
                  <Typography style={{ color: '#0F0B60', fontSize: '25px', fontWeight: '600' }} gutterBottom component="div">
                    {item.titre}
                  </Typography>
                  <Typography style={{ color: '#3A3A3A', fontSize: '17px', fontWeight: '300' }} gutterBottom component="div">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#8785BB', fontSize: '16px', fontWeight: '200' }}>
                    {item.ville}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ color: '#FFFFFF', backgroundColor: '#0E600B', fontSize: '17.71px', width: '125px', height: '45px' }} variant="outlined">
                    Plus
                  </Button>
                </CardActions>
              </Card>
            </React.Fragment>
          ))
        ) : (
          <Typography variant="h6" sx={{ color: 'red' }}>
            Aucune donnée disponible.
          </Typography>
        )}
      </Box>
      <Box sx={{ mt: 15 }}>
        <Pagination
          style={{
            display: 'flex',
            justifyContent: 'center',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent'
          }}
          sx={{ '& .Mui-selected': { backgroundColor: '#0F0B60 !important', color: '#FFFFFF', }, '& .MuiPaginationItem-page': { '&:hover': { backgroundColor: '#0F0B60', color: '#FFFFFF', }, }, }}
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          shape="rounded"

        />
      </Box>
    </Box>);
}

export default Projets;
