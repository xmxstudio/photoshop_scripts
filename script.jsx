var txtTitle =  prompt('Title','')
var txtSubTitle = prompt('SubTitle','')

var file = new File('c:\\title.psd')
var doc = app.open(file)

var title = doc.layers.getByName('title')
var subtitle = doc.layers.getByName('subtitle')

title.textItem.contents  = txtTitle
subtitle.textItem.contents  = txtSubTitle

var img = app.openDialog()
if(img[0]){
    app.load(img[0])
    var logofile = app.activeDocument
    logofile.selection.selectAll()
    logofile.selection.copy()
    logofile.close(SaveOptions.DONOTSAVECHANGES)
    doc.activeLayer = doc.layerSets["mask"].artLayers.getByName("logo")
    doc.paste()

}



