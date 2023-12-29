from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static", html=True), name="static")

borders = 1
rows = 3

top = [
    {"name": "logo", "rowspan": 4, "name-type": "label"},
    {"name": "Account Receivable Aging Detail", "colspan": 5, "id": "report-title"},
    {"name": "Company", "id": "header-profile", "name-type": "label"},
    {"name": "Indomobil Sukses Internasional Tbk.", "id": "header-profile"},
    {"name": "Address", "id": "header-profile", "name-type": "label"},
    {"name": "WISMA INDOMOBIL LT.6 JL. MT. HARTYONO KAV 8", "id": "header-profile"},
    {"name": "-", "rowspan": 3, "colspan": 5, "name-type": "label"},
    {"name": "RT. 009 RW. 011 BIDARA CINA JATINEGARA", "id": "header-profile"},
    {"name": "JAKARTA TIMUR DKI JAKARTA 13330", "id": "header-profile"},
    {"name": "-", "colspan": 5},
    {"name": "newline", "colspan": 3, "id": "header-profile"},
    {"name": "Print Date", "name-type": "label"},
    {"name": "23-10-2023"},
    {"name": "Period", "name-type": "label"},
    {"name": "March 2022"},
    {"name": "A/R Type", "name-type": "label"},
    {"name": "All"},
    {"name": "Profit Center", "name-type": "label"},
    {"name": "All"},
    {"name": "Aging Amount", "name-type": "label"},
    {"name": "Base Amount"},
    {"name": "Print by", "name-type": "label"},
    {"name": "Levina Anora"},
]


def generate_td_for_top(data):
    previous_name = None
    td_top_html = ""
    for item in data:
        if "colspan" in item:
            colspan = f"colspan={item['colspan']}"
        else:
            colspan = ""

        if "rowspan" in item:
            rowspan = f"rowspan={item['rowspan']}"
        else:
            rowspan = ""

        if "id" in item:
            id = f"class={item['id']}"
        else:
            id = ""

        if item["name"] == "newline":
            td_top_html += "</tr></table></td>"
            for td in range(15):
                td_top_html += "<td></td>"
            td_top_html += "<td>"
            td_top_html += f"<td {id} {colspan} {rowspan}>"
            td_top_html += "<table><tr>"

        if item["name"] == "logo":
            td_top_html += f"<td {rowspan}>"
            td_top_html += "<div class='logo'><img src='http://localhost:8000/static//assets/Indomobil Logo.gif' alt='Indomobil Logo'></div>"
            td_top_html += "</td>"

        if item["name"] == "-":
            td_top_html += f"<td {colspan} {rowspan} {id}></td>"
        elif item["name"] != "logo" and item["name"] != "newline":
            if previous_name != "-":
                td_top_html += "<td></td>"
            td_top_html += f"<td {colspan} {rowspan} {id}><table><tr><td><div>{item['name']}</div></td></tr></table></td>"

        if "name-type" in item:
            if item["name"] == "logo":
                td_top_html += ""
            elif item["name"] == "-":
                td_top_html += ""
            else:
                td_top_html += "<td></td>"
                td_top_html += (
                    f"<td {id}><table><tr><td><div>:</div></td></tr></table></td>"
                )
        else:
            td_top_html += "</tr>"
            td_top_html += "<tr>"

        previous_name = item["name"]
    return td_top_html


def generate_html_for_top(data):
    top_html = "<tr><td colspan='7'><table><tr>"
    top_html += generate_td_for_top(data)
    top_html += "</tr></table></td></tr>"
    return top_html


