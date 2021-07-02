const Constants = {};

    Constants.AssetsRoot='../../assets';
    Constants.ImageRoot=`${Constants.AssetsRoot}/images`;
    Constants.Theme={
        Technology:'technology',
        IronGray:'iron-gray'
    };
    
    Constants.getImagePath=function(theme=Constants.Theme.Technology){
        return `${Constants.ImageRoot}/${theme}`;
    };