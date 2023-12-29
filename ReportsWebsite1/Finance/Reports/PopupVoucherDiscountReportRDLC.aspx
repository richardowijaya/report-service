<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PopupVoucherDiscountReportRDLC.aspx.cs" Inherits="PopupVoucherDiscountReportRDLC" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">



<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script type="text/javascript" language="Javascript" src="../../scripts/library.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div style="overflow: visible; top: 0px; left: 0px; right: 0px; bottom: 0px; width: 100%; height: 100%;">
            <asp:ScriptManager runat="server" />
            <asp:Panel ID="pnlBodyContent" runat="server" Width="100%">
                <div id="divFields" style="width: 100%;">
                    <table cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="normal" style="width: 120px">Company <span class="required">*</span>
                            </td>
                            <td>
                                <%--   <uc7:LookUpForIDDesc ID="lubCompany" runat="server" AutoPostBack="true" Entity="CompanyMaster"
                                            Mandatory="true" Width="97px" />--%>
                                <asp:TextBox ID="txtCompany" runat="server" Width="200px" Text="130005"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td class="normal">Period Month
                            </td>
                            <td class="normal">
                                <asp:DropDownList ID="ddlPeriodMonth" runat="server" AutoPostBack="false" CssClass="ddl" Mandatory="True" Width="100px"></asp:DropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td class="normal">Period Year
                            </td>
                            <td class="normal">
                                <asp:DropDownList ID="ddlPeriodYear" runat="server" AutoPostBack="false" CssClass="ddl" Mandatory="True" Width="100px"></asp:DropDownList>
                                <%--<uc11:DropDownList ID="ddlPeriodYear" runat="server" AutoPostBack="false" CssClass="ddl" Mandatory="false" Width="100px" DropDownType="YearDinamic" YearRange="10"/>--%>
                            </td>
                        </tr>
                        <tr>
                            <td class="normal">Data Source Type
                            </td>
                            <td class="normal">
                                <asp:RadioButtonList ID="rblDataSourceType" runat="server" RepeatDirection="Horizontal">
                                    <asp:ListItem Text="SQL Server Data Source" Value="SP" Selected="True"></asp:ListItem>
                                    <asp:ListItem Text="API (using return json)" Value="API"></asp:ListItem>
                                </asp:RadioButtonList>                                                                
                            </td>
                        </tr>
                    </table>
                    <br />
                     <asp:Button ID="btnPrint" runat="server" Text="Print" OnClick="tlbReport_PrintClick" />
                </div>
            </asp:Panel>
        </div>
    </form>
</body>    
</html>