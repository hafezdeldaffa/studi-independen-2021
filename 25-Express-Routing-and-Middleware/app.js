const express = require('express');
const port = 3001;

const app = express();

app.use(express.json());

const hewan = [
  { id: 1, nama: 'Snowy', spesies: 'kucing' },
  { id: 2, nama: 'Blacki', spesies: 'anjing' },
  { id: 3, nama: 'Molly', spesies: 'kucing' },
  { id: 4, nama: 'Milo', spesies: 'kelinci' },
  { id: 5, nama: 'Rere', spesies: 'kucing' },
];

const logger = (req, res, next) => {
  console.log('this is logger');
  next();
};

const postChecker = (req, res, next) => {
  res.status(404).send({ error: 'Species not valid' });
};

app.get('/', logger, (req, res) => {
  res.send('Hello World');
});

app.get('/hewan', logger, (req, res, next) => {
  try {
    res.status(200).send({ message: 'success get data pet', data: hewan });
    next();
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get('/hewan/:id', logger, (req, res, next) => {
  try {
    const hewanFiltered = hewan.filter((el) => el.id === Number(req.params.id));

    if (hewanFiltered) {
      res.status(200).send({
        message: 'success get data pet',
        hewanFilter: [hewanFiltered],
      });
    }
    next();
  } catch (error) {
    res.status(404).send({ error, message: 'data not found' });
  }
});

app.post(
  '/hewan',
  logger,
  (req, res, next) => {
    try {
      const { nama, spesies } = req.body;

      const data = {
        id: hewan.length + 1,
        nama: nama,
        spesies: spesies,
      };

      if (
        data.spesies === 'kucing' ||
        data.spesies === 'anjing' ||
        data.spesies === 'kelinci'
      ) {
        hewan.push(data);
        res
          .status(201)
          .send({ message: 'success adding one pet', hewan: hewan });
      }
      next();
    } catch (error) {
      res.status(500).send(error);
    }
  },
  postChecker
);

app.put('/hewan/:id', logger, (req, res, next) => {
  try {
    const body = req.body;
    const index = hewan.findIndex((el) => el.id === Number(req.params.id));
    const data = { id: Number(req.params.id), ...body };

    if (
      data.spesies === 'kucing' ||
      data.spesies === 'anjing' ||
      data.spesies === 'kelinci'
    ) {
      hewan[index] = data;
      res.status(201).send({ message: 'success update', hewan: hewan });
    }
    next();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/hewan/:id', logger, (req, res, next) => {
  try {
    const index = hewan.findIndex((el) => el.id === req.params.id);
    const data = hewan.splice(index, 1);

    res.status(200).send({ message: 'delete berhasil', deletedHewan: data });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
