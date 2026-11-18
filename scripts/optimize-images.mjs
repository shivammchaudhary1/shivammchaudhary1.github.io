import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Keep generated images in their named asset folder, or pass an explicit output folder.
const source = path.resolve(process.argv[2] || "src/assets/profile");
const output = path.resolve(process.argv[3] || source);
await mkdir(output, { recursive: true });
let before = 0;
let after = 0;
for (const file of await readdir(source)) {
  if (!/\.(png|jpe?g)$/i.test(file) || file === "bg-texture.png") continue;
  const input = path.join(source, file);
  const portrait = /\.jpe?g$/i.test(file);
  const basename = file.replace(/\.[^.]+$/, "");
  const optimized = path.join(output, `${basename}.webp`);
  await sharp(input)
    .rotate()
    .resize({ width: portrait ? 720 : 1280, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(optimized);
  before += (await stat(input)).size;
  after += (await stat(optimized)).size;
  if (!portrait) {
    const thumbnail = path.join(output, `${basename}-thumb.webp`);
    await sharp(input)
      .resize(160, 90, { fit: "contain", background: "#052232" })
      .webp({ quality: 68, effort: 6 })
      .toFile(thumbnail);
    after += (await stat(thumbnail)).size;
  }
}
console.log(
  JSON.stringify(
    {
      originalBytes: before,
      optimizedBytesIncludingThumbnails: after,
      reductionPercent: before
        ? Number(((1 - after / before) * 100).toFixed(1))
        : 0,
    },
    null,
    2,
  ),
);
