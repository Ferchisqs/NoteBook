
const express = require('express');
const mongoose = require('mongoose');
const productoRoutes = require('./API/Routes/productoRoutes');


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/tu-base-de-datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});


app.use('/api', productoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
