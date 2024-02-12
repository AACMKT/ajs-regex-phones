export default function phoneNumFormatter(phoneNum) {
  return phoneNum.replace(/[- _/()]/g, '').replace(/^(8)/, '+7');
}
