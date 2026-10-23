import re

filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/foncierModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

if 'useTranslation' not in content:
    content = content.replace('import React from "react";', 'import React from "react";\nimport { useTranslation } from "react-i18next";')

if 'const { t } = useTranslation();' not in content:
    content = content.replace("const FoncierModal: React.FC<FoncierModalProps> = ({ onClose }) => {", "const FoncierModal: React.FC<FoncierModalProps> = ({ onClose }) => {\n  const { t } = useTranslation();")

content = content.replace('"Accélération des procédures administratives"', 't("pages_secteurs.facteurs_production.foncier.t4_l1")')
content = content.replace('"Décentralisation des décisions régionales"', 't("pages_secteurs.facteurs_production.foncier.t4_l2")')
content = content.replace('"Système de publication transparent"', 't("pages_secteurs.facteurs_production.foncier.t4_l3")')
content = content.replace('"Mécanisme de résolution des litiges"', 't("pages_secteurs.facteurs_production.foncier.t4_l4")')

content = content.replace('"Régime foncier"', 't("pages_secteurs.facteurs_production.foncier.l1_s")')
content = content.replace('"Gestion domaniale"', 't("pages_secteurs.facteurs_production.foncier.l2_s")')
content = content.replace('"Expropriation"', 't("pages_secteurs.facteurs_production.foncier.l3_s")')
content = content.replace('"Amendements"', 't("pages_secteurs.facteurs_production.foncier.l4_s")')

content = content.replace('Foncier au Cameroun</Title>', '{t("pages_secteurs.facteurs_production.foncier.title")}</Title>')
content = content.replace('Terrains Aménagés</Title>', '{t("pages_secteurs.facteurs_production.foncier.t1")}</Title>')
content = content.replace('par m² / an</Text>', '{t("pages_secteurs.facteurs_production.foncier.t1_d")}</Text>')
content = content.replace('<Text>Douala-Bonabéri</Text>', '<Text>{t("pages_secteurs.facteurs_production.foncier.t1_l1")}</Text>')
content = content.replace('<Text>Bassa</Text>', '<Text>{t("pages_secteurs.facteurs_production.foncier.t1_l2")}</Text>')
content = content.replace('Terrains Bâtis</Title>', '{t("pages_secteurs.facteurs_production.foncier.t2")}</Title>')
content = content.replace('<Text>Zone franche</Text>', '<Text>{t("pages_secteurs.facteurs_production.foncier.t2_l1")}</Text>')
content = content.replace('<Text>Standard</Text>', '<Text>{t("pages_secteurs.facteurs_production.foncier.t2_l2")}</Text>')

content = content.replace('Titre Foncier Garanti</Title>', '{t("pages_secteurs.facteurs_production.foncier.t3")}</Title>')
content = content.replace('Une procédure sécurisée avec attestation domaniale. Le Cameroun a modernisé ses procédures pour garantir les droits des investisseurs.\n            </Paragraph>', '{t("pages_secteurs.facteurs_production.foncier.t3_d")}\n            </Paragraph>')
content = content.replace('Certificat d\'authenticité numérique</li>', '{t("pages_secteurs.facteurs_production.foncier.t3_l1")}</li>')
content = content.replace('Géolocalisation précise</li>', '{t("pages_secteurs.facteurs_production.foncier.t3_l2")}</li>')
content = content.replace('Protection contre les fraudes</li>', '{t("pages_secteurs.facteurs_production.foncier.t3_l3")}</li>')

content = content.replace('Réformes de 2005</Title>', '{t("pages_secteurs.facteurs_production.foncier.t4")}</Title>')

content = content.replace('title="Bail Commercial Sécurisé"', 'title={t("pages_secteurs.facteurs_production.foncier.t5")}')
content = content.replace('Contrats de bail modernisés avec des avantages clairs pour les entreprises.</Paragraph>', '{t("pages_secteurs.facteurs_production.foncier.t5_d")}</Paragraph>')
content = content.replace('Durée maximale : </Text>', '{t("pages_secteurs.facteurs_production.foncier.t5_l1_k")}</Text>')
content = content.replace('15 ans (renouvelable)</Text>', '{t("pages_secteurs.facteurs_production.foncier.t5_l1_v")}</Text>')
content = content.replace('Indexation : </Text>', '{t("pages_secteurs.facteurs_production.foncier.t5_l2_k")}</Text>')
content = content.replace('Réglementée sur l\'indice local</Text>', '{t("pages_secteurs.facteurs_production.foncier.t5_l2_v")}</Text>')

