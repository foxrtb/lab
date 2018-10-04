// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


//example code https://vishnupadmanabhan.com/charts-using-chartjs-and-laravel/
$.getJSON("http://apiv2.foxrtb.com:3000/api/mncount", function (result) {

  var labels = [],enabled=[];
  for (var i = 0; i < result.length; i++) {
//      labels.push(result[i].date_created);
      enabled.push(result[i].enabled);
  }
 //var labels = [],all=[];
  var all=[];
  for (var i = 0; i < result.length; i++) {
      labels.push(result[i].date_created);
      all.push(result[i].all);
  }

  var newstart=[];
  for (var i = 0; i < result.length; i++) {
      labels.push(result[i].date_created);
      newstart.push(result[i].newstart);
  }
  var mnCount = {
    labels : labels,
    datasets : [
      {
        label: 'MNs Enabled',
        borderColor : "rgba(153,255,51,0.4)",
        backgroundColor : "rgba(153,255,51,0.4)",
        data : enabled
      },
      {
        label: 'MNs All',
        borderColor : "rgba(255,153,0,0.4)",
        backgroundColor : "rgba(255,153,0,0.4)",
        data : all
      },
      {
        label: 'New Start',
        borderColor : "rgba(255,0,0.0)",
        backgroundColor : "rgba(255,0,0.0)",
        data : newstart
      }
    ],

  };
  var ctx = document.getElementById('paccoin').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: mnCount,
    options: {
    responsive: true,
    scales:     {
        xAxes: [{
            type: 'time',
            time: {
                  unit: 'day'
            }
        }]
    }
}
});
});

//example code https://vishnupadmanabhan.com/charts-using-chartjs-and-laravel/
$.getJSON("/api/network.json", function (result) {

  var labels = [],netdiff=[];
  for (var i = 0; i < result.length; i++) {
//      labels.push(result[i].date_created);
      netdiff.push(result[i].netdiff);
  }
 //var labels = [],all=[];
  var nethash=[];
  for (var i = 0; i < result.length; i++) {
      labels.push(result[i].date_created);
      nethash.push(result[i].nethash);
  }

  var NetDiff = {
    labels : labels,
    datasets : [
      {
        label: 'NetDiff',
        borderColor : "rgba(153,255,51,0.4)",
        backgroundColor : "rgba(153,255,51,0.4)",
        data : netdiff
      },
    ],
  };
  
  var NetHash= {
    labels : labels,
    datasets : [

      {
        label: 'NetHash',
        borderColor : "rgba(255,153,0,0.4)",
        backgroundColor : "rgba(255,153,0,0.4)",
        data : nethash
      }
    ],
  };

var ctx = document.getElementById('networkDiffChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: NetDiff,
    options: {
    responsive: true,
    scales:     {
        xAxes: [{
            type: 'time',
            time: {
                  unit: 'day'
            }
        }]
    }
}
    });

var ctx = document.getElementById('networkHashChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: NetHash,
    options: {
    responsive: true,
    scales:     {
        xAxes: [{
            type: 'time',
            time: {
                  unit: 'day'
            }
        }]
    }
}
    });

});
$.getJSON("/api/supply.json", function (result) {

  var labels = [],currentsupply=[];
  for (var i = 0; i < result.length; i++) {
//      labels.push(result[i].date_created);
      currentsupply.push(result[i].currentsupply);
  }
 //var labels = [],all=[];
  var locked=[];
  for (var i = 0; i < result.length; i++) {
      labels.push(result[i].date_created);
      locked.push(result[i].locked);
  }

  var supply = {
    labels : labels,
    datasets : [
      {
        label: 'Current Supply',
        borderColor : "#3e95cd" ,
        backgroundColor : "rgba(54, 162, 235, 0.2)",
        fill: false,
        data : currentsupply
      },
      {
        label: 'Locked in Masternodes',
        borderColor : "#c45850",
        backgroundColor : "rgba(255, 99, 132, 0.2)",
        fill: true,
        data : locked
      }
    ],

  };
var ctx = document.getElementById('SupplyChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: supply,
    options: {
    responsive: true,
    scales:     {
        xAxes: [{
            type: 'time',
            time: {
                  unit: 'day'
            }
        }]
    }
}
});
});
  
