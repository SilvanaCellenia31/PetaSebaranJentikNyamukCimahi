var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaRtRwPersebaranNyamuk_1 = new ol.format.GeoJSON();
var features_PetaRtRwPersebaranNyamuk_1 = format_PetaRtRwPersebaranNyamuk_1.readFeatures(json_PetaRtRwPersebaranNyamuk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaRtRwPersebaranNyamuk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaRtRwPersebaranNyamuk_1.addFeatures(features_PetaRtRwPersebaranNyamuk_1);
var lyr_PetaRtRwPersebaranNyamuk_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaRtRwPersebaranNyamuk_1, 
                style: style_PetaRtRwPersebaranNyamuk_1,
                popuplayertitle: "Peta Rt Rw Persebaran Nyamuk",
                interactive: true,
                title: '<img src="styles/legend/PetaRtRwPersebaranNyamuk_1.png" /> Peta Rt Rw Persebaran Nyamuk'
            });
var format_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2 = new ol.format.GeoJSON();
var features_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2 = format_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2.readFeatures(json_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2.addFeatures(features_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2);
var lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2, 
                style: style_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2,
                popuplayertitle: "Cimahi - RT RW 2008-20240801T065726Z-001 — Cimahi - RT RW 2008/SUNGAI_LN_25K.shp",
                interactive: true,
                title: '<img src="styles/legend/CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2.png" /> Cimahi - RT RW 2008-20240801T065726Z-001 — Cimahi - RT RW 2008/SUNGAI_LN_25K.shp'
            });
var format_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3 = new ol.format.GeoJSON();
var features_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3 = format_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3.readFeatures(json_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3.addFeatures(features_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3);
var lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3, 
                style: style_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3,
                popuplayertitle: "Cimahi - RT RW 2008-20240801T065726Z-001 — Cimahi - RT RW 2008/JALAN_LN_25K.shp",
                interactive: true,
                title: '<img src="styles/legend/CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3.png" /> Cimahi - RT RW 2008-20240801T065726Z-001 — Cimahi - RT RW 2008/JALAN_LN_25K.shp'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_vektoraedes_5 = new ol.format.GeoJSON();
var features_vektoraedes_5 = format_vektoraedes_5.readFeatures(json_vektoraedes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vektoraedes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vektoraedes_5.addFeatures(features_vektoraedes_5);
var lyr_vektoraedes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vektoraedes_5, 
                style: style_vektoraedes_5,
                popuplayertitle: "vektor aedes",
                interactive: true,
                title: '<img src="styles/legend/vektoraedes_5.png" /> vektor aedes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PetaRtRwPersebaranNyamuk_1.setVisible(true);lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2.setVisible(true);lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_vektoraedes_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PetaRtRwPersebaranNyamuk_1,lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2,lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3,lyr_Buffered_4,lyr_vektoraedes_5];
lyr_PetaRtRwPersebaranNyamuk_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Buffered_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vektoraedes_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PetaRtRwPersebaranNyamuk_1.set('fieldImages', {'fid': '', 'AREA': '', 'PERIMETER': '', 'CIMAHI_ADM': '', 'CIMAHI_A_1': '', 'KECAMATAN': '', 'KELURAHAN': '', 'RW': '', 'RT': '', });
lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Buffered_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_vektoraedes_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_PetaRtRwPersebaranNyamuk_1.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008SUNGAI_LN_25Kshp_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_CimahiRTRW200820240801T065726Z001CimahiRTRW2008JALAN_LN_25Kshp_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektoraedes_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektoraedes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});