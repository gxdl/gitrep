package javaBean;

import java.sql.Connection;
import java.sql.DriverManager;

public final class DBUtil {

    private final static String driverName = "com.mysql.jdbc.Driver";    //Çý¶¯
    private final static String url = "jdbc:mysql://localhost:3306/qmm";
    private final static String userName = "root";
    private final static String pwd = "aa";


    public static Connection getMysqlConnection()
    {
        Connection connection = null;
        try{
            Class.forName(driverName);
            connection = DriverManager.getConnection(url,userName,pwd);
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return connection;
    }
}
