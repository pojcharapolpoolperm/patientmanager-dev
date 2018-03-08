const moment = require('moment');

module.exports = {
  // selected option
  select: function (selected, options) {
    return options.fn(this).replace(new RegExp(' value=\"' + selected + '\"'), '$&selected="selected"').replace(new RegExp('>' + selected + '</option>'), 'selected="selected"$&');
  },
  formatDate: function (date, format) {
    return moment(date).format(format);
  },
  setChecked: function (value, currentValue) {
    if (value === currentValue) {
      return "checked"
    } else {
      return "";
    }
  },
  ifAllExist: function(v1,v2, v3, v4){
    if(v1 && v2 && v3 && v4){
      return "<p>ฟอร์มทุกฟอร์มได้ถูกบันทึกแล้ว</p>";
    } else {
      return "";
    }
  },
  tableValue: function(value, dbValue){
    if(value === dbValue){
      return ('/img/check.png');
    } else {
      return '';
    }
  }
}