export const getSeason = (): string => {
  const month: number = new Date().getMonth(); // Отримуємо номер місяця (0 - січень, 11 - грудень)

  if (month >= 2 && month <= 4) return "spring flowers";
  if (month >= 5 && month <= 7) return "summer beach";
  if (month >= 8 && month <= 10) return "autumn leaves";
  return "winter snow";
};
