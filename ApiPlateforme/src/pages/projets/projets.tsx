import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, Pagination, TextField, InputAdornment } from '@mui/material';
import { ProjeTypes } from '../../types'; // Import de l'interface
import SearchIcon from '@mui/icons-material/Search';
import CACAO from '../../assets/img/cacao4.png';
import CACAO1 from '../../assets/img/solaire1.webp';
import ARTISAN from '../../assets/img/eartisans.jpg';
import TOURISTE from '../../assets/img/touriste.jpg';
import USINECACAO from '../../assets/img/usinecacao.jpg';
import AUTOROUTE from '../../assets/img/autoroute.jpg';
import CAFE from '../../assets/img/café.jpg';
import EOLIEN from '../../assets/img/eolien.jpg';
import STARTUP from '../../assets/img/startup1.jpg';


// Données statiques avec champs d'image
const staticData: ProjeTypes[] = [
  {
    id: 1,
    secteur: "Agriculture",
    titre: "Mise sur pied d'une Plantation de cacao",
    ville: "Douala",
    quartier: "Akwa",
    description: "Ce projet consiste en la création d'une Plantation de cacao dédiée à la culture de caocao en masse. L'objectif est de répondre à la demande croissante en produits locaux et durables dans le pays. L'infrastructure sera équipée des dernières technologies agricoles.",
    image: CACAO
  },
  {
    id: 2,
    secteur: "Energie",
    titre: "Centrale solaire de Bafoussam",
    ville: "Bafoussam",
    quartier: "Centre-Ville",
    description: "La centrale solaire de Bafoussam est un projet visant à fournir de l'énergie propre et renouvelable à la ville et ses environs. Elle permettra de réduire la dépendance aux sources d'énergie polluantes. Ce projet fait partie d'une initiative nationale pour développer les énergies renouvelables.",
    image: CACAO1
  },
  {
    id: 3,
    secteur: "TIC",
    titre: "Plateforme de e-commerce pour artisans",
    ville: "Yaoundé",
    quartier: "Messa",
    description: "Ce projet développe une plateforme en ligne permettant aux artisans locaux de vendre leurs produits à une audience nationale et internationale. L'objectif est de promouvoir l'artisanat camerounais tout en offrant aux artisans une visibilité accrue. La plateforme inclut aussi des options de formation en ligne.",
    image: ARTISAN
    },
  {
    id: 4,
    secteur: "Tourisme",
    titre: "Resort écologique à Kribi",
    ville: "Kribi",
    quartier: "Plage",
    description: "Un complexe touristique éco-responsable à Kribi, destiné à offrir une expérience de vacances immersive en harmonie avec la nature. Le projet vise à attirer des touristes locaux et étrangers tout en préservant l'environnement. Ce resort proposera des bungalows, des activités nautiques et des randonnées.",
    image: TOURISTE
    },
  {
    id: 5,
    secteur: "Industrie",
    titre: "Usine de transformation de cacao",
    ville: "Bamenda",
    quartier: "Bamenda Centre",
    description: "Le projet consiste en la création d'une usine moderne de transformation de cacao, afin d'augmenter la valeur ajoutée du cacao camerounais. L'usine produira du chocolat et des dérivés pour le marché local et international. Cela contribuera à créer des emplois et à dynamiser l'économie régionale.",
    image: USINECACAO
    },
  {
    id: 6,
    secteur: "Infrastructures",
    titre: "Construction d'une autoroute Douala-Yaoundé",
    ville: "Douala",
    quartier: "Bonanjo",
    description: "Le projet de construction d'une autoroute reliant Douala à Yaoundé vise à améliorer la connectivité entre les deux plus grandes villes du Cameroun. Cette infrastructure permettra de réduire le temps de trajet et de stimuler le commerce et le tourisme. Le projet inclut des bretelles et des zones de repos.",
    image: AUTOROUTE
    },
  {
    id: 7,
    secteur: "Agriculture",
    titre: "Plantation de café à l'ouest",
    ville: "Dschang",
    quartier: "Village voisin",
    description: "Ce projet consiste en la création d'une grande plantation de café biologique dans la région de l'Ouest. L'objectif est de produire un café haut de gamme destiné aux marchés nationaux et internationaux. Le projet comprendra également un centre de formation pour les agriculteurs locaux.",
    image: CAFE
    },
  {
    id: 8,
    secteur: "Energie",
    titre: "Parc éolien de Maroua",
    ville: "Maroua",
    quartier: "Extrême-Nord",
    description: "Le parc éolien de Maroua est un projet destiné à produire de l'électricité à partir de l'énergie éolienne. Ce projet permettra de diversifier les sources d'énergie et d'améliorer la couverture énergétique dans la région de l'Extrême-Nord. Il comprend également des infrastructures pour la formation des techniciens locaux.",
    image: EOLIEN
    },
  {
    id: 9,
    secteur: "TIC",
    titre: "Start-up de développement d'applications mobiles",
    ville: "Yaoundé",
    quartier: "Bastos",
    description: "Cette start-up se spécialise dans le développement d'applications mobiles adaptées aux besoins des utilisateurs camerounais. L'objectif est de rendre les services numériques accessibles à tous et de créer des solutions innovantes dans les secteurs de l'éducation, de la santé et de l'administration.",
    image: STARTUP
    }
];


const Projets = () => {
  const [data, setData] = useState<ProjeTypes[]>(staticData);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => { setSearchTerm(event.target.value); }; const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { if (event.key === 'Enter') { event.preventDefault(); } }; const filteredData = data.filter(item => item.titre.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()) || item.ville.toLowerCase().includes(searchTerm.toLowerCase()) ); const paginatedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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
        }}>
        <TextField value={searchTerm} onChange={handleSearchChange} onKeyDown={handleKeyDown} placeholder="Chercher Ici..." sx={{ width: 371, height: 47, borderRadius: '30px', '& .MuiOutlinedInput-root': { borderRadius: '30px' }, '& .MuiInputBase-root': { paddingRight: '16px' }, }} InputProps={{ startAdornment: ( <InputAdornment position="start"> <SearchIcon /> </InputAdornment> ), }} variant="outlined" />
      </Box>
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
                  src={item.image}
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
          sx={{
            '& .Mui-selected': {
              backgroundColor: '#0F0B60 !important',
              color: '#FFFFFF',
            },
            '& .MuiPaginationItem-page': {
              '&:hover': {
                backgroundColor: '#0F0B60',
                color: '#FFFFFF',
              },
            },
          }}
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default Projets;
