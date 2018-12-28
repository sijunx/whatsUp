var DataCheck = {};

//电话号码校验: 如 15005059587
DataCheck.checkPhoneNum = function (phone) {
    var checkPhoneExpression = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return checkPhoneExpression.test(phone);
};

//座机号: ,如 0591-6487256
DataCheck.checkFixPhoneNum = function (fixNum) {
    var checkFixPhoneExpression = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,8})+(\-[0-9]{1,4})?$/;
    return checkFixPhoneExpression.test(fixNum);
};

//车牌号校验
DataCheck.checkCarNum = function (carNum) {
    var checkCarNumExpression = /^[\u4E00-\u9FA5]{1}[a-zA-Z]{1}[a-zA-Z0-9]{5}$/;
    return checkCarNumExpression.test(carNum);
};

//邮箱校验 
DataCheck.checkEmail = function (email) {
    var checkEmailExpression = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    return checkEmailExpression.test(email);
};

// 身份证校验 
DataCheck.checkUserId = function (idCard) {
    //15位和18位身份证号码的正则表达式
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
        if (idCard.length == 18) {
            var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
            for (var i = 0; i < 17; i++) {
                idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
            }

            var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
            var idCardLast = idCard.substring(17); //得到最后一位身份证号码

            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod == 2) {
                if (idCardLast == "X" || idCardLast == "x") {
                    return true;
                } else {
                    return false;
                }
            } else {
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if (idCardLast == idCardY[idCardMod]) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    } else {
        return false;
    }
};

//密码校验 6-16位数字,字母
DataCheck.checkPassword = function (password) {
    var checkPasswordExpression = /^[a-zA-Z0-9]{6,16}$/;
    return checkPasswordExpression.test(password);
};

//税号校验 
DataCheck.checkTaxNum = function (taxnum) {
    var checkTaxNumExpression = /^[a-zA-Z0-9]{1,30}$/;
    return checkTaxNumExpression.test(taxnum);
};

//emoji表情替换 
DataCheck.checkNormalContent = function (content) {
    return content.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');
};

//emoji表情验证，有表情返回false
DataCheck.checkNormalContentValidation = function (content) {
    var validation = /\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g;
    return !validation.test(content);
};

//字母,数字和汉字校验 
DataCheck.checkNormalCharacter = function (character) {
    var checkNormalCharacterExpression = /^[\w\u4e00-\u9fa5]*$/;
    return checkNormalCharacterExpression.test(character);
};

//正整数校验
DataCheck.checkPositiveIntegerNum = function (number) {
    var checkPositiveIntegerNumExpression = /^\+?[1-9][0-9]*$/;
    return checkPositiveIntegerNumExpression.test(number);
};

//正浮点数校验 - 1位小数 
DataCheck.checkDecimalNumWithOneNum = function (number) {
    var checkDecimalNumExpression = /^[1-9]\d*([.][1-9])?$/;
    return checkDecimalNumExpression.test(number);
};

//正浮点数校验 - 2位小数 
DataCheck.checkDecimalNumWithTwoNum = function (number) {
    var checkDecimalNumExpression = /^(\d|([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    return checkDecimalNumExpression.test(number);
};

//正浮点数校验 - 3位小数 
DataCheck.checkDecimalNumWithThreeNum = function (number) {
    var checkDecimalNumExpression = /^[0-9]+(.[0-9]{1,3})?$/;
    return checkDecimalNumExpression.test(number);
};

//数字校验
DataCheck.checkDecimalNum = function (number) {
    var checkDecimalNumExpression = /^(-?\d+)(\.\d+)?$/;
    return checkDecimalNumExpression.test(number);
};

//汉字校验，有汉字返回true
DataCheck.isChineseChar = function (number) {
    var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
    return reg.test(number);
};

DataCheck.isEarlyOrSame = function (date1,date2) {
    var timestamp1 = Date.parse(new Date(date1 + ' 00:00:00'));
    var timestamp2 = Date.parse(new Date(date2 + ' 00:00:00'));
    if(timestamp1 <= timestamp2){
        return true
    }
    return false
}

export default DataCheck;