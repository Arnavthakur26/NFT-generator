import { readdir, readFile, writeFile } from "fs";
import { join, basename } from "path";

const folderPath = "output_json/";

readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".json")) {
      const filePath = join(folderPath, file);
      readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }

        try {
          const jsonData = JSON.parse(data);
          const fileName = basename(file, ".json");
          const imageUrl = `http://example.com/${fileName}.png`;
          jsonData.external_url = imageUrl;

          writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
              console.error("Error writing to file:", err);
            } else {
              console.log(`Updated ${file}`);
            }
          });
        } catch (err) {
          console.error(`Error parsing JSON in file ${file}:`, err);
        }
      });
    }
  });
});
