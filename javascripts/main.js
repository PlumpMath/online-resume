(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74946040-1', 'auto');
ga('send', 'pageview');

// Load the Visualization API
google.load('visualization', '1.0', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawCharts);

// Resize charts according to the window size.
window.onresize = drawCharts;

function drawRadar() {
    var margin = {
            top: 20,
            right: 100,
            bottom: 25,
            left: 100
        },
        width = Math.min(450, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    //////////////////////////////////////////////////////////////
    ////////////////////////// Data //////////////////////////////
    //////////////////////////////////////////////////////////////

    var data = [
        [{
            axis: "Micro-services",
            value: 0.80
        }, {
            axis: "Distributed systems",
            value: 0.95
        }, {
            axis: "Functional language",
            value: 0.95
        }, {
            axis: "Up-skilling",
            value: 0.80
        }, {
            axis: "Agile team",
            value: 0.75
        }, {
            axis: "Digital transformation",
            value: 0.80
        }, {
            axis: "Information system",
            value: 0.75
        }, ]
    ];
    //////////////////////////////////////////////////////////////
    //////////////////// Draw the Chart //////////////////////////
    //////////////////////////////////////////////////////////////

    var color = d3.scale.ordinal()
        .range(["#CC333F"]);

    var radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 1,
        levels: 5,
        roundStrokes: true,
        color: color
    };
    //Call function to draw the Radar chart
    RadarChart("#radarChart", data, radarChartOptions);
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawRegion() {
    var data = new google.visualization.arrayToDataTable([
        ['Country', 'Enthusiasm'],
        ['Germany', 1],
        ['United Kingdom', 1],
        ['Germany', 1],
        ['France', 1],
        ['United Kingdom', 1],
        ['Italy', 1],
        ['Spain', 1],
        ['Ukraine', 1],
        ['Poland', 1],
        ['Romania', 1],
        ['Netherlands', 1],
        ['Belgium', 1],
        ['Greece', 1],
        ['Czech Republic', 1],
        ['Portugal', 1],
        ['Hungary', 1],
        ['Sweden', 1],
        ['Austria', 1],
        ['Switzerland', 1],
        ['Bulgaria', 1],
        ['Denmark', 1],
        ['Finland', 1],
        ['Slovakia', 1],
        ['Norway', 1],
        ['Ireland', 1],
        ['Croatia', 1],
        ['Lithuania', 1],
        ['Albania', 1],
        ['Macedonia', 1],
        ['Montenegro', 1],
        ['Luxembourg', 1],
        ['Malta', 1],
        ['Andorra', 1],
        ['Liechtenstein', 1],
        ['Monaco', 1],
        ['San Marino', 1],
        ['United States', 1],
        ['Canada', 1],
        ['Moldavia', 1],
        ['South Korea', 1],
        ['France', 1],
        ['China', 1],
        ['Laos', 1],
        ['Thailand', 1],
        ['Vietnam', 1],
        ['Japan', 1],
        ['Taiwan', 1],
        ['Philippines', 1],
        ['Indonesia', 1],
        ['Australia', 1],
        ['New Zealand', 1],
        ['Papua New Guinea', 1],
        ['Cambodia', 1]
    ]);


    var options = {
        'backgroundColor': {
            fill: 'transparent'
        },
        legend: 'none'
    };

    var regions = new google.visualization.GeoChart(document.getElementById('regions'));
    regions.draw(data, options);
}

function drawTimeline() {
    var data = new google.visualization.DataTable();
    data.addColumn('datetime', 'start');
    data.addColumn('datetime', 'end');
    data.addColumn('string', 'content');
    data.addColumn('string', 'type');
    data.addRows([
        [new Date(2009, 7), , 'Baccalauréat S<br><img src="images/certificate-flat.svg" style="width:32px; height:32px;">', 'box'],
        [new Date(2009, 9, 1), new Date(2011, 6, 31), '<img src="images/stanislas.png" style="width:32px; height:32px; vertical-align:middle;"> Integrated prep classes', 'range'],
        [new Date(2011, 9, 1), new Date(2014, 7, 31), '<img src="images/isep.png" style="height:32px; vertical-align:middle;"> Engineering studies: computer science, software engineering', 'range'],
        [new Date(2012, 7, 1), new Date(2012, 12, 31), '<img src="images/itelios.png" style="height:32px; vertical-align:middle;"> C# developer', 'range'],
        [new Date(2013, 9, 1), new Date(2014, 1, 31), '<img src="images/nctu.png" style="height:32px; vertical-align:middle;"> Semester abroad', 'range'],
        [new Date(2014, 2, 1), new Date(2014, 7, 31), '<img src="images/orange.jpg" style="height:32px; vertical-align:middle;"> Java EE / Flex developer', 'range'],
        [new Date(2014, 7, 31), , 'Engineering degree<br><img src="images/grad.svg" style="width:32px; height:32px;">', 'box'],
        [new Date(2014, 9, 1), new Date(2015, 12, 31), '<img src="images/enst.jpg" style="width: 32px; height: 32px; vertical-align:middle;"> Advanced master', 'range'],
        [new Date(2015, 7, 1), new Date(2015, 12, 31), '<img src="images/transatel.png" style="width: 32px; height: 32px; vertical-align:middle;"> Java EE / Java 8 developer', 'range'],
        [new Date(2015, 12, 31), , 'Advanced master degree<br><img src="images/grad.svg" style="width:32px; height:32px;">', 'box'],
        [new Date(), , '<img src="images/adikteev.png" style="height:32px; vertical-align: middle"> 😀', 'floatingRange'],
    ]);

    var max = new Date();
    max.setMonth(max.getMonth() + 18);
    var start = new Date(2012, 7);
    var end = new Date(2017, 1);

    var options = {
        'width': 1500,
        'height': 'auto',
        'minHeight': 350,
        "min": new Date(2008, 6, 15),
        "max": max,
        "zoomMin": 1000 * 60 * 60 * 24 * 365,
        "zoomMax": 1000 * 60 * 60 * 24 * 365 * 15,
        'showCurrentTime': 'true',
        "start": start,
        "end": end
    };

    var timeline = new links.Timeline(document.getElementById('timeline'));
    timeline.draw(data, options);
}

function drawCharts() {
    drawRadar();
    drawRegion();
    drawTimeline();
}
