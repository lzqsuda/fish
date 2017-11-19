	drop table if exists `tb9101`;
	create table `tb9101`( 
  			`employee_no`        varchar(60) comment '员工编号' ,
  			`password`        varchar(60) comment '密码' ,
  			`email`        varchar(60) comment '电子邮箱' ,
  			`name`        varchar(60) comment '姓名' ,
  			`department`        varchar(60) comment '部门' ,
  			`id`        varchar(60) comment '技术主键' ,
  			`version`       int comment '版本号' ,
  			`is_remove`        varchar(1) comment '是否删除' ,
  			`create_time`       datetime comment '记录创建时间' ,
  			`update_time`       datetime comment '记录修改时间' ,
  			`create_by`        varchar(60) comment '创建人' ,
  			`update_by`        varchar(60) comment '修改人' ,
  		primary key (`id`)
	 ) comment='用户';
