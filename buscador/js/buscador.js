var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$("form").css({
		"height": "auto",
		"background": "rgba(0,0,0,0.5)"
	})

	if ($("#inputBusqueda").val() == ""){
		$("form").css({
			"height": "auto",
			"background": "none"
		})

		$("#sear1").hide()

	} else {
		$("#sear1").fadeIn("fast");
	}
})