var TranslationText = {};
TranslationText.uploadText=function (value) {
    let conEntrust=value;
    let regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
    let conArray=conEntrust.match(regRule);
    if(conArray) {
        for(let i=0;i<conArray.length;i++){
            conEntrust=conEntrust.replace(conArray[i], encodeURI(conArray[i]));
        }
    }
    return conEntrust
};
TranslationText.downloadText=function (value) {
    return decodeURI(value);
};
TranslationText.emoji=function (value) {
    let conEntrust=value;
    let regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
    let conArray=conEntrust.match(regRule);
    if(conArray) {
        conEntrust=conEntrust.replace(conArray[0], '');
    }
    return conEntrust

}
TranslationText.saveText=function (value) {
    return value.replace(/\r\n/g,"<br/>");
}
export default TranslationText;