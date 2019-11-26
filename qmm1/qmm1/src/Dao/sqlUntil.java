package Dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class sqlUntil {
	public static  Connection getConnection() throws ClassNotFoundException, SQLException {
		String url="jdbc:mysql://localhost:3306/web";
		String driver="com.mysql.jdbc.Driver";
		Class.forName(driver);
		String userName="root";
		String userPassword="aa";
		Connection con=DriverManager.getConnection(url, userName, userPassword);
		return con;
		
	}
}
