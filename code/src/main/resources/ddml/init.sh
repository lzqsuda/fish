echo ' Init Begin'>>init.log 
mysql -uroot -proot  --default-character-set=utf8 fish <tb1001.sql >>init.log 
echo ' tb 1001 end '>>init.log 
mysql -uroot -proot  --default-character-set=utf8 fish <tb1002.sql >>init.log 
echo ' tb 1002 end '>>init.log 
mysql -uroot -proot  --default-character-set=utf8 fish <tb1003.sql >>init.log 
echo ' tb 1003 end '>>init.log 
mysql -uroot -proot  --default-character-set=utf8 fish <tb1004.sql >>init.log 
echo ' tb 1004 end '>>init.log 
mysql -uroot -proot  --default-character-set=utf8 fish <tb9101.sql >>init.log 
mysql -uroot -proot  --default-character-set=utf8 fish <intdata.sql >>init.log 
echo ' tb 9101 end '>>init.log 
echo ' Init  end!!! '>>init.log 
tail -1000f init.log 
