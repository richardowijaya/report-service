// variable to indicate whether user has chosen delete checkbox
var checkFlag = 0

function showPreview(entityName, prmValue, title) {
    try {
        // define window size
        //var width = screen.availWidth * 0.75;
        //var height = screen.availHeight * 0.75;
        var width = screen.availWidth;
        var height = screen.availHeight;
        var retval, sFeatures, wFeatures;

        // open preview
        //var leftPos = (screen.width - width) / 2;
        //var topPos = (screen.height - height) / 2;
        //var leftPos = (screen.width - width);
        //var topPos = (screen.height - height);

        //if(leftPos < 0) leftPos = 0;
        //if(topPos < 0) topPos = 0;

        // define URL and window name
        //sFeatures = "center:yes; help:no; resizable:yes; status:no; edge:raised; unadorned:yes; dialogWidth:" + width + "px; dialogHeight:" + height + "px";

        sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height;
        wFeatures = 'width=' + (width - 10) + ',height=' + (height - 30) + ',toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=1,top=1';

        if (prmValue != '') {
            var prmLower = prmValue.toLowerCase();
            if (prmLower.search('&viewas=') == -1) {
                retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, window, sFeatures);
                if (retval && !retval.closed) {
                    retval.focus();
                }

                //retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, entityName, wFeatures);
            } else {
                if (prmLower.search('&viewas=crv') != -1) {
                    //retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, window, sFeatures);
                    retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, entityName, wFeatures);
                    if (retval && !retval.closed) {
                        retval.focus();
                    }
                } else {
                    if (prmLower.search('&viewas=xls') != -1) {
                        wFeatures = 'width=10,height=10,toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=1,top=1';
                    }
                    retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, entityName, wFeatures);
                    if (retval && !retval.closed) {
                        retval.focus();
                    }
                }
            }
        }
        else {
            retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + '&Title=' + title, window, sFeatures);
            if (retval && !retval.closed) {
                retval.focus();
            }
            //retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + '&Title=' + title, entityName, wFeatures);
        }
        if (window.focus) { retval.focus() }
    }
    catch (e) {
        // ignore error
    }
    finally {
        return;
    }

}

function showPreview_rdlc(entityName, prmValue, title) {
    try {
        // define window size
        //var width = screen.availWidth * 0.75;
        //var height = screen.availHeight * 0.75;
        var width = screen.availWidth;
        var height = screen.availHeight;
        var retval, sFeatures, wFeatures;

        // open preview
        //var leftPos = (screen.width - width) / 2;
        //var topPos = (screen.height - height) / 2;
        //var leftPos = (screen.width - width);
        //var topPos = (screen.height - height);

        //if(leftPos < 0) leftPos = 0;
        //if(topPos < 0) topPos = 0;

        // define URL and window name
        //sFeatures = "center:yes; help:no; resizable:yes; status:no; edge:raised; unadorned:yes; dialogWidth:" + width + "px; dialogHeight:" + height + "px";

        sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height;
        wFeatures = 'width=' + (width - 10) + ',height=' + (height - 30) + ',toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,left=1,top=1';

        if (prmValue != '') {
            var prmLower = prmValue.toLowerCase();
            if (prmLower.search('&viewas=') == -1) {
                //retval = window.open('../Common/Preview_hf_rdlc.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, window, sFeatures);
                retval = window.open('../../Common/Preview_hf_rdlc.aspx?Entity=' + entityName + replace(prmValue, ';', '&') + '&Title=' + title, entityName, wFeatures);
                if (retval && !retval.closed) {
                    retval.focus();
                }
            } else {
                if (prmLower.search('&viewas=crv') != -1) {
                    //retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, window, sFeatures);
                    retval = window.open('../../Common/Preview_hf_rdlc.aspx?Entity=' + entityName + replace(prmValue, ';', '&') + '&Title=' + title, entityName, wFeatures);
                    if (retval && !retval.closed) {
                        retval.focus();
                    }
                } else {
                    if (prmLower.search('&viewas=xls') != -1) {
                        wFeatures = 'width=10,height=10,toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=1,top=1';
                    }
                    retval = window.open('../../Common/Preview_hf_rdlc.aspx?Entity=' + entityName + replace(prmValue, ';', '&') + '&Title=' + title, entityName, wFeatures);
                    if (retval && !retval.closed) {
                        retval.focus();
                    }
                }
            }
        }
        else {
            //retval = window.open('../Common/Preview_hf_rdlc.aspx?Entity=' + entityName + '&Title=' + title, window, sFeatures);
            retval = window.open('../../Common/Preview_hf_rdlc.aspx?Entity=' + entityName + '&Title=' + title, entityName, wFeatures);
            if (retval && !retval.closed)
                retval.focus();
        }
        if (window.focus) { retval.focus() }
    }
    catch (e) {
        // ignore error
    }
    finally {
        return;
    }

}

function openDownload(entityName, title) {
    try {
        var width = screen.availWidth;
        var height = screen.availHeight;
        var retval, wFeatures;

        wFeatures = 'width=10,height=10,toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=1,top=1';

        retval = window.open('../Download/DownLoad_hf.aspx?DownloadEntity=' + entityName + '&Title=' + title, entityName, wFeatures);
        if (retval && !retval.closed) {
            retval.focus();
        }
        if (window.focus) { retval.focus() }
    }
    catch (e) {
        // ignore error
    }
    finally {
        return;
    }

}

function showMultiplePreview(entityName, sysno, title) {
    try {
        // define window size
        //var width = screen.availWidth * 0.75;
        //var height = screen.availHeight * 0.75;
        var width = screen.availWidth;
        var height = screen.availHeight;
        var retval, sFeatures;
        var prmValue;

        //        switch (entityName) {
        //            case "JournalEntry":
        //                prmValue = '&JournalSysNo=' + sysno;
        //                break;
        //            default:
        //                prmValue = '';
        //                break;
        //        }

        // define URL and window name
        //sFeatures = "center:yes; help:no; resizable:yes; status:no; edge:raised; unadorned:yes; dialogWidth:" + width + "px; dialogHeight:" + height + "px";
        const y = window.top.outerHeight / 2 + window.top.screenY - height / 2;
        const x = window.top.outerWidth / 2 + window.top.screenX - width / 2;
        // set window features
        sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height + ",top=" + y + ",left=" + x;


        if (prmValue != '') {
            retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + replace(prmValue, '&', ';') + '&Title=' + title, window, sFeatures);
        }
        else {
            retval = window.open('../Common/Preview_hf.aspx?Entity=' + entityName + '&Title=' + title, window, sFeatures);
        }

    }
    catch (e) {
        // ignore error
    }
    finally {
        return;
    }

}


function OpenDownload(ExportEntity, ExportType, ExportTitle, ExportFilter, ExportSort) {
    var WindowName = ExportTitle;
    // define window size
    var width = 50;
    var height = 50;

    //Export Type:
    //CSV or XLS

    // open preview
    var leftPos = (screen.width - width) / 2;
    var topPos = (screen.height - height) / 2;

    if (leftPos < 0) leftPos = 0;
    if (topPos < 0) topPos = 0;

    window.open('../Common/export.aspx?ExportTitle=' + ExportTitle + '&ExportEntity=' + ExportEntity + '&ExportType=' + ExportType + '&ExportFilter=' + ExportFilter + '&ExportSort=' + ExportSort, name, 'center=yes,fullscreen=no,toolbar=no,status=no,menubar=no,scrollbars=no,resizable=yes,directories=no,location=no,width=' + width + ',height=' + height + ',left=' + leftPos + ',top=' + topPos);
}

function showPageView(prmDocType, prmValue, title) {
    try {
        // define window size
        var width = screen.availWidth;
        var height = screen.availHeight;
        var retval, sFeatures;

        // define URL and window name
        const y = window.top.outerHeight / 2 + window.top.screenY - height / 2;
        const x = window.top.outerWidth / 2 + window.top.screenX - width / 2;
        // set window features
        sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height + ",top=" + y + ",left=" + x;


        if (prmDocType != '') {
            if (prmValue != '') {
                retval = window.open('../Common/PageView.aspx?prmDocType=' + prmDocType + '&prmValue=' + replace(prmValue, '&', ';') + '&Title=' + title, window, sFeatures);
            }
            else {
                retval = window.open('../Common/PageView.aspx?prmDocType=' + prmDocType + '&Title=' + title, window, sFeatures);
            }
        }
        else {
            retval = window.open('../Common/PageView.aspx?Title=' + title, window, sFeatures);
        }

    }
    catch (e) {
        // ignore error
    }
    finally {
        return;
    }

}


function showPagePaymentView(prmQueryString, title) {
    try {
        // define window size
        var width = screen.availWidth;
        var height = screen.availHeight;
        var retval, sFeatures, prmDocType;

        // define URL and window name
        const y = window.top.outerHeight / 2 + window.top.screenY - height / 2;
        const x = window.top.outerWidth / 2 + window.top.screenX - width / 2;
        // set window features
        sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height + ",top=" + y + ",left=" + x;


        prmDocType = "PV";

        if (prmDocType != '') {
            if (prmValue != '') {
                retval = window.open('../Common/PageView.aspx?prmDocType=' + prmDocType + '&prmValue=' + replace(prmQueryString, '&', ';') + '&Title=' + title, window, sFeatures);
            }
            else {
                retval = window.open('../Common/PageView.aspx?prmDocType=' + prmDocType + '&Title=' + title, window, sFeatures);
            }
        }
        else {
            retval = window.open('../Common/PageView.aspx?Title=' + title, window, sFeatures);
        }

    }
    catch (e) {
        // ignore error
    }
    finally {
        return;
    }

}


