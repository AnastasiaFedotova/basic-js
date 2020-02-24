module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        if (Array.isArray(arr)) {
            if (arr.length == 0) depth = 1;
            else {
                arr.forEach(item => {
                    let depthItem = 1;
                    depthItem += this.calculateDepth(item);
                    if(depthItem > depth) depth = depthItem;
                })
            }
        }
        return depth;
    }
}