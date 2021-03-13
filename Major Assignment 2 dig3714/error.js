
var mainMenu;
var userString;

do {
    //MAIN MENU - User enters number.
    var mainMenu = prompt("Enter 1, 2, 3 or \"EXIT\"")

    switch (mainMenu)

        { case "1": 
        userString = prompt("Please enter a phrase."); 
            if (userString == "") {
                console.log("You need to enter a phrase.");
                userString = prompt("Please enter a phrase."); 
            }
                break;

            case "2": 
            var robotLan;
            console.log("String Converted");
            break;

            case "3": 
            console.log("ROBOT Language: ")
            if (userString == "") {
                console.log("You need to convert your phrase in program 2")
                mainMenu = prompt("Enter 1, 2, 3 or \"EXIT\"")
                break;
            }
        }
        

}while(mainMenu != "EXIT")

if (mainMenu == "EXIT"); {
    console.log("Thanks for using the ROBOT Language Converter!");
}