var size = 0;
var placement = 'point';

var style_TargetTradeAreas17_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("id") !== null) {
        labelText = String(feature.get("id"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 5,
            radius2: 5.0, stroke: new ol.style.Stroke({color: 'rgba(220,30,5,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,35,6,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
