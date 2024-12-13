import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import uniqid from "uniqid";

export async function POST(req) {
  const { name, type } = await req.json();

  const s3client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    },
  });

  const id = uniqid();
  const ext = name.split(".").slice(-1)[0];
  const newName = `${id}.${ext}`;

  const command = new PutObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
    Key: newName,
    ContentType: type,
    ACL: "public-read",
  });

  const presignedUrl = await getSignedUrl(s3client, command, {
    expiresIn: 3600, // URL valid for 1 hour
  });

  return Response.json({ presignedUrl, newName });
}