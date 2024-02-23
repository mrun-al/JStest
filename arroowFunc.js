const menu = (day) => {
    switch (day) {
      case 'monday':
        console.log("Monday's Menu: Pizza");
        break;
      case 'tuesday':
        console.log("Tuesday's Menu: Burger");
        break;
      case 'wednesday':
        console.log("Wednesday's Menu: Rice");
        break;
      case 'thursday':
        console.log("Thursday's Menu: Fish");
        break;
      case 'friday':
        console.log("Friday's Menu: Chicken");
        break;
      case 'saturday':
        console.log("Saturday's Menu: Sandwitch");
        break;
      case 'sunday':
        console.log("Sunday's Menu: Pasta");
        break;
      default:
        console.log("Invalid day entered.");
    }
  };
  
  menu('monday');
  menu('sunday');
  