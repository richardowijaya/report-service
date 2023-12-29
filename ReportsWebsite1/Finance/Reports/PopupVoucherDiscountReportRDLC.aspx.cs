using Microsoft.Reporting.WebForms;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class PopupVoucherDiscountReportRDLC : System.Web.UI.Page
{
    private class ValidateResult
    {
        public bool IsValid { get; set; }
        public string ErrMessage { get; set; }
        public string ErrTitle { get; set; }

        public ValidateResult()
        {
            IsValid = false;
            ErrMessage = "";
            ErrTitle = "";
        }

        public void Incomplete()
        {
            IsValid = false;
            ErrMessage = "Please complete all mandatory field before printing report";
            ErrTitle = "Incomplete Input";
        }

        public void CustomErr(string title, string msg)
        {
            IsValid = false;
            ErrMessage = msg;
            ErrTitle = title;
        }

        public void Valid()
        {
            IsValid = true;
            ErrMessage = "Data Validation";
            ErrTitle = "Data is validated";
        }
    }

    private string strConnection = ConfigurationManager.ConnectionStrings["ConnectionStringsReport"].ConnectionString.ToString();

    protected void Page_Load(object sender, EventArgs e)
    {
        txtCompany.Text = "130005";//Session["CompanyCode"].ToString();
        txtCompany.Enabled = false;

        if (!IsPostBack)
        {
            for (int i = 1; i <= 12; i++)
            {

                ddlPeriodMonth.Items.Add(new ListItem((i).ToString(), (i).ToString()));
            }

            for (int i = 0; i <= 10; i++)
            {
                ddlPeriodYear.Items.Add(new ListItem((DateTime.Now.Year - i).ToString(), (DateTime.Now.Year - i).ToString()));
            }

            ddlPeriodMonth.SelectedValue = ("00" + DateTime.Now.Month.ToString()).Substring(("00" + DateTime.Now.Month.ToString()).Length - 2, 2);
            ddlPeriodYear.Text = DateTime.Now.Year.ToString();
        }
    }

    protected void tlbReport_PrintClick(object sender, EventArgs e)
    {
        ShowPrintPage();
    }

    protected void btnSaveFile_Click(object sender, EventArgs e)
    {
        string ExportEntity = "SparepartSalesReportByCustomer";
        string ExportTitle = "Sparepart Sales Report By Customer";
        string ExportType = "xls";
        string ExportFilter = "";
        string ExportSort = "";

        ExportTitle = "Work Order Invoice Register List( " + ddlPeriodMonth.SelectedValue + " To " + ddlPeriodYear.SelectedValue + ")";
        string strCompanyCode = string.Empty;
        if (txtCompany.Text == string.Empty)
        {
            strCompanyCode = "0";
        }
        else
        {
            strCompanyCode = txtCompany.Text;
        }

        try
        {
            ExportFilter = "@Company_Code = '" + strCompanyCode + "',@Period_Month = '" + ddlPeriodMonth.SelectedValue + "',@Period_Year = '" + ddlPeriodYear.SelectedValue + "'";
            ScriptManager.RegisterStartupScript(Page, Page.GetType(), "OpenDownload", "OpenDownload('" + ExportEntity + "','" + ExportType + "','" + ExportTitle + "','" + ExportFilter + "','" + ExportSort + "')", true);
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
            //msgBox.Show("Download file failed", ex.Message, UserControls_MessageBox.DialogType.ErrorMessage);            
        }
    }

    private void ShowPrintPage()
    {
        string Entity = null;
        if (rblDataSourceType.SelectedValue == "SP")
        {
            Entity = "PopupVoucherDiscount";
        }
        else
        {
            Entity = "PopupVoucherDiscountAPI";
        }
        string strQueryString = string.Format("&CompanyCode={0}&PeriodMonth={1}&PeriodYear={2}",
                                   Server.UrlEncode(txtCompany.Text), Server.UrlEncode(ddlPeriodMonth.SelectedValue), Server.UrlEncode(ddlPeriodYear.SelectedValue));

        string strScript = "showPreview_rdlc('" + Entity + "', '" + strQueryString + "', 'Pop Up Voucher Discount Report')";
        ScriptManager.RegisterStartupScript(this, GetType(), "Print", strScript, true);
    }
}