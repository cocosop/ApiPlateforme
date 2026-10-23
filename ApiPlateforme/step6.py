import re

filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/fiscaliteModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

if 'useTranslation' not in content:
    content = content.replace('import React from "react";', 'import React from "react";\nimport { useTranslation } from "react-i18next";')

if 'const { t } = useTranslation();' not in content:
    content = content.replace("const FiscaliteModal: React.FC<FiscaliteModalProps> = ({ onClose }) => {", "const FiscaliteModal: React.FC<FiscaliteModalProps> = ({ onClose }) => {\n  const { t } = useTranslation();")

content = content.replace('Fiscalité Camerounaise</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.title")}</Title>')
content = content.replace('Aperçu complet des obligations fiscales et douanières pour les entreprises opérant au Cameroun.\n          </Paragraph>', '{t("pages_secteurs.facteurs_production.fiscalite.subtitle")}\n          </Paragraph>')
content = content.replace('Système Fiscal Complet</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.sys_fiscal")}</Title>')
content = content.replace('Impôt sur les Sociétés</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.impot_societe")}</Title>')
content = content.replace('TVA Standard</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.tva_standard")}</Title>')
content = content.replace('Patente Locale (du CA)</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.patente")}</Title>')

content = content.replace('Régimes d\'Imposition</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.regimes")}</Title>')
content = content.replace('Impôt Libératoire</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_liberatoire.title")}</Title>')
content = content.replace('CA annuel &lt; 10 M FCFA', '{t("pages_secteurs.facteurs_production.fiscalite.regime_liberatoire.l1")}')
content = content.replace('CA annuel < 10 M FCFA', '{t("pages_secteurs.facteurs_production.fiscalite.regime_liberatoire.l1")}')
content = content.replace('Paiement trimestriel</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_liberatoire.l2")}</Text>')
content = content.replace('Dispense de TVA et Patente</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_liberatoire.l3")}</Text>')

content = content.replace('Régime Simplifié (RSI)</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_simplifie.title")}</Title>')
content = content.replace('CA : 10 M - 50 M FCFA</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_simplifie.l1")}</Text>')
content = content.replace('Comptabilité allégée OHADA</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_simplifie.l2")}</Text>')
content = content.replace('Ne collectent pas la TVA</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_simplifie.l3")}</Text>')

content = content.replace('Régime Réel</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_reel.title")}</Title>')
content = content.replace('CA > 50 M FCFA</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_reel.l1")}</Text>')
content = content.replace('Comptabilité normale OHADA</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_reel.l2")}</Text>')
content = content.replace('Collecte et déduction TVA</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.regime_reel.l3")}</Text>')

content = content.replace('TVA & Droits Spéciaux</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.tva_droits")}</Title>')
content = content.replace('Exonérations TVA</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.exo_tva.title")}</Text>')
content = content.replace('Exportations</li>', '{t("pages_secteurs.facteurs_production.fiscalite.exo_tva.l1")}</li>')
content = content.replace('Zones franches industrielles</li>', '{t("pages_secteurs.facteurs_production.fiscalite.exo_tva.l2")}</li>')
content = content.replace('Services éducatifs et médicaux</li>', '{t("pages_secteurs.facteurs_production.fiscalite.exo_tva.l3")}</li>')

content = content.replace('Droits d\'Accise</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.droits_accise.title")}</Text>')
content = content.replace('Boissons alcoolisées', '{t("pages_secteurs.facteurs_production.fiscalite.droits_accise.l1_k")}')
content = content.replace('35% (+ abattement)', '{t("pages_secteurs.facteurs_production.fiscalite.droits_accise.l1_v")}')
content = content.replace('Tabacs', '{t("pages_secteurs.facteurs_production.fiscalite.droits_accise.l2_k")}')
content = content.replace('42.5% (+ abattement)', '{t("pages_secteurs.facteurs_production.fiscalite.droits_accise.l2_v")}')

content = content.replace('Fiscalité Locale & Foncière</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.fisc_locale")}</Title>')
content = content.replace('Patente et Licences</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.patente_licences.title")}</Title>')
content = content.replace('1% du CA annuel</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.patente_licences.l1")}</Text>')
content = content.replace('Alcoolisées (4x patente), Non-alcoolisées (2x patente)</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.patente_licences.l2")}</Text>')

content = content.replace('Taxe Foncière (0.11%)</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.taxe_fonciere.title")}</Title>')
content = content.replace('0.11% sur terrains et bâtiments</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.taxe_fonciere.l1")}</Text>')
content = content.replace('5-10% du loyer annuel (retenue à la source)</Text>', '{t("pages_secteurs.facteurs_production.fiscalite.taxe_fonciere.l2")}</Text>')

content = content.replace('Tarifs Douaniers CEMAC</Title>', '{t("pages_secteurs.facteurs_production.fiscalite.tarifs_douaniers")}</Title>')