content = content.replace('Textes Légaux</Title>', '{t("pages_secteurs.facteurs_production.foncier.t6")}</Title>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated foncierModal.tsx")


filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/mainOeuvreModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

if 'useTranslation' not in content:
    content = content.replace('import React from "react";', 'import React from "react";\nimport { useTranslation } from "react-i18next";')

if 'const { t } = useTranslation();' not in content:
    content = content.replace("const MainOeuvreModal: React.FC<MainOeuvreModalProps> = ({ onClose }) => {", "const MainOeuvreModal: React.FC<MainOeuvreModalProps> = ({ onClose }) => {\n  const { t } = useTranslation();")

content = content.replace('Main d\'Œuvre au Cameroun</Title>', '{t("pages_secteurs.facteurs_production.main_oeuvre.title")}</Title>')
content = content.replace('Découvrez les atouts, salaires, contrats et protections sociales d\'une main-d\'œuvre qualifiée et compétitive en Afrique Centrale.\n          </Paragraph>', '{t("pages_secteurs.facteurs_production.main_oeuvre.subtitle")}\n          </Paragraph>')
content = content.replace('Qualification</Title>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t1")}</Title>')
content = content.replace('Alphabétisation</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t1_l1")}</div>')
content = content.replace('Primaire (Taux Net)</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t1_l2")}</div>')
content = content.replace('Répartition par niveau d\'éducation</Title>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t1_l3")}</Title>')
content = content.replace('Niveau primaire</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t1_l4")}</Text>')
content = content.replace('Niveau secondaire</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t1_l5")}</Text>')
content = content.replace('Niveau supérieur</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t1_l6")}</Text>')

content = content.replace('Salaires & Conditions</Title>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t2")}</Title>')
content = content.replace('Salaire Minimum (SMIG)</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t2_l1")}</div>')
content = content.replace('~ 55.3 € / mois</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t2_l2")}</div>')

content = content.replace("title: 'Cadres'", "title: t('pages_secteurs.facteurs_production.main_oeuvre.t2_l3')")
content = content.replace("title: 'Employés'", "title: t('pages_secteurs.facteurs_production.main_oeuvre.t2_l4')")
content = content.replace("title: 'Ouvriers'", "title: t('pages_secteurs.facteurs_production.main_oeuvre.t2_l5')")

content = content.replace('48h / semaine</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t2_l6")}</div>')
content = content.replace('Repos: 24h/sem</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t2_l7")}</div>')
content = content.replace('30 jrs congés/an</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t2_l8")}</div>')
content = content.replace('Âge légal: 16 ans</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t2_l9")}</div>')

content = content.replace('Cotisations Sociales</Title>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t3")}</Title>')
content = content.replace('Prestations Familiales</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t3_l1")}</Text>')
content = content.replace('100% Employeur</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t3_l2")}</div>')
content = content.replace('Pension Vieillesse</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t3_l3")}</Text>')
content = content.replace('4.2% Employeur / 4.2% Employé</div>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t3_l4")}</div>')
content = content.replace('Plafond mensuel : 750 000 FCFA\n              </Tag>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t3_l5")}\n              </Tag>')

content = content.replace('Types de Contrats</Title>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t4")}</Title>')
content = content.replace('>CDD</Title>', '>{t("pages_secteurs.facteurs_production.main_oeuvre.t4_l1")}</Title>')
content = content.replace('Maximum 12 mois, renouvelable une seule fois.</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t4_l2")}</Text>')
content = content.replace('>CDI</Title>', '>{t("pages_secteurs.facteurs_production.main_oeuvre.t4_l3")}</Title>')
content = content.replace('Temps plein ou partiel, encadré par le Code du Travail.</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t4_l4")}</Text>')
content = content.replace('>Expatriés</Title>', '>{t("pages_secteurs.facteurs_production.main_oeuvre.t4_l5")}</Title>')
content = content.replace('Aucun quota fixé, priorité aux compétences indisponibles localement.</Text>', '{t("pages_secteurs.facteurs_production.main_oeuvre.t4_l6")}</Text>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated mainOeuvreModal.tsx")
