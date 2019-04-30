export const throwErr = function(err) {
    if (!err) {
        return;
    }
    let errs = [ err ];
    if (typeof err !== "string") {
        errs = [];
        err.forEach(err => errs.push(`Pole '${err}' nie może być puste`));
    }
    this.set('errMessage', errs || err);
    setTimeout(() =>
        this.set('errMessage', ''), 5000)
    return true;
}
export const validateInputs = (model) => {
    const emptyFields = [];
    model.eachAttribute(name => {
        if (!model.get(`${name}`)) {
            let polishName = '';
            switch (name) {
                case 'name': 
                polishName = 'Nazwa';
                break;
                case 'city':
                polishName = 'Miasto'
                break;
                case 'street':
                polishName = 'Ulica';
                break;
                case 'number':
                polishName = 'Numer';
                break;
                case 'hoursFrom':
                polishName = 'Otwarte od';
                break;
                case 'hoursTo':
                polishName = 'Otwarte do';
                break;
                case 'price':
                polishName = 'Cena';
                break;
            }
            emptyFields.push(polishName);
        }
    });
    if (!emptyFields.length) {
        return null;
    } else {
        return emptyFields;
    }
}
