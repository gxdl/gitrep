package Dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javaBean.DBUtil;

public class BaseDao {

    /**
     * 获取list结果集
     * @param sql
     * @return
     */
    public static List<Map<String, Object>> findListBySql(String sql) {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        Connection connection = null;
        Statement st = null;
        ResultSet rs = null;
        try
        {
            connection = DBUtil.getMysqlConnection();
            System.out.println("success");
            st = connection.createStatement();
            rs = st.executeQuery(sql);
            ResultSetMetaData md = rs.getMetaData();
            int columnCount = md.getColumnCount();
            while (rs.next()) {
                Map<String, Object> rowData = new HashMap<String, Object>();
                for (int i = 1; i <= columnCount; i++) {
                    rowData.put(md.getColumnName(i), rs.getObject(i));
                }
                list.add(rowData);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(rs,st,connection);
        }
        return list;
    }


    /**
     * 获取map结果集
     * @param sql
     * @return
     */
    public static Map<String, Object> findMapBySql(String sql) {
        Map<String, Object> map = new HashMap<>();
        Connection connection = null;
        Statement st = null;
        ResultSet rs = null;
        try {
            connection = DBUtil.getMysqlConnection();
            st = connection.createStatement();
            rs = st.executeQuery(sql);
            ResultSetMetaData md = rs.getMetaData();
            int columnCount = md.getColumnCount();
            while (rs.next()) {
                for (int i = 1; i <= columnCount; i++) {
                    map.put(md.getColumnName(i), rs.getObject(i));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            closeResources(rs,st,connection);
        }
        return map;
    }

    public static void closeResources(ResultSet rs,Statement st,Connection connection)
    {
        try
        {
            if (rs != null)
            {
                rs.close();
            }
            if (st != null)
            {
                st.close();
            }
            if (connection != null)
            {
                connection.close();
            }
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
    }


   
}