function showNewCommon(entityWidth, source, title) {
    try {
        // define window size
        var width = screen.availWidth;
        var height = screen.availHeight;
        var retval, sFeatures;

        // define window dimension
        switch (entityWidth) {
            case "SampleXXXX":
                width = "540px"; height = "550px";
                break;
            default:
                width = screen.availWidth; height = screen.availHeight;
                break;
        }

        // define URL and window name
        const y = window.top.outerHeight / 2 + window.top.screenY - height / 2;
        const x = window.top.outerWidth / 2 + window.top.screenX - width / 2;
        // set window features
        sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height + ",top=" + y + ",left=" + x;


        if (source != '') {
            retval = window.open('../Common/Common_hf.aspx?RequestedSource=' + source + '&Title=' + title, window, sFeatures);
        }
    }
    catch (e) {
        // ignore error
    }
    finally {
        return;
    }

}

///////////////////////////////LOOK UP///////////////////////////
var retval;

function showLookUpWindow(modul, colHide, postback, descr, entityName, filter, sort, title, textBox1, textBox2, textBox3, textBox4, textBox5, textBox6, textBox7, textBox8, textBox9, textBox10, textBox11, textBoxArray, Hidden1, colDesc, ReplaceSeparator, CompanyCode) {

    // declare variable 
    var retval, sFeatures, width, height;
    var arrTextBox = new Array();

    // define window dimension
    switch (entityName) {
        case "PurchaseReturn":
            width = "600px"; height = "400px";
            break;
        case "ForecastMaster":
            width = "600px"; height = "450px";
            break;
        case "ItemLocUOM":
            width = "530px"; height = "400px";
            break;
        case "RFPForPUM":
            width = "825px"; height = "500px";
            break;
        case "Invoice0":
            width = "450px"; height = "400px";
            break;
        case "ReferenceNoWorkOrder":
            width = "600px"; height = "400px";
            break;
        case "TaxMAPPaymentType":
            width = "520px"; height = "450px";
            break;
        case "TaxMAPPaymentTypeFilter":
            width = "650px"; height = "450px";
            break;
        case "AccountMaster":
            width = "1200px"; height = "600px";
            break;
        case "AccountMasterEntry":
            width = "1200px"; height = "600px";
            break;
        case "Agreement0":
            width = "900px"; height = "425px";
            break;
        case "BpkVehicleDesc":
            width = "1050px"; height = "425px";
            break;
        case "BasicSalesDisc":
            width = "900px"; height = "550px";
            break;
        case "BankComp0":
            width = "800px"; height = "450px";
            break;
        case "Bank0":
            width = "600px"; height = "400px";
            break;
        case "BankCompGiro":
            width = "800px"; height = "400px";
            break;
        case "BankCompHeader":
            width = "800px"; height = "400px";
            break;
        case "BpkVehicle":
            width = "800px"; height = "500px";
            break;
        case "CampaignMaster":
            width = "900px"; height = "500px";
            break;
        case "CmIn_AR":
            width = "780px"; height = "425px";
            break;
        case "CmIn_ServiceContract":
            width = "780px"; height = "425px";
            break;
        case "CmIn_DP_ProfitCenterUn":
            width = "780px"; height = "425px";
            break;
        case "CmIn_DP_ProfitCenterPartAndAcc":
            width = "780px"; height = "425px";
            break;
        case "CmIn_DP_ProfitCenterWsAndBs":
            width = "780px"; height = "425px";
            break;
        case "CmIn_RefundInsurance":
            width = "780px"; height = "425px";
            break;
        case "CmIn_FaSales":
            width = "780px"; height = "425px";
            break;
        case "CmIn_Return":
            width = "780px"; height = "425px";
            break;
        case "CmIn_SurplusDp":
            width = "780px"; height = "425px";
            break;
        case "CNRef":
            width = "690px"; height = "400px";
            break;
        case "CNRefDetail":
            width = "700px"; height = "400px";
            break;
        case "ChassisByLeasing":
            width = "900px"; height = "450px";
            break;
        case "ConsolidationCode":
            width = "700px"; height = "400px";
            break;
        case "ClosePeriod":
            width = "450px"; height = "400px";
            break;
        case "CostProfitCenter":
            width = "680px"; height = "450px";
            break;
        case "CustomerByPhone":
            width = "520px"; height = "425px";
            break;
        case "CustomerByType":
            width = "600px"; height = "450px";
            break;
        //        case "CustomerMasterByTitle":
        //            width = "600px"; height = "450px";
        //            break;            
        case "CustomerByTypeAndAddress":
            width = "1180px"; height = "450px";
            break;
        case "CustomerByTypeAndMergeAddress":
            width = "1180px"; height = "450px";
            break;
        case "CustomerMaster":
            width = "700px"; height = "450px";
            break;
        case "DO":
            width = "670px"; height = "400px";
            break;
        case "DocBPK":
            width = "500px"; height = "400px";
            break;
        // added by Yoby 30/09/2011    
        case "DocNoStockOpnameAnalyze":
            width = "1000px"; height = "300px";
            break;
        case "Discount":
            width = "580px"; height = "450px";
            break;
        case "Dimension0":
            width = "800px"; height = "500px";
            break;
        case "DpInOutstanding2":
            width = "1000px"; height = "425px";
            break;
        case "EmployeeGroup":
            width = "670px"; height = "450px";
            break;
        case "EmployeeMaster":
            width = "530px"; height = "450px";
            break;
        case "EmployeeCompMap":
            width = "480px"; height = "450px";
            break;
        case "EmployeeLeader":
            width = "530px"; height = "450px";
            break;
        case "EmployeeAuthorized":
            width = "500px"; height = "400px";
            break;
        case "EVENTFORRFP":
            width = "810px"; height = "400px";
            break;
        case "FAItemActive":
            width = "900px"; height = "425px";
            break;
        case "FakPolB":
            width = "540px"; height = "550px";
            break;
        case "FakPol":
            width = "640px"; height = "550px";
            break;
        case "FakPolAllowBorrow":
            width = "640px"; height = "550px";
            break;
        case "FakPolBySPM":
            width = "800px"; height = "425px";
            break;
        case "FakPolBBN":
            width = "800px"; height = "425px";
            break;
        case "FAItemActive":
            width = "700px"; height = "550px";
            break;
        case "GRPOFAOutstanding":
            width = "900px"; height = "550px";
            break;
        case "Incentive":
            width = "370px"; height = "450px";
            break;
        case "Invoice1":
            width = "820px"; height = "425px";
            break;
        case "InvoiceSO1":
            width = "820px"; height = "425px";
            break;
        case "InvoiceVech":
            width = "700px"; height = "425px";
            break;
        case "InsuranceRateSupplier":
            width = "480px"; height = "450px";
            break;
        case "ItemClass":
            width = "650px"; height = "500px";
            break;
        case "ItemArOtrSubsidiMisc":
            width = "800px"; height = "400px";
            break;
        case "ItemClaim1":
            width = "800px"; height = "400px";
            break;
        case "ItemPO":
            width = "700px"; height = "425px";
            break;
        case "ItemPO1":
            width = "800px"; height = "400px";
            break;
        case "ItemWorkOrder2":
            width = "800px"; height = "400px";
            break;
        case "ItemWorkOrder2Wcf":
            width = "800px"; height = "400px";
            break;
        case "ItemOprCode":
            width = "800px"; height = "450px";
            break;
        case "ItemOprCodeWithPrice":
            width = "900px"; height = "450px";
            break;
        case "ItemCode":
            width = "875px"; height = "450px";
            break;
        case "ItemUOM":
            width = "600px"; height = "400px";
            break;
        case "ItemListTransPO":
            width = "800px"; height = "400px";
            break;
        case "ItemListTransPR":
            width = "800px"; height = "400px";
            break;
        case "ItemMaster":
            width = "900px"; height = "425px";
            break;
        case "ItemMasterOX":
            width = "900px"; height = "425px";
            break;
        case "ItemMasterWithSellingUOM":
            width = "600px"; height = "460px";
            break;
        case "ItemMasterForFreeAccs":
            width = "600px"; height = "460px";
            break;
        case "ItemPackage0":
            width = "800px"; height = "425px";
            break;
        case "ItemPackage":
            width = "700px"; height = "400px";
            break;
        case "ItemLvl":
            width = "980px"; height = "500px";
            break;
        case "ItemLevel":
            width = "800px"; height = "400px";
            break;
        case "ItemListTrans":
            width = "900px"; height = "450px";
            break;
        case "ItemListTransSO":
            width = "1000px"; height = "450px";
            break;
        case "JournalModel0":
            width = "560px"; height = "400px";
            break;
        case "ListEvent":
            width = "800px"; height = "425px";
            break;
        case "ListJournalModel":
            width = "1000px"; height = "425px";
            break;
        case "ListWarehouseMaster2":
            width = "650px"; height = "425px";
            break;
        case "ListItemLocation":
            width = "700px"; height = "400px";
            break;
        case "ListLocationMaster":
            width = "1000px"; height = "425px";
            break;
        case "ListWarehouseMaster":
            width = "680px"; height = "400px";
            break;
        case "LocationMaster":
            width = "600px"; height = "400px";
            break;
        case "Municipality":
            width = "700px"; height = "400px";
            break;
        case "Markup":
            width = "600px"; height = "400px";
            break;
        // RFP CMOUT type 
        case "TRXTYPE_CMOUT_AP":
            width = "740px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_AP_DPP":
            width = "850px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_AP_VAT":
            width = "850px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_AP_NONTRADE":
            width = "740px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_AP_NONTRADE_DPP":
            width = "850px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_AP_NONTRADE_VAT":
            width = "850px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_NON_AP":
            width = "480px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_CASH_ADV_PO":
            width = "600px"; height = "400px";
            break;
        case "TRXTYPE_CMOUT_CASH_ADV_PO_UN":
            width = "600px"; height = "400px";
            break;
        case "TRXTYPE_CMOUT_CASH_ADV_NON_PO":
            width = "700px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_CASH_ADV_ADD":
            width = "400px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_RETURN":
            width = "970px"; height = "425px";
            break;
        case "TRXTYPE_CMOUT_EXTERNAL_TRF":
            width = "450px"; height = "400px";
            break;
        case "TRXTYPE_CMOUT_INTERNAL_TRF":
            width = "450px"; height = "400px";
            break;
        case "TRXTYPE_CMOUT_REFUND":
            width = "450px"; height = "400px";
            break;
        case "O01":
            width = "740px"; height = "425px";
            break;
        case "O02":
            width = "480px"; height = "425px";
            break;
        case "O03":
            width = "600px"; height = "400px";
            break;
        case "O04":
            width = "700px"; height = "425px";
            break;
        case "O05":
            width = "400px"; height = "425px";
            break;
        case "O06":
            width = "970px"; height = "425px";
            break;
        // case "O08": 
        // width = "700px"; height = "425px"; 
        //  break; 
        case "O07":
            width = "450px"; height = "400px";
            break;
        case "O08":
            width = "450px"; height = "400px";
            break;
        // case "O11": 
        //  width = "730px"; height = "425px"; 
        //   break; 
        case "O09":
            width = "450px"; height = "400px";
            break;
        case "Operation0":
            width = "650px"; height = "450px";
            break;
        case "Operation0WithFrt":
            width = "700px"; height = "425px";
            break;
        case "OprEntries":
            width = "850px"; height = "400px";
            break;
        case "OprLvl":
            width = "900px"; height = "400px";
            break;
        case "OprKey":
            width = "900px"; height = "400px";
            break;
        case "OprSection":
            width = "580px"; height = "400px";
            break;
        case "Package0":
            width = "950px"; height = "425px";
            break;
        case "PackingList":
            width = "800px"; height = "425px";
            break;
        case "PDI":
            width = "670px"; height = "400px";
            break;
        case "PO0":
            width = "780px"; height = "400px";
            break;
        case "PO1":
            width = "780px"; height = "400px";
            break;
        case "POBBN_NO":
            width = "715px"; height = "400px";
            break;
        case "POGRPO":
            width = "600px"; height = "500px";
            break;
        case "PickingListLine":
            width = "790px"; height = "425px";
            break;
        case "ProspectCodeByPhone":
            width = "520px"; height = "425px";
            break;
        case "ProspectSource":
            width = "500px"; height = "400px";
            break;
        case "ShiftSchedule":
            width = "650px"; height = "425px";
            break;
        case "SPM1":
            width = "560px"; height = "425px";
            break;
        case "SPMforAccs":
            width = "700px"; height = "400px";
            break;
        case "SPMCancel":
            width = "980px"; height = "400px";
            break;
        case "SOLine":
            width = "740px"; height = "425px";
            break;
        case "SOLine1":
            width = "890px"; height = "425px";
            break;
        case "SOOpen":
            width = "560px"; height = "425px";
            break;
        case "SOWithPicking":
            width = "780px"; height = "425px";
            break;
        case "SourceDoc":
            width = "650px"; height = "400px";
            break;
        case "StdUAEDesc":
            width = "820px"; height = "400px";
            break;
        case "Supplier0":
            width = "1000px"; height = "400px";
            break;
        case "Supplier1":
            width = "600px"; height = "450px";
            break;
        case "SupplySlipBillCost":
            width = "600px"; height = "430px";
            break;
        case "SupplySlipForRetur":
            width = "900px"; height = "450px";
            break;
        case "SupplySlipItem":
            width = "700px"; height = "450px";
            break;
        case "SupplySlipItemCost":
            width = "700px"; height = "450px";
            break;
        case "Subdistrict":
            width = "800px"; height = "400px";
            break;
        case "TemplateBank":
            width = "850px"; height = "500px";
            break;
        case "TrfReqLine":
            width = "600px"; height = "425px";
            break;
        case "TrfOutLine":
            width = "600px"; height = "425px";
            break;
        case "TrfIn":
            width = "800px"; height = "400px";
            break;
        case "TrfIn":
            width = "650px"; height = "400px";
            break;
        case "TrfOut":
            width = "650px"; height = "400px";
            break;
        case "TrfOutIn":
            width = "1050px"; height = "425px";
            break;
        case "TrfReq":
            width = "650px"; height = "400px";
            break;
        case "TrfReqIn":
            width = "900px"; height = "425px";
            break;
        case "TrfReqOut":
            width = "900px"; height = "400px";
            break;
        case "UnitColour":
            width = "650px"; height = "400px";
            break;
        case "UnitVariant":
            width = "650px"; height = "400px";
            break;
        case "UnitOfMeasure":
            width = "480px"; height = "400px";
            break;
        case "UnitPODetail":
            width = "570px"; height = "400px";
            break;
        case "UnitPOMaster":
            width = "670px"; height = "400px";
            break;
        case "UnitOfMeasureConv":
            width = "800px"; height = "400px";
            break;
        case "utPO0":
            width = "980px"; height = "380px";
            break;
        case "utPO1":
            width = "700px"; height = "500px";
            break;
        case "VarRegProcess1":
            width = "900px"; height = "550px";
            break;
        case "VehiclePRT":
            width = "780px"; height = "400px";
            break;
        case "VehicleMaster":
            width = "1050px"; height = "500px";
            break;
        case "Vehicle0":
            width = "880px"; height = "550px";
            break;
        case "VehicleBooking":
            width = "900px"; height = "500px";
            break;
        case "Village":
            width = "900px"; height = "500px";
            break;
        case "WarehouseMaster":
            width = "550px"; height = "400px";
            break;
        case "WarehouseLocation":
            width = "650px"; height = "500px";
            break;
        case "WOReimburst":
            width = "700px"; height = "550px";
            break;
        case "WOOnGoing":
            width = "780px"; height = "430px";
            break;
        case "WOOnGoingCost":
            width = "780px"; height = "430px";
            break;
        case "WoQcPass":
            width = "980px"; height = "425px";
            break;
        case "WorkOrderService":
            width = "800px"; height = "450px";
            break;
        case "WorkOrderAllocationGR":
            width = "900px"; height = "450px";
            break;
        case "WorkOrderAllocationBR":
            width = "600px"; height = "400px";
            break;
        case "RefAPUnitVehicle":
            width = "1000px"; height = "450px";
            break;
        case "RefAPUnitStdAccs":
            width = "1000px"; height = "450px";
            break;
        case "RefAPUnitFreeAccs":
            width = "1000px"; height = "450px";
            break;
        case "RefAPUnitInsurance":
            width = "1000px"; height = "450px";
            break;
        case "RefAPUnitTransport":
            width = "1000px"; height = "450px";
            break;
        case "RefAPUnitBBN":
            width = "1000px"; height = "450px";
            break;
        case "RefAPUnitPDI":
            width = "1000px"; height = "450px";
            break;
        case "RefAPUnitMediator":
            width = "1000px"; height = "450px";
            break;
        case "InvNoRetur":
            width = "800px"; height = "425px";
            break;
        case "InvNoReturWO":
            width = "960px"; height = "425px";
            break;
        case "InvNoReturUnit":
            width = "880px"; height = "425px";
            break;
        case "WoAtpmRegistration":
            width = "500px"; height = "400px";
            break;
        case "AtpmWarrantyClaim":
            width = "760px"; height = "425px";
            break;
        case "LeasingCompany":
            width = "700px"; height = "400px";
            break;
        case "CustomerMasterKwi":
            width = "700px"; height = "400px";
            break;
        case "DPSPM":
            width = "900px"; height = "400px";
            break;
        case "SupplierLeasing1":
            width = "1090px"; height = "400px";
            break;
        case "Leasing":
            width = "1090px"; height = "400px";
            break;
        case "SOForReturn":
            width = "600px"; height = "400px";
            break;
        case "VehicleChangeModelVariant":
            width = "600px"; height = "400px";
            break;
        case "EmployeeMaster":
            width = "600px"; height = "400px";
            break;
        default:
            width = "500px"; height = "400px";
            break;
    }

    try {
        arrTextBox[0] = textBox1;
        arrTextBox[1] = textBox2;
        arrTextBox[2] = textBox3;
        arrTextBox[3] = textBox4;
        arrTextBox[4] = textBox5;
        arrTextBox[5] = textBox6;
        arrTextBox[6] = textBox7;
        arrTextBox[7] = textBox8;
        arrTextBox[8] = textBox9;
        arrTextBox[9] = textBox10;
        arrTextBox[10] = textBox11;
        if (textBoxArray != null) {
            if (textBoxArray.length > 0) {
                var iloop = 0;

                for (iloop; iloop < textBoxArray.length; iloop++) {
                    var col = parseInt(textBoxArray[iloop + 1]) - 1;
                    if (col > 10) {
                        arrTextBox[col] = textBoxArray[iloop];
                    }
                    iloop = iloop + 1;
                }
            }
        }
    }
    catch (e) {
        return false;
    }


    if (descr == 'Y' || descr == 'y') {
        if (showLookUpDesc(modul, colHide, entityName, filter, sort, title, width, height, arrTextBox, Hidden1, colDesc, ReplaceSeparator, CompanyCode, postback, textBoxArray, descr) == 0) {
            //triggerEvent(arrTextBox, postback);
            return false;
        }
        else {
            triggerEvent(arrTextBox, postback);
            return false;
        }
    }
    else {
        if (showLookUp(modul, colHide, entityName, filter, sort, title, width, height, arrTextBox, ReplaceSeparator, CompanyCode, Hidden1, postback, textBoxArray, colDesc) == 0) {
            //triggerEvent(arrTextBox, postback);
            return false;
        }
        else {
            triggerEvent(arrTextBox, postback);
            return false;
        }
    }
}

