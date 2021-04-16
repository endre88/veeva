$(document).ready(function() {

/*Az adatok objektumba helyezése*/ 

	  const product = [
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID01",
      "Number of product sold": 10
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID02",
      "Number of product sold": 18
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.09.10",
      "Product Id": "PID03",
      "Number of product sold": 6
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID04",
      "Number of product sold": 9
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID05",
      "Number of product sold": 12
    },
    {
      "Account": "Test Test",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.09.05",
      "Product Id": "PID06",
      "Number of product sold": 14
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID07",
      "Number of product sold": 15
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID08",
      "Number of product sold": 19
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Planned_vod",
      "Order date": "2018.09.20",
      "Product Id": "PID09",
      "Number of product sold": 21
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID10",
      "Number of product sold": 14
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID11",
      "Number of product sold": 10
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID01",
      "Number of product sold": 9
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID02",
      "Number of product sold": 23
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID03",
      "Number of product sold": 23
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.09.25",
      "Product Id": "PID04",
      "Number of product sold": 27
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID05",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID06",
      "Number of product sold": 24
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "2018.09.20",
      "Product Id": "PID07",
      "Number of product sold": 17
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.05",
      "Product Id": "PID08",
      "Number of product sold": 29
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.14",
      "Product Id": "PID09",
      "Number of product sold": 14
    },
    {
      "Account": "Leopold Kohn",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.06",
      "Product Id": "PID10",
      "Number of product sold": 27
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.09.20",
      "Product Id": "PID11",
      "Number of product sold": 5
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID01",
      "Number of product sold": 21
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID02",
      "Number of product sold": 13
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.02.21",
      "Product Id": "PID03",
      "Number of product sold": 20
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID04",
      "Number of product sold": 23
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Planned_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID05",
      "Number of product sold": 29
    },
    {
      "Account": "H�pital Cochin",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID06",
      "Number of product sold": 28
    },
    {
      "Account": "Sarah Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.04",
      "Product Id": "PID07",
      "Number of product sold": 15
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.03.21",
      "Product Id": "PID08",
      "Number of product sold": 11
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID09",
      "Number of product sold": 21
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID10",
      "Number of product sold": 7
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Planned_vod",
      "Order date": "2018.09.14",
      "Product Id": "PID11",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID01",
      "Number of product sold": 9
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.03.25",
      "Product Id": "PID02",
      "Number of product sold": 21
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID03",
      "Number of product sold": 16
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID04",
      "Number of product sold": 25
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID05",
      "Number of product sold": 5
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.02.26",
      "Product Id": "PID06",
      "Number of product sold": 11
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.12",
      "Product Id": "PID07",
      "Number of product sold": 29
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.09.05",
      "Product Id": "PID08",
      "Number of product sold": 21
    },
    {
      "Account": "Barbara Parodi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID09",
      "Number of product sold": 25
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.03.25",
      "Product Id": "PID10",
      "Number of product sold": 20
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID11",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID01",
      "Number of product sold": 24
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID02",
      "Number of product sold": 13
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.19",
      "Product Id": "PID03",
      "Number of product sold": 18
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID04",
      "Number of product sold": 28
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID05",
      "Number of product sold": 30
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.09.25",
      "Product Id": "PID06",
      "Number of product sold": 20
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID07",
      "Number of product sold": 8
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "2018.03.18",
      "Product Id": "PID08",
      "Number of product sold": 13
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID09",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID10",
      "Number of product sold": 6
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.12",
      "Product Id": "PID11",
      "Number of product sold": 15
    },
    {
      "Account": "C�cilia Blanchet",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID01",
      "Number of product sold": 23
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID02",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID03",
      "Number of product sold": 20
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.08.31",
      "Product Id": "PID04",
      "Number of product sold": 11
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID05",
      "Number of product sold": 15
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID06",
      "Number of product sold": 9
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID07",
      "Number of product sold": 17
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID08",
      "Number of product sold": 30
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.25",
      "Product Id": "PID09",
      "Number of product sold": 8
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID10",
      "Number of product sold": 23
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.09",
      "Product Id": "PID11",
      "Number of product sold": 30
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID01",
      "Number of product sold": 10
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.08.09",
      "Product Id": "PID02",
      "Number of product sold": 29
    },
    {
      "Account": "Lukas Schorle",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.06",
      "Product Id": "PID03",
      "Number of product sold": 13
    },
    {
      "Account": "Nina Chaucer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID04",
      "Number of product sold": 26
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.26",
      "Product Id": "PID05",
      "Number of product sold": 12
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID06",
      "Number of product sold": 24
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.06",
      "Product Id": "PID07",
      "Number of product sold": 11
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID08",
      "Number of product sold": 24
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID09",
      "Number of product sold": 18
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.20",
      "Product Id": "PID10",
      "Number of product sold": 16
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID11",
      "Number of product sold": 5
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID01",
      "Number of product sold": 10
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID03",
      "Number of product sold": 7
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.28",
      "Product Id": "PID04",
      "Number of product sold": 18
    },
    {
      "Account": "Sarah Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.01.04",
      "Product Id": "PID05",
      "Number of product sold": 18
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.09.25",
      "Product Id": "PID06",
      "Number of product sold": 13
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID07",
      "Number of product sold": 19
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID08",
      "Number of product sold": 25
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID09",
      "Number of product sold": 24
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID10",
      "Number of product sold": 15
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID11",
      "Number of product sold": 9
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID01",
      "Number of product sold": 9
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "2018.09.14",
      "Product Id": "PID02",
      "Number of product sold": 7
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID03",
      "Number of product sold": 11
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID04",
      "Number of product sold": 17
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID05",
      "Number of product sold": 19
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID06",
      "Number of product sold": 11
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.01.08",
      "Product Id": "PID07",
      "Number of product sold": 5
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID08",
      "Number of product sold": 18
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID09",
      "Number of product sold": 25
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID10",
      "Number of product sold": 27
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID11",
      "Number of product sold": 15
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID01",
      "Number of product sold": 11
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.09.05",
      "Product Id": "PID02",
      "Number of product sold": 14
    },
    {
      "Account": "Gonzalo Redriguez",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID03",
      "Number of product sold": 30
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "2018.09.20",
      "Product Id": "PID04",
      "Number of product sold": 7
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.06",
      "Product Id": "PID05",
      "Number of product sold": 8
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID06",
      "Number of product sold": 10
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID07",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID08",
      "Number of product sold": 26
    },
    {
      "Account": "Peer Brinkmann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID09",
      "Number of product sold": 11
    },
    {
      "Account": "Peer Brinkmann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID10",
      "Number of product sold": 16
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "2018.09.07",
      "Product Id": "PID11",
      "Number of product sold": 10
    },
    {
      "Account": "Bj�rn Posse",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.26",
      "Product Id": "PID01",
      "Number of product sold": 30
    },
    {
      "Account": "Central Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.02.09",
      "Product Id": "PID02",
      "Number of product sold": 30
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID03",
      "Number of product sold": 26
    },
    {
      "Account": "Rodrigo Jimenez",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.28",
      "Product Id": "PID04",
      "Number of product sold": 9
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.08.09",
      "Product Id": "PID05",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID06",
      "Number of product sold": 27
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "2018.09.07",
      "Product Id": "PID07",
      "Number of product sold": 17
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID08",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID09",
      "Number of product sold": 5
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID10",
      "Number of product sold": 8
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID11",
      "Number of product sold": 27
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID01",
      "Number of product sold": 25
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID02",
      "Number of product sold": 19
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID03",
      "Number of product sold": 15
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID04",
      "Number of product sold": 11
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID05",
      "Number of product sold": 19
    },
    {
      "Account": "Alberto Fonzi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.09.28",
      "Product Id": "PID06",
      "Number of product sold": 12
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Planned_vod",
      "Order date": "2018.09.07",
      "Product Id": "PID07",
      "Number of product sold": 6
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID08",
      "Number of product sold": 18
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID09",
      "Number of product sold": 8
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID10",
      "Number of product sold": 9
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.09.04",
      "Product Id": "PID01",
      "Number of product sold": 12
    },
    {
      "Account": "Sam Daniels",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "2018.07.05",
      "Product Id": "PID01",
      "Number of product sold": 14
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID02",
      "Number of product sold": 19
    },
    {
      "Account": "MVS Online 2",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID03",
      "Number of product sold": 15
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID04",
      "Number of product sold": 28
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID05",
      "Number of product sold": 22
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID06",
      "Number of product sold": 14
    },
    {
      "Account": "Brad Pitt",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID07",
      "Number of product sold": 27
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID08",
      "Number of product sold": 30
    },
    {
      "Account": "Leopold Kohn",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.09.06",
      "Product Id": "PID09",
      "Number of product sold": 6
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.09.06",
      "Product Id": "PID10",
      "Number of product sold": 14
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.01.01",
      "Product Id": "PID11",
      "Number of product sold": 18
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.05",
      "Product Id": "PID01",
      "Number of product sold": 26
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID02",
      "Number of product sold": 20
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.09.10",
      "Product Id": "PID03",
      "Number of product sold": 23
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID04",
      "Number of product sold": 26
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID05",
      "Number of product sold": 24
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID06",
      "Number of product sold": 27
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID07",
      "Number of product sold": 20
    },
    {
      "Account": "Lukas Schorle",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.04",
      "Product Id": "PID08",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID09",
      "Number of product sold": 29
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID10",
      "Number of product sold": 25
    },
    {
      "Account": "Sarah Jones",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.02",
      "Product Id": "PID11",
      "Number of product sold": 18
    },
    {
      "Account": "WienerKlinik",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.03",
      "Product Id": "PID01",
      "Number of product sold": 22
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID02",
      "Number of product sold": 12
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.05",
      "Product Id": "PID03",
      "Number of product sold": 29
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID04",
      "Number of product sold": 17
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID05",
      "Number of product sold": 15
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID06",
      "Number of product sold": 22
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID07",
      "Number of product sold": 6
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID08",
      "Number of product sold": 24
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID09",
      "Number of product sold": 9
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.09.10",
      "Product Id": "PID10",
      "Number of product sold": 5
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID11",
      "Number of product sold": 22
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.09.25",
      "Product Id": "PID01",
      "Number of product sold": 28
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID02",
      "Number of product sold": 17
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.09.10",
      "Product Id": "PID03",
      "Number of product sold": 12
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.06",
      "Product Id": "PID04",
      "Number of product sold": 15
    },
    {
      "Account": "Jesualdo Bustos Mu?iz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID05",
      "Number of product sold": 9
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID06",
      "Number of product sold": 25
    },
    {
      "Account": "Sarah Jones",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.10.03",
      "Product Id": "PID07",
      "Number of product sold": 22
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.24",
      "Product Id": "PID08",
      "Number of product sold": 7
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID09",
      "Number of product sold": 5
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.14",
      "Product Id": "PID10",
      "Number of product sold": 30
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID11",
      "Number of product sold": 22
    },
    {
      "Account": "C�cilia Blanchet",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.09.28",
      "Product Id": "PID01",
      "Number of product sold": 17
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID01",
      "Number of product sold": 11
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID02",
      "Number of product sold": 6
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Planned_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID03",
      "Number of product sold": 28
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.09.17",
      "Product Id": "PID04",
      "Number of product sold": 19
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID05",
      "Number of product sold": 30
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID06",
      "Number of product sold": 19
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID07",
      "Number of product sold": 15
    },
    {
      "Account": "Barbara Parodi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.01.08",
      "Product Id": "PID08",
      "Number of product sold": 7
    },
    {
      "Account": "Leo Wood",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID09",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.17",
      "Product Id": "PID10",
      "Number of product sold": 19
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.10.09",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.04",
      "Product Id": "PID01",
      "Number of product sold": 5
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID02",
      "Number of product sold": 5
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.20",
      "Product Id": "PID03",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.21",
      "Product Id": "PID04",
      "Number of product sold": 12
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID05",
      "Number of product sold": 7
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID06",
      "Number of product sold": 29
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID07",
      "Number of product sold": 24
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.09.11",
      "Product Id": "PID08",
      "Number of product sold": 13
    },
    {
      "Account": "Sarah Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.04",
      "Product Id": "PID09",
      "Number of product sold": 5
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.09.18",
      "Product Id": "PID10",
      "Number of product sold": 17
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.09.13",
      "Product Id": "PID01",
      "Number of product sold": 9
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.09.17",
      "Product Id": "PID02",
      "Number of product sold": 21
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID03",
      "Number of product sold": 20
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID04",
      "Number of product sold": 22
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "2018.09.12",
      "Product Id": "PID05",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.09.05",
      "Product Id": "PID06",
      "Number of product sold": 8
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.17",
      "Product Id": "PID07",
      "Number of product sold": 10
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.09.19",
      "Product Id": "PID08",
      "Number of product sold": 9
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID09",
      "Number of product sold": 26
    },
    {
      "Account": "Maxim Shultz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.03",
      "Product Id": "PID10",
      "Number of product sold": 11
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.14",
      "Product Id": "PID11",
      "Number of product sold": 15
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID01",
      "Number of product sold": 14
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID02",
      "Number of product sold": 17
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Planned_vod",
      "Order date": "2018.08.15",
      "Product Id": "PID03",
      "Number of product sold": 28
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.09.05",
      "Product Id": "PID04",
      "Number of product sold": 25
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.09.25",
      "Product Id": "PID05",
      "Number of product sold": 8
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.08",
      "Product Id": "PID06",
      "Number of product sold": 21
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID07",
      "Number of product sold": 14
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID08",
      "Number of product sold": 25
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.01.12",
      "Product Id": "PID09",
      "Number of product sold": 17
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID10",
      "Number of product sold": 24
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID11",
      "Number of product sold": 14
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID01",
      "Number of product sold": 24
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.03.10",
      "Product Id": "PID01",
      "Number of product sold": 21
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.08.17",
      "Product Id": "PID02",
      "Number of product sold": 17
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID03",
      "Number of product sold": 22
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.03.14",
      "Product Id": "PID04",
      "Number of product sold": 24
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Planned_vod",
      "Order date": "2018.08.15",
      "Product Id": "PID05",
      "Number of product sold": 15
    },
    {
      "Account": "Karolinska Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID06",
      "Number of product sold": 12
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2018.02.17",
      "Product Id": "PID07",
      "Number of product sold": 13
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID08",
      "Number of product sold": 17
    },
    {
      "Account": "Rebecca Hill",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.11",
      "Product Id": "PID09",
      "Number of product sold": 25
    },
    {
      "Account": "John Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.09.14",
      "Product Id": "PID10",
      "Number of product sold": 10
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.01.12",
      "Product Id": "PID11",
      "Number of product sold": 15
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID01",
      "Number of product sold": 30
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID02",
      "Number of product sold": 9
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID03",
      "Number of product sold": 26
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID04",
      "Number of product sold": 22
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID05",
      "Number of product sold": 27
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID06",
      "Number of product sold": 26
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.12",
      "Product Id": "PID07",
      "Number of product sold": 10
    },
    {
      "Account": "Karolinska Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID08",
      "Number of product sold": 17
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.10.15",
      "Product Id": "PID09",
      "Number of product sold": 16
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "2018.10.12",
      "Product Id": "PID10",
      "Number of product sold": 13
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.17",
      "Product Id": "PID11",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "2018.08.15",
      "Product Id": "PID01",
      "Number of product sold": 5
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.14",
      "Product Id": "PID02",
      "Number of product sold": 28
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.03.17",
      "Product Id": "PID03",
      "Number of product sold": 17
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID04",
      "Number of product sold": 26
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.17",
      "Product Id": "PID05",
      "Number of product sold": 8
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID06",
      "Number of product sold": 9
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.03.10",
      "Product Id": "PID07",
      "Number of product sold": 21
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID08",
      "Number of product sold": 24
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID09",
      "Number of product sold": 12
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID10",
      "Number of product sold": 22
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID11",
      "Number of product sold": 10
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID01",
      "Number of product sold": 23
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.14",
      "Product Id": "PID03",
      "Number of product sold": 8
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID04",
      "Number of product sold": 14
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID05",
      "Number of product sold": 29
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "2018.08.15",
      "Product Id": "PID06",
      "Number of product sold": 30
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID07",
      "Number of product sold": 26
    },
    {
      "Account": "C�cilia Blanchet",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID08",
      "Number of product sold": 21
    },
    {
      "Account": "Central Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID09",
      "Number of product sold": 11
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.08.09",
      "Product Id": "PID10",
      "Number of product sold": 28
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.03.10",
      "Product Id": "PID11",
      "Number of product sold": 14
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID01",
      "Number of product sold": 13
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID02",
      "Number of product sold": 8
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID03",
      "Number of product sold": 28
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID04",
      "Number of product sold": 11
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.06.15",
      "Product Id": "PID05",
      "Number of product sold": 29
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID06",
      "Number of product sold": 21
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID07",
      "Number of product sold": 19
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.06.10",
      "Product Id": "PID08",
      "Number of product sold": 17
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.31",
      "Product Id": "PID09",
      "Number of product sold": 30
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "2018.08.30",
      "Product Id": "PID10",
      "Number of product sold": 12
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.08.24",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Jane White",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.28",
      "Product Id": "PID01",
      "Number of product sold": 17
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID02",
      "Number of product sold": 21
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.05.29",
      "Product Id": "PID03",
      "Number of product sold": 16
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID04",
      "Number of product sold": 23
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID05",
      "Number of product sold": 30
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.05.29",
      "Product Id": "PID06",
      "Number of product sold": 24
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.06.07",
      "Product Id": "PID07",
      "Number of product sold": 25
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.08.18",
      "Product Id": "PID08",
      "Number of product sold": 9
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID09",
      "Number of product sold": 13
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.08.22",
      "Product Id": "PID10",
      "Number of product sold": 6
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.08.22",
      "Product Id": "PID11",
      "Number of product sold": 28
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID01",
      "Number of product sold": 29
    },
    {
      "Account": "Jon Doe",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID02",
      "Number of product sold": 26
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID03",
      "Number of product sold": 29
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID04",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID05",
      "Number of product sold": 22
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID06",
      "Number of product sold": 16
    },
    {
      "Account": "Peak View Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID07",
      "Number of product sold": 28
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID08",
      "Number of product sold": 17
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID09",
      "Number of product sold": 26
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.06.09",
      "Product Id": "PID10",
      "Number of product sold": 5
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID11",
      "Number of product sold": 23
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID01",
      "Number of product sold": 18
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.11",
      "Product Id": "PID02",
      "Number of product sold": 21
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.08.18",
      "Product Id": "PID03",
      "Number of product sold": 5
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID04",
      "Number of product sold": 17
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID05",
      "Number of product sold": 5
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID06",
      "Number of product sold": 23
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID07",
      "Number of product sold": 12
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID08",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID09",
      "Number of product sold": 30
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.04.08",
      "Product Id": "PID10",
      "Number of product sold": 24
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID11",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID01",
      "Number of product sold": 8
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID02",
      "Number of product sold": 5
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID03",
      "Number of product sold": 24
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID04",
      "Number of product sold": 8
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID05",
      "Number of product sold": 9
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.08",
      "Product Id": "PID06",
      "Number of product sold": 25
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID07",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID08",
      "Number of product sold": 13
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.06.09",
      "Product Id": "PID09",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID10",
      "Number of product sold": 23
    },
    {
      "Account": "Massimiliano Nazionale",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID01",
      "Number of product sold": 14
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.11",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID03",
      "Number of product sold": 25
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.08.18",
      "Product Id": "PID04",
      "Number of product sold": 26
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.08.23",
      "Product Id": "PID05",
      "Number of product sold": 19
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID06",
      "Number of product sold": 23
    },
    {
      "Account": "Eweline Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.02.21",
      "Product Id": "PID07",
      "Number of product sold": 16
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID08",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID09",
      "Number of product sold": 28
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "2018.05.31",
      "Product Id": "PID10",
      "Number of product sold": 17
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID11",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.06.05",
      "Product Id": "PID01",
      "Number of product sold": 30
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID02",
      "Number of product sold": 17
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID03",
      "Number of product sold": 29
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID04",
      "Number of product sold": 22
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID05",
      "Number of product sold": 23
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID06",
      "Number of product sold": 17
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID07",
      "Number of product sold": 6
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "2018.03.21",
      "Product Id": "PID08",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.05.08",
      "Product Id": "PID09",
      "Number of product sold": 7
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.05.09",
      "Product Id": "PID10",
      "Number of product sold": 30
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID11",
      "Number of product sold": 14
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Planned_vod",
      "Order date": "2018.05.29",
      "Product Id": "PID01",
      "Number of product sold": 17
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.05.08",
      "Product Id": "PID02",
      "Number of product sold": 13
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "2018.05.30",
      "Product Id": "PID03",
      "Number of product sold": 24
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Planned_vod",
      "Order date": "2018.05.16",
      "Product Id": "PID04",
      "Number of product sold": 17
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.05.29",
      "Product Id": "PID05",
      "Number of product sold": 8
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID06",
      "Number of product sold": 21
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID07",
      "Number of product sold": 24
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID08",
      "Number of product sold": 17
    },
    {
      "Account": "Beno�t Bellegarde",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID09",
      "Number of product sold": 10
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID10",
      "Number of product sold": 10
    },
    {
      "Account": "Alberto Fonzi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID11",
      "Number of product sold": 28
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Planned_vod",
      "Order date": "2018.08.31",
      "Product Id": "PID01",
      "Number of product sold": 14
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID01",
      "Number of product sold": 24
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.30",
      "Product Id": "PID02",
      "Number of product sold": 11
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.14",
      "Product Id": "PID03",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.08.22",
      "Product Id": "PID04",
      "Number of product sold": 11
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID05",
      "Number of product sold": 25
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID06",
      "Number of product sold": 25
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.28",
      "Product Id": "PID07",
      "Number of product sold": 15
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.22",
      "Product Id": "PID08",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "2018.05.18",
      "Product Id": "PID09",
      "Number of product sold": 20
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.15",
      "Product Id": "PID10",
      "Number of product sold": 5
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.11",
      "Product Id": "PID11",
      "Number of product sold": 26
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID01",
      "Number of product sold": 28
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "2018.05.16",
      "Product Id": "PID02",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID03",
      "Number of product sold": 18
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.08.22",
      "Product Id": "PID04",
      "Number of product sold": 9
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID05",
      "Number of product sold": 19
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID06",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID07",
      "Number of product sold": 29
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.11",
      "Product Id": "PID08",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "2018.05.16",
      "Product Id": "PID09",
      "Number of product sold": 5
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID10",
      "Number of product sold": 30
    },
    {
      "Account": "Sarah Moore",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.11",
      "Product Id": "PID11",
      "Number of product sold": 21
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.11",
      "Product Id": "PID01",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.11",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Jon Doe",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.28",
      "Product Id": "PID03",
      "Number of product sold": 17
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.28",
      "Product Id": "PID04",
      "Number of product sold": 16
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID05",
      "Number of product sold": 15
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID06",
      "Number of product sold": 11
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.18",
      "Product Id": "PID07",
      "Number of product sold": 10
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.22",
      "Product Id": "PID08",
      "Number of product sold": 26
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.28",
      "Product Id": "PID09",
      "Number of product sold": 9
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID10",
      "Number of product sold": 7
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.30",
      "Product Id": "PID11",
      "Number of product sold": 16
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID01",
      "Number of product sold": 5
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Planned_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID02",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.06.12",
      "Product Id": "PID03",
      "Number of product sold": 5
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.08.24",
      "Product Id": "PID04",
      "Number of product sold": 20
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "2018.08.25",
      "Product Id": "PID05",
      "Number of product sold": 26
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID06",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID07",
      "Number of product sold": 25
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID08",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.08.24",
      "Product Id": "PID09",
      "Number of product sold": 28
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "2018.08.20",
      "Product Id": "PID10",
      "Number of product sold": 29
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID11",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.05.22",
      "Product Id": "PID01",
      "Number of product sold": 22
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID01",
      "Number of product sold": 29
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.30",
      "Product Id": "PID01",
      "Number of product sold": 22
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "2018.05.28",
      "Product Id": "PID02",
      "Number of product sold": 20
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID03",
      "Number of product sold": 17
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "2018.05.18",
      "Product Id": "PID04",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.14",
      "Product Id": "PID05",
      "Number of product sold": 25
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID06",
      "Number of product sold": 8
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.05.23",
      "Product Id": "PID07",
      "Number of product sold": 21
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.06.16",
      "Product Id": "PID08",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.22",
      "Product Id": "PID09",
      "Number of product sold": 11
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID10",
      "Number of product sold": 10
    },
    {
      "Account": "Massimiliano Nazionale",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID11",
      "Number of product sold": 18
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.18",
      "Product Id": "PID01",
      "Number of product sold": 12
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID03",
      "Number of product sold": 23
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "2018.06.15",
      "Product Id": "PID04",
      "Number of product sold": 11
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID05",
      "Number of product sold": 22
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.04",
      "Product Id": "PID06",
      "Number of product sold": 19
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID07",
      "Number of product sold": 13
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID08",
      "Number of product sold": 14
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID09",
      "Number of product sold": 29
    },
    {
      "Account": "Henry Smith",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID10",
      "Number of product sold": 24
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID11",
      "Number of product sold": 5
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.06.22",
      "Product Id": "PID01",
      "Number of product sold": 20
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID02",
      "Number of product sold": 7
    },
    {
      "Account": "Leo Wood",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID03",
      "Number of product sold": 19
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.09",
      "Product Id": "PID04",
      "Number of product sold": 22
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID05",
      "Number of product sold": 24
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.04.04",
      "Product Id": "PID06",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID07",
      "Number of product sold": 5
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID08",
      "Number of product sold": 23
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.19",
      "Product Id": "PID09",
      "Number of product sold": 13
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID10",
      "Number of product sold": 20
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID11",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID01",
      "Number of product sold": 20
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID02",
      "Number of product sold": 13
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID03",
      "Number of product sold": 5
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID04",
      "Number of product sold": 11
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID05",
      "Number of product sold": 6
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID06",
      "Number of product sold": 6
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2018.08.30",
      "Product Id": "PID07",
      "Number of product sold": 24
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID08",
      "Number of product sold": 29
    },
    {
      "Account": "Peak View Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.08.24",
      "Product Id": "PID09",
      "Number of product sold": 23
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID10",
      "Number of product sold": 14
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID11",
      "Number of product sold": 14
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "2018.08.30",
      "Product Id": "PID01",
      "Number of product sold": 13
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID02",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID03",
      "Number of product sold": 27
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID04",
      "Number of product sold": 20
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID05",
      "Number of product sold": 9
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID06",
      "Number of product sold": 22
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID07",
      "Number of product sold": 23
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.05",
      "Product Id": "PID08",
      "Number of product sold": 28
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID09",
      "Number of product sold": 11
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID10",
      "Number of product sold": 7
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID11",
      "Number of product sold": 6
    },
    {
      "Account": "Luca Toni",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID01",
      "Number of product sold": 11
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.18",
      "Product Id": "PID02",
      "Number of product sold": 13
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.08.24",
      "Product Id": "PID03",
      "Number of product sold": 20
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.31",
      "Product Id": "PID04",
      "Number of product sold": 12
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID05",
      "Number of product sold": 15
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID06",
      "Number of product sold": 14
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.06.19",
      "Product Id": "PID07",
      "Number of product sold": 21
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.06.19",
      "Product Id": "PID08",
      "Number of product sold": 16
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Planned_vod",
      "Order date": "2018.06.25",
      "Product Id": "PID09",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.06.08",
      "Product Id": "PID10",
      "Number of product sold": 30
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID11",
      "Number of product sold": 11
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID01",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.05.29",
      "Product Id": "PID02",
      "Number of product sold": 17
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID03",
      "Number of product sold": 21
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID04",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID05",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID06",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID07",
      "Number of product sold": 15
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.05.10",
      "Product Id": "PID08",
      "Number of product sold": 18
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.11",
      "Product Id": "PID09",
      "Number of product sold": 21
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID10",
      "Number of product sold": 22
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.13",
      "Product Id": "PID11",
      "Number of product sold": 11
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID01",
      "Number of product sold": 30
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID02",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "2018.05.16",
      "Product Id": "PID03",
      "Number of product sold": 19
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID04",
      "Number of product sold": 18
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.08.25",
      "Product Id": "PID05",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.08.23",
      "Product Id": "PID06",
      "Number of product sold": 9
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.08.24",
      "Product Id": "PID07",
      "Number of product sold": 20
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.29",
      "Product Id": "PID08",
      "Number of product sold": 30
    },
    {
      "Account": "Sarah Moore",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID09",
      "Number of product sold": 9
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.30",
      "Product Id": "PID10",
      "Number of product sold": 11
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID11",
      "Number of product sold": 20
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID01",
      "Number of product sold": 29
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.06.11",
      "Product Id": "PID02",
      "Number of product sold": 24
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.14",
      "Product Id": "PID03",
      "Number of product sold": 17
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID04",
      "Number of product sold": 25
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID05",
      "Number of product sold": 21
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID06",
      "Number of product sold": 22
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID07",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID08",
      "Number of product sold": 28
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.06.12",
      "Product Id": "PID09",
      "Number of product sold": 14
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.22",
      "Product Id": "PID10",
      "Number of product sold": 26
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID01",
      "Number of product sold": 18
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID02",
      "Number of product sold": 18
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.22",
      "Product Id": "PID03",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID04",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.13",
      "Product Id": "PID05",
      "Number of product sold": 26
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.05.09",
      "Product Id": "PID06",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID07",
      "Number of product sold": 20
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID08",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID09",
      "Number of product sold": 22
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID10",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID11",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID01",
      "Number of product sold": 23
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.05.18",
      "Product Id": "PID02",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.17",
      "Product Id": "PID03",
      "Number of product sold": 21
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.31",
      "Product Id": "PID04",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID05",
      "Number of product sold": 22
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.22",
      "Product Id": "PID06",
      "Number of product sold": 8
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.28",
      "Product Id": "PID07",
      "Number of product sold": 21
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.05.15",
      "Product Id": "PID08",
      "Number of product sold": 26
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.05.22",
      "Product Id": "PID09",
      "Number of product sold": 26
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.05.23",
      "Product Id": "PID10",
      "Number of product sold": 24
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID11",
      "Number of product sold": 25
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.06.16",
      "Product Id": "PID01",
      "Number of product sold": 21
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID02",
      "Number of product sold": 27
    },
    {
      "Account": "Leo Wood",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.13",
      "Product Id": "PID03",
      "Number of product sold": 19
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.05.23",
      "Product Id": "PID04",
      "Number of product sold": 17
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.06.01",
      "Product Id": "PID05",
      "Number of product sold": 11
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.05.31",
      "Product Id": "PID06",
      "Number of product sold": 5
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID07",
      "Number of product sold": 27
    },
    {
      "Account": "Henry Smith",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID08",
      "Number of product sold": 14
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID09",
      "Number of product sold": 21
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.05.31",
      "Product Id": "PID10",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID11",
      "Number of product sold": 20
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.09",
      "Product Id": "PID01",
      "Number of product sold": 12
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID01",
      "Number of product sold": 14
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.14",
      "Product Id": "PID02",
      "Number of product sold": 9
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID03",
      "Number of product sold": 12
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.13",
      "Product Id": "PID04",
      "Number of product sold": 5
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "2018.05.25",
      "Product Id": "PID05",
      "Number of product sold": 25
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID06",
      "Number of product sold": 11
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.04",
      "Product Id": "PID07",
      "Number of product sold": 27
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.05",
      "Product Id": "PID08",
      "Number of product sold": 30
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID09",
      "Number of product sold": 13
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.06.19",
      "Product Id": "PID10",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID11",
      "Number of product sold": 19
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID01",
      "Number of product sold": 16
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.06.19",
      "Product Id": "PID02",
      "Number of product sold": 12
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID03",
      "Number of product sold": 22
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID04",
      "Number of product sold": 11
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Planned_vod",
      "Order date": "2018.06.22",
      "Product Id": "PID05",
      "Number of product sold": 13
    },
    {
      "Account": "St. Martin Clinique",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID06",
      "Number of product sold": 13
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID07",
      "Number of product sold": 10
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.06.18",
      "Product Id": "PID08",
      "Number of product sold": 21
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.06.19",
      "Product Id": "PID09",
      "Number of product sold": 13
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID10",
      "Number of product sold": 13
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Planned_vod",
      "Order date": "2018.06.25",
      "Product Id": "PID11",
      "Number of product sold": 24
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID01",
      "Number of product sold": 13
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.06.21",
      "Product Id": "PID02",
      "Number of product sold": 29
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.08.23",
      "Product Id": "PID03",
      "Number of product sold": 21
    },
    {
      "Account": "Beno�t Bellegarde",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.27",
      "Product Id": "PID04",
      "Number of product sold": 25
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID05",
      "Number of product sold": 30
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.19",
      "Product Id": "PID06",
      "Number of product sold": 5
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID07",
      "Number of product sold": 21
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID08",
      "Number of product sold": 18
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.04",
      "Product Id": "PID09",
      "Number of product sold": 23
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID10",
      "Number of product sold": 28
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID11",
      "Number of product sold": 21
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID01",
      "Number of product sold": 5
    },
    {
      "Account": "Sean Dunne",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.03.11",
      "Product Id": "PID02",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID03",
      "Number of product sold": 8
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.20",
      "Product Id": "PID04",
      "Number of product sold": 10
    },
    {
      "Account": "Richard Savage",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID05",
      "Number of product sold": 18
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID06",
      "Number of product sold": 28
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID07",
      "Number of product sold": 12
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.07",
      "Product Id": "PID08",
      "Number of product sold": 10
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID09",
      "Number of product sold": 26
    },
    {
      "Account": "Jordi Vidal",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID10",
      "Number of product sold": 10
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID11",
      "Number of product sold": 11
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.03.05",
      "Product Id": "PID01",
      "Number of product sold": 29
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID01",
      "Number of product sold": 11
    },
    {
      "Account": "Guingamp Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.03.11",
      "Product Id": "PID01",
      "Number of product sold": 24
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.07.31",
      "Product Id": "PID02",
      "Number of product sold": 23
    },
    {
      "Account": "Barbara Parodi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID03",
      "Number of product sold": 11
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID04",
      "Number of product sold": 27
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.03.18",
      "Product Id": "PID05",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID06",
      "Number of product sold": 10
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID07",
      "Number of product sold": 20
    },
    {
      "Account": "Solenn Desmarais",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID08",
      "Number of product sold": 19
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID09",
      "Number of product sold": 22
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.03.13",
      "Product Id": "PID10",
      "Number of product sold": 8
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID11",
      "Number of product sold": 19
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID01",
      "Number of product sold": 13
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.20",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID03",
      "Number of product sold": 24
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID04",
      "Number of product sold": 20
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.03.18",
      "Product Id": "PID05",
      "Number of product sold": 7
    },
    {
      "Account": "Tiphaine Thibodeau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID06",
      "Number of product sold": 16
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID07",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID08",
      "Number of product sold": 9
    },
    {
      "Account": "Gilbert Gauthier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Planned_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID09",
      "Number of product sold": 10
    },
    {
      "Account": "Jordi Vidal",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID10",
      "Number of product sold": 20
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID11",
      "Number of product sold": 6
    },
    {
      "Account": "Tiphaine Thibodeau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Planned_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID01",
      "Number of product sold": 29
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID02",
      "Number of product sold": 24
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.07.31",
      "Product Id": "PID03",
      "Number of product sold": 10
    },
    {
      "Account": "Solenn Desmarais",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID04",
      "Number of product sold": 30
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID05",
      "Number of product sold": 14
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.07.31",
      "Product Id": "PID06",
      "Number of product sold": 20
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID07",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID08",
      "Number of product sold": 11
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID09",
      "Number of product sold": 11
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.07.24",
      "Product Id": "PID10",
      "Number of product sold": 7
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID11",
      "Number of product sold": 18
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID01",
      "Number of product sold": 16
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.07.31",
      "Product Id": "PID02",
      "Number of product sold": 27
    },
    {
      "Account": "Jean-Luc Besnard",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID03",
      "Number of product sold": 11
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.18",
      "Product Id": "PID04",
      "Number of product sold": 12
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID05",
      "Number of product sold": 5
    },
    {
      "Account": "Richard Savage",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID06",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID07",
      "Number of product sold": 27
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID08",
      "Number of product sold": 19
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID09",
      "Number of product sold": 9
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID10",
      "Number of product sold": 23
    },
    {
      "Account": "H�pital�Europ�en Georges Pompidou",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.10",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.11",
      "Product Id": "PID01",
      "Number of product sold": 20
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID02",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID03",
      "Number of product sold": 15
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID04",
      "Number of product sold": 24
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID05",
      "Number of product sold": 12
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2018.03.17",
      "Product Id": "PID06",
      "Number of product sold": 22
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID07",
      "Number of product sold": 19
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID08",
      "Number of product sold": 24
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID09",
      "Number of product sold": 16
    },
    {
      "Account": "Berkshire Independent Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID10",
      "Number of product sold": 25
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID11",
      "Number of product sold": 23
    },
    {
      "Account": "Gonzalo Redriguez",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID01",
      "Number of product sold": 5
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID02",
      "Number of product sold": 10
    },
    {
      "Account": "Sean Dunne",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.03.11",
      "Product Id": "PID03",
      "Number of product sold": 9
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID04",
      "Number of product sold": 15
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.04",
      "Product Id": "PID05",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID06",
      "Number of product sold": 14
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Planned_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID07",
      "Number of product sold": 17
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID08",
      "Number of product sold": 10
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID09",
      "Number of product sold": 28
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID10",
      "Number of product sold": 15
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID11",
      "Number of product sold": 17
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID01",
      "Number of product sold": 14
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID02",
      "Number of product sold": 21
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID03",
      "Number of product sold": 6
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID04",
      "Number of product sold": 24
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID05",
      "Number of product sold": 12
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID06",
      "Number of product sold": 27
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID07",
      "Number of product sold": 9
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID08",
      "Number of product sold": 8
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID09",
      "Number of product sold": 11
    },
    {
      "Account": "Sam Daniels",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID10",
      "Number of product sold": 14
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID11",
      "Number of product sold": 15
    },
    {
      "Account": "Eweline Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID01",
      "Number of product sold": 26
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.07.31",
      "Product Id": "PID02",
      "Number of product sold": 11
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID03",
      "Number of product sold": 28
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID04",
      "Number of product sold": 17
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.07",
      "Product Id": "PID05",
      "Number of product sold": 5
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.07",
      "Product Id": "PID06",
      "Number of product sold": 11
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.06.15",
      "Product Id": "PID07",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID08",
      "Number of product sold": 20
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.07",
      "Product Id": "PID09",
      "Number of product sold": 27
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID10",
      "Number of product sold": 9
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Planned_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID11",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID01",
      "Number of product sold": 20
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID02",
      "Number of product sold": 9
    },
    {
      "Account": "Eweline Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID03",
      "Number of product sold": 25
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID04",
      "Number of product sold": 22
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID05",
      "Number of product sold": 21
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID06",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID07",
      "Number of product sold": 14
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID08",
      "Number of product sold": 26
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID09",
      "Number of product sold": 30
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "2018.07.12",
      "Product Id": "PID10",
      "Number of product sold": 7
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "2018.07.23",
      "Product Id": "PID11",
      "Number of product sold": 7
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID01",
      "Number of product sold": 5
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.26",
      "Product Id": "PID02",
      "Number of product sold": 22
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID03",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID04",
      "Number of product sold": 9
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID05",
      "Number of product sold": 26
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID06",
      "Number of product sold": 18
    },
    {
      "Account": "Anatole Bescond",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID07",
      "Number of product sold": 25
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID08",
      "Number of product sold": 24
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.08.02",
      "Product Id": "PID09",
      "Number of product sold": 8
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID10",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID11",
      "Number of product sold": 13
    },
    {
      "Account": "Tiphaine Thibodeau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.10",
      "Product Id": "PID01",
      "Number of product sold": 15
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID02",
      "Number of product sold": 26
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID03",
      "Number of product sold": 5
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID04",
      "Number of product sold": 28
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "2018.07.31",
      "Product Id": "PID05",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID06",
      "Number of product sold": 9
    },
    {
      "Account": "Karen Bell",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "2018.07.30",
      "Product Id": "PID07",
      "Number of product sold": 14
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID08",
      "Number of product sold": 19
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID09",
      "Number of product sold": 22
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID10",
      "Number of product sold": 21
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID11",
      "Number of product sold": 21
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID01",
      "Number of product sold": 15
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID02",
      "Number of product sold": 8
    },
    {
      "Account": "David Barnard",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "2018.07.30",
      "Product Id": "PID03",
      "Number of product sold": 21
    },
    {
      "Account": "Graeme Barber",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "2018.08.14",
      "Product Id": "PID04",
      "Number of product sold": 8
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID05",
      "Number of product sold": 29
    },
    {
      "Account": "Jesualdo Bustos Mu?iz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID06",
      "Number of product sold": 13
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Planned_vod",
      "Order date": "2018.08.02",
      "Product Id": "PID07",
      "Number of product sold": 30
    },
    {
      "Account": "Graeme Barber",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Planned_vod",
      "Order date": "2018.09.03",
      "Product Id": "PID08",
      "Number of product sold": 23
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "2018.06.26",
      "Product Id": "PID09",
      "Number of product sold": 13
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID10",
      "Number of product sold": 5
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID11",
      "Number of product sold": 27
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "2018.06.25",
      "Product Id": "PID01",
      "Number of product sold": 7
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID01",
      "Number of product sold": 5
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID02",
      "Number of product sold": 10
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.06.15",
      "Product Id": "PID03",
      "Number of product sold": 13
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "2018.06.27",
      "Product Id": "PID04",
      "Number of product sold": 24
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID05",
      "Number of product sold": 17
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID06",
      "Number of product sold": 8
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID07",
      "Number of product sold": 30
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID08",
      "Number of product sold": 13
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID09",
      "Number of product sold": 26
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID10",
      "Number of product sold": 7
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID11",
      "Number of product sold": 19
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2018.08.10",
      "Product Id": "PID01",
      "Number of product sold": 15
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID02",
      "Number of product sold": 14
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.07",
      "Product Id": "PID03",
      "Number of product sold": 26
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.07",
      "Product Id": "PID04",
      "Number of product sold": 22
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID05",
      "Number of product sold": 22
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID06",
      "Number of product sold": 25
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "2018.08.07",
      "Product Id": "PID07",
      "Number of product sold": 29
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID08",
      "Number of product sold": 7
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID09",
      "Number of product sold": 19
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID10",
      "Number of product sold": 23
    },
    {
      "Account": "Berkshire Independent Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID11",
      "Number of product sold": 25
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID01",
      "Number of product sold": 17
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID02",
      "Number of product sold": 27
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "2018.03.05",
      "Product Id": "PID03",
      "Number of product sold": 24
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID04",
      "Number of product sold": 24
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID05",
      "Number of product sold": 23
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID06",
      "Number of product sold": 6
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID07",
      "Number of product sold": 16
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.08.06",
      "Product Id": "PID08",
      "Number of product sold": 14
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID09",
      "Number of product sold": 26
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.08",
      "Product Id": "PID10",
      "Number of product sold": 9
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID11",
      "Number of product sold": 27
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID01",
      "Number of product sold": 22
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID03",
      "Number of product sold": 9
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2018.07.19",
      "Product Id": "PID04",
      "Number of product sold": 23
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID05",
      "Number of product sold": 15
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.26",
      "Product Id": "PID06",
      "Number of product sold": 15
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID07",
      "Number of product sold": 30
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID08",
      "Number of product sold": 16
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.07.25",
      "Product Id": "PID09",
      "Number of product sold": 17
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID10",
      "Number of product sold": 23
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID11",
      "Number of product sold": 6
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "2018.06.29",
      "Product Id": "PID01",
      "Number of product sold": 25
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "2018.07.03",
      "Product Id": "PID01",
      "Number of product sold": 8
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID05",
      "Number of product sold": 20
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "2018.06.28",
      "Product Id": "PID06",
      "Number of product sold": 30
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID07",
      "Number of product sold": 14
    },
    {
      "Account": "David Barnard",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "2018.07.24",
      "Product Id": "PID08",
      "Number of product sold": 8
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID09",
      "Number of product sold": 6
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID10",
      "Number of product sold": 10
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID11",
      "Number of product sold": 24
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.07.02",
      "Product Id": "PID01",
      "Number of product sold": 8
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "2018.08.02",
      "Product Id": "PID02",
      "Number of product sold": 15
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.13",
      "Product Id": "PID03",
      "Number of product sold": 11
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "2018.07.09",
      "Product Id": "PID04",
      "Number of product sold": 10
    },
    {
      "Account": "Massimiliano Nazionale",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.04",
      "Product Id": "PID05",
      "Number of product sold": 23
    },
    {
      "Account": "Jesualdo Bustos Mu?iz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Planned_vod",
      "Order date": "2018.08.21",
      "Product Id": "PID06",
      "Number of product sold": 5
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "2018.07.16",
      "Product Id": "PID07",
      "Number of product sold": 9
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "2018.08.01",
      "Product Id": "PID08",
      "Number of product sold": 17
    },
    {
      "Account": "Juliet Beardsley",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "2018.08.02",
      "Product Id": "PID09",
      "Number of product sold": 10
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Planned_vod",
      "Order date": "2018.07.31",
      "Product Id": "PID10",
      "Number of product sold": 17
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    },
    {
      "Account": "",
      "Account type": "",
      "Salesperson ID": "",
      "Order status": "",
      "Order date": "",
      "Product Id": "",
      "Number of product sold": null
    }
   ] ;  
    const sales=[
    {
      "Id": "SPID01",
      "Name": "Daniel Ecker"
    },
    {
      "Id": "SPID02",
      "Name": "Theophile Choffard"
    },
    {
      "Id": "SPID03",
      "Name": "John Mitchell"
    },
    {
      "Id": "SPID04",
      "Name": "Albert Dumont"
    },
    {
      "Id": "SPID05",
      "Name": "Monika Schulz"
    },
    {
      "Id": "SPID06",
      "Name": "Marianna Gosio"
    },
    {
      "Id": "SPID07",
      "Name": "DE SalesRep"
    },
    {
      "Id": "SPID08",
      "Name": "Jasper Skapsson"
    },
    {
      "Id": "SPID09",
      "Name": "Giovanni Gosio"
    },
    {
      "Id": "SPID10",
      "Name": "Remy Deprez BE"
    },
    {
      "Id": "SPID11",
      "Name": "Christoph Weis"
    },
    {
      "Id": "SPID12",
      "Name": "Michele Fruscella"
    },
    {
      "Id": "SPID13",
      "Name": "David Nessler"
    },
    {
      "Id": "SPID14",
      "Name": "Malte Spielger"
    },
    {
      "Id": "SPID15",
      "Name": "Lucia Garcia"
    },
    {
      "Id": "SPID16",
      "Name": "Jacque FR Market Access"
    },
    {
      "Id": "SPID17",
      "Name": "Erik Pettersson"
    },
    {
      "Id": "SPID18",
      "Name": "Margaux Revel CH"
    },
    {
      "Id": "SPID19",
      "Name": "Antonio Carteni"
    },
    {
      "Id": "SPID20",
      "Name": "Javier Lopez"
    },
    {
      "Id": "SPID21",
      "Name": "Christian Werner AT"
    },
    {
      "Id": "SPID22",
      "Name": "Veeva Services"
    },
    {
      "Id": "SPID23",
      "Name": "Marie Amar"
    },
    {
      "Id": "SPID24",
      "Name": "UK KAM"
    },
    {
      "Id": "SPID25",
      "Name": "Donna San Juan"
    },
    {
      "Id": "SPID26",
      "Name": "Lucas Jackson"
    },
    {
      "Id": "SPID27",
      "Name": "Lewis Alban"
    },
    {
      "Id": "SPID28",
      "Name": "Alexis Dourant"
    }
   ];
    const customers=[
    {
      "Account": "Hospital Alexander Krankenhaus"
    },
    {
      "Account": "Alexia Alarie"
    },
    {
      "Account": "Leonie Becker"
    },
    {
      "Account": "Michele Fruscella"
    },
    {
      "Account": "Test Test"
    },
    {
      "Account": "S. Gerardo Monza"
    },
    {
      "Account": "Luca Argento"
    },
    {
      "Account": "Iseult B�langer"
    },
    {
      "Account": "Broussais University Hospital"
    },
    {
      "Account": "Naomi Hopkins"
    },
    {
      "Account": "Ann Brown"
    },
    {
      "Account": "Hallmark Clinic"
    },
    {
      "Account": "Mark Johnson"
    },
    {
      "Account": "Leopold Kohn"
    },
    {
      "Account": "Lucia Zapponi"
    },
    {
      "Account": "Manne�J Sundstr�m"
    },
    {
      "Account": "H�pital Cochin"
    },
    {
      "Account": "Sarah Brown"
    },
    {
      "Account": "Ospedale Maggiore"
    },
    {
      "Account": "Oliver Hansdotter"
    },
    {
      "Account": "Barbara Parodi"
    },
    {
      "Account": "C�cilia Blanchet"
    },
    {
      "Account": "Hospital de Puerto Real"
    },
    {
      "Account": "Piersilvio Brancato"
    },
    {
      "Account": "Sven Pernerstorfer"
    },
    {
      "Account": "Lukas Schorle"
    },
    {
      "Account": "Nina Chaucer"
    },
    {
      "Account": "Nicolette Bruneau"
    },
    {
      "Account": "Leoni Beker"
    },
    {
      "Account": "Gonzalo Redriguez"
    },
    {
      "Account": "Peer Brinkmann"
    },
    {
      "Account": "Bj�rn Posse"
    },
    {
      "Account": "Central Hospital"
    },
    {
      "Account": "Rodrigo Jimenez"
    },
    {
      "Account": "Anne Roth"
    },
    {
      "Account": "Alberto Fonzi"
    },
    {
      "Account": "Sam Daniels"
    },
    {
      "Account": "MVS Online 2"
    },
    {
      "Account": "Brad Pitt"
    },
    {
      "Account": "Lucas Beaumanoir"
    },
    {
      "Account": "Sarah Jones"
    },
    {
      "Account": "WienerKlinik"
    },
    {
      "Account": "Jesualdo Bustos Mu?iz"
    },
    {
      "Account": "Leo Wood"
    },
    {
      "Account": "Chilton Memorial Hospital"
    },
    {
      "Account": "Maxim Shultz"
    },
    {
      "Account": "Karolinska Hospital"
    },
    {
      "Account": "Rebecca Hill"
    },
    {
      "Account": "John Johnson"
    },
    {
      "Account": "Stefan Lingsminat"
    },
    {
      "Account": "Julian Dupont"
    },
    {
      "Account": "St. John hospital"
    },
    {
      "Account": "Ewelina Krupowicz"
    },
    {
      "Account": "Maria Giovanna Ruggeri"
    },
    {
      "Account": "Jan Neumann"
    },
    {
      "Account": "Jane White"
    },
    {
      "Account": "Jon Doe"
    },
    {
      "Account": "Robert Adams"
    },
    {
      "Account": "Peak View Hospital"
    },
    {
      "Account": "Leroy Meunier"
    },
    {
      "Account": "Massimiliano Nazionale"
    },
    {
      "Account": "Eweline Krupowicz"
    },
    {
      "Account": "Peter N�rnberger"
    },
    {
      "Account": "Guglielma Trevisan"
    },
    {
      "Account": "Beno�t Bellegarde"
    },
    {
      "Account": "Sarah Moore"
    },
    {
      "Account": "Javier Espinoza"
    },
    {
      "Account": "H�pital Saint-Louis"
    },
    {
      "Account": "Henry Smith"
    },
    {
      "Account": "Luca Toni"
    },
    {
      "Account": "St. Martin Clinique"
    },
    {
      "Account": "Anthony Webster"
    },
    {
      "Account": "Sean Dunne"
    },
    {
      "Account": "Dante Signorini"
    },
    {
      "Account": "Richard Savage"
    },
    {
      "Account": "Jordi Vidal"
    },
    {
      "Account": "Guingamp Hospital"
    },
    {
      "Account": "Solenn Desmarais"
    },
    {
      "Account": "Tiphaine Thibodeau"
    },
    {
      "Account": "Gilbert Gauthier"
    },
    {
      "Account": "Jean-Luc Besnard"
    },
    {
      "Account": "H�pital�Europ�en Georges Pompidou"
    },
    {
      "Account": "Berkshire Independent Hospital"
    },
    {
      "Account": "Anatole Bescond"
    },
    {
      "Account": "Karen Bell"
    },
    {
      "Account": "David Barnard"
    },
    {
      "Account": "Graeme Barber"
    },
    {
      "Account": "Juliet Beardsley"
    }
   ]
    const product2=[
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID01",
      "Number of product sold": 10,
      "Unit price": 12,
      "Sum_prices": 120
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID02",
      "Number of product sold": 18,
      "Unit price": 22,
      "Sum_prices": 396
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "9/10/2018",
      "Product Id": "PID03",
      "Number of product sold": 6,
      "Unit price": 19,
      "Sum_prices": 114
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID04",
      "Number of product sold": 9,
      "Unit price": 21,
      "Sum_prices": 189
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID05",
      "Number of product sold": 12,
      "Unit price": 9,
      "Sum_prices": 108
    },
    {
      "Account": "Test Test",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "9/5/2018",
      "Product Id": "PID06",
      "Number of product sold": 14,
      "Unit price": 20,
      "Sum_prices": 280
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 15,
      "Unit price": 10,
      "Sum_prices": 150
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 19,
      "Unit price": 22,
      "Sum_prices": 418
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Planned_vod",
      "Order date": "9/20/2018",
      "Product Id": "PID09",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID10",
      "Number of product sold": 14,
      "Unit price": 14,
      "Sum_prices": 196
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID11",
      "Number of product sold": 10,
      "Unit price": 15,
      "Sum_prices": 150
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID01",
      "Number of product sold": 9,
      "Unit price": 12,
      "Sum_prices": 108
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID02",
      "Number of product sold": 23,
      "Unit price": 22,
      "Sum_prices": 506
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID03",
      "Number of product sold": 23,
      "Unit price": 19,
      "Sum_prices": 437
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "9/25/2018",
      "Product Id": "PID04",
      "Number of product sold": 27,
      "Unit price": 21,
      "Sum_prices": 567
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID05",
      "Number of product sold": 12,
      "Unit price": 9,
      "Sum_prices": 108
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID06",
      "Number of product sold": 24,
      "Unit price": 20,
      "Sum_prices": 480
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "9/20/2018",
      "Product Id": "PID07",
      "Number of product sold": 17,
      "Unit price": 10,
      "Sum_prices": 170
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "10/5/2018",
      "Product Id": "PID08",
      "Number of product sold": 29,
      "Unit price": 22,
      "Sum_prices": 638
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "2/14/2018",
      "Product Id": "PID09",
      "Number of product sold": 14,
      "Unit price": 20,
      "Sum_prices": 280
    },
    {
      "Account": "Leopold Kohn",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "9/6/2018",
      "Product Id": "PID10",
      "Number of product sold": 27,
      "Unit price": 14,
      "Sum_prices": 378
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "9/20/2018",
      "Product Id": "PID11",
      "Number of product sold": 5,
      "Unit price": 15,
      "Sum_prices": 75
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID01",
      "Number of product sold": 21,
      "Unit price": 12,
      "Sum_prices": 252
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID02",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "2/21/2018",
      "Product Id": "PID03",
      "Number of product sold": 20,
      "Unit price": 19,
      "Sum_prices": 380
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID04",
      "Number of product sold": 23,
      "Unit price": 21,
      "Sum_prices": 483
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Planned_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID05",
      "Number of product sold": 29,
      "Unit price": 9,
      "Sum_prices": 261
    },
    {
      "Account": "H�pital Cochin",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID06",
      "Number of product sold": 28,
      "Unit price": 20,
      "Sum_prices": 560
    },
    {
      "Account": "Sarah Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "10/4/2018",
      "Product Id": "PID07",
      "Number of product sold": 15,
      "Unit price": 10,
      "Sum_prices": 150
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "3/21/2018",
      "Product Id": "PID08",
      "Number of product sold": 11,
      "Unit price": 22,
      "Sum_prices": 242
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID09",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID10",
      "Number of product sold": 7,
      "Unit price": 14,
      "Sum_prices": 98
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Planned_vod",
      "Order date": "9/14/2018",
      "Product Id": "PID11",
      "Number of product sold": 23,
      "Unit price": 15,
      "Sum_prices": 345
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID01",
      "Number of product sold": 9,
      "Unit price": 12,
      "Sum_prices": 108
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "3/25/2018",
      "Product Id": "PID02",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID03",
      "Number of product sold": 16,
      "Unit price": 19,
      "Sum_prices": 304
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID04",
      "Number of product sold": 25,
      "Unit price": 21,
      "Sum_prices": 525
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID05",
      "Number of product sold": 5,
      "Unit price": 9,
      "Sum_prices": 45
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "2/26/2018",
      "Product Id": "PID06",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "9/12/2018",
      "Product Id": "PID07",
      "Number of product sold": 29,
      "Unit price": 10,
      "Sum_prices": 290
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "9/5/2018",
      "Product Id": "PID08",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Barbara Parodi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID09",
      "Number of product sold": 25,
      "Unit price": 20,
      "Sum_prices": 500
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "3/25/2018",
      "Product Id": "PID10",
      "Number of product sold": 20,
      "Unit price": 14,
      "Sum_prices": 280
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID11",
      "Number of product sold": 23,
      "Unit price": 15,
      "Sum_prices": 345
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID01",
      "Number of product sold": 24,
      "Unit price": 12,
      "Sum_prices": 288
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID02",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "2/19/2018",
      "Product Id": "PID03",
      "Number of product sold": 18,
      "Unit price": 19,
      "Sum_prices": 342
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID04",
      "Number of product sold": 28,
      "Unit price": 21,
      "Sum_prices": 588
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID05",
      "Number of product sold": 30,
      "Unit price": 9,
      "Sum_prices": 270
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "9/25/2018",
      "Product Id": "PID06",
      "Number of product sold": 20,
      "Unit price": 20,
      "Sum_prices": 400
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID07",
      "Number of product sold": 8,
      "Unit price": 10,
      "Sum_prices": 80
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "3/18/2018",
      "Product Id": "PID08",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID09",
      "Number of product sold": 10,
      "Unit price": 20,
      "Sum_prices": 200
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID10",
      "Number of product sold": 6,
      "Unit price": 14,
      "Sum_prices": 84
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "9/12/2018",
      "Product Id": "PID11",
      "Number of product sold": 15,
      "Unit price": 15,
      "Sum_prices": 225
    },
    {
      "Account": "C�cilia Blanchet",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID01",
      "Number of product sold": 23,
      "Unit price": 12,
      "Sum_prices": 276
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID02",
      "Number of product sold": 27,
      "Unit price": 22,
      "Sum_prices": 594
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID03",
      "Number of product sold": 20,
      "Unit price": 19,
      "Sum_prices": 380
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "8/31/2018",
      "Product Id": "PID04",
      "Number of product sold": 11,
      "Unit price": 21,
      "Sum_prices": 231
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID05",
      "Number of product sold": 15,
      "Unit price": 9,
      "Sum_prices": 135
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID06",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID07",
      "Number of product sold": 17,
      "Unit price": 10,
      "Sum_prices": 170
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID08",
      "Number of product sold": 30,
      "Unit price": 22,
      "Sum_prices": 660
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "9/25/2018",
      "Product Id": "PID09",
      "Number of product sold": 8,
      "Unit price": 20,
      "Sum_prices": 160
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID10",
      "Number of product sold": 23,
      "Unit price": 14,
      "Sum_prices": 322
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "10/9/2018",
      "Product Id": "PID11",
      "Number of product sold": 30,
      "Unit price": 15,
      "Sum_prices": 450
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID01",
      "Number of product sold": 10,
      "Unit price": 12,
      "Sum_prices": 120
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "8/9/2018",
      "Product Id": "PID02",
      "Number of product sold": 29,
      "Unit price": 22,
      "Sum_prices": 638
    },
    {
      "Account": "Lukas Schorle",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "9/6/2018",
      "Product Id": "PID03",
      "Number of product sold": 13,
      "Unit price": 19,
      "Sum_prices": 247
    },
    {
      "Account": "Nina Chaucer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID04",
      "Number of product sold": 26,
      "Unit price": 21,
      "Sum_prices": 546
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "9/26/2018",
      "Product Id": "PID05",
      "Number of product sold": 12,
      "Unit price": 9,
      "Sum_prices": 108
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID06",
      "Number of product sold": 24,
      "Unit price": 20,
      "Sum_prices": 480
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "9/6/2018",
      "Product Id": "PID07",
      "Number of product sold": 11,
      "Unit price": 10,
      "Sum_prices": 110
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID08",
      "Number of product sold": 24,
      "Unit price": 22,
      "Sum_prices": 528
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID09",
      "Number of product sold": 18,
      "Unit price": 20,
      "Sum_prices": 360
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "9/20/2018",
      "Product Id": "PID10",
      "Number of product sold": 16,
      "Unit price": 14,
      "Sum_prices": 224
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID11",
      "Number of product sold": 5,
      "Unit price": 15,
      "Sum_prices": 75
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID01",
      "Number of product sold": 10,
      "Unit price": 12,
      "Sum_prices": 120
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID03",
      "Number of product sold": 7,
      "Unit price": 19,
      "Sum_prices": 133
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "9/28/2018",
      "Product Id": "PID04",
      "Number of product sold": 18,
      "Unit price": 21,
      "Sum_prices": 378
    },
    {
      "Account": "Sarah Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "1/4/2018",
      "Product Id": "PID05",
      "Number of product sold": 18,
      "Unit price": 9,
      "Sum_prices": 162
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "9/25/2018",
      "Product Id": "PID06",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 19,
      "Unit price": 10,
      "Sum_prices": 190
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID08",
      "Number of product sold": 25,
      "Unit price": 22,
      "Sum_prices": 550
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID09",
      "Number of product sold": 24,
      "Unit price": 20,
      "Sum_prices": 480
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID10",
      "Number of product sold": 15,
      "Unit price": 14,
      "Sum_prices": 210
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID11",
      "Number of product sold": 9,
      "Unit price": 15,
      "Sum_prices": 135
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID01",
      "Number of product sold": 9,
      "Unit price": 12,
      "Sum_prices": 108
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "9/14/2018",
      "Product Id": "PID02",
      "Number of product sold": 7,
      "Unit price": 22,
      "Sum_prices": 154
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID03",
      "Number of product sold": 11,
      "Unit price": 19,
      "Sum_prices": 209
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID04",
      "Number of product sold": 17,
      "Unit price": 21,
      "Sum_prices": 357
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID05",
      "Number of product sold": 19,
      "Unit price": 9,
      "Sum_prices": 171
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID06",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "1/8/2018",
      "Product Id": "PID07",
      "Number of product sold": 5,
      "Unit price": 10,
      "Sum_prices": 50
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 18,
      "Unit price": 22,
      "Sum_prices": 396
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID09",
      "Number of product sold": 25,
      "Unit price": 20,
      "Sum_prices": 500
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID10",
      "Number of product sold": 27,
      "Unit price": 14,
      "Sum_prices": 378
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID11",
      "Number of product sold": 15,
      "Unit price": 15,
      "Sum_prices": 225
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID01",
      "Number of product sold": 11,
      "Unit price": 12,
      "Sum_prices": 132
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "9/5/2018",
      "Product Id": "PID02",
      "Number of product sold": 14,
      "Unit price": 22,
      "Sum_prices": 308
    },
    {
      "Account": "Gonzalo Redriguez",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID03",
      "Number of product sold": 30,
      "Unit price": 19,
      "Sum_prices": 570
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "9/20/2018",
      "Product Id": "PID04",
      "Number of product sold": 7,
      "Unit price": 21,
      "Sum_prices": 147
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "9/6/2018",
      "Product Id": "PID05",
      "Number of product sold": 8,
      "Unit price": 9,
      "Sum_prices": 72
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID06",
      "Number of product sold": 10,
      "Unit price": 20,
      "Sum_prices": 200
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 12,
      "Unit price": 10,
      "Sum_prices": 120
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID08",
      "Number of product sold": 26,
      "Unit price": 22,
      "Sum_prices": 572
    },
    {
      "Account": "Peer Brinkmann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID09",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Peer Brinkmann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID10",
      "Number of product sold": 16,
      "Unit price": 14,
      "Sum_prices": 224
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "9/7/2018",
      "Product Id": "PID11",
      "Number of product sold": 10,
      "Unit price": 15,
      "Sum_prices": 150
    },
    {
      "Account": "Bj�rn Posse",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "9/26/2018",
      "Product Id": "PID01",
      "Number of product sold": 30,
      "Unit price": 12,
      "Sum_prices": 360
    },
    {
      "Account": "Central Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "2/9/2018",
      "Product Id": "PID02",
      "Number of product sold": 30,
      "Unit price": 22,
      "Sum_prices": 660
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID03",
      "Number of product sold": 26,
      "Unit price": 19,
      "Sum_prices": 494
    },
    {
      "Account": "Rodrigo Jimenez",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "9/28/2018",
      "Product Id": "PID04",
      "Number of product sold": 9,
      "Unit price": 21,
      "Sum_prices": 189
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "8/9/2018",
      "Product Id": "PID05",
      "Number of product sold": 30,
      "Unit price": 9,
      "Sum_prices": 270
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID06",
      "Number of product sold": 27,
      "Unit price": 20,
      "Sum_prices": 540
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "9/7/2018",
      "Product Id": "PID07",
      "Number of product sold": 17,
      "Unit price": 10,
      "Sum_prices": 170
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID08",
      "Number of product sold": 23,
      "Unit price": 22,
      "Sum_prices": 506
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID09",
      "Number of product sold": 5,
      "Unit price": 20,
      "Sum_prices": 100
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID10",
      "Number of product sold": 8,
      "Unit price": 14,
      "Sum_prices": 112
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID11",
      "Number of product sold": 27,
      "Unit price": 15,
      "Sum_prices": 405
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 25,
      "Unit price": 12,
      "Sum_prices": 300
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID02",
      "Number of product sold": 19,
      "Unit price": 22,
      "Sum_prices": 418
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID03",
      "Number of product sold": 15,
      "Unit price": 19,
      "Sum_prices": 285
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID04",
      "Number of product sold": 11,
      "Unit price": 21,
      "Sum_prices": 231
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID05",
      "Number of product sold": 19,
      "Unit price": 9,
      "Sum_prices": 171
    },
    {
      "Account": "Alberto Fonzi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "9/28/2018",
      "Product Id": "PID06",
      "Number of product sold": 12,
      "Unit price": 20,
      "Sum_prices": 240
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Planned_vod",
      "Order date": "9/7/2018",
      "Product Id": "PID07",
      "Number of product sold": 6,
      "Unit price": 10,
      "Sum_prices": 60
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID08",
      "Number of product sold": 18,
      "Unit price": 22,
      "Sum_prices": 396
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID09",
      "Number of product sold": 8,
      "Unit price": 20,
      "Sum_prices": 160
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID10",
      "Number of product sold": 9,
      "Unit price": 14,
      "Sum_prices": 126
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "9/4/2018",
      "Product Id": "PID01",
      "Number of product sold": 12,
      "Unit price": 12,
      "Sum_prices": 144
    },
    {
      "Account": "Sam Daniels",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "7/5/2018",
      "Product Id": "PID01",
      "Number of product sold": 14,
      "Unit price": 12,
      "Sum_prices": 168
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID02",
      "Number of product sold": 19,
      "Unit price": 22,
      "Sum_prices": 418
    },
    {
      "Account": "MVS Online 2",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID03",
      "Number of product sold": 15,
      "Unit price": 19,
      "Sum_prices": 285
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID04",
      "Number of product sold": 28,
      "Unit price": 21,
      "Sum_prices": 588
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID05",
      "Number of product sold": 22,
      "Unit price": 9,
      "Sum_prices": 198
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID06",
      "Number of product sold": 14,
      "Unit price": 20,
      "Sum_prices": 280
    },
    {
      "Account": "Brad Pitt",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 27,
      "Unit price": 10,
      "Sum_prices": 270
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 30,
      "Unit price": 22,
      "Sum_prices": 660
    },
    {
      "Account": "Leopold Kohn",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "9/6/2018",
      "Product Id": "PID09",
      "Number of product sold": 6,
      "Unit price": 20,
      "Sum_prices": 120
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "9/6/2018",
      "Product Id": "PID10",
      "Number of product sold": 14,
      "Unit price": 14,
      "Sum_prices": 196
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "1/1/2018",
      "Product Id": "PID11",
      "Number of product sold": 18,
      "Unit price": 15,
      "Sum_prices": 270
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "10/5/2018",
      "Product Id": "PID01",
      "Number of product sold": 26,
      "Unit price": 12,
      "Sum_prices": 312
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID02",
      "Number of product sold": 20,
      "Unit price": 22,
      "Sum_prices": 440
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "9/10/2018",
      "Product Id": "PID03",
      "Number of product sold": 23,
      "Unit price": 19,
      "Sum_prices": 437
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID04",
      "Number of product sold": 26,
      "Unit price": 21,
      "Sum_prices": 546
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID05",
      "Number of product sold": 24,
      "Unit price": 9,
      "Sum_prices": 216
    },
    {
      "Account": "Lucia Zapponi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID06",
      "Number of product sold": 27,
      "Unit price": 20,
      "Sum_prices": 540
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID07",
      "Number of product sold": 20,
      "Unit price": 10,
      "Sum_prices": 200
    },
    {
      "Account": "Lukas Schorle",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "10/4/2018",
      "Product Id": "PID08",
      "Number of product sold": 6,
      "Unit price": 22,
      "Sum_prices": 132
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID09",
      "Number of product sold": 29,
      "Unit price": 20,
      "Sum_prices": 580
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID10",
      "Number of product sold": 25,
      "Unit price": 14,
      "Sum_prices": 350
    },
    {
      "Account": "Sarah Jones",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "10/2/2018",
      "Product Id": "PID11",
      "Number of product sold": 18,
      "Unit price": 15,
      "Sum_prices": 270
    },
    {
      "Account": "WienerKlinik",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "10/3/2018",
      "Product Id": "PID01",
      "Number of product sold": 22,
      "Unit price": 12,
      "Sum_prices": 264
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID02",
      "Number of product sold": 12,
      "Unit price": 22,
      "Sum_prices": 264
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "10/5/2018",
      "Product Id": "PID03",
      "Number of product sold": 29,
      "Unit price": 19,
      "Sum_prices": 551
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID04",
      "Number of product sold": 17,
      "Unit price": 21,
      "Sum_prices": 357
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID05",
      "Number of product sold": 15,
      "Unit price": 9,
      "Sum_prices": 135
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID06",
      "Number of product sold": 22,
      "Unit price": 20,
      "Sum_prices": 440
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 6,
      "Unit price": 10,
      "Sum_prices": 60
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 24,
      "Unit price": 22,
      "Sum_prices": 528
    },
    {
      "Account": "Piersilvio Brancato",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID09",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "9/10/2018",
      "Product Id": "PID10",
      "Number of product sold": 5,
      "Unit price": 14,
      "Sum_prices": 70
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID11",
      "Number of product sold": 22,
      "Unit price": 15,
      "Sum_prices": 330
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "9/25/2018",
      "Product Id": "PID01",
      "Number of product sold": 28,
      "Unit price": 12,
      "Sum_prices": 336
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID02",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "9/10/2018",
      "Product Id": "PID03",
      "Number of product sold": 12,
      "Unit price": 19,
      "Sum_prices": 228
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "9/6/2018",
      "Product Id": "PID04",
      "Number of product sold": 15,
      "Unit price": 21,
      "Sum_prices": 315
    },
    {
      "Account": "Jesualdo Bustos Mu?iz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID05",
      "Number of product sold": 9,
      "Unit price": 9,
      "Sum_prices": 81
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID06",
      "Number of product sold": 25,
      "Unit price": 20,
      "Sum_prices": 500
    },
    {
      "Account": "Sarah Jones",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "10/3/2018",
      "Product Id": "PID07",
      "Number of product sold": 22,
      "Unit price": 10,
      "Sum_prices": 220
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "9/24/2018",
      "Product Id": "PID08",
      "Number of product sold": 7,
      "Unit price": 22,
      "Sum_prices": 154
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID09",
      "Number of product sold": 5,
      "Unit price": 20,
      "Sum_prices": 100
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "9/14/2018",
      "Product Id": "PID10",
      "Number of product sold": 30,
      "Unit price": 14,
      "Sum_prices": 420
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID11",
      "Number of product sold": 22,
      "Unit price": 15,
      "Sum_prices": 330
    },
    {
      "Account": "C�cilia Blanchet",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "9/28/2018",
      "Product Id": "PID01",
      "Number of product sold": 17,
      "Unit price": 12,
      "Sum_prices": 204
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID01",
      "Number of product sold": 11,
      "Unit price": 12,
      "Sum_prices": 132
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID02",
      "Number of product sold": 6,
      "Unit price": 22,
      "Sum_prices": 132
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Planned_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID03",
      "Number of product sold": 28,
      "Unit price": 19,
      "Sum_prices": 532
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "9/17/2018",
      "Product Id": "PID04",
      "Number of product sold": 19,
      "Unit price": 21,
      "Sum_prices": 399
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID05",
      "Number of product sold": 30,
      "Unit price": 9,
      "Sum_prices": 270
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID06",
      "Number of product sold": 19,
      "Unit price": 20,
      "Sum_prices": 380
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID07",
      "Number of product sold": 15,
      "Unit price": 10,
      "Sum_prices": 150
    },
    {
      "Account": "Barbara Parodi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "1/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 7,
      "Unit price": 22,
      "Sum_prices": 154
    },
    {
      "Account": "Leo Wood",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID09",
      "Number of product sold": 12,
      "Unit price": 20,
      "Sum_prices": 240
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "9/17/2018",
      "Product Id": "PID10",
      "Number of product sold": 19,
      "Unit price": 14,
      "Sum_prices": 266
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "10/9/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "2/4/2018",
      "Product Id": "PID01",
      "Number of product sold": 5,
      "Unit price": 12,
      "Sum_prices": 60
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID02",
      "Number of product sold": 5,
      "Unit price": 22,
      "Sum_prices": 110
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "9/20/2018",
      "Product Id": "PID03",
      "Number of product sold": 12,
      "Unit price": 19,
      "Sum_prices": 228
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "9/21/2018",
      "Product Id": "PID04",
      "Number of product sold": 12,
      "Unit price": 21,
      "Sum_prices": 252
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID05",
      "Number of product sold": 7,
      "Unit price": 9,
      "Sum_prices": 63
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID06",
      "Number of product sold": 29,
      "Unit price": 20,
      "Sum_prices": 580
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID07",
      "Number of product sold": 24,
      "Unit price": 10,
      "Sum_prices": 240
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "9/11/2018",
      "Product Id": "PID08",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Sarah Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "10/4/2018",
      "Product Id": "PID09",
      "Number of product sold": 5,
      "Unit price": 20,
      "Sum_prices": 100
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "9/18/2018",
      "Product Id": "PID10",
      "Number of product sold": 17,
      "Unit price": 14,
      "Sum_prices": 238
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Mark Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "9/13/2018",
      "Product Id": "PID01",
      "Number of product sold": 9,
      "Unit price": 12,
      "Sum_prices": 108
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "9/17/2018",
      "Product Id": "PID02",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID03",
      "Number of product sold": 20,
      "Unit price": 19,
      "Sum_prices": 380
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID04",
      "Number of product sold": 22,
      "Unit price": 21,
      "Sum_prices": 462
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "9/12/2018",
      "Product Id": "PID05",
      "Number of product sold": 27,
      "Unit price": 9,
      "Sum_prices": 243
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "9/5/2018",
      "Product Id": "PID06",
      "Number of product sold": 8,
      "Unit price": 20,
      "Sum_prices": 160
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "9/17/2018",
      "Product Id": "PID07",
      "Number of product sold": 10,
      "Unit price": 10,
      "Sum_prices": 100
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "9/19/2018",
      "Product Id": "PID08",
      "Number of product sold": 9,
      "Unit price": 22,
      "Sum_prices": 198
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID09",
      "Number of product sold": 26,
      "Unit price": 20,
      "Sum_prices": 520
    },
    {
      "Account": "Maxim Shultz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "10/3/2018",
      "Product Id": "PID10",
      "Number of product sold": 11,
      "Unit price": 14,
      "Sum_prices": 154
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "2/14/2018",
      "Product Id": "PID11",
      "Number of product sold": 15,
      "Unit price": 15,
      "Sum_prices": 225
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID01",
      "Number of product sold": 14,
      "Unit price": 12,
      "Sum_prices": 168
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID02",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Planned_vod",
      "Order date": "8/15/2018",
      "Product Id": "PID03",
      "Number of product sold": 28,
      "Unit price": 19,
      "Sum_prices": 532
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "9/5/2018",
      "Product Id": "PID04",
      "Number of product sold": 25,
      "Unit price": 21,
      "Sum_prices": 525
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "9/25/2018",
      "Product Id": "PID05",
      "Number of product sold": 8,
      "Unit price": 9,
      "Sum_prices": 72
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "10/8/2018",
      "Product Id": "PID06",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID07",
      "Number of product sold": 14,
      "Unit price": 10,
      "Sum_prices": 140
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID08",
      "Number of product sold": 25,
      "Unit price": 22,
      "Sum_prices": 550
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "1/12/2018",
      "Product Id": "PID09",
      "Number of product sold": 17,
      "Unit price": 20,
      "Sum_prices": 340
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID10",
      "Number of product sold": 24,
      "Unit price": 14,
      "Sum_prices": 336
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID11",
      "Number of product sold": 14,
      "Unit price": 15,
      "Sum_prices": 210
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID01",
      "Number of product sold": 24,
      "Unit price": 12,
      "Sum_prices": 288
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "3/10/2018",
      "Product Id": "PID01",
      "Number of product sold": 21,
      "Unit price": 12,
      "Sum_prices": 252
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "8/17/2018",
      "Product Id": "PID02",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID03",
      "Number of product sold": 22,
      "Unit price": 19,
      "Sum_prices": 418
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "3/14/2018",
      "Product Id": "PID04",
      "Number of product sold": 24,
      "Unit price": 21,
      "Sum_prices": 504
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Planned_vod",
      "Order date": "8/15/2018",
      "Product Id": "PID05",
      "Number of product sold": 15,
      "Unit price": 9,
      "Sum_prices": 135
    },
    {
      "Account": "Karolinska Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID06",
      "Number of product sold": 12,
      "Unit price": 20,
      "Sum_prices": 240
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "2/17/2018",
      "Product Id": "PID07",
      "Number of product sold": 13,
      "Unit price": 10,
      "Sum_prices": 130
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID08",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Rebecca Hill",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "10/11/2018",
      "Product Id": "PID09",
      "Number of product sold": 25,
      "Unit price": 20,
      "Sum_prices": 500
    },
    {
      "Account": "John Johnson",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "9/14/2018",
      "Product Id": "PID10",
      "Number of product sold": 10,
      "Unit price": 14,
      "Sum_prices": 140
    },
    {
      "Account": "Oliver Hansdotter",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "1/12/2018",
      "Product Id": "PID11",
      "Number of product sold": 15,
      "Unit price": 15,
      "Sum_prices": 225
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID01",
      "Number of product sold": 30,
      "Unit price": 12,
      "Sum_prices": 360
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID02",
      "Number of product sold": 9,
      "Unit price": 22,
      "Sum_prices": 198
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID03",
      "Number of product sold": 26,
      "Unit price": 19,
      "Sum_prices": 494
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID04",
      "Number of product sold": 22,
      "Unit price": 21,
      "Sum_prices": 462
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID05",
      "Number of product sold": 27,
      "Unit price": 9,
      "Sum_prices": 243
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID06",
      "Number of product sold": 26,
      "Unit price": 20,
      "Sum_prices": 520
    },
    {
      "Account": "Hallmark Clinic",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "2/12/2018",
      "Product Id": "PID07",
      "Number of product sold": 10,
      "Unit price": 10,
      "Sum_prices": 100
    },
    {
      "Account": "Karolinska Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID08",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "10/15/2018",
      "Product Id": "PID09",
      "Number of product sold": 16,
      "Unit price": 20,
      "Sum_prices": 320
    },
    {
      "Account": "Manne�J Sundstr�m",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "10/12/2018",
      "Product Id": "PID10",
      "Number of product sold": 13,
      "Unit price": 14,
      "Sum_prices": 182
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "8/17/2018",
      "Product Id": "PID11",
      "Number of product sold": 12,
      "Unit price": 15,
      "Sum_prices": 180
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "8/15/2018",
      "Product Id": "PID01",
      "Number of product sold": 5,
      "Unit price": 12,
      "Sum_prices": 60
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "2/14/2018",
      "Product Id": "PID02",
      "Number of product sold": 28,
      "Unit price": 22,
      "Sum_prices": 616
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "3/17/2018",
      "Product Id": "PID03",
      "Number of product sold": 17,
      "Unit price": 19,
      "Sum_prices": 323
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID04",
      "Number of product sold": 26,
      "Unit price": 21,
      "Sum_prices": 546
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "8/17/2018",
      "Product Id": "PID05",
      "Number of product sold": 8,
      "Unit price": 9,
      "Sum_prices": 72
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID06",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "3/10/2018",
      "Product Id": "PID07",
      "Number of product sold": 21,
      "Unit price": 10,
      "Sum_prices": 210
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID08",
      "Number of product sold": 24,
      "Unit price": 22,
      "Sum_prices": 528
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID09",
      "Number of product sold": 12,
      "Unit price": 20,
      "Sum_prices": 240
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID10",
      "Number of product sold": 22,
      "Unit price": 14,
      "Sum_prices": 308
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID11",
      "Number of product sold": 10,
      "Unit price": 15,
      "Sum_prices": 150
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID01",
      "Number of product sold": 23,
      "Unit price": 12,
      "Sum_prices": 276
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "2/14/2018",
      "Product Id": "PID03",
      "Number of product sold": 8,
      "Unit price": 19,
      "Sum_prices": 152
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID04",
      "Number of product sold": 14,
      "Unit price": 21,
      "Sum_prices": 294
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID05",
      "Number of product sold": 29,
      "Unit price": 9,
      "Sum_prices": 261
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "8/15/2018",
      "Product Id": "PID06",
      "Number of product sold": 30,
      "Unit price": 20,
      "Sum_prices": 600
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID07",
      "Number of product sold": 26,
      "Unit price": 10,
      "Sum_prices": 260
    },
    {
      "Account": "C�cilia Blanchet",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID08",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Central Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID09",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "8/9/2018",
      "Product Id": "PID10",
      "Number of product sold": 28,
      "Unit price": 14,
      "Sum_prices": 392
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "3/10/2018",
      "Product Id": "PID11",
      "Number of product sold": 14,
      "Unit price": 15,
      "Sum_prices": 210
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID01",
      "Number of product sold": 13,
      "Unit price": 12,
      "Sum_prices": 156
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 8,
      "Unit price": 22,
      "Sum_prices": 176
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID03",
      "Number of product sold": 28,
      "Unit price": 19,
      "Sum_prices": 532
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID04",
      "Number of product sold": 11,
      "Unit price": 21,
      "Sum_prices": 231
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "6/15/2018",
      "Product Id": "PID05",
      "Number of product sold": 29,
      "Unit price": 9,
      "Sum_prices": 261
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID06",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID07",
      "Number of product sold": 19,
      "Unit price": 10,
      "Sum_prices": 190
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "6/10/2018",
      "Product Id": "PID08",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "8/31/2018",
      "Product Id": "PID09",
      "Number of product sold": 30,
      "Unit price": 20,
      "Sum_prices": 600
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "8/30/2018",
      "Product Id": "PID10",
      "Number of product sold": 12,
      "Unit price": 14,
      "Sum_prices": 168
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "8/24/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Jane White",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "8/28/2018",
      "Product Id": "PID01",
      "Number of product sold": 17,
      "Unit price": 12,
      "Sum_prices": 204
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "5/29/2018",
      "Product Id": "PID03",
      "Number of product sold": 16,
      "Unit price": 19,
      "Sum_prices": 304
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID04",
      "Number of product sold": 23,
      "Unit price": 21,
      "Sum_prices": 483
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID05",
      "Number of product sold": 30,
      "Unit price": 9,
      "Sum_prices": 270
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "5/29/2018",
      "Product Id": "PID06",
      "Number of product sold": 24,
      "Unit price": 20,
      "Sum_prices": 480
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "6/7/2018",
      "Product Id": "PID07",
      "Number of product sold": 25,
      "Unit price": 10,
      "Sum_prices": 250
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "8/18/2018",
      "Product Id": "PID08",
      "Number of product sold": 9,
      "Unit price": 22,
      "Sum_prices": 198
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID09",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "8/22/2018",
      "Product Id": "PID10",
      "Number of product sold": 6,
      "Unit price": 14,
      "Sum_prices": 84
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "8/22/2018",
      "Product Id": "PID11",
      "Number of product sold": 28,
      "Unit price": 15,
      "Sum_prices": 420
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID01",
      "Number of product sold": 29,
      "Unit price": 12,
      "Sum_prices": 348
    },
    {
      "Account": "Jon Doe",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID02",
      "Number of product sold": 26,
      "Unit price": 22,
      "Sum_prices": 572
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID03",
      "Number of product sold": 29,
      "Unit price": 19,
      "Sum_prices": 551
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID04",
      "Number of product sold": 10,
      "Unit price": 21,
      "Sum_prices": 210
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID05",
      "Number of product sold": 22,
      "Unit price": 9,
      "Sum_prices": 198
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID06",
      "Number of product sold": 16,
      "Unit price": 20,
      "Sum_prices": 320
    },
    {
      "Account": "Peak View Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID07",
      "Number of product sold": 28,
      "Unit price": 10,
      "Sum_prices": 280
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID08",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID09",
      "Number of product sold": 26,
      "Unit price": 20,
      "Sum_prices": 520
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "6/9/2018",
      "Product Id": "PID10",
      "Number of product sold": 5,
      "Unit price": 14,
      "Sum_prices": 70
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID11",
      "Number of product sold": 23,
      "Unit price": 15,
      "Sum_prices": 345
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 18,
      "Unit price": 12,
      "Sum_prices": 216
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "5/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "8/18/2018",
      "Product Id": "PID03",
      "Number of product sold": 5,
      "Unit price": 19,
      "Sum_prices": 95
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID04",
      "Number of product sold": 17,
      "Unit price": 21,
      "Sum_prices": 357
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID05",
      "Number of product sold": 5,
      "Unit price": 9,
      "Sum_prices": 45
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID06",
      "Number of product sold": 23,
      "Unit price": 20,
      "Sum_prices": 460
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 12,
      "Unit price": 10,
      "Sum_prices": 120
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID08",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID09",
      "Number of product sold": 30,
      "Unit price": 20,
      "Sum_prices": 600
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "4/8/2018",
      "Product Id": "PID10",
      "Number of product sold": 24,
      "Unit price": 14,
      "Sum_prices": 336
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID11",
      "Number of product sold": 10,
      "Unit price": 15,
      "Sum_prices": 150
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID01",
      "Number of product sold": 8,
      "Unit price": 12,
      "Sum_prices": 96
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID02",
      "Number of product sold": 5,
      "Unit price": 22,
      "Sum_prices": 110
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID03",
      "Number of product sold": 24,
      "Unit price": 19,
      "Sum_prices": 456
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID04",
      "Number of product sold": 8,
      "Unit price": 21,
      "Sum_prices": 168
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID05",
      "Number of product sold": 9,
      "Unit price": 9,
      "Sum_prices": 81
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "4/8/2018",
      "Product Id": "PID06",
      "Number of product sold": 25,
      "Unit price": 20,
      "Sum_prices": 500
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID07",
      "Number of product sold": 15,
      "Unit price": 10,
      "Sum_prices": 150
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "6/9/2018",
      "Product Id": "PID09",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID10",
      "Number of product sold": 23,
      "Unit price": 14,
      "Sum_prices": 322
    },
    {
      "Account": "Massimiliano Nazionale",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 14,
      "Unit price": 12,
      "Sum_prices": 168
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "4/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID03",
      "Number of product sold": 25,
      "Unit price": 19,
      "Sum_prices": 475
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "8/18/2018",
      "Product Id": "PID04",
      "Number of product sold": 26,
      "Unit price": 21,
      "Sum_prices": 546
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "8/23/2018",
      "Product Id": "PID05",
      "Number of product sold": 19,
      "Unit price": 9,
      "Sum_prices": 171
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID06",
      "Number of product sold": 23,
      "Unit price": 20,
      "Sum_prices": 460
    },
    {
      "Account": "Eweline Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "2/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 16,
      "Unit price": 10,
      "Sum_prices": 160
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID09",
      "Number of product sold": 28,
      "Unit price": 20,
      "Sum_prices": 560
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "5/31/2018",
      "Product Id": "PID10",
      "Number of product sold": 17,
      "Unit price": 14,
      "Sum_prices": 238
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID11",
      "Number of product sold": 23,
      "Unit price": 15,
      "Sum_prices": 345
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "6/5/2018",
      "Product Id": "PID01",
      "Number of product sold": 30,
      "Unit price": 12,
      "Sum_prices": 360
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID03",
      "Number of product sold": 29,
      "Unit price": 19,
      "Sum_prices": 551
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID04",
      "Number of product sold": 22,
      "Unit price": 21,
      "Sum_prices": 462
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID05",
      "Number of product sold": 23,
      "Unit price": 9,
      "Sum_prices": 207
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID06",
      "Number of product sold": 17,
      "Unit price": 20,
      "Sum_prices": 340
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 6,
      "Unit price": 10,
      "Sum_prices": 60
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "3/21/2018",
      "Product Id": "PID08",
      "Number of product sold": 12,
      "Unit price": 22,
      "Sum_prices": 264
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "5/8/2018",
      "Product Id": "PID09",
      "Number of product sold": 7,
      "Unit price": 20,
      "Sum_prices": 140
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "5/9/2018",
      "Product Id": "PID10",
      "Number of product sold": 30,
      "Unit price": 14,
      "Sum_prices": 420
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID11",
      "Number of product sold": 14,
      "Unit price": 15,
      "Sum_prices": 210
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Planned_vod",
      "Order date": "5/29/2018",
      "Product Id": "PID01",
      "Number of product sold": 17,
      "Unit price": 12,
      "Sum_prices": 204
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "5/8/2018",
      "Product Id": "PID02",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "5/30/2018",
      "Product Id": "PID03",
      "Number of product sold": 24,
      "Unit price": 19,
      "Sum_prices": 456
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Planned_vod",
      "Order date": "5/16/2018",
      "Product Id": "PID04",
      "Number of product sold": 17,
      "Unit price": 21,
      "Sum_prices": 357
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "5/29/2018",
      "Product Id": "PID05",
      "Number of product sold": 8,
      "Unit price": 9,
      "Sum_prices": 72
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID06",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID07",
      "Number of product sold": 24,
      "Unit price": 10,
      "Sum_prices": 240
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID08",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Beno�t Bellegarde",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID09",
      "Number of product sold": 10,
      "Unit price": 20,
      "Sum_prices": 200
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID10",
      "Number of product sold": 10,
      "Unit price": 14,
      "Sum_prices": 140
    },
    {
      "Account": "Alberto Fonzi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID11",
      "Number of product sold": 28,
      "Unit price": 15,
      "Sum_prices": 420
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Planned_vod",
      "Order date": "8/31/2018",
      "Product Id": "PID01",
      "Number of product sold": 14,
      "Unit price": 12,
      "Sum_prices": 168
    },
    {
      "Account": "Nicolette Bruneau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID01",
      "Number of product sold": 24,
      "Unit price": 12,
      "Sum_prices": 288
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "8/30/2018",
      "Product Id": "PID02",
      "Number of product sold": 11,
      "Unit price": 22,
      "Sum_prices": 242
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "5/14/2018",
      "Product Id": "PID03",
      "Number of product sold": 15,
      "Unit price": 19,
      "Sum_prices": 285
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "8/22/2018",
      "Product Id": "PID04",
      "Number of product sold": 11,
      "Unit price": 21,
      "Sum_prices": 231
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID05",
      "Number of product sold": 25,
      "Unit price": 9,
      "Sum_prices": 225
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID06",
      "Number of product sold": 25,
      "Unit price": 20,
      "Sum_prices": 500
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "8/28/2018",
      "Product Id": "PID07",
      "Number of product sold": 15,
      "Unit price": 10,
      "Sum_prices": 150
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "5/22/2018",
      "Product Id": "PID08",
      "Number of product sold": 6,
      "Unit price": 22,
      "Sum_prices": 132
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "5/18/2018",
      "Product Id": "PID09",
      "Number of product sold": 20,
      "Unit price": 20,
      "Sum_prices": 400
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "4/15/2018",
      "Product Id": "PID10",
      "Number of product sold": 5,
      "Unit price": 14,
      "Sum_prices": 70
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "4/11/2018",
      "Product Id": "PID11",
      "Number of product sold": 26,
      "Unit price": 15,
      "Sum_prices": 390
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID01",
      "Number of product sold": 28,
      "Unit price": 12,
      "Sum_prices": 336
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "5/16/2018",
      "Product Id": "PID02",
      "Number of product sold": 30,
      "Unit price": 22,
      "Sum_prices": 660
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID03",
      "Number of product sold": 18,
      "Unit price": 19,
      "Sum_prices": 342
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "8/22/2018",
      "Product Id": "PID04",
      "Number of product sold": 9,
      "Unit price": 21,
      "Sum_prices": 189
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID05",
      "Number of product sold": 19,
      "Unit price": 9,
      "Sum_prices": 171
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID06",
      "Number of product sold": 12,
      "Unit price": 20,
      "Sum_prices": 240
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID07",
      "Number of product sold": 29,
      "Unit price": 10,
      "Sum_prices": 290
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "4/11/2018",
      "Product Id": "PID08",
      "Number of product sold": 10,
      "Unit price": 22,
      "Sum_prices": 220
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "5/16/2018",
      "Product Id": "PID09",
      "Number of product sold": 5,
      "Unit price": 20,
      "Sum_prices": 100
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID10",
      "Number of product sold": 30,
      "Unit price": 14,
      "Sum_prices": 420
    },
    {
      "Account": "Sarah Moore",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "5/11/2018",
      "Product Id": "PID11",
      "Number of product sold": 21,
      "Unit price": 15,
      "Sum_prices": 315
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "5/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 27,
      "Unit price": 12,
      "Sum_prices": 324
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Submitted_vod",
      "Order date": "5/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Jon Doe",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "8/28/2018",
      "Product Id": "PID03",
      "Number of product sold": 17,
      "Unit price": 19,
      "Sum_prices": 323
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "8/28/2018",
      "Product Id": "PID04",
      "Number of product sold": 16,
      "Unit price": 21,
      "Sum_prices": 336
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID05",
      "Number of product sold": 15,
      "Unit price": 9,
      "Sum_prices": 135
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID06",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "8/18/2018",
      "Product Id": "PID07",
      "Number of product sold": 10,
      "Unit price": 10,
      "Sum_prices": 100
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "4/22/2018",
      "Product Id": "PID08",
      "Number of product sold": 26,
      "Unit price": 22,
      "Sum_prices": 572
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "8/28/2018",
      "Product Id": "PID09",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID10",
      "Number of product sold": 7,
      "Unit price": 14,
      "Sum_prices": 98
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "8/30/2018",
      "Product Id": "PID11",
      "Number of product sold": 16,
      "Unit price": 15,
      "Sum_prices": 240
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID01",
      "Number of product sold": 5,
      "Unit price": 12,
      "Sum_prices": 60
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Planned_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID02",
      "Number of product sold": 23,
      "Unit price": 22,
      "Sum_prices": 506
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "6/12/2018",
      "Product Id": "PID03",
      "Number of product sold": 5,
      "Unit price": 19,
      "Sum_prices": 95
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "8/24/2018",
      "Product Id": "PID04",
      "Number of product sold": 20,
      "Unit price": 21,
      "Sum_prices": 420
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Planned_vod",
      "Order date": "8/25/2018",
      "Product Id": "PID05",
      "Number of product sold": 26,
      "Unit price": 9,
      "Sum_prices": 234
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID06",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 25,
      "Unit price": 10,
      "Sum_prices": 250
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID08",
      "Number of product sold": 12,
      "Unit price": 22,
      "Sum_prices": 264
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "8/24/2018",
      "Product Id": "PID09",
      "Number of product sold": 28,
      "Unit price": 20,
      "Sum_prices": 560
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Planned_vod",
      "Order date": "8/20/2018",
      "Product Id": "PID10",
      "Number of product sold": 29,
      "Unit price": 14,
      "Sum_prices": 406
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID11",
      "Number of product sold": 30,
      "Unit price": 15,
      "Sum_prices": 450
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "5/22/2018",
      "Product Id": "PID01",
      "Number of product sold": 22,
      "Unit price": 12,
      "Sum_prices": 264
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID01",
      "Number of product sold": 29,
      "Unit price": 12,
      "Sum_prices": 348
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "8/30/2018",
      "Product Id": "PID01",
      "Number of product sold": 22,
      "Unit price": 12,
      "Sum_prices": 264
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "5/28/2018",
      "Product Id": "PID02",
      "Number of product sold": 20,
      "Unit price": 22,
      "Sum_prices": 440
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID03",
      "Number of product sold": 17,
      "Unit price": 19,
      "Sum_prices": 323
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "5/18/2018",
      "Product Id": "PID04",
      "Number of product sold": 27,
      "Unit price": 21,
      "Sum_prices": 567
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "4/14/2018",
      "Product Id": "PID05",
      "Number of product sold": 25,
      "Unit price": 9,
      "Sum_prices": 225
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID06",
      "Number of product sold": 8,
      "Unit price": 20,
      "Sum_prices": 160
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "5/23/2018",
      "Product Id": "PID07",
      "Number of product sold": 21,
      "Unit price": 10,
      "Sum_prices": 210
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "6/16/2018",
      "Product Id": "PID08",
      "Number of product sold": 27,
      "Unit price": 22,
      "Sum_prices": 594
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "5/22/2018",
      "Product Id": "PID09",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID10",
      "Number of product sold": 10,
      "Unit price": 14,
      "Sum_prices": 140
    },
    {
      "Account": "Massimiliano Nazionale",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID11",
      "Number of product sold": 18,
      "Unit price": 15,
      "Sum_prices": 270
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "4/18/2018",
      "Product Id": "PID01",
      "Number of product sold": 12,
      "Unit price": 12,
      "Sum_prices": 144
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID03",
      "Number of product sold": 23,
      "Unit price": 19,
      "Sum_prices": 437
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "6/15/2018",
      "Product Id": "PID04",
      "Number of product sold": 11,
      "Unit price": 21,
      "Sum_prices": 231
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID05",
      "Number of product sold": 22,
      "Unit price": 9,
      "Sum_prices": 198
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "4/4/2018",
      "Product Id": "PID06",
      "Number of product sold": 19,
      "Unit price": 20,
      "Sum_prices": 380
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID07",
      "Number of product sold": 13,
      "Unit price": 10,
      "Sum_prices": 130
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID08",
      "Number of product sold": 14,
      "Unit price": 22,
      "Sum_prices": 308
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID09",
      "Number of product sold": 29,
      "Unit price": 20,
      "Sum_prices": 580
    },
    {
      "Account": "Henry Smith",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID10",
      "Number of product sold": 24,
      "Unit price": 14,
      "Sum_prices": 336
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID11",
      "Number of product sold": 5,
      "Unit price": 15,
      "Sum_prices": 75
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "6/22/2018",
      "Product Id": "PID01",
      "Number of product sold": 20,
      "Unit price": 12,
      "Sum_prices": 240
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID02",
      "Number of product sold": 7,
      "Unit price": 22,
      "Sum_prices": 154
    },
    {
      "Account": "Leo Wood",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID03",
      "Number of product sold": 19,
      "Unit price": 19,
      "Sum_prices": 361
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "6/9/2018",
      "Product Id": "PID04",
      "Number of product sold": 22,
      "Unit price": 21,
      "Sum_prices": 462
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID05",
      "Number of product sold": 24,
      "Unit price": 9,
      "Sum_prices": 216
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "4/4/2018",
      "Product Id": "PID06",
      "Number of product sold": 12,
      "Unit price": 20,
      "Sum_prices": 240
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID07",
      "Number of product sold": 5,
      "Unit price": 10,
      "Sum_prices": 50
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID08",
      "Number of product sold": 23,
      "Unit price": 22,
      "Sum_prices": 506
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "8/19/2018",
      "Product Id": "PID09",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID10",
      "Number of product sold": 20,
      "Unit price": 14,
      "Sum_prices": 280
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID11",
      "Number of product sold": 12,
      "Unit price": 15,
      "Sum_prices": 180
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID01",
      "Number of product sold": 20,
      "Unit price": 12,
      "Sum_prices": 240
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID02",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID03",
      "Number of product sold": 5,
      "Unit price": 19,
      "Sum_prices": 95
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID04",
      "Number of product sold": 11,
      "Unit price": 21,
      "Sum_prices": 231
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID05",
      "Number of product sold": 6,
      "Unit price": 9,
      "Sum_prices": 54
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID06",
      "Number of product sold": 6,
      "Unit price": 20,
      "Sum_prices": 120
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "8/30/2018",
      "Product Id": "PID07",
      "Number of product sold": 24,
      "Unit price": 10,
      "Sum_prices": 240
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID08",
      "Number of product sold": 29,
      "Unit price": 22,
      "Sum_prices": 638
    },
    {
      "Account": "Peak View Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "8/24/2018",
      "Product Id": "PID09",
      "Number of product sold": 23,
      "Unit price": 20,
      "Sum_prices": 460
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID10",
      "Number of product sold": 14,
      "Unit price": 14,
      "Sum_prices": 196
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID11",
      "Number of product sold": 14,
      "Unit price": 15,
      "Sum_prices": 210
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "8/30/2018",
      "Product Id": "PID01",
      "Number of product sold": 13,
      "Unit price": 12,
      "Sum_prices": 156
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID02",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID03",
      "Number of product sold": 27,
      "Unit price": 19,
      "Sum_prices": 513
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID04",
      "Number of product sold": 20,
      "Unit price": 21,
      "Sum_prices": 420
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID05",
      "Number of product sold": 9,
      "Unit price": 9,
      "Sum_prices": 81
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID06",
      "Number of product sold": 22,
      "Unit price": 20,
      "Sum_prices": 440
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID07",
      "Number of product sold": 23,
      "Unit price": 10,
      "Sum_prices": 230
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "6/5/2018",
      "Product Id": "PID08",
      "Number of product sold": 28,
      "Unit price": 22,
      "Sum_prices": 616
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID09",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID10",
      "Number of product sold": 7,
      "Unit price": 14,
      "Sum_prices": 98
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID11",
      "Number of product sold": 6,
      "Unit price": 15,
      "Sum_prices": 90
    },
    {
      "Account": "Luca Toni",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID01",
      "Number of product sold": 11,
      "Unit price": 12,
      "Sum_prices": 132
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "8/18/2018",
      "Product Id": "PID02",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "8/24/2018",
      "Product Id": "PID03",
      "Number of product sold": 20,
      "Unit price": 19,
      "Sum_prices": 380
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "8/31/2018",
      "Product Id": "PID04",
      "Number of product sold": 12,
      "Unit price": 21,
      "Sum_prices": 252
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID05",
      "Number of product sold": 15,
      "Unit price": 9,
      "Sum_prices": 135
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID06",
      "Number of product sold": 14,
      "Unit price": 20,
      "Sum_prices": 280
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "6/19/2018",
      "Product Id": "PID07",
      "Number of product sold": 21,
      "Unit price": 10,
      "Sum_prices": 210
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "6/19/2018",
      "Product Id": "PID08",
      "Number of product sold": 16,
      "Unit price": 22,
      "Sum_prices": 352
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Planned_vod",
      "Order date": "6/25/2018",
      "Product Id": "PID09",
      "Number of product sold": 27,
      "Unit price": 20,
      "Sum_prices": 540
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "6/8/2018",
      "Product Id": "PID10",
      "Number of product sold": 30,
      "Unit price": 14,
      "Sum_prices": 420
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID11",
      "Number of product sold": 11,
      "Unit price": 15,
      "Sum_prices": 165
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID01",
      "Number of product sold": 27,
      "Unit price": 12,
      "Sum_prices": 324
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "5/29/2018",
      "Product Id": "PID02",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID03",
      "Number of product sold": 21,
      "Unit price": 19,
      "Sum_prices": 399
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID04",
      "Number of product sold": 10,
      "Unit price": 21,
      "Sum_prices": 210
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID05",
      "Number of product sold": 10,
      "Unit price": 9,
      "Sum_prices": 90
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID06",
      "Number of product sold": 23,
      "Unit price": 20,
      "Sum_prices": 460
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID07",
      "Number of product sold": 15,
      "Unit price": 10,
      "Sum_prices": 150
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "5/10/2018",
      "Product Id": "PID08",
      "Number of product sold": 18,
      "Unit price": 22,
      "Sum_prices": 396
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "5/11/2018",
      "Product Id": "PID09",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID10",
      "Number of product sold": 22,
      "Unit price": 14,
      "Sum_prices": 308
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "5/13/2018",
      "Product Id": "PID11",
      "Number of product sold": 11,
      "Unit price": 15,
      "Sum_prices": 165
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 30,
      "Unit price": 12,
      "Sum_prices": 360
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID02",
      "Number of product sold": 12,
      "Unit price": 22,
      "Sum_prices": 264
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "5/16/2018",
      "Product Id": "PID03",
      "Number of product sold": 19,
      "Unit price": 19,
      "Sum_prices": 361
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID04",
      "Number of product sold": 18,
      "Unit price": 21,
      "Sum_prices": 378
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "8/25/2018",
      "Product Id": "PID05",
      "Number of product sold": 12,
      "Unit price": 9,
      "Sum_prices": 108
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "8/23/2018",
      "Product Id": "PID06",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "8/24/2018",
      "Product Id": "PID07",
      "Number of product sold": 20,
      "Unit price": 10,
      "Sum_prices": 200
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "8/29/2018",
      "Product Id": "PID08",
      "Number of product sold": 30,
      "Unit price": 22,
      "Sum_prices": 660
    },
    {
      "Account": "Sarah Moore",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID09",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "8/30/2018",
      "Product Id": "PID10",
      "Number of product sold": 11,
      "Unit price": 14,
      "Sum_prices": 154
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID11",
      "Number of product sold": 20,
      "Unit price": 15,
      "Sum_prices": 300
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID01",
      "Number of product sold": 29,
      "Unit price": 12,
      "Sum_prices": 348
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "6/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 24,
      "Unit price": 22,
      "Sum_prices": 528
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "5/14/2018",
      "Product Id": "PID03",
      "Number of product sold": 17,
      "Unit price": 19,
      "Sum_prices": 323
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID04",
      "Number of product sold": 25,
      "Unit price": 21,
      "Sum_prices": 525
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID05",
      "Number of product sold": 21,
      "Unit price": 9,
      "Sum_prices": 189
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID06",
      "Number of product sold": 22,
      "Unit price": 20,
      "Sum_prices": 440
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID07",
      "Number of product sold": 12,
      "Unit price": 10,
      "Sum_prices": 120
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID08",
      "Number of product sold": 28,
      "Unit price": 22,
      "Sum_prices": 616
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "6/12/2018",
      "Product Id": "PID09",
      "Number of product sold": 14,
      "Unit price": 20,
      "Sum_prices": 280
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "5/22/2018",
      "Product Id": "PID10",
      "Number of product sold": 26,
      "Unit price": 14,
      "Sum_prices": 364
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID01",
      "Number of product sold": 18,
      "Unit price": 12,
      "Sum_prices": 216
    },
    {
      "Account": "Guglielma Trevisan",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID02",
      "Number of product sold": 18,
      "Unit price": 22,
      "Sum_prices": 396
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "5/22/2018",
      "Product Id": "PID03",
      "Number of product sold": 15,
      "Unit price": 19,
      "Sum_prices": 285
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID04",
      "Number of product sold": 6,
      "Unit price": 21,
      "Sum_prices": 126
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "5/13/2018",
      "Product Id": "PID05",
      "Number of product sold": 26,
      "Unit price": 9,
      "Sum_prices": 234
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "5/9/2018",
      "Product Id": "PID06",
      "Number of product sold": 23,
      "Unit price": 20,
      "Sum_prices": 460
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID07",
      "Number of product sold": 20,
      "Unit price": 10,
      "Sum_prices": 200
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID08",
      "Number of product sold": 10,
      "Unit price": 22,
      "Sum_prices": 220
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID09",
      "Number of product sold": 22,
      "Unit price": 20,
      "Sum_prices": 440
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID10",
      "Number of product sold": 12,
      "Unit price": 14,
      "Sum_prices": 168
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID11",
      "Number of product sold": 30,
      "Unit price": 15,
      "Sum_prices": 450
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID01",
      "Number of product sold": 23,
      "Unit price": 12,
      "Sum_prices": 276
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "5/18/2018",
      "Product Id": "PID02",
      "Number of product sold": 6,
      "Unit price": 22,
      "Sum_prices": 132
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "5/17/2018",
      "Product Id": "PID03",
      "Number of product sold": 21,
      "Unit price": 19,
      "Sum_prices": 399
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "8/31/2018",
      "Product Id": "PID04",
      "Number of product sold": 12,
      "Unit price": 21,
      "Sum_prices": 252
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID05",
      "Number of product sold": 22,
      "Unit price": 9,
      "Sum_prices": 198
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "5/22/2018",
      "Product Id": "PID06",
      "Number of product sold": 8,
      "Unit price": 20,
      "Sum_prices": 160
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "8/28/2018",
      "Product Id": "PID07",
      "Number of product sold": 21,
      "Unit price": 10,
      "Sum_prices": 210
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "5/15/2018",
      "Product Id": "PID08",
      "Number of product sold": 26,
      "Unit price": 22,
      "Sum_prices": 572
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "5/22/2018",
      "Product Id": "PID09",
      "Number of product sold": 26,
      "Unit price": 20,
      "Sum_prices": 520
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "5/23/2018",
      "Product Id": "PID10",
      "Number of product sold": 24,
      "Unit price": 14,
      "Sum_prices": 336
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID11",
      "Number of product sold": 25,
      "Unit price": 15,
      "Sum_prices": 375
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "6/16/2018",
      "Product Id": "PID01",
      "Number of product sold": 21,
      "Unit price": 12,
      "Sum_prices": 252
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID02",
      "Number of product sold": 27,
      "Unit price": 22,
      "Sum_prices": 594
    },
    {
      "Account": "Leo Wood",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "6/13/2018",
      "Product Id": "PID03",
      "Number of product sold": 19,
      "Unit price": 19,
      "Sum_prices": 361
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "5/23/2018",
      "Product Id": "PID04",
      "Number of product sold": 17,
      "Unit price": 21,
      "Sum_prices": 357
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "6/1/2018",
      "Product Id": "PID05",
      "Number of product sold": 11,
      "Unit price": 9,
      "Sum_prices": 99
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "5/31/2018",
      "Product Id": "PID06",
      "Number of product sold": 5,
      "Unit price": 20,
      "Sum_prices": 100
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID07",
      "Number of product sold": 27,
      "Unit price": 10,
      "Sum_prices": 270
    },
    {
      "Account": "Henry Smith",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID08",
      "Number of product sold": 14,
      "Unit price": 22,
      "Sum_prices": 308
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID09",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "5/31/2018",
      "Product Id": "PID10",
      "Number of product sold": 27,
      "Unit price": 14,
      "Sum_prices": 378
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID11",
      "Number of product sold": 20,
      "Unit price": 15,
      "Sum_prices": 300
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "6/9/2018",
      "Product Id": "PID01",
      "Number of product sold": 12,
      "Unit price": 12,
      "Sum_prices": 144
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID01",
      "Number of product sold": 14,
      "Unit price": 12,
      "Sum_prices": 168
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "6/14/2018",
      "Product Id": "PID02",
      "Number of product sold": 9,
      "Unit price": 22,
      "Sum_prices": 198
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID03",
      "Number of product sold": 12,
      "Unit price": 19,
      "Sum_prices": 228
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "6/13/2018",
      "Product Id": "PID04",
      "Number of product sold": 5,
      "Unit price": 21,
      "Sum_prices": 105
    },
    {
      "Account": "Leroy Meunier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "5/25/2018",
      "Product Id": "PID05",
      "Number of product sold": 25,
      "Unit price": 9,
      "Sum_prices": 225
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID06",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Jan Neumann",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "6/4/2018",
      "Product Id": "PID07",
      "Number of product sold": 27,
      "Unit price": 10,
      "Sum_prices": 270
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "6/5/2018",
      "Product Id": "PID08",
      "Number of product sold": 30,
      "Unit price": 22,
      "Sum_prices": 660
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID09",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "6/19/2018",
      "Product Id": "PID10",
      "Number of product sold": 15,
      "Unit price": 14,
      "Sum_prices": 210
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID11",
      "Number of product sold": 19,
      "Unit price": 15,
      "Sum_prices": 285
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID01",
      "Number of product sold": 16,
      "Unit price": 12,
      "Sum_prices": 192
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "6/19/2018",
      "Product Id": "PID02",
      "Number of product sold": 12,
      "Unit price": 22,
      "Sum_prices": 264
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID03",
      "Number of product sold": 22,
      "Unit price": 19,
      "Sum_prices": 418
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID04",
      "Number of product sold": 11,
      "Unit price": 21,
      "Sum_prices": 231
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Planned_vod",
      "Order date": "6/22/2018",
      "Product Id": "PID05",
      "Number of product sold": 13,
      "Unit price": 9,
      "Sum_prices": 117
    },
    {
      "Account": "St. Martin Clinique",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID06",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID07",
      "Number of product sold": 10,
      "Unit price": 10,
      "Sum_prices": 100
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "6/18/2018",
      "Product Id": "PID08",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "6/19/2018",
      "Product Id": "PID09",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID10",
      "Number of product sold": 13,
      "Unit price": 14,
      "Sum_prices": 182
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Planned_vod",
      "Order date": "6/25/2018",
      "Product Id": "PID11",
      "Number of product sold": 24,
      "Unit price": 15,
      "Sum_prices": 360
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID01",
      "Number of product sold": 13,
      "Unit price": 12,
      "Sum_prices": 156
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "6/21/2018",
      "Product Id": "PID02",
      "Number of product sold": 29,
      "Unit price": 22,
      "Sum_prices": 638
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "8/23/2018",
      "Product Id": "PID03",
      "Number of product sold": 21,
      "Unit price": 19,
      "Sum_prices": 399
    },
    {
      "Account": "Beno�t Bellegarde",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "8/27/2018",
      "Product Id": "PID04",
      "Number of product sold": 25,
      "Unit price": 21,
      "Sum_prices": 525
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID05",
      "Number of product sold": 30,
      "Unit price": 9,
      "Sum_prices": 270
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "8/19/2018",
      "Product Id": "PID06",
      "Number of product sold": 5,
      "Unit price": 20,
      "Sum_prices": 100
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID07",
      "Number of product sold": 21,
      "Unit price": 10,
      "Sum_prices": 210
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID08",
      "Number of product sold": 18,
      "Unit price": 22,
      "Sum_prices": 396
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "8/4/2018",
      "Product Id": "PID09",
      "Number of product sold": 23,
      "Unit price": 20,
      "Sum_prices": 460
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID10",
      "Number of product sold": 28,
      "Unit price": 14,
      "Sum_prices": 392
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID11",
      "Number of product sold": 21,
      "Unit price": 15,
      "Sum_prices": 315
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 5,
      "Unit price": 12,
      "Sum_prices": 60
    },
    {
      "Account": "Sean Dunne",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "3/11/2018",
      "Product Id": "PID02",
      "Number of product sold": 10,
      "Unit price": 22,
      "Sum_prices": 220
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID03",
      "Number of product sold": 8,
      "Unit price": 19,
      "Sum_prices": 152
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "7/20/2018",
      "Product Id": "PID04",
      "Number of product sold": 10,
      "Unit price": 21,
      "Sum_prices": 210
    },
    {
      "Account": "Richard Savage",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID05",
      "Number of product sold": 18,
      "Unit price": 9,
      "Sum_prices": 162
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID06",
      "Number of product sold": 28,
      "Unit price": 20,
      "Sum_prices": 560
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID07",
      "Number of product sold": 12,
      "Unit price": 10,
      "Sum_prices": 120
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "8/7/2018",
      "Product Id": "PID08",
      "Number of product sold": 10,
      "Unit price": 22,
      "Sum_prices": 220
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID09",
      "Number of product sold": 26,
      "Unit price": 20,
      "Sum_prices": 520
    },
    {
      "Account": "Jordi Vidal",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Submitted_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID10",
      "Number of product sold": 10,
      "Unit price": 14,
      "Sum_prices": 140
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID11",
      "Number of product sold": 11,
      "Unit price": 15,
      "Sum_prices": 165
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "3/5/2018",
      "Product Id": "PID01",
      "Number of product sold": 29,
      "Unit price": 12,
      "Sum_prices": 348
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID01",
      "Number of product sold": 11,
      "Unit price": 12,
      "Sum_prices": 132
    },
    {
      "Account": "Guingamp Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "3/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 24,
      "Unit price": 12,
      "Sum_prices": 288
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "7/31/2018",
      "Product Id": "PID02",
      "Number of product sold": 23,
      "Unit price": 22,
      "Sum_prices": 506
    },
    {
      "Account": "Barbara Parodi",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID03",
      "Number of product sold": 11,
      "Unit price": 19,
      "Sum_prices": 209
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID04",
      "Number of product sold": 27,
      "Unit price": 21,
      "Sum_prices": 567
    },
    {
      "Account": "Ospedale Maggiore",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "3/18/2018",
      "Product Id": "PID05",
      "Number of product sold": 21,
      "Unit price": 9,
      "Sum_prices": 189
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID06",
      "Number of product sold": 10,
      "Unit price": 20,
      "Sum_prices": 200
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID07",
      "Number of product sold": 20,
      "Unit price": 10,
      "Sum_prices": 200
    },
    {
      "Account": "Solenn Desmarais",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID08",
      "Number of product sold": 19,
      "Unit price": 22,
      "Sum_prices": 418
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID09",
      "Number of product sold": 22,
      "Unit price": 20,
      "Sum_prices": 440
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "3/13/2018",
      "Product Id": "PID10",
      "Number of product sold": 8,
      "Unit price": 14,
      "Sum_prices": 112
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID11",
      "Number of product sold": 19,
      "Unit price": 15,
      "Sum_prices": 285
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Submitted_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID01",
      "Number of product sold": 13,
      "Unit price": 12,
      "Sum_prices": 156
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "7/20/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Saved_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID03",
      "Number of product sold": 24,
      "Unit price": 19,
      "Sum_prices": 456
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID04",
      "Number of product sold": 20,
      "Unit price": 21,
      "Sum_prices": 420
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "3/18/2018",
      "Product Id": "PID05",
      "Number of product sold": 7,
      "Unit price": 9,
      "Sum_prices": 63
    },
    {
      "Account": "Tiphaine Thibodeau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID06",
      "Number of product sold": 16,
      "Unit price": 20,
      "Sum_prices": 320
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID07",
      "Number of product sold": 12,
      "Unit price": 10,
      "Sum_prices": 120
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID08",
      "Number of product sold": 9,
      "Unit price": 22,
      "Sum_prices": 198
    },
    {
      "Account": "Gilbert Gauthier",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Planned_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID09",
      "Number of product sold": 10,
      "Unit price": 20,
      "Sum_prices": 200
    },
    {
      "Account": "Jordi Vidal",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID10",
      "Number of product sold": 20,
      "Unit price": 14,
      "Sum_prices": 280
    },
    {
      "Account": "Hospital de Puerto Real",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID11",
      "Number of product sold": 6,
      "Unit price": 15,
      "Sum_prices": 90
    },
    {
      "Account": "Tiphaine Thibodeau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Planned_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID01",
      "Number of product sold": 29,
      "Unit price": 12,
      "Sum_prices": 348
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID02",
      "Number of product sold": 24,
      "Unit price": 22,
      "Sum_prices": 528
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "7/31/2018",
      "Product Id": "PID03",
      "Number of product sold": 10,
      "Unit price": 19,
      "Sum_prices": 190
    },
    {
      "Account": "Solenn Desmarais",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID04",
      "Number of product sold": 30,
      "Unit price": 21,
      "Sum_prices": 630
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID05",
      "Number of product sold": 14,
      "Unit price": 9,
      "Sum_prices": 126
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "7/31/2018",
      "Product Id": "PID06",
      "Number of product sold": 20,
      "Unit price": 20,
      "Sum_prices": 400
    },
    {
      "Account": "Chilton Memorial Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID07",
      "Number of product sold": 21,
      "Unit price": 10,
      "Sum_prices": 210
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID08",
      "Number of product sold": 11,
      "Unit price": 22,
      "Sum_prices": 242
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID09",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "7/24/2018",
      "Product Id": "PID10",
      "Number of product sold": 7,
      "Unit price": 14,
      "Sum_prices": 98
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID11",
      "Number of product sold": 18,
      "Unit price": 15,
      "Sum_prices": 270
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Saved_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID01",
      "Number of product sold": 16,
      "Unit price": 12,
      "Sum_prices": 192
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "7/31/2018",
      "Product Id": "PID02",
      "Number of product sold": 27,
      "Unit price": 22,
      "Sum_prices": 594
    },
    {
      "Account": "Jean-Luc Besnard",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID03",
      "Number of product sold": 11,
      "Unit price": 19,
      "Sum_prices": 209
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "7/18/2018",
      "Product Id": "PID04",
      "Number of product sold": 12,
      "Unit price": 21,
      "Sum_prices": 252
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID05",
      "Number of product sold": 5,
      "Unit price": 9,
      "Sum_prices": 45
    },
    {
      "Account": "Richard Savage",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID06",
      "Number of product sold": 30,
      "Unit price": 20,
      "Sum_prices": 600
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID07",
      "Number of product sold": 27,
      "Unit price": 10,
      "Sum_prices": 270
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID08",
      "Number of product sold": 19,
      "Unit price": 22,
      "Sum_prices": 418
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID09",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID10",
      "Number of product sold": 23,
      "Unit price": 14,
      "Sum_prices": 322
    },
    {
      "Account": "H�pital�Europ�en Georges Pompido",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "7/10/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Anthony Webster",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "7/11/2018",
      "Product Id": "PID01",
      "Number of product sold": 20,
      "Unit price": 12,
      "Sum_prices": 240
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID02",
      "Number of product sold": 6,
      "Unit price": 22,
      "Sum_prices": 132
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID03",
      "Number of product sold": 15,
      "Unit price": 19,
      "Sum_prices": 285
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID04",
      "Number of product sold": 24,
      "Unit price": 21,
      "Sum_prices": 504
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Submitted_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID05",
      "Number of product sold": 12,
      "Unit price": 9,
      "Sum_prices": 108
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Submitted_vod",
      "Order date": "3/17/2018",
      "Product Id": "PID06",
      "Number of product sold": 22,
      "Unit price": 20,
      "Sum_prices": 440
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID07",
      "Number of product sold": 19,
      "Unit price": 10,
      "Sum_prices": 190
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Submitted_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID08",
      "Number of product sold": 24,
      "Unit price": 22,
      "Sum_prices": 528
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID09",
      "Number of product sold": 16,
      "Unit price": 20,
      "Sum_prices": 320
    },
    {
      "Account": "Berkshire Independent Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID10",
      "Number of product sold": 25,
      "Unit price": 14,
      "Sum_prices": 350
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID11",
      "Number of product sold": 23,
      "Unit price": 15,
      "Sum_prices": 345
    },
    {
      "Account": "Gonzalo Redriguez",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID01",
      "Number of product sold": 5,
      "Unit price": 12,
      "Sum_prices": 60
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID02",
      "Number of product sold": 10,
      "Unit price": 22,
      "Sum_prices": 220
    },
    {
      "Account": "Sean Dunne",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "3/11/2018",
      "Product Id": "PID03",
      "Number of product sold": 9,
      "Unit price": 19,
      "Sum_prices": 171
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Submitted_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID04",
      "Number of product sold": 15,
      "Unit price": 21,
      "Sum_prices": 315
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "8/4/2018",
      "Product Id": "PID05",
      "Number of product sold": 15,
      "Unit price": 9,
      "Sum_prices": 135
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID06",
      "Number of product sold": 14,
      "Unit price": 20,
      "Sum_prices": 280
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Planned_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID07",
      "Number of product sold": 17,
      "Unit price": 10,
      "Sum_prices": 170
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID08",
      "Number of product sold": 10,
      "Unit price": 22,
      "Sum_prices": 220
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID09",
      "Number of product sold": 28,
      "Unit price": 20,
      "Sum_prices": 560
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID10",
      "Number of product sold": 15,
      "Unit price": 14,
      "Sum_prices": 210
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID11",
      "Number of product sold": 17,
      "Unit price": 15,
      "Sum_prices": 255
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID01",
      "Number of product sold": 14,
      "Unit price": 12,
      "Sum_prices": 168
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID02",
      "Number of product sold": 21,
      "Unit price": 22,
      "Sum_prices": 462
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID03",
      "Number of product sold": 6,
      "Unit price": 19,
      "Sum_prices": 114
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID04",
      "Number of product sold": 24,
      "Unit price": 21,
      "Sum_prices": 504
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID05",
      "Number of product sold": 12,
      "Unit price": 9,
      "Sum_prices": 108
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID06",
      "Number of product sold": 27,
      "Unit price": 20,
      "Sum_prices": 540
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID07",
      "Number of product sold": 9,
      "Unit price": 10,
      "Sum_prices": 90
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID08",
      "Number of product sold": 8,
      "Unit price": 22,
      "Sum_prices": 176
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Planned_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID09",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Sam Daniels",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID10",
      "Number of product sold": 14,
      "Unit price": 14,
      "Sum_prices": 196
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID11",
      "Number of product sold": 15,
      "Unit price": 15,
      "Sum_prices": 225
    },
    {
      "Account": "Eweline Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID01",
      "Number of product sold": 26,
      "Unit price": 12,
      "Sum_prices": 312
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "7/31/2018",
      "Product Id": "PID02",
      "Number of product sold": 11,
      "Unit price": 22,
      "Sum_prices": 242
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID06",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID03",
      "Number of product sold": 28,
      "Unit price": 19,
      "Sum_prices": 532
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID04",
      "Number of product sold": 17,
      "Unit price": 21,
      "Sum_prices": 357
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Submitted_vod",
      "Order date": "8/7/2018",
      "Product Id": "PID05",
      "Number of product sold": 5,
      "Unit price": 9,
      "Sum_prices": 45
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Submitted_vod",
      "Order date": "8/7/2018",
      "Product Id": "PID06",
      "Number of product sold": 11,
      "Unit price": 20,
      "Sum_prices": 220
    },
    {
      "Account": "Peter N�rnberger",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "6/15/2018",
      "Product Id": "PID07",
      "Number of product sold": 6,
      "Unit price": 10,
      "Sum_prices": 60
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID08",
      "Number of product sold": 20,
      "Unit price": 22,
      "Sum_prices": 440
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "8/7/2018",
      "Product Id": "PID09",
      "Number of product sold": 27,
      "Unit price": 20,
      "Sum_prices": 540
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID28",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID10",
      "Number of product sold": 9,
      "Unit price": 14,
      "Sum_prices": 126
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Planned_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID11",
      "Number of product sold": 30,
      "Unit price": 15,
      "Sum_prices": 450
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID01",
      "Number of product sold": 20,
      "Unit price": 12,
      "Sum_prices": 240
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID02",
      "Number of product sold": 9,
      "Unit price": 22,
      "Sum_prices": 198
    },
    {
      "Account": "Eweline Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Saved_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID03",
      "Number of product sold": 25,
      "Unit price": 19,
      "Sum_prices": 475
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID04",
      "Number of product sold": 22,
      "Unit price": 21,
      "Sum_prices": 462
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Submitted_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID05",
      "Number of product sold": 21,
      "Unit price": 9,
      "Sum_prices": 189
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID06",
      "Number of product sold": 21,
      "Unit price": 20,
      "Sum_prices": 420
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID07",
      "Number of product sold": 14,
      "Unit price": 10,
      "Sum_prices": 140
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID08",
      "Number of product sold": 26,
      "Unit price": 22,
      "Sum_prices": 572
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID09",
      "Number of product sold": 30,
      "Unit price": 20,
      "Sum_prices": 600
    },
    {
      "Account": "Iseult B�langer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "7/12/2018",
      "Product Id": "PID10",
      "Number of product sold": 7,
      "Unit price": 14,
      "Sum_prices": 98
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Planned_vod",
      "Order date": "7/23/2018",
      "Product Id": "PID11",
      "Number of product sold": 7,
      "Unit price": 15,
      "Sum_prices": 105
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID01",
      "Number of product sold": 5,
      "Unit price": 12,
      "Sum_prices": 60
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "7/26/2018",
      "Product Id": "PID02",
      "Number of product sold": 22,
      "Unit price": 22,
      "Sum_prices": 484
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID03",
      "Number of product sold": 6,
      "Unit price": 19,
      "Sum_prices": 114
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID06",
      "Order status": "Submitted_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID04",
      "Number of product sold": 9,
      "Unit price": 21,
      "Sum_prices": 189
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID05",
      "Number of product sold": 26,
      "Unit price": 9,
      "Sum_prices": 234
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID23",
      "Order status": "Saved_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID06",
      "Number of product sold": 18,
      "Unit price": 20,
      "Sum_prices": 360
    },
    {
      "Account": "Anatole Bescond",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID07",
      "Number of product sold": 25,
      "Unit price": 10,
      "Sum_prices": 250
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID11",
      "Order status": "Saved_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID08",
      "Number of product sold": 24,
      "Unit price": 22,
      "Sum_prices": 528
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "8/2/2018",
      "Product Id": "PID09",
      "Number of product sold": 8,
      "Unit price": 20,
      "Sum_prices": 160
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID10",
      "Number of product sold": 15,
      "Unit price": 14,
      "Sum_prices": 210
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID11",
      "Number of product sold": 13,
      "Unit price": 15,
      "Sum_prices": 195
    },
    {
      "Account": "Tiphaine Thibodeau",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "7/10/2018",
      "Product Id": "PID01",
      "Number of product sold": 15,
      "Unit price": 12,
      "Sum_prices": 180
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID02",
      "Number of product sold": 26,
      "Unit price": 22,
      "Sum_prices": 572
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID03",
      "Number of product sold": 5,
      "Unit price": 19,
      "Sum_prices": 95
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID04",
      "Number of product sold": 28,
      "Unit price": 21,
      "Sum_prices": 588
    },
    {
      "Account": "S. Gerardo Monza",
      "Account type": "Hospital",
      "Salesperson ID": "SPID27",
      "Order status": "Saved_vod",
      "Order date": "7/31/2018",
      "Product Id": "PID05",
      "Number of product sold": 30,
      "Unit price": 9,
      "Sum_prices": 270
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID06",
      "Number of product sold": 9,
      "Unit price": 20,
      "Sum_prices": 180
    },
    {
      "Account": "Karen Bell",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "7/30/2018",
      "Product Id": "PID07",
      "Number of product sold": 14,
      "Unit price": 10,
      "Sum_prices": 140
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID08",
      "Number of product sold": 19,
      "Unit price": 22,
      "Sum_prices": 418
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Saved_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID09",
      "Number of product sold": 22,
      "Unit price": 20,
      "Sum_prices": 440
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID03",
      "Order status": "Planned_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID10",
      "Number of product sold": 21,
      "Unit price": 14,
      "Sum_prices": 294
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID11",
      "Number of product sold": 21,
      "Unit price": 15,
      "Sum_prices": 315
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID01",
      "Number of product sold": 15,
      "Unit price": 12,
      "Sum_prices": 180
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID02",
      "Number of product sold": 8,
      "Unit price": 22,
      "Sum_prices": 176
    },
    {
      "Account": "David Barnard",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Planned_vod",
      "Order date": "7/30/2018",
      "Product Id": "PID03",
      "Number of product sold": 21,
      "Unit price": 19,
      "Sum_prices": 399
    },
    {
      "Account": "Graeme Barber",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Planned_vod",
      "Order date": "8/14/2018",
      "Product Id": "PID04",
      "Number of product sold": 8,
      "Unit price": 21,
      "Sum_prices": 168
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Planned_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID05",
      "Number of product sold": 29,
      "Unit price": 9,
      "Sum_prices": 261
    },
    {
      "Account": "Jesualdo Bustos Mu?iz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID13",
      "Order status": "Saved_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID06",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Planned_vod",
      "Order date": "8/2/2018",
      "Product Id": "PID07",
      "Number of product sold": 30,
      "Unit price": 10,
      "Sum_prices": 300
    },
    {
      "Account": "Graeme Barber",
      "Account type": "Doctor",
      "Salesperson ID": "SPID01",
      "Order status": "Planned_vod",
      "Order date": "9/3/2018",
      "Product Id": "PID08",
      "Number of product sold": 23,
      "Unit price": 22,
      "Sum_prices": 506
    },
    {
      "Account": "Javier Espinoza",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Planned_vod",
      "Order date": "6/26/2018",
      "Product Id": "PID09",
      "Number of product sold": 13,
      "Unit price": 20,
      "Sum_prices": 260
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Planned_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID10",
      "Number of product sold": 5,
      "Unit price": 14,
      "Sum_prices": 70
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID11",
      "Number of product sold": 27,
      "Unit price": 15,
      "Sum_prices": 405
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Planned_vod",
      "Order date": "6/25/2018",
      "Product Id": "PID01",
      "Number of product sold": 7,
      "Unit price": 12,
      "Sum_prices": 84
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID10",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID01",
      "Number of product sold": 5,
      "Unit price": 12,
      "Sum_prices": 60
    },
    {
      "Account": "Anne Roth",
      "Account type": "Doctor",
      "Salesperson ID": "SPID09",
      "Order status": "Saved_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID02",
      "Number of product sold": 10,
      "Unit price": 22,
      "Sum_prices": 220
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "6/15/2018",
      "Product Id": "PID03",
      "Number of product sold": 13,
      "Unit price": 19,
      "Sum_prices": 247
    },
    {
      "Account": "Stefan Lingsminat",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "6/27/2018",
      "Product Id": "PID04",
      "Number of product sold": 24,
      "Unit price": 21,
      "Sum_prices": 504
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID26",
      "Order status": "Submitted_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID05",
      "Number of product sold": 17,
      "Unit price": 9,
      "Sum_prices": 153
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID18",
      "Order status": "Planned_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID06",
      "Number of product sold": 8,
      "Unit price": 20,
      "Sum_prices": 160
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Submitted_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID07",
      "Number of product sold": 30,
      "Unit price": 10,
      "Sum_prices": 300
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 13,
      "Unit price": 22,
      "Sum_prices": 286
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID09",
      "Number of product sold": 26,
      "Unit price": 20,
      "Sum_prices": 520
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Planned_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID10",
      "Number of product sold": 7,
      "Unit price": 14,
      "Sum_prices": 98
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Submitted_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID11",
      "Number of product sold": 19,
      "Unit price": 15,
      "Sum_prices": 285
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "8/10/2018",
      "Product Id": "PID01",
      "Number of product sold": 15,
      "Unit price": 12,
      "Sum_prices": 180
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Submitted_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID02",
      "Number of product sold": 14,
      "Unit price": 22,
      "Sum_prices": 308
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "8/7/2018",
      "Product Id": "PID03",
      "Number of product sold": 26,
      "Unit price": 19,
      "Sum_prices": 494
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "8/7/2018",
      "Product Id": "PID04",
      "Number of product sold": 22,
      "Unit price": 21,
      "Sum_prices": 462
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID05",
      "Number of product sold": 22,
      "Unit price": 9,
      "Sum_prices": 198
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Submitted_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID06",
      "Number of product sold": 25,
      "Unit price": 20,
      "Sum_prices": 500
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Planned_vod",
      "Order date": "8/7/2018",
      "Product Id": "PID07",
      "Number of product sold": 29,
      "Unit price": 10,
      "Sum_prices": 290
    },
    {
      "Account": "Sven Pernerstorfer",
      "Account type": "Doctor",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID08",
      "Number of product sold": 7,
      "Unit price": 22,
      "Sum_prices": 154
    },
    {
      "Account": "Alexia Alarie",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID09",
      "Number of product sold": 19,
      "Unit price": 20,
      "Sum_prices": 380
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID10",
      "Number of product sold": 23,
      "Unit price": 14,
      "Sum_prices": 322
    },
    {
      "Account": "Berkshire Independent Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID11",
      "Number of product sold": 25,
      "Unit price": 15,
      "Sum_prices": 375
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID01",
      "Number of product sold": 17,
      "Unit price": 12,
      "Sum_prices": 204
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID11",
      "Order status": "Submitted_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID02",
      "Number of product sold": 27,
      "Unit price": 22,
      "Sum_prices": 594
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID07",
      "Order status": "Saved_vod",
      "Order date": "3/5/2018",
      "Product Id": "PID03",
      "Number of product sold": 24,
      "Unit price": 19,
      "Sum_prices": 456
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID03",
      "Order status": "Saved_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID04",
      "Number of product sold": 24,
      "Unit price": 21,
      "Sum_prices": 504
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Submitted_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID05",
      "Number of product sold": 23,
      "Unit price": 9,
      "Sum_prices": 207
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID06",
      "Number of product sold": 6,
      "Unit price": 20,
      "Sum_prices": 120
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID18",
      "Order status": "Submitted_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID07",
      "Number of product sold": 16,
      "Unit price": 10,
      "Sum_prices": 160
    },
    {
      "Account": "Broussais University Hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "8/6/2018",
      "Product Id": "PID08",
      "Number of product sold": 14,
      "Unit price": 22,
      "Sum_prices": 308
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID09",
      "Number of product sold": 26,
      "Unit price": 20,
      "Sum_prices": 520
    },
    {
      "Account": "Ewelina Krupowicz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Submitted_vod",
      "Order date": "8/8/2018",
      "Product Id": "PID10",
      "Number of product sold": 9,
      "Unit price": 14,
      "Sum_prices": 126
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID11",
      "Number of product sold": 27,
      "Unit price": 15,
      "Sum_prices": 405
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID02",
      "Order status": "Submitted_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID01",
      "Number of product sold": 22,
      "Unit price": 12,
      "Sum_prices": 264
    },
    {
      "Account": "Maria Giovanna Ruggeri",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID22",
      "Order status": "Saved_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID03",
      "Number of product sold": 9,
      "Unit price": 19,
      "Sum_prices": 171
    },
    {
      "Account": "Dante Signorini",
      "Account type": "Doctor",
      "Salesperson ID": "SPID19",
      "Order status": "Planned_vod",
      "Order date": "7/19/2018",
      "Product Id": "PID04",
      "Number of product sold": 23,
      "Unit price": 21,
      "Sum_prices": 483
    },
    {
      "Account": "Michele Fruscella",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID05",
      "Number of product sold": 15,
      "Unit price": 9,
      "Sum_prices": 135
    },
    {
      "Account": "Luca Argento",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "7/26/2018",
      "Product Id": "PID06",
      "Number of product sold": 15,
      "Unit price": 20,
      "Sum_prices": 300
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID16",
      "Order status": "Saved_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID07",
      "Number of product sold": 30,
      "Unit price": 10,
      "Sum_prices": 300
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID01",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID08",
      "Number of product sold": 16,
      "Unit price": 22,
      "Sum_prices": 352
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "7/25/2018",
      "Product Id": "PID09",
      "Number of product sold": 17,
      "Unit price": 20,
      "Sum_prices": 340
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID02",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID10",
      "Number of product sold": 23,
      "Unit price": 14,
      "Sum_prices": 322
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID21",
      "Order status": "Saved_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID11",
      "Number of product sold": 6,
      "Unit price": 15,
      "Sum_prices": 90
    },
    {
      "Account": "Naomi Hopkins",
      "Account type": "Doctor",
      "Salesperson ID": "SPID12",
      "Order status": "Saved_vod",
      "Order date": "6/29/2018",
      "Product Id": "PID01",
      "Number of product sold": 25,
      "Unit price": 12,
      "Sum_prices": 300
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID14",
      "Order status": "Saved_vod",
      "Order date": "7/3/2018",
      "Product Id": "PID01",
      "Number of product sold": 8,
      "Unit price": 12,
      "Sum_prices": 96
    },
    {
      "Account": "St. John hospital",
      "Account type": "Hospital",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID05",
      "Number of product sold": 20,
      "Unit price": 9,
      "Sum_prices": 180
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID04",
      "Order status": "Saved_vod",
      "Order date": "6/28/2018",
      "Product Id": "PID06",
      "Number of product sold": 30,
      "Unit price": 20,
      "Sum_prices": 600
    },
    {
      "Account": "Lucas Beaumanoir",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Submitted_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID07",
      "Number of product sold": 14,
      "Unit price": 10,
      "Sum_prices": 140
    },
    {
      "Account": "David Barnard",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Planned_vod",
      "Order date": "7/24/2018",
      "Product Id": "PID08",
      "Number of product sold": 8,
      "Unit price": 22,
      "Sum_prices": 176
    },
    {
      "Account": "H�pital Saint-Louis",
      "Account type": "Hospital",
      "Salesperson ID": "SPID20",
      "Order status": "Submitted_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID09",
      "Number of product sold": 6,
      "Unit price": 20,
      "Sum_prices": 120
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID10",
      "Number of product sold": 10,
      "Unit price": 14,
      "Sum_prices": 140
    },
    {
      "Account": "Leonie Becker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID08",
      "Order status": "Saved_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID11",
      "Number of product sold": 24,
      "Unit price": 15,
      "Sum_prices": 360
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "7/2/2018",
      "Product Id": "PID01",
      "Number of product sold": 8,
      "Unit price": 12,
      "Sum_prices": 96
    },
    {
      "Account": "Robert Adams",
      "Account type": "Doctor",
      "Salesperson ID": "SPID05",
      "Order status": "Saved_vod",
      "Order date": "8/2/2018",
      "Product Id": "PID02",
      "Number of product sold": 15,
      "Unit price": 22,
      "Sum_prices": 330
    },
    {
      "Account": "Hospital Alexander Krankenhaus",
      "Account type": "Hospital",
      "Salesperson ID": "SPID14",
      "Order status": "Submitted_vod",
      "Order date": "7/13/2018",
      "Product Id": "PID03",
      "Number of product sold": 11,
      "Unit price": 19,
      "Sum_prices": 209
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID24",
      "Order status": "Saved_vod",
      "Order date": "7/9/2018",
      "Product Id": "PID04",
      "Number of product sold": 10,
      "Unit price": 21,
      "Sum_prices": 210
    },
    {
      "Account": "Massimiliano Nazionale",
      "Account type": "Doctor",
      "Salesperson ID": "SPID15",
      "Order status": "Submitted_vod",
      "Order date": "7/4/2018",
      "Product Id": "PID05",
      "Number of product sold": 23,
      "Unit price": 9,
      "Sum_prices": 207
    },
    {
      "Account": "Jesualdo Bustos Mu?iz",
      "Account type": "Doctor",
      "Salesperson ID": "SPID04",
      "Order status": "Planned_vod",
      "Order date": "8/21/2018",
      "Product Id": "PID06",
      "Number of product sold": 5,
      "Unit price": 20,
      "Sum_prices": 100
    },
    {
      "Account": "Julian Dupont",
      "Account type": "Doctor",
      "Salesperson ID": "SPID27",
      "Order status": "Submitted_vod",
      "Order date": "7/16/2018",
      "Product Id": "PID07",
      "Number of product sold": 9,
      "Unit price": 10,
      "Sum_prices": 90
    },
    {
      "Account": "Ann Brown",
      "Account type": "Doctor",
      "Salesperson ID": "SPID17",
      "Order status": "Submitted_vod",
      "Order date": "8/1/2018",
      "Product Id": "PID08",
      "Number of product sold": 17,
      "Unit price": 22,
      "Sum_prices": 374
    },
    {
      "Account": "Juliet Beardsley",
      "Account type": "Doctor",
      "Salesperson ID": "SPID25",
      "Order status": "Planned_vod",
      "Order date": "8/2/2018",
      "Product Id": "PID09",
      "Number of product sold": 10,
      "Unit price": 20,
      "Sum_prices": 200
    },
    {
      "Account": "Leoni Beker",
      "Account type": "Doctor",
      "Salesperson ID": "SPID23",
      "Order status": "Planned_vod",
      "Order date": "7/31/2018",
      "Product Id": "PID10",
      "Number of product sold": 17,
      "Unit price": 14,
      "Sum_prices": 238
    }
   ]
         
    
     
   /*------------------------ 3 legtöbbet eladott eladó adatai -----------------------*/	
  //submited vod alapján
     
   /*
   also based on number of items they’ve sold (in some sort of table, but I let you to decide).
   */
   function threesoldaccount(){
     let salesperson=[]
     let sumsales=[];
     for(i=0;i<sales.length;i++){
     salesperson[i]=product2.filter((val)=>val["Salesperson ID"] == sales[i].Id && val["Order status"]=="Submitted_vod");
     sumsales[i]=salesperson[i].reduce((total, obj) => obj["Number of product sold"] + total,0)
     salesperson[i].sum=sumsales[i];
     salesperson[i].name=sales[i].Name;
     }
     
     let salesp2test=salesperson.sort(function(a, b) {
      return a.sum - b.sum;
  });
  console.log(salesp2test);
  let length=salesp2test.length;
  let text=salesp2test[length-1].name + ": "+ "<span>"+salesp2test[length-1].sum+"</span>"+"<br>"
  +salesp2test[length-2].name + ": "+ "<span>"+salesp2test[length-2].sum+ "</span>"+"<br>" 
  +salesp2test[length-3].name + ": "+ "<span>"+salesp2test[length-3].sum+ "</span>"+"<br>";
  $('.result1').html(text);
  }
  threesoldaccount();
   
   
   
   

   /*-----------------	my top 3 sales persons based on the revenue and ----------- */
   
   function threebestpricesacc(){  
     let revenue=[]
     let sumsales1=[];
     for(i=0;i<sales.length;i++){
     revenue[i]=product2.filter((val)=>val["Salesperson ID"] == sales[i].Id && val["Order status"]=="Submitted_vod");
     sumsales1[i]=revenue[i].reduce((total, obj) => obj["Sum_prices"] + total,0)
     revenue[i].sum=sumsales1[i];
     revenue[i].name=sales[i].Name;
     }

     let salesperson2=revenue.sort(function(a, b) {
      return a.sum - b.sum;
  });
  let length=salesperson2.length;
  let text=salesperson2[length-1].name + ": "+ "<span>€"+ salesperson2[length-1].sum+ "</span>"+"<br>"
  +salesperson2[length-2].name + ": "+ "<span>€"+salesperson2[length-2].sum+ "</span>"+"<br>" 
  +salesperson2[length-3].name + ": "+ "<span>€"+salesperson2[length-3].sum+ "</span>"+"<br>";
  $('.result2').html(text);
    
   
   
  }
  threebestpricesacc();
 
	
 
   /*---------------------------------------------------------------------------------*/
   
 
   /*It would be a nice feature, to have a customer filter next to the chart designed 
   as above, so that I can check the number of units sold for a specific customer individually.*/
   
   function filter(){
     let customer=[]
     let sumcustomer=[];
     for(i=0;i<customers.length;i++){
     customer[i]=product.filter((val)=>val["Account"] == customers[i]["Account"]);
     sumcustomer[i]=customer[i].reduce((total, obj) => obj["Number of product sold"] + total,0)
     customer[i].sum=sumcustomer[i];
     }
    
   
   
   let $select= $('#customers');
       
     for (var i = 0; i < customer.length; i++) {
       $select.append('<option id="'+customer[i].sum+ '">' +customer[i][0].Account+'</option>');
   
     }
     
     $('#customers').on('change', function valogat(){ 
      var ch=document.getElementById("customers").value
	    for (var i = 0; i < customer.length; i++) {
           if (ch==customer[i][0].Account){
            $('.szurtek').html(customer[i][0].Account +" bought "+"<span>"+customer[i].sum+"</span> units"+ " in 2018");
		        }
		   };
    })
    };
    filter();
 
   /*-	the number of units sold per month (in some sort of chart, but I let you to decide).
   */
  function soldpermonth(){
     let monthly=[]
     let salespermonth=[];
     var allsalespermonth=[];
     const months=[["2017-12-31","2018-01-31"],["2018-01-31","2018-02-28"],["2018-02-28","2018-03-31"],["2018-03-31","2018-04-30"],["2018-04-30","2018-05-31"],["2018-05-31","2018-06-30"],["2018-06-30","2018-07-31"],["2018-07-31","2018-08-31"],["2018-08-31","2018-09-30"],["2018-09-30","2018-10-31"],["2018-10-31","2018-11-30"],["2018-11-30","2018-12-31"]]
     for(i=0;i<12;i++){
     monthly[i]=product.filter((val)=> new Date(val["Order date"]).getTime() >= new Date(months[i][0]+"T00:00:00.000Z").getTime() && new Date(val["Order date"]).getTime()<= new Date(months[i][1]+"T00:00:00.000Z").getTime() && val["Order status"]=="Submitted_vod");
     salespermonth[i]=monthly[i].reduce((total, obj) => obj["Number of product sold"] + total,0)
     monthly[i].salespermonth=salespermonth[i];
      allsalespermonth.push(salespermonth[i])
     }
     return allsalespermonth
    };
    soldpermonth();

     /*------------DIAGRAM a 12 hónap eladott mennyiségekből----------------------*/
  function soldunits(){
    const dataset=soldpermonth();
    const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const w = 550;   
    const h = 400;   
    const padding = 50;
    const xScale = d3.scaleBand()
                .domain(month)	.domain(["January","February","March","April","May","June","July","August","September","October","November","December"])
                       .range([0, w -padding-5]);
    const yScale = d3.scaleLinear()
                       .domain([0, d3.max(dataset, (d) => d)])
                       .range([h-padding, padding]);
    const svg = d3.select(".div1")                  
    .append("svg")   
    .attr("width", w)                  
    .attr("height", h-50)
    const g=svg.append('g')
      .attr('transform','translate(0,-50)');
    g.selectAll("rect")       
      .data(dataset)       
      .enter()     
      .append("rect")
      .attr("x", (d, i) => 55+i * 41) //fix      
      .attr("y", (d) => yScale(d)+padding)       
      .attr("width", 35)       
      .attr("height", (d, i) => 2 * d)       
      .attr("fill", "navy")          
      .attr("class","bar")       
    svg.selectAll("text")       
      .data(dataset)       
      .enter()       
      .append("text")       
      .text((d) => d)       
      .attr("x", (d, i) => 60+i * 41)       
      .attr("y", (d) => yScale(d)-10);
      const yAxis = d3.axisLeft(yScale);
      const xAxis = d3.axisBottom(xScale);
    svg.append("g")
         .attr("transform", "translate("+padding+"," + (0) + ")")
         .call(yAxis);
    svg.append("g")
         .attr("transform", "translate("+padding+"," + (h-50) + ")")
         .call(xAxis);
    
    };
    soldunits();

});