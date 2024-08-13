import Product from "../model/ProductModel";

class ProductControler {
  // get all
  async GetAllProduct(req, res) {
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
  // get delete
  async DeleteProduct(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        res.status(404).json({
          message: "Get not found",
        });
      }
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
   // get delete
  async DeleteProduct(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        res.status(404).json({
          message: "Get not found",
        });
      }
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
}
export default ProductControler;
