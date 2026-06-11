import app from "./app.js";
import "dotenv/config";

export default app;

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`>>> Server Running on port ${PORT}`);
  });
}
