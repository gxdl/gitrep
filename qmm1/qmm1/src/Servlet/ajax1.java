package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
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
 * Servlet implementation class ajax1
 */
@WebServlet("/ajax1")
public class ajax1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ajax1() {
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
		String id = request.getParameter("user_Id");
		System.out.println(id);
		PrintWriter out=response.getWriter();
		   
		 	Connection connection = null;
	        Statement st = null;
	        ResultSet rs = null;
	       
	            try {
	            Connection con = DBUtil.getMysqlConnection();
	            
	            Statement stet;
			
				stet = con.createStatement();
				
	            String sql = "select * from qmm1 where id ="+id+"";
	            
	            rs = stet.executeQuery(sql);
	            
	            ResultSetMetaData metaData = rs.getMetaData();
	            
	            int columnCount = metaData.getColumnCount();
	            
	            JSONArray array = new JSONArray();
	            
	            while(rs.next()) {
	            	JSONObject jsonObj = new JSONObject();       
		             for(int i = 1; i <= columnCount;i++)  
		              {  
		               String columnName = metaData.getColumnLabel(i);  
		               String value =rs.getString(columnName); 
		            
		               jsonObj.put(columnName, value);  
		              }  
		              array.add(jsonObj);  
	            }
	            
	            String massge =array.toString();
	            
	            out.print(massge);
	            con.close();
	             
		} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	}

}
