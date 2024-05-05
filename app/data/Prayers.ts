export interface PrayerTime {
    Date: string;
    Day: string;
    Fajr: string;
    Shuruq: string;
    Zuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
}

const rawData: string = 
`Date;Day;Fajr;Shuruq;Zuhr;Asr;Maghrib;Isha
1;Torsdag;06:06;07:58;12:07;13:47;16:13;17:58
2;Fredag;06:05;07:56;12:07;13:48;16:15;18:00
3;Lördag;06:03;07:53;12:07;13:50;16:18;18:02
4;Söndag;06:01;07:51;12:08;13:52;16:20;18:04
5;Måndag;05:59;07:49;12:08;13:54;16:23;18:06
6;Tisdag;05:57;07:47;12:08;13:56;16:25;18:08
7;Onsdag;05:55;07:44;12:08;13:58;16:28;18:10
8;Torsdag;05:53;07:42;12:08;14:00;16:30;18:12
9;Fredag;05:51;07:39;12:08;14:01;16:33;18:14
10;Lördag;05:49;07:37;12:08;14:03;16:35;18:16
11;Söndag;05:47;07:35;12:08;14:05;16:38;18:19
12;Mandag;05:45;07:32;12:08;14:07;16:40;18:21
13;Tisdag;05:43;07:30;12:08;14:09;16:43;18:23
14;Onsdag;05:41;07:27;12:08;14:11;16:45;18:25
15;Torsdag;05:39;07:25;12:08;14:13;16:48;18:27
16;Fredag;05:37;07:22;12:08;14:14;16:50;18:29
17;Lördag;05:35;07:20;12:08;14:16;16:53;18:31
18;Söndag;05:32;07:17;12:08;14:18;16:55;18:34
19;Måndag;05:30;07:14;12:08;14:20;16:57;18:36
20;Tisdag;05:28;07:12;12:08;14:22;17:00;18:38
21;Onsdag;05:26;07:09;12:08;14:24;17:02;18:40
22;Torsdag;05:23;07:07;12:08;14:25;17:05;18:42
23;Fredag;05:21;07:04;12:08;14:27;17:07;18:44
24;Lördag;05:18;07:01;12:07;14:29;17:10;18:46
25;Söndag;05:16;07:58;12:07;14:31;17:12;18:49
26;Måndag;05:14;06:56;12:07;14:33;17:15;18:51
27;Tisdag;05:11;06:53;12:07;14:34;17:17;18:53
28;Onsdag;05:09;06:50;12:07;14:36;17:19;18:55`;

const rows: string[] = rawData.split('\n');
const headers: string[] = rows.shift()?.split(';') || [];
export const data: PrayerTime[] = rows.map(row => {
    const values: string[] = row.split(';');
    return headers.reduce((obj: any, header: string, index: number) => {
        obj[header as keyof PrayerTime] = values[index];
        return obj;
    }, {} as PrayerTime);
});