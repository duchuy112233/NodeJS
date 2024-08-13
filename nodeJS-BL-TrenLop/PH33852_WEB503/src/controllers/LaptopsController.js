import Laptops from "../model/LaptopsModel";

class LaptopsController {
  async getAlllaptop(res, req) {
    try {
      const laptop = await Laptops.find();
      res.status(200).json({
        message: "done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async create(res, req) {
    try {
      const laptop = await Laptops.create(req.body);
      res.status(200).json({
        message: "done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async detail(res, req) {
    try {
      const laptop = await Laptops.findById(req.params.id);
      if (!laptop) {
        return res.status(404).json({
          message: "ko tim thay sp",
        });
      }
      res.status(200).json({
        message: "done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async update(res, req) {
    try {
      const laptop = await Laptops.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!laptop) {
        return res.status(404).json({
          message: "ko tim thay sp",
        });
      }
      res.status(200).json({
        message: "done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  async delete(res, req) {
    try {
      const laptop = await Laptops.findByIdAndDelete(req.params.id);
      if (!laptop) {
        return res.status(404).json({
          message: "ko tim thay sp",
        });
      }
      res.status(200).json({
        message: "done",
        data: laptop,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default LaptopsController;
