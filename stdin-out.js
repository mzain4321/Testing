process.stdin.on('data',(chunk)=>{
    const input=chunk.toString().trim();
    if(input=='quit'){
        process.exit();
    }

    try{
        const value= eval(input);
console.log(`${value}`);
    }catch(exception){
        console.log('Enter the valid equation...');
    }


    process.stdout.write('Enter equation: ');
});

process.stdout.write('Enter equation: ');