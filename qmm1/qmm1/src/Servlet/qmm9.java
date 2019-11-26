package Servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Statement;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javaBean.DBUtil;
import javaBean.xk;
import net.sf.json.JSONArray;

/**
 * Servlet implementation class qmm9
 */
@WebServlet("/qmm9")
public class qmm9 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public qmm9() {
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
		String str=request.getParameter("key9");
		System.out.println(str);
		JSONArray json = JSONArray.fromObject(str);
		List<xk> user=(List<xk>)JSONArray.toCollection(json, xk.class);
		System.out.println(user.size());
		
		
		
		 	Connection connection = null;
	        Statement st = null;
	       
	        try {
	            
	            Connection con = DBUtil.getMysqlConnection();
	            
	            Statement stet = con.createStatement();
	            
	            for (int j = 0; j < user.size(); j++) {
					xk xk = user.get(j);
					
					
					
				String	sql = "insert into qmm4 values('" + xk.getClass1() + "','" + xk.getTeacherName() + "','" 
					+ xk.getPlace1() + "','"+xk.getTime()+"')";
				
				String sql1 = "delete from qmm4 where class1 = '"+xk.getClass1()+"'";
				stet.execute(sql1);
				
				}
				 
				
	            
	            
	             
	            
	            
	        } catch (Exception e) {

	            e.printStackTrace();// TODO: handle exception
	        } 
	    } 
	
	

}