//For Disable Parent Window
function parent_disable() {
    if (retval && !retval.closed)
        retval.focus();
}

function focusOnPopup(event){
    var iframeTelerik = document.getElementById("contentTelerik").contentWindow;
    if(iframeTelerik!=null){
        iframeTelerik.goFocusPopup();
    }
}
    function goFocusPopup() {
        window.focus();
        retval.focus();
    }
function showLookUp(modul, colHide, entityName, filter, sort, title, width, height, arrTextBox, ReplaceSeparator, CompanyCode, Hidden1, postback, textBoxArray, colDesc, descr) {

    // declare variable
    var sFeatures, i;

    if (ReplaceSeparator == "True")
        ReplaceSeparator = "1";
    else
        ReplaceSeparator = "0";

    i = 1;

    const y = window.top.outerHeight / 2 + window.top.screenY - (replace(height, "px", "") / 2);
    const x = window.top.outerWidth / 2 + window.top.screenX - (replace(width, "px", "") / 2);
    // set window features
    sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height + ",top=" + y + ",left=" + x;
    // show modal dialog box and get its return value
    if (filter == null) {
        retval = window.open('../Common/PopUp_hf.aspx?Entity=' + entityName + '&Sort=' + sort + '&Title=' + title + '&Modul=' + modul + '&ColHide=' + colHide + '&arrTextBox1=' + arrTextBox[0] + '&arrTextBox2=' + arrTextBox[1] + '&arrTextBox3=' + arrTextBox[2] + '&arrTextBox4=' + arrTextBox[3] + '&arrTextBox5=' + arrTextBox[4] + '&arrTextBox6=' + arrTextBox[5] + '&arrTextBox7=' + arrTextBox[6] + '&arrTextBox8=' + arrTextBox[7] + '&arrTextBox9=' + arrTextBox[8] + '&arrTextBox10=' + arrTextBox[9] + '&arrTextBox11=' + arrTextBox[10] + '&textBoxArray=' + textBoxArray + '&colDesc=' + colDesc + '&descr=' + descr + '&hiddenbox=' + Hidden1 + '&postback=' + postback + '&ReplaceSeparator=' + ReplaceSeparator + '&CompanyCode=' + CompanyCode, window, sFeatures);
        retval.focus();

    }
    else {
        retval = window.open('../Common/PopUp_hf.aspx?Entity=' + entityName + '&Filter=' + filter + '&Sort=' + sort + '&Title=' + title + '&Modul=' + modul + '&ColHide=' + colHide + '&arrTextBox1=' + arrTextBox[0] + '&arrTextBox2=' + arrTextBox[1] + '&arrTextBox3=' + arrTextBox[2] + '&arrTextBox4=' + arrTextBox[3] + '&arrTextBox5=' + arrTextBox[4] + '&arrTextBox6=' + arrTextBox[5] + '&arrTextBox7=' + arrTextBox[6] + '&arrTextBox8=' + arrTextBox[7] + '&arrTextBox9=' + arrTextBox[8] + '&arrTextBox10=' + arrTextBox[9] + '&arrTextBox11=' + arrTextBox[10] + '&textBoxArray=' + textBoxArray + '&colDesc=' + colDesc + '&descr=' + descr + '&hiddenbox=' + Hidden1 + '&postback=' + postback + '&ReplaceSeparator=' + ReplaceSeparator + '&CompanyCode=' + CompanyCode, window, sFeatures);
        retval.focus();
    }



}

