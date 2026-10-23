import re

filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/factorGrid.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

if 'useTranslation' not in content:
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { useTranslation } from 'react-i18next';")

if 'const { t } = useTranslation();' not in content:
    content = content.replace("const FactorsGrid: React.FC = () => {", "const FactorsGrid: React.FC = () => {\n  const { t } = useTranslation();")

content = content.replace('"Intrants"', 't("pages_secteurs.facteurs_production.grid.factors.intrants.name")')
content = content.replace('"Matières premières et équipements importés"', 't("pages_secteurs.facteurs_production.grid.factors.intrants.desc")')
content = content.replace('"Tarif douanier"', 't("pages_secteurs.facteurs_production.grid.factors.intrants.label")')
content = content.replace('"50k FCFA min"', 't("pages_secteurs.facteurs_production.grid.factors.intrants.stat1")')
content = content.replace('"940k FCFA max"', 't("pages_secteurs.facteurs_production.grid.factors.intrants.stat2")')
content = content.replace('"Frais transitaire"', 't("pages_secteurs.facteurs_production.grid.factors.intrants.stat3")')

content = content.replace('"Transport"', 't("pages_secteurs.facteurs_production.grid.factors.transport.name")')
content = content.replace('"Déplacement marchandises et personnel"', 't("pages_secteurs.facteurs_production.grid.factors.transport.desc")')
content = content.replace('"Coût par unité"', 't("pages_secteurs.facteurs_production.grid.factors.transport.label")')
content = content.replace('"Ferroviaire: 40 FCFA/T"', 't("pages_secteurs.facteurs_production.grid.factors.transport.stat1")')
content = content.replace('"Routier: 90 FCFA/T"', 't("pages_secteurs.facteurs_production.grid.factors.transport.stat2")')
content = content.replace('"Aérien: 2600 FCFA/Kg"', 't("pages_secteurs.facteurs_production.grid.factors.transport.stat3")')

content = content.replace('"Terrain"', 't("pages_secteurs.facteurs_production.grid.factors.terrain.name")')
content = content.replace('"Acquisition ou location terrain industriel"', 't("pages_secteurs.facteurs_production.grid.factors.terrain.desc")')
content = content.replace('"Par m²/an"', 't("pages_secteurs.facteurs_production.grid.factors.terrain.label")')
content = content.replace('"Aménagés: 300 FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.terrain.stat1")')
content = content.replace('"Bâtis: 1000-3000 FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.terrain.stat2")')
content = content.replace('"Zone franche: 720 FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.terrain.stat3")')

content = content.replace('"Énergie"', 't("pages_secteurs.facteurs_production.grid.factors.energie.name")')
content = content.replace('"Électricité, carburant et autres sources"', 't("pages_secteurs.facteurs_production.grid.factors.energie.desc")')
content = content.replace('"Par kWh"', 't("pages_secteurs.facteurs_production.grid.factors.energie.label")')
content = content.replace('"Gasoil: 828 FCFA/L"', 't("pages_secteurs.facteurs_production.grid.factors.energie.stat1")')
content = content.replace('"Super: 840 FCFA/L"', 't("pages_secteurs.facteurs_production.grid.factors.energie.stat2")')
content = content.replace('"Gaz 12kg: 6500 FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.energie.stat3")')

content = content.replace('"Télécommunication"', 't("pages_secteurs.facteurs_production.grid.factors.telecom.name")')
content = content.replace('"Services téléphonie et internet"', 't("pages_secteurs.facteurs_production.grid.factors.telecom.desc")')
content = content.replace('"Par minute"', 't("pages_secteurs.facteurs_production.grid.factors.telecom.label")')
content = content.replace('"ADSL: 20-30k FCFA/mois"', 't("pages_secteurs.facteurs_production.grid.factors.telecom.stat1")')
content = content.replace('"Haut débit: 12-300k FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.telecom.stat2")')
content = content.replace('"SMS: 50 FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.telecom.stat3")')

content = content.replace('"Personnel"', 't("pages_secteurs.facteurs_production.grid.factors.personnel.name")')
content = content.replace('"Salaires et charges sociales"', 't("pages_secteurs.facteurs_production.grid.factors.personnel.desc")')
content = content.replace('"SMIG mensuel"', 't("pages_secteurs.facteurs_production.grid.factors.personnel.label")')
content = content.replace('"Cadres: 267-457k FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.personnel.stat1")')
content = content.replace('"Employés: 129-325k FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.personnel.stat2")')
content = content.replace('"Cotisations: 17.15%"', 't("pages_secteurs.facteurs_production.grid.factors.personnel.stat3")')

content = content.replace('"Assurance"', 't("pages_secteurs.facteurs_production.grid.factors.assurance.name")')
content = content.replace('"Couverture des risques d\'activité"', 't("pages_secteurs.facteurs_production.grid.factors.assurance.desc")')
content = content.replace('"Taux de base"', 't("pages_secteurs.facteurs_production.grid.factors.assurance.label")')
content = content.replace('"Bureaux: 0.70‰"', 't("pages_secteurs.facteurs_production.grid.factors.assurance.stat1")')
content = content.replace('"Habitations: 0.75‰"', 't("pages_secteurs.facteurs_production.grid.factors.assurance.stat2")')
content = content.replace('"Transport: 121-150k FCFA"', 't("pages_secteurs.facteurs_production.grid.factors.assurance.stat3")')

