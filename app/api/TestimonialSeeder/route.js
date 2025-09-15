import connectToDatabase from "../../lib/mongodb";
import TestimonialModel from "../../models/Testimonials";

export async function POST() {
  try {
    await connectToDatabase();

    const TestimonialsData = [
      {
        img: 'https://pariksha.solutions/images/testimonials/Prajwal-Pathak.jpeg',
        students_name: 'Prajwal Pathak',
        college: 'Mechi Multiple Campus, Bsc. CSIT',
        feedback: "This platform made entrance preparation so easy and effective. The notes, videos, and mock tests really helped me understand the topics well. I'm thankful for the support and highly recommend it to others.",
        rank: 'Rank:2',
      }
    ];

    for (const testimonial of TestimonialsData) {
      const exist = await TestimonialModel.findOne({ college: testimonial.college });
      if (!exist) {
        const created = await TestimonialModel.create(testimonial);
        console.log("Created Successfully!!", created.college);
      }
    }

    return new Response(
      JSON.stringify({ message: "operation Successful" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err) {
    console.error("Error in POST /api/TestimonialSeeder:", err);

    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
