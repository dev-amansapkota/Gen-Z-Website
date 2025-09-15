import connectToDatabase from "../../lib/mongodb";
import PartnerCollegeModel from "../../models/PartnerColleges";

 export async function POST() {
  try {
    await connectToDatabase();

    const partnerColleges = [
      {
        img: 'https://utfs.io/f/iCN7oS8Yds8DRR3gtew3heTUZGyVkJEKDazdbC4uY6M1wpPi',
        name: 'Model Institute Of Technology',
        logo: 'https://utfs.io/f/iCN7oS8Yds8Dnysqh3AlWbZ0mvKeQJoD1fz7Fsytw6Aj8i4n',
        location: 'Bagbazar, Kathmandu',
        established: 'Established 2001',
        affiliated: 'Affiliated to: International American University',
        courses: ['BIT', 'BBA'],
      },
      {
        img: 'https://utfs.io/f/iCN7oS8Yds8DLVkhe3vXeCAgz5ckPqxKubojlLMZDQnR3whS',
        name: 'Softwarica College of IT',
        logo: 'https://utfs.io/f/iCN7oS8Yds8D7Lyte5nm6uNiY2ySwR9CtVMBF30bOr845UfD',
        location: 'Maitri marg, Dillibazar, Kathmandu',
        established: 'Established: 2010',
        affiliated: 'Affiliated to: Coventry University',
        courses: ['BSc hons CS with AI', 'BSc(hons) Computing', 'BSc hons'],
      },
      {
        img: 'https://utfs.io/f/iCN7oS8Yds8DAIVycRmLZMFIrGibxalSV6TDKyq4dgmuptzo',
        name: 'Samridhi College',
        logo: 'https://utfs.io/f/iCN7oS8Yds8DkF9SUBp1iOvKxwU5MjurmSnaqRXy8cYBeZNV',
        location: 'Lokanthali, Bhaktapur',
        established: 'Established: 2013',
        affiliated: 'Affiliated to: Tribhuwan University',
        courses: ['CSIT', 'BBS'],
      },
    ];

   for (const college of partnerColleges) {
  const exists = await PartnerCollegeModel.findOne({ name: college.name });

  if (!exists) {
    try {
      const created = await PartnerCollegeModel.create(college);
      console.log("✅ Created:", created.name);
    } catch (err) {
      console.error("❌ Failed to create:", college.name);
      console.error(err);
    }
  } else {
    console.log("ℹ️ Already exists:", college.name);
  }
}


    return new Response(JSON.stringify({ message: "Operation completed" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("❌ Error inserting partner colleges:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
