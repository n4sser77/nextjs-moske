interface PrayerTimes {
    Date: number;
    Day: string;
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
}

function calculatePrayerTimes(latitude: number, longitude: number, date: Date): PrayerTimes {
    const times = {
        fajr: 5.3,
        sunrise: 6,
        dhuhr: 12.5,
        asr: 16,
        maghrib: 18.5,
        isha: 19.7
    };

    const julianDate = date.getTime() / 86400000 - 0.5 + 2440588.5 - longitude / 360;
    const t = julianDate / 36525;
    const longitudeHour = longitude / 15;

    let fajr = times.fajr - longitudeHour - 0.0069 - 6.595 * Math.cos(0.0172 * 1900);
    let sunrise = times.sunrise - longitudeHour - 0.0053 - 6.595 * Math.cos(0.0172 * 1600);
    let dhuhr = times.dhuhr - longitudeHour - 0.0053 - 6.595 * Math.cos(0.0172 * 1400);
    let asr = times.asr - longitudeHour - 0.0048 - 6.595 * Math.cos(0.0172 * 900);
    let maghrib = times.maghrib - longitudeHour - 0.0027 - 6.595 * Math.cos(0.0172 * 400);
    let isha = times.isha - longitudeHour - 0.0027 - 6.595 * Math.cos(0.0172 * 250);

    const adjust = [0, 0, 0, 0, 0, 0, 0, 0];

    const result: PrayerTimes = {
        Date: date.getDate(),
        Day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()],
        Fajr: `${Math.floor(fajr) % 24}:${Math.floor(fajr % 1 * 60)}`,
        Sunrise: `${Math.floor(sunrise) % 24}:${Math.floor(sunrise % 1 * 60)}`,
        Dhuhr: `${Math.floor(dhuhr) % 24}:${Math.floor(dhuhr % 1 * 60)}`,
        Asr: `${Math.floor(asr) % 24}:${Math.floor(asr % 1 * 60)}`,
        Maghrib: `${Math.floor(maghrib) % 24}:${Math.floor(maghrib % 1 * 60)}`,
        Isha: `${Math.floor(isha) % 24}:${Math.floor(isha % 1 * 60)}`
    };

    return result;
}

// Example usage:
const latitude = 59.3293; // Stockholm, Sweden
const longitude = 18.0686; // Stockholm, Sweden
const date = new Date(); // Current date

const prayerTimes = calculatePrayerTimes(latitude, longitude, date);
console.log('Prayer Times for', date.toDateString());
console.log('Fajr:', prayerTimes.Fajr);
console.log('Sunrise:', prayerTimes.Sunrise);
console.log('Dhuhr:', prayerTimes.Dhuhr);
console.log('Asr:', prayerTimes.Asr);
console.log('Maghrib:', prayerTimes.Maghrib);
console.log('Isha:', prayerTimes.Isha);
