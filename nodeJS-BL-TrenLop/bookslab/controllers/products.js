import Product from "../models/ProductModel";
class ProductsControllers {
  // GET /laptos
  async getAllProducts(req, res) {
    try {
      const product = await Product.find();
      res.status(200).json({
        message: "Get all done",
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  // POST /laptos
  async cretateProducts(req, res) {
    try {
      const creproduct = await Product.create(req.body);
      res.status(200).json({
        message: "create done",
        data: creproduct,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // GET /laptos/:id
  async DetailProducts(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          message: "product ko ton tai",
        });
      }
      res.status(200).json({
        message: "Detail product done",
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // PUT /laptos/:id
  async UpdateProducts(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!product) {
        return res.status(404).json({
          message: "product ko ton tai",
        });
      }
      res.status(200).json({
        message: "Update product done",
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE /laptos/:id
  async DeleteProducts(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({
          message: "product ko ton tai",
        });
      }
      res.status(200).json({
        message: "Delete laptop done",
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default ProductsControllers;