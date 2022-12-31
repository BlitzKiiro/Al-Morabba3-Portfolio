// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path, { join } from "path";

export default function handler(req, res) {
  const relativePaths = {};
  //getting slider imgs paths;
  const cates = ["about", "brand", "media", "social", "photography", "web"];
  const baseSilderPath = path.join(process.cwd(), "public/assets/imgs/slider");
  cates.forEach((cate) => {
    const catePath = path.join(baseSilderPath, cate);
    const imgsNames = fs.readdirSync(catePath);
    const imgsRelativePaths = imgsNames.map(
      (name) => "/assets/imgs/slider/" + cate + "/" + name
    );
    relativePaths[cate] = imgsRelativePaths;
  });
  //getting clients logos imgs
  relativePaths.clientsLogos = fs
    .readdirSync(path.join(process.cwd(), "public/assets/imgs/logos"))
    .map((name) => "/assets/imgs/logos/" + name);

  res.json(relativePaths);
}
