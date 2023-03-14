import mysql.connector

conexion1=mysql.connector.connect(host="localhost", 
                                  user="root", 
                                  passwd="lmarrocchi", 
                                  database="mateikos")
cursor1=conexion1.cursor()
cursor1.execute("SELECT * from productos")
for fila in cursor1:
    print(fila)
conexion1.close()   