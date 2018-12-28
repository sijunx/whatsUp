let DataTrans = {

    removeNull(obj) {
        for (let key in obj) {
            if (obj[key] == null || obj[key] == undefined || obj[key] == 'null') {
                obj[key] = '';
            }
        }
        return obj;
    },

    //服务器6位小数截取,ecimal是小数,index是取位数,返回的是字符串
    ecimalChange(ecimal, index) {
        if (ecimal == undefined || ecimal == '') {
            ecimal = '0';
        }

        let eciString = ecimal.toString();
        let eciArr = eciString.split('.');

        if (index == 0) {
            return eciArr[0];
        } else {
            if (eciArr.length < 2) {
                let oths = '';
                for (let i = 0; i < index; i++) {
                    oths += '0';
                }
                return eciArr[0] + '.' + oths;
            } else {
                if (eciArr[1].length > index) {
                    return eciArr[0] + '.' + eciArr[1].slice(0, index);
                } else {
                    let oths = '';
                    for (let i = eciArr[1].length; i < index; i++) {
                        oths += '0';
                    }

                    return eciArr[0] + '.' + eciArr[1] + oths;
                }
            }
        }
    },

    ellipsisIdCard(card) {
        let startStr = card.slice(0, 6);
        let endStr = card.slice(card.length - 4);

        return startStr + '********' + endStr;
    }

};

export default DataTrans;