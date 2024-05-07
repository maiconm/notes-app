"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../Notes.module.css";

export default function Note({ note }: any) {
  const router = useRouter();

  const deleteNote = async (noteId: string) => {
    console.log(`xxx`);
    await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
      {
        method: `DELETE`,
      }
    );
    router.refresh();
  };

  const { id, title, content, created } = note || {};

  return (
    <div className={styles.note}>
      <Link href={`/notes/${id}`}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </Link>
      <button onClick={() => deleteNote(id)}>Delete</button>
    </div>
  );
}
