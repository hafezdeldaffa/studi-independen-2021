### Soal 1
Relasi One to One

**Skema Data**:

```json
{
  "_id": "ObjectId('AA01')",
  "fullName": "hafezd el daffa",
  "email": "hafezdganteng@gmail.com",
  "phoneNumber": "08123123121"
}
```

### Soal 2
Relasi One to Many

**Skema Data**:

```json
{
  "_id": "ObjectId('AA02')",
  "fullName": "hafezd el daffa",
  "phoneNumber": "08123123121",
  "address": ["Bekasi", "Jakarta"]
}
```

### Soal 3
Relasi One to Many

**Skema Data**:

```json
{
    "_id": "ObjectId('AA07')",
    "productName": "Kaos Polos",
    "brandName": "SkilShirt",
    "variants": ["ObjectId('AA03')", "ObjectId('AA04')"]
},
{
    "_id": "ObjectId('AA03')",
    "variantName": "kaos Polos Hitam",
    "color": "Hitam",
    "quantity": 12,
    "price": 99000
},
{
    "_id": "ObjectId('AA04')",
    "variantName": "kaos Polos Navy",
    "color": "Navy",
    "quantity": 10,
    "price": 99000
}
```
### Soal 4
Relasi One to One

**Skema Data**:

```json
{
    "_id": "ObjectId('AA05')",
    "cinemaName": "CGF",
    "films": ["Venom 2", "Spiderman No Way Home"],
    "location": "Pondok Indah Mall"
},
{
    "_id": "ObjectId('AA06')",
    "cinemaName": "Cinema31",
    "films": ["Venom 2", "Spiderman No Way Home"],
    "location": "Mall Kelapa Gading"
}
```
