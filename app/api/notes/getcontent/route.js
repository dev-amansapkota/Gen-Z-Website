// pages/api/notes/getcontent.js (or wherever your API route is)

import connectToDatabase from "@/app/lib/mongodb";
import Note from "../../../models/notes/Note"; // adjust the path accordingly

export async function GET(req) {
  try {
    await connectToDatabase();

    const doc = await Note.findOne().sort({ createdAt: -1 });

    if (!doc) {
      return new Response(JSON.stringify({ error: "No Content Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ content: doc.content }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error loading content", err);
    return new Response(JSON.stringify({ error: "Error loading from DB" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}