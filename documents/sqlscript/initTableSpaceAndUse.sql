/*
*this script create by vsked
*oracle 12c version
*201704261019
*/

create temporary tablespace baseoa_temp 
  tempfile 'F:\oracledata\baseoa_temp.dbf' 
  size 30M 
  autoextend on 
  next 10M 
  extent management local;
  
 create tablespace baseoa_data 
  logging 
  datafile 'F:\oracledata\baseoa_data.dbf' 
  size 150M 
  autoextend on 
  next 10M 
  extent management local;
  
  
create user simcustc1 identified by simcustc1 default tablespace simcustc1_data  temporary tablespace simcustc1_temp;

grant connect,resource,dba to simcustc1;

ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;