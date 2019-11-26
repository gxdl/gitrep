package Servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javaBean.DBUtil;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class qmm6
 */
@WebServlet("/qmm6")
public class qmm6 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public qmm6() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setCharacterEncoding("UTF-8");
		String str=request.getParameter("key6");
		   
		 	Connection connection = null;
	        Statement st = null;
	        ResultSet rs = null;
	        try {
	            
	            Connection con = DBUtil.getMysqlConnection();
	            
	            Statement stet = con.createStatement();

	            String sql = "select * from qmm3";
	            
	             rs = stet.executeQuery(sql);
	             
	            ResultSetMetaData metaData =  rs.getMetaData(); 
	            
	            int columnCount= metaData.getColumnCount();   
	            
	            JSONArray array = new JSONArray();
	            while(rs.next()){ 
	             JSONObject jsonObj = new JSONObject();       
	             for(int i = 1; i <= columnCount;i++)  
	              {  
	               String columnName = metaData.getColumnLabel(i);  
	               String value =rs.getString(columnName);  
	               jsonObj.put(columnName, value);  
	              }  
	              array.add(jsonObj);  
	            }
	            String a = array.toString();
	             
	             response.getWriter().write(a);
	            con.close();
	            
	        } catch (Exception e) {

	            e.printStackTrace();// TODO: handle exception
	        } 
	    } 
	
	}


