$(function () {
	$("#spinner").spinner({
		min: 2,
		max: 6,
		spin: function (event, ui) {
			$(this).change();
		}
	});
});

$(function () {
	$("#spinner1").spinner({
		min: 2,
		max: 6,
		spin: function (event, ui) {
			$(this).change();
		}
	});
});

$(function () {
	$("#property").selectmenu();
});

$(function () {
	$("#time").selectmenu();
});

$(function () {
	$("#slider-range").slider({
		range: true,
		min: 299995,
		max: 750000,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount").val("£" + ui.values[0] + " -£" + ui.values[1]);
		}
	});

	$("#amount").val("£" + $("#slilder-range").slider("values", 0) + "-£" + $("#slider-range").slider("values", 1))
});

$(function () {
	$("#Search").on("click", function () {
		var propType = $("#property").val();
		var minBed = $("#spinner").val();
		var maxBed = $("#spinner1").val();
		var date = $("#time").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		var searchResult = [];

		var output = "<ul class='clear'>";
		for (var i in data.properties) {
			if ((propType == data.properties[i].type) || (propType == "Any"))
				if ((minBed >= data.properties[i].bedrooms) && (maxBed <= data.properties[i].bedrooms))
					if ((date == data.properties[i].added.month) || (date == "Anytime"))
						if ((data.properties[i].price >= minPrice) && (data.properties[i].price <= maxPrice)) {
							{
								{
									{
										//searchResult.push(data.properties[i])
										output += `<li><img src=${data.properties[i].picture}>
													<h2>£${data.properties[i].price}</h2>
													<h3>${data.properties[i].type}</h3>
													<p>${data.properties[i].location}</p>
													<p>${data.properties[i].bedrooms} BedRooms</p>
										  			<p><a class="resortLink" href="${data.properties[i].url}">Visit Page</a></p></li>`
									}
								}
							}
						}

		}
		 output += "</ul>";
		 document.getElementById("product").innerHTML = output;
		//generateUI(searchResult);

	});
});

function generateUI(searchResult) {
	if (searchResult.length > 4) {
		var outputforArea1 = "<div class='responsive'>";
		var outputforArea2 = "<div class='responsive'>";
		for (var i = 0; i < searchResult.length; i++) {
			if (i < 4) {
				outputforArea1 += `<td class="gallery">
			<img src=${searchResult[i].picture} >
			<p class="desc">${searchResult[i].description}</p>
			<a role="button" href="${searchResult[i].url}">Visit Page</a></td>`
			} else {
				outputforArea2 += `<td class="gallery"><h2><li>£${searchResult[i].price}</li></h2>
			<img src=${searchResult[i].picture} >
			<p class="desc">${searchResult[i].description}</p>
			<a role="button" href="${searchResult[i].url}">Visit Page</a></td>`
			}
		}

		outputforArea1 += "</div>";
		outputforArea2 += "</div>"

		document.getElementById("propertyArea1").innerHTML = outputforArea1;
		document.getElementById("propertyArea2").innerHTML = outputforArea2;
	}else{
		var output = "<div class='responsive'>";
		for (var i = 0; i < searchResult.length; i++) {
			output += `<td class="gallery">
			<img src=${searchResult[i].picture}>
			<p class="desc">${searchResult[i].description}</p>
			<a role="button" href="${searchResult[i].url}">Visit Page</a></td>`
		}
		output += "</div>"
		document.getElementById("propertyArea1").innerHTML = output;
	}

}







