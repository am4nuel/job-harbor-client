const { google } = require("googleapis");
const fs = require("fs");

// Load the service account key file
const credentials = require("./api.json");

// Create a new JWT client using the key file
const jwtClient = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

// Use the JWT client to authorize your request
jwtClient.authorize((err, tokens) => {
  if (err) {
    console.error("Error authorizing JWT client:", err);
    return;
  }

  // Use the authorized client to upload a file
  const drive = google.drive({ version: "v3", auth: jwtClient });

  // File details
  const fileMetadata = {
    name: "example.txt", // Change this to your desired filename
    parents: ["135RbK2exCjB9EG-djSzPnt-tPMqdjT1Q"], // Specify the folder ID
  };

  const media = {
    mimeType: "text/plain", // Change this to the appropriate MIME type
    body: fs.createReadStream("E:/jobharbor/server/sss.txt"), // Specify the path to your local file
  };

  // Upload the file
  drive.files.create(
    {
      resource: fileMetadata,
      media: media,
      fields: "id,webViewLink",
    },
    (err, file) => {
      if (err) {
        console.error("Error uploading file:", err);
      } else {
        console.log("File uploaded successfully. File ID:", file.data.id);
        console.log(
          "File uploaded successfully. File ID:",
          file.data.webViewLink
        );
      }
    }
  );
});
