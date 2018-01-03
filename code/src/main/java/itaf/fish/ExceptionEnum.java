
package itaf.fish;


import itaf.core.bean.error.constant.ErrorLevels;
import itaf.core.bean.error.constant.ErrorTypes;
import itaf.core.exception.IExceptionEnum;

/**
 * 企业网银系统级错误定义，也作为企业错误定义基类
 * 
 * @author yuguang.fyg
 * @version $Id: EBankErrorNum.java, v 0.1 2015年9月4日 下午11:51:46 yuguang.fyg Exp $
 */
public enum ExceptionEnum implements IExceptionEnum{
    /**System*/
    UNKNOWN_EXCEPTION("000", ErrorLevels.ERROR, ErrorTypes.SYSTEM, "系统未知错误"),
    CONFIGURATION_ERROR("001", ErrorLevels.ERROR, ErrorTypes.SYSTEM, "系统配置错误"),
    REQUEST_PARAM_NULLVALUE("002", ErrorLevels.ERROR, ErrorTypes.SYSTEM, "请求参数为空"),
    REQUEST_UNSUPPORT_ANNOTATION("003", ErrorLevels.ERROR, ErrorTypes.SYSTEM, "请求参数不支持注解"),
    REQUEST_PARAM_ILLEGAL("004", ErrorLevels.ERROR, ErrorTypes.SYSTEM, "请求参数非法"),
    ILLEGAL_DATA("005", ErrorLevels.ERROR, ErrorTypes.SYSTEM, "数据非法"),
    REMOTE_INVOKE_ERROR("006", ErrorLevels.ERROR, ErrorTypes.SYSTEM, "远程服务调用异常"),
    
    /**Biz*/
    UNINPUT_TNTINST_ID("100", ErrorLevels.ERROR, ErrorTypes.BIZ, "租户ID为空"),
    SMSCODE_SEND_FAIL("101", ErrorLevels.ERROR, ErrorTypes.BIZ, "验证码发送失败"),
    SMSCODE_VERIFY_FAIL("102", ErrorLevels.ERROR, ErrorTypes.BIZ, "验证码验证失败"),
    OPEARTOR_INEXISTENCE("103", ErrorLevels.ERROR, ErrorTypes.BIZ, "用户不存在"),
    OPEARTOR_PASSWRORD_ERROR("104", ErrorLevels.ERROR, ErrorTypes.BIZ, "密码错误"),
    ENROLL_DUP_ERROR("105", ErrorLevels.ERROR, ErrorTypes.BIZ, "该用户已经报名！"),
    REWARD_DUP_ERROR("106", ErrorLevels.ERROR, ErrorTypes.BIZ, "改用户已经抽奖！"),
    
    /**Core*/
    //BEAN2MAP_FAIL("200", ErrorLevels.ERROR, ErrorTypes.BIZ, "对象转换Mapp 错误"),
   // DATA_TYPE_ERROR("201", ErrorLevels.ERROR, ErrorTypes.BIZ,"数据类型错误"),
    CORE_EXCEPTION("200",ErrorLevels.ERROR, ErrorTypes.BIZ,"内核拒绝异常"),
    CORE_REJECT_EXCEPTION("201",ErrorLevels.ERROR, ErrorTypes.BIZ,"内核拒绝异常"),
    CORE_RUNTIME_EXCEPTION("202",ErrorLevels.ERROR, ErrorTypes.BIZ,"内核运行时异常"),
    CORE_VALIDATION_EXCEPTION("203",ErrorLevels.ERROR, ErrorTypes.BIZ,"内核验证时异常"),
    CORE_VALIDATION_RUNTIME_EXCEPTION("204",ErrorLevels.ERROR, ErrorTypes.BIZ,"内核验证运行时异常"),
    CORE_COMMUNICATION_EXCEPTION("205",ErrorLevels.ERROR, ErrorTypes.BIZ,"内核通讯异常"),
    CORE_EXPR_EXCEPTION("206",ErrorLevels.ERROR, ErrorTypes.BIZ,"内核表达式异常"),
    
    TASK_REQUEST_NOT_BE_FINANCIAL_REQUEST("301",ErrorLevels.ERROR, ErrorTypes.BIZ,"非金融类交易"),
    TASK_USERS_NOT_ENOUGH("302",ErrorLevels.ERROR, ErrorTypes.BIZ,"复核/授权用户数不足"),
    TASK_ACCOUNT_NOT_EXISTS("303",ErrorLevels.ERROR, ErrorTypes.BIZ,"账户不存在"),
    TASK_ACCOUNT_AUTHCONFIG_NOT_EXISTS("304",ErrorLevels.ERROR, ErrorTypes.BIZ,"账号复核配置信息不存在"),
    TASK_USER_ACCOUNT_AUTH_CONFIG_EMPTY("305",ErrorLevels.ERROR, ErrorTypes.BIZ,"没有有效的复核操作员"),
    TASK_USER_NOT_MAKER_RIGHT("306",ErrorLevels.ERROR, ErrorTypes.BIZ,"操作员没有录入权限"),
    TASK_PRODUCT_NOT_EXISITS("307",ErrorLevels.ERROR, ErrorTypes.BIZ,"产品不存在"),
    TASK_TASK_NOT_EXIST("308",ErrorLevels.ERROR, ErrorTypes.BIZ,"该复核任务不存在"),
    TASK_CHECKED_BY_ANOTHER_USER("309",ErrorLevels.ERROR, ErrorTypes.BIZ,"该任务已由其它操作员取消或复核过了"),
    TASK_CANCEL_BY_NOENTRY_USER("309",ErrorLevels.ERROR, ErrorTypes.BIZ,"不能取消非自己录入的交易");
    
    /**Core*/
    
    /**错误码*/
    private String errorCode;
    /**错误级别*/
    private String errorLevel;
    /**错误类型*/
    private String errorType;
    /**错误描述*/
    private String desc;

    ExceptionEnum(final String errorCode, final String errorLevel, final String errorType,
                  final String desc) {
        this.desc = desc;
        this.errorCode = errorCode;
        this.errorLevel = errorLevel;
        this.errorType = errorType;
    }


    public String errorCode() {
        return errorCode;
    }

    /** 
     * @see itaf.fish.domain.ExceptionEnum.ecctrlcore.common.exceptions.EBankErrorEnum#getErrorLevel()
     */

    public String errorLevel() {
        return errorLevel;
    }

    /** 
     * @see itaf.fish.domain.ExceptionEnum.ecctrlcore.common.exceptions.EBankErrorEnum#getErrorType()
     */

    public String errorType() {
        return errorType;
    }

    /** 
     * @see itaf.fish.domain.ExceptionEnum.ecctrlcore.common.exceptions.EBankErrorEnum#getDesc()
     */
    public String desc() {
        return desc;
    }
}
