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
    <Box component="section" sx={{ p: 2, mt: 6 }}>
      <Card sx={{ width: '100%', borderRadius: '18px' }}>
        <CardMedia
          component="img"
          sx={{ width: '100%', height: 400, objectFit: 'cover' }}
          src={project.image}
          title={project.titre}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom component="div">
            {project.titre}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {project.ville}, {project.quartier}
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            {project.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailProjet;
