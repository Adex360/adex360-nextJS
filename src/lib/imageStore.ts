import { mkdir, writeFile, unlink } from "fs/promises";
import path from "path";
import { slugify } from "./slugify";

const PUBLIC_DIR = path.join(process.cwd(), "public");

/**
 * File-backed image storage for the admin forms, one store per destination
 * folder (blog featured images, project screenshots, …).
 *
 * Deletes are deliberately scoped to the store's own URL prefix: an image
 * saved before this existed — an external URL, or a screenshot committed to
 * the repo — is left alone rather than unlinked out from under git.
 *
 * Pairs with <ImagePicker name="…">, which posts the file under `name` plus
 * two companion fields (`name__existing`, `name__remove`) describing what to
 * do when no new file was chosen.
 *
 * Server-only: imported from "use server" action modules.
 */
export function createImageStore(urlPrefix: string) {
  const dir = path.join(PUBLIC_DIR, urlPrefix);

  async function remove(imagePath: string | null) {
    if (!imagePath || !imagePath.startsWith(urlPrefix)) return;
    try {
      await unlink(path.join(PUBLIC_DIR, imagePath));
    } catch {
      // Already gone (or never written) — nothing to clean up.
    }
  }

  /**
   * Returns the URL to store: the newly-uploaded file, the existing one when
   * nothing was chosen, or null when the editor cleared it. Whatever image is
   * replaced or cleared gets deleted from disk.
   */
  async function save(
    formData: FormData,
    field: string,
    fallback: string | null
  ): Promise<string | null> {
    if (formData.get(`${field}__remove`) === "true") {
      await remove(fallback);
      return null;
    }

    const file = formData.get(field);

    if (file instanceof File && file.size > 0) {
      const ext = path.extname(file.name) || ".jpg";
      const base = slugify(path.basename(file.name, ext)) || "image";
      const filename = `${Date.now()}-${base}${ext}`;

      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, filename), Buffer.from(await file.arrayBuffer()));
      await remove(fallback);

      return `${urlPrefix}${filename}`;
    }

    const existing = String(formData.get(`${field}__existing`) ?? "").trim();
    return existing || fallback;
  }

  return { save, remove };
}
