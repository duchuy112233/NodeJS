import Cars from "../models/CarsModel.js";

class CarsControllers {
  // GET /cars
  async getAllCars(req, res) {
    try {
      const cars = await Cars.find();
      res.status(200).json({
        message: " Get all done",
        data: cars,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // POTS /cars
  async createCars(req, res) {
    // req.body
    // const newCars = new Cars(req.body);
    const saveCars = await Cars.create(req.body);
    res.status(201).json({
      message: "Create Cars Successfull",
      data: saveCars,
    });
  }

  //     Cars.create({
  //       title: "My Car 3",
  //       rate: 5,
  //       description: "This is my car.",
  //       year: 2022,
  //       active: true,
  //     });
  //     res.send("Create cars done");
  //   }
  //
  // GET /cars/:id
  async detailCars(req, res) {
    try {
      const cars = await Cars.findById(req.params.id);
      if (!cars) {
        res.status(404).json({
          message: "Cars không tồn tại",
        });
      }
      res.status(200).json({
        message: " Get Detail done",
        data: cars,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // PUT /cars/:id
  async updateCars(req, res) {
    try {
      const cars = await Cars.findByIdAndUpdate(req.params.id, req.body);
      if (!cars) {
        return res.status(404).json({
          message: "cars không tồn tại",
        });
      }
      const updateCars = await Cars.findById(req.params.id);
      res.status(200).json({
        message: "Update cars Successfull",
        data: updateCars,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE /cars/:id
  async deleteCars(req, res) {
    try {
      const cars = await Cars.findByIdAndDelete(req.params.id);
      if (!cars) {
        res.status(404).json({
          message: "Cars không tồn tại",
        });
      }
      res.status(200).json({
        message: " Delete Cars done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default CarsControllers;
