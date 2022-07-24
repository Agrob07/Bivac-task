export const coordsValidator = (data) => {
  if (data.latitude <= -90 || data.latitude >= 90) {
    return;
  } else if (data.longitude <= -180 || data.longitude >= 180) {
    return;
  } else {
    return true;
  }
};
