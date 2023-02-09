function dateFormat(dtStr) {
  // 定义时间格式
  const dt = new Date(dtStr);
  const y = padZero(dt.getFullYear());
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());
  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
function padZero(n) {
  // eslint-disable-next-line no-self-assign
  n > 9 ? n = n : n = '0' + n;
  return n;
}
module.exports = dateFormat;
