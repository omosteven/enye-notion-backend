class Util { /**
    * @description
    *
    * @param {Object}
    *
    * @return {String} Returned messsage
    */

    static validateInput(check, data) {
        var count = 0;

        for (const key in data) {
            if (check.includes(key)) {
                count += 1;
            }
        }
        if ((count === Object.keys(check).length) & (count !== 0)) {
            return true;
        } else {
            return false;
        }
    }

}

module.exports = Util;