content = content.replace("title: 'Catégorie'", "title: t('pages_secteurs.facteurs_production.fiscalite.table.col1')")
content = content.replace("title: 'Taux'", "title: t('pages_secteurs.facteurs_production.fiscalite.table.col2')")
content = content.replace("title: 'Base de calcul'", "title: t('pages_secteurs.facteurs_production.fiscalite.table.col3')")
content = content.replace("title: 'Exemples'", "title: t('pages_secteurs.facteurs_production.fiscalite.table.col4')")

content = content.replace("'Biens de première nécessité'", "t('pages_secteurs.facteurs_production.fiscalite.data.d1.cat')")
content = content.replace("'Valeur en douane'", "t('pages_secteurs.facteurs_production.fiscalite.data.d1.base')")
content = content.replace("'Médicaments, produits de base'", "t('pages_secteurs.facteurs_production.fiscalite.data.d1.ex')")

content = content.replace("'Matières premières'", "t('pages_secteurs.facteurs_production.fiscalite.data.d2.cat')")
content = content.replace("'Valeur EXW'", "t('pages_secteurs.facteurs_production.fiscalite.data.d2.base')")
content = content.replace("'Acier, produits agricoles bruts'", "t('pages_secteurs.facteurs_production.fiscalite.data.d2.ex')")

content = content.replace("'Biens intermédiaires'", "t('pages_secteurs.facteurs_production.fiscalite.data.d3.cat')")
content = content.replace("'Valeur CAF'", "t('pages_secteurs.facteurs_production.fiscalite.data.d3.base')")
content = content.replace("'Pièces automobiles, composants'", "t('pages_secteurs.facteurs_production.fiscalite.data.d3.ex')")

content = content.replace("'Biens de consommation'", "t('pages_secteurs.facteurs_production.fiscalite.data.d4.cat')")
content = content.replace("'Valeur totale'", "t('pages_secteurs.facteurs_production.fiscalite.data.d4.base')")
content = content.replace("'Électronique, véhicules'", "t('pages_secteurs.facteurs_production.fiscalite.data.d4.ex')")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated fiscaliteModal.tsx")

filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/factorModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

if 'useTranslation' not in content:
    content = content.replace("import React from 'react';", "import React from 'react';\nimport { useTranslation } from 'react-i18next';")

if 'const { t } = useTranslation();' not in content:
    content = content.replace("const FactorModal: React.FC<FactorModalProps> = ({ factor, onClose }) => {", "const FactorModal: React.FC<FactorModalProps> = ({ factor, onClose }) => {\n  const { t } = useTranslation();")

# INTRANTS
content = content.replace('Définition des Intrants</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.intrants.def")}</h3>')
content = content.replace('Les « intrants » comprennent les matières premières, consommables, accessoires, outillages et machines importés.\n              Les produits achetés localement au Cameroun sont considérés comme sans frais d\'achat supplémentaires.', '{t("pages_secteurs.facteurs_production.factor_modal.intrants.desc")}')
content = content.replace('Tarif Douanier</h4>', '{t("pages_secteurs.facteurs_production.factor_modal.intrants.tarif")}</h4>')
content = content.replace('Le tarif douanier sur les produits importés varie de', '{t("pages_secteurs.facteurs_production.factor_modal.intrants.tarif_desc")}')
content = content.replace('Frais de Transitaire</h4>', '{t("pages_secteurs.facteurs_production.factor_modal.intrants.transitaire")}</h4>')
content = content.replace('Frais Financiers</h4>', '{t("pages_secteurs.facteurs_production.factor_modal.intrants.financiers")}</h4>')
content = content.replace('Les frais financiers relatifs aux achats varient entre', '{t("pages_secteurs.facteurs_production.factor_modal.intrants.financiers_desc")}')

# TRANSPORT
content = content.replace('Transport de marchandises</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t1")}</h3>')
content = content.replace('Coût moyen par tonne</p>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t1_desc")}</p>')
content = content.replace('Transport de liquides</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t2")}</h3>')
content = content.replace('Coût moyen par litre</p>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t2_desc")}</p>')
content = content.replace('Transport aérien</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t3")}</h3>')
content = content.replace('Coût moyen par kilogramme</p>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t3_desc")}</p>')
content = content.replace('Transport du personnel</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t4")}</h3>')
content = content.replace('Coût mensuel moyen</p>', '{t("pages_secteurs.facteurs_production.factor_modal.transport.t4_desc")}</p>')

# TERRAIN
content = content.replace('Tarification des Terrains</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.terrain.title")}</h3>')
content = content.replace('Terrains Aménagés</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.terrain.t1")}</h3>')
content = content.replace('Terrains Bâtis</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.terrain.t2")}</h3>')
content = content.replace('Coût annuel</p>', '{t("pages_secteurs.facteurs_production.factor_modal.terrain.desc")}</p>')

