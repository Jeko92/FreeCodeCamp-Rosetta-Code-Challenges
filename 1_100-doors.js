const getFinalOpenedDoors = (numDoors) => {
    const doors = Array(numDoors).fill(false);

    let counter = 1;
    while (counter <= numDoors) {
        for (let i = counter; i <= numDoors; i+= counter){
            doors[i] = !doors[i];
        }
        counter ++;
    }

    let doorNums = [];
    for (let i = 0; i <= numDoors; i++){
        if(doors[i] === true){
            doorNums.push(i)
        }
    }
    console.log(doorNums);
    return doorNums;
}

getFinalOpenedDoors(100);