import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProjeTypes } from '../../types'; // Mettez à jour le chemin vers votre fichier types

type DetailProjetProps = {
  projects: ProjeTypes[];
};

const DetailProjet: React.FC<DetailProjetProps> = ({ projects }) => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(proj => proj.id === parseInt(id || '', 10));

  if (!project) {
    return <Typography variant="h6">Projet introuvable</Typography>;
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      sx={{
        height: 'auto',
        minHeight: '50vh', // Minimum de 50% de la hauteur de l'écran
        '@media (min-width: 768px)': {
          height: '70vh', // Augmente la hauteur pour les écrans plus larges
        },
      }}
    >
      <Box
        flex="1 1 calc(50% - 16px)" // Prend 50% de la largeur moins l'espacement
        bgcolor="lightblue"
        p={2}
        sx={{ height: '100px', '@media (min-width: 768px)': { height: '200px' } }}
      >
        Column 1
      </Box>
      <Box
        flex="1 1 calc(50% - 16px)"
        bgcolor="lightgreen"
        p={2}
        sx={{ height: '100px', '@media (min-width: 768px)': { height: '200px' } }}
      >
        Column 2
      </Box>
      <Box
        flex="1 1 calc(100% - 16px)" // Prend toute la largeur sur les petits écrans
        bgcolor="lightcoral"
        p={2}
        sx={{ height: '150px', '@media (min-width: 768px)': { height: '300px' } }}
      >
        Full Width Row
      </Box>
    </Box>
    // <Box component="section" sx={{ p: 2, mt: 6 }}>
    //   <Card sx={{ width: '100%', borderRadius: '18px' }}>
    //     <CardMedia
    //       component="img"
    //       sx={{ width: '100%', height: 400, objectFit: 'cover' }}
    //       src={project.image}
    //       title={project.titre}
    //     />
    //     <CardContent>
    //       <Typography variant="h4" gutterBottom component="div">
    //         {project.titre}
    //       </Typography>
    //       <Typography variant="h6" gutterBottom component="div">
    //         {project.ville}, {project.quartier}
    //       </Typography>
    //       <Typography variant="body1" gutterBottom component="div">
    //         {project.description}
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </Box>
  );
};

export default DetailProjet;