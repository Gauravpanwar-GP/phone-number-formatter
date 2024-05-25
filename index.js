export default function formatPhoneNumber(phoneNumber, countryCode) {
  if (phoneNumber?.includes("+91") || countryCode) {
    if (phoneNumber?.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length < 8) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 8)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
        3,
        8
      )} ${phoneNumber.slice(8, 13)}`;
    }
  } else {
    if (phoneNumber?.length <= 5) {
      return phoneNumber;
    } else {
      return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5, 10)}`;
    }
  }
}