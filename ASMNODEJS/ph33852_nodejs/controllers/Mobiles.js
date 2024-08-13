import mobilesModel from "../models/MobileModel";

class MobilesController {
  //
  async GetallMobile(req, res) {
    try {
      const mobile = await mobilesModel.find();
      res.status(200).json({
        message: "Get alll",
        data: mobile,
      });
    } catch (error) {
      res.status(200).json({
        message: error.message,
      });
    }
  }
  //
  async GetDetailMobile(req, res) {
    try {
      const mobile = await mobilesModel.findById(req.params.id);
      if (!mobile) {
        return res.status(404).json({
          message: "ko ton tai id",
        });
      }
      res.status(200).json({
        message: "Get detail done",
        data: mobile,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  //
  async createMobile(req, res) {
    try {
      const mobile = await mobilesModel.create(req.body);
      res.status(200).json({
        message: "create done",
        data: mobile,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  //
  async UpdateMobile(req, res) {
    try {
      const mobile = await mobilesModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!mobile) {
        return res.status(404).json({
          message: "ko ton tai id",
        });
      }
      res.status(200).json({
        message: "Udate done",
        data: mobile,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  //
  async deleteMobile(req, res) {
    try {
      const mobile = await mobilesModel.findByIdAndDelete(req.params.id);
      if (!mobile) {
        return res.status(404).json({
          message: "ko ton tai id",
        });
      }
      res.status(200).json({
        message: "Delete done",
        data: mobile,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default MobilesController;
