function onSectionClick(item){
	switch(item) {
		case "overview":
			document.getElementById('overviewContainter').classList.remove("hidden");
			document.getElementById('featuresContainter').classList.add("hidden");
			document.getElementById('specificationsContainter').classList.add("hidden");
			document.getElementById('overview').classList.add("selectedSection");
			document.getElementById('features').classList.remove("selectedSection");
			document.getElementById('specifications').classList.remove("selectedSection");

		break;
		case "features":
			
			document.getElementById('overviewContainter').classList.add("hidden");
			document.getElementById('featuresContainter').classList.remove("hidden");
			document.getElementById('specificationsContainter').classList.add("hidden");
			document.getElementById('overview').classList.remove("selectedSection");
			document.getElementById('features').classList.add("selectedSection");
			document.getElementById('specifications').classList.remove("selectedSection");
		break;
		
		case "specifications":
			document.getElementById('overviewContainter').classList.add("hidden");
			document.getElementById('featuresContainter').classList.add("hidden");
			document.getElementById('specificationsContainter').classList.remove("hidden");
			document.getElementById('overview').classList.remove("selectedSection");
			document.getElementById('features').classList.remove("selectedSection");
			document.getElementById('specifications').classList.add("selectedSection");
		break;
   
	}

};

function onGalleryChange(img){
	switch(img) {
		case 1:
			document.getElementById('img1').classList.remove("hidden");
			document.getElementById('img2').classList.add("hidden");
			document.getElementById('img3').classList.add("hidden");
			document.getElementById('galleryImg1').classList.add("selected");
			document.getElementById('galleryImg2').classList.remove("selected");
			document.getElementById('galleryImg3').classList.remove("selected");

		break;

		case 2:
			document.getElementById('img1').classList.add("hidden");
			document.getElementById('img2').classList.remove("hidden");
			document.getElementById('img3').classList.add("hidden");
			document.getElementById('galleryImg1').classList.remove("selected");
			document.getElementById('galleryImg2').classList.add("selected");
			document.getElementById('galleryImg3').classList.remove("selected");
		break;

		case 3:
			document.getElementById('img1').classList.add("hidden");
			document.getElementById('img2').classList.add("hidden");
			document.getElementById('img3').classList.remove("hidden");
			document.getElementById('galleryImg1').classList.remove("selected");
			document.getElementById('galleryImg2').classList.remove("selected");
			document.getElementById('galleryImg3').classList.add("selected");
		break;
	}

};

function onColorSelected(color){

	switch(color) {

		case 'white':
			document.getElementById('white').classList.add("selected");
			document.getElementById('black').classList.remove("selected");
		break;

		case 'black':
			document.getElementById('white').classList.remove("selected");
			document.getElementById('black').classList.add("selected");
		break;

	}


};

function onWarrantySelected(warranty, operation, value){
	switch(warranty) {

		case '2 years':
			if(!document.getElementById('warranty2Years').classList.contains('selected'))
			{
				changeValue(operation, value);
			}
			document.getElementById('warranty2Years').classList.add("selected");
			document.getElementById('warranty3Years').classList.remove("selected");
			

		break;

		case '3 years':
			if(!document.getElementById('warranty3Years').classList.contains('selected'))
			{
				changeValue(operation, value);
			}
			document.getElementById('warranty2Years').classList.remove("selected");
			document.getElementById('warranty3Years').classList.add("selected");
			

		break;


	}
	
};


function onFeaturedSelected(feature, operation, value){

	if(document.getElementById(feature).classList.contains('selected'))
	{
		document.getElementById(feature).classList.remove('selected');
		changeValue('remove', value);
	}
	else
	{
		document.getElementById(feature).classList.add('selected');
		changeValue('add', value);
	}

};

function changeValue(operation, value)
{
	var currentValue = parseFloat(document.getElementById('totalPriceFooter').innerHTML.replace('$',''));

	if(operation === 'add')
	{
		document.getElementById('totalPriceFooter').innerHTML = '$' + (currentValue + value);
	}
	else
	{
		document.getElementById('totalPriceFooter').innerHTML = '$' + (currentValue - value);
	}

}
