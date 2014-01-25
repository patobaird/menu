/**
 * Show hide content based on links
 */
$(function() {
    $("#a-content").hide();
    $("#b-content").hide();
    $("#c-content").hide();
    $("#form").hide();

    $( "#link_home" ).click(function() {

        // show hide
            $('#home-content').show();
            $("#a-content").hide();
            $("#b-content").hide();
            $("#c-content").hide();

        // make active
        $("#link_a").removeClass("active");
        $("#link_b").removeClass("active");
        $("#link_c").removeClass("active");
    });

    $( "#link_a" ).click(function() {

        // show hide
        $('#home-content').hide();
        $("#a-content").show();
        $("#b-content").hide();
        $("#c-content").hide();

        // make active
        $("#link_a").addClass("active");
        $("#link_b").removeClass("active");
        $("#link_c").removeClass("active");
    });

    $( "#link_b" ).click(function() {

        // show hide
        $('#home-content').hide();
        $("#a-content").hide();
        $("#b-content").show();
        $("#c-content").hide();

        // make active
        $("#link_a").removeClass("active");
        $("#link_b").addClass("active");
        $("#link_c").removeClass("active");
    });

    $( "#link_c" ).click(function() {

        // show hide
        $('#home-content').hide();
        $("#a-content").hide();
        $("#b-content").hide();
        $("#c-content").show();

        // make active
        $("#link_a").removeClass("active");
        $("#link_b").removeClass("active");
        $("#link_c").addClass("active");
    });

    $("#adam_jones").click(function(){
        $("#a-content").hide();
        $("#form").show();
    })

    $("#anne_smith").click(function(){
        $("#a-content").hide();
        $("#form").show();
    })

});