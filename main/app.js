function addTokens(input, tokens){
    if(typeof input!=="string"){
        throw ("Invalid input");
    }
    if(input.length<6){
        throw ("Input should have at least 6 characters");

    }

    

    for(i=0;i<tokens.length;i++){

        if(typeof tokens[i].tokenName!=="string"){
            throw ("Invalid array format");
        }
    }
    
    
    if(input.includes("..."))
    {
        for(i=0;i<tokens.length;i++){
            input = input.replace("...", "${"+tokens[i].tokenName+"}");
            return input;
        }
    }
    else return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;