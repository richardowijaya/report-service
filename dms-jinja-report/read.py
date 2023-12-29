detail = [
    {"child":[
        {
            "data": [
                        {"name":"coba", "skip":3},
                        {"name":"ARDC/N/01/18/00025"},
                        {"name":"09 Feb 2018"},
            ]
        },
        {
            "data": [
                        {"name":"miaw", "skip":3},
                        {"name":"next_data"},
                        {"name":"10 Feb 2018"},
            ]
        }
    ]}
]
td_html = ''
for i in detail:
    if 'child' in i:
        for j in i['child']:
            td_html += '<tr>'
            if 'data' in j:
                for j in j['data']:
                    td_html += f"<td>{j['name']}</td>"
            td_html += '</tr>'
print(td_html)
# details =   [
#                 {"name":"Afiliasi", "id": "group", "child":[
#                     {"name":"Dealer/Company", "id": "customer-type", "skip":1, "child":[
#                         {"name": "130001 - PT. WAHANA WIRAWAN - MALANG", "id": "customer-id", "skip":2,  "child":[
#                             {
#                                 "data": [   
#                                             {"name":"26 Jan 2018","skip":3},
#                                             {"name":"ARDC/N/01/18/00025"},
#                                             {"name":"09 Feb 2018"},
#                                             {"name":"871,200.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"871,200.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":" "},
#                                             {"name":"0"},
#                                             {"name":" "},
#                                             {"name":" "},
#                                         ]
#                             },
#                             {
#                                 "data": [   
#                                             {"name":"26 Jan 2018","skip":3},
#                                             {"name":"ARDC/N/01/18/00025"},
#                                             {"name":"09 Feb 2018"},
#                                             {"name":"871,200.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"871,200.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":"0.00"},
#                                             {"name":" "},
#                                             {"name":"0"},
#                                             {"name":" "},
#                                             {"name":" "},
#                                         ]
#                             },   
#                         ]},
#                         {"name": "130002 - PT. Wahana Wirawan - Denpasar" , "id": "customer-id",  "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "130015 - PT. WAHANA WIRAWAN - PURWAKARTA", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "130103 - PT. Wahana Trans Lestari Medan - Amplas", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "130300 - PT. Wahana Wirawan Palembang", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "130500 - PT. WAHANA PERSADA LAMPUNG", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "130800 - PT. WAHANA SENJAYA JAKARTA", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "131001 - PT. Indo Sentosa Trada - Fatmawati", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "131100 - PT. Wahana Sun Hutama Bandung", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "131600 - PT. WAHANA SUMBER BARU YOGYA", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "131703 - PT. UNITED INDO SURABAYA - SIDOARJO", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "131800 - PT. WAHANA INTI NUSA PONTIANAK", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "131801 - PT. WAHANA INTI NUSA PONTIANAK - PALANGKARAYA", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "132202 - PT. WAHANA MEGAH PUTRA MAKASSAR - LATIMOJONG", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "132602 - PT. WAHANA INDO TRADA - PULO GADUNG", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                         {"name": "132698 - PT. WAHANA INDO TRADA - PUSAT", "id": "customer-id", "skip":2, "child":[
#                             {"name":"26 Jan 2018","skip":3}],},
#                     ]},
#                     {"name":"Total Dealer/Company"},
#                     ]
#                 },
#                 {"name":"Total Afiliasi"},
#             ]