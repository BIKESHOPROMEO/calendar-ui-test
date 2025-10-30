const schedule = {
  '2025-09-15': [
    { customer: '山田太郎', car: 'プリウス', task: 'オイル交換' },
    { customer: '佐藤花子', car: 'N-BOX', task: 'タイヤ交換' },
  ],
  '2025-09-16': [
    { customer: '田中一郎', car: 'ハイエース', task: '車検' },
  ],
};

export function getSchedule(dateStr) {
  return schedule[dateStr] || [];
}