headers = [
    {"name": "Group"},
    {"name": "Customer Type"},
    {"name": "Customer ID"},
    {"name": "Invoice Date"},
    {"name": "Invoice Number"},
    {"name": "Invoice Due Date"},
    {"name": "Beginning Balance"},
    {"name": "Mutation", "colspan": 5, "rowspan": 1},
    {"name": "Ending Balance"},
    {"name": "Not Overdue"},
    {"name": "Overdue", "colspan": 7, "rowspan": 2},
    {"name": "As Of Date Payment"},
    {"name": "Remark"},
    {"name": "Account No"},
    {"name": "Status"},
    {
        "name": "Aging(days)",
        "child": [
            {"name": "Addition", "colspan": 2, "rowspan": 1},
            {
                "name": "Deduction",
                "colspan": 3,
                "rowspan": 1,
                "child": [
                    {"name": "Sales", "rowspan": 1},
                    {"name": "Correction", "rowspan": 1},
                    {"name": "Payment", "rowspan": 1},
                    {"name": "Return", "rowspan": 1},
                    {"name": "Correction", "rowspan": 1},
                    {"name": "0 - 7 days", "rowspan": 1},
                    {"name": "8 - 14 days", "rowspan": 1},
                    {"name": "15 - 21 days", "rowspan": 1},
                    {"name": "22 - 30 days", "rowspan": 1},
                    {"name": "31 - 60 days", "rowspan": 1},
                    {"name": "61 - 90 days", "rowspan": 1},
                    {"name": "> 90 days", "rowspan": 1},
                ],
            },
        ],
    },
]


def count_cols(data):
    total_cols = 0
    for item in data:
        if "colspan" in item:
            total_cols += item["colspan"]
        else:
            total_cols += 1
    return total_cols


total_cols = count_cols(headers)

details = [
    {
        "name": "Afiliasi",
        "id": "group",
        "child": [
            {
                "name": "Dealer/Company",
                "id": "customer-type",
                "skip": 1,
                "child": [
                    {
                        "name": "130001 - PT. WAHANA WIRAWAN - MALANG",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": " "},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "Quotation of IT Services for the period of 2021"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "JASA MANAJEMEN FEB'22"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {
                                "name": "total 130001 - PT. WAHANA WIRAWAN - MALANG",
                                "id": "total-customer-id-title",
                                "colspan": 4,
                                "skip": 2,
                            },
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "", "id": "total-customer-id"},
                            {"name": "0", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},
                        ],
                    },
                    {
                        "name": "130002 - PT. Wahana Wirawan - Denpasar",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": " "},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "Quotation of IT Services for the period of 2021"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "JASA MANAJEMEN FEB'22"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {
                                "name": "total 130001 - PT. WAHANA WIRAWAN - MALANG",
                                "id": "total-customer-id-title",
                                "colspan": 4,
                                "skip": 2,
                            },
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "", "id": "total-customer-id"},
                            {"name": "0", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},],
                    },
                    {
                        "name": "130015 - PT. WAHANA WIRAWAN - PURWAKARTA",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": " "},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "Quotation of IT Services for the period of 2021"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "JASA MANAJEMEN FEB'22"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {
                                "name": "total 130001 - PT. WAHANA WIRAWAN - MALANG",
                                "id": "total-customer-id-title",
                                "colspan": 4,
                                "skip": 2,
                            },
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "", "id": "total-customer-id"},
                            {"name": "0", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},],
                    },
                    {
                        "name": "130103 - PT. Wahana Trans Lestari Medan - Amplas",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": " "},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "Quotation of IT Services for the period of 2021"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {"name": "26 Jan 2018", "skip": 3},
                            {"name": "ARDC/N/01/18/00025"},
                            {"name": "09 Feb 2018"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "871,200.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "0.00"},
                            {"name": "JASA MANAJEMEN FEB'22"},
                            {"name": "0"},
                            {"name": " "},
                            {"name": " "},
                            {"newline": "new"},
                            {
                                "name": "total 130001 - PT. WAHANA WIRAWAN - MALANG",
                                "id": "total-customer-id-title",
                                "colspan": 4,
                                "skip": 2,
                            },
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "871,200.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "0.00", "id": "total-customer-id"},
                            {"name": "", "id": "total-customer-id"},
                            {"name": "0", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},
                            {"name": " ", "id": "total-customer-id"},],
                    },
                    {
                        "name": "130300 - PT. Wahana Wirawan Palembang",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "130500 - PT. WAHANA PERSADA LAMPUNG",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "130800 - PT. WAHANA SENJAYA JAKARTA",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "131001 - PT. Indo Sentosa Trada - Fatmawati",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "131100 - PT. Wahana Sun Hutama Bandung",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "131600 - PT. WAHANA SUMBER BARU YOGYA",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "131703 - PT. UNITED INDO SURABAYA - SIDOARJO",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "131800 - PT. WAHANA INTI NUSA PONTIANAK",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "131801 - PT. WAHANA INTI NUSA PONTIANAK - PALANGKARAYA",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "132202 - PT. WAHANA MEGAH PUTRA MAKASSAR - LATIMOJONG",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "132602 - PT. WAHANA INDO TRADA - PULO GADUNG",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                    {
                        "name": "132698 - PT. WAHANA INDO TRADA - PUSAT",
                        "id": "customer-id",
                        "skip": 2,
                        "child": [{"name": "26 Jan 2018", "skip": 3}],
                    },
                ],
            },
            {"newline": "new"},
            {
                "name": "Total Dealer/Company",
                "id": "total-customer-type-title",
                "skip": 1,
                "colspan": 5,
            },
            {"name": "871,200.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "871,200.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "0.00", "id": "total-customer-type"},
            {"name": "", "id": "total-customer-type"},
            {"name": "0", "id": "total-customer-type"},
            {"name": " ", "id": "total-customer-type"},
            {"name": " ", "id": "total-customer-type"},
        ],
    },
    {"newline": "new"},
    {
        "name": "Total Afiliasi",
        "id": "total-group-title",
        "colspan": 6,
    },
    {"name": "871,200.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "871,200.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "0.00", "id": "total-group"},
    {"name": "", "id": "total-group"},
    {"name": "0", "id": "total-group"},
    {"name": " ", "id": "total-group"},
    {"name": " ", "id": "total-group"},
]


