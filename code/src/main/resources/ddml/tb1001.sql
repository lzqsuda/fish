	drop table if exists `tb1001`;
	create table `tb1001`( 
  			`name`        varchar(60) comment '姓名' ,
  			`nkname`        varchar(60) comment '昵称' ,
  			`id_type`        varchar(6) comment '识别类型' ,
  			`id_no`        varchar(60) comment '识别号码' ,
  			`pwd`        varchar(60) comment '密码' ,
  			`id`        varchar(60) comment '技术主键' ,
  			`version`       int comment '版本号' ,
  			`is_remove`        varchar(1) comment '是否删除' ,
  			`create_time`       datetime comment '记录创建时间' ,
  			`update_time`       datetime comment '记录修改时间' ,
  			`create_by`        varchar(60) comment '创建人' ,
  			`update_by`        varchar(60) comment '修改人' ,
  		primary key (`id`)
	 ) comment='会员';
