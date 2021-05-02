/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
    let map = new Map();
    for(const employee of employees) {
        map.set(employee.id, employee);
    }
    function dfs(id) {
        const target = map.get(id);
        let res = target.importance;
        const subordinates = target.subordinates;
        for(const subordinate of subordinates) {
            res += dfs(subordinate);
        }
        return res;
    }
    return dfs(id);

};
//dfs
//哈希表