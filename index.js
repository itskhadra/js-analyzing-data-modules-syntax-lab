
function combineUsers(...arrays) {
  const users = [].concat(...arrays);
  const merge_date = Date.today().toString("M/d/yyyy");

  return {
    users,
    merge_date
  };
}

module.exports = {
  combineUsers
};
