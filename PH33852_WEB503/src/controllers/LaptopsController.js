import Laptops from "../model/LaptopsModel.js";
class LaptopsControllers {
  // GET /laptos
  async getAllLaptops(req, res) {
    try {
      const laptop = await Laptops.find();
      res.status(200).json({
        message: "Get all done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  // POST /laptos
  async cretateLaptops(req, res) {
    try {
      const crelaptop = await Laptops.create(req.body);
      res.status(200).json({
        message: "create done",
        data: crelaptop,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // GET /laptos/:id
  async DetailLaptops(req, res) {
    try {
      const laptop = await Laptops.findById(req.params.id);
      if (!laptop) {
        return res.status(404).json({
          message: "Laptop ko ton tai",
        });
      }
      res.status(200).json({
        message: "Detail laptop done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // PUT /laptos/:id
  async UpdateLaptops(req, res) {
    try {
      const laptop = await Laptops.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!laptop) {
        return res.status(404).json({
          message: "Laptop ko ton tai",
        });
      }
      res.status(200).json({
        message: "Update laptop done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE /laptos/:id
  async DeleteLaptops(req, res) {
    try {
      const laptop = await Laptops.findByIdAndDelete(req.params.id);
      if (!laptop) {
        return res.status(404).json({
          message: "Laptop ko ton tai",
        });
      }
      res.status(200).json({
        message: "Delete laptop done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default LaptopsControllers;