//function test(sender, args) {

//    elm = args.get_postBackElement().id;

//    // Add statement at the begin Asynchronous
//    SetControlValue('hdfIsOnAsync', '1');

//    try { closeCalendar(); } catch (e) { }

//    try {
//        //Get scroll position
//        xPos = $get('ctl00_cphMasterPage_pnlFrameContent').scrollLeft;
//        yPos = $get('ctl00_cphMasterPage_pnlFrameContent').scrollTop;

//        if (elm != null) {
//            if (elm.tagName == 'INPUT') {
//                if (elm.id.match('imbNew') != null) {
//                    xPos = 0;
//                    yPos = 0;
//                }
//            }
//        }

//        //Set panel process to block
//        parent.SetPanelProcess('block');
//    }
//    catch (e) {
//        //alert(e);
//    }
//}

//function test2(sender, args) {
//    SetControlValue('hdfIsOnAsync', '0');

//    // Add statement at the end Asynchronous
//    if (ctSender != null) {
//        if (ctSender == elm.id) {
//            forceAjaxPostback(ctTrigger);
//        }
//    }

//    try {
//        showMsg();
//    }
//    catch (e) { }

//    try {
//        initListener();
//    }
//    catch (e) { }

//    try {
//        //Set scroll position
//        $get('ctl00_cphMasterPage_pnlFrameContent').scrollLeft = xPos;
//        $get('ctl00_cphMasterPage_pnlFrameContent').scrollTop = yPos;

//        //Set panel process to none
//        parent.SetPanelProcess('none');
//    }
//    catch (e) {
//        //alert(e);
//    }
//}

//SetValue to SetControlValue => Settext etc
function setValue(val1, temp, arrtb, hiddenbox, colDesc, postback, tba) {
    var i;
    if (temp == null) {
        i = 0;
    }
    else {
        // show return value in controls
        try {
            var iloop = 0;
            for (iloop; iloop < arrtb.length; iloop++) {
                if (arrtb[iloop] != null) {
                    var elm = document.getElementsByName(arrtb[iloop]);
                    if (elm != null) {
                        if (iloop == 0) {
                            SetControlValue(arrtb[iloop], temp[iloop].toUpperCase());
                        }
                        else {
                            SetControlValue(arrtb[iloop], temp[iloop]);
                        }
                    }
                }

            }



        }
        catch (e) {
            // ignore error
            console.log(e)
            i = 0;
            return i;
        }
        finally {
            return i;
        }
    }

}


function setValue3(arrtb) {
    triggerEvent(arrtb, "Y");
    //    return false;

    Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(BeginRequestHandler);
    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
}

function setValue2(val1, temp, arrtb, hiddenbox, colDesc, postback, tba) {

    var oElement12 = document.getElementsByName(hiddenbox);
    if (oElement12 != null) {
        try {
            if (colDesc == 0) {
                SetControlValue(hiddenbox, temp[1]);
            }
            else {
                var colIdx = colDesc - 1;
                SetControlValue(hiddenbox, temp[colIdx]);
            }
        }
        catch (e) {
            console.log(e)
            // ignore error
            i = 0;
            return i;
        }
        finally {
            return i;
        }
    }
}

function showLookUpDesc(modul, colHide, entityName, filter, sort, title, width, height, arrTextBox, Hidden1, colDesc, ReplaceSeparator, CompanyCode, postback, textBoxArray, descr) {

    var i;
    i = 1;
    i = showLookUp(modul, colHide, entityName, filter, sort, title, width, height, arrTextBox, ReplaceSeparator, CompanyCode, Hidden1, colDesc, postback, textBoxArray);

}

function triggerEvent(arrTextBox, postback) {
    var uc = 'txtCalendar';
    var ucn = 'txtNumeric';
    var iloop = 0;
    for (iloop; iloop < arrTextBox.length; iloop++) {
        if (arrTextBox[iloop] != null) {
            var elm = document.getElementsByName(arrTextBox[iloop]);
            if (elm != null) {
                if (elm.length > 0) {
                    switch (elm[0].type) {
                        case 'text':
                            if (Contains(elm[0].name, uc) == false) {
                                var changeEvent = document.createEvent("HTMLEvents");
                                changeEvent.initEvent("blur", true, true);
                                elm[0].dispatchEvent(changeEvent);
                                if (postback == 'Y' || postback == 'y') {
                                    var changeEvent = document.createEvent("HTMLEvents");
                                    changeEvent.initEvent("change", false, true);
                                    elm[0].dispatchEvent(changeEvent);
                                }
                            }
                            if (Contains(elm[0].name, ucn) == true) {
                                var changeEvent = document.createEvent("HTMLEvents");
                                changeEvent.initEvent("change", false, true);
                                elm[0].dispatchEvent(changeEvent);
                            }
                            break;
                        case 'hidden':
                            if (elm[0].readOnly == false) {
                                if (Contains(elm[0].name, uc) == false) {
                                    var changeEvent = document.createEvent("HTMLEvents");
                                    changeEvent.initEvent("blur", true, true);
                                    elm[0].dispatchEvent(changeEvent);
                                    if (postback == 'Y' || postback == 'y') {

                                        var changeEvent = document.createEvent("HTMLEvents");
                                        changeEvent.initEvent("change", false, true);
                                        elm[0].dispatchEvent(changeEvent);

                                    }
                                }
                                if (Contains(elm[0].name, ucn) == true) {
                                    var changeEvent = document.createEvent("HTMLEvents");
                                    changeEvent.initEvent("change", false, true);
                                    elm[0].dispatchEvent(changeEvent);
                                }
                            }
                            break;
                        case 'radio':
                            break;
                        case 'select-one':
                            if (elm[0].disabled == false) {
                                var changeEvent = document.createEvent("HTMLEvents");
                                changeEvent.initEvent("change", false, true);
                                elm[0].dispatchEvent(changeEvent);
                            }
                            break;
                        default:
                            break;
                    }


                    if (iloop > 10) {
                        iloop = iloop + 1;
                    }
                }
            }
        }
    }
}

