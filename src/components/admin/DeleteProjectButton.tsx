"use client";

import { Trash2 } from "lucide-react";
import { deleteProject } from "@/app/admin/projects/actions";

export default function DeleteProjectButton({
  projectId,
  projectName,
}: {
  projectId: string;
  projectName: string;
}) {
  return (
    <form
      action={deleteProject}
      onSubmit={(e) => {
        if (!window.confirm(`Delete "${projectName}"? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="projectId" value={projectId} />
      <button
        type="submit"
        aria-label={`Delete ${projectName}`}
        className="rounded-lg p-1.5 text-muted transition-colors hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </form>
  );
}
