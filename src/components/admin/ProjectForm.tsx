import SelectWithAddNew from "./SelectWithAddNew";
import ImagePicker from "./ImagePicker";
import { createIndustry } from "@/app/admin/projects/actions";
import { SERVICES } from "@/lib/services";

type Item = { id: string; name: string };

export type ProjectFormValues = {
  name: string;
  service: string;
  image: string;
  industryId: string;
  status: "DRAFT" | "PUBLISHED";
};

export default function ProjectForm({
  action,
  industries,
  submitLabel,
  defaultValues,
}: {
  action: (formData: FormData) => void | Promise<void>;
  industries: Item[];
  submitLabel: string;
  defaultValues?: ProjectFormValues;
}) {
  const inputClass =
    "mt-1 w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue";

  const industriesWithDefault = defaultValues
    ? reorderDefaultFirst(industries, defaultValues.industryId)
    : industries;

  return (
    <form action={action} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="text-xs font-semibold text-muted">
          Project / Client Name *
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Butterfly"
          defaultValue={defaultValues?.name}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SelectWithAddNew
          name="industryId"
          label="Industry *"
          initialItems={industriesWithDefault}
          addLabel="Add New Industry"
          modalTitle="New Industry"
          onCreate={createIndustry}
        />

        <div>
          <label htmlFor="service" className="text-xs font-semibold text-muted">
            Service *
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultValues?.service ?? SERVICES[0]?.label}
            className={`${inputClass} appearance-auto`}
          >
            {SERVICES.map((service) => (
              <option key={service.label} value={service.label}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="status" className="text-xs font-semibold text-muted">
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={defaultValues?.status ?? "PUBLISHED"}
            className={`${inputClass} appearance-auto`}
          >
            <option value="PUBLISHED">Published</option>
            <option value="DRAFT">Draft</option>
          </select>
        </div>
      </div>
      <p className="-mt-3 text-xs text-muted">
        Industry drives the filter tabs on the home page &mdash; a project in a brand-new industry
        adds that tab automatically. Service is the label printed on the card. The home page
        always shows the 4 most recently published projects, so publishing is what puts a project
        there &mdash; there&rsquo;s nothing else to toggle.
      </p>

      <ImagePicker
        name="image"
        label="Project Image"
        defaultImageUrl={defaultValues?.image || undefined}
      />
      <p className="-mt-3 text-xs text-muted">
        A screenshot of the site or campaign. Landscape works best &mdash; cards crop to 16:9.
      </p>

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
