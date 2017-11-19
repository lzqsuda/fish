	drop table if exists `tb1004`;
	create table `tb1004`( 
  			`member_no`        varchar(60) comment '微信号' ,
  			`competition_id`        varchar(60) comment '比赛ID' ,
  			`qrcode`        varchar(60) comment '二维码编号' ,
  			`reward_amount`       decimal(10,2) comment '中奖金额' ,
  			`id`        varchar(60) comment '技术主键' ,
  			`version`       int comment '版本号' ,
  			`is_remove`        varchar(1) comment '是否删除' ,
  			`create_time`       datetime comment '记录创建时间' ,
  			`update_time`       datetime comment '记录修改时间' ,
  			`create_by`        varchar(60) comment '创建人' ,
  			`update_by`        varchar(60) comment '修改人' ,
  		primary key (`id`)
	 ) comment='钓鱼奖金发放';
