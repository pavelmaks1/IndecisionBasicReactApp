const user = {
    name: 'Paul',
    cities: ['Antalia', 'Saint-Pertersburg', 'Hamburg'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }

};
user.printPlacesLived(); 
