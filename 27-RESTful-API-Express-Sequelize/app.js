const express = require('express');
const { sequelize, Hewan } = require('./models');
const HewanModels = require('./models').Hewan;

const app = express();

app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .then(() => {
    Hewan.sync().then(() => console.log('table Hewan Created'));
  })
  .catch((err) => {
    console.error('Unable to connect to the database: ', err);
  });

app.get('/', (req, res, next) => {
  res.send('Welcome to Hewan API');
});

app.get('/hewan', async (req, res, next) => {
  try {
    const result = await HewanModels.findAll({ raw: true });

    if (result.length > 0) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get('/hewan/:id', async (req, res, next) => {
  try {
    const result = await HewanModels.findOne({ where: { id: req.params.id } });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post('/hewan', async (req, res, next) => {
  const { nama, namaSpesies, umur } = req.body;

  const newHewan = {
    nama: nama,
    namaSpesies: namaSpesies,
    umur: umur,
  };

  try {
    const result = await HewanModels.create(newHewan);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.put('/hewan/:id', async (req, res, next) => {
  const { nama, namaSpesies, umur, createdAt, updatedAt } = req.body;

  const newHewan = {
    nama: nama,
    namaSpesies: namaSpesies,
    umur: umur,
  };

  try {
    await HewanModels.update(newHewan, {
      where: { id: req.params.id },
    });

    res.status(200).json(newHewan);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete('/hewan/:id', async (req, res, next) => {
  try {
    const hewanId = req.params.id;

    const result = await HewanModels.destroy({ where: { id: hewanId } });

    res.status(200).json({ message: 'Hewan was deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});