def generate_td_for_headers(data):
    td_html = ""
    for item in data:
        if item["name"] == "new":
            print("create new row")
        if "colspan" not in item:
            item["colspan"] = 1
        if "rowspan" not in item:
            item["rowspan"] = rows
        td_html += f"<td align='center' colspan='{item['colspan']}' rowspan='{item['rowspan']}'>{item['name']}</td>"
        if "child" in item:
            td_html += "</tr>"
            td_html += generate_tr_for_headers(item["child"])
    return td_html


def generate_tr_for_headers(data):
    tr_html = "<tr class='table-header' align='center'>"
    tr_html += generate_td_for_headers(data)
    tr_html += "</tr>"
    return tr_html


def generate_td_for_details(data, level):
    td_html = ""
    for item in data:
        if "newline" in item:
            td_html += "</tr>"
            td_html += "<tr class='table-detail' align='left'>"
        else:
            if "colspan" not in item:
                item["colspan"] = 1
            if "rowspan" not in item:
                item["rowspan"] = 1
            if "skip" in item:
                for _ in range(item["skip"]):
                    td_html += "<td align='center' colspan='1' rowspan='1'></td>"
            if "id" in item:
                if item["id"] == "group":
                    item["colspan"] = total_cols
                    image_url = "<span class='toggle-image' data-td-id='row-group'>"
                elif item["id"] == "customer-type" or item["id"] == "customer-id":
                    item["colspan"] = total_cols - item["skip"]
                    image_url = (
                        f"<span class='toggle-image' data-td-id='row-{item['id']}'>"
                    )
                else:
                    image_url = "<span>"
            if "id" not in item:
                item["id"] = "customer-detail-data"
                image_url = ""
            td_html += f"<td id={item['id']} align='left' colspan='{item['colspan']}' rowspan='{item['rowspan']}'>{image_url}{item['name']}</span></td>"
            if "child" in item:
                td_html += "</tr>"
                td_html += generate_tr_for_details(item["child"], level)
                td_html += f"<tr class='table-detail' align='left'>"
    return td_html


def generate_tr_for_details(data, level):
    tr_html = "<tr class='table-detail' align='left'>"
    tr_html += generate_td_for_details(data, level)
    tr_html += "</tr>"
    return tr_html


table_html = generate_html_for_top(top)
table_html += generate_tr_for_headers(headers)
table_html += generate_tr_for_details(details, 0)


@app.get("/araging")
async def name(request: Request):
    return templates.TemplateResponse(
        "home.html",
        {
            "request": request,
            "data": table_html,
        },
    )
