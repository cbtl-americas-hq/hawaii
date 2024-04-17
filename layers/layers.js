var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_5MinuteDriveTime_1 = new ol.format.GeoJSON();
var features_5MinuteDriveTime_1 = format_5MinuteDriveTime_1.readFeatures(json_5MinuteDriveTime_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5MinuteDriveTime_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5MinuteDriveTime_1.addFeatures(features_5MinuteDriveTime_1);
var lyr_5MinuteDriveTime_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5MinuteDriveTime_1, 
                style: style_5MinuteDriveTime_1,
                interactive: true,
                title: '<img src="styles/legend/5MinuteDriveTime_1.png" /> 5-Minute Drive Time'
            });
var format_RestaurantTrendsData_2 = new ol.format.GeoJSON();
var features_RestaurantTrendsData_2 = format_RestaurantTrendsData_2.readFeatures(json_RestaurantTrendsData_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestaurantTrendsData_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestaurantTrendsData_2.addFeatures(features_RestaurantTrendsData_2);
var lyr_RestaurantTrendsData_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RestaurantTrendsData_2, 
                style: style_RestaurantTrendsData_2,
                interactive: true,
    title: 'Restaurant Trends Data<br />\
    <img src="styles/legend/RestaurantTrendsData_2_0.png" /> A<br />\
    <img src="styles/legend/RestaurantTrendsData_2_1.png" /> A-<br />\
    <img src="styles/legend/RestaurantTrendsData_2_2.png" /> A+<br />\
    <img src="styles/legend/RestaurantTrendsData_2_3.png" /> B<br />\
    <img src="styles/legend/RestaurantTrendsData_2_4.png" /> B-<br />\
    <img src="styles/legend/RestaurantTrendsData_2_5.png" /> B+<br />\
    <img src="styles/legend/RestaurantTrendsData_2_6.png" /> <br />'
        });
var format_CBTLCafe19_3 = new ol.format.GeoJSON();
var features_CBTLCafe19_3 = format_CBTLCafe19_3.readFeatures(json_CBTLCafe19_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTLCafe19_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTLCafe19_3.addFeatures(features_CBTLCafe19_3);
var lyr_CBTLCafe19_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTLCafe19_3, 
                style: style_CBTLCafe19_3,
                interactive: true,
                title: '<img src="styles/legend/CBTLCafe19_3.png" /> CBTL Cafe [19]'
            });
var format_TargetTradeAreas17_4 = new ol.format.GeoJSON();
var features_TargetTradeAreas17_4 = format_TargetTradeAreas17_4.readFeatures(json_TargetTradeAreas17_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeAreas17_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeAreas17_4.addFeatures(features_TargetTradeAreas17_4);
var lyr_TargetTradeAreas17_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TargetTradeAreas17_4, 
                style: style_TargetTradeAreas17_4,
                interactive: true,
                title: '<img src="styles/legend/TargetTradeAreas17_4.png" /> Target Trade Areas [17]'
            });
var format_IdentifiedSites14_5 = new ol.format.GeoJSON();
var features_IdentifiedSites14_5 = format_IdentifiedSites14_5.readFeatures(json_IdentifiedSites14_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdentifiedSites14_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdentifiedSites14_5.addFeatures(features_IdentifiedSites14_5);
var lyr_IdentifiedSites14_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IdentifiedSites14_5, 
                style: style_IdentifiedSites14_5,
                interactive: true,
                title: '<img src="styles/legend/IdentifiedSites14_5.png" /> Identified Sites [14]'
            });