function call_Event(ctrl, ctrl_event) {
    var elm = document.getElementsByName(ctrl);
    if (elm != null && elm.length > 0) {
        switch (ctrl_event) {
            case 'onchange':
                var changeEvent = document.createEvent("HTMLEvents");
                changeEvent.initEvent("change", true, true);
                elm[0].dispatchEvent(changeEvent);
                break;
            case 'onblur':
                var changeEvent = document.createEvent("HTMLEvents");
                changeEvent.initEvent("blur", true, true);
                elm[0].dispatchEvent(changeEvent);
                break;
            case 'onclick':
                var changeEvent = document.createEvent("HTMLEvents");
                changeEvent.initEvent("click", true, true);
                elm[0].dispatchEvent(changeEvent);
                break;
            default:
                break;
        }
    }
}
//function triggerEvent(arrTextBox, postback) {
//    var uc = 'txtCalendar';
//    var ucn = 'txtNumeric';
//    var iloop = 0;
//    for (iloop; iloop < arrTextBox.length; iloop++) {
//        if (arrTextBox[iloop] != null) {
//            var elm = document.getElementsByName(arrTextBox[iloop]);
//            var event = new CustomEvent('onchange');
//            if (elm != null) {
//                if (elm.length > 0) {
//                    switch (elm[0].type) {
//                        case 'text':
//                            if (Contains(elm[0].name, uc) == false) {
//                                elm[0].onblur
//                                if (postback == 'Y' || postback == 'y') {
//                                    elm[0].event
//                                }
//                            }
//                            if (Contains(elm[0].name, ucn) == true) {
//                                elm[0].event
//                            }
//                            break;
//                        case 'hidden':
//                            if (elm[0].readOnly == false) {
//                                if (Contains(elm[0].name, uc) == false) {
//                                    elm[0].onblur;
//                                    if (postback == 'Y' || postback == 'y') {
//                                        elm[0].event
//                                    }
//                                }
//                                if (Contains(elm[0].name, ucn) == true) {
//                                    elm[0].event
//                                }
//                            }
//                            break;
//                        case 'radio':
//                            break;
//                        case 'select-one':
//                            if (elm[0].disabled == false) {
//                                elm[0].event
//                               
//                            }
//                            break;
//                        default:
//                            break;
//                    }


//                    if (iloop > 10) {
//                        iloop = iloop + 1;
//                    }
//                }
//            }
//        }
//    }
//}

//function call_Event(ctrl, ctrl_event) {
//    var elm = document.getElementsByName(ctrl);
//    if (elm != null && elm.length > 0) {
//        elm[0].dispatchEvent(ctrl_event);
//    }
//}
function getColumnIdx(a, k) {
    for (var i = 0; i < a.length; i = i + 2) {
        if (a[i] == k) {
            return getGridEXFromID(a[i + 1]);
        }
    }
    return null;
}
///////////////////////////////LOOK UP///////////////////////////

//void confirmation
function ConfirmVoid() {

    if (confirm("Are you sure want to void this document?") == true) {
        return true;
    }
    else {
        return false;
    }
}

//delete spaces, tab, line break from string
function leftTrim(s) {
    var iCount = 0;
    var i = 0;
    var sRet = s;

    while ((s.charAt(i) == ' ') | (s.charAt(i) == '\n') | (s.charAt(i) == '\r') | (s.charAt(i) == '\t')) {
        iCount++;
        i++;
    }

    if (iCount > 0)
        sRet = s.substring(iCount, s.length);

    return (sRet);
}

function rightTrim(s) {
    var iCount = 0;
    var i = s.length - 1;
    var sRet = s;

    while ((s.charAt(i) == ' ') | (s.charAt(i) == '\n') | (s.charAt(i) == '\r') | (s.charAt(i) == '\t')) {
        iCount++;
        i--;
    }

    if (iCount > 0)
        sRet = s.substring(0, s.length - iCount);

    return (sRet);

}

function emptyTxt(txt) {
    document.getElementsByName(txt).value = '';
}

function allTrim(s) {
    return (leftTrim(rightTrim(s)));
}

function clearDescription(sTextBoxId, sLabelId) {
    //if(isEmpty(sTextBoxId)){		

    var oLabel = document.getElementsByName(sLabelId);
    oLabel.innerHTML = '';
    //}

    return;
}

// Replaces text with by in string
function replace(string, text, by) {
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;

    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0, txtLength))) return string;
    if (i == -1) return string;

    var newstr = string.substring(0, i) + by;

    if (i + txtLength < strLength)
        newstr += replace(string.substring(i + txtLength, strLength), text, by);

    return newstr;
}


function showUploadFileLookUp(textBox1, textBox2, filetype, doctype) {
    // declare variable 
    var retval, sFeatures, width, height;

    width = "500px";
    height = "200px";
    // set window features
    const y = window.top.outerHeight / 2 + window.top.screenY - (replace(height, "px", "") / 2);
    const x = window.top.outerWidth / 2 + window.top.screenX - (replace(width, "px", "") / 2);
    // set window features
    sFeatures = "help:no; resizable:yes; status:no; edge:raised; unadorned:yes; ," + title + ",menubar=1,resizable=1,width=" + width + ",height=" + height + ",top=" + y + ",left=" + x;


    retval = window.open('../Commons/uploadpopup_hf.aspx?DocType=' + doctype + '&FileType=' + filetype, window, sFeatures);

    var i = 1

    if (retval == null) {
        i = 0;
    }

    // show return value in controls
    try {
        //set value to text box
        var oElement1 = document.getElementsByName(textBox1);
        if (oElement1 != null) {
            var sReturn1 = retval[0];
            oElement1.value = sReturn1;
        }

        var oElement2 = document.getElementsByName(textBox2);
        if (oElement2 != null) {
            var sReturn2 = retval[1];
            oElement2.value = sReturn2;
        }
    }
    catch (e) {
        // ignore error
    }
    finally {
        if (i == 0) {
            return false;
        }
        else {
            return true;
        }
    }

}

