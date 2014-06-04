var requirejs = require('requirejs');

var DashboardController  = requirejs('extensions/controllers/dashboard');
var ErrorController      = requirejs('common/controllers/error');

var BarChartWithNumberModule      = requirejs('common/modules/bar_chart_with_number');
//var ComparisonModule              = requirejs('common/modules/comparison');
var CompletionNumbersModule       = requirejs('common/modules/completion_numbers');
var KPIModule                     = requirejs('common/modules/kpi');
var ListModule                    = requirejs('common/modules/list');
var MultiStatsModule              = requirejs('common/modules/multi_stats');
var UserSatisfactionModule        = requirejs('common/modules/user_satisfaction');

var AvailabilityModule            = require('./modules/availability');
var CompletionRateModule          = require('./modules/completion_rate');
var GroupedTimeseriesModule       = require('./modules/grouped_timeseries');
var JourneyModule                 = require('./modules/journey');
var TabModule                     = require('./modules/tab');
var TableModule                   = require('./modules/table');
var UserSatisfactionGraphModule   = require('./modules/user_satisfaction_graph');
var VisitorsRealtimeModule        = require('./modules/visitors-realtime');

module.exports = function () {
  return {
    dashboard: DashboardController,
    error: ErrorController,
    modules: {
      availability:           AvailabilityModule,
      bar_chart_with_number:  BarChartWithNumberModule,
      //comparison:             ComparisonModule,
      completion_numbers:     CompletionNumbersModule,
      completion_rate:        CompletionRateModule,
      grouped_timeseries:     GroupedTimeseriesModule,
      journey:                JourneyModule,
      kpi:                    KPIModule,
      list:                   ListModule,
      multi_stats:            MultiStatsModule,
      tab:                    TabModule,
      table:                  TableModule,
      user_satisfaction:      UserSatisfactionModule,
      user_satisfaction_graph: UserSatisfactionGraphModule,
      realtime:               VisitorsRealtimeModule
    }
  };
};