content = content.replace('"Frais Bancaires"', 't("pages_secteurs.facteurs_production.grid.factors.banque.name")')
content = content.replace('"Services bancaires et financement"', 't("pages_secteurs.facteurs_production.grid.factors.banque.desc")')
content = content.replace('"Taux d\'intérêt"', 't("pages_secteurs.facteurs_production.grid.factors.banque.label")')
content = content.replace('"Long terme: 7-10%"', 't("pages_secteurs.facteurs_production.grid.factors.banque.stat1")')
content = content.replace('"Moyen terme: 11-17%"', 't("pages_secteurs.facteurs_production.grid.factors.banque.stat2")')
content = content.replace('"Dépôt: 3.5%"', 't("pages_secteurs.facteurs_production.grid.factors.banque.stat3")')

content = content.replace('Coûts de Production Essentiels\n          </h2>', '{t("pages_secteurs.facteurs_production.grid.title")}\n          </h2>')
content = content.replace('Découvrez les principaux postes de dépenses en un coup d\'œil\n          </p>', '{t("pages_secteurs.facteurs_production.grid.subtitle")}\n          </p>')
content = content.replace('<span>Voir détails</span>', '<span>{t("pages_secteurs.facteurs_production.grid.see_details")}</span>')
content = content.replace('Aperçu Rapide des Coûts</h3>', '{t("pages_secteurs.facteurs_production.grid.quick_summary")}</h3>')
content = content.replace('Les chiffres clés à retenir pour votre budget</p>', '{t("pages_secteurs.facteurs_production.grid.quick_desc")}</p>')
content = content.replace('Salaire minimum</div>', '{t("pages_secteurs.facteurs_production.grid.salary")}</div>')
content = content.replace('Transport/tonne</div>', '{t("pages_secteurs.facteurs_production.grid.transport")}</div>')
content = content.replace('Électricité/kWh</div>', '{t("pages_secteurs.facteurs_production.grid.elec")}</div>')
content = content.replace('Terrain/m²/an</div>', '{t("pages_secteurs.facteurs_production.grid.land")}</div>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated factorGrid.tsx")

filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/costsBySectorModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

if 'useTranslation' not in content:
    content = content.replace("import React from 'react';", "import React from 'react';\nimport { useTranslation } from 'react-i18next';")

if 'const { t } = useTranslation();' not in content:
    content = content.replace("const CostsBySectorModal: React.FC<CostsBySectorModalProps> = ({ onClose }) => {", "const CostsBySectorModal: React.FC<CostsBySectorModalProps> = ({ onClose }) => {\n  const { t } = useTranslation();")

content = content.replace('"Agro-industrie"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.agro.name")')
content = content.replace('"Main-d\'œuvre"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.agro.f1")')
content = content.replace('"Semences"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.agro.f2")')
content = content.replace('"Machines"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.agro.f3")')

content = content.replace('"Énergie"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.energie.name")')
content = content.replace('"Maintenance"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.energie.f2")')
content = content.replace('"Carburant"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.energie.f3")')

content = content.replace('"Numérique"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.numerique.name")')
content = content.replace('"Infrastructure"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.numerique.f2")')
content = content.replace('"Logiciels"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.numerique.f3")')

content = content.replace('"Bois-Forêts"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.bois.name")')
content = content.replace('"Exploitation"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.bois.f1")')
content = content.replace('"Transport"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.bois.f2")')
content = content.replace('"Transformation"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.bois.f3")')

content = content.replace('"Textile/Confection"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.textile.name")')
content = content.replace('"Matières"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.textile.f1")')

content = content.replace('"Hydrocarbures"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.hydro.name")')
content = content.replace('"Exploration"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.hydro.f1")')
content = content.replace('"Raffinage"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.hydro.f2")')

content = content.replace('"Pharmacie"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.pharma.name")')
content = content.replace('"Équipements"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.pharma.f2")')
content = content.replace('"R&D"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.pharma.f3")')

content = content.replace('"Mines/Métallurgie"', 't("pages_secteurs.facteurs_production.costs_sector.sectors.mines.name")')

content = content.replace('Coûts par Secteur d\'Activité</Title>', '{t("pages_secteurs.facteurs_production.costs_sector.title")}</Title>')
content = content.replace('Analyse comparative des coûts de production par secteur clé, basée sur les données officielles de 2023.\n          </Paragraph>', '{t("pages_secteurs.facteurs_production.costs_sector.subtitle")}\n          </Paragraph>')
content = content.replace('Coût Total Estimé</Text>', '{t("pages_secteurs.facteurs_production.costs_sector.total_cost")}</Text>')
content = content.replace('Source: {item.source}', '{t("pages_secteurs.facteurs_production.costs_sector.source")}: {item.source}')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated costsBySectorModal.tsx")
