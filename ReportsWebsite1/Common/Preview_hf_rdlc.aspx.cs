//------------------------------------------------------------------
// <copyright company="Microsoft">
//     Copyright (c) Microsoft.  All rights reserved.
// </copyright>
//------------------------------------------------------------------
using Microsoft.Reporting.WebForms;
//using Microsoft.ReportingServices.ReportProcessing.ReportObjectModel;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Xml;
using Newtonsoft.Json;
using System.Net;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Threading.Tasks;
using System.Web.UI.WebControls;
using Microsoft.ReportingServices.ReportProcessing.ReportObjectModel;
using System.Diagnostics;

public partial class _Default : System.Web.UI.Page
{
    protected SqlConnection conn;
    protected SqlTransaction trns;
    protected System.Data.DataSet ReportData = new System.Data.DataSet();
    protected ReportParameter[] report_params = new ReportParameter[0];
    protected ReportParameter[] additional_report_params = new ReportParameter[0];
    private string GetAPIResponse;
    private bool InitConnection()
    {
        string strConnection = ConfigurationManager.ConnectionStrings["ConnectionStringsReport"].ConnectionString.ToString();
        bool bolInitialized = false;
        if (this.conn == null)
        {
            this.conn = new SqlConnection(strConnection);
            this.conn.Open();
            bolInitialized = true;
        }
        return bolInitialized;
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            BindReport();
        }
    }
    private void BindReport()
    {

        ReportViewer.Reset();
        ReportViewer.LocalReport.DataSources.Clear();
        ReportViewer.LocalReport.SubreportProcessing += ReportViewer_SubreportProcessing;
        switch (Request["Entity"])
        {
            case "PopupVoucherDiscount":
                //string strPeriodYear = Request["PeriodYear"];
                //string strPeriodMonth = Request["PeriodMonth"];
                //string strCompanyCode = Request["CompanyCode"];
                report_params = new ReportParameter[]
                    {
                          //new ReportParameter("@CompanyCode", Request["CompanyCode"]),
                          //new ReportParameter("@PeriodYear",Request["PeriodYear"]),
                          //new ReportParameter("@PeriodMonth",Request["PeriodMonth"])
                    };
                ReportViewer.LocalReport.ReportPath = Server.MapPath("~/Reporting/Finance/ARAging/rdlc/rptARAgingDetail_Test.rdlc");
                ReportData.Tables.Add(GetReportDataSource("SELECT * FROM aragingdetail3", report_params, "aragingdetail3"));
                ReportViewer.LocalReport.DataSources.Add(new ReportDataSource("dsARAgingDetail2", ReportData.Tables["aragingdetail3"]));
                break;
            case "PopupVoucherDiscountAPI":
                report_params = new ReportParameter[]
                    {
                          //new ReportParameter("col1width", "5cm"),
                          //new ReportParameter("col8", "True"),
                          //new ReportParameter("col9", "True")
                    };
                ReportViewer.LocalReport.ReportPath = Server.MapPath("~/Reporting/Finance/ARAgingAPI/rdlc/rptARAgingDetail_Test2.rdlc");
                ReportData.Tables.Add(GetReportDataSourceFromAPI("http://10.1.32.26:7000/get_data_report", "demo", "demo", report_params, "dsARAgingDetailApi"));
                //Debug.Print(ReportData.Tables["dsARAgingDetailApi"].Rows[0].ItemArray[0].ToString());
                ReportViewer.LocalReport.DataSources.Add(new ReportDataSource("dsARAgingDetailApi", ReportData.Tables["dsARAgingDetailApi"]));
                ReportViewer.LocalReport.SetParameters(report_params);
                break;
            default:
                {
                    report_params = new ReportParameter[]
                    {
                          new ReportParameter("@CompanyCode", Request["CompanyCode"])
                    };
                    ReportViewer.LocalReport.ReportPath = Server.MapPath("~/Reporting/Finance/Reports/rdlc/rptTemplateHeader.rdlc");
                    ReportData.Tables.Add(GetReportDataSource("uspre_rptTemplateHeader", report_params, "uspre_rptTemplateHeader"));
                    ReportViewer.LocalReport.DataSources.Add(new ReportDataSource("dsTemplateHeader_uspre_rptTemplateHeader", ReportData.Tables["uspre_rptTemplateHeader"]));
                    break;
                }
        }
        // Get the list of parameters defined in the RDLC report
        ReportParameterInfoCollection reportParameters = ReportViewer.LocalReport.GetParameters();

        // Display information about the report parameters
        foreach (ReportParameterInfo parameter in reportParameters)
        {
            ReportViewer.LocalReport.SetParameters(new ReportParameter(parameter.Name, parameter.Values[0]));
        }
        ReportViewer.LocalReport.Refresh();
    }
    private void ReportViewer_Drillthrough(object sender, DrillthroughEventArgs e)
    {
        LocalReport localreport = e.Report as LocalReport;
        localreport.SubreportProcessing += ReportViewer_SubreportProcessing;
        ReportParameterInfoCollection DrillThroughValues = e.Report.GetParameters();
        try
        {
            int i = 0;
            ReportParameter[] ReportParam = new ReportParameter[DrillThroughValues.Count];
            foreach (ReportParameterInfo ParamInfo in DrillThroughValues)
            {
                if (ParamInfo.Values.Count > 0)
                {
                    ReportParam[i] = new ReportParameter(ParamInfo.Name.Trim(), ParamInfo.Values[0]);
                    i++;
                }
            }

            switch (Request["Entity"])
            {
                ////////Begin Sample Of Usage\\\\\\\\\\\\
                case "GrossProfitDashboard":
                    {
                        //Throw Addittional Parameter if Needed Or Not Available On Parent Report
                        //Use AdditionalReportParam variable                        
                        additional_report_params = new ReportParameter[]
                        {
                                new ReportParameter("@Option", "1"),
                        };

                        //Send AdditionalReportParam On GetReportDataSource                        
                        ReportData.Tables.Add(GetReportDataSource("usp_GrossProfitAFS_Select", report_params, "Tbl_AfsDashboard_1", additional_report_params));

                        if (e.ReportPath == "rptAfsDashboard")
                        {
                            ////Fill dataset for Level1.rdlc.
                            ReportData.Tables.Add(GetReportDataSource("usp_GrossProfitAFS_Select", ReportParam, "Tbl_AfsDashboard_1"));
                            localreport.DataSources.Clear();
                            localreport.DataSources.Add(new ReportDataSource("dsGrossProfitDashboard_Tbl_AfsDashboard_1", ReportData.Tables["Tbl_AfsDashboard_1"]));
                        }

                        break;
                    }
                    //\\\\\End Sample Of Usage///////////
            }
            localreport.Refresh();
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    private void ReportViewer_SubreportProcessing(object sender, SubreportProcessingEventArgs e)
    {
        ReportParameterInfoCollection DrillThroughValues = e.Parameters;
        try
        {
            int i = 0;
            ReportParameter[] ReportParam = new ReportParameter[DrillThroughValues.Count];
            foreach (ReportParameterInfo ParamInfo in DrillThroughValues)
            {
                if (ParamInfo.Values.Count > 0)
                {
                    ReportParam[i] = new ReportParameter(ParamInfo.Name.Trim(), ParamInfo.Values[0]);
                    i++;
                }
            }

            // Handle subreport data processing and other logic based on cases
            // ...
            switch (e.ReportPath)
            {
                case "rptTemplateHeaderRdlc":
                    {
                        report_params = new ReportParameter[]
                        {
                            new ReportParameter("@CompanyCode", Request["CompanyCode"]),
                        };

                        //ReportViewer.LocalReport.ReportPath = Server.MapPath("~/Reports/rdlc/rptTemplateHeaderRdlc.rdlc");
                        ReportData.Tables.Add(GetReportDataSource("uspre_rptTemplateHeader", report_params, "uspre_rptTemplateHeader"));
                        e.DataSources.Add(new ReportDataSource("dsTemplateHeader_uspre_rptTemplateHeader", ReportData.Tables["uspre_rptTemplateHeader"]));

                        break;
                    }
            }
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    private DataTable GetReportDataSource(string strQuery, ReportParameter[] ReportParam, string strTableName = "", ReportParameter[] Additional_Report_Param = null)
    {
        SqlCommand cm = new SqlCommand();
        SqlDataAdapter da = new SqlDataAdapter();
        DataTable dt = new DataTable();
        bool bolInitializer = false;
        try
        {
            bolInitializer = InitConnection();
            cm.Connection = this.conn;
            // If Not (trns Is Nothing) Then
            this.trns = this.conn.BeginTransaction(IsolationLevel.ReadCommitted);
            cm.Transaction = this.trns;
            // End If
            cm.CommandType = CommandType.Text;
            cm.CommandText = strQuery;
            cm.CommandTimeout = 1000;
            cm.Parameters.Clear();
            //SqlParameter Param = new SqlParameter();
            //foreach (SqlParameter Param in ReportParam)
            //{
            //    if (Param != null)
            //        cm.Parameters.Add(Param);
            //}

            if (ReportParam != null)
            {
                foreach (ReportParameter Param in ReportParam)
                {
                    if (Param.Values[0] != null)
                        cm.Parameters.Add(new SqlParameter(Param.Name, Param.Values[0]));
                }
            }

            if (Additional_Report_Param != null)
            {
                foreach (ReportParameter Param in Additional_Report_Param)
                {
                    if (Param.Values[0] != null)
                        cm.Parameters.Add(new SqlParameter(Param.Name, Param.Values[0]));
                }
            }

            da.SelectCommand = cm;
            da.Fill(dt);
            dt.TableName = (strTableName != string.Empty ? strTableName : dt.TableName);
            this.trns.Commit();
        }
        catch (Exception ex)
        {
            this.trns.Rollback();
            Debug.Print("error");
            Debug.Print(ex.Message);
            return dt;
        }
        finally
        {
            if ((bolInitializer))
            {
                conn.Close();
                conn.Dispose();
                conn = null;
            }
            cm.Dispose();
            da.Dispose();
            ReportParam = null;
            // AdditionalReportParam = null;
        }
        return dt;
    }
    private DataTable GetReportDataSourceFromAPI(string endpointurl, string user, string authorization, ReportParameter[] ReportParam, string strTableName = "", ReportParameter[] Additional_Report_Param = null)
    {
        //using (var httpClient = new HttpClient())
        //{
        //    DataTable dt = new DataTable();
        //    httpClient.DefaultRequestHeaders.Add("User", user);
        //    httpClient.DefaultRequestHeaders.Add("Authorization", authorization);
        //    foreach (ReportParameter Param in ReportParam)
        //    {
        //        if (Param.Values[0] != null)
        //            httpClient.DefaultRequestHeaders.Add(Param.Name.Replace("@", ""), Param.Values[0].ToString());
        //    }

        //    //string dummydata = File.ReadAllText(Server.MapPath("~/Files/dummydata.json"));
        //    httpClient.Timeout = TimeSpan.FromMinutes(10);
        //    StringContent content = new StringContent("", Encoding.UTF8, "application/json");
        //    using (var response = await httpClient.PostAsync("https://dummyjson.com/products/1", content))
        //    {
        //        string apiResponse = await response.Content.ReadAsStringAsync();
        //        try
        //        {
        //            JArray jsonArray = JArray.Parse(apiResponse); // apiResponse

        //            dt = CreateDataTable(jsonArray);
        //            dt.TableName = (strTableName != string.Empty ? strTableName : dt.TableName);
        //        }
        //        catch
        //        { throw new Exception(apiResponse); }
        //    }
        //    return dt;
        //}

        DataTable dtTable = new DataTable();
        var task = ApiResponse(endpointurl);
        task.Wait();
        try
        {
            JObject jsonObject = JObject.Parse("{data :"+GetAPIResponse+"}"); // apiResponse
            JArray jsonArray = (JArray)jsonObject["data"]; //new JArray();
            //jsonArray.Add(jsonObject.GetValue("data"));
            //Debug.Print(jsonArray[0].Count().ToString());
            dtTable = CreateDataTable(jsonArray);
            dtTable.TableName = "dsARAgingDetailApi";
        }
        catch
        {
            throw new Exception(GetAPIResponse);
        };
        return dtTable;
    }
    private DataTable CreateDataTable(JArray jsonArray)
    {
        DataTable dataTable = new DataTable();

        if (jsonArray.Count > 0)
        {
            JObject firstObject = (JObject)jsonArray[0];

            foreach (var property in firstObject.Properties())
            {
                dataTable.Columns.Add(property.Name, typeof(object));
            }

            foreach (JObject jsonObject in jsonArray)
            {
                DataRow newRow = dataTable.NewRow();
                foreach (var property in jsonObject.Properties())
                {
                    newRow[property.Name] = property.Value.ToString();
                }
                dataTable.Rows.Add(newRow);
            }
        }

        return dataTable;
    }

    private async Task<DataTable> ApiResponse(string endpointurl)
    {
        using (var httpClient = new HttpClient())
        {
            httpClient.Timeout = TimeSpan.FromMinutes(10);
            StringContent content = new StringContent("", Encoding.UTF8, "application/json");
            using (var response = await httpClient.GetAsync(endpointurl))
            {
                string apiResponse = await response.Content.ReadAsStringAsync();
                GetAPIResponse = apiResponse; 
            }
            return null;
        }
    }
}