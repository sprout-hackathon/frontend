export const getKoreanDate = () => {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Seoul',
  };

  // 한국 시간대에 맞춰서 날짜 포맷 변경
  const koreanDate = now
    .toLocaleString('ko-KR', options)
    .split('. ')
    .join('-')
    .replace('.', '')
    .trim();
  return koreanDate;
};
