import re

# Fix facteursProduction.tsx - remove unused useRef & Text
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/pages/investir/facteursProduction/facteursProduction.tsx'
with open(filepath, 'r') as f:
    c = f.read()
c = c.replace('import React, { useEffect, useState, useRef } from "react";', 'import React, { useEffect, useState } from "react";')
c = c.replace('const { Title, Text, Paragraph } = Typography;', 'const { Title, Paragraph } = Typography;')
with open(filepath, 'w') as f:
    f.write(c)
print("Fixed facteursProduction.tsx")

# Fix creerEntreprise - remove unused Space, FilePdfOutlined, Panel, idx
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/pages/investir/creerEntreprise/creerEntreprise.tsx'
with open(filepath, 'r') as f:
    c = f.read()
c = c.replace('Tag, List, Divider, Statistic, Space', 'Tag, List, Divider, Statistic')
c = c.replace('  FilePdfOutlined\n', '')
c = c.replace('const { Panel } = Collapse;\n', '')
c = re.sub(r'\{structures\.map\(\(s, idx\)', '{structures.map((s)', c)
with open(filepath, 'w') as f:
    f.write(c)
print("Fixed creerEntreprise.tsx")

# Fix droitInvestisseur - remove unused Tag, Badge, TeamOutlined + fix LinkOutlined
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/pages/investir/droitInvestisseur/droitInvestisseur.tsx'
with open(filepath, 'r') as f:
    c = f.read()
c = c.replace('  Row, Col, Card, Typography, Tag, List, Collapse,', '  Row, Col, Card, Typography, List, Collapse,')
c = c.replace('  Affix, Button, Space, Divider, Modal, Badge', '  Affix, Button, Space, Divider, Modal')
c = c.replace('  TeamOutlined,\n', '')
# Fix the variable iterator
c = re.sub(r'SECTIONS\.map\(\(section, i\)', 'SECTIONS.map((section)', c)
with open(filepath, 'w') as f:
    f.write(c)
print("Fixed droitInvestisseur.tsx")

# Fix incitation - remove unused Tag, Divider, Badge, Panel
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/pages/investir/incitation/incitation.tsx'
with open(filepath, 'r') as f:
    c = f.read()
c = c.replace('  Row, Col, Card, Typography, Tag, List, Collapse,', '  Row, Col, Card, Typography, List, Collapse,')
c = c.replace('  Affix, Button, Space, Divider, Badge', '  Affix, Button, Space')
c = c.replace('const { Panel } = Collapse;\n', '')
with open(filepath, 'w') as f:
    f.write(c)
print("Fixed incitation.tsx")

# Fix elevage - remove unused imports
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/pages/sectors/elevage/elevage.tsx'
with open(filepath, 'r') as f:
    c = f.read()
c = c.replace('import React from "react";\n', '')
c = c.replace('  Milk,\n', '')
c = c.replace('  Egg,\n', '')
c = c.replace('  Wheat,\n', '')
c = c.replace('  Building2,\n', '')
c = c.replace('  Rocket,\n', '')
c = c.replace('  AlertTriangle,\n', '')
# remove the unused investmentCollageImages variable
c = re.sub(r'\n  const investmentCollageImages = \[[\s\S]*?\];\n', '\n', c)
with open(filepath, 'w') as f:
    f.write(c)
print("Fixed elevage.tsx")

# Fix potentiel - remove unused React and SectorCategory
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/pages/sectors/potentiel/potentiel.tsx'
with open(filepath, 'r') as f:
    c = f.read()
c = c.replace('import React, { useState } from "react";\n', 'import { useState } from "react";\n')
c = c.replace('type SectorCategory = "pilier" | "domaine" | "socle";\n', '')
with open(filepath, 'w') as f:
    f.write(c)
print("Fixed potentiel.tsx")

# Fix projetCard - remove unused id
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/projetCard/projetCard.tsx'
with open(filepath, 'r') as f:
    c = f.read()
# Remove id from destructuring
c = re.sub(r'(\bconst\s+\{)[^}]*(\}\s*=\s*props)', lambda m: m.group(0).replace('  id,\n', '').replace(',  id', '').replace('  id,', ''), c)
with open(filepath, 'w') as f:
    f.write(c)
print("Fixed projetCard.tsx")

