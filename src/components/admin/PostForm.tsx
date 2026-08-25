import SelectWithAddNew from "./SelectWithAddNew";
import ImagePicker from "./ImagePicker";
import { createCategory, createAuthor } from "@/app/admin/posts/actions";

type Item = { id: string; name: string };

export default function PostForm({
  action,
  categories,
  authors,
  submitLabel,
  defaultValues,
}: {
  action: (formData: FormData) => void | Promise<void>;
  categories: Item[];
  authors: Item[];
  submitLabel: string;
  defaultValues?: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    categoryId: string;
    authorId: string;
    tags: string;
    status: "DRAFT" | "PUBLISHED";
    seoTitle: string;
    seoDescription: string;
  };
}) {
  const inputClass =
    "mt-1 w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue";

  const categoriesWithDefault = defaultValues
    ? reorderDefaultFirst(categories, defaultValues.categoryId)
    : categories;
  const authorsWithDefault = defaultValues
    ? reorderDefaultFirst(authors, defaultValues.authorId)
    : authors;

  return (
    <form action={action} className="mt-8 space-y-6">
      <div>
        <label htmlFor="title" className="text-xs font-semibold text-muted">
          Title *
        </label>
        <input
          id="title"
          name="title"
          required
          defaultValue={defaultValues?.title}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="slug" className="text-xs font-semibold text-muted">
          Slug (leave blank to auto-generate from title)
        </label>
        <input
          id="slug"
          name="slug"
          placeholder="my-post-title"
          defaultValue={defaultValues?.slug}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="text-xs font-semibold text-muted">
          Excerpt *
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          required
          rows={2}
          defaultValue={defaultValues?.excerpt}
          className={inputClass}
        />
        <p className="mt-1 text-xs text-muted">
          A short 1&ndash;2 sentence summary shown on the blog listing page (and used as the SEO
          meta description if you don&rsquo;t set one below). Around 150&ndash;160 characters
          reads best.
        </p>
      </div>

      <div>
        <label htmlFor="content" className="text-xs font-semibold text-muted">
          Content * (HTML is supported)
        </label>
        <textarea
          id="content"
          name="content"
          required
          rows={12}
          defaultValue={defaultValues?.content}
          className={`${inputClass} font-mono`}
        />
      </div>

      <ImagePicker
        name="featuredImage"
        label="Featured Image"
        defaultImageUrl={defaultValues?.featuredImage || undefined}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SelectWithAddNew
          name="categoryId"
          label="Category *"
          initialItems={categoriesWithDefault}
          addLabel="Add New Category"
          modalTitle="New Category"
          onCreate={createCategory}
        />
        <SelectWithAddNew
          name="authorId"
          label="Author *"
          initialItems={authorsWithDefault}
          addLabel="Add New Author"
          modalTitle="New Author"
          onCreate={createAuthor}
        />
        <div>
          <label htmlFor="status" className="text-xs font-semibold text-muted">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={defaultValues?.status ?? "DRAFT"}
            className={`${inputClass} appearance-auto`}
          >
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="tags" className="text-xs font-semibold text-muted">
          Tags (comma-separated)
        </label>
        <input
          id="tags"
          name="tags"
          placeholder="seo, ecommerce, shopify"
          defaultValue={defaultValues?.tags}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 rounded-2xl border-2 border-gray-200 bg-surface p-4 sm:grid-cols-2">
        <div>
          <label htmlFor="seoTitle" className="text-xs font-semibold text-muted">
            SEO Title
          </label>
          <input
            id="seoTitle"
            name="seoTitle"
            defaultValue={defaultValues?.seoTitle}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="seoDescription" className="text-xs font-semibold text-muted">
            SEO Meta Description
          </label>
          <input
            id="seoDescription"
            name="seoDescription"
            defaultValue={defaultValues?.seoDescription}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="rounded-full bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        {submitLabel}
      </button>
    </form>
  );
}

function reorderDefaultFirst(items: Item[], defaultId: string): Item[] {
  const match = items.find((i) => i.id === defaultId);
  if (!match) return items;
  return [match, ...items.filter((i) => i.id !== defaultId)];
}
