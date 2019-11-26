package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Dao.sqlUntil;

/**
 * Servlet implementation class AJAX1
 */
@WebServlet("/AJAX2")
public class AJAX2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AJAX2() {
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
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		String message ="";
		
		
		try {
			Connection con = sqlUntil.getConnection();
			System.out.println("connection success");
			Statement stat = con.createStatement();
			String sql = "select password from web where username ='"+username+"'";
			ResultSet rs = stat.executeQuery(sql);
			
			String psd ="";
			
			while(rs.next()) {
				{
				psd = rs.getString("password");
				System.out.println();
				
				}
				if(psd.equals(password)){
					message = "1";
					
				}
				else {System.out.println("wrong");}
				
				PrintWriter pw = response.getWriter();
				pw.print(message);
				
			}
			
			
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