# ENERGIE
content = content.replace('Tarification Énergétique</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.title")}</h3>')
content = content.replace('Carburants</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.carburants")}</h3>')
content = content.replace('Super Carburant</span>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.carb_l1")}</span>')
content = content.replace('Gasoil</span>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.carb_l2")}</span>')
content = content.replace('Pétrole</span>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.carb_l3")}</span>')
content = content.replace('Électricité - Basse Tension</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.elec")}</h3>')
content = content.replace('Gaz Distribué</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.gaz")}</h3>')
content = content.replace('Bouteille 12 kg</span>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.gaz_l1")}</span>')
content = content.replace('Bouteille 6 kg</span>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.gaz_l2")}</span>')
content = content.replace('Eau</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.eau")}</h3>')
content = content.replace('Eau potable</span>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.eau_l1")}</span>')
content = content.replace('Eau industrielle</span>', '{t("pages_secteurs.facteurs_production.factor_modal.energie.eau_l2")}</span>')

# TELECOM
content = content.replace('Télécommunications au Cameroun</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.title")}</h3>')
content = content.replace('Téléphonie Fixe (CAMTEL)</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1")}</h3>')
content = content.replace('Fixe à fixe</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l1")}</span>')
content = content.replace('Intra-provincial</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l2")}</span>')
content = content.replace('National</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l3")}</span>')
content = content.replace('Fixe à mobile</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t1_l4")}</span>')
content = content.replace('Téléphonie Mobile</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2")}</h3>')
content = content.replace('SMS national</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2_l2")}</span>')
content = content.replace('SMS international</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2_l3")}</span>')
content = content.replace('Appels internationaux</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t2_l4")}</span>')
content = content.replace('Internet & Fournisseurs</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3")}</h3>')
content = content.replace('Faible débit</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_l1")}</span>')
content = content.replace('ADSL</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_l2")}</span>')
content = content.replace('Haut débit</span>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_l3")}</span>')
content = content.replace('Fournisseurs: CAMTEL, MTN, Orange, Nexttel</p>', '{t("pages_secteurs.facteurs_production.factor_modal.telecom.t3_desc")}</p>')

# PERSONNEL
content = content.replace('Coûts du Personnel</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.title")}</h3>')
content = content.replace('Salaire Minimum</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t1")}</h3>')
content = content.replace('Inchangé depuis 2014</p>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t1_desc")}</p>')
content = content.replace('Salaires par Catégorie</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2")}</h3>')
content = content.replace('Cadres</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2_l1")}</span>')
content = content.replace('Employés</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2_l2")}</span>')
content = content.replace('Ouvriers</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t2_l3")}</span>')
content = content.replace('Cotisations Sociales</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3")}</h3>')
content = content.replace('Familiale</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3_l1")}</span>')
content = content.replace('Risques</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3_l2")}</span>')
content = content.replace('Pension</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t3_l3")}</span>')
content = content.replace('Zones Géographiques</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t4")}</h3>')
content = content.replace('Zone 1: Douala, Yaoundé</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t4_l1")}</span>')
content = content.replace('Zone 2: Autres villes</span>', '{t("pages_secteurs.facteurs_production.factor_modal.personnel.t4_l2")}</span>')

# ASSURANCE
content = content.replace('Coûts d\'Assurance</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.title")}</h3>')
content = content.replace('Incendie Immeubles</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.t1")}</h3>')
content = content.replace('Bureaux</span>', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.t1_l1")}</span>')
content = content.replace('Habitations mixtes</span>', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.t1_l2")}</span>')
content = content.replace('Accident de Travail</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.t2")}</h3>')
content = content.replace('Inclus dans charges sociales', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.t2_desc")}')
content = content.replace('Transport</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.t3")}</h3>')
content = content.replace('Véhicules utilitaires: </span>', '{t("pages_secteurs.facteurs_production.factor_modal.assurance.t3_desc")} </span>')

# BANQUE
content = content.replace('Frais Bancaires</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.title")}</h3>')
content = content.replace('Intérêts Bancaires</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t1")}</h3>')
content = content.replace('Long terme</span>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t1_l1")}</span>')
content = content.replace('Moyen terme</span>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t1_l2")}</span>')
content = content.replace('Crédits</span>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t1_l3")}</span>')
content = content.replace('Frais de Service</h3>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t2")}</h3>')
content = content.replace('jusqu\'à', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t2_desc1")}')
content = content.replace('Dépôts à Terme</h4>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t2_title2")}</h4>')
content = content.replace('Taux: </span>', '{t("pages_secteurs.facteurs_production.factor_modal.banque.t2_taux")} </span>')

content = content.replace('Informations détaillées à venir pour ce facteur.</p>', '{t("pages_secteurs.facteurs_production.factor_modal.no_data")}</p>')


with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated factorModal.tsx")
