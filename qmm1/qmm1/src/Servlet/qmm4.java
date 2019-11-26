package Servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javaBean.DBUtil;
import javaBean.pf;
import net.sf.json.JSONArray;

/**
 * Servlet implementation class qmm4
 */
@WebServlet("/qmm4")
public class qmm4 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public qmm4() {
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
		
		response.setCharacterEncoding("utf-8");
		String str2 =  request.getParameter("key1");
		System.out.println(str2);
		JSONArray json = JSONArray.fromObject(str2);
		List<pf> user=(List<pf>)JSONArray.toCollection(json, pf.class);
		System.out.println(user.size());
		
		Connection connection = null;
		Statement st = null;
		ResultSet rs = null;
		
		
		try {
			
			
				
			Connection con = DBUtil.getMysqlConnection();
			
			Statement stet;
			
			stet = con.createStatement();
			
			for (int i = 0; i < user.size(); i++) {
				pf p=user.get(i);
				String sql = "update qmm2 set score1=" + p.getScore1() + " where c_Id=" + p.getC_Id() + "";
				stet.execute(sql);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
	}

}
