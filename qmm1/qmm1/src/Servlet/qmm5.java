package Servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javaBean.DBUtil;

/**
 * Servlet implementation class qmm5
 */
@WebServlet("/qmm5")
public class qmm5 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public qmm5() {
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
		int id = Integer.parseInt(request.getParameter("id"));
		String studentName = request.getParameter("studentName");
		String teacherName = request.getParameter("teacherName");
		String class1 = request.getParameter("class1");
		String time = request.getParameter("time");
		String resultNumber = request.getParameter("resultNumber");
		System.out.println(id+","+studentName+","+teacherName+","+class1+","+time+","+resultNumber);
		
		
		try {
			Connection con =DBUtil.getMysqlConnection();
			Statement stat = con.createStatement();
			String sql = "insert into qmm1 values("+id+",'"+studentName+"','"+teacherName+"','"+class1+"','"+time+"','"+resultNumber+"')";
			System.out.println(sql);
			stat.execute(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
