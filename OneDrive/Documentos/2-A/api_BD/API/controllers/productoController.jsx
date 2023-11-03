const Producto = require('../Models/productoModel');

exports.createProduct = (req, res) => {
    const nuevoProducto = new Producto(req.body);
    nuevoProducto.save((error, producto) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).json(producto);
    });
};

exports.getAllProducts = (req, res) => {
    Producto.find({}, (error, productos) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(productos);
    });
};

exports.updateProduct = (req, res) => {
    const productoId = req.params.id;
    const productoActualizado = req.body;
    Producto.findByIdAndUpdate(productoId, productoActualizado, { new: true }, (error, producto) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(producto);
    });
};

exports.deleteProduct = (req, res) => {
    const productoIdAEliminar = req.params.id;
    Producto.findByIdAndRemove(productoIdAEliminar, (error, producto) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(producto);
    });
};
