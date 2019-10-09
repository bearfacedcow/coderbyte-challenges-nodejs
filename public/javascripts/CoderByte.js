const NumberSet = require('./NumberSet');

module.exports = class CoderByte {

    solve = (arr) => {
        const numToSum = arr.reduce((gt, n) => n > gt ? n : gt );
        const arrList = arr.filter(t => t !== numToSum);

        console.log(`Build ${numToSum} from ${arrList}`);
        let numberList = [];
        numberList.push(new NumberSet());

        return this.buildList(numberList, arrList)
            .filter(t => t.getTotal() === numToSum);
    };

    buildList = (listToBuild, fromList) => {
        while (fromList.length > 0) {
            const num = fromList.shift();
            const newList = listToBuild;

            listToBuild.forEach(item => {
                const numSet = item.clone();
                numSet.addNumber(num);
                newList.push(numSet);
            })

            return this.buildList(newList, fromList);
        }
        return listToBuild;
    }
}


