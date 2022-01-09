const videoPlayer = document.querySelector("#videoPlayer");

const chooseScreen = async (display) => {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getDisplayMedia(display);
  } catch (error) {
    alert("Error: " + error);
  }

  videoPlayer.srcObject = stream;
};
