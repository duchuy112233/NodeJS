import laptopRoutes from "./laptops.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Homee");
  });
  app.use('/laptops',laptopRoutes);
}
