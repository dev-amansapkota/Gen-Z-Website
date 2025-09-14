import connectToDatabase from "../../lib/mongodb";
import Course from "../../models/Course";

// GET /api/courses
export async function GET() {
  try {
    await connectToDatabase();
    const courses = await Course.find({});
    return new Response(JSON.stringify(courses), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

// POST /api/courses
export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newCourse = await Course.create(body);

    return new Response(JSON.stringify(newCourse), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