var format_DistancetoNearestTTA_6 = new ol.format.GeoJSON();
var features_DistancetoNearestTTA_6 = format_DistancetoNearestTTA_6.readFeatures(json_DistancetoNearestTTA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistancetoNearestTTA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoNearestTTA_6.addFeatures(features_DistancetoNearestTTA_6);
var lyr_DistancetoNearestTTA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistancetoNearestTTA_6, 
                style: style_DistancetoNearestTTA_6,
                interactive: true,
                title: '<img src="styles/legend/DistancetoNearestTTA_6.png" /> Distance to Nearest TTA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_5MinuteDriveTime_1.setVisible(true);lyr_RestaurantTrendsData_2.setVisible(true);lyr_CBTLCafe19_3.setVisible(true);lyr_TargetTradeAreas17_4.setVisible(true);lyr_IdentifiedSites14_5.setVisible(false);lyr_DistancetoNearestTTA_6.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_5MinuteDriveTime_1,lyr_RestaurantTrendsData_2,lyr_CBTLCafe19_3,lyr_TargetTradeAreas17_4,lyr_IdentifiedSites14_5,lyr_DistancetoNearestTTA_6];
lyr_5MinuteDriveTime_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_RestaurantTrendsData_2.set('fieldAliases', {'CHAIN': 'CHAIN', 'GEOADDRESS': 'GEOADDRESS', 'GEOCITY': 'GEOCITY', 'GEOSTATE': 'GEOSTATE', 'GEOZIP': 'GEOZIP', 'GEOZIP4': 'GEOZIP4', 'COUNTY': 'COUNTY', 'DMA(MARKET': 'DMA(MARKET', 'CATEGORY': 'CATEGORY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'CNG(CURR_N': 'CNG(CURR_N', 'CURR_ANNUA': 'CURR_ANNUA', 'cur_mkt_gr': 'cur_mkt_gr', });
lyr_CBTLCafe19_3.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', });
lyr_TargetTradeAreas17_4.set('fieldAliases', {'id': 'id', 'temp_id': 'temp_id', 'new_area': 'new_area', 'geo_id': 'geo_id', 'lat': 'lat', 'lon': 'lon', 'layer': 'layer', 'path': 'path', 'type': 'type', 'selected': 'selected', 'seed_id': 'seed_id', 'optimizati': 'optimizati', 'addres': 'addres', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', });
lyr_IdentifiedSites14_5.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_DistancetoNearestTTA_6.set('fieldAliases', {'id': 'id', 'starting': 'starting', 'ending': 'ending', 'distance': 'distance', 'dist_miles': 'dist_miles', 'label': 'label', });
lyr_5MinuteDriveTime_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_RestaurantTrendsData_2.set('fieldImages', {'CHAIN': 'TextEdit', 'GEOADDRESS': 'TextEdit', 'GEOCITY': 'TextEdit', 'GEOSTATE': 'TextEdit', 'GEOZIP': 'TextEdit', 'GEOZIP4': 'TextEdit', 'COUNTY': 'TextEdit', 'DMA(MARKET': 'TextEdit', 'CATEGORY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'CNG(CURR_N': 'TextEdit', 'CURR_ANNUA': 'TextEdit', 'cur_mkt_gr': 'TextEdit', });
lyr_CBTLCafe19_3.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', });
lyr_TargetTradeAreas17_4.set('fieldImages', {'id': 'TextEdit', 'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'geo_id': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'type': 'TextEdit', 'selected': 'TextEdit', 'seed_id': 'TextEdit', 'optimizati': 'TextEdit', 'addres': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'cbsa_class': 'TextEdit', 'density_cl': 'TextEdit', });
lyr_IdentifiedSites14_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_DistancetoNearestTTA_6.set('fieldImages', {'id': 'TextEdit', 'starting': 'TextEdit', 'ending': 'TextEdit', 'distance': 'TextEdit', 'dist_miles': 'TextEdit', 'label': 'TextEdit', });
lyr_5MinuteDriveTime_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_RestaurantTrendsData_2.set('fieldLabels', {'CHAIN': 'no label', 'GEOADDRESS': 'no label', 'GEOCITY': 'no label', 'GEOSTATE': 'no label', 'GEOZIP': 'no label', 'GEOZIP4': 'no label', 'COUNTY': 'no label', 'DMA(MARKET': 'no label', 'CATEGORY': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'CNG(CURR_N': 'no label', 'CURR_ANNUA': 'no label', 'cur_mkt_gr': 'no label', });
lyr_CBTLCafe19_3.set('fieldLabels', {'id': 'no label', 'storeid': 'no label', 'store_name': 'no label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', });
lyr_TargetTradeAreas17_4.set('fieldLabels', {'id': 'no label', 'temp_id': 'no label', 'new_area': 'no label', 'geo_id': 'no label', 'lat': 'no label', 'lon': 'no label', 'layer': 'no label', 'path': 'no label', 'type': 'no label', 'selected': 'no label', 'seed_id': 'no label', 'optimizati': 'no label', 'addres': 'no label', 'city': 'no label', 'state': 'no label', 'cbsa_class': 'no label', 'density_cl': 'no label', });
lyr_IdentifiedSites14_5.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_DistancetoNearestTTA_6.set('fieldLabels', {'id': 'no label', 'starting': 'no label', 'ending': 'no label', 'distance': 'no label', 'dist_miles': 'no label', 'label': 'no label', });
lyr_DistancetoNearestTTA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});