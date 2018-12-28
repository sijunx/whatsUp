const RegularUtil = {
    // 手机号码
    checkMobile(str) {
        var re = /^1\d{10}$/
        if (re.test(str)) {
            return true
        } else {
            return false
        }
    },

    // 邮编
    checkZipCode(str) {
        var re = /^[1-9][0-9]{5}$/
        if (re.test(str)) {
            return true
        } else {
            return false
        }
    },

    // 座机
    checkPhone(str){
        var re = /^0\d{2,3}-?\d{7,8}$/
        if(re.test(str)){
            return true
        } else {
            return false
        }
    },

    // 邮箱
    checkEmail(str){
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
        if(re.test(str)){
            return true
        } else {
            return false
        }
    },

    // 只能输入 数字英文和汉字
    checkName(str){
        // /^[\u4E00-\u9FA5A-Za-z0-9]+$/
        var re = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
        if(re.test(str)){
            return true
        } else {
            return false
        }
    },

    // 传真
    checkFax(str) {
        // var re = /^\d{3,4}-?\d{7,8}$/
        // 为防止某些公司传真后面还有分机号, 不固定, 暂时先定为 - 可有可无, - 后面 7 至 16 位数字
        var re = /^\d{3,4}-?\d{7,16}$/
        if (re.test(str)) {
            return true
        } else {
            return false
        }
    },

    // 不能有汉字
    checkWebSite(str) {
        // 检索汉字
        var re = /[\u4E00-\u9FA5\uF900-\uFA2D]/
        if (re.test(str)) {
            return false
        } else {
            return true
        }
    },

    // 检测是否全数字
    checkNumber(str) {
        var re = /^[0-9]{1,20}$/
        if (re.test(str)) {
            return true
        } else {
            return false
        }
    },
    
    //正浮点数校验 - 1位小数?
    checkDecimalNumWithOneNum(number) {
        var checkDecimalNumExpression = /^[1-9]\d*([.][1-9])?$/;
        return checkDecimalNumExpression.test(number);
    },

    //正浮点数校验 - 2位小数?
    checkDecimalNumWithTwoNum(number) {
        var checkDecimalNumExpression = /^(\d|([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
        return checkDecimalNumExpression.test(number);
    },

    //正浮点数校验 - 3位小数?
    checkDecimalNumWithThreeNum(number) {
        var checkDecimalNumExpression = /^[0-9]+(.[0-9]{1,3})?$/;
        return checkDecimalNumExpression.test(number);
    }
}

export default RegularUtil