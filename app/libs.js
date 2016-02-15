/**
 * Created by administrator on 2/15/16.
 */
var libs = (function(){
    return {
        test: (function () {
            return moment.tz("2013-11-18 11:55", "America/Toronto").format();

        }),

        moment: moment
    }
})();
