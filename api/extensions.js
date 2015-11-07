module.exports = {
    transliterate: function(word) {
        var answer = "";
        A = new Array();

        A["Ё"] = "YO";
        A["Й"] = "I";
        A["Ц"] = "TS";
        A["У"] = "U";
        A["К"] = "K";
        A["Е"] = "E";
        A["Н"] = "N";
        A["Г"] = "G";
        A["Ш"] = "SH";
        A["Щ"] = "SCH";
        A["З"] = "Z";
        A["Х"] = "H";
        A["Ъ"] = "'";
        A["ё"] = "yo";
        A["й"] = "i";
        A["ц"] = "ts";
        A["у"] = "u";
        A["к"] = "k";
        A["е"] = "e";
        A["н"] = "n";
        A["г"] = "g";
        A["ш"] = "sh";
        A["щ"] = "sch";
        A["з"] = "z";
        A["х"] = "h";
        A["ъ"] = "'";
        A["Ф"] = "F";
        A["Ы"] = "I";
        A["В"] = "V";
        A["А"] = "A";
        A["П"] = "P";
        A["Р"] = "R";
        A["О"] = "O";
        A["Л"] = "L";
        A["Д"] = "D";
        A["Ж"] = "ZH";
        A["Э"] = "E";
        A["ф"] = "f";
        A["ы"] = "i";
        A["в"] = "v";
        A["а"] = "a";
        A["п"] = "p";
        A["р"] = "r";
        A["о"] = "o";
        A["л"] = "l";
        A["д"] = "d";
        A["ж"] = "zh";
        A["э"] = "e";
        A["Я"] = "YA";
        A["Ч"] = "CH";
        A["С"] = "S";
        A["М"] = "M";
        A["И"] = "I";
        A["Т"] = "T";
        A["Ь"] = "'";
        A["Б"] = "B";
        A["Ю"] = "YU";
        A["я"] = "ya";
        A["ч"] = "ch";
        A["с"] = "s";
        A["м"] = "m";
        A["и"] = "i";
        A["т"] = "t";
        A["ь"] = "'";
        A["б"] = "b";
        A["ю"] = "yu";

        for (i in word) {
            if (word.hasOwnProperty(i)) {
                if (A[word[i]] === undefined) {
                    answer += word[i];
                } else {
                    answer += A[word[i]];
                }
            }
        }
        return answer;
    },

    distance: function(lon1, lat1, lon2, lat2) {
        var R = 6371000; // Radius of the earth in km
        var dLat = (lat2 - lat1) * Math.PI / 180; // deg2rad below
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a =
            0.5 - Math.cos(dLat) / 2 +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            (1 - Math.cos(dLon)) / 2;

        return R * 2 * Math.asin(Math.sqrt(a));
    },

    //Pad given value to the left with "0"
    addLeadZero: function(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    }
}
