import connectToDatabase from "../../../lib/mongodb";
import Note from "../../../models/notes/Note";

export async function POST(req) {
  try {
    await connectToDatabase();

    const { content } = await req.json();

    if (!content) {
      return new Response(
        JSON.stringify({ error: "No content provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const note = new Note({ content });
    const savedNote = await note.save();

    return new Response(
      JSON.stringify({ message: "saved", id: savedNote._id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("error saving content:", err);
    return new Response(
      JSON.stringify({ error: "Error saving to database." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
