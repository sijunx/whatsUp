import React from 'react';
import HttpUtil from '../Helper/HttpUtil';
import SearchBar from '../Components/SearchBar';
import UrlList from '../Helper/UrlList';

const upload = React.createClass({

    render() {
        let imageSrc = "http://localhost:8091/spider/soImage?imageId="+1;







        return (
            <div className="mt77">
                {/*<form action="http://134.175.107.11:8091/spider/upload" method="post" encType="multipart/form-data" className="mt77">*/}
                <form action="http://127.0.0.1:8091/spider/upload" method="post" encType="multipart/form-data" className="mt77">
                    <input type="file" name='file' className="mt20 font24 blue fontWeightBold" />
                    <input type="submit" value="上传" className="mt20 font24 blue fontWeightBold"/>
                </form>
                <div className="left w20">
                    <a href={imageSrc}></a>
                </div>
            </div>
        )
    }
});

export default upload;
