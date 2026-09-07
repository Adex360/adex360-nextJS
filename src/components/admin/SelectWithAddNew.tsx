"use client";

import { useState, useTransition } from "react";
import { X } from "lucide-react";

type Item = { id: string; name: string };

export default function SelectWithAddNew({
  name,
  label,
  initialItems,
  addLabel,
  modalTitle,
  onCreate,
}: {
  name: string;
  label: string;
  initialItems: Item[];
  addLabel: string;
  modalTitle: string;
  onCreate: (name: string) => Promise<Item>;
}) {
  const [items, setItems] = useState(initialItems);
  const [value, setValue] = useState(initialItems[0]?.id ?? "");
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "__new__") {
      setShowModal(true);
      return;
    }
    setValue(e.target.value);
  }

  function closeModal() {
    setShowModal(false);
    setNewName("");
    setError(null);
  }

  function handleCreate() {
    const trimmed = newName.trim();
    if (!trimmed) {
      setError("Name is required.");
      return;
    }
    setError(null);
    startTransition(async () => {
      try {
        const created = await onCreate(trimmed);
        setItems((prev) => [...prev, created]);
        setValue(created.id);
        closeModal();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      }
    });
  }

  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold text-muted">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        value={value}
        onChange={handleChange}
        className="mt-1 w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue"
      >
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
        <option value="__new__">+ {addLabel}</option>
      </select>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink">{modalTitle}</h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-muted hover:text-ink"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <input
              autoFocus
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleCreate();
                }
              }}
              placeholder="Name"
              className="mt-4 w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand-blue"
            />
            {error && <p className="mt-2 text-xs font-medium text-red-600">{error}</p>}
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full border-2 border-gray-300 px-4 py-2 text-xs font-semibold text-ink"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreate}
                disabled={pending}
                className="rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white disabled:opacity-60"
              >
                {pending ? "Creating…" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
