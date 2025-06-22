import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({ region: "YOUR_REGION" });

app.get("/generate-presigned-url", async (req, res) => {
  const { filename, filetype } = req.query;

  const params = {
    Bucket: "myblog.logbucket",
    Key: filename,
    ContentType:file.type,
  };

  try {
    const command = new PutObjectCommand(params);
    const url = await getSignedUrl(s3, command, { expiresIn: 60 * 5 }); // 5 minutes

    res.json({ url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate presigned URL" });
  }
});
