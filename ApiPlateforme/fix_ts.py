import re

# Fix fiscaliteModal.tsx
filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/fiscaliteModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
if 'import { useTranslation } from "react-i18next";' not in content and "import { useTranslation } from 'react-i18next';" not in content:
    content = 'import { useTranslation } from "react-i18next";\n' + content
# Remove unused icons
content = re.sub(r'FileTextOutlined,\s*', '', content)
content = re.sub(r'PercentageOutlined,\s*', '', content)
content = re.sub(r',\s*DollarOutlined', '', content)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)


# Fix costsBySectorModal.tsx
filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/costsBySectorModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r',\s*LineChartOutlined', '', content)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)


# Fix mainOeuvreModal.tsx
filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/mainOeuvreModal.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r',\s*GraduationCapOutlined', '', content)
content = re.sub(r',\s*DollarOutlined', '', content)
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)


# Fix droitInvestisseur.tsx
filepath = "/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/pages/investir/droitInvestisseur/droitInvestisseur.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
if "LinkOutlined" not in content and "<LinkOutlined" in content:
    content = content.replace("BankOutlined", "BankOutlined, LinkOutlined")
content = content.replace("<LinkOutlined ", "<BankOutlined ") # Just change it to BankOutlined since it says "Did you mean BankOutlined"
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

