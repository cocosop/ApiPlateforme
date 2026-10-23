import re

# Fix projetCard - properly remove 'id' from destructuring
filepath = '/home/anse/Bureau/compulec/API_site/ApiPlateforme/ApiPlateforme/src/components/projetCard/projetCard.tsx'
with open(filepath, 'r') as f:
    c = f.read()
print("PROJETCARD around id:")
lines = c.split('\n')
for i, l in enumerate(lines[15:25], start=16):
    print(f"{i}: {l}")
