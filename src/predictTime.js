import { getEntry } from './loadData'

export function Predict (vallist, expected) {
  vallist = Object.values(vallist)
    var total = 0;
    var count = 0;
    var mult = 1;
    for (var i = 0; i < vallist.length; i++) {
        var item = vallist[i];
        if (vallist[i].length == 2) {
            var diff = parseInt(item[1]) - parseInt(item[0])
            if (diff < (0 - 43200)) {
                diff = diff + 86400
            }
            if (diff > 43200) {
                diff = diff - 86400
            }
            diff = diff * mult
            total += diff
            count += mult
            mult = mult * 1.03
        }
        var avg = total / count
    }
    return expected - avg
  }

function padNum(n){
    return n > 9 ? "" + n: "0" + n;
}

function formatTime(hours,minutes) {
    return hours + ':' + padNum(minutes);
}

export function rawToTime(rawval) {
    var val = Math.floor(rawval)
    var seconds = val % 60
    val = Math.floor(val / 60)
    var minutes = val % 60
    val = Math.floor(val / 60)
    var hours = val % 24
    return formatTime(hours, minutes);
}