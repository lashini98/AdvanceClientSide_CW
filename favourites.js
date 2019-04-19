$(function () {
	$("#addFavourites").on("click", function () {

		try{
			$(this).attr('disabled',true);
            //var itemToAdd = $(this).closest("p").attr("id");
            var itemToAdd = $(this).val();
            console.log(itemToAdd);
			var favouriteList = JSON.parse(localStorage.getItem('favList'));

			if(favouriteList == null){
				favouriteList = [];
			}

			if(favouriteList != null){
				for(var i=0; i<favouriteList.length; i++){
					if(itemToAdd == favouriteList[i]){
						alert("This property is already in your favourite list")
						favouriteList = [];
					}
				}
			}

			favouriteList.push(itemToAdd);
			localStorage.setItem('favList',JSON.stringify(favouriteList));

		}
		catch(e){

		}
	});
});

$(function () {
	$("#clearAll").on("click", function () {
        localStorage.clear();
        location.reload();
        // var output = `<p>There is no properties in the favourite list</p>`
        // document.getElementById("listHolder").innerHTML = output;
    });
});


    
	// $(".close").each(function( index ) {
    //     index.on("click", function () {
    //         localStorage.removeItem($(this).val());
    //         this.parentElement.style.display = 'none';
    //     });
    // });
        