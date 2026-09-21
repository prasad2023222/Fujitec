# Fujitec

 
SP_SubConRegistrationMasterPageLoad
using (SqlConnection sqlConnection = new SqlConnection(connectionString))
{
    SqlCommand cmd = new SqlCommand("SP_SubConRegApprvlLoad", sqlConnection);
    cmd.CommandType = CommandType.StoredProcedure;
    cmd.Parameters.Add("@SubConRegHDRID", SqlDbType.VarChar).Value = ViewState["TrainingID"].ToString();
    cmd.Parameters.Add("@ApproverID", SqlDbType.VarChar).Value = Session["USERID"].ToString();
    SqlDataAdapter da = new SqlDataAdapter(cmd);
    DataSet ds = new DataSet();
    da.Fill(ds);
 }
