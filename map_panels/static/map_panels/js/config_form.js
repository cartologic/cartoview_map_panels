$(function(){
    var positions = ["left","right","bottom", "top"];
        //{
        //    el: "show_left_panel",
        //    contentEl: "left-p"
        //},"#id_config-show_right_panel","#id_config-show_bottom_panel"]
	var updateFieldsVisibility = function(pos){

            var checked = $("#id_config-show_" + pos + "_panel").prop('checked');
		    $("#id_config-" + pos + "_panel_content").parents(".form-group")[checked ? 'show' : 'hide']();
		    $("#id_config-" + pos + "_panel_title").parents(".form-group")[checked ? 'show' : 'hide']();


	};
    $.each(positions,function(index, pos){
        updateFieldsVisibility(pos);
        $("#id_config-show_" + pos + "_panel").change(function(){
            updateFieldsVisibility(pos);
        });
    });

});