function showNewWindow(entityName, prmValue, ctlRetVal, option, axPostback, axSender, axTrigger) {
    // declare variable 
    var retval, sFeatures, width, height, RequestedSource, Title, Namespace, wPercent, hPercent;
    var oRetVal, iRetVal;

    try {
        if (ctlRetVal != '') {
            oRetVal = document.getElementsByName(ctlRetVal);
        }

        if (option == '') {
            option = 0;
        }

        if (axPostback == null) {
            axPostback = 'N';
        }

        switch (entityName) {
            case "MarginView":
                RequestedSource = "../dms-unit/Sales/ViewMargin1.aspx";

                Title = "View Margin";

                //Set width and height percentage from screen size
                wPercent = 10;
                hPercent = 10;
                break;

            case "MarginViewInvoice":
                RequestedSource = "../dms-unit/Sales/ViewMarginInvoice.aspx";

                Title = "View Margin Invoice";

                //Set width and height percentage from screen size
                wPercent = 10;
                hPercent = 10;
                break;

            case "ViewMarginAmend":
                RequestedSource = "../dms-unit/Sales/ViewMarginAmend1.aspx";

                Title = "View Margin";

                //Set width and height percentage from screen size
                wPercent = 10;
                hPercent = 10;
                break;

            case "PaymentView":
                RequestedSource = "../dms-unit/Master/PaymentBasket.aspx";

                Title = "Payment Basket View";

                //Set width and height percentage from screen size
                wPercent = 10;
                hPercent = 10;
                break;

            case "InquiryGenerator":
                RequestedSource = "../Inquiry/InquiryGenerator.aspx";

                Title = "Inquiry Generator";

                //Set width and height percentage from screen size
                wPercent = 10;
                hPercent = 10;
                break;
            case "QueryResult":
                RequestedSource = "../Inquiry/ShowInquiry.aspx";

                Title = "Show Query Result";

                //Set width and height percentage from screen size
                wPercent = 10;
                hPercent = 10;
                break;
            case "UploadSalesPriceList":
                RequestedSource = "~/Master/UploadSalesPriceList.aspx";

                Title = "Upload Sales Price List";

                //Set width and height percentage from screen size
                wPercent = 45;
                hPercent = 40;
                break;
            //			case "ChangePassword":  
            //		        RequestedSource = "~/ControlPanel/ChangePassword.aspx";  
            //    		       		      
            //		        Title = "Change Password";  
            //		          
            //		        //Set width and height percentage from screen size  
            //			    wPercent = 50;  
            //			    hPercent = 50;  
            //			    break;  
            //            case "ListMenuOrder":  
            //		        RequestedSource = "~/ControlPanel/ListMenuOrder.aspx";  
            //    		       		      
            //		        Title = "List Menu Order";  
            //		          
            //		        //Set width and height percentage from screen size  
            //			    wPercent = 50;  
            //			    hPercent = 50;  
            //			    break;  
            default:
                Title = "Untitled";
                wPercent = 50;
                hPercent = 50;
                break;
        }

        if (prmValue != '') {
            RequestedSource = RequestedSource + "?" + prmValue;
        }

        if (RequestedSource != '') {
            RequestedSource = Url.encode(RequestedSource);
        }

        // set width and height
        width = screen.availWidth;
        height = screen.availHeight;
        width = (width - (width * (wPercent / 100)));
        height = (height - (height * (hPercent / 100)));

        // set window features
        switch (entityName) {
            case "ChangePassword":
                sFeatures = "toolbar=no; center:yes; help:no; resizable:yes; status:no; edge:raised; unadorned:yes;,width=" + width + ",height=" + height;
                break;
            case "ListMenuOrder":
                sFeatures = "toolbar=no; center:yes; help:no; resizable:yes; status:no; edge:raised; unadorned:yes;,width=" + width + ",height=" + height;
                break;
            default:
                sFeatures = "toolbar=no; center:yes; help:no; resizable:yes; status:no; edge:raised; unadorned:yes;,width=" + width + ",height=" + height;
                break;
        }

        retval = window.open('../Common/PageNew.aspx?RequestedSource=' + RequestedSource + '&Title=' + Title, "newwin", sFeatures);

        var i;
        if (retval == null) {
            i = 0;
        }
        else {
            i = retval[0];
        }

        if (i == 0) {
            switch (entityName) {
                default:
                    return false;
                    break;
            }
        }
        else {
            switch (entityName) {
                case "InquiryGenerator":
                    if (option == 0) {
                        if (retval[1] != '') {
                            document.getElementById('ctl00_cphMasterPage_hdfTableCollection').value = retval[1];
                        }

                        if (retval[2] != null || retval[2] != '') {
                            document.getElementById('ctl00_cphMasterPage_txtSelect').value = retval[2];
                        }

                        if (retval[3] != null || retval[3] != '') {
                            document.getElementById('ctl00_cphMasterPage_txtFrom').value = retval[3];
                        }
                    }
                    else {
                        if (retval[2] != null || retval[2] != '') {
                            if (oRetVal.value != '') {
                                oRetVal.value += ',';
                            }
                            oRetVal.value += retval[2];
                            alert(retval[2]);
                        }
                    }
                    break;
                default:
                    break;
            }

            if (axPostback == 'Y' || axPostback == 'y') {
                if (axSender != null && axTrigger != null) {
                    initAjaxPostBack(axSender, axTrigger);
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    }
    catch (ex) {
        alert(ex);
        //return false;
    }
}

function Postback2Server(submitCtrl) {
    __doPostBack(submitCtrl, '');
}

function CloseWindows(CloseValue) {
    var temp;
    temp = new Array(1);

    if (CloseValue == 'Ok') {
        temp[0] = 1;
    }
    else if (CloseValue == 'Cancel') {
        temp[0] = 0;
    }

    top.returnValue = temp;
    window.close();
}

function ClosePopUp(CloseValue, textbox1) {
    var temp;
    temp = new Array(2);

    if (CloseValue == 'Ok') {
        temp[0] = 1;
    }
    else if (CloseValue == 'Cancel') {
        temp[0] = 0;
    }

    //set value to text box
    var oElement1 = document.getElementsByName(textbox1);
    if (oElement1 != null) {
        temp[1] = oElement1.value;
    }

    top.returnValue = temp;
    window.close();
}

function TipsOver(control) {
    if (control != null) {
        control.title = control.value;
    }
}


function DownloadFile(strPath) {
    if (strPath != null) {
        window.open('../Commons/downloadpopup.aspx?DownloadURL=' + strPath)
    }
}

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.ltrim = function () {
    return this.replace(/^\s+/, "");
}
String.prototype.rtrim = function () {
    return this.replace(/\s+$/, "");
}

function Implode(arr) {
    var str = arr.join(':');
    return str;
}

function Explode(str) {
    var arr = str.split(':');
    return arr;
}

function CallDateFun(sender, args) {
    var snd = document.getElementsByName(sender.id);
    var val = document.getElementsByName(snd.getAttribute("controltovalidate")).value;

    if (val != null && rightTrim(leftTrim(val)) != '') {
        if (IsValidDate(val)) {
            args.IsValid = true;
            return true;
        }
        else {
            snd.setAttribute('errormessage', 'Invalid Date');
            args.IsValid = false;
            return false;
        }
    }
}

function IsValidDate(DateVal) {
    try {
        //Basic check for format validity
        //Sample Regex in JS = /^\d{2}\/\d{2}\/\d{4}$/ 

        var validformat1 = /^\d{2}\/\d{2}\/\d{4}$/
        var validformat2 = /^\d{2}\s+\w{3}\s+\d{4}$/
        var dt = Date.parse(DateVal);
        if (isNaN(dt)) {
            return false;
        }
        else {
            if (!validformat1.test(DateVal) || !validformat2.test(DateVal)) {
                return false;
            }
            return true;
        }
    }
    catch (e) {
        return false;
    }
}

///GET CONTROL VALUE///
function GetRadioButtonListValue(id) {
    var radio = document.getElementsByName(id);
    for (var ii = 0; ii < radio.length; ii++) {
        if (radio[ii].checked)
            return (radio[ii].value);
    }
}

function GetDropDownListValue(id) {
    var ddl = document.getElementById(replace(id, '$', '_'));
    return ddl.options[ddl.selectedIndex].value;
}

function GetTextBoxValue(id) {
    var txt = document.getElementsByName(id)[0];
    if (id.includes("tooltip")) {
        var txt = document.getElementsByClassName(id);
    } else if (id.includes("$")) {
        if (id.includes("hdf")) {
            var txt = document.getElementById(replace(id, '$', '_'));
        }else{
            var txt = document.getElementsByName(id)[0];
        }
    } else if (id.includes("_")) {
        var txt = document.getElementById(id);
    }
    else {
        var txt = document.getElementsByName(id)[0];
    }
    return txt.value;
}

function GetLabelValue(id) {
    var lbl = document.getElementById(id);
    return lbl.innerHTML;
}

function GetDivValue(id) {
    var div = document.getElementById(id);
    return div.innerHTML;
}

function GetImageValue(id) {
    var img = document.getElementById(id);
    return img.src;
}

function GetButtonValue(id) {
    var btn = document.getElementById(id);
    return btn.value;
}

function GetCheckBoxValue(id) {
    var chk = document.getElementById(replace(id,'$','_'));
    return chk.checked;
}

function GetControlValue(id) {
    var control = document.getElementsByName(id);
    var control2 = null;
    //    console.log(id);
     if (id != null){
    if (id.includes("tooltip")) {
        var control = document.getElementsByClassName(id);
    } else if (id.includes("$")) {
        if (id.includes("hdf")) {
            control2 = document.getElementById(replace(id,'$','_'));
        }else{
            var control = document.getElementsByName(id);
        }
    } else if (id.includes("_")) {
         control2 = document.getElementById(id);
    }
    else {
        var control = document.getElementsByName(id);
    }}
    if (control != null && control.length > 0 && control2==null) {
        if (control[0].type != null) {
            switch (control[0].type) {
                case "text":
                    return GetTextBoxValue(id);
                    break;
                case "textarea":
                    return GetTextBoxValue(id);
                    break;
                case "radio":
                    return GetRadioButtonListValue(id);
                    break;
                case "select-one":
                    return GetDropDownListValue(id);
                    break;
                case "hidden":
                    return GetTextBoxValue(id);
                    break;
                case "submit":
                    return GetButtonValue(id);
                    break;
                case "checkbox":
                    return GetCheckBoxValue(id);
                    break;
                default:
                    return ''
                    break;
            }
        }
        else {
            switch (control[0].tagName) {
                case "SPAN":
                    return GetLabelValue(id);
                    break;
                case "DIV":
                    return GetDivValue(id);
                    break;
                case "IMG":
                    return GetImageValue(id);
                    break;
                default:
                    return ''
                    break;
            }
        }
    }
       else if (control2 != null) {
       if (control2.type != null) {
           switch (control2.type) {
                   case "text":
                       return GetTextBoxValue(id);
                       break;
                   case "textarea":
                       return GetTextBoxValue(id);
                       break;
                   case "radio":
                       return GetRadioButtonListValue(id);
                       break;
                   case "select-one":
                       return GetDropDownListValue(id);
                       break;
                   case "hidden":
                       return GetTextBoxValue(id);
                       break;
                   case "submit":
                       return GetButtonValue(id);
                       break;
                   case "checkbox":
                       return GetCheckBoxValue(id);
                       break;
                   default:
                       return ''
                       break;
               }
           }
           else {
               switch (control2.tagName) {
                   case "SPAN":
                       return GetLabelValue(id);
                       break;
                   case "DIV":
                       return GetDivValue(id);
                       break;
                   case "IMG":
                       return GetImageValue(id);
                       break;
                   default:
                       return ''
                       break;
               }
           }

       }
    //    else if (control3 != null) {
    //        if (control3.type != null) {
    //            switch (control3.type) {
    //                case "text":
    //                    return GetTextBoxValue(id);
    //                    break;
    //                case "textarea":
    //                    return GetTextBoxValue(id);
    //                    break;
    //                case "radio":
    //                    return GetRadioButtonListValue(id);
    //                    break;
    //                case "select-one":
    //                    return GetDropDownListValue(id);
    //                    break;
    //                case "hidden":
    //                    return GetTextBoxValue(id);
    //                    break;
    //                case "submit":
    //                    return GetButtonValue(id);
    //                    break;
    //                case "checkbox":
    //                    return GetCheckBoxValue(id);
    //                    break;
    //                default:
    //                    return ''
    //                    break;
    //            }
    //        }
    //        else {
    //            switch (control3.tagName) {
    //                case "SPAN":
    //                    return GetLabelValue(id);
    //                    break;
    //                case "DIV":
    //                    return GetDivValue(id);
    //                    break;
    //                case "IMG":
    //                    return GetImageValue(id);
    //                    break;
    //                default:
    //                    return ''
    //                    break;
    //            }
    //        }

    //    }
    else { return ''; }

}
///GET CONTROL VALUE///

///SET CONTROL VALUE///
function SetRadioButtonListValue(id, val) {
    var radio = document.getElementsByName(id);

    for (var ii = 0; ii < radio.length; ii++) {
        if (radio[ii].value == val) {
            radio[ii].checked = true;
            break;
        }
    }
}

function SetDropDownListValue(id, val) {
    var ddl = document.getElementsByName(id);
    if (id.includes("$")) {
        var ddl = document.getElementById(replace(id,'$','_'));
    } else if (id.includes("_")) {
        var ddl = document.getElementById(id);
    }else {
        var ddl = document.getElementsByName(id);
    }

    for (var ii = 0; ii < ddl.options.length; ii++) {
        if (ddl.options[ii].value == val) {
            ddl.selectedIndex = ii;

            if (Right(id, 4) == '_ddl') {
                var hdf = id.substring(0, (id.length - 4)) + '_hdfCode';
                document.getElementsByName(hdf).value = ddl.options[ii].value;

                var desc = id.substring(0, (id.length - 4)) + '_txtDesc';
                document.getElementsByName(desc).value = ddl.options[ii].text;
            }

            break;
        }
    }
}

function SetTextBoxValue(id, val) {
    var txt = document.getElementsByName(id)[0];
    if (id.includes("tooltip")) {
        var txt = document.getElementsByClassName(id);

    } else if (id.includes("$")) {
        if (id.includes("hdf")) {
            var txt = document.getElementById(replace(id,'$','_'));
        }else{
            var txt = document.getElementsByName(id)[0];
        }
    } else if (id.includes("_")) {
        var txt = document.getElementById(id);
    }
    else {
        var txt = document.getElementsByName(id)[0];
    }
    if (IsValidDate(val) == false) {
        txt.value = val;
    }
    else {
        var dtFormat = "dd/MM/yyyy";
        txt.value = getDateString(val, dtFormat);
    }


}

function SetLabelValue(id, val) {
    var lbl = document.getElementById(replace(id,'$','_'));
    lbl.innerHTML = val;
}

function SetDivValue(id, val) {

    var div = document.getElementById(replace(id,'$','_'));
    div.innerHTML = val;
}

function SetImageValue(id, val) {
    var img = document.getElementById(replace(id,'$','_'));
    img.src = val.replace('~', '..');
}

function SetButtonValue(id, val) {
    var btn = document.getElementsByName(replace(id,'$','_'));
    btn.value = val;
}

function SetCheckBoxValue(id, val) {
    var chk = document.getElementById(replace(id,'$','_'));
    chk.checked = val;
}

function SetControlValue(id, val) {
//        console.log(id);
    var control = null;
    var control2 = null;
    if (id != null){
        control = document.getElementsByName(id);
        if (id.includes("tooltip")) {
            control = document.getElementsByClassName(id);
        } else if (id.includes("$")) {
            if (id.includes("hdf")||id.includes("lblIconType")) {
                control2 = document.getElementById(replace(id,'$','_'));
            }else{ 
                control = document.getElementsByName(id);
            }
        } else if (id.includes("_")) {
            control2 = document.getElementById(replace(id,'$','_'));
        }
        else {
            control = null;
        }
    }
    //    console.log(control);
    if (control != null && control.length > 0 && control2 ==null) {
        if (control[0].type != null) {
            switch (control[0].type) {
                case "text":
                    SetTextBoxValue(id, val);
                    break;
                case "textarea":
                    SetTextBoxValue(id, val);
                    break;
                case "radio":
                    SetRadioButtonListValue(id, val);
                    break;
                case "select-one":
                    SetDropDownListValue(id, val);
                    break;
                case "hidden":
                    SetTextBoxValue(id, val);
                    break;
                case "submit":
                    SetButtonValue(id, val);
                    break;
                case "checkbox":
                    SetCheckBoxValue(id, val);
                    break;
            }
        }
        else {
            switch (control[0].tagName) {
                case "SPAN":
                    SetLabelValue(id, val);
                    break;
                case "DIV":
                    SetDivValue(id, val);
                    break;
                case "IMG":
                    SetImageValue(id, val);
                    break;
            }
        }

    }
    else if (control2 != null) {
        if (control2.type != null) {
            switch (control2.type) {
                case "text":
                    SetTextBoxValue(id, val);
                    break;
                case "textarea":
                    SetTextBoxValue(id, val);
                    break;
                case "radio":
                    SetRadioButtonListValue(id, val);
                    break;
                case "select-one":
                    SetDropDownListValue(id, val);
                    break;
                case "hidden":
                    SetTextBoxValue(id, val);
                    break;
                case "submit":
                    SetButtonValue(id, val);
                    break;
                case "checkbox":
                    SetCheckBoxValue(id, val);
                    break;
            }
        }
        else {
            switch (control2.tagName) {
                case "SPAN":
                    SetLabelValue(id, val);
                    break;
                case "DIV":
                    SetDivValue(id, val);
                    break;
                case "IMG":
                    SetImageValue(id, val);
                    break;
            }
        }

    }

}
///SET CONTROL VALUE///

///REMEMBER COLLAPSIBLE///
var CpeArrays = [];

function RememberCollaps(cpe) {
    //    var arrFound = false;

    //    for (var i = 0; i < CpeArrays.length; i++) {
    //        if (CpeArrays[i] == cpe) {
    //            arrFound = true;
    //        }
    //    }

    //    if (arrFound == false) {
    //        //Nothing Cookie will result empty string for firts index
    //        if (getCookie(CpeArrays[0]) == '') {
    //            CpeArrays[0] = cpe;
    //        }
    //        else {
    //            CpeArrays[CpeArrays.length] = cpe;
    //        }
    //    }

    //    setCookie("CpeArr", CpeArrays, 1);

    //    var UCcpe = $find(cpe);

    //    if (!UCcpe) return;

    //    if (UCcpe.get_Collapsed()) {
    //        setCookie(cpe, false, 1);
    //    }
    //    else {
    //        setCookie(cpe, true, 1);
    //    }
}

function RestoreCollaps() {
    //    CpeArrays = getCookie("CpeArr").split(",");

    //    for(var i=0;i<CpeArrays.length;i++)
    //    {
    //        var UCcpe= $find(CpeArrays[i]);

    //        if(!UCcpe) return;
    //        
    //        if(getCookie(CpeArrays[i])!=null) 
    //        {
    //            if(getCookie(CpeArrays[i])=="true") 
    //            {
    //                UCcpe.set_Collapsed(true);
    //            }
    //            else
    //            {
    //                UCcpe.set_Collapsed(false);
    //            }
    //        }               
    //    }
}
///REMEMBER COLLAPSIBLE///

function txtExtender(pnlId, oItem, retId) {
    SwapDisplay(pnlId);
    var oPanel = document.getElementsByName(pnlId)[0];
    if (oPanel.style.display == "none") {
        var txt = document.getElementsByName(retId);
        txt.value = oItem.children(0).innerHTML;
    }
}

function getDateFormat(ctl, dtformat) {
    var txt = document.getElementsByName(ctl);

    if (txt.value != '') {
        var arrDate = txt.value.split("/");
        var y, m, d;
        y = Math.abs(arrDate[2]);
        m = Math.abs(arrDate[1]) - 1;
        d = Math.abs(arrDate[0]);

        var dt = new Date();
        dt.setFullYear(y, m, d);

        if (dtformat != '') {
            return dt.format(dtformat);
        }
        else {
            return dt.format("dd MMM yyyy");
        }
    }
    else {
        return '';
    }
}

function getDateString(val, dtformat) {
    if (val != '') {
        var dt = new Date(val);

        if (dtformat != '') {
            return dt.format(dtformat);
        }
        else {
            return dt.format("dd/MM/yyyy");
        }
    }
    else {
        return '';
    }
}

function Right(str, num) {
    return str.substring(str.length - num);  // pull out right num
}

function Contain(str1, str2) {
    if (Right(str1, str2.length) == str2) {
        return true;
    }
    else {
        return false;
    }
}

function Contains(str1, str2) {
    var IsFound = false;
    var arrTemp = str2.split(",");
    for (var i = 0; i < arrTemp.length; i++) {
        if (Contain(str1, arrTemp[i]) == true) {
            IsFound = true;
            break;
        }
    }

    return IsFound;
}

function OnNumericFocused(ctl) {
    //ctl.style.backgroundColor='#FFFFCC';
    //ctl.select();
}

function OnNumericBlured(ctl) {
    //ctl.style.backgroundColor='';
    //    if(ctl.value == '')
    //    {
    //        ctl.value = '0';
    //    }
}

function doEffect(peffect, psender) {
    switch (peffect) {
        case 'light':
            psender.style.filter = "Alpha(Opacity=90)";
            break;
        case 'normal':
            psender.style.filter = "Alpha(Opacity=100)";
            break;
        default:
            break;
    }
}

function RowSizeChange(obj) {
    if (obj.value == '') {
        obj.value = 1;
    }
    setCookie('rowSizeChange', obj.value, 5);
}

function f_clientWidth() {
    return f_filterResults(
        window.innerWidth ? window.innerWidth : 0,
        document.documentElement ? document.documentElement.clientWidth : 0,
        document.body ? document.body.clientWidth : 0
    );
}
function f_clientHeight() {
    return f_filterResults(
        window.innerHeight ? window.innerHeight : 0,
        document.documentElement ? document.documentElement.clientHeight : 0,
        document.body ? document.body.clientHeight : 0
    );
}
function f_scrollLeft() {
    return f_filterResults(
        window.pageXOffset ? window.pageXOffset : 0,
        document.documentElement ? document.documentElement.scrollLeft : 0,
        document.body ? document.body.scrollLeft : 0
    );
}
function f_scrollTop() {
    return f_filterResults(
        window.pageYOffset ? window.pageYOffset : 0,
        document.documentElement ? document.documentElement.scrollTop : 0,
        document.body ? document.body.scrollTop : 0
    );
}
function f_filterResults(n_win, n_docel, n_body) {
    var n_result = n_win ? n_win : 0;
    if (n_docel && (!n_result || (n_result > n_docel)))
        n_result = n_docel;
    return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
}

function showDisplay(pnlId) {
    //    console.log(pnlId);
    var oPanel = document.getElementById(replace(pnlId, '$', '_'));
    //    console.log(oPanel);
    if (oPanel != null) {
        document.getElementById(replace(pnlId, '$', '_')).style.display = "";
    }
}

function hideDisplay(pnlId) {
    var oPanel = document.getElementById(replace(pnlId, '$', '_'));
    if (oPanel != null) {
        document.getElementById(replace(pnlId, '$', '_')).style.display = "none";
    }
}

function setSize(pnlId, msg) {
    var pu = document.getElementById(replace(pnlId, '$', '_'));
    //    console.log(pu.offsetWidth + '==test==' + pu.offsetHeight + '==test==' + msg.length);
    var puW = pu.offsetWidth;
    var puH = pu.offsetHeight;
    var msgL = msg.length;

    if (msgL >= 0 && msgL < 100) {
        pu.style.width = '350px';
    }
    else if (msgL >= 100 && msgL < 500) {
        pu.style.width = '500px';
    }
    else {
        pu.style.width = '750px';
    }
}

function setPos(pnlId) {
    var pu = $get(pnlId);
    var puW = pu.offsetWidth;
    var puH = pu.offsetHeight;
    var scT = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
    var scL = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
    var clW = (document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.clientWidth;
    var clH = (document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.clientHeight;
    var puX = parseInt((clW / 2) - (puW / 2));
    var puY = parseInt((clH / 2) - (puH / 2));

    Sys.UI.DomElement.setLocation(pu, puX, puY);
}

function showMessage(pnlMsg, pnlBlock, lbl, img, ltl, lblH, imgH, ltlH, btnH, dlgT, lblT, btnC, btnO, clsP, hdfC, hdfB) {

    var title, iconUrl, msg, dtype, btype;
    title = GetControlValue(lblH);
    iconUrl = GetControlValue(imgH);
    msg = GetControlValue(ltlH);
    dtype = GetControlValue(dlgT);
    btype = GetControlValue(btnH);
    pnlC = GetControlValue(hdfC);
    pnlB = GetControlValue(hdfB);
    if (msg != '') {
        SetLabelValue(lbl, title);
        SetImageValue(img, iconUrl);
        SetDivValue(ltl, msg);
        SetControlValue(clsP, '1');
        switch (dtype) {
            case '0':
                SetControlValue(lblT, 'Information - ');
                break;
            case '1':
                SetControlValue(lblT, 'Error - ');
                break;
            case '2':
                SetControlValue(lblT, 'Warning - ');
                break;
            case '3':
                SetControlValue(lblT, 'Question - ');
                break;
            case '4':
                SetControlValue(lblT, 'Restrict - ');
                break;
        }
        if (btype == '0') {
            hideDisplay(btnC);
            SetControlValue(btnO, 'OK');
        }
        else {
            showDisplay(btnC);
            SetControlValue(btnO, 'Yes');
            SetControlValue(btnC, 'No');
        }

        setSize(pnlMsg, msg);
        showDisplay(pnlMsg);
        showDisplay(pnlBlock);
        setPos(pnlMsg);
        try { closeCalendar(); } catch (e) { }
    }
}

function hideMessage(pnlMsg, pnlBlock, rslt, hdfC, hdfB, supO, supC, clsP, lnbO, lnbC, hdfM, hdfClMsg) {
    var supOK, supCancel, cPopup, pnlC, pnlB, closeMsg;
    supOK = GetControlValue(supO);
    supCancel = GetControlValue(supC);
    cPopup = GetControlValue(clsP);
    pnlC = GetControlValue(hdfC);
    pnlB = GetControlValue(hdfB);
    closeMsg = GetControlValue(hdfClMsg);
    SetControlValue(hdfM, '');
    SetControlValue(supO, 'True');
    SetControlValue(supC, 'True');
    SetControlValue(clsP, '0');
    if ((rslt == '0' && supOK != 'True') || (rslt == '1' && supCancel != 'True')) {
        if (IsOnAsync() == false) {
            if (rslt == '0' || rslt == '') {
                __doPostBack(lnbO, '');
            }
            else {
                __doPostBack(lnbC, '');
            }
            setTimeout(function () { hideMessage(pnlMsg, pnlBlock, rslt, hdfC, hdfB, supO, supC, clsP, lnbO, lnbC, hdfM, hdfClMsg) }, 100);
        }
    }
    else {
        if (IsOnAsync() == true) {
            setTimeout(function () { hideMessage(pnlMsg, pnlBlock, rslt, hdfC, hdfB, supO, supC, clsP, lnbO, lnbC, hdfM, hdfClMsg) }, 100);
        }
        else {
            if (closeMsg == null || closeMsg == '0' || closeMsg == '') {
                hideDisplay(pnlMsg);
                hideDisplay(pnlBlock);
            }
            try { closeCalendar(); } catch (e) { }

            if (pnlC != '' && pnlB != '') {
                if (cPopup == '0' || cPopup == '') {
                    showDisplay(pnlC);
                    showDisplay(pnlB);
                    setPos(pnlC);
                }
                else {
                    hideDisplay(pnlC);
                    hideDisplay(pnlB);
                    SetControlValue(clsP, '0');
                    SetControlValue(hdfClMsg, '0');
                }
            }
            else {
                SetControlValue(clsP, '0');
                SetControlValue(hdfClMsg, '0');
            }
        }
    }
}

function showPopup(pnlC, pnlB, lnbP, hdfM, vlgH, hdfC, hdfB, clsP) {
    if (lnbP != null && lnbP != '') {
        if (IsOnAsync() == false) {
            var v = true;
            Page_IsValid = true;

            if (vlgH != '') {
                v = Page_ClientValidate(vlgH);
                Page_IsValid = v;
            }

            if (v == true) {
                __doPostBack(lnbP, '');
                setTimeout(function () { showPopup(pnlC, pnlB, '', hdfM, vlgH, hdfC, hdfB, clsP) }, 100);
            }
        }
    }
    else {
        if (IsOnAsync() == true) {
            setTimeout(function () { showPopup(pnlC, pnlB, '', hdfM, vlgH, hdfC, hdfB, clsP) }, 100);
        }
        else {
            SetControlValue(hdfC, pnlC);
            SetControlValue(hdfB, pnlB);
            try { closeCalendar(); } catch (e) { }


            var cPopup = GetControlValue(clsP);
            var msg = GetControlValue(hdfM);
            if (msg != null && msg != '') {
                hideDisplay(pnlC);
                hideDisplay(pnlB);
            }
            else {
                if (cPopup == '0' || cPopup == '') {
                    try {
                        if (Page_IsValid != null) {
                            if (Page_IsValid == false) {
                                hideDisplay(pnlC);
                                hideDisplay(pnlB);
                            }
                            else {
                                showDisplay(pnlC);
                                showDisplay(pnlB);
                                setPos(pnlC);
                            }
                        }
                        else {
                            showDisplay(pnlC);
                            showDisplay(pnlB);
                            setPos(pnlC);
                        }
                    }
                    catch (e) {
                        showDisplay(pnlC);
                        showDisplay(pnlB);
                        setPos(pnlC);
                    }
                }
                else {
                    hideDisplay(pnlC);
                    hideDisplay(pnlB);
                }
            }
        }
    }
}

function hidePopup(pnlC, pnlB, lnbP, pnlM, vlgD, hdfC, hdfB, clsP, close) {
    if (lnbP != null && lnbP != '') {
        if (IsOnAsync() == false) {
            var v = true;
            Page_IsValid = true;
            if (vlgD != '') {
                v = Page_ClientValidate(vlgD);
                Page_IsValid = v;
            }

            if (v == true) {
                close = false;
                __doPostBack(lnbP, '');
                hidePopup(pnlC, pnlB, '', pnlM, vlgD, hdfC, hdfB, clsP, close) ;
            }
        }
    }
    else {
        if (IsOnAsync() == true) {
            setTimeout(function () { hidePopup(pnlC, pnlB, '', pnlM, vlgD, hdfC, hdfB, clsP, close) }, 100);
        }
        else {
            if (close == null) { close = true; }
            SetControlValue(clsP, '0');
            SetControlValue(hdfC, pnlC);
            SetControlValue(hdfB, pnlB);
            try { closeCalendar(); } catch (e) { }

            var cPopup = GetControlValue(clsP);
            var msg = GetControlValue(pnlM);
            if (msg != null && msg != '') {
                showDisplay(pnlC);
                showDisplay(pnlB);
                setPos(pnlC);
            }
            else {
                if (close != true) {
                    try {
                        if (Page_IsValid != null) {
                            if (Page_IsValid == false) {
                                showDisplay(pnlC);
                                showDisplay(pnlB);
                                setPos(pnlC);
                            }
                            else {
                                hideDisplay(pnlC);
                                hideDisplay(pnlB);
                            }
                        }
                        else {
                            hideDisplay(pnlC);
                            hideDisplay(pnlB);
                        }
                    }
                    catch (e) {
                        hideDisplay(pnlC);
                        hideDisplay(pnlB);
                    }
                }
                else {
                    hideDisplay(pnlC);
                    hideDisplay(pnlB);
                }
            }
        }
    }
}

//function maskingDate(){
//       
//}

function setLookupFilter(hdfID, filter) {
    var hdf = $get(hdfID);
    if (hdf != null) { hdf.value = filter; }
}

function Asc(str) {
    return str.charCodeAt(0);
}

function Chr(AsciiNum) {
    return String.fromCharCode(AsciiNum)
}

function UrlEncrypt(val) {
    var newStr = '';
    var i = 0;

    for (i = 0; i < val.length; i++) {
        newStr += Chr(((Asc(val.substr(i, 1)) + i) * 2));
    }

    return newStr;
}

function UrlDecrypt(val) {
    var newStr = '';
    var i = 0;

    for (i = 0; i < val.length; i++) {
        newStr += Chr(((Asc(val.substr(i, 1)) / 2) - i));
    }

    return newStr;
}

////Hide Status Browser//
//function hidestatus()
//{
//    window.status='';
//    return true;
//}

//document.onmouseover=hidestatus;
//document.onmouseout=hidestatus;
//document.onclick=hidestatus;
////Hide Status Browser// 