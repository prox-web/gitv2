/**
 * Created by msant on 14-11-2017.
 */

$(window).on('load', function(){
        loadmyxml("progress");
    });

    function retrive_xml_data_status(xmlfile) {
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        alert(xmlfile+".xml");
        xmlhttp.open("GET", xmlfile+".xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        var task_table1 = "";
        var task_table2 = "";
        var issue_table1 = "";
        var issue_table2 = "";

        task_table1 = "<thead><TR style='text-align:center;font-weight: bold;'><th>FEATURE</th><th>DESCRIPTION</th><th>STATUS</th></TR></thead>";

        var x = xmlDoc.getElementsByTagName("TASK");
        for (i = 0; i < x.length; i++) {
            task_table2 = task_table2 + '<tr><td>' + (x[i].getElementsByTagName("FEATURE")[0].childNodes[0].nodeValue) + '</td><td>' + x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName("STATUS")[0].childNodes[0].nodeValue + '</td></tr>';
        }
        $("#xml_tasks").append("<table>" + task_table1 + "<tbody>"+ task_table2 + "</tbody></table>");

        issue_table1 = "<thead><TR style='text-align:center;font-weight: bold;'><th>FEATURE</th><th>DESCRIPTION</th><th>STATUS</th></TR></thead>";
        var y = xmlDoc.getElementsByTagName("ISSUE");
        for (i = 0; i < y.length; i++) {
            issue_table2 = issue_table2 + '<tr><td>' + (y[i].getElementsByTagName("FEATURE")[0].childNodes[0].nodeValue) + '</td><td>' + y[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue + '</td><td>' + y[i].getElementsByTagName("STATUS")[0].childNodes[0].nodeValue + '</td></tr>';
        }
        $("#xml_issues").append("<table>" + issue_table1 + "<tbody>"+ issue_table2 + "</tbody></table>");

    }

    function loadmyxml(xmlfile){

        if(xmlfile === "progess"){
            alert(xmlfile+".xml");
            retrive_xml_data_status(xmlfile);
        }

    }
    
    $(document).ready(function() {
        $("#xml_tasks").fadeIn();
        $(".tab").click(function () {
            $(".tab").removeClass("active");
            $(this).addClass("active");

                $(".xml-content").hide();
                $("#xml_" + event.target.id).fadeIn();

        })
    });

$(document).ready(function() {
    // grab the initial top offset of the navigation
    var stickyNavTop = $('.main-header').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('.main-header').addClass('sticky');
            $('.TopMenu').hide()
        } else {
            $('.main-header').removeClass('sticky');
            $('.TopMenu').show();
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });

});