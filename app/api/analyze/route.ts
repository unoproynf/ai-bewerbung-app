export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file");

  // هنا غادي دير AI analysis (ولا fake حاليا)
  return Response.json({
    success: true,
    message: "CV uploaded successfully",
    analysis: {
      skills: ["React", "Node.js", "Next.js"],
      level: "Junior",
      score: 78,
    },
  });
}