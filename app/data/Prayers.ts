export interface PrayerTimes {
    Date: number;
    Day: string;
    Fajr: string;
    Shuruq: string;
    Zuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
}

const rawData: any = 
`Date;Day;Fajr;Shuruq;Zuhr;Asr;Maghrib;Isha
1;Onsdag;03:14;04:52;12:51;17:00;20:46;22:17
2;Torsdag;03:11;04:49;12:51;17:01;20:48;22:20
3;Fredag;03:09;04:47;12:51;17:02;20:50;22:22
4;Lördag;03:06;04:44;12:51;17:03;20:53;22:24
5;Söndag;03:03;04:42;12:50;17:04;20:55;22:27
6;Mandag;03:01;04:39;12:50;17:05;20:57;22:29
7;Tisdag;02:58;04:37;12:50;17:06;21:00;22:31
8;Onsdag;02:56;04:34;12:50;17:07;21:02;22:34
9;Torsdag;02:53;04:32;12:50;17:08;21:04;22:36
10;Fredag;02:51;04:30;12:50;17:09;21:07;22:38
11;Lördag;02:49;04:27;12:50;17:10;21:09;22:41
12;Söndag;02:46;04:25;12:50;17:11;21:11;22:43
13;Mandag;02:44;04:23;12:50;17:12;21:13;22:45
14;Tisdag;02:42;04:21;12:50;17:12;21:16;22:48
15;Onsdag;02:39;04:19;12:50;17:13;21:18;22:50
16;Torsdag;02:37;04:16;12:50;17:14;21:20;22:52
17;Fredag;02:35;04:14;12:50;17:15;21:22;22:54
18;Lördag;02:33;04:12;12:50;17:16;21:24;22:56
19;Söndag;02:31;04:10;12:50;17:17;21:27;22:59
20;Mandag;02:29;04:08;12:50;17:17;21:29;23:01
21;Tisdag;02:27;04:06;12:51;17:18;21:31;23:03
22;Onsdag;02:25;04:05;12:51;17:19;21:33;23:05
23;Torsdag;02:23;04:03;12:51;17:20;21:35;23:07
24;Fredag;02:21;04:01;12:51;17:21;21:37;23:09
25;Lördag;02:19;03:59;12:51;17:21;21:39;23:11
26;Söndag;02:18;03:57;12:51;17:22;21:41;23:13
27;Mandag;02:16;03:56;12:51;17:23;21:43;23:15
28;Tisdag;02:14;03:54;12:51;17:23;21:44;23:17
29;Onsdag;02:13;03:53;12:51;17:24;21:46;23:18
30;Torsdag;02:11;03:51;12:52;17:25;21:48;23:20
31;Fredag;02:10;03:50;12:52;17:25;21:50;23:22`;

const rows: string[] = rawData.split('\n');
const headers: string[] = rows.shift()?.split(';') || [];
export const data: PrayerTimes[] = rows.map(row => {
    const values: string[] = row.split(';');
    return headers.reduce((obj: any, header: string, index: number) => {
        obj[header as keyof PrayerTimes] = index === 0 ? parseInt(values[index], 10) : values[index];
        return obj;
    }, {} as PrayerTimes);
});

