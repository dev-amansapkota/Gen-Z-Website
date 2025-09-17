'use client';
import { useEffect, useState } from 'react';

interface Note {
  content: string;
}

interface PageProps {
  params: {
    subject: string;
  };
}

export default function SubjectNotesPage({ params }: PageProps) {
  const { subject } = params;
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await fetch('/api/notes/getcontent');
        if (!res.ok) {
          throw new Error('Failed to load content');
        }
        const data = await res.json();
        setNote(data);
      } catch (error) {
        console.error('Error loading note:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{subject} Notes</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : note ? (
        <div
          className="prose max-w-none bg-white p-6 rounded shadow"
          dangerouslySetInnerHTML={{ __html: note.content }}
        />
      ) : (
        <p className="text-red-600">No content found for this subject.</p>
      )}
    </div>
  );
}
