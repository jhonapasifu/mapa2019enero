var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Habilitados2019Enero_1 = new ol.format.GeoJSON();
var features_Habilitados2019Enero_1 = format_Habilitados2019Enero_1.readFeatures(json_Habilitados2019Enero_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habilitados2019Enero_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Habilitados2019Enero_1.addFeatures(features_Habilitados2019Enero_1);
var lyr_Habilitados2019Enero_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Habilitados2019Enero_1, 
                style: style_Habilitados2019Enero_1,
                interactive: true,
    title: 'Habilitados 2019 Enero<br />\
    <img src="styles/legend/Habilitados2019Enero_1_0.png" /> Calidda<br />\
    <img src="styles/legend/Habilitados2019Enero_1_1.png" /> Contugas<br />\
    <img src="styles/legend/Habilitados2019Enero_1_2.png" /> Quavii<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Habilitados2019Enero_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Habilitados2019Enero_1];
lyr_Habilitados2019Enero_1.set('fieldAliases', {'Codigo_Solicitud': 'Codigo_Solicitud', 'Concesionaria': 'Concesionaria', 'Fecha_Habilitacion': 'Fecha_Habilitacion', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Ubigeo': 'Ubigeo', 'Direccion': 'Direccion', });
lyr_Habilitados2019Enero_1.set('fieldImages', {'Codigo_Solicitud': 'Range', 'Concesionaria': 'TextEdit', 'Fecha_Habilitacion': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Provincia': 'TextEdit', 'Distrito': 'TextEdit', 'Ubigeo': 'Range', 'Direccion': 'TextEdit', });
lyr_Habilitados2019Enero_1.set('fieldLabels', {'Codigo_Solicitud': 'header label', 'Concesionaria': 'header label', 'Fecha_Habilitacion': 'header label', 'Latitud': 'header label', 'Longitud': 'header label', 'Provincia': 'header label', 'Distrito': 'header label', 'Ubigeo': 'header label', 'Direccion': 'header label', });
lyr_Habilitados2019Enero_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});