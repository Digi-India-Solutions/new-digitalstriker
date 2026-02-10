import axios from "axios";

export const uploadToCloudinary = async (file) => {
  if (!file || (typeof file === "object" && !(file instanceof File) && !file.name)) {
    console.error("Cloudinary: invalid file", file);
    return null;
  }
  const cloudName = "dxmysfiux";
  const unsignedUploadPreset = "Digital Striker";

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", unsignedUploadPreset);

  try {
    const res = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 60000,
    });
    return res.data?.secure_url ?? null;
  } catch (err) {
    console.error("Cloudinary Upload Error:", err?.response?.data || err);
    return null;
  }
};
