var wms_layers = [];


        var lyr_imagesatellite_0 = new ol.layer.Tile({
            'title': 'image satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CENTROIDE_1 = new ol.format.GeoJSON();
var features_CENTROIDE_1 = format_CENTROIDE_1.readFeatures(json_CENTROIDE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROIDE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROIDE_1.addFeatures(features_CENTROIDE_1);
var lyr_CENTROIDE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROIDE_1, 
                style: style_CENTROIDE_1,
                popuplayertitle: 'CENTROIDE',
                interactive: true,
                title: '<img src="styles/legend/CENTROIDE_1.png" /> CENTROIDE'
            });

lyr_imagesatellite_0.setVisible(true);lyr_CENTROIDE_1.setVisible(true);
var layersList = [lyr_imagesatellite_0,lyr_CENTROIDE_1];
lyr_CENTROIDE_1.set('fieldAliases', {'id': 'id', });
lyr_CENTROIDE_1.set('fieldImages', {'id': 'TextEdit', });
lyr_CENTROIDE_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_CENTROIDE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});