"use client";

import { useRef, useState, type ChangeEvent, type MouseEvent } from "react";
import { ImagePlus, X } from "lucide-react";

export default function ImagePicker({
  name,
  label,
  defaultImageUrl,
}: {
  name: string;
  label: string;
  defaultImageUrl?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(defaultImageUrl ?? null);
  const [removed, setRemoved] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setRemoved(false);
    }
  }

  function handleRemove(e: MouseEvent) {
    e.preventDefault();
    setPreview(null);
    setRemoved(true);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold text-muted">
        {label}
      </label>
      <div className="mt-1 flex items-center gap-4">
        <label
          htmlFor={name}
          className="group relative flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 text-muted transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
          {preview ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="" className="h-full w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-transparent transition-colors group-hover:bg-black/40 group-hover:text-white">
                <ImagePlus className="h-5 w-5" />
              </span>
            </>
          ) : (
            <ImagePlus className="h-6 w-6" />
          )}
        </label>

        <input
          ref={inputRef}
          id={name}
          name={name}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        <div className="flex flex-col items-start gap-1.5">
          <label
            htmlFor={name}
            className="cursor-pointer text-xs font-semibold text-brand-blue hover:underline"
          >
            {preview ? "Change image" : "Choose image"}
          </label>
          {preview && (
            <button
              type="button"
              onClick={handleRemove}
              className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:underline"
            >
              <X className="h-3 w-3" />
              Remove image
            </button>
          )}
        </div>
      </div>

      {defaultImageUrl && !removed && (
        <input type="hidden" name="existingFeaturedImage" value={defaultImageUrl} />
      )}
      {removed && <input type="hidden" name="removeFeaturedImage" value="true" />}
    </div>
  );
}
