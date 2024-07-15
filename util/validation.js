export function isToday(timestamp) {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

export function timestampToDate(timestamp) {
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
  }

  export function calculateTotalNutrition(data) {
    // Menghitung total nutrisi dari makanan dalam data yang difilter
    const totals = data.reduce((totals, item) => {
      item.makanan.forEach(food => {
        totals.totalCalories += Math.round(food.calories);
        totals.totalFats += Math.round(food.fats);
        totals.totalCarbs += Math.round(food.carbs);
        totals.totalProteins += Math.round(food.proteins);
      });
      return totals;
    }, { totalCalories: 0, totalFats: 0, totalCarbs: 0, totalProteins: 0 });
  
    return totals;
  }

  export function formatDate(dateString) {
    const date = new Date(dateString);
  
    // Mendapatkan jam dan menit
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  
    // Mendapatkan hari, bulan, dan tahun
    const day = date.getUTCDate();
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    // Membentuk string dalam format hh.mm 15 Juli 2024
    return `${hours}.${minutes} ${day} ${month} ${year}`;
  }