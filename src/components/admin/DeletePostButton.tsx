"use client";

import { Trash2 } from "lucide-react";
import { deletePost } from "@/app/admin/posts/actions";

export default function DeletePostButton({ postId, postTitle }: { postId: string; postTitle: string }) {
  return (
    <form
      action={deletePost}
      onSubmit={(e) => {
        if (!window.confirm(`Delete "${postTitle}"? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        aria-label={`Delete ${postTitle}`}
        className="rounded-lg p-1.5 text-muted transition-colors hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </form>
  );
}
