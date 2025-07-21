// console.log(navigator.userAgent);
// console.log(navigator.languages);
// console.log(navigator.platform);
// console.log(navigator.onLine);
// console.log(navigator.hardwareConcurrency); //Number of logical CPU cores
// console.log(navigator.deviceMemory);
// console.log(navigator.vendor);

async function askPermissionAndUseMedia() {
  try {
    const camPermission = await navigator.permissions.query({ name: "camera" });
    const micPermission = await navigator.permissions.query({
      name: "microphone",
    });

    console.log("Camera Permission:", camPermission.state);
    console.log("Microphone Permission:", micPermission.state);

    // Listen to permission state changes
    camPermission.onchange = () =>
      console.log("Camera permission changed to", camPermission.state);
    micPermission.onchange = () =>
      console.log("Mic permission changed to", micPermission.state);

    if (
      camPermission.state === "granted" &&
      micPermission.state === "granted"
    ) {
      console.log("Permissions already granted");
    }

    // This will still show prompt if permission not granted yet
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    console.log("Accessed camera/mic", stream);
  } catch (err) {
    console.error("Permission denied or error:", err);
  }
}

askPermissionAndUseMedia();

navigator.clipboard.writeText("Hello World!"); // write to clipboard
navigator.clipboard.readText().then(console.log);
