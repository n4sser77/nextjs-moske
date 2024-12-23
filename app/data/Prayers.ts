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
`Date;Day;Fajr;Zuhr;Asr;Maghrib;Isha
1;Lördag;02:08;12:52;17:26;21:51;23:23
2;Söndag;02:07;12:52;17:27;21:53;23:25
3;måndag;02:06;12:52;17:27;21:55;23:27
4;Tisdag;02:05;12:52;17:28;21:56;23:28
5;Onsdag;02:04;12:53;17:28;21:57;23:29
6;Torsdag;02:02;12:53;17:29;21:59;23:31
7;Fredag;02:02;12:53;17:30;22:00;23:32
8;Lördag;02:01;12:53;17:30;22:01;23:33
9;Söndag;02:00;12:53;17:31;22:03;23:34
10;måndag;01:59;12:54;17:31;22:04;23:35
11;Tisdag;01:58;12:54;17:31;22:05;23:37
12;Onsdag;01:58;12:54;17:32;22:06;23:37
13;Torsdag;01:57;12:54;17:32;22:07;23:38
14;Fredag;01:57;12:54;17:33;22:07;23:39
15;Lördag;01:57;12:55;17:33;22:08;23:40
16;Sön-Eid;01:56;12:55;17:33;22:09;23:40
17;måndag;01:56;12:55;17:34;22:09;23:41
18;Tisdag;01:56;12:55;17:34;22:10;23:41
19;Onsdag;01:56;12:55;17:34;22:10;23:42
20;Torsdag;01:56;12:56;17:34;22:10;23:42
21;Fredag;01:56;12:56;17:35;22:11;23:42
22;Lördag;01:57;12:56;17:35;22:11;23:43
23;Söndag;01:57;12:56;17:35;22:11;23:43
24;måndag;01:57;12:56;17:35;22:11;23:43
25;Tisdag;01:58;12:57;17:35;22:11;23:43
26;Onsdag;01:58;12:57;17:35;22:11;23:42
27;Torsdag;01:59;12:57;17:35;22:10;23:42
28;Fredag;02:00;12:57;17:35;22:10;23:42
29;Lördag;02:01;12:57;17:35;22:10;23:41
30;Söndag;02:02;12:58;17:35;22:09;23:41`;

const rows: string[] = rawData.split('\n');
const headers: string[] = rows.shift()?.split(';') || [];
export const data: PrayerTimes[] = rows.map(row => {
    const values: string[] = row.split(';');
    return headers.reduce((obj: any, header: string, index: number) => {
        obj[header as keyof PrayerTimes] = index === 0 ? parseInt(values[index], 10) : values[index];
        return obj;
    }, {} as PrayerTimes);
});

