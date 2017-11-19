	drop table if exists `tb1003`;
	create table `tb1003`( 
  			`member_no`        varchar(60) comment '会员ID（微信号）' ,
  			`competition_id`        varchar(60) comment '比赛ID' ,
  			`is_pay`        varchar(1) comment '已经付款' ,
  			`id`        varchar(60) comment '技术主键' ,
  			`version`       int comment '版本号' ,
  			`is_remove`        varchar(1) comment '是否删除' ,
  			`create_time`       datetime comment '记录创建时间' ,
  			`update_time`       datetime comment '记录修改时间' ,
  			`create_by`        varchar(60) comment '创建人' ,
  			`update_by`        varchar(60) comment '修改人' ,
  		primary key (`id`)
	 ) comment='报名参加钓鱼活动